<script lang="ts" setup>
import Dialog from '@/components/Elements/Dialog.vue';
import Comments from '@/components/Elements/Comments/index.vue'
import Post from './Post.vue'
import { ref, computed, watch, onMounted } from 'vue'

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
    <div class="relative flex flex-col">
      <Post :data="data" />
      <Comments class="flex-1" :data="data.responses" />
    </div>
    
  </Dialog>
</template>
