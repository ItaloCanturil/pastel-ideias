<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="degrade">
  <div class="header__background-red">
  </div>
  
  
  <RouterView />
  
  </div>
</template>

<style scoped>
.header__background-red {
  background-image: url('/src/assets/img/wave.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 74vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}


.degrade {
  background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
}

</style>
