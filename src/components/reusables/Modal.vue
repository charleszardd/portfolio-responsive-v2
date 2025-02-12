<template>
    <v-dialog scrollable v-model="isOpen" height="400px" max-width="600px">
      <v-card class="rounded-lg custom-font">
        <v-card-title class="text-h4 text-center my-3 font-weight-bold">
          {{ title }}
        </v-card-title>
        <v-card-text class="text-center text-h5">
          {{ message }}
        </v-card-text>
        <div class="d-flex justify-center">
        <img class="gif" width="200" src="/blushguy.gif" alt="">
    </div>
        <v-card-actions class="justify-end">
          <v-btn color="primary" @click="closeModal">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    modelValue: Boolean, // Sync with parent
    title: String,
    message: String,
  }, 

  
);
  
  const emit = defineEmits(["update:modelValue"]);
  
  const isOpen = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
  });
  
  const closeModal = () => {
    isOpen.value = false;
  };
  </script>
  <style scoped>
  .rounded-lg{
    border-radius: 15px!important;
    background-color: #171a21;
  }
  .gif{
    mix-blend-mode: multiply;

  }
  </style>