<template id="projectsSection">
  <v-container class="h-screen px-5 px-lg-10" fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="elevated-text mb-lg-5 mb-md-2 mb-10 custom-font text-center text-h4 font-weight-bold text-md-h3 text-lg-h3">
          Projects
        </h1>

        <v-row class="align-center mt-5 mb-5 px-3">
          <v-btn @click="prevSlide" class="blur-btn1 px-0" height="150" size="small">
            <v-icon class="btn-text text-h2">mdi-chevron-left</v-icon>
          </v-btn>

          <v-col class="d-flex justify-center px-0">
            <v-card elevation="10" height="400px" max-width="700" class="card-img w-50 w-lg-66 mx-auto">
              <img height="400px" :src="projects[currentIndex].img" cover />
            </v-card>

            <div class="w-50 custom-font bg-steam pa-2 px-4 d-flex flex-column">
              <span class="text-h5 mt-2 font-weight-bold">{{ projects[currentIndex].title }}</span>
              <p class="text-title text-grey-lighten-1 text-wrap mt-5">{{ projects[currentIndex].description }}</p>

              <v-row>
                <v-col cols="auto" v-for="(language, index) in projects[currentIndex].languages" :key="index">
                  <v-chip elevation="10" class="text-h6">
                    <v-icon :class="language.color" v-if="language.name.startsWith('mdi-')" left>{{ language.name }}</v-icon>
                    <span v-else>{{ language.color }}</span>
                  </v-chip>
                </v-col>
              </v-row>

              <v-row class="py-0 px-0">
                <v-col v-for="(link, index) in projects[currentIndex].links" :key="index" class="pb-0 site-section d-flex align-center justify-space-between cursor-pointer">
                  <span @click="goToLink(link.websiteLink)" class="text-link text-subtitle-2">
                    {{ link.text }}
                    <v-icon class="ml-2">{{ link.icon }}</v-icon>
                  </span>
                  <v-icon @click="goToLink(link.repositoryLink)" class="text-h4">{{ link.github }}</v-icon>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-btn @click="nextSlide" size="small" height="150" class="blur-btn2 px-0 ">
            <v-icon class="btn-text text-h2">mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>

        <v-row justify="center" class="mt-3">
          <v-icon class="mr-2" v-for="(project, index) in projects" :key="index" @click="goToSlide(index)" :class="{ 'active-dot': index === currentIndex }" icon>
            <v-icon size="" height="" :color="index === currentIndex ? 'grey-lighten-2' : 'grey-darken-2'">mdi-rectangle</v-icon>
          </v-icon>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const currentIndex = ref(0);

const projects = ref([
  {
    img: "/quiz.webp",
    title: "Quiz Studio CMS",
    description:
      "A Quizizz-like backend management system for admins to manage quizzes, track scores, and oversee user activity. Designed to integrate with a frontend for user participation.",
    languages: [
      { name: "mdi-language-php", color: "text-blue" },
      { name: "mdi-laravel", color: "text-red" },
      { name: "mdi-database", color: "text-orange-lighten-1" },
      { name: "mdi-vuejs", color: "text-green-lighten-1" },
      { name: "mdi-vuetify", color: "text-blue-lighten-2" },
      { name: "mdi-language-javascript", color: "text-yellow" },
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
      { name: "mdi-vuejs", color: "text-green-lighten-1" },
      { name: "mdi-vuetify", color: "text-blue-lighten-2" },
      { name: "mdi-language-javascript", color: "text-yellow" },
      { name: "mdi-language-css3", color: "text-blue" },
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
      "A canteen pre-order system with online and cash payment options, featuring an admin CMS for customer management, product CRUD operations, and order tracking. It includes two admin roles: Authority Admin (full access) and Viewer Admin (view-only).",
      languages: [
      { name: "mdi-language-php", color: "text-blue" },
      { name: "mdi-laravel", color: "text-red" },
      { name: "mdi-database", color: "text-orange-lighten-1" },
      { name: "mdi-vuejs", color: "text-green-lighten-1" },
      { name: "mdi-vuetify", color: "text-blue-lighten-2" },
      { name: "mdi-language-javascript", color: "text-yellow" },
    ],
    links: [  {

        github: "mdi-github",
        repositoryLink: "https://github.com/charleszardd/quickbites",

      },],
  },
]);

const goToLink = (url) => {
  window.open(url, "_blank");
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.value.length) % projects.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.h-screen{
  display: flex;
  align-items: center;
   background: linear-gradient(to left ,#171a21, #1b2838 );
}
.bg-steam {
  background-color: #1b2838;
  position: relative;
  
}
.elevated-text {
  color: white; 
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 
    0px 2px 4px rgba(0, 0, 0, 1), 
    0px 4px 8px rgba(0, 0, 0, 1);  
}
.card-img {
  background: rgba(0, 0, 0, 0.4) !important;
  border-radius: 0;
  position: relative;
  overflow: hidden;
}

.card-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.site-section{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 10px;
}
.text-link:hover {
  text-decoration: underline;
  transition: all 0.7s ease-in-out;
}
.blur-btn1{
  border-radius:  20px 0 0 20px ;
  background: linear-gradient(to left ,#1b2838, #171a21 );
}
.blur-btn2{
  border-radius:  0 20px 20px 0 ;
  background: linear-gradient(to left, #1b2838, #171a21);
}

@media (max-width: 600px) {
  .blur-btn1, .blur-btn2 {
  
    height: 100px !important;
  }
  .btn-text {
    font-size: 2rem!important;
  }
  .card-img{
    position: relative;
  }
  .bg-steam{
    position: absolute;
  }
  
}


@media (max-width: 1150px) {
     img{
      height: auto!important;
      display: flex;
      justify-content: center;
      width: 100%;
      aspect-ratio: 16/9;
      background-size: cover;
    }
    .card-img{
      width: 100%!important;
      height: auto!important;
    }
    .bg-steam{
      display: none !important;;
    }

}

</style>
