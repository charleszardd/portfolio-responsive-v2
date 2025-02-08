<template>
  <!-- <HeroBannerSection /> -->
   <LandingPageDetails id="homeSection" @scroll-to-section="onScrollToSection" @open-chat="openChat"/>
   <ChatContainer v-if="isChatOpen" @close-chat="isChatOpen = false"/>
  <AboutDetailsSection ref="aboutSection" id="aboutSection"/>
  <SkillsDetailsSection id="skillsSection"/>
  <ProjectDetailsSection id="projectsSection"/>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroBannerSection from '@/layouts/HeroBannerSection.vue';
import AboutDetailsSection from '@/layouts/AboutDetailsSection.vue';
import SkillsDetailsSection from '@/layouts/SkillsDetailsSection.vue';
import ProjectDetailsSection from '@/layouts/ProjectDetailsSection.vue';

const aboutSection = ref(null);
const isChatOpen = ref(false)

const openChat = () => {
  isChatOpen.value = true;
}

const onScrollToSection = (section) => {
  if(section === 'about' && aboutSection.value){
    aboutSection.value.$el.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>
