<script lang="ts" setup>
import HeadingCSS from "./HeadingOne.module.css";
</script>

<template>
  <h1 :class="HeadingCSS.heading">
    <slot />
  </h1>
</template>
