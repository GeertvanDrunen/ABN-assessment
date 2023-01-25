<script lang="ts" setup>
import HeadingCSS from "./HeadingFour.module.css";
</script>

<template>
  <h4 :class="HeadingCSS.heading">
    <slot />
  </h4>
</template>
