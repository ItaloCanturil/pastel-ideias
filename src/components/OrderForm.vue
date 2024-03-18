<script setup lang="ts">
import { ref } from 'vue';
import DropZone from './atom/DropZone.vue';
import FilePreview from './atom/FilePreview.vue'
import SwitcherRound from './atom/SwitcherRound.vue';
import useFileList, { UploadableFiles } from '@/compositions/file-lists'

let titleError = ref('');
let flavorError = ref('');
const { files, addFiles, removeFile } = useFileList();
const ticketList = ref<IForm[]>([]);

type IForm = {
  title:       string;
  flavor:      string;
  price:       null;
  description: string;
  img:         UploadableFiles | null;
}

const formRef = ref<IForm>({
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

function onInputChange(e: any) {
	addFiles(e.target.files)
	e.target.value = null 
}

const handleClearForm = () => {
  formRef.value.description = ''
  formRef.value.flavor = ''
  formRef.value.price = null
  formRef.value.title = ''

  removeFile(files.value[0]);
}

const sendTicket = () => {
  console.log(formRef.value)

  if (files.value.length) {
    formRef.value.img = files.value[0]
  }

  ticketList.value.push({...formRef.value})

  handleClearForm()
}
</script>

<template>
  <div class="rounded-2xl shadow-lg shadow-[#740B0B45] z-1 relative bg-white text-[#A03400]">
    <div class="flex justify-between bg-[#FFCA00]  p-4 rounded-2xl gap-4">
      <div class="italic bold text-xl">
        Monte aqui o seu cardápio. O que está esperando?
      </div>

      <div class="flex items-center gap-1">
        <span>Comida</span>
        <SwitcherRound></SwitcherRound>
        <span>Bebida</span>
      </div>
    </div>


    <div class="form__first-row flex items-center gap-3 mt-[-20px] p-4 pb-0">
      <div class="flex flex-col">
        <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636] flex-1" v-model="formRef.title" id="title-order" type="text" @change="handleTitleError()" required title="O título deve ter minimo de 3 caracteres e máximo de 60" minlength="3" maxlength="60" placeholder="Título do pedido ">

        <span class="error-message mt-6" :class="{ 'opacity-0, mt-0': titleError.length > 0  }">{{ titleError }}</span>
      </div>

      <div class="flex flex-col">
        <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636] flex-1" v-model="formRef.flavor" id="flavor" type="text" @change="handleFlavorError()" required title="O sabor deve ter minimo de 3 caracteres e máximo de 60" minlength="3" maxlength="60" placeholder="Sabor">
        
        <span class="error-message mt-6" :class="{ 'opacity-0, mt-0': flavorError.length > 0  }">{{ flavorError }}</span>
      </div>
      <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636]  mb-6" v-model="formRef.price" id="price" type="number" required title="O preço deve ser preenchido" placeholder="R$">
    </div>
    
    <div class="form__second-row p-4 pt-0">
      <input class="border-input border border-[#E43636] rounded-lg p-1 placeholder:text-[#E43636] w-full h-14" v-model="formRef.description" id="description" type="text" placeholder="Descrição">
    </div>
    
    <div class="p-4">
      <div class="form__third-row border-input border-input border border-[#E43636] rounded-lg flex justify-center">
        <DropZone class="drop-area h-40" @files-dropped="addFiles" #default="{ dropZoneActive }">
          <label v-if="files.length === 0" class="h-full w-full flex justify-center flex-col" for="file-input">
            <span v-if="dropZoneActive">
              Jogue para adicionar
            </span>
            <span v-else>
              Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.
            </span>

            <input class="opacity-0" type="file" id="file-input" multiple @change="onInputChange" accept="image/jpg, image/png"/>
          </label>
          <ul class="image-list" v-show="files.length">
            <FilePreview class="max-w-36 max-h-36" v-for="file of files" :key="file.id" :file="file" tag="li" @remove="removeFile" />
          </ul>
        </DropZone>
      </div>
    </div>

  </div>
  <div class="flex justify-center items-center gap-4 mt-[-10px] relative z-3">
    <button class="bg-[#E43636] p-2 rounded-3xl w-52 text-white bold" @click="handleClearForm">LIMPAR</button>
    <button @click="sendTicket" class="bg-[#FFCA00] p-2 rounded-3xl text-[#A03400] w-52 bold">CADASTRAR</button>
  </div>

  <div class="mt-4" v-if="ticketList.length > 0">
    <div class="flex justify-center gap-4 items-center">
      <span class="w-full h-[1px] bg-[#E43636]"></span>

      <div class="text-[#E43636] font-bold italic w-full">Veja como será apresentado ao cliente</div>

      <span class="w-full h-[1px] bg-[#E43636]"></span>
    </div>

    <div class="mt-4" v-for="ticket in ticketList" :key="ticket.title">
      
      <div class="w-full flex items-center">
        <div class="card-img max-w-32 max-h-32 p-1 rounded bg-white mr-[-10px] relative z-10">
          <img v-if="ticket.img === null" src="/src/assets/img/pastel-img.png" alt="">
          <img v-else :src="ticket.img.url" :alt="ticket.img.file.name" :title="ticket.img.file.name" />
        </div>
        
        <div class="bg-white rounded-lg shadow-lg shadow-[#740B0B45] h-36 w-full">
          
          <div class="bg-[#E43636] flex items-center justify-between p-4 rounded-lg">
            <div class="text-[#FFCA00] text-lg font-bold">
              {{ ticket.title }}
            </div>

            <div class="text-white">
              R${{ ticket.price }}
            </div>
          </div>

          <div class="flex flex-col ml-4">
            <div class="text-[#A03400] italic font-bold">Sabor: {{ ticket.flavor }}</div>
            <div class="text-[#A03400] italic font-bold">Descrição: {{ ticket.description }}</div>
            
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.file-img {
  width: 100%;
  height: auto;
}
</style>
