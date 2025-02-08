<template id="aboutSection">
    <v-container  class="bg-steam  px-5 px-lg-10 grid-container" fluid>
        <v-row class="about-container-container d-flex flex-column align-center">
            <v-col class="about-container">
                <v-col class="px-0 d-flex flex-column flex-lg-row align-center">
                    <div class="about-details" data-aos="fade-right" data-aos-duration="2000">
                        
                        <span  class="custom-font mb-lg-5 mb-5 text-h6 d-block text-md-h5 text-lg-h4">Who am I? </span>
                        <h3 class="hero-font elevated-text font-color text-h4 text-md-h3 mb-4 text-lg-h2 font-weight-bold">
                            I'm Charles Caseñas
                        </h3>
                        <div class="w-100 mr-10">
                            <p class="custom-font text-subtitle-2 text-md-subtitle-1 text-lg-subtitl-1 text-grey-lighten-4">
                                Wazzup 👋🏻, I’m a passionate Laravel and Vue.js developer dedicated to writing clean, efficient code and crafting seamless user experiences. With a strong foundation in frontend and backend development, I specialize in Vuetify, Tailwind CSS, and API integrations, always striving for modern, scalable solutions.
                                <br /><br />
                                Beyond coding, I thrive on learning new technologies, optimizing workflows, and collaborating with like-minded professionals. My dream in the next 5–10 years is to work remotely with top industry experts, continuously improving my skills while staying innovative and adaptable in the ever-evolving tech landscape.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" class="slogan-details w-100">
                        <LottieAnimationFiles class="animation-data" :animationData="animationData" width="450px" height="500px"/>
                    </div>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
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
.about-details{
    padding-right: 5rem;
}
.quote-font, .slogan-font, .font-color{
    color:#66c0f4;
}
.grid-container {
    position: relative;
      background: linear-gradient(to left ,#171a21, #1b2838 );
    overflow: hidden;
}

.grid-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
        to right,
        rgba(255, 255, 255, 0.1) 0px,
        rgba(255, 255, 255, 0.1) 1px,
        transparent 1px,
        transparent 50px
    ),
    repeating-linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.1) 0px,
        rgba(255, 255, 255, 0.1) 1px,
        transparent 1px,
        transparent 50px
    );
    z-index: 0;
}
.elevated-text {
  color: #66c0f4; 
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 
    0px 2px 4px rgba(0, 0, 0, 1), 
    0px 4px 8px rgba(0, 0, 0, 1);  
}
.grid-container::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
    z-index: 1;
}

.about-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center; 
    min-height: 100vh; 
}


@media (max-width: 1400px) {
  .about-details {
    padding-right: 5em;
  }
  .slogan{
    font-size: 3rem!important;
  }

}
@media (max-width: 800px) {
  .about-details {
    padding-right: 0px;
  }
  .slogan-details{
    display: flex;
    justify-content: center;
  }
  .animation-data{
    height: 250px!important;
    width: 250px!important;
  }
}
@media (max-width: 900px) {
  .about-details {
    padding-right: 0px;
  }
  .slogan-details{
    display: flex;
    justify-content: center;
  }
  .animation-data{
    height: 250px!important;
    width: 250px!important;
  }
}

@media (max-width: 700px) {
  .about-details {
    padding-right: 0px;
  }
  .slogan-details{
    display: flex;
    justify-content: center;
  }
  .animation-data{
    height: 250px!important;
    width: 250px!important;
  }
}

@media (max-width: 600px) {
  .about-details {
    padding-right: 0px;
  }
  .slogan-details{
    display: flex;
    justify-content: center;
  }
  .animation-data{
    height: 250px!important;
    width: 250px!important;
  }
}
@media (max-width: 1000px) {
    .about-details{
        padding-right: 0px;
    }
    .slogan-details{
    display: flex;
    justify-content: center;
  }
  .animation-data{
    height: 300px!important;
    width: 300px!important;
  }
}
@media (max-width: 1200px) {
  .about-details {
    padding-right: 0px;
  }
  .slogan-details{
    display: flex;
    justify-content: center;
  }
  .animation-data{
    height: 300px!important;
    width: 300px!important;
  }

}
.bg-steam{
    background-color: 	#1b2838;
    height: 100vh;
}
</style>
