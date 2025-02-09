<template>
  <v-container class="custom-font" fluid>
    <v-app-bar class="container px-0 px-lg-5" app>
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click="menu = !menu"
      ></v-app-bar-nav-icon>
      <v-btn
        class="mr-5"
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('homeSection')"
        text
        >Home</v-btn
      >
      <v-btn
        class="mr-5"
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('aboutSection')"
        text
        >About</v-btn
      >
      <v-btn
        class="mr-5"
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('skillsSection')"
        text
        >Skills</v-btn
      >
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('projectsSection')"
        text
        >Projects</v-btn
      >

      <v-spacer></v-spacer>

      <Button
        icon="mdi-github"
        @click="goToSite('https://github.com/charleszardd')"
        class="text-h5"
        :addMargin="false"
      />
    </v-app-bar>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const menu = ref(false);

const onScrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const goToSite = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.container {
  background-color: #171a21 !important;
}
</style>