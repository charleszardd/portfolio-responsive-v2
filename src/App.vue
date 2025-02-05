<template>
  <v-app class="bg-color">
    <Navbar />
    <router-view />

  </v-app>
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue';
</script>
<style scoped>
/* .bg-color{
    background-color: #f0EAD6;
} */
</style>