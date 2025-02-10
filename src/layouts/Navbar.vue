<template>
  <v-container class="custom-font" fluid>
    <v-app-bar class="container px-0 px-lg-5" app>

      <v-app-bar-nav-icon  v-if="$vuetify.display.smAndDown" @click="toggleMenu">
        <v-icon
          class="transition-transform"
          :class="{ 'rotate-180': menuOpen }"
        >
          {{ menuOpen ? "mdi-close" : "mdi-menu" }}
        </v-icon>
      </v-app-bar-nav-icon>


      <v-btn
        class="mr-5"
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('homeSection')"
        text
      >
        Home
      </v-btn>
      <v-btn
        class="mr-5"
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('aboutSection')"
        text
      >
        About
      </v-btn>
      <v-btn
        class="mr-5"
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('skillsSection')"
        text
      >
        Skills
      </v-btn>
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        @click="onScrollToSection('projectsSection')"
        text
      >
        Projects
      </v-btn>

      <v-spacer></v-spacer>

      <!-- GitHub Button -->
      <Button
        icon="mdi-github"
        @click="goToSite('https://github.com/charleszardd')"
        class="text-h5"
        :addMargin="false"
      />
    </v-app-bar>

    <!-- Sidebar (Drawer) -->
    <v-navigation-drawer class="sidebar" v-model="menuOpen" temporary left>
      <v-list>
        <v-list-item @click="onScrollToSection('homeSection'), (menu = false)">
          <v-icon class="mr-5">mdi-home</v-icon> Home
        </v-list-item>
        <v-list-item
          class="mt-2"
          @click="onScrollToSection('aboutSection'), (menu = false)"
        >
          <v-icon class="mr-5">mdi-account-cowboy-hat</v-icon> About
        </v-list-item>
        <v-list-item
          class="mt-2"
          @click="onScrollToSection('skillsSection'), (menu = false)"
        >
          <v-icon class="mr-5">mdi-tools</v-icon> Skills
        </v-list-item>
        <v-list-item
          class="mt-2"
          @click="onScrollToSection('projectsSection'), (menu = false)"
        >
          <v-icon class="mr-5">mdi-folder</v-icon> Projects
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const onScrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    menuOpen.value = false;
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
.sidebar {
  background-color: #171a21;
}
.transition-transform{
  transition: transform 0.4s ease-in-out;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
