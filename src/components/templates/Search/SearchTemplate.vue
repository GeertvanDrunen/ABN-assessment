<script setup lang="ts">
import { useShowsSearchQuery } from "@/api/queries";
import HeadingTwo from "@/components/atoms/Typography/HeadingTwo/HeadingTwo.vue";
import HeadingThree from "@/components/atoms/Typography/HeadingThree/HeadingThree.vue";
import ShowCardMolecule from "@/components/molecules/ShowCard/ShowCard.vue";
import SearchInput from "@/components/molecules/SearchInput/SearchInput.vue";
import { ref } from "vue";
import searchCSS from "./search.module.css";

const searchQuery = ref("");
const showSearchQuery = useShowsSearchQuery(searchQuery);

const onInputChanged = (val: string) => {
  searchQuery.value = val;
};
</script>

<template>
  <main :class="searchCSS.main">
    <SearchInput @on-input-changed="onInputChanged" />

    <div :class="searchCSS.searchResultsWrapper">
      <HeadingTwo v-if="showSearchQuery.data.value?.length">
        Results for '{{ searchQuery }}'
      </HeadingTwo>

      <HeadingThree>
        <template
          v-if="!showSearchQuery.data.value?.length && !searchQuery.length"
        >
          Your search results will show up here.
        </template>
        <template
          v-if="!showSearchQuery.data.value?.length && searchQuery.length"
        >
          We could not find any results for '{{ searchQuery }}''
        </template>
      </HeadingThree>

      <div :class="searchCSS.searchResults">
        <div v-for="item in showSearchQuery.data.value" :key="item.show.id">
          <ShowCardMolecule :show="item.show" />
        </div>
      </div>
    </div>
  </main>
</template>
