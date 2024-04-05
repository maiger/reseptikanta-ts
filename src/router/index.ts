import { createRouter, createWebHistory } from "vue-router";
import RecipeView from "@/views/RecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: RecipeView,
    },
  ],
});

export default router;
