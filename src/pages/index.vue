<template>
<v-app class="bg-color">
   <LandingPageDetails id="homeSection" @scroll-to-section="onScrollToSection" @open-chat="openChat"/>
   <ChatContainer v-if="isChatOpen" @close-chat="isChatOpen = false"/>
   <AboutDetailsSection ref="aboutSection" id="aboutSection"/>
   <SkillsDetailsSection id="skillsSection"/>
   <ProjectDetailsSection id="projectsSection"/>
   <ContactDetailsSection id="contactSection"/>
</v-app>
</template>

<script setup>
import { ref } from 'vue';
import AboutDetailsSection from '@/layouts/AboutDetailsSection.vue';
import SkillsDetailsSection from '@/layouts/SkillsDetailsSection.vue';
import ProjectDetailsSection from '@/layouts/ProjectDetailsSection.vue';
import ContactDetailsSection from '@/layouts/ContactDetailsSection.vue';

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
<style scoped>
.bg-color{
  background: linear-gradient(to left, #171a21, #1b2838);
}
</style>
