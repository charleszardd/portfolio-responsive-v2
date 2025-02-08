<template>
    <v-container class="custom-font" fluid>
        <v-app-bar class="container px-0 px-lg-5" app>
            <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="menu = !menu"></v-app-bar-nav-icon>
            <v-btn class="mr-5" v-if="$vuetify.display.mdAndUp" @click="onScrollToSection('homeSection')" text>Home</v-btn>
            <v-btn class="mr-5" v-if="$vuetify.display.mdAndUp" @click="onScrollToSection('aboutSection')" text>About</v-btn>
            <v-btn class="mr-5" v-if="$vuetify.display.mdAndUp" @click="onScrollToSection('skillsSection')" text>Skills</v-btn>
            <v-btn v-if="$vuetify.display.mdAndUp" @click="onScrollToSection('projectsSection')" text>Projects</v-btn>
         
            <v-spacer></v-spacer>
            <div class="d-flex  flex-column">
            <span class="pr-5 text-subtitle-2 text-grey-lighten-1"><v-icon class="mr-2">mdi-email</v-icon>casenascharles@gmail.com</span>
            <span class="pr-5 text-subtitle-2 text-grey-lighten-1"><v-icon class="mr-2">mdi-phone</v-icon><span class="text-blue-lighten-2 ">+639 </span>638623607</span>
        </div>
        </v-app-bar>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref(false);

const onScrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.container{
    background-color: #171a21!important;

}

</style>