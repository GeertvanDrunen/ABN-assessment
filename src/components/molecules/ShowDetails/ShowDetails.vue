<script lang="ts" setup>
import HeadingThree from "@/components/atoms/Typography/HeadingThree/HeadingThree.vue";
import type { Show } from "@/typings/api/shows";
import showDetailsCSS from "./ShowDetails.module.css";

const props = defineProps<{
  show: Show;
}>();
</script>

<template>
  <div :class="showDetailsCSS.wrapper">
    <HeadingThree>Details</HeadingThree>

    <div :class="showDetailsCSS.row">
      <span :class="showDetailsCSS.label">Genres</span>
      <span v-if="props.show.genres?.length > 0" :class="showDetailsCSS.value">
        <template v-for="(genre, index) in props.show.genres">
          {{ genre
          }}<template v-if="index != props.show.genres.length - 1"
            >,
          </template></template
        >
      </span>
    </div>
    <div v-if="props.show.language" :class="showDetailsCSS.row">
      <span :class="showDetailsCSS.label">Language</span>
      <span :class="showDetailsCSS.value">
        {{ props.show.language }}
      </span>
    </div>
    <div v-if="props.show.premiered" :class="showDetailsCSS.row">
      <span :class="showDetailsCSS.label">Premiered</span>
      <span :class="showDetailsCSS.value">
        {{ props.show.premiered }}
      </span>
    </div>
    <div v-if="props.show.ended" :class="showDetailsCSS.row">
      <span :class="showDetailsCSS.label">Ended</span>
      <span :class="showDetailsCSS.value">
        {{ props.show.ended }}
      </span>
    </div>
  </div>
</template>
