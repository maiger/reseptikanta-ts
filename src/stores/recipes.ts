import { defineStore } from "pinia";
import type { Recipe } from "@/types";

export const useRecipeStore = defineStore({
  id: "recipes",
  state: () => ({
    recipes: [] as Recipe[],
  }),
  getters: {
    getRecipes: (state) => state.recipes,
    getRecipeById: (state) => {
      return (recipeId: number) =>
        state.recipes.find((recipe: Recipe) => recipe.id === recipeId);
    },
  },
  actions: {
    setRecipes(val: Recipe[]) {
      this.recipes = val;
    },
  },
});
