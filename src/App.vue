<template>
  <v-app class="bg-color">
    <Navbar />
    <router-view />
  </v-app>
</template>

<script setup>
import Navbar from "@/layouts/Navbar.vue";
</script>
<style scoped>
.bg-color {
  background: linear-gradient(to left, #171a21, #1b2838);
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100vw;

}
</style>