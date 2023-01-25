<script lang="ts" setup>
import type { Show } from "@/typings/api/shows";
import showsSliderCSS from "./showsSlider.module.css";
import ShowCardMolecule from "@/components/molecules/ShowCard/ShowCard.vue";
import Flicking from "@egjs/vue3-flicking";
import HeadingTwo from "@/components/atoms/Typography/HeadingTwo/HeadingTwo.vue";
import IconComponent from "@/components/atoms/Icon/IconComponent.vue";
import { ref } from "vue";
import type { VueFlicking } from "@egjs/vue3-flicking/declaration/types";

const flicking = ref<VueFlicking | null>(null);

const props = defineProps<{
  title: string;
  shows: Show[] | undefined;
}>();
</script>

<template>
  <div :class="showsSliderCSS.sliderWrapper">
    <div :class="showsSliderCSS.title">
      <HeadingTwo>{{ props.title }}</HeadingTwo>
    </div>

    <button
      @click="flicking?.prev()"
      :class="[showsSliderCSS.control, showsSliderCSS.controlLeft]"
    >
      <IconComponent :class="[showsSliderCSS.controlIcon]" name="angleLeft" />
    </button>
    <button
      @click="flicking?.next()"
      :class="[showsSliderCSS.control, showsSliderCSS.controlRight]"
    >
      <IconComponent :class="[showsSliderCSS.controlIcon]" name="angleRight" />
    </button>

    <Flicking
      ref="flicking"
      :class="showsSliderCSS.slider"
      :options="{
        bound: true,
        align: 'prev',
        needPanelThreshold: 0,
      }"
    >
      <div
        :class="showsSliderCSS.showWrapper"
        v-for="item in props.shows"
        :key="item.id"
      >
        <ShowCardMolecule :isSlide="true" :show="item" />
      </div>
    </Flicking>
  </div>
</template>

<style>
@import url("node_modules/@egjs/vue3-flicking/dist/flicking");
</style>
