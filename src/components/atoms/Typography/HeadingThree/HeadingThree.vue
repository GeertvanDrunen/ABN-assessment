<script lang="ts" setup>
import HeadingCSS from "./HeadingThree.module.css";
</script>

<template>
  <h3 :class="HeadingCSS.heading">
    <slot />
  </h3>
</template>
