<template id="aboutSection">
  <div class="py-10 py-lg-0">
    <v-container class="bg-steam px-5 px-lg-10 grid-container" fluid>
      <v-row class="about-container-container d-flex flex-column align-center">
        <v-col class="about-container px-10 px-lg-5">
          <v-row class="px-0 d-flex flex-wrap align-center ">
   
            <v-col cols="12" md="6" data-aos="fade-right" data-aos-duration="3000" class="slogan-details">
              <LottieAnimationFiles class="animation-data" :animationData="animationData" style="min-width: 200px; width: 100%; height: auto;"/>
            </v-col>

            <v-col cols="12" md="6" class="about-details" data-aos="fade-left" data-aos-duration="3000">
              <span class="custom-font text-h6 d-block text-md-h5 text-lg-h4">Who am I?</span>
              <h3 class="custom-font py-2 py-lg-5 elevated-text font-color text-h4 text-md-h3 text-lg-h2 font-weight-bold">
                I'm Charles Caseñas
              </h3>
              <p class="custom-font text-subtitle-2 text-md-subtitle-1 text-lg-subtitle-1 text-grey-lighten-4">
                Wazzup 👋🏻, I’m a passionate Laravel and Vue.js developer dedicated to writing clean, efficient code and crafting seamless user experiences. With a strong foundation in frontend and backend development, I specialize in Vuetify, Tailwind CSS, and API integrations, always striving for modern, scalable solutions.
                <br /><br />
                Beyond coding, I thrive on learning new technologies, optimizing workflows, and collaborating with like-minded professionals. My dream in the next 5–10 years is to work remotely with top industry experts, continuously improving my skills while staying innovative and adaptable in the ever-evolving tech landscape.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import LottieAnimationFiles from "@/components/reusables/LottieAnimationFiles.vue";
import Coding from '@/lottie-animation/Coding.json';

const animationData = ref(Coding);

onMounted(() => {
    AOS.init();
});
</script>

<style scoped>
.about-details {
    padding-left: 0;
}

.grid-container {
    position: relative;
    background: linear-gradient(to left, #171a21, #1b2838);
    overflow: hidden;
}

.about-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.bg-steam {
    background-color: #1b2838;
    height: auto;
    min-height: 100vh;
}

.slogan-details {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
