<script lang="ts" setup>
import type { Show } from "@/typings/api/shows";
import showCardCSS from "./ShowCard.module.css";
import HeadingFour from "@/components/atoms/Typography/HeadingFour/HeadingFour.vue";

const props = defineProps<{
  show: Show;
  isSlide?: boolean;
}>();
</script>

<template>
  <router-link
    :class="{
      [showCardCSS['link']]: true,
      [showCardCSS['slideLink']]: !!props.isSlide,
    }"
    :to="`/shows/${props.show.id}`"
  >
    <div :class="showCardCSS.imageWrapper">
      <img
        :class="showCardCSS.image"
        :src="props.show.image?.medium ?? 'https://place-hold.it/350x500'"
      />
    </div>
    <HeadingFour :class="showCardCSS.title">{{ props.show.name }}</HeadingFour>
  </router-link>
</template>
