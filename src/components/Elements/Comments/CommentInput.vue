<script lang="ts" setup>
import Avatar from '../Avatar.vue';
import Button from '../Button.vue';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { ref, watch, onMounted } from 'vue'
import { faker } from '@faker-js/faker';

const props = defineProps<{
  modelValue: string;
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const comment = ref<string>('')
const commentInputRef = ref<null | HTMLInputElement>(null)
const isCommentActive = ref<boolean>(false)
const avatar: string = faker.internet.avatar()

watch(() => props.modelValue, (value: string) => {
  emits('update:modelValue', value)
})

watch(() => props.modelValue, (value: string) => {
  comment.value = value 
})

const focusInput = (): void => {
  // isCommentActive.value = true
  // setTimeout(() => commentInputRef.value?.focus())
}

onMounted(() => {
  comment.value = props.modelValue
  focusInput()
})
</script>

<template>
  <div class="flex items-center bg-main-bg">
    <Avatar size="xs" :src="avatar" />
    <a 
      class="flex items-center w-full ml-2 p-1 border rounded-full bg-light-1"
      :class="{ 'ring-2': isCommentActive }"
    >
      <input 
        ref="commentInputRef"
        class="w-full outline-none text-base rounded-lg px-2 bg-transparent" 
        placeholder="Share your thoughts" 
        @focus="isCommentActive = true" 
        @blur="isCommentActive = false" 
      />
      <Button compact pilled class="p-1.5">
        <PaperAirplaneIcon class="h-6" />
      </Button>
    </a>
  </div>
</template>
