create extension if not exists pgcrypto;

alter table if exists public.users
  add column if not exists is_admin boolean not null default false;

alter table if exists public.recipes
  drop constraint if exists recipes_status_check;

alter table if exists public.recipes
  add constraint recipes_status_check
  check (status in ('pending', 'approved', 'rejected'));

alter table if exists public.comments
  add column if not exists author_name text not null default '';

alter table if exists public.recipes
  add column if not exists author_name text not null default 'Savora Kitchen';

create table if not exists public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  email text unique not null,
  is_admin boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.recipes (
  id bigint generated always as identity primary key,
  author_id uuid references public.users (id) on delete set null,
  author_name text not null default 'Savora Kitchen',
  title text not null,
  description text not null,
  image_url text not null,
  time_minutes integer not null check (time_minutes > 0),
  difficulty text not null check (difficulty in ('Easy', 'Medium', 'Advanced')),
  category text not null,
  ingredients jsonb not null default '[]'::jsonb,
  instructions jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.favorites (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.users (id) on delete cascade,
  recipe_id bigint not null references public.recipes (id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now()),
  unique (user_id, recipe_id)
);

create table if not exists public.ratings (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.users (id) on delete cascade,
  recipe_id bigint not null references public.recipes (id) on delete cascade,
  rating_value integer not null check (rating_value between 1 and 5),
  created_at timestamptz not null default timezone('utc', now()),
  unique (user_id, recipe_id)
);

create table if not exists public.comments (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.users (id) on delete cascade,
  recipe_id bigint not null references public.recipes (id) on delete cascade,
  author_name text not null default '',
  comment_text text not null check (char_length(trim(comment_text)) > 0),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.recipe_views (
  id bigint generated always as identity primary key,
  recipe_id bigint not null references public.recipes (id) on delete cascade,
  user_id uuid references public.users (id) on delete set null,
  viewed_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.creator_earnings (
  id bigint generated always as identity primary key,
  creator_user_id uuid not null references public.users (id) on delete cascade,
  recipe_id bigint references public.recipes (id) on delete cascade,
  earning_source text not null default 'future_ads',
  amount_cents integer not null default 0,
  reference_note text,
  created_at timestamptz not null default timezone('utc', now())
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email)
  values (new.id, coalesce(new.email, ''));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.users enable row level security;
alter table public.recipes enable row level security;
alter table public.favorites enable row level security;
alter table public.ratings enable row level security;
alter table public.comments enable row level security;
alter table public.recipe_views enable row level security;
alter table public.creator_earnings enable row level security;

drop policy if exists "Users can view own profile" on public.users;
create policy "Users can view own profile"
on public.users for select
using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.users;
-- No self-service profile update policy is added in this MVP.
-- This avoids accidentally allowing privilege-related fields to be changed
-- from the client before a dedicated profile management flow exists.

drop policy if exists "Admins can view all profiles" on public.users;
create policy "Admins can view all profiles"
on public.users for select
to authenticated
using (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
);

drop policy if exists "Approved recipes are public" on public.recipes;
create policy "Approved recipes are public"
on public.recipes for select
using (status = 'approved');

drop policy if exists "Authenticated users can submit recipes" on public.recipes;
create policy "Authenticated users can submit recipes"
on public.recipes for insert
to authenticated
with check (
  author_id = auth.uid()
  and status = 'pending'
  and featured = false
);

drop policy if exists "Authors can view own pending recipes" on public.recipes;
create policy "Authors can view own pending recipes"
on public.recipes for select
to authenticated
using (author_id = auth.uid());

drop policy if exists "Admins can review all recipes" on public.recipes;
create policy "Admins can review all recipes"
on public.recipes for select
to authenticated
using (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
);

drop policy if exists "Admins can moderate recipes" on public.recipes;
create policy "Admins can moderate recipes"
on public.recipes for update
to authenticated
using (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
)
with check (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
);

drop policy if exists "Users manage own favorites" on public.favorites;
create policy "Users manage own favorites"
on public.favorites for all
to authenticated
using (auth.uid() = user_id)
with check (
  auth.uid() = user_id
  and exists (
    select 1
    from public.recipes
    where recipes.id = favorites.recipe_id
      and recipes.status = 'approved'
  )
);

drop policy if exists "Ratings are public for approved recipes" on public.ratings;
create policy "Ratings are public for approved recipes"
on public.ratings for select
using (
  exists (
    select 1
    from public.recipes
    where recipes.id = ratings.recipe_id
      and recipes.status = 'approved'
  )
);

drop policy if exists "Users manage own ratings" on public.ratings;
create policy "Users manage own ratings"
on public.ratings for all
to authenticated
using (auth.uid() = user_id)
with check (
  auth.uid() = user_id
  and exists (
    select 1
    from public.recipes
    where recipes.id = ratings.recipe_id
      and recipes.status = 'approved'
  )
);

drop policy if exists "Comments are public for approved recipes" on public.comments;
create policy "Comments are public for approved recipes"
on public.comments for select
using (
  exists (
    select 1
    from public.recipes
    where recipes.id = comments.recipe_id
      and recipes.status = 'approved'
  )
);

drop policy if exists "Users create comments" on public.comments;
create policy "Users create comments"
on public.comments for insert
to authenticated
with check (
  auth.uid() = user_id
  and char_length(trim(comment_text)) > 0
  and exists (
    select 1
    from public.recipes
    where recipes.id = comments.recipe_id
      and recipes.status = 'approved'
  )
);

drop policy if exists "Users delete own comments" on public.comments;
create policy "Users delete own comments"
on public.comments for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Anyone can insert recipe views" on public.recipe_views;
create policy "Anyone can insert recipe views"
on public.recipe_views for insert
with check (
  exists (
    select 1
    from public.recipes
    where recipes.id = recipe_views.recipe_id
      and recipes.status = 'approved'
  )
);

drop policy if exists "Admins can view recipe views" on public.recipe_views;
create policy "Admins can view recipe views"
on public.recipe_views for select
to authenticated
using (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
);

drop policy if exists "Admins can view creator earnings" on public.creator_earnings;
create policy "Admins can view creator earnings"
on public.creator_earnings for select
to authenticated
using (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
);

drop policy if exists "Admins manage creator earnings" on public.creator_earnings;
create policy "Admins manage creator earnings"
on public.creator_earnings for all
to authenticated
using (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
)
with check (
  exists (
    select 1
    from public.users admin_user
    where admin_user.id = auth.uid()
      and admin_user.is_admin = true
  )
);

create or replace view public.creator_performance
with (security_invoker = true) as
select
  r.author_id as creator_user_id,
  r.author_name,
  count(distinct r.id) as approved_recipe_count,
  count(rv.id) as total_views,
  count(rt.id) as total_ratings,
  coalesce(avg(rt.rating_value::numeric), 0)::numeric(10,2) as average_rating,
  0::integer as estimated_earnings_cents
from public.recipes r
left join public.recipe_views rv on rv.recipe_id = r.id
left join public.ratings rt on rt.recipe_id = r.id
where r.status = 'approved'
group by r.author_id, r.author_name;

insert into public.recipes
  (author_name, title, description, image_url, time_minutes, difficulty, category, ingredients, instructions, featured, status)
values
  (
    'Savora Kitchen',
    'Citrus Glazed Salmon Bowl',
    'Roasted salmon with jasmine rice, avocado, cucumber ribbons, and a bright orange-soy glaze.',
    'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    25,
    'Easy',
    'Main Courses',
    '["salmon","rice","avocado","cucumber","orange","soy sauce"]'::jsonb,
    '["Roast the salmon until just cooked through and lightly caramelized at the edges.","Whisk orange juice, soy sauce, garlic, and a touch of honey into a quick glaze.","Warm the rice and arrange it in bowls with sliced avocado and cucumber ribbons.","Finish with the glazed salmon, fresh herbs, and a final spoonful of citrus sauce."]'::jsonb,
    true,
    'approved'
  ),
  (
    'Savora Kitchen',
    'Whipped Ricotta Toast Trio',
    'Crisp sourdough topped with whipped ricotta, honeyed figs, herbs, and toasted seeds.',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
    15,
    'Easy',
    'Breakfast',
    '["ricotta","bread","figs","honey","thyme","seeds"]'::jsonb,
    '["Toast thick slices of sourdough until crisp and golden.","Whip ricotta with olive oil, sea salt, and black pepper until airy.","Spread the ricotta generously, then top with sliced figs and a drizzle of honey.","Finish with thyme leaves, toasted seeds, and flaky salt before serving."]'::jsonb,
    true,
    'approved'
  ),
  (
    'Savora Kitchen',
    'Roasted Tomato Basil Orzo',
    'A light but satisfying pasta-style dish with roasted cherry tomatoes, basil, and parmesan.',
    'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    30,
    'Easy',
    'Light Meals',
    '["orzo","tomatoes","basil","parmesan","garlic"]'::jsonb,
    '["Roast cherry tomatoes with garlic and olive oil until soft and lightly blistered.","Cook the orzo until tender, then reserve a splash of the cooking water.","Fold the roasted tomatoes into the orzo with parmesan and fresh basil.","Loosen with the reserved water and serve warm with extra basil on top."]'::jsonb,
    true,
    'approved'
  ),
  (
    'Savora Kitchen',
    'Herbed Chicken Skillet',
    'Golden pan-seared chicken with lemon butter sauce, tender greens, and crispy potatoes.',
    'https://images.unsplash.com/photo-1604908176997-43178f8f0d49?auto=format&fit=crop&w=900&q=80',
    40,
    'Medium',
    'Dinner',
    '["chicken","lemon","butter","potatoes","parsley"]'::jsonb,
    '["Sear the chicken until deeply golden, then transfer to finish cooking gently.","Roast or pan-crisp the potatoes until they are browned and tender.","Build a quick pan sauce with lemon juice, butter, garlic, and chopped parsley.","Serve the chicken over greens with the potatoes and spoon the sauce over everything."]'::jsonb,
    false,
    'approved'
  ),
  (
    'Savora Kitchen',
    'Cardamom Pear Tart',
    'A bakery-style dessert with poached pears, warm spice, and a crisp buttery crust.',
    'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80',
    60,
    'Advanced',
    'Desserts',
    '["pear","cardamom","flour","butter","cream"]'::jsonb,
    '["Prepare and chill the tart dough until firm enough to roll cleanly.","Poach the pears with cardamom until just tender, then cool and slice them.","Blind bake the crust, add the filling, and arrange the pears in an elegant pattern.","Bake until golden, then brush with glaze and cool completely before slicing."]'::jsonb,
    false,
    'approved'
  ),
  (
    'Savora Kitchen',
    'Matcha Coconut Chia Glass',
    'A chilled layered drink-snack with matcha, coconut milk, chia seeds, and vanilla.',
    'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80',
    10,
    'Easy',
    'Drinks',
    '["matcha","coconut milk","chia seeds","vanilla"]'::jsonb,
    '["Whisk matcha with a small splash of warm water until smooth.","Combine coconut milk, vanilla, and chia seeds in a chilled glass jar.","Let the chia mixture thicken, then pour the matcha layer on top.","Serve cold with extra coconut flakes or a light dusting of matcha."]'::jsonb,
    false,
    'approved'
  );

-- After creating your first admin account, promote it with:
-- update public.users set is_admin = true where email = 'your-admin-email@example.com';
