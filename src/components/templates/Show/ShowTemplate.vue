<script setup lang="ts">
import showCSS from "./show.module.css";
import { useShowDetailsQuery } from "@/api/queries";
import Content from "../../atoms/Typography/Content/ContentComponent.vue";
import { useRoute, useRouter } from "vue-router";
import HeadingOne from "@/components/atoms/Typography/HeadingOne/HeadingOne.vue";
import ShowDetails from "@/components/molecules/ShowDetails/ShowDetails.vue";
import IconLink from "@/components/atoms/IconLink/IconLink.vue";

const route = useRoute();
const router = useRouter();
const showDetails = useShowDetailsQuery(route.params.id as string);
</script>

<template>
  <div :class="showCSS.pageWrapper">
    <main :class="showCSS.main">
      <div :class="showCSS.imageWrapper">
        <img
          :class="showCSS.image"
          :src="
            showDetails.data.value?.image?.original ??
            'https://place-hold.it/700x1000'
          "
        />
      </div>

      <div :class="showCSS.contentWrapper">
        <IconLink
          @on-click="router.go(-1)"
          icon="angleLeft"
          title="Go Back"
          target="/"
        />
        <HeadingOne>{{ showDetails.data.value?.name }}</HeadingOne>
        <Content :class="showCSS.content">
          <span v-html="showDetails.data.value?.summary" />
        </Content>
        <ShowDetails
          v-if="showDetails.data.value !== undefined"
          :show="showDetails.data.value"
        />
      </div>
    </main>
  </div>
</template>
