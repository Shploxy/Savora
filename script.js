const fallbackRecipes = [
  {
    id: 1,
    title: "Citrus Glazed Salmon Bowl",
    description:
      "Roasted salmon with jasmine rice, avocado, cucumber ribbons, and a bright orange-soy glaze.",
    time: 25,
    difficulty: "Easy",
    category: "Main Courses",
    ingredients: ["salmon", "rice", "avocado", "cucumber", "orange", "soy sauce"],
    instructions: [
      "Roast the salmon until just cooked through and lightly caramelized at the edges.",
      "Whisk orange juice, soy sauce, garlic, and a touch of honey into a quick glaze.",
      "Warm the rice and arrange it in bowls with sliced avocado and cucumber ribbons.",
      "Finish with the glazed salmon, fresh herbs, and a final spoonful of citrus sauce.",
    ],
    featured: true,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Whipped Ricotta Toast Trio",
    description:
      "Crisp sourdough topped with whipped ricotta, honeyed figs, herbs, and toasted seeds.",
    time: 15,
    difficulty: "Easy",
    category: "Breakfast",
    ingredients: ["ricotta", "bread", "figs", "honey", "thyme", "seeds"],
    instructions: [
      "Toast thick slices of sourdough until crisp and golden.",
      "Whip ricotta with olive oil, sea salt, and black pepper until airy.",
      "Spread the ricotta generously, then top with sliced figs and a drizzle of honey.",
      "Finish with thyme leaves, toasted seeds, and flaky salt before serving.",
    ],
    featured: true,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Roasted Tomato Basil Orzo",
    description:
      "A light but satisfying pasta-style dish with roasted cherry tomatoes, basil, and parmesan.",
    time: 30,
    difficulty: "Easy",
    category: "Light Meals",
    ingredients: ["orzo", "tomatoes", "basil", "parmesan", "garlic"],
    instructions: [
      "Roast cherry tomatoes with garlic and olive oil until soft and lightly blistered.",
      "Cook the orzo until tender, then reserve a splash of the cooking water.",
      "Fold the roasted tomatoes into the orzo with parmesan and fresh basil.",
      "Loosen with the reserved water and serve warm with extra basil on top.",
    ],
    featured: true,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Herbed Chicken Skillet",
    description:
      "Golden pan-seared chicken with lemon butter sauce, tender greens, and crispy potatoes.",
    time: 40,
    difficulty: "Medium",
    category: "Dinner",
    ingredients: ["chicken", "lemon", "butter", "potatoes", "parsley"],
    instructions: [
      "Sear the chicken until deeply golden, then transfer to finish cooking gently.",
      "Roast or pan-crisp the potatoes until they are browned and tender.",
      "Build a quick pan sauce with lemon juice, butter, garlic, and chopped parsley.",
      "Serve the chicken over greens with the potatoes and spoon the sauce over everything.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1604908176997-43178f8f0d49?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Cardamom Pear Tart",
    description:
      "A bakery-style dessert with poached pears, warm spice, and a crisp buttery crust.",
    time: 60,
    difficulty: "Advanced",
    category: "Desserts",
    ingredients: ["pear", "cardamom", "flour", "butter", "cream"],
    instructions: [
      "Prepare and chill the tart dough until firm enough to roll cleanly.",
      "Poach the pears with cardamom until just tender, then cool and slice them.",
      "Blind bake the crust, add the filling, and arrange the pears in an elegant pattern.",
      "Bake until golden, then brush with glaze and cool completely before slicing.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Matcha Coconut Chia Glass",
    description:
      "A chilled layered drink-snack with matcha, coconut milk, chia seeds, and vanilla.",
    time: 10,
    difficulty: "Easy",
    category: "Drinks",
    ingredients: ["matcha", "coconut milk", "chia seeds", "vanilla"],
    instructions: [
      "Whisk matcha with a small splash of warm water until smooth.",
      "Combine coconut milk, vanilla, and chia seeds in a chilled glass jar.",
      "Let the chia mixture thicken, then pour the matcha layer on top.",
      "Serve cold with extra coconut flakes or a light dusting of matcha.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Seeded Artisan Loaf",
    description:
      "Rustic baking project with a crisp crust, airy interior, and deeply toasted seeds.",
    time: 55,
    difficulty: "Advanced",
    category: "Baking",
    ingredients: ["flour", "yeast", "sunflower seeds", "sesame", "salt"],
    instructions: [
      "Mix and knead the dough until elastic, then leave it to rise until doubled.",
      "Fold in the seeds and shape the loaf with a taut outer surface.",
      "Proof until airy, score the top, and bake with steam for a strong oven spring.",
      "Cool fully before slicing so the crumb sets with the right texture.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Green Tahini Power Bowl",
    description:
      "A nourishing bowl with quinoa, roasted vegetables, herbs, and silky tahini dressing.",
    time: 35,
    difficulty: "Easy",
    category: "Healthy",
    ingredients: ["quinoa", "broccoli", "carrots", "tahini", "lemon", "mint"],
    instructions: [
      "Cook the quinoa until fluffy and roast the vegetables until caramelized.",
      "Blend tahini, lemon juice, garlic, and water into a silky dressing.",
      "Layer quinoa, vegetables, and fresh herbs into serving bowls.",
      "Finish with the dressing and a final handful of mint before serving.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Mushroom Truffle Rigatoni",
    description:
      "Comforting dinner pasta with sauteed mushrooms, parmesan, cracked pepper, and truffle notes.",
    time: 35,
    difficulty: "Medium",
    category: "Main Courses",
    ingredients: ["rigatoni", "mushrooms", "cream", "parmesan", "truffle oil"],
    instructions: [
      "Saute the mushrooms until browned and concentrated in flavor.",
      "Cook the rigatoni until al dente and reserve a cup of pasta water.",
      "Make the sauce with cream, parmesan, cracked pepper, and just enough truffle oil.",
      "Toss the pasta with the sauce and mushrooms, loosening with pasta water as needed.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Charred Halloumi Garden Plate",
    description:
      "A colorful vegetarian plate with halloumi, lentils, cucumbers, herbs, and citrus dressing.",
    time: 20,
    difficulty: "Easy",
    category: "Vegan / Vegetarian",
    ingredients: ["halloumi", "lentils", "cucumber", "mint", "orange"],
    instructions: [
      "Sear the halloumi until both sides are deeply golden and crisp.",
      "Toss cooked lentils with cucumber, herbs, and a bright citrus dressing.",
      "Layer the salad onto plates and top with the warm halloumi.",
      "Finish with orange segments and fresh mint for contrast and freshness.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    title: "Slow Morning Oat Parfait",
    description:
      "Creamy vanilla oats layered with berries, yogurt, pistachios, and a spoon of berry compote.",
    time: 12,
    difficulty: "Easy",
    category: "Breakfast",
    ingredients: ["oats", "berries", "yogurt", "pistachio", "vanilla"],
    instructions: [
      "Prepare the oats until creamy and lightly scented with vanilla.",
      "Layer the oats with yogurt and berries in serving glasses or bowls.",
      "Add a spoon of berry compote between layers for extra flavor.",
      "Top with pistachios and a few fresh berries before serving.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    title: "Roasted Cauliflower Flatbread",
    description:
      "Crisp flatbread with spiced cauliflower, yogurt sauce, herbs, and pomegranate.",
    time: 28,
    difficulty: "Medium",
    category: "Light Meals",
    ingredients: ["flatbread", "cauliflower", "yogurt", "pomegranate", "parsley"],
    instructions: [
      "Roast the cauliflower with warm spices until deeply golden.",
      "Warm the flatbread until lightly crisp at the edges.",
      "Spread a cool yogurt sauce over the bread and pile on the cauliflower.",
      "Finish with parsley, pomegranate, and a final drizzle of olive oil.",
    ],
    featured: false,
    status: "approved",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
];

const pageType = document.body.dataset.page;
const config = window.SAVORA_SUPABASE || {};
const hasSupabaseConfig =
  Boolean(config.url) &&
  Boolean(config.anonKey) &&
  !String(config.url).includes("your-project") &&
  !String(config.anonKey).includes("your-anon-key");

const supabaseClient =
  hasSupabaseConfig && window.supabase
    ? window.supabase.createClient(config.url, config.anonKey)
    : null;

const state = {
  recipes: [],
  favoriteIds: new Set(),
  pendingFavoriteIds: new Set(),
  currentUser: null,
  userProfile: null,
  profileLoadedForUserId: null,
  pendingRecipes: [],
  recipeStats: {},
  creatorStats: [],
  recipeComments: [],
  recipeRatings: [],
  currentRecipeRating: null,
  authMode: "login",
  renderTimeoutId: null,
  noticesShown: new Set(),
  dom: {},
  filterCacheKey: "",
  filterCacheResults: [],
  recipeDataVersion: 0,
  statsVersion: 0,
  revealObserver: null,
};

const RECIPE_IMAGE_FALLBACK =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff3e3"/>
          <stop offset="100%" stop-color="#f4dfcf"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)"/>
      <circle cx="960" cy="180" r="110" fill="#f7c79d" opacity="0.35"/>
      <circle cx="220" cy="720" r="140" fill="#9fc8b3" opacity="0.22"/>
      <text x="50%" y="47%" text-anchor="middle" fill="#8c5a3d" font-family="Arial, sans-serif" font-size="42" font-weight="700">Savora Recipe</text>
      <text x="50%" y="54%" text-anchor="middle" fill="#9e7a63" font-family="Arial, sans-serif" font-size="22">Image unavailable</text>
    </svg>
  `);

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getRecipeImageSrc(imageUrl) {
  return imageUrl || RECIPE_IMAGE_FALLBACK;
}

function attachImageFallbacks(root = document) {
  root.querySelectorAll("img").forEach((image) => {
    if (image.dataset.fallbackBound === "true") {
      return;
    }

    image.dataset.fallbackBound = "true";
    image.addEventListener("error", () => {
      image.src = RECIPE_IMAGE_FALLBACK;
    });
  });
}

function formatActionError(error, fallbackMessage) {
  if (!error) {
    return fallbackMessage;
  }

  if (typeof error === "string") {
    return error;
  }

  return error.message || fallbackMessage;
}

function showNonBlockingError(key, message) {
  if (state.noticesShown.has(key)) {
    return;
  }

  state.noticesShown.add(key);
  showToast(message, "error");
}

function setButtonBusy(button, isBusy, busyLabel) {
  if (!button) {
    return;
  }

  if (!button.dataset.originalLabel) {
    button.dataset.originalLabel = button.textContent || "";
  }

  button.disabled = isBusy;
  button.setAttribute("aria-busy", String(isBusy));
  button.textContent = isBusy ? busyLabel : button.dataset.originalLabel;
}

function ensureToastStack() {
  let stack = document.querySelector(".toast-stack");

  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }

  return stack;
}

function showToast(message, tone = "success") {
  const stack = ensureToastStack();
  const toast = document.createElement("div");
  toast.className = `toast is-${tone}`;
  toast.textContent = message;
  stack.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3000);
}

function createSkeletonCards(count = 6) {
  return Array.from({ length: count }, () => '<div class="skeleton-card" aria-hidden="true"></div>').join("");
}

function normalizeIngredientList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function prepareRecipe(recipe) {
  const ingredientTerms = Array.isArray(recipe.ingredients)
    ? recipe.ingredients.map((ingredient) => ingredient.toLowerCase())
    : [];

  return {
    ...recipe,
    _searchTitle: String(recipe.title || "").toLowerCase(),
    _searchDescription: String(recipe.description || "").toLowerCase(),
    _searchCategory: String(recipe.category || "").toLowerCase(),
    _ingredientTerms: ingredientTerms,
  };
}

function normalizeRecipe(row) {
  return prepareRecipe({
    id: Number(row.id),
    authorId: row.author_id || null,
    authorName: row.author_name || "Savora Kitchen",
    title: row.title,
    description: row.description,
    time: Number(row.time_minutes),
    difficulty: row.difficulty,
    category: row.category,
    ingredients: Array.isArray(row.ingredients) ? row.ingredients : [],
    instructions: Array.isArray(row.instructions) ? row.instructions : [],
    featured: Boolean(row.featured),
    status: row.status || "approved",
    image: row.image_url,
  });
}

state.recipes = fallbackRecipes.map(prepareRecipe);

function setRecipes(recipes) {
  state.recipes = recipes.map((recipe) =>
    recipe && Array.isArray(recipe._ingredientTerms) ? recipe : prepareRecipe(recipe)
  );
  state.recipeDataVersion += 1;
  state.filterCacheKey = "";
}

function setPendingRecipes(recipes) {
  state.pendingRecipes = recipes.map((recipe) =>
    recipe && Array.isArray(recipe._ingredientTerms) ? recipe : prepareRecipe(recipe)
  );
}

function setRecipeStats(stats, creators) {
  state.recipeStats = stats;
  state.creatorStats = creators;
  state.statsVersion += 1;
  state.filterCacheKey = "";
}

function isAdminUser() {
  return Boolean(state.userProfile?.is_admin);
}

function getDisplayName(email) {
  if (!email) {
    return "Community member";
  }

  return email.split("@")[0];
}

function getRecipeStats(recipeId) {
  return (
    state.recipeStats[Number(recipeId)] || {
      averageRating: 0,
      ratingsCount: 0,
      viewsCount: 0,
    }
  );
}

function getRecipeById(recipeId) {
  return state.recipes.find((recipe) => Number(recipe.id) === Number(recipeId));
}

function isRecipeSaved(recipeId) {
  return state.favoriteIds.has(Number(recipeId));
}

function createFavoriteButton(recipeId) {
  const saved = isRecipeSaved(recipeId);
  return `
    <button
      class="favorite-btn ${saved ? "is-saved" : ""}"
      type="button"
      data-favorite-id="${recipeId}"
      aria-pressed="${saved}"
      aria-label="${saved ? "Remove from favorites" : "Save recipe"}"
    >
      <span>${saved ? "\u2665" : "\u2661"}</span>
    </button>
  `;
}

function createRecipeCard(recipe, matchCount = 0) {
  const stats = getRecipeStats(recipe.id);
  const safeTitle = escapeHtml(recipe.title);
  const safeDescription = escapeHtml(recipe.description);
  const safeCategory = escapeHtml(recipe.category);
  const matchBadge =
    matchCount > 0
      ? `<span class="match-badge">${matchCount} ingredient match${
          matchCount === 1 ? "" : "es"
        }</span>`
      : "";
  const ratingBadge =
    stats.ratingsCount > 0
      ? `<span class="match-badge">${stats.averageRating.toFixed(1)}&#9733; average</span>`
      : "";

  return `
    <article class="recipe-card">
      ${createFavoriteButton(recipe.id)}
      <a class="recipe-card-link" href="recipe.html?id=${recipe.id}" aria-label="View ${safeTitle}">
        <div class="recipe-card-image">
          <img src="${getRecipeImageSrc(recipe.image)}" alt="${safeTitle}" loading="lazy" decoding="async" />
        </div>
        <div class="recipe-card-body">
          <div class="recipe-meta">
            <span>${recipe.time} min</span>
            <span>${recipe.difficulty}</span>
            <span class="recipe-tag">${safeCategory}</span>
            ${matchBadge}
            ${ratingBadge}
          </div>
          <h3>${safeTitle}</h3>
          <p>${safeDescription}</p>
        </div>
      </a>
    </article>
  `;
}

function updateFavoriteButtons(root = document) {
  root.querySelectorAll("[data-favorite-id]").forEach((button) => {
    const recipeId = Number(button.dataset.favoriteId);
    const saved = isRecipeSaved(recipeId);
    const isBusy = state.pendingFavoriteIds.has(recipeId);
    button.classList.toggle("is-saved", saved);
    button.classList.toggle("is-busy", isBusy);
    button.disabled = isBusy;
    button.setAttribute("aria-busy", String(isBusy));
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute(
      "aria-label",
      saved ? "Remove from favorites" : "Save recipe"
    );
    button.innerHTML = `<span>${saved ? "\u2665" : "\u2661"}</span>`;
  });
}

function showAuthMessage(message, tone = "error") {
  const authMessage = document.getElementById("auth-message");

  if (!authMessage) {
    return;
  }

  authMessage.textContent = message;
  authMessage.classList.remove("hidden", "is-error", "is-success");
  authMessage.classList.add(tone === "success" ? "is-success" : "is-error");
  showToast(message, tone === "success" ? "success" : "error");
}

function clearAuthMessage() {
  const authMessage = document.getElementById("auth-message");

  if (!authMessage) {
    return;
  }

  authMessage.textContent = "";
  authMessage.classList.add("hidden");
  authMessage.classList.remove("is-error", "is-success");
}

function openAuthModal() {
  const modal = document.getElementById("auth-modal");

  if (!modal) {
    return;
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  clearAuthMessage();

  window.setTimeout(() => {
    document.getElementById("auth-email")?.focus();
  }, 30);

  if (!hasSupabaseConfig) {
    showAuthMessage(
      "Supabase is not configured yet. Add your project URL and anon key in supabase-config.js.",
      "error"
    );
  }
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");

  if (!modal) {
    return;
  }

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setAuthMode(mode) {
  state.authMode = mode;

  document.querySelectorAll("[data-auth-tab]").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.authTab === mode);
  });

  const submitButton = document.getElementById("auth-submit-btn");

  if (submitButton) {
    submitButton.textContent = mode === "signup" ? "Create account" : "Login";
  }
}

function updateAuthUI() {
  const authStatus = document.getElementById("auth-status");
  const openButton = document.getElementById("auth-open-btn");
  const logoutButton = document.getElementById("auth-logout-btn");
  const authNote = document.getElementById("favorites-auth-note");
  const adminLink = document.getElementById("admin-link");

  if (!authStatus || !openButton || !logoutButton) {
    return;
  }

  if (!hasSupabaseConfig) {
    authStatus.textContent = "Setup needed";
    authStatus.classList.remove("hidden");
    openButton.textContent = "Configure";
    logoutButton.classList.add("hidden");
    if (authNote) {
      authNote.classList.remove("hidden");
      authNote.textContent =
        "Supabase is not configured yet. Update supabase-config.js to enable account favorites.";
    }
    if (adminLink) {
      adminLink.classList.add("hidden");
    }
    return;
  }

  if (state.currentUser) {
    authStatus.textContent = state.currentUser.email || "Signed in";
    authStatus.classList.remove("hidden");
    openButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");
    if (authNote) {
      authNote.classList.add("hidden");
    }
    if (adminLink) {
      adminLink.classList.toggle("hidden", !isAdminUser());
    }
  } else {
    authStatus.classList.add("hidden");
    openButton.classList.remove("hidden");
    openButton.textContent = "Login";
    logoutButton.classList.add("hidden");
    if (authNote) {
      authNote.classList.remove("hidden");
      authNote.textContent = "Sign in to save favorites to your account.";
    }
    if (adminLink) {
      adminLink.classList.add("hidden");
    }
  }
}

async function fetchRecipesFromDatabase() {
  if (!supabaseClient) {
    setRecipes(fallbackRecipes);
    return;
  }

  const { data, error } = await supabaseClient
    .from("recipes")
    .select(
      "id, author_id, author_name, title, description, image_url, time_minutes, difficulty, category, ingredients, instructions, featured, status"
    )
    .eq("status", "approved")
    .order("featured", { ascending: false })
    .order("id", { ascending: true });

  if (error) {
    console.error("Failed to load recipes from Supabase:", error);
    setRecipes(fallbackRecipes);
    showNonBlockingError(
      "recipes-load-fallback",
      "Could not load live recipes right now. Showing fallback recipes instead."
    );
    return;
  }

  setRecipes(data.map(normalizeRecipe));
}

async function fetchFavoritesFromDatabase() {
  if (!supabaseClient || !state.currentUser) {
    state.favoriteIds = new Set();
    return;
  }

  const { data, error } = await supabaseClient
    .from("favorites")
    .select("recipe_id")
    .eq("user_id", state.currentUser.id);

  if (error) {
    console.error("Failed to load favorites from Supabase:", error);
    state.favoriteIds = new Set();
    showNonBlockingError("favorites-load-failed", "Could not load saved recipes right now.");
    return;
  }

  state.favoriteIds = new Set(data.map((item) => Number(item.recipe_id)));
}

async function fetchUserProfile() {
  if (!supabaseClient || !state.currentUser) {
    state.userProfile = null;
    state.profileLoadedForUserId = null;
    return;
  }

  if (state.profileLoadedForUserId === state.currentUser.id && state.userProfile) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("users")
    .select("id, email, is_admin")
    .eq("id", state.currentUser.id)
    .single();

  if (error) {
    console.error("Failed to load user profile:", error);
    state.userProfile = null;
    showNonBlockingError("profile-load-failed", "Could not load your profile details.");
    return;
  }

  state.userProfile = data;
  state.profileLoadedForUserId = state.currentUser.id;
}

async function fetchPendingRecipes() {
  if (!supabaseClient || !isAdminUser()) {
    state.pendingRecipes = [];
    return;
  }

  const { data, error } = await supabaseClient
    .from("recipes")
    .select(
      "id, author_id, author_name, title, description, image_url, time_minutes, difficulty, category, ingredients, instructions, featured, status, created_at"
    )
    .eq("status", "pending")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to load pending recipes:", error);
    state.pendingRecipes = [];
    showNonBlockingError("pending-load-failed", "Could not load pending recipes right now.");
    return;
  }

  setPendingRecipes(data.map(normalizeRecipe));
}

async function fetchRecipeEngagement(recipeId) {
  state.recipeComments = [];
  state.recipeRatings = [];
  state.currentRecipeRating = null;

  if (!supabaseClient || !recipeId) {
    return;
  }

  const [{ data: ratingsData, error: ratingsError }, { data: commentsData, error: commentsError }] =
    await Promise.all([
      supabaseClient
        .from("ratings")
        .select("id, recipe_id, user_id, rating_value")
        .eq("recipe_id", Number(recipeId)),
      supabaseClient
        .from("comments")
        .select("id, recipe_id, user_id, author_name, comment_text, created_at")
        .eq("recipe_id", Number(recipeId))
        .order("created_at", { ascending: false }),
    ]);

  if (ratingsError) {
    console.error("Failed to load ratings:", ratingsError);
    showNonBlockingError("ratings-load-failed", "Could not refresh ratings right now.");
  } else {
    state.recipeRatings = ratingsData || [];
    if (state.currentUser) {
      const userRating = state.recipeRatings.find(
        (rating) => rating.user_id === state.currentUser.id
      );
      state.currentRecipeRating = userRating ? Number(userRating.rating_value) : null;
    }
  }

  if (commentsError) {
    console.error("Failed to load comments:", commentsError);
    showNonBlockingError("comments-load-failed", "Could not refresh comments right now.");
  } else {
    state.recipeComments = commentsData || [];
  }
}

async function fetchRecipeStats() {
  state.recipeStats = {};
  state.creatorStats = [];

  if (!supabaseClient) {
    return;
  }

  const [
    { data: ratingsData, error: ratingsError },
    { data: viewsData, error: viewsError },
  ] = await Promise.all([
    supabaseClient.from("ratings").select("recipe_id, rating_value"),
    supabaseClient.from("recipe_views").select("recipe_id"),
  ]);

  if (ratingsError) {
    console.error("Failed to load recipe rating stats:", ratingsError);
    showNonBlockingError("rating-stats-failed", "Could not load recipe ratings data.");
  }

  if (viewsError) {
    console.error("Failed to load recipe view stats:", viewsError);
    showNonBlockingError("view-stats-failed", "Could not load recipe popularity data.");
  }

  if (ratingsError && viewsError) {
    return;
  }

  const groupedStats = (ratingsData || []).reduce((accumulator, rating) => {
    const recipeId = Number(rating.recipe_id);

    if (!accumulator[recipeId]) {
      accumulator[recipeId] = {
        total: 0,
        count: 0,
        views: 0,
      };
    }

    accumulator[recipeId].total += Number(rating.rating_value || 0);
    accumulator[recipeId].count += 1;
    return accumulator;
  }, {});

  (viewsData || []).forEach((view) => {
    const recipeId = Number(view.recipe_id);

    if (!groupedStats[recipeId]) {
      groupedStats[recipeId] = {
        total: 0,
        count: 0,
        views: 0,
      };
    }

    groupedStats[recipeId].views += 1;
  });

  const nextRecipeStats = Object.fromEntries(
    Object.entries(groupedStats).map(([recipeId, stat]) => [
      Number(recipeId),
      {
        averageRating: stat.count ? stat.total / stat.count : 0,
        ratingsCount: stat.count,
        viewsCount: stat.views,
      },
    ])
  );

  const creatorMap = new Map();

  state.recipes.forEach((recipe) => {
    const stats = getRecipeStats(recipe.id);
    const key = recipe.authorId || recipe.authorName;

    if (!creatorMap.has(key)) {
      creatorMap.set(key, {
        creatorName: recipe.authorName || "Savora Kitchen",
        recipeCount: 0,
        totalViews: 0,
        totalRatings: 0,
        averageRatingTotal: 0,
        averageRatingCount: 0,
      });
    }

    const creator = creatorMap.get(key);
    creator.recipeCount += 1;
    creator.totalViews += stats.viewsCount;
    creator.totalRatings += stats.ratingsCount;
    if (stats.ratingsCount > 0) {
      creator.averageRatingTotal += stats.averageRating;
      creator.averageRatingCount += 1;
    }
  });

  const nextCreatorStats = Array.from(creatorMap.values())
    .map((creator) => ({
      ...creator,
      averageRating:
        creator.averageRatingCount > 0
          ? creator.averageRatingTotal / creator.averageRatingCount
          : 0,
    }))
    .sort((left, right) => {
      if (right.totalViews !== left.totalViews) {
        return right.totalViews - left.totalViews;
      }

      return right.averageRating - left.averageRating;
    });

  setRecipeStats(nextRecipeStats, nextCreatorStats);
}

async function toggleFavoriteInDatabase(recipeId) {
  if (!supabaseClient || !state.currentUser) {
    openAuthModal();
    if (hasSupabaseConfig) {
      showAuthMessage("Please log in to save favorites.", "error");
    }
    return;
  }

  const normalizedId = Number(recipeId);
  const alreadySaved = state.favoriteIds.has(normalizedId);

  if (alreadySaved) {
    const { error } = await supabaseClient
      .from("favorites")
      .delete()
      .eq("user_id", state.currentUser.id)
      .eq("recipe_id", normalizedId);

    if (error) {
      showAuthMessage(error.message || "Could not remove favorite.", "error");
      return;
    }

    state.favoriteIds.delete(normalizedId);
    showToast("Removed from saved recipes.", "success");
    return;
  }

  const { error } = await supabaseClient.from("favorites").insert({
    user_id: state.currentUser.id,
    recipe_id: normalizedId,
  });

  if (error) {
    showAuthMessage(error.message || "Could not save favorite.", "error");
    return;
  }

  state.favoriteIds.add(normalizedId);
  showToast("Saved to your favorites.", "success");
}

async function refreshAppData() {
  await Promise.all([fetchRecipesFromDatabase(), fetchUserProfile(), fetchFavoritesFromDatabase()]);
  await fetchPendingRecipes();

  if (pageType === "home") {
    await fetchRecipeStats();
  }

  if (pageType === "recipe") {
    const params = new URLSearchParams(window.location.search);
    const recipeId = Number(params.get("id"));
    await trackRecipeView(recipeId);
    await fetchRecipeEngagement(recipeId);
  }

  if (pageType === "home") {
    renderHomePage();
  }

  if (pageType === "recipe") {
    renderRecipeDetailPage();
  }

  if (pageType === "admin") {
    renderAdminPage();
  }
}

function renderCurrentPage() {
  if (pageType === "home") {
    renderHomePage();
  }

  if (pageType === "recipe") {
    renderRecipeDetailPage();
  }

  if (pageType === "admin") {
    renderAdminPage();
  }
}

function setupSharedNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const siteHeader = document.querySelector(".site-header");

  if (!menuToggle || !navLinks) {
    return;
  }

  function syncHeaderState() {
    document.body.classList.toggle("nav-open", navLinks.classList.contains("is-open"));
    menuToggle.classList.toggle("is-open", navLinks.classList.contains("is-open"));
    if (siteHeader) {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
    }
  }

  function closeNavigation() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    syncHeaderState();
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    syncHeaderState();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      closeNavigation();
    }
  });

  window.addEventListener("scroll", syncHeaderState, { passive: true });
  syncHeaderState();
}

function setupAuthUI() {
  const openButton = document.getElementById("auth-open-btn");
  const logoutButton = document.getElementById("auth-logout-btn");
  const authForm = document.getElementById("auth-form");

  document.querySelectorAll("[data-auth-close]").forEach((element) => {
    element.addEventListener("click", closeAuthModal);
  });

  document.addEventListener("keydown", (event) => {
    const modal = document.getElementById("auth-modal");

    if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeAuthModal();
    }
  });

  document.querySelectorAll("[data-auth-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      setAuthMode(tab.dataset.authTab);
      clearAuthMessage();
    });
  });

  if (openButton) {
    openButton.addEventListener("click", openAuthModal);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      if (!supabaseClient) {
        openAuthModal();
        return;
      }

      const { error } = await supabaseClient.auth.signOut();

      if (error) {
        showAuthMessage(error.message || "Could not log out.", "error");
        return;
      }

      state.currentUser = null;
      state.userProfile = null;
      state.favoriteIds = new Set();
      state.pendingRecipes = [];
      updateAuthUI();
      showToast("Logged out successfully.", "success");

      renderCurrentPage();
    });
  }

  if (authForm) {
    authForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      clearAuthMessage();
      const submitButton = document.getElementById("auth-submit-btn");
      setButtonBusy(
        submitButton,
        true,
        state.authMode === "signup" ? "Creating..." : "Signing in..."
      );

      if (!supabaseClient) {
        showAuthMessage(
          "Supabase is not configured yet. Add your project URL and anon key in supabase-config.js.",
          "error"
        );
        setButtonBusy(submitButton, false);
        return;
      }

      const email = document.getElementById("auth-email")?.value.trim();
      const password = document.getElementById("auth-password")?.value.trim();

      if (!email || !password) {
        showAuthMessage("Please enter both email and password.", "error");
        setButtonBusy(submitButton, false);
        return;
      }

      if (state.authMode === "signup") {
        const { data, error } = await supabaseClient.auth.signUp({
          email,
          password,
        });

        if (error) {
          showAuthMessage(error.message, "error");
          setButtonBusy(submitButton, false);
          return;
        }

        if (!data.session) {
          showAuthMessage(
            "Account created. Check your email to confirm your account, then log in.",
            "success"
          );
          setButtonBusy(submitButton, false);
          return;
        }

        showAuthMessage("Account created and signed in successfully.", "success");
      } else {
        const { error } = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          showAuthMessage(error.message, "error");
          setButtonBusy(submitButton, false);
          return;
        }

        showAuthMessage("Logged in successfully.", "success");
      }

      const {
        data: { session },
      } = await supabaseClient.auth.getSession();

      state.currentUser = session?.user || null;
      await fetchFavoritesFromDatabase();
      updateAuthUI();

      renderCurrentPage();

      setButtonBusy(submitButton, false);
      window.setTimeout(closeAuthModal, 400);
    });
  }

  setAuthMode("login");
  updateAuthUI();
}

function setupFavoriteDelegation() {
  document.addEventListener("click", async (event) => {
    const favoriteButton = event.target.closest("[data-favorite-id]");

    if (!favoriteButton) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const recipeId = Number(favoriteButton.dataset.favoriteId);

    if (!recipeId || state.pendingFavoriteIds.has(recipeId)) {
      return;
    }

    state.pendingFavoriteIds.add(recipeId);
    favoriteButton.disabled = true;
    favoriteButton.classList.add("is-busy");

    await toggleFavoriteInDatabase(recipeId);

    state.pendingFavoriteIds.delete(recipeId);
    favoriteButton.disabled = false;
    favoriteButton.classList.remove("is-busy");
    updateFavoriteButtons(document);

    if (pageType === "home") {
      updateHomeFavoritesSection();
    }
  });
}

function setupRevealAnimations(root = document) {
  const revealTargets = root.querySelectorAll(
    ".section-heading, .recipe-card, .trending-card, .creator-card, .submission-form, .detail-card, .detail-content-card, .detail-sidebar-card, .admin-card, .ad-slot"
  );

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => {
      target.classList.add("is-visible");
    });
    return;
  }

  if (!state.revealObserver) {
    state.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            state.revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );
  }

  revealTargets.forEach((target) => {
    if (target.dataset.revealBound === "true") {
      return;
    }

    target.dataset.revealBound = "true";
    target.classList.add("reveal");
    state.revealObserver.observe(target);
  });
}

function parseListInput(value) {
  return String(value || "")
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function validateRecipeSubmission(payload) {
  if (!payload.title || payload.title.length < 3) {
    return "Please enter a recipe title with at least 3 characters.";
  }

  if (!payload.description || payload.description.length < 20) {
    return "Please add a fuller recipe description.";
  }

  if (!payload.image || !/^https?:\/\//i.test(payload.image)) {
    return "Please provide a valid image URL.";
  }

  if (payload.ingredients.length < 2) {
    return "Please include at least 2 ingredients.";
  }

  if (payload.instructions.length < 2) {
    return "Please include at least 2 preparation steps.";
  }

  if (!Number.isFinite(payload.time) || payload.time <= 0) {
    return "Preparation time must be greater than 0 minutes.";
  }

  return "";
}

async function submitRecipe(payload) {
  if (!supabaseClient || !state.currentUser) {
    openAuthModal();
    showAuthMessage("Please sign in before submitting a recipe.", "error");
    return { success: false };
  }

  const validationMessage = validateRecipeSubmission(payload);

  if (validationMessage) {
    return { success: false, message: validationMessage };
  }

  const { error } = await supabaseClient.from("recipes").insert({
    author_id: state.currentUser.id,
    author_name: getDisplayName(state.currentUser.email || state.userProfile?.email || ""),
    title: payload.title,
    description: payload.description,
    image_url: payload.image,
    time_minutes: payload.time,
    difficulty: payload.difficulty,
    category: payload.category,
    ingredients: payload.ingredients,
    instructions: payload.instructions,
    featured: false,
    status: "pending",
  });

  if (error) {
    return { success: false, message: error.message || "Could not submit recipe." };
  }

  return {
    success: true,
    message: "Recipe submitted successfully. It is now waiting for admin approval.",
  };
}

async function updateRecipeStatus(recipeId, status) {
  if (!supabaseClient || !isAdminUser()) {
    return { success: false, message: "Admin access is required." };
  }

  const { error } = await supabaseClient
    .from("recipes")
    .update({ status })
    .eq("id", Number(recipeId));

  if (error) {
    return { success: false, message: error.message || "Could not update recipe status." };
  }

  return { success: true };
}

async function submitRecipeRating(recipeId, ratingValue) {
  if (!supabaseClient || !state.currentUser) {
    openAuthModal();
    showAuthMessage("Please sign in to rate recipes.", "error");
    return { success: false };
  }

  const { error } = await supabaseClient.from("ratings").upsert(
    {
      user_id: state.currentUser.id,
      recipe_id: Number(recipeId),
      rating_value: Number(ratingValue),
    },
    {
      onConflict: "user_id,recipe_id",
    }
  );

  if (error) {
    return { success: false, message: error.message || "Could not save rating." };
  }

  return { success: true };
}

async function submitRecipeComment(recipeId, commentText) {
  if (!supabaseClient || !state.currentUser) {
    openAuthModal();
    showAuthMessage("Please sign in to comment.", "error");
    return { success: false };
  }

  const { error } = await supabaseClient.from("comments").insert({
    user_id: state.currentUser.id,
    recipe_id: Number(recipeId),
    author_name: getDisplayName(state.currentUser.email || state.userProfile?.email || ""),
    comment_text: commentText,
  });

  if (error) {
    return { success: false, message: error.message || "Could not add comment." };
  }

  return { success: true };
}

async function trackRecipeView(recipeId) {
  if (!supabaseClient || !recipeId) {
    return;
  }

  const viewKey = `savora:viewed:${recipeId}`;

  if (sessionStorage.getItem(viewKey)) {
    return;
  }

  const { error } = await supabaseClient.from("recipe_views").insert({
    recipe_id: Number(recipeId),
    user_id: state.currentUser?.id || null,
  });

  if (error) {
    console.error("Failed to track recipe view:", error);
    return;
  }

  sessionStorage.setItem(viewKey, "true");
}

function renderRecipeDetailPage() {
  const detailContainer = document.getElementById("recipe-detail");
  const notFoundState = document.getElementById("recipe-not-found");
  const params = new URLSearchParams(window.location.search);
  const recipeId = Number(params.get("id"));
  const recipe = getRecipeById(recipeId);
  const safeTitle = escapeHtml(recipe?.title || "");
  const safeDescription = escapeHtml(recipe?.description || "");
  const safeCategory = escapeHtml(recipe?.category || "");
  const ratingsCount = state.recipeRatings.length;
  const averageRating =
    ratingsCount === 0
      ? 0
      : state.recipeRatings.reduce(
          (sum, rating) => sum + Number(rating.rating_value || 0),
          0
        ) / ratingsCount;
  const commentsMarkup = state.recipeComments.length
    ? state.recipeComments
        .map(
          (comment) => `
            <article class="comment-card">
              <div class="comment-head">
                <strong>${escapeHtml(comment.author_name || "Community member")}</strong>
                <span>${new Date(comment.created_at).toLocaleDateString()}</span>
              </div>
              <p>${escapeHtml(comment.comment_text)}</p>
            </article>
          `
        )
        .join("")
    : `<p class="empty-state empty-state-card">No comments yet. Start the conversation.</p>`;
  const ratingButtons = [1, 2, 3, 4, 5]
    .map(
      (value) => `
        <button
          class="star-btn ${Number(state.currentRecipeRating) === value ? "is-active" : ""}"
          type="button"
          data-rate-value="${value}"
          data-recipe-id="${recipeId}"
          aria-label="Rate ${value} star${value === 1 ? "" : "s"}"
        >
          ${value <= Number(state.currentRecipeRating || 0) ? "&#9733;" : "&#9734;"}
        </button>
      `
    )
    .join("");

  if (!detailContainer || !notFoundState) {
    return;
  }

  if (!recipe) {
    detailContainer.innerHTML = "";
    notFoundState.classList.remove("hidden");
    return;
  }

  document.title = `Savora | ${recipe.title}`;

  detailContainer.innerHTML = `
    <article class="detail-card">
      <div class="detail-image-wrap">
        <img src="${getRecipeImageSrc(recipe.image)}" alt="${safeTitle}" decoding="async" />
        <div class="detail-save-btn">
          ${createFavoriteButton(recipe.id)}
        </div>
      </div>

      <div class="detail-copy">
        <p class="eyebrow">${safeCategory}</p>
        <h1>${safeTitle}</h1>
        <p class="detail-description">${safeDescription}</p>
        <div class="detail-meta">
          <span class="detail-chip">${recipe.time} min</span>
          <span class="detail-chip">${recipe.difficulty}</span>
          <span class="detail-chip">${recipe.status}</span>
          <span class="detail-chip">${averageRating ? averageRating.toFixed(1) : "New"} / 5</span>
        </div>
      </div>
    </article>

    <div class="detail-layout">
      <aside class="detail-sidebar-card">
        <h2>Ingredients</h2>
        <ul class="ingredient-list">
          ${recipe.ingredients.map((ingredient) => `<li>${escapeHtml(ingredient)}</li>`).join("")}
        </ul>
      </aside>

      <section class="detail-content-card">
        <h2>Step-by-step instructions</h2>
        <ol class="step-list">
          ${recipe.instructions.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
        </ol>
      </section>
    </div>

    <div class="detail-layout">
      <section class="detail-content-card">
        <div class="review-heading">
          <div>
            <h2>Ratings</h2>
            <p class="helper-text">
              Average rating: <strong>${averageRating ? averageRating.toFixed(1) : "0.0"}</strong>
              from ${ratingsCount} rating${ratingsCount === 1 ? "" : "s"}.
            </p>
          </div>
        </div>
        <div class="rating-row">
          ${ratingButtons}
        </div>
        <p class="helper-text">
          ${state.currentUser ? "Click a star to rate this recipe." : "Sign in to rate this recipe."}
        </p>
      </section>

      <section class="detail-content-card">
        <div class="review-heading">
          <div>
            <h2>Comments</h2>
            <p class="helper-text">Share feedback, tips, or serving ideas.</p>
          </div>
        </div>
        <form class="comment-form" id="comment-form">
          <label class="filter-field">
            <span>Add a comment</span>
            <textarea id="comment-text" rows="4" placeholder="Write your comment here..." required></textarea>
          </label>
          <div class="submission-actions">
            <button class="btn btn-primary" type="submit">Post Comment</button>
            <p class="helper-text">${state.currentUser ? "Your comment will appear right away after posting." : "Sign in to comment."}</p>
          </div>
        </form>
        <p class="auth-message hidden" id="comment-message"></p>
        <div class="comments-list">
          ${commentsMarkup}
        </div>
      </section>
    </div>
  `;

  notFoundState.classList.add("hidden");
  updateFavoriteButtons(detailContainer);
  attachImageFallbacks(detailContainer);
  setupRevealAnimations();

  const commentForm = document.getElementById("comment-form");
  const commentMessage = document.getElementById("comment-message");

  detailContainer.querySelectorAll("[data-rate-value]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (button.disabled) {
        return;
      }

      setButtonBusy(button, true, "...");
      const result = await submitRecipeRating(recipeId, button.dataset.rateValue);

      if (!result.success) {
        if (commentMessage) {
          commentMessage.textContent = result.message || "Could not save rating.";
          commentMessage.classList.remove("hidden", "is-success");
          commentMessage.classList.add("is-error");
        }
        setButtonBusy(button, false);
        return;
      }

      showToast("Rating saved.", "success");
      await fetchRecipeEngagement(recipeId);
      renderRecipeDetailPage();
    });
  });

  if (commentForm) {
    commentForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitButton = commentForm.querySelector('button[type="submit"]');
      setButtonBusy(submitButton, true, "Posting...");

      const commentField = document.getElementById("comment-text");
      const commentText = commentField?.value.trim();

      if (!commentText) {
        setButtonBusy(submitButton, false);
        return;
      }

      const result = await submitRecipeComment(recipeId, commentText);

      if (!commentMessage) {
        return;
      }

      commentMessage.textContent =
        result.message ||
        (result.success ? "Comment added." : "Could not add comment.");
      commentMessage.classList.remove("hidden", "is-error", "is-success");
      commentMessage.classList.add(result.success ? "is-success" : "is-error");

      if (result.success) {
        commentForm.reset();
        showToast("Comment posted.", "success");
        await fetchRecipeEngagement(recipeId);
        renderRecipeDetailPage();
        return;
      }

      setButtonBusy(submitButton, false);
    });
  }
}

function getHomeDom() {
  if (state.dom.home) {
    return state.dom.home;
  }

  const homeDom = {
    featuredContainer: document.getElementById("featured-recipes"),
    favoritesGrid: document.getElementById("favorites-grid"),
    trendingGrid: document.getElementById("trending-grid"),
    creatorList: document.getElementById("creator-list"),
    favoritesCount: document.getElementById("favorites-count"),
    favoritesEmptyState: document.getElementById("favorites-empty-state"),
    recipeGrid: document.getElementById("recipe-grid"),
    resultsCount: document.getElementById("results-count"),
    emptyState: document.getElementById("empty-state"),
    loadingIndicator: document.getElementById("loading-indicator"),
    searchForm: document.getElementById("hero-search-form"),
    heroSearch: document.getElementById("hero-search"),
    heroIngredient: document.getElementById("hero-ingredient"),
    timeFilter: document.getElementById("time-filter"),
    difficultyFilter: document.getElementById("difficulty-filter"),
    categoryFilter: document.getElementById("category-filter"),
    ingredientFilter: document.getElementById("ingredient-filter"),
    matchModeFilter: document.getElementById("match-mode-filter"),
    clearFiltersBtn: document.getElementById("clear-filters-btn"),
    sortFilter: document.getElementById("sort-filter"),
    categoryButtons: document.querySelectorAll(".category-card"),
    hintChips: document.querySelectorAll(".hint-chip"),
    authNote: document.getElementById("favorites-auth-note"),
    resultsSummary: document.getElementById("results-summary"),
    submissionForm: document.getElementById("submission-form"),
    submissionMessage: document.getElementById("submission-message"),
    submissionHelpText: document.getElementById("submission-help-text"),
    recipesSection: document.getElementById("recipes"),
  };

  state.dom.home = homeDom;
  return homeDom;
}

function getHomeFilterState(homeDom) {
  return {
    searchValue: homeDom.heroSearch.value.trim().toLowerCase(),
    ingredientValues: normalizeIngredientList(
      homeDom.ingredientFilter.value || homeDom.heroIngredient.value
    ),
    selectedTime: homeDom.timeFilter.value,
    selectedDifficulty: homeDom.difficultyFilter.value,
    selectedCategory: homeDom.categoryFilter.value,
    matchMode: homeDom.matchModeFilter.value,
    sortMode: homeDom.sortFilter.value,
  };
}

function getFilteredRecipesForHome(homeDom) {
  const filterState = getHomeFilterState(homeDom);
  const cacheKey = JSON.stringify({
    ...filterState,
    recipeDataVersion: state.recipeDataVersion,
    statsVersion: state.statsVersion,
  });

  if (state.filterCacheKey === cacheKey) {
    return state.filterCacheResults;
  }

  const filteredRecipes = state.recipes
    .map((recipe) => {
      const ingredientMatches = filterState.ingredientValues.filter((ingredient) =>
        recipe._ingredientTerms.some((recipeIngredient) => recipeIngredient.includes(ingredient))
      );
      const titleMatch =
        filterState.searchValue && recipe._searchTitle.includes(filterState.searchValue);
      const categoryMatch =
        filterState.searchValue && recipe._searchCategory.includes(filterState.searchValue);
      const descriptionMatch =
        filterState.searchValue && recipe._searchDescription.includes(filterState.searchValue);
      const ingredientTextMatch =
        filterState.searchValue &&
        recipe._ingredientTerms.some((ingredient) => ingredient.includes(filterState.searchValue));
      const stats = getRecipeStats(recipe.id);

      const matchesSearch =
        !filterState.searchValue ||
        titleMatch ||
        descriptionMatch ||
        categoryMatch ||
        ingredientTextMatch;

      const matchesTime =
        filterState.selectedTime === "all" || recipe.time <= Number(filterState.selectedTime);

      const matchesDifficulty =
        filterState.selectedDifficulty === "all" ||
        recipe.difficulty === filterState.selectedDifficulty;

      const matchesCategory =
        filterState.selectedCategory === "all" ||
        recipe.category === filterState.selectedCategory;

      const matchesIngredients =
        filterState.ingredientValues.length === 0 ||
        (filterState.matchMode === "all"
          ? ingredientMatches.length === filterState.ingredientValues.length
          : ingredientMatches.length > 0);

      const matchedAllIngredients =
        filterState.ingredientValues.length > 0 &&
        ingredientMatches.length === filterState.ingredientValues.length;
      const relevanceScore =
        (titleMatch ? 16 : 0) +
        (categoryMatch ? 8 : 0) +
        (descriptionMatch ? 4 : 0) +
        (ingredientTextMatch ? 6 : 0) +
        ingredientMatches.length * 10 +
        (matchedAllIngredients ? 10 : 0) +
        (recipe.featured ? 2 : 0) +
        stats.averageRating * 1.5;

      return {
        recipe,
        matchCount: ingredientMatches.length,
        stats,
        relevanceScore,
        matches:
          matchesSearch &&
          matchesTime &&
          matchesDifficulty &&
          matchesCategory &&
          matchesIngredients,
      };
    })
    .filter((entry) => entry.matches)
    .sort((left, right) => {
      if (filterState.sortMode === "highest-rated") {
        if (right.stats.averageRating !== left.stats.averageRating) {
          return right.stats.averageRating - left.stats.averageRating;
        }

        if (right.stats.ratingsCount !== left.stats.ratingsCount) {
          return right.stats.ratingsCount - left.stats.ratingsCount;
        }
      } else if (filterState.sortMode === "fastest") {
        if (left.recipe.time !== right.recipe.time) {
          return left.recipe.time - right.recipe.time;
        }
      } else if (filterState.sortMode === "alphabetical") {
        return left.recipe.title.localeCompare(right.recipe.title);
      } else if (right.relevanceScore !== left.relevanceScore) {
        return right.relevanceScore - left.relevanceScore;
      }

      if (right.matchCount !== left.matchCount) {
        return right.matchCount - left.matchCount;
      }

      if (right.stats.averageRating !== left.stats.averageRating) {
        return right.stats.averageRating - left.stats.averageRating;
      }

      if (left.recipe.featured !== right.recipe.featured) {
        return Number(right.recipe.featured) - Number(left.recipe.featured);
      }

      return left.recipe.title.localeCompare(right.recipe.title);
    });

  state.filterCacheKey = cacheKey;
  state.filterCacheResults = filteredRecipes;
  return filteredRecipes;
}

function updateHomeFavoritesSection() {
  const homeDom = getHomeDom();

  if (!homeDom.favoritesGrid || !homeDom.favoritesCount || !homeDom.favoritesEmptyState) {
    return;
  }

  const favoriteRecipes = state.recipes.filter((recipe) => state.favoriteIds.has(Number(recipe.id)));

  homeDom.favoritesGrid.innerHTML = favoriteRecipes.length
    ? favoriteRecipes.map((recipe) => createRecipeCard(recipe)).join("")
    : "";
  homeDom.favoritesCount.textContent = `Saved ${favoriteRecipes.length} recipe${
    favoriteRecipes.length === 1 ? "" : "s"
  }`;

  if (state.currentUser) {
    homeDom.favoritesEmptyState.textContent =
      "You have not saved any recipes yet. Tap the heart icon on any card to build a quick-access collection for later.";
    homeDom.favoritesEmptyState.classList.toggle("hidden", favoriteRecipes.length !== 0);
    homeDom.authNote?.classList.add("hidden");
  } else {
    homeDom.favoritesEmptyState.textContent =
      "Favorites are tied to your account. Sign in to start saving recipes.";
    homeDom.favoritesEmptyState.classList.remove("hidden");
    homeDom.authNote?.classList.remove("hidden");
  }

  attachImageFallbacks(homeDom.favoritesGrid);
  updateFavoriteButtons(homeDom.favoritesGrid);
  setupRevealAnimations(homeDom.favoritesGrid);
}

function renderHomePage() {
  const homeDom = getHomeDom();
  const {
    featuredContainer,
    trendingGrid,
    creatorList,
    recipeGrid,
    resultsCount,
    emptyState,
    loadingIndicator,
    searchForm,
    heroSearch,
    heroIngredient,
    timeFilter,
    difficultyFilter,
    categoryFilter,
    ingredientFilter,
    matchModeFilter,
    clearFiltersBtn,
    sortFilter,
    categoryButtons,
    hintChips,
    resultsSummary,
    submissionForm,
    submissionMessage,
    submissionHelpText,
    recipesSection,
  } = homeDom;

  if (
    !featuredContainer ||
    !trendingGrid ||
    !creatorList ||
    !recipeGrid ||
    !resultsCount ||
    !emptyState ||
    !loadingIndicator ||
    !searchForm ||
    !heroSearch ||
    !heroIngredient ||
    !timeFilter ||
    !difficultyFilter ||
    !categoryFilter ||
    !ingredientFilter ||
    !matchModeFilter ||
    !sortFilter ||
    !clearFiltersBtn ||
    !resultsSummary ||
    !submissionForm ||
    !submissionMessage ||
    !submissionHelpText
  ) {
    return;
  }

  function renderFeaturedRecipes() {
    const featuredRecipes = state.recipes.filter((recipe) => recipe.featured).slice(0, 3);
    featuredContainer.innerHTML = featuredRecipes
      .map((recipe) => createRecipeCard(recipe))
      .join("");
  }

  function renderTrendingSection() {
    const trendingRecipes = [...state.recipes]
      .sort((left, right) => {
        const rightStats = getRecipeStats(right.id);
        const leftStats = getRecipeStats(left.id);
        const rightScore =
          rightStats.viewsCount * 1.5 +
          rightStats.averageRating * 10 +
          rightStats.ratingsCount * 2;
        const leftScore =
          leftStats.viewsCount * 1.5 +
          leftStats.averageRating * 10 +
          leftStats.ratingsCount * 2;

        return rightScore - leftScore;
      })
      .slice(0, 3);

    trendingGrid.innerHTML = trendingRecipes.length
      ? trendingRecipes
          .map((recipe) => {
            const stats = getRecipeStats(recipe.id);
            return `
              <article class="trending-card">
                <p class="eyebrow">Trending now</p>
                <h3><a href="recipe.html?id=${recipe.id}">${escapeHtml(recipe.title)}</a></h3>
                <p>${escapeHtml(recipe.description)}</p>
                <div class="trend-meta">
                  <span>${stats.viewsCount} views</span>
                  <span>${stats.averageRating ? stats.averageRating.toFixed(1) : "0.0"}★ avg</span>
                  <span>${escapeHtml(recipe.authorName)}</span>
                </div>
              </article>
            `;
          })
          .join("")
      : `<p class="empty-state empty-state-card">Trending insights will appear as engagement data grows.</p>`;
  }

  function renderCreatorSection() {
    const topCreators = state.creatorStats.slice(0, 4);

    creatorList.innerHTML = topCreators.length
      ? topCreators
          .map(
            (creator) => `
              <article class="creator-card">
                <p class="eyebrow">Creator spotlight</p>
                <h3>${escapeHtml(creator.creatorName)}</h3>
                <p>${creator.recipeCount} published recipe${
                  creator.recipeCount === 1 ? "" : "s"
                }</p>
                <div class="creator-meta">
                  <span>${creator.totalViews} views</span>
                  <span>${creator.totalRatings} ratings</span>
                  <span>${creator.averageRating ? creator.averageRating.toFixed(1) : "0.0"}★ avg</span>
                </div>
              </article>
            `
          )
          .join("")
      : `<p class="empty-state empty-state-card">Top creator insights will appear once recipes gather views and ratings.</p>`;
  }

  function setActiveCategoryButton(activeCategory) {
    categoryButtons.forEach((button) => {
      button.classList.toggle(
        "is-active",
        activeCategory !== "all" && button.dataset.category === activeCategory
      );
    });
  }

  function resetFilters() {
    heroSearch.value = "";
    heroIngredient.value = "";
    ingredientFilter.value = "";
    timeFilter.value = "all";
    difficultyFilter.value = "all";
    categoryFilter.value = "all";
    matchModeFilter.value = "any";
    sortFilter.value = "relevance";
    setActiveCategoryButton("all");
  }

  function syncHeroIngredientToFilters() {
    if (heroIngredient.value.trim()) {
      ingredientFilter.value = heroIngredient.value.trim();
    }
  }

  function renderSubmissionState() {
    submissionHelpText.textContent = state.currentUser
      ? "Your recipe will be saved as pending until an admin approves it."
      : "Sign in first to submit a recipe to the review queue.";
  }

  function renderRecipeGrid() {
    const filteredRecipes = getFilteredRecipesForHome(homeDom);
    const { ingredientValues } = getHomeFilterState(homeDom);
    const activeFilters = [
      timeFilter.value !== "all" ? `time <= ${timeFilter.value} min` : "",
      difficultyFilter.value !== "all" ? difficultyFilter.value : "",
      categoryFilter.value !== "all" ? categoryFilter.value : "",
      ingredientValues.length ? `${ingredientValues.length} ingredient term${ingredientValues.length === 1 ? "" : "s"}` : "",
    ].filter(Boolean);
    const topMatch = filteredRecipes[0];

    recipeGrid.innerHTML = filteredRecipes
      .map(({ recipe, matchCount }) => createRecipeCard(recipe, matchCount))
      .join("");

    resultsCount.textContent = `Showing ${filteredRecipes.length} recipe${
      filteredRecipes.length === 1 ? "" : "s"
    }`;
    resultsSummary.textContent = filteredRecipes.length
      ? activeFilters.length
        ? `Matched by ${activeFilters.join(" • ")}${
            topMatch && topMatch.matchCount
              ? ` • best result has ${topMatch.matchCount} ingredient match${
                  topMatch.matchCount === 1 ? "" : "es"
                }`
              : ""
          }`
        : "Showing the full recipe collection"
      : "No matching recipes with the current search and filters";
    resultsSummary.classList.toggle("hidden", false);

    emptyState.classList.toggle("hidden", filteredRecipes.length !== 0);
    updateFavoriteButtons(recipeGrid);
    attachImageFallbacks(recipeGrid);
    setupRevealAnimations(recipeGrid);
  }

  function setLoadingState(isLoading) {
    loadingIndicator.classList.toggle("hidden", !isLoading);
    recipeGrid.classList.toggle("is-loading", isLoading);
  }

  function scheduleRecipeRender() {
    window.clearTimeout(state.renderTimeoutId);
    setLoadingState(true);

    state.renderTimeoutId = window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        renderRecipeGrid();
        setLoadingState(false);
      });
    }, 70);
  }

  if (!searchForm.dataset.bound) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      syncHeroIngredientToFilters();
      scheduleRecipeRender();
      recipesSection?.scrollIntoView({ behavior: "smooth" });
    });

    [heroSearch, ingredientFilter].forEach((element) => {
      element.addEventListener("input", scheduleRecipeRender);
    });

    [timeFilter, difficultyFilter, categoryFilter, matchModeFilter, sortFilter].forEach(
      (element) => {
        element.addEventListener("change", scheduleRecipeRender);
      }
    );

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const isAlreadyActive = categoryFilter.value === button.dataset.category;
        categoryFilter.value = isAlreadyActive ? "all" : button.dataset.category;
        setActiveCategoryButton(categoryFilter.value);
        scheduleRecipeRender();
        recipesSection?.scrollIntoView({ behavior: "smooth" });
      });
    });

    categoryFilter.addEventListener("change", () => {
      setActiveCategoryButton(categoryFilter.value);
    });

    clearFiltersBtn.addEventListener("click", () => {
      resetFilters();
      scheduleRecipeRender();
    });

    hintChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const ingredientText = chip.dataset.fillIngredients || "";
        heroIngredient.value = ingredientText;
        ingredientFilter.value = ingredientText;
        matchModeFilter.value = "any";
        scheduleRecipeRender();
        recipesSection?.scrollIntoView({ behavior: "smooth" });
      });
    });

    searchForm.dataset.bound = "true";
  }

  if (!submissionForm.dataset.bound) {
    submissionForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitButton = document.getElementById("submit-recipe-btn");

      submissionMessage.classList.add("hidden");
      submissionMessage.classList.remove("is-error", "is-success");
      setButtonBusy(submitButton, true, "Submitting...");

      const payload = {
        title: document.getElementById("recipe-title")?.value.trim(),
        image: document.getElementById("recipe-image")?.value.trim(),
        description: document.getElementById("recipe-description")?.value.trim(),
        ingredients: parseListInput(document.getElementById("recipe-ingredients")?.value),
        instructions: parseListInput(document.getElementById("recipe-steps")?.value),
        time: Number(document.getElementById("recipe-time")?.value),
        difficulty: document.getElementById("recipe-difficulty")?.value,
        category: document.getElementById("recipe-category")?.value,
      };

      const result = await submitRecipe(payload);

      submissionMessage.textContent =
        result.message ||
        "There was a problem submitting your recipe. Please try again.";
      submissionMessage.classList.remove("hidden");
      submissionMessage.classList.add(result.success ? "is-success" : "is-error");

      if (result.success) {
        submissionForm.reset();
        showToast("Recipe submitted for review.", "success");
      }

      setButtonBusy(submitButton, false);
    });

    submissionForm.dataset.bound = "true";
  }

  renderFeaturedRecipes();
  renderTrendingSection();
  renderCreatorSection();
  updateHomeFavoritesSection();
  renderSubmissionState();
  renderRecipeGrid();
  updateFavoriteButtons();
  attachImageFallbacks();
  setupRevealAnimations(document);
}

function createAdminRecipeCard(recipe) {
  return `
    <article class="admin-card">
      <div class="recipe-meta">
        <span>${recipe.time} min</span>
        <span>${recipe.difficulty}</span>
        <span class="recipe-tag">${escapeHtml(recipe.category)}</span>
      </div>
      <h3>${escapeHtml(recipe.title)}</h3>
      <p>${escapeHtml(recipe.description)}</p>
      <p><strong>Ingredients:</strong> ${escapeHtml(recipe.ingredients.join(", "))}</p>
      <p><strong>Steps:</strong> ${recipe.instructions.length} submitted</p>
      <div class="admin-actions">
        <button class="btn btn-primary" type="button" data-admin-action="approved" data-recipe-id="${recipe.id}">
          Approve
        </button>
        <button class="btn btn-danger" type="button" data-admin-action="rejected" data-recipe-id="${recipe.id}">
          Reject
        </button>
      </div>
    </article>
  `;
}

function renderAdminPage() {
  const adminGrid = document.getElementById("admin-grid");
  const adminCount = document.getElementById("admin-count");
  const accessState = document.getElementById("admin-access-state");
  const emptyState = document.getElementById("admin-empty-state");

  if (!adminGrid || !adminCount || !accessState || !emptyState) {
    return;
  }

  if (!state.currentUser || !isAdminUser()) {
    adminGrid.innerHTML = "";
    adminCount.textContent = "Pending 0 recipes";
    accessState.classList.remove("hidden");
    emptyState.classList.add("hidden");
    return;
  }

  accessState.classList.add("hidden");
  adminGrid.innerHTML = state.pendingRecipes.map(createAdminRecipeCard).join("");
  adminCount.textContent = `Pending ${state.pendingRecipes.length} recipe${
    state.pendingRecipes.length === 1 ? "" : "s"
  }`;
  emptyState.classList.toggle("hidden", state.pendingRecipes.length !== 0);

  if (!adminGrid.dataset.bound) {
    adminGrid.addEventListener("click", async (event) => {
      const actionButton = event.target.closest("[data-admin-action]");

      if (!actionButton) {
        return;
      }

      if (actionButton.disabled) {
        return;
      }

      const recipeId = actionButton.dataset.recipeId;
      const action = actionButton.dataset.adminAction;
      setButtonBusy(
        actionButton,
        true,
        action === "approved" ? "Approving..." : "Rejecting..."
      );
      const result = await updateRecipeStatus(recipeId, action);

      if (!result.success) {
        showToast(formatActionError(result.message, "Action failed."), "error");
        setButtonBusy(actionButton, false);
        return;
      }

      showToast(
        action === "approved" ? "Recipe approved." : "Recipe rejected.",
        "success"
      );
      state.pendingRecipes = state.pendingRecipes.filter(
        (recipe) => Number(recipe.id) !== Number(recipeId)
      );
      renderAdminPage();
    });

    adminGrid.dataset.bound = "true";
  }

  attachImageFallbacks(adminGrid);
  setupRevealAnimations();
}

async function initializeAuthState() {
  if (!supabaseClient) {
    state.currentUser = null;
    state.userProfile = null;
    updateAuthUI();
    return;
  }

  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  state.currentUser = session?.user || null;
  await fetchUserProfile();
  updateAuthUI();

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    state.currentUser = session?.user || null;
    await fetchUserProfile();
    updateAuthUI();
    await fetchFavoritesFromDatabase();
    await fetchPendingRecipes();
    if (pageType === "recipe") {
      const params = new URLSearchParams(window.location.search);
      await fetchRecipeEngagement(Number(params.get("id")));
    }

    renderCurrentPage();
  });
}

async function initializeApp() {
  setupSharedNavigation();
  setupAuthUI();
  setupFavoriteDelegation();
  if (pageType !== "recipe") {
    renderCurrentPage();
  }
  document.body.classList.add("page-ready");
  await initializeAuthState();
  await refreshAppData();
}

initializeApp();
