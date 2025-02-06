<template>
  <v-container class="custom-font mt-5 mb-10 mt-lg-10 px-5 px-lg-10" fluid>
    <v-row>
      <v-col cols="12">
        <h1
          class="mb-lg-5 mb-md-2 mb-1 text-center text-h6 font-weight-bold text-md-h5 text-lg-h4"
        >
          Projects
        </h1>

        <v-row class="align-center mt-10 mb-5 px-3">
          <v-btn @click="prevSlide" class="blur-btn px-0" height="100" size="small">
            <v-icon class="text-h2">mdi-chevron-left</v-icon>
          </v-btn>

          <v-col class="d-flex justify-center">
            <v-card elevation="10" height="400px" max-width="700" class="w-50 w-lg-66 mx-auto">
              <img height="400px" :src="projects[currentIndex].img" cover />
            </v-card>

            <div elevation="10" class="w-50 bg-steam pa-2 px-4 d-flex flex-column">
              <span class="text-h5 mt-2 font-weight-bold">{{
                projects[currentIndex].title
              }}</span>
              <p class="text-title text-wrap mt-5">
                {{ projects[currentIndex].description }}
              </p>

              <v-row>
                <v-col
                  cols="auto"
                  v-for="(language, index) in projects[currentIndex].languages"
                  :key="index"
                >
                  <v-btn size="small" elevation="10" class="text-h6 bg-blue-grey-darken-4">
                    <v-icon
                      :class="language.color"
                      v-if="language.name.startsWith('mdi-')"
                      left
                      >{{ language.name }}</v-icon
                    >
                    <span v-else>{{ language.color }}</span>
                
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="py-0 px-0">
                <v-col
                  v-for="(link, index) in projects[currentIndex].links"
                  :key="index"
                  class="pb-0 d-flex align-center justify-space-between cursor-pointer"
                >
                  <span
                    @click="goToLink(link.websiteLink)"
                    class="text-link text-subtitle-2"
                    >{{ link.text }}
                    <v-icon class="ml-2">{{ link.icon }}</v-icon></span
                  >
                  <v-icon
                    @click="goToLink(link.repositoryLink)"
                    class="text-h4"
                    >{{ link.github }}</v-icon
                  >
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-btn @click="nextSlide" size="small" height="100" class="blue-btn px-0">
            <v-icon class="text-h2">mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>

        <v-row justify="center" class="mt-3">
          <v-icon
            class="mr-2"
            v-for="(project, index) in projects"
            :key="index"
            @click="goToSlide(index)"
            :class="{ 'active-dot': index === currentIndex }"
            icon
          >
            <v-icon
              size="small"
              :color="
                index === currentIndex ? 'grey-lighten-2' : 'grey-darken-2'
              "
              >mdi-rectangle</v-icon
            >
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
    img: "/quiz studio_ss.png",
    title: "Quiz Studio CMS",
    description:
      "This backend management system, similar to the Quizizz website but focused solely on administrators, allows admins to create, update, and delete quizzes, track participants' scores, and manage user activity. While it handles all quiz functionalities for admins, it is designed to be paired with a frontend interface for users to answer the quizzes, delivering an engaging and results-driven experience.",
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
    img: "/ai-chatbot ss.png",
    title: "Personalized Japanese Actress Chatbot AI",
    description:
      "A specialized chatbot AI powered by Gemini API, designed to provide accurate and engaging answers about Japanese actresses. Fully personalized and trained on curated data, it ensures responses are focused exclusively on the provided information for a unique, targeted user experience.",
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
    img: "/quickbites_ss.png",
    title: "QuickBites: Canteen Pre Order System",
    description:
      "A pick-up order system designed for canteens, offering seamless online and cash payment options. It features an admin CMS that allows efficient management of customers, CRUD functionality for products, and tracking of order history. The system supports two admin roles: an Authority Admin, who can perform CRUD operations, and a Viewer Admin, who can only view the data.",
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
  if (currentIndex.value < projects.value.length - 1) {
    currentIndex.value++;
  } else if (currentIndex.value === projects.value.length - 1) {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else if (currentIndex.value < 1) {
    currentIndex.value = projects.value.length;
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.bg-steam {
  background-color: #171a21;
}
.text-link:hover {
  text-decoration: underline;
  transition: all 0.7s ease-in-out;
}

</style>
