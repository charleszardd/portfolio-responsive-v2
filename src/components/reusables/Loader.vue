<template>
    <v-progress-circular
          indeterminate
          size="80"
          width="4"
          color="yellow"
          class="layer-1"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          size="60"
          width="3"
          color="white"
          class="layer-2"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          size="40"
          width="2"
          color="yellow"
          class="layer-3"
        ></v-progress-circular>
</template>
<style scoped>
.v-progress-circular {
  position: absolute;
}

.layer-1 {
  animation: spin 2s linear infinite;
}

.layer-2 {
  animation: spin-reverse 3s linear infinite;
}

.layer-3 {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>