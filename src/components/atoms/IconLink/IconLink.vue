<script setup lang="ts">
import IconComponent from "../Icon/IconComponent.vue";
import IconLinkCSS from "./IconLink.module.css";

const emit = defineEmits(["onClick"]);

const props = defineProps<{
  icon: string;
  title: string;
}>();
</script>

<template>
  <button :class="IconLinkCSS.link" @click="emit('onClick')">
    <IconComponent :class="IconLinkCSS.icon" :name="props.icon" />
    <span :class="IconLinkCSS.title">{{ props.title }}</span>
  </button>
</template>
