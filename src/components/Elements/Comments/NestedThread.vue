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
import { faker } from '@faker-js/faker';

const props = defineProps<{
  data: any;
  level: number;
}>()

const isThreadOpen = ref<boolean>(false)
const isCommentOpen = ref<boolean>(false)
const comment = ref<string>('')

function countComment(comments: any): number {
  let count: number = 0
  for (let comment of comments) {
    count = count + 1
    count += countComment(comment.responses)
  }
  return count
}

const hideThread = (): void => {
  isThreadOpen.value = true
}

const hideComment = (): void => {
  isCommentOpen.value = true
}
</script>

<template>
  <ul class="w-full">
    <li class="relative" :class="{ 'connection-line': isThreadOpen || isCommentOpen }">
      <!-- comment: start  -->
      <div 
        class="flex mb-2 relative" 
        :class="{ 'connection-line__curved': level }"
      >
        <Avatar size="xs">
          <img :src="data.avatar" />
        </Avatar>
        <div class="ml-3 text-gray-700">
          <h3 class="font-bold">{{ data.fullname }}</h3>
          <p class="leading-tight">{{ data.text }}</p>
          <div class="flex mt-1 my-2 text-sm font-semibold text-gray-600">
            <button class="mr-5 flex items-center">
              <HandThumbUpIcon class="w-5 mr-1" /> Like
            </button>
            <button class="flex items-center" @click="hideComment">
              <ChatBubbleLeftEllipsisIcon class="w-5 mr-1" /> Comment
            </button>
          </div>
          <button v-if="data.responses?.length && !isThreadOpen" class="flex items-center text-primary text-sm hover:underline" @click="hideThread">
            <ArrowUturnLeftIcon class="w-[12px] mr-1.5" />
            {{ countComment(data.responses) }} Replies
          </button>
        </div>
      </div>
      <!-- comment: end -->

      <!-- thread: start -->
      <!-- <div v-if="isThreadOpen">{{ data.responses }}</div> -->
      <template v-for="response in data.responses" v-if="isThreadOpen">
        <NestedThread 
          :level="level + 1"
          :data="response"
          class="pl-12"
        ></NestedThread>
      </template>
      <!-- thread: end -->
      <div class="pl-12 mb-3">
        <CommentInput
          v-if="isCommentOpen" 
          v-model="comment"
          class="connection-line__curved"
        ></CommentInput>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.connection-line {
  @apply relative;
  &::after {
    @apply absolute top-[50px] left-5 content-[''] w-[1px] bg-gray-300;
    height: calc(100% - 85px);
  }
  &__curved {
    @apply relative;
    @apply after:absolute after:top-0 after:-left-7 after:w-5 after:h-6 after:content-[''] after:rounded-bl-2xl after:border-gray-300 after:border-l after:border-b;
  }
}
</style>
