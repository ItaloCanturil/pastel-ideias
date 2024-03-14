<script setup lang="ts">

</script>

<template>
  <form>
    <div class="form__first-row">
      <div>
        <label for="title-order">Título do pedido <span aria-label="required">*</span></label>
        <input id="title-order" type="text">
      </div>
      <div>
        <label for="flavor">Sabor <span aria-label="required">*</span></label>
        <input id="flavor" type="text">
      </div>
      <div>
        <label for="price">R$ <span aria-label="required">*</span></label>
        <input id="price" type="number">
      </div>
    </div>
    
    <div class="form__second-row">
      <input type="text">
    </div>
    
    <div class="form__third-row">
      <input id="img" type="file">
    </div>
  </form>
</template>

<style scoped>

</style>
