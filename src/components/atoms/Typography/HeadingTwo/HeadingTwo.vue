<script lang="ts" setup>
import HeadingCSS from "./HeadingTwo.module.css";
</script>

<template>
  <h2 :class="HeadingCSS.heading">
    <slot />
  </h2>
</template>
