<template>
  <v-container class="main-container px-5 px-lg-10" fluid>
    <div class="mt-8 d-flex justify-end sticky-thing" elevation="10">
      <v-icon class="text-yellow cursor-pointer">mdi-robot-outline</v-icon>
    </div>
    <v-row class="items">
      <v-col v-if="loading" class="hero-container">
        <Loader />
      </v-col>
      <v-col v-else class="hero-container">
        <h1 class="text-h5 text-yellow text-lg-h2 hero-font font-weight-bold">
          {{ profile.name }}
        </h1>
        <p class="custom-font text-grey-lighten-2 mt-3 mt-lg-5 text-h6">
          {{ profile.role }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);

const profile = {
  name: "Charles David P. Caseñas",
  role: "Fullsuck Developer",
};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>
<style scoped>
.main-container {
  /* color: #212121; */
}
.items {
  height: 100vh;
}
.hero-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.sticky-thing {
  position: fixed;
  top: 60px;
  right: 40px;
  z-index: 1000;
}
.glow-loader {
  filter: drop-shadow(0 0 10px cyan);
}
@media (max-width: 960px) {
  .sticky-thing {
    top: 50px;
    right: 20px;
  }
}
@media (max-width: 1200px) {
  .sticky-thing {
    top: 60px;
    right: 24px;
  }
}

@media (max-width: 600px) {
  .sticky-thing {
    top: 50px;
    right: 24px;
  }
}
</style>