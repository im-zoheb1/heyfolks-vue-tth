<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue';
import Button from '@/components/Elements/Button.vue';
import CommentInput from './CommentInput.vue';
import { 
  ArrowUturnLeftIcon, 
  HandThumbUpIcon, 
  ChatBubbleLeftEllipsisIcon, 
} from '@heroicons/vue/24/outline';
import { ref } from 'vue'

const props = defineProps<{
  data: any;
  level: number;
}>()

const isThreadOpen = ref<boolean>(false)
const isCommentOpen = ref<boolean>(false)
const comment = ref<string>('')
const commentInputRef = ref<null | HTMLElement>(null)

function countComment(comments: any): number {
  let count: number = 0
  for (let comment of comments) {
    count = count + 1
    count += countComment(comment.responses)
  }
  return count
}

const openThread = (): void => {
  isThreadOpen.value = true
}

const showComment = (): void => {
  isCommentOpen.value = true
  commentInputRef.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <ul class="w-full">
    <li class="relative">

      <!-- comment: start  -->
      <div 
        class="flex py-1.5"
        :class="{
          'connection-line-root': !level,
          'connection-line-descendant': level
        }"
      >
        <Avatar size="xs">
          <img :src="data.avatar" />
        </Avatar>
        <div class="ml-3 text-gray-700">
          <h3 class="font-bold">{{ data.fullname }}</h3>
          <p class="leading-tight">{{ data.text }}</p>
          <div class="flex text-sm font-semibold text-gray-600 pt-1">
            <button class="mr-5 flex items-center">
              <HandThumbUpIcon class="w-5 mr-1" /> Like
            </button>
            <button class="flex items-center" @click="showComment">
              <ChatBubbleLeftEllipsisIcon class="w-5 mr-1" /> Comment
            </button>
          </div>
          <button 
            v-if="!isThreadOpen && data.responses.length" 
            class="flex items-center text-primary text-sm hover:underline pt-1.5 font-semibold" 
            @click="openThread"
          >
            <ArrowUturnLeftIcon class="w-[12px] mr-1.5" />
            {{ countComment(data.responses) }} Replies
          </button>
        </div>
      </div>
      <!-- comment: end -->

      <!-- thread: start -->
      <template v-for="response in data.responses" v-if="isThreadOpen">
        <NestedThread 
          :level="level + 1"
          :data="response"
          class="pl-12"
        ></NestedThread>
      </template>
      <!-- thread: end -->

      <!-- comment input: start -->
      <div v-if="isCommentOpen" class="pl-12 py-1.5">
        <CommentInput
          ref="commentInputRef"
          v-model="comment"
        ></CommentInput>
      </div>
      <!-- comment input: end -->

    </li>
  </ul>
</template>

<style lang="scss" scoped>
.connection-line-root {
  position: relative;
  &::before {
    position: absolute;
    top: 4px;
    left: 18px;
    content: '';
    height: 100%;
    width: 2px;
    z-index: -1;
    @apply bg-gray-200;
  }
}
.connection-line-descendant {
  position: relative;
  &::before {
    position: absolute;
    top: 0px;
    left: -30px;
    content: '';
    height: 26px;
    width: 20px;
    z-index: -1;
    border-bottom-left-radius: 8px;
    @apply border-b-[2px] border-l-[2px];
  }
}
</style>
