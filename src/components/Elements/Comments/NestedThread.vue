<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue';
import Button from '@/components/Elements/Button.vue';
import { ArrowUturnLeftIcon, HandThumbUpIcon, ChatBubbleLeftEllipsisIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue'
import { faker } from '@faker-js/faker';

const props = defineProps<{
  data: any;
  level: number;
}>()

const avatar = faker.internet.avatar()
const isThreadOpen = ref<boolean>(false)
const isCommentOpen = ref<boolean>(false)

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
    <li class="relative" :class="{ 'connection-line': data.responses.length }">
      <!-- comment: start  -->
      <div class="flex mb-2 relative" >
        <span :class="{ 'connection-line__curved': level }"></span>
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
      
      <!-- comment input: start -->
      <div v-if="isCommentOpen" class="flex items-center pl-12 sticky bottom-0 mb-2">
        <Avatar size="xs">
          <img :src="avatar" />
        </Avatar>
        <a class="flex items-center w-full ml-2 p-1 border rounded-full bg-gray-100">
          <input 
            ref="commentInputRef"
            class="w-full outline-none text-base rounded-lg px-2 bg-transparent" 
            placeholder="Share your thoughts" 
          />
          <Button compact pilled class="p-1.5">
            <PaperAirplaneIcon class="h-6" />
          </Button>
        </a>
      </div>
      <!-- comment input: end -->
      
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.connection-line {
  @apply relative;
  &::after {
    @apply absolute top-[50px] left-5 content-[''] w-[1px] bg-gray-300;
    height: calc(100% - 40px);
  }
  &__curved {
    @apply absolute top-0 -left-7 w-5 h-6 content-[''] rounded-bl-2xl border-gray-300 border-l border-b;
  }
}
</style>
