<template id="skillsSection">
  <div class="py-10 py-lg-0">
    <v-container class="h-screen custom-font px-10 px-lg-5" fluid>
      <v-row data-aos="fade-up" data-aos-duration="3000" class="px-5 pr-5 pr-lg-10 d-flex flex-column align-center">
        <v-col class="text-center mb-5" cols="12">
          <h1 class="elevated-text mb-5 custom-font text-h4 font-weight-bold text-md-h3">Skills & Tools</h1>
          <p class=" text-grey-lighten-2">
            Here are the technical skills I've honed and the tools I've used throughout my experience.
          </p>
        </v-col>

        <!-- Skills Grid -->
        <v-row class="skills-card-bg rounded-lg py-5 px-4 d-flex justify-center flex-wrap">
          <v-col v-for="icon in icons" :key="icon.label" class="d-flex justify-center" cols="auto">
            <component :is="icon.component" class="icon-size my-5" />
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import JavascriptIcon from "@/components/reusables/icons/Javascript.vue";
import PHPicon from "@/components/reusables/icons/PHP.vue";
import LaravelIcon from "@/components/reusables/icons/Laravel.vue";
import MySQLicon from "@/components/reusables/icons/MySQL.vue";
import PostmanIcon from "@/components/reusables/icons/Postman.vue";
import VercelIcon from "@/components/reusables/icons/Vercel.vue";
import HTMLIcon from "@/components/reusables/icons/HTML.vue";
import CSSIcon from "@/components/reusables/icons/CSS.vue";
import TailwindIcon from "@/components/reusables/icons/Tailwind.vue";
import VueJSIcon from "@/components/reusables/icons/VueJS.vue";
import VuetifyIcon from "@/components/reusables/icons/Vuetify.vue";
import VSCodeIcon from "@/components/reusables/icons/VSCode.vue";
import GitIcon from "@/components/reusables/icons/Git.vue";
import GithubIcon from "@/components/reusables/icons/Github.vue";

const icons = [
  { component: MySQLicon },
  { component: PHPicon },
  { component: LaravelIcon },
  { component: JavascriptIcon },
  { component: VueJSIcon },
  { component: VuetifyIcon },
  { component: TailwindIcon },
  { component: HTMLIcon },
  { component: CSSIcon },
  { component: GitIcon },
  { component: GithubIcon },
  { component: PostmanIcon },
  { component: VercelIcon },
  { component: VSCodeIcon },
];
</script>

<style scoped>
.h-screen {
  display: flex;
  align-items: center;
  background: linear-gradient(to left, #171a21, #1b2838);
}
.skills-card-bg {
  background: #171a21;
  border-radius: 15px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media (max-width: 600px){
  .py-10{
    padding-top: 4rem!important;
  }
}
</style>
