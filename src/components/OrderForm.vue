<script setup lang="ts">
import { ref } from 'vue';
import DropZone from './atom/DropZone.vue';
import FilePreview from './atom/FilePreview.vue'
import useFileList from '@/compositions/file-lists'

let titleError = ref('');
let flavorError = ref('');
const { files, addFiles, removeFile } = useFileList();
const ticketList = ref([]);

const formRef = ref({
  title: '',
  flavor: '',
  price: null,
  description: '',
  img: null
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

function onInputChange(e) {
	addFiles(e.target.files)
	e.target.value = null 
}

const handleClearForm = () => {
  formRef.value.description = ''
  formRef.value.flavor = ''
  formRef.value.img = null
  formRef.value.price = null
  formRef.value.title = ''

  removeFile(formRef.value.img);
}

const sendTicket = () => {
  console.log(formRef.value)
  ticketList.value.push({...formRef.value})

  handleClearForm()
}
</script>

<template>
  <div class="rounded p-4 shadow-lg shadow-black z-1 relative bg-white text-[#A03400]">
    <div class="flex justify-between">
      <div class="italic bold text-xl">
        Monte aqui o seu cardápio. O que está esperando?
      </div>

      <div>

      </div>
    </div>


    <div class="form__first-row flex items-center gap-3">
      <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636] flex-1" v-model="formRef.title" id="title-order" type="text" @change="handleTitleError()" required title="O título deve ter minimo de 3 caracteres e máximo de 60" minlength="3" maxlength="60" placeholder="Título do pedido ">

      <span class="error-message" v-if="titleError.length > 0">{{ titleError }}</span>
      <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636] flex-1" v-model="formRef.flavor" id="flavor" type="text" @change="handleFlavorError()" required title="O sabor deve ter minimo de 3 caracteres e máximo de 60" minlength="3" maxlength="60" placeholder="Sabor">
      
      <span class="error-message" v-if="flavorError.length > 0">{{ flavorError }}</span>
      <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636]" v-model="formRef.price" id="price" type="number" required title="O preço deve ser preenchido" placeholder="R$">
    </div>
    
    <div class="form__second-row">
      <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636] w-full h-14 my-4" v-model="formRef.description" id="description" type="text" placeholder="Descrição">
    </div>
    
    <div class="form__third-row border-input border-input border border-[#E43636] rounded-lg flex justify-center">
      <DropZone class="drop-area h-16" @files-dropped="addFiles" #default="{ dropZoneActive }">
        <label for="file-input">
          <span v-if="dropZoneActive">
            Jogue para adicionar
          </span>
          <span v-else>
            Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.
          </span>

          <input type="file" id="file-input" multiple @change="onInputChange" accept="image/jpg, image/png"/>
        </label>
        <ul class="image-list" v-show="files.length">
          <FilePreview v-for="file of files" :key="file.id" :file="file" tag="li" @remove="removeFile" />
        </ul>
		  </DropZone>
    </div>

    <div>
      <button class="bg-[#E43636] p-2 rounded-2xl" @click="handleClearForm">Limpar</button>
      <button @click="sendTicket" class="bg-[#FFCA00] p-2 rounded-2xl">Cadastrar</button>
    </div>
  </div>

  <div v-if="ticketList.length > 0">
    <div v-for="ticket in ticketList" :key="ticket.title">
      {{ ticket }}
    </div>
  </div>
</template>

<style scoped>
.file-img {
  width: 100%;
  height: auto;
}
</style>
