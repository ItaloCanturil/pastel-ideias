import { ref } from 'vue'

export default function () {
  const files = ref<UploadableFiles[]>([])

  function addFiles(newFiles: any) {
    const newUploadableFiles = [...newFiles]
      .map((file) => new UploadableFiles(file))
      .filter((file) => !fileExists(file.id))

    files.value = files.value.concat(newUploadableFiles)
  }

  function fileExists(otherId: any) {
    return files.value.some((id) => id === otherId)
  }

  function removeFile(file: any) {
    const index = files.value.indexOf(file)

    if (index > -1) files.value.splice(index, 1)
  }

  return { files, addFiles, removeFile }
}

export class UploadableFiles {
  file: File
  id: string
  url: string
  status: null

  constructor(file: File) {
    this.file = file
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
    this.url = URL.createObjectURL(file)
    this.status = null
  }
}
