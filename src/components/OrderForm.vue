<script setup lang="ts">
import { ref } from 'vue';

let titleError = ref('');
let flavorError = ref('');

const formRef = ref({
  title: '',
  flavor: '',
  price: null,
  description: '',
  img: ''
})

const handleTitleError = () => {
  titleError.value = '';

  if (formRef.value.title === null) {
    titleError.value = "O título é obrigatório";
  }

  if (formRef.value.title.length < 3) {
    titleError.value = "O título deve ter no mínimo 3 caracteres";
  }

  if (formRef.value.title.length > 60) {
    titleError.value = "O título não deve exceder 60 caracteres.";
  }
}

const handleFlavorError = () => {
  flavorError.value = '';

  if (formRef.value.flavor === null) {
    flavorError.value = "O título é obrigatório";
  }

  if (formRef.value.flavor.length < 3) {
    flavorError.value = "O título deve ter no mínimo 3 caracteres";
  }

  if (formRef.value.flavor.length > 60) {
    flavorError.value = "O título não deve exceder 60 caracteres.";
  }
}
</script>

<template>
  <form>
    <div class="form__first-row">
      <div>
        <label for="title-order">Título do pedido <span aria-label="required">*</span></label>
        <input v-model="formRef.title" id="title-order" type="text" @change="handleTitleError()" required title="O título deve ter minimo de 3 caracteres e máximo de 60" minlength="3" maxlength="60">

        <span class="error-message" v-if="titleError.length > 0">{{ titleError }}</span>
      </div>
      <div>
        <label for="flavor">Sabor <span aria-label="required">*</span></label>
        <input v-model="formRef.flavor" id="flavor" type="text" @change="handleFlavorError()" required title="O sabor deve ter minimo de 3 caracteres e máximo de 60" minlength="3" maxlength="60">
        
        <span class="error-message" v-if="flavorError.length > 0">{{ flavorError }}</span>
      </div>
      <div>
        <label for="price">R$ <span aria-label="required">*</span></label>
        <input v-model="formRef.price" id="price" type="number" required title="O preço deve ser preenchido">
      </div>
    </div>
    
    <div class="form__second-row">
      <input v-model="formRef.description" id="description" type="text">
    </div>
    
    <div class="form__third-row">
      <input id="img" type="file">
    </div>
  </form>
</template>

<style scoped>

</style>
