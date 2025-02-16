<template id="projectsSection">
  <v-container class="h-screen custom-font px-5 px-lg-10" fluid>
    <v-row class="px-3 px-lg-10 d-flex">
      <v-col cols="12" class="pr-0 pr-lg-5 px-0">
        <h1 class="elevated-text mb-lg-5 mb-md-2 mb-10 custom-font text-center text-h4 font-weight-bold text-md-h3 text-lg-h3">
          Projects
        </h1>
        <p class="text-center text-grey-lighten-2">Showcasing My Journey: Personal Creations & Team Collaborations</p>

        <!-- Desktop/Tablet View -->
        <v-row v-if="$vuetify.display.smAndUp" class="align-center mt-5 mb-5 ">
          <v-btn elevation="10" @click="prevSlide" class="blur-btn1 px-0" height="150" size="small">
            <v-icon class="btn-text text-h2">mdi-chevron-left</v-icon>
          </v-btn>

          <v-col class="d-flex project-container px-0">
            <div class="project-wrapper">
              <v-card elevation="10" class="card-img">
                <v-fade-transition mode="out-in">
                  <img class="project-img" :key="currentIndex" :src="projects[currentIndex].img" cover />
                </v-fade-transition>
              </v-card>

              <v-card elevation="10" class="details-card custom-font bg-steam pa-2 px-4 d-flex flex-column">
                <span class="text-h5 mt-2 font-weight-bold">{{ projects[currentIndex].title }}</span>
                <p class="text-title text-grey-lighten-1 text-wrap mt-5">
                  {{ projects[currentIndex].description }}
                </p>

                <v-row>
                  <v-col cols="auto" v-for="(language, index) in projects[currentIndex].languages" :key="index">
   
                      <component elevation="10" :is="language.component" class="icon-size my-5" />
                   
                  </v-col>
                </v-row>

                <v-row class="px-4 py-5 site-links">
                  <v-col v-for="(link, index) in projects[currentIndex].links" :key="index" class="pb-0 d-flex align-center justify-space-between ">
                    <span @click="goToLink(link.websiteLink)" class="text-link cursor-pointer text-subtitle-2">
                      {{ link.text }}
                      <v-icon class="ml-2">{{ link.icon }}</v-icon>
                    </span>
                    <v-icon v-if="link.github" @click="goToLink(link.repositoryLink)" class="cursor-pointer text-h4">{{ link.github }}</v-icon>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>

          <v-btn elevation="10" @click="nextSlide" size="small" height="150" class="blur-btn2 px-0">
            <v-icon class="btn-text text-h2">mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>

        <!-- Mobile View -->
        <v-row v-else class="projects-mobile mt-10 mb-10 pb-10">
          <v-col v-for="(project, index) in projects.slice(0, 3)" :key="index" cols="12" class="mb-10">
            <v-card elevation="10" class="mobile-card ">
              <img :src="project.img" cover class="mobile-img" />
              
              <div class="mobile-details bg-steam ">
                <span class="text-h5 font-weight-bold">{{ project.title }}</span>
                <p class="text-title text-grey-lighten-1 text-wrap mt-3">
                  {{ project.description }}
                </p>

                <v-row class="mt-5">
                  <v-col v-for="(link, index) in project.links" :key="index" class="d-flex align-center justify-space-between">
                    <span @click="goToLink(link.websiteLink)" class="text-link text-subtitle-2">
                      {{ link.text }}
                      <v-icon class="ml-2">{{ link.icon }}</v-icon>
                    </span>
                    <v-icon v-if="link.github" @click="goToLink(link.repositoryLink)" class="text-h4">{{ link.github }}</v-icon>
                  </v-col>
                </v-row>
              </div>
            </v-card>

          </v-col>
          <v-col v-if="projects.length > 3" cols="12" class="d-flex justify-center mb-5 pt-0">
    <Button height="45" class="show-more-btn" text="Show more"  />
  </v-col>
      
        </v-row>

        <!-- Pagination Dots (Desktop/Tablet only) -->
        <v-row v-if="$vuetify.display.smAndUp" justify="center" class="mt-3">
          <v-icon class="mr-2" v-for="(project, index) in projects" :key="index" @click="goToSlide(index)" :class="{ 'active-dot': index === currentIndex }" icon>
            <v-icon size="" height="" :color="index === currentIndex ? 'grey-lighten-2' : 'grey-darken-2'">mdi-circle</v-icon>
          </v-icon>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import PHPicon from "@/components/reusables/icons/PHPicon.vue";
import MySQLicon from "@/components/reusables/icons/MySQLicon.vue";
import LaravelIcon from "@/components/reusables/icons/LaravelIcon.vue";
import VueJSIcon from "@/components/reusables/icons/VueJSIcon.vue";
import VuetifyIcon from "@/components/reusables/icons/VuetifyIcon.vue";
import JavascriptIcon from "@/components/reusables/icons/JavascriptIcon.vue";
import CSSIcon from "@/components/reusables/icons/CSSIcon.vue";

const currentIndex = ref(0);

const projects = ref([
  {
    img: "/quiz.webp",
    title: "Quiz Studio CMS",
    description:
      "A Quizizz-like backend management system for admins to manage quizzes, track scores, and oversee user activity. Designed to integrate with a frontend for user participation.",
    languages: [
      { component: PHPicon },
      { component: LaravelIcon },
      { component: MySQLicon },
      { component: VueJSIcon },
      { component: VuetifyIcon },
      { component: JavascriptIcon },
    ],
    links: [
      {
        text: "View website",
        icon: "mdi-open-in-new",
        websiteLink: "https://dev.studio.passafund.com/auth/login",
      },
    ],
  },
  {
    img: "/ai-chatbot.webp",
    title: "Personalized Japanese Actress Chatbot AI",
    description:
      "A Gemini API-powered chatbot AI, personalized to provide accurate and engaging answers about Japanese actresses using curated data.",
    languages: [
      { component: VueJSIcon },
      { component: VuetifyIcon },
      { component: JavascriptIcon },
      { component: CSSIcon },
    ],
    links: [
      {
        text: "View website",
        icon: "mdi-open-in-new",
        github: "mdi-github",
        repositoryLink: "https://github.com/charleszardd/ai-chatbot-jav",
        websiteLink: "https://ai-chatbot-jav.vercel.app/",
      },
    ],
  },
  {
    img: "/quickbites_ss.webp",
    title: "QuickBites: Canteen Pre Order System",
    description:
      "A canteen pick-up pre-order system with online/cash payments, an admin CMS, and dual admin roles: Authority (full control) and Viewer (view-only).",
    languages: [
      { component: PHPicon },
      { component: LaravelIcon },
      { component: MySQLicon },
      { component: VueJSIcon },
      { component: VuetifyIcon },
      { component: JavascriptIcon },
    ],
    links: [
      {
        github: "mdi-github",
        repositoryLink: "https://github.com/charleszardd/quickbites",
      },
    ],
  },
]);

const goToLink = (url) => {
  window.open(url, "_blank");
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + projects.value.length) % projects.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.h-screen {
  display: flex;
  align-items: center;
  background: linear-gradient(to left, #171a21, #1b2838);
  height: auto;
  min-height: 100vh;
  padding: 20px;
}
.bg-card{
  background: linear-gradient(to left, #171a21, #1b2838);
}
.project-container {
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
}
.icon-size{
  width: 40px;
  height: 40px;
}
.project-wrapper {
  display: flex;
  width: 100%;
  gap: 0;
  max-width: 1400px;
}

.card-img {
  width: 65%;
  height: 400px;
  background: rgba(0, 0, 0, 0.4) !important;
  border-radius: 15px 0 0 15px;
  position: relative;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details-card {
  width: 50%;
  height: 400px;
  position: relative;
  border-radius: 0 15px 15px 0;
}

.site-links{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

.projects-mobile {
  height: auto;
  min-height: auto;

}
.show-more-btn{
  border: 2px solid #66c0f4!important;
  background: transparent!important;
  color: #66c0f4;
}
.mobile-card {
  width: 100%;
  background: transparent !important;
}

.mobile-img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.mobile-details {
  width: 100%;
  padding: 1rem !important;
  height: auto;
}

.bg-steam {
  background-color: #171a21;
}
.text-link:hover {
  text-decoration: underline;
  transition: all 0.7s ease-in-out;
}

.blur-btn1 {
  border-radius: 20px 0 0 20px;
  background: linear-gradient(to left, #1b2838, #171a21);
}

.blur-btn2 {
  border-radius: 0 20px 20px 0;
  background: linear-gradient(to left, #1b2838, #171a21);
}

@media (min-width: 1400px) {
  .project-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
}

@media (max-width: 959px) {
  .card-img, .details-card {
    width: 100%;
  }
  
  .project-wrapper {
    flex-direction: column;
  }
  
  .details-card {
    height: auto;
    min-height: 300px;
  }
}
@media (max-width: 600px) {
  .h-screen{
    min-height: auto;
    height: auto;
    padding-top:60em;
  }

}
</style>
