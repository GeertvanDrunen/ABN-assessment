<script lang="ts" setup>
import ContentCSS from "./content.module.css";
</script>

<template>
  <div :class="ContentCSS.content">
    <slot />
  </div>
</template>
