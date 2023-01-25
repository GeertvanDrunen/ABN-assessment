<script setup lang="ts">
import { useAllShowsQuery } from "@/api/queries";
import { sortShowsByRating } from "@/misc/sortByRating";
import { ref } from "vue";
import ShowsSliderOrganism from "../../organisms/ShowSlider/ShowsSlider.vue";

const genres = ref(["Comedy", "Drama", "Action", "Romance"]);
const allShows = useAllShowsQuery();

const showsByGenre = function (genre: string) {
  const filteredShows = allShows.data.value?.filter((show) =>
    show.genres.includes(genre)
  );

  return sortShowsByRating(filteredShows);
};
</script>

<template>
  <main>
    <ShowsSliderOrganism
      v-for="genre in genres"
      :key="genre"
      :title="genre"
      :shows="showsByGenre(genre)"
    />
  </main>
</template>

<style>
@import url("node_modules/@egjs/vue3-flicking/dist/flicking");
</style>
