<template id="skillsSection">
  <v-container class="h-screen px-5 px-lg-10" fluid>
    <v-row class="px-10 pl-4">
      <v-col data-aos="fade-up" data-aos-duration="3000" class="text-center" cols="12" lg="12">
        <h1
          class="elevated-text mb-lg-5 mt-lg-3 mb-md-2 mb-10 custom-font text-h4 font-weight-bold text-md-h3 text-lg-h3"
        >
          Skills & Tools
        </h1>
        <p class="text-subtitle-2 mb-5 mb-lg-10 custom-font text-lg-subtitle-1 text-grey-lighten-2">
          Here are the technical skills I've honed and the tools I've used
          throughout my experience.
        </p>

        <v-row class="mt-3 py-5 px-4 mb-2 skills-card-bg rounded-lg mt-lg-10 d-flex pr-1 pr-lg-4">
  <v-col
    class="d-flex justify-center flex-column px-0 px-lg-10"
    cols="2"
    lg="2"
    v-for="icon in icons"
    :key="icon.label"
  >

      <component elevation="10" :is="icon.component" class="icon-size my-5" />

  
  </v-col>
</v-row>

      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
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


const { mdAndUp } = useDisplay();

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

const imageWidth = computed(() => (mdAndUp.value ? "26" : "34"));
</script>
<style scoped>
.h-screen{
  align-items: center;
  display: flex;
  background: linear-gradient(to left ,#171a21, #1b2838 );
  height: auto;
  min-height: 100vh;
}
.bg-card{
  background-color: 		#2b2d31!important;

}
.skills-card-bg{
  background: #171a21;
  border-radius: 15px!important;
}

@media (max-width: 700px) {
  .image-width {
    width:  34px;

  }
}
@media (max-width: 1000px) {
  .image-width {
    width:  32px;

  } 
}
@media (max-width: 1100px) {
  .image-width {
    width:  34px;

  }
}
@media (max-width: 600px) {
  .h-screen{
    height: auto;
    min-height: auto;
  }
  .icon-size {
  width: 40px;
  height: 40px;
}
}

</style>