<script setup lang="ts">
import OrderForm from '@/components/OrderForm.vue';


</script>

<template>
  <div class="home">
    <div class="header__background-red"></div>
    <header class="header__pasteis">

      <div class="pasteis">
        <div class="pasteis__left">
          <img class="pasteis__img" src="/src/assets/img/pastel-paralax.png" alt="Pastel à esquerda">
        </div>
        
        <div class="pasteis__center">
          <img class="pasteis__img" src="/src/assets/img/Logo.svg" alt="Pastel à esquerda">
        </div >
        
        <div class="pasteis__right">
          <img class="pasteis__img" src="/src/assets/img/pasteis-img.png" alt="Pastel à esquerda">
        </div>
      </div>
    </header>

    <main>
      <OrderForm/>
    </main>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

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
  z-index: -9999;
}

.header__pasteis {
  margin-bottom: 24px;
}

.pasteis {
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
}

.pasteis__center {
  max-width: 736px;
  max-height: 263px;
  width: 100%;
}

.pasteis__left {
  max-width: 555px;
  max-height: 555px;
  width: 100%;
  margin-right: auto;
  /* position: absolute; */
  z-index: 1;
}

.pasteis__right {
  max-width: 393px;
  max-height: 316px;
  width: 100%;
  /* position: absolute; */
  z-index: -1;
}

.pasteis__img {
  width: 100%;
  height: auto;
}

</style>
