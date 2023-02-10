<script lang="ts" setup>
import CommentInput from './CommentInput.vue';
import CommentItem from './CommentItem.vue'
import {
  ArrowUturnLeftIcon,
  ArrowUturnUpIcon,
} from "@heroicons/vue/24/outline";
import { ref } from 'vue'

defineProps<{ data: any }>()

const isCommentOpen = ref<boolean>(false)
const isThreadOpen = ref<boolean>(false)
const comment = ref<string>('')
const commentInputRef = ref<null | HTMLElement>(null)

const toggleThread = (): void => {
  isThreadOpen.value = !isThreadOpen.value
}

const toggleComment = (): void => {
  isCommentOpen.value = true
}
</script>

<template>
  <CommentItem 
    :data="data"
    :item-class="isCommentOpen || isThreadOpen ? 'relative is-parent': ''"
    @toggle-comment="toggleComment"
  >
    <button
      v-if="data.responses.length"
      class="flex items-center text-primary text-sm hover:underline pt-1.5 font-semibold"
      @click="toggleThread"
    >
      <component class="w-[12px] mr-1.5" :is="isThreadOpen ? ArrowUturnUpIcon : ArrowUturnLeftIcon"></component>
      <span v-if="!isThreadOpen">{{ data.responses.length }} Replies</span>
      <span v-else>hide replies</span>
    </button>
    <template #responses>
      <div
        v-for="(response, responseIndex) in data.responses"
        v-if="isThreadOpen"
        :key="`comment-response-${responseIndex}`"
        class="relative is-descendant"
      >
        <CommentItem :data="response"></CommentItem>
      </div>
      <CommentInput 
        v-if="isCommentOpen"
        v-model="comment" 
        class="relative is-descendant py-1"
      ></CommentInput>
    </template>
  </CommentItem>
</template>

<style lang="scss">
.is-parent::before {
  position: absolute;
  top: 4px;
  left: 18px;
  content: '';
  height: 100%;
  width: 2px; 
  z-index: -1;
  @apply bg-gray-200;
}
.is-descendant {
  position: relative;
  &::after, &::before {
    position: absolute;
    top: 0px;
    left: -30px;
    content: '';
  }
  &::after {
    width: 2px;
    height: 100%;
    @apply bg-gray-200;
  }
  &::before {
    border-bottom-left-radius: 8px;
    width: 26px;
    height: 26px;
    @apply border-b-[2px] border-l-[2px];
  }
  &:last-child::after {
    @apply bg-transparent;
  }
}
</style>
