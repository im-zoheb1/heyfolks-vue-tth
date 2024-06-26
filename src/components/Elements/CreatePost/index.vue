<script setup lang="ts">
import Separator from '@/components/Elements/Separator.vue'
import Button from '@/components/Elements/Button.vue'
import InputFile from '@/components/Elements/Form/InputFile.vue'
import Card from '@/components/Elements/Card.vue'
import Popover from "@/components/Elements/Popover.vue";
import EmojiPicker from 'vue3-emoji-picker'
import { faker } from '@faker-js/faker'
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const firstName: string = faker.name.firstName()
const placeholder: string = `What's been on your mind lately, ${firstName}?`

const text = ref<string>('')
const photos = ref<any>([])

const onLoad = (e: Event): void => {
  for (let file of photos.value) {
    URL.revokeObjectURL(file)
  }
}

const onChange = (e: Event): void => { 
  photos.value = []
  const files: FileList | null  = (e.target as HTMLInputElement).files
  if (files) for (let file of files) {
    photos.value.push(URL.createObjectURL(file))
  }
}

const removePhoto = (photo: File): void => {
  const index: number = photos.value.indexOf(photo)
  if (index !== -1) photos.value.splice(index, 1)
}

const onSelectEmoji = (emoji: any): void => {
  text.value = text.value + emoji.i
}
</script>

<template>
  <Card>
    <div class="px-4 py-2">
      <textarea 
        v-model="text"
        class="w-full bg-main-bg outline-0 text-gray-700 text-lg resize-none tracking-wide" 
        :placeholder="placeholder" 
        rows="3"
      ></textarea>
      <div class="flex mb-3">
        <!-- start: selected photos -->
        <div 
          class="create-post-photo relative w-32 h-32 border cursor-pointer rounded-lg
            before:absolute before:inset-0 before:hover:backdrop-blur-sm before:hover:bg-black/20 
            before:rounded-lg before:transition before:duration-300" 
          v-for="photo in photos"
        >
          <img class="w-full h-full object-cover rounded-lg" :src="photo" />
          <Button variant="light" class="absolute top-1 right-1 p-1 shadow-sm" size="sm" compact pilled @click="removePhoto(photo)">
            <XMarkIcon class="w-4 h-4 cursor-pointer font-bold" />
          </Button>
        </div>
        <!-- end: selected-photos -->
      </div>
      <Separator />
      <!-- <EmojiPicker :native="true" /> -->
      <div class="flex items-center justify-between pt-2">
        <!-- start: footer  -->
        <div class="flex items-center font-semibold text-muted tracking-wide">
          <InputFile class="mr-3" name="upload-photo-file" multiple @change="onChange" @load="onLoad">
            <div class="flex items-center">
              <img src="@/assets/icon/gallery.png" />
              <span class="ml-2 hidden sm:inline-block">Photo/media</span>
            </div>
          </InputFile>
          <Popover>
            <template #default>
              <div class="flex items-center">
                <img src="@/assets/icon/emoji.png" />
                <span class="ml-2 hidden sm:inline-block">Reaction</span>
              </div>
            </template>
            <template #content>
              <EmojiPicker 
                :native="true"
                hide-search
                hide-group-icons
                display-recent
                :disabled-groups="['activities', 'travel_places', 'objects', 'symbols', 'flags']" 
                @select="onSelectEmoji"
              />
            </template>
          </Popover>
        </div>
        <Button class="px-[22px]" size="md">Create</Button>
        <!-- end: footer -->
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped></style>
