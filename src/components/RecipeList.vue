<template>
  <section class="recipe-list-section">
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <!-- <RecipeListItem :recipe="recipe" /> -->
        <div>{{ recipe.id }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Recipe } from "@/types";

// import RecipeListItem from "./RecipeListItem.vue";

const props = defineProps<{
  recipes: Recipe[];
}>();
</script>

<style lang="scss" scoped>
.recipe-list-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0 10rem 0;
  max-width: 180rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
