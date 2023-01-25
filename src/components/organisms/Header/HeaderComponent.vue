<script lang="ts" setup>
import IconComponent from "@/components/atoms/Icon/IconComponent.vue";
import headerCSS from "./Header.module.css";
</script>

<template>
  <header :class="headerCSS.header">
    <router-link to="/">
      <IconComponent :class="headerCSS.logo" name="logo" />
    </router-link>
    <nav>
      <ul :class="headerCSS.list">
        <li :class="headerCSS.listItem">
          <router-link :class="headerCSS.listLink" to="/search">
            <IconComponent :class="headerCSS.listIcon" name="search" />
            <span :class="headerCSS.listItemTitle">Search</span>
          </router-link>
        </li>
        <li :class="headerCSS.listItem">
          <a
            href="mailto:geert.van.drunen@gmail.com"
            :class="headerCSS.listLink"
          >
            <IconComponent :class="headerCSS.listIcon" name="mail" />
            <span :class="headerCSS.listItemTitle">Get in Touch</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
