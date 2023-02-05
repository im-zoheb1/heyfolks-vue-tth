<script lang="ts" setup>
import Dialog from '@/components/Elements/Dialog.vue';
import Avatar from '@/components/Elements/Avatar.vue'
import NoUserPhoto from '@/assets/img/no-user-photo.png' 
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  modelValue: boolean;
  data: any
}>()

// start: events
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
// end: events

// start: refs
const isOpen = ref<boolean>(false)
// end: refs

// start: watchers
watch(isOpen, (value: boolean) => {
  emits('update:modelValue', value)
})

watch(() => props.modelValue, (value: boolean) => {
  isOpen.value = value 
})
// end: watchers

// start: methods
const closeDialog =  (): void  => {
  isOpen.value = false
}

const onImgError = (event: Event) => {
  (event.target as HTMLImageElement).src = NoUserPhoto
}
// end: methods

onMounted(() => {
  isOpen.value = props.modelValue
})
</script>

<template>
  <Dialog 
    v-model="isOpen"
    size="max-w-2xl"
    no-padding
    hide-header
    hide-footer
  >
    <!-- start: header  -->
    <div class="p-3">
      <div class="flex items-center">
        <Avatar size="sm">
          <img :src="data.avatar" @error="onImgError" />
        </Avatar>
        <span class="leading-tight ml-3">
          <div class="text-md">{{ data.fullname }}</div>
          <div class="text-gray-400 text-sm">{{ data.city }}</div>
        </span>
      </div>
    </div>
    <!-- end: header -->

    <!-- start: content -->
    <div class="px-3">
      <div class="leading-normal text-base mb-3">
        {{ data.content.text }}
      </div>
      <div v-if="data.content.photo" class="mb-3 h-[300px] w-full overflow-hidden rounded-md">
        <img class="w-full h-full object-cover" :src="data.content.photo" />
      </div>
    </div>
    <!-- end: content  -->
  </Dialog>
</template>
