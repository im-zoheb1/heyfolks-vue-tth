<script lang="ts" setup>
import CommentInput from './CommentInput.vue';
import CommentItem from './CommentItem.vue'
import { ref } from 'vue'

defineProps<{ data: any[]; }>()

const isCommentOpen = ref<boolean>(false)
const comment = ref<string>('')
const commentInputRef = ref<null | HTMLElement>(null)
</script>

<template>
  <CommentItem 
    v-for="(item, index) in data" 
    :key="`comment-item-${index}`"
    :data="item"
    item-class="relative is-parent"
  >
    <template #responses>
      <div
        v-for="(response, responseIndex) in item.responses"
        :key="`comment-response-${responseIndex}-${index}`"
        class="relative is-descendant"
      >
        <CommentItem :data="response"></CommentItem>
      </div>
      <CommentInput 
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
