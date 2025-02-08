<template id="skillsSection">
  <v-container class="h-screen  mt-5 mt-lg-10 px-5 px-lg-10" fluid>
    <v-row class="">
      <v-col data-aos="fade-up" data-aos-duration="3000" class="text-center" cols="12" lg="12">
        <h1
          class="mb-lg-5 mt-lg-3 mb-md-2 mb-2 hero-font text-h6 font-weight-bold text-md-h5 text-lg-h3"
        >
          Skills & Tools
        </h1>
        <p class="text-subtitle-2 custom-font text-lg-subtitle-1 text-grey">
          Here are the technical skills I've honed and the tools I've used
          throughout my experience.
        </p>

        <v-row class="mt-3 mb-2 mt-lg-5 d-flex flex-wrap">
          <v-col
            class="d-flex justify-center flex-column px-2"
            cols="2"
            lg="2"
            v-for="icon in icons"
            :key="icon"
          >
            <v-card
              class="bg-card pa-1 pa-lg-2 mr-1 mr-lg-1 mb-1 mb-lg-2 rounded-lg"
              elevation="10"
            >
              <v-icon
                v-if="!icon.image"
                :class="`text-h4 text-lg-h3 ${icon.color}`"
                >{{ icon.name }} </v-icon
              >
              
              <img
                class="image-width py-0 py-lg-1 py-md-1"
                :width="imageWidth ? '40': '50'"
                align="center"
                v-else
                :src="icon.image"
              />
            </v-card>
            <span
              class="text-subtitle-2 custom-font text-lg-subtitle-1 d-none d-md-block d-lg-block"
              >{{ icon.label }}</span
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const icons = [
  { image: "/mysql.svg", color: "text-orange-lighten-1", label: "MySQL" },
  { name: "mdi-language-php", color: "text-blue-darken-2", label: "PHP" },
  { name: "mdi-laravel", color: "text-red", label: "Laravel" },
  { name: "mdi-language-javascript", color: "text-yellow ", label: "Javascript" },
  { name: "mdi-vuejs", color: "text-green-lighten-1", label: "Vue" },
  { name: "mdi-vuetify", color: "text-blue-darken-1", label: "Vuetify" },
  { name: "mdi-tailwind", color: "text-blue-lighten-2", label: "Tailwind CSS" },
  { name: "mdi-language-html5", color: "text-orange-darken-3", label: "HTML" },
  { name: "mdi-language-css3", color: "text-blue", label: "CSS" },
  { name: "mdi-git", color: "text-red-darken-1", label: "Git" },
  { name: "mdi-github", label: "Github" },
  { image: "/postman.svg", color: "primary", label: "Postman" },
  { name: "mdi-triangle", color: "primary", label: "Vercel" },
  { name: "mdi-microsoft-visual-studio", color: "text-blue-lighten-1", label: "Visual Studio" },
];

const imageWidth = computed(() => (mdAndUp.value ? "26" : "34"));
</script>
<style scoped>
.h-screen{
  align-items: center;
  display: flex;
}
.bg-card{
  background-color: 		#2b2d31!important;
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

</style>