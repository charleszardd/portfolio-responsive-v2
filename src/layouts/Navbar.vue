<template>
  <v-container class="custom-font" fluid>
    <v-app-bar class="container px-0 px-lg-5" app>
      <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="toggleMenu">
        <v-icon class="transition-transform" :class="{ 'rotate-180': menuOpen }">
          {{ menuOpen ? "mdi-close" : "mdi-menu" }}
        </v-icon>
      </v-app-bar-nav-icon>

      <div v-if="$vuetify.display.mdAndUp" class="d-flex pl-5">
        <span
          v-for="tab in tabs"
          :key="tab.id"
          class="btn-link mr-10"
          :class="{ active: activeSection === tab.id }"
          @click="onScrollToSection(tab.id)"
        >
          {{ tab.label }}
        </span>
      </div>
      <v-spacer></v-spacer>

      <Button
        icon="mdi-github"
        @click="goToSite('https://github.com/charleszardd')"
        class="text-h5"
        :addMargin="false"
      />
    </v-app-bar>

    <v-navigation-drawer class="sidebar" v-model="menuOpen" temporary left>
      <v-list>
        <v-list-item
          v-for="tab in tabs"
          :key="tab.id"
          class="text-h6"
          @click="onScrollToSection(tab.id), (menuOpen = false)"
        >
          <v-icon class="mr-5">{{ tab.icon }}</v-icon> {{ tab.label }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const activeSection = ref("homeSection");

const tabs = [
  { id: "homeSection", label: "Home", icon: "mdi-home" },
  { id: "aboutSection", label: "About", icon: "mdi-account-cowboy-hat" },
  { id: "skillsSection", label: "Skills", icon: "mdi-tools" },
  { id: "projectsSection", label: "Projects", icon: "mdi-folder" },
  { id: "contactSection", label: "Contact", icon: "mdi-phone" },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const onScrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    menuOpen.value = false;
    section.scrollIntoView({ behavior: "smooth" });
    activeSection.value = id;
  }
};

const updateActiveSection = () => {
  const sections = tabs.map((tab) => ({
    id: tab.id,
    offset: document.getElementById(tab.id)?.offsetTop ?? 0,
  }));

  const scrollPosition = window.scrollY + 200;

  for (let i = sections.length - 1; i >= 0; i--) {
    if (scrollPosition >= sections[i].offset) {
      activeSection.value = sections[i].id;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});

const goToSite = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
.container {
  background-color: #171a21 !important;
}
.sidebar {
  background-color: #171a21;
}
.transition-transform {
  transition: transform 0.4s ease-in-out;
}
.rotate-180 {
  transform: rotate(180deg);
}
.btn-link {
  position: relative;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
}
.btn-link::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -15%;
  background-color: #66c0f4;
  width: 100%;
  height: 4px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.btn-link.active::before {
  opacity: 1;
}
.btn-link.active{
  color:#66c0f4;
  transition: opacity 0.3s ease-in-out;
}
</style>
