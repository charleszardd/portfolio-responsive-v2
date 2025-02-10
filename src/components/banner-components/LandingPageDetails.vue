<template id="homeSection">
  <v-container class="main-container custom-font px-10 px-lg-10" fluid>
    <div class="mt-8 d-flex justify-end sticky-thing" elevation="10">
      <v-btn @click="$emit('open-chat')" icon color="#171a21" flat
        ><v-icon class="icon-color cursor-pointer"
          >mdi-robot-outline</v-icon
        ></v-btn
      >
    </div>
    <v-row class="items">
      <v-col v-if="loading" class="hero-container">
        <Loader />
      </v-col>
      <v-col v-else class="hero-container">
        <div class="profile rounded-lg mb-10 d-flex justify-center align-center">
          <img class="profile-img" src="/charles.png" alt="" />
        </div>
        <div
          class="profile-details d-flex justify-center text-center flex-column"
        >
          <h1
            class="text-h4 mb-3 elevated-text text-color text-lg-h3 custom-font font-weight-bold"
          >
            {{ profile.name }}
          </h1>
          <p
            class="custom-font text-grey-lighten-2 mt-3 mt-lg-5 text-subtitle-2 text-lg-h6"
          >
            {{ profile.description }}
          </p>
          <div class="mt-5 btn-group">
            <Button
              @click="generatePDF"
              :loading="buttonIsLoading"
              elevation="10"
              width="200"
              height="45"
              class="btn-1 mr-5"
              text="Download CV"
              icon="mdi-tray-arrow-down"
            />
            <Button
              @click="$emit('scroll-to-section', 'about')"
              elevation="10"
              width="200"
              height="45"
              class="btn-2"
              text="Learn more"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { generateCV } from "@/services/GenerateCV";

const buttonIsLoading = ref(false);

const generatePDF = () => {
  buttonIsLoading.value = true;
  setTimeout(() => {
    generateCV();
    buttonIsLoading.value = false;
  }, 1000);
};

const loading = ref(true);

const profile = {
  name: "Charles David P. Caseñas",
  description:
    "Full-stack developer passionate about Laravel, Vue.js, and crafting seamless web experiences with modern design.",
};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>
<style scoped>
.main-container {
  background: linear-gradient(to left, #171a21, #1b2838);
}
.profile {
  width: 200px;
  height: 200px;
  background-color: #272727;
  border: 2px solid #66c0f4 !important;
  overflow: hidden;
}
.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-1 {
  border: 2px solid #66c0f4;
  background-color: transparent;
  color: #66c0f4;
}
.btn-2 {
  background: linear-gradient(to left, #3268e6, #66c0f4);
}
.items {
  height: 100vh;
}
.icon-color {
  color: #66c0f4;
}
.elevated-text {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 1), 0px 4px 8px rgba(0, 0, 0, 1);
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
  right: 32px;
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

@media (max-width: 1400px) {
  .profile {
    width: 150px;
    height: 150px;
    background-color: #272727;
    border: 2px solid grey;
  }
}

@media (max-width: 600px) {
  .sticky-thing {
    top: 50px;
    right: 10px;
  }
  .btn-group {
    flex-direction: row;
    display: flex;
    padding-right: 10px;
  }
  .btn-1,
  .btn-2 {
    width: auto !important;
  }
  .profile {
    width: 200px;
    height: 200px;
  }
  .profile-details {
    text-align: start !important;
  }
}
</style>