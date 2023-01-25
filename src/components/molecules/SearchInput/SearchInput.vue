<script lang="ts" setup>
import IconComponent from "@/components/atoms/Icon/IconComponent.vue";
import searchInputCSS from "./SearchInput.module.css";
const emit = defineEmits<{
  (e: "onInputChanged", value: string): void;
}>();

function createDebounce() {
  let timeout: number | undefined = undefined;
  return function (callback: () => void, delayMs: number) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      callback();
    }, delayMs || 500);
  };
}

const debounce = createDebounce();
</script>

<template>
  <div :class="searchInputCSS.inputWrapper">
    <input
      placeholder="Search for shows here like 'Avatar' or 'The Last of Us'"
      :class="searchInputCSS.input"
      @input="
        debounce(
          () =>
            emit(
              'onInputChanged',
              ($event.target as HTMLInputElement)?.value as string
            ),
          200
        )
      "
      type="text"
    />
    <IconComponent :class="searchInputCSS.icon" name="search" />
  </div>
</template>
