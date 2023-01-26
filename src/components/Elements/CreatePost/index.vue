<script setup lang="ts">
import Separator from '@/components/Elements/Separator.vue'
import Button from '@/components/Elements/Button.vue'
import InputFile from '@/components/Elements/Form/InputFile.vue'
import { faker } from '@faker-js/faker'
import { PhotoIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const firstName: string = faker.name.firstName()
const placeholder: string = `What's been on your mind lately, ${firstName}?`

const uploadPhotos = ref<any>([])

const onLoad = (e: Event): void => {
  for (let file of uploadPhotos.value) {
    URL.revokeObjectURL(file)
  }
}

const onChange = (e: Event): void => { 
  uploadPhotos.value = []
  const files: FileList | null  = (e.target as HTMLInputElement).files
  if (files) for (let file of files) {
    uploadPhotos.value.push(URL.createObjectURL(file))
  }
}
</script>

<template>
  <div class="px-4 py-2">
    <textarea class="w-full bg-white outline-0 text-gray-700 text-lg resize-none tracking-wide" :placeholder="placeholder" rows="3"></textarea>
    <Separator />
    <div class="flex pt-2">
      <InputFile name="upload-photo-file" multiple @change="onChange" @load="onLoad">
        <Button variant="light" class="flex items-center justify-center text-green-600 w-11 h-11 bg-green-100" pilled no-pointer-events>
          <PhotoIcon class="w-6 h-6" />
        </Button>
      </InputFile>
      <Button class="px-[20px] ml-auto" size="sm">Post</Button>
    </div>
  </div>
</template>
