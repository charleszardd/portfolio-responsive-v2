<template>
  <v-btn
    :class="isButtonRounded ? 'btn button-radius' : ''"
    :loading="loading"
    @click="$emit('click')"
  >
    <v-icon v-if="icon" :color="addColor" :class="addMargin ? 'mr-2' : ''">{{
      icon
    }}</v-icon>
    {{ text }}
  </v-btn>
</template>
<script setup>

 defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  addMargin: {
    type: Boolean,
    default: true,
  },
  isButtonRounded: {
    type: Boolean,
    default: true,
  },
  addColor: {
    type: String,
    default: "",
  },
});
</script>