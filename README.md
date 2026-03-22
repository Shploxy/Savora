# Savora

Savora is a static recipe platform MVP built with HTML, CSS, and vanilla JavaScript, with Supabase handling authentication, database storage, moderation, and engagement data.

The project is intentionally lightweight: it can be deployed as a static site on Vercel, Netlify, GitHub Pages, or any similar host, while keeping the product experience polished and scalable for future backend expansion.

## Features

- Public homepage with featured recipes, categories, smart filtering, trending recipes, and top creators
- Recipe detail page with ingredients, steps, ratings, comments, and favorite actions
- Email/password authentication with Supabase Auth
- Favorites stored per authenticated user in Supabase
- Recipe submission workflow with pending moderation
- Admin dashboard for approving or rejecting recipes
- Ratings and comments tied to authenticated users
- Search and filtering by time, difficulty, category, and ingredients
- Monetization-ready ad placeholders and engagement tracking scaffolding
- Responsive UI with loading states, empty states, toast feedback, and mobile navigation

## Tech Stack

- Frontend: HTML, CSS, vanilla JavaScript
- Backend/Auth/Database: Supabase

## Project Structure

```text
.
|-- admin.html
|-- index.html
|-- recipe.html
|-- style.css
|-- script.js
|-- supabase-config.js
|-- supabase-schema.sql
`-- README.md
```

## Local Development

This project should be run through a local static server rather than opened with `file://`.

Example options:

- VS Code Live Server
- `npx serve .`
- `python -m http.server`

Then open `index.html` through the local server URL.

## Supabase Setup

1. Create a Supabase project.
2. Open `supabase-config.js`.
3. Replace the placeholder `url` and `anonKey` values with your real project values.
4. Keep only the public anon key in the frontend.
5. Never expose the Supabase service role key in client-side code.

## Apply the Database Schema

1. Open the Supabase SQL Editor.
2. Copy the contents of `supabase-schema.sql`.
3. Run the script.
4. Confirm the tables, policies, trigger, and view are created successfully.

Main schema components:

- `users`
- `recipes`
- `favorites`
- `ratings`
- `comments`
- `recipe_views`
- `creator_earnings`
- `creator_performance` view

## Final Setup Steps

1. Enable Email/Password authentication in Supabase Auth.
2. Fill in `supabase-config.js` with your production-ready project URL and anon key.
3. Apply `supabase-schema.sql`.
4. Create at least one normal user account through the app.
5. Promote one user to admin.
6. Test the public, user, and admin flows before launch.

## Promote an Admin User

1. Sign up normally through the app or through Supabase Auth.
2. In the Supabase SQL Editor, run:

```sql
update public.users
set is_admin = true
where email = 'your-admin-email@example.com';
```

3. Refresh the app.
4. The admin link should appear for that user.

## Deployment

This app is deployment-friendly as a static frontend. No server runtime is required for the app itself.

### Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Use the default static site settings.
4. Ensure `supabase-config.js` contains your production Supabase URL and anon key.
5. Deploy.

### Deploy to Netlify

1. Push the project to a Git repository.
2. Import the repository into Netlify.
3. Leave the build command empty.
4. Set the publish directory to the project root.
5. Ensure `supabase-config.js` contains your production Supabase URL and anon key.
6. Deploy.

### Deployment Notes

- Keep asset references relative.
- Keep HTML, CSS, and JavaScript file names stable unless you update the page references too.
- Re-run `supabase-schema.sql` in the target Supabase project if you are deploying against a fresh production database.
- Confirm all Row Level Security policies are enabled in the deployed database.

## Manual QA Checklist

Use this checklist before launch:

### Public Flow

- [ ] Homepage loads without console-breaking errors
- [ ] Approved recipes render on the homepage
- [ ] Search and filters update results correctly
- [ ] No-results state appears when filters remove all matches
- [ ] Recipe cards handle missing images gracefully
- [ ] Trending recipes and top creators sections render cleanly
- [ ] Recipe detail page loads directly from a shared URL like `recipe.html?id=1`

### Authentication Flow

- [ ] Signup works for a new user
- [ ] Login works for an existing user
- [ ] Logout returns the UI to the signed-out state
- [ ] Auth modal closes correctly by button, backdrop, and Escape key
- [ ] Loading and error states look consistent during auth actions

### User Actions

- [ ] Favorites can be added and removed
- [ ] Saved recipes section updates correctly
- [ ] Duplicate clicks do not create duplicate favorite actions
- [ ] Recipe submission validates required fields clearly
- [ ] Recipe submission cannot be spam-clicked into duplicate inserts
- [ ] Ratings save correctly and update the average
- [ ] Comments save correctly and refresh into the page

### Admin Flow

- [ ] Admin link appears only for admin users
- [ ] Pending recipes appear in the admin dashboard
- [ ] Approve action publishes the recipe publicly
- [ ] Reject action removes the recipe from the pending list
- [ ] Non-admin users cannot access working moderation controls

### Responsive UX

- [ ] Navigation works on mobile widths
- [ ] Mobile menu opens and closes cleanly
- [ ] Forms remain usable on narrow screens
- [ ] Toasts do not cover critical controls on small screens
- [ ] Recipe detail layout remains readable on mobile

## Known Limitations

- Image uploads still use URLs rather than a managed storage flow
- There is no password reset UI yet
- There is no author self-editing flow for submitted recipes
- Search relevance is frontend-driven and not yet backed by a server-side search index
- "Top creators" and earnings logic are still MVP scaffolding, not a real payout system

## Future Roadmap

- Supabase Storage for recipe image uploads
- Password reset and profile management
- Author editing and submission history
- Pagination or incremental loading for large recipe catalogs
- Comment moderation and abuse protection
- Search suggestions and autocomplete
- Creator dashboards and monetization reporting
- Analytics for admins and creators

## Launch Checklist

- [ ] `supabase-config.js` updated with production values
- [ ] `supabase-schema.sql` applied in the correct Supabase project
- [ ] Email/Password auth enabled
- [ ] At least one admin promoted
- [ ] Public recipe browsing tested
- [ ] Submission and moderation tested
- [ ] Favorites, ratings, and comments tested
- [ ] Mobile navigation and modal behavior tested
- [ ] Broken image fallback verified
- [ ] Final smoke test completed on the deployed URL


6Qxr4bBf3rd4lzQz