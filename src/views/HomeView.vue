<script setup lang="ts">
import OrderForm from '@/components/OrderForm.vue';


</script>

<template>
  <div class="home">
    <header class="header__pasteis">
      <div class="pasteis">
        
        <div class="pasteis__center">
          <img class="pasteis__img" src="/src/assets/img/Logo.svg" alt="Pastel à esquerda">
        </div >
        
      </div>
    </header>
    
    <main class="mt-10 p-4">
      <div class="pasteis__left">
          <img class="pasteis__img" src="/src/assets/img/pastel-paralax.png" alt="Pastel à esquerda">
        </div>
      <div class="pasteis__right absolute top-[160px] right-[330px]">
        <img class="pasteis__img" src="/src/assets/img/pasteis-img.png" alt="Pastel à esquerda">
      </div>
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
  max-width: 636px;
  max-height: 263px;
  width: 100%;
}

.pasteis__left {
  max-width: 385px;
  width: 100%;
  margin-right: auto;
  position: absolute;
  z-index: 1;
  top: 32px;
  left: 195px;
}

.pasteis__right {
  max-width: 393px;
  max-height: 316px;
  width: 100%;
  position: absolute;
}

.pasteis__img {
  width: 100%;
  height: auto;
}

@media (max-width: 1200px) {
  .pasteis__left , .pasteis__right {
    display: none;
  }
}
</style>
