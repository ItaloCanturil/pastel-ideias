<template>
  <div :data-active="active" @dragenter.prevent="setActive" @dragover.prevent="setActive" @dragleave.prevent="setInactive" @drop.prevent="onDrop">
    <slot :dropZoneActive="active"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['files-dropped']);

let active = ref(false);
let inActiveTimeout: any = null;

const setActive = () => {
  active.value = true
  clearTimeout(inActiveTimeout)
}

const setInactive = () => {
  inActiveTimeout = setTimeout(() => {
    active.value = false
  }, 50);
}

const onDrop = (e: any) => {
  emit('files-dropped', [...e.dataTransfer.files]);
}

function preventDefaults(e: Event) {
    e.preventDefault();
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop'];

onMounted(() => {
  events.forEach(eventName => {
    document.body.addEventListener(eventName, preventDefaults);
  });
})

onUnmounted(() => {
  events.forEach(eventName => {
    document.body.removeEventListener(eventName, preventDefaults)
  });
})
</script>