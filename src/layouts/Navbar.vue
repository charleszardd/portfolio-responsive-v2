<template>
    <v-container class="custom-font" fluid>
        <v-app-bar class="container px-0 px-lg-5" app>
            <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="menu = !menu"></v-app-bar-nav-icon>
            <span class="pl-5 text-h6 font-weight-bold">My Portfolio</span>
            <v-spacer></v-spacer>
            <v-btn v-if="$vuetify.display.mdAndUp" text>About</v-btn>
            <v-btn v-if="$vuetify.display.mdAndUp" text>Projects</v-btn>
        </v-app-bar>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref(false);
</script>

<style scoped>
/* .container{
    background-color: #f0EAD6!important;
    color: #212121;
}
.text-title{
    color: #212121!important;
} */
</style>