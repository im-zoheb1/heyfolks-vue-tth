<script lang="ts" setup>
import Avatar from "@/components/Elements/Avatar.vue";
import Button from "@/components/Elements/Button.vue"
import {
  ArrowUturnLeftIcon,
  ArrowUturnUpIcon,
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

defineProps<{
  data: any;
  itemClass?: string
}>();

const isThreadOpen = ref<boolean>(false)
const isCommentOpen = ref<boolean>(false)

const toggleComment = (): void => {
  isCommentOpen.value = !isCommentOpen.value
}

const toggleThread = (): void => {
  isThreadOpen.value = !isThreadOpen.value
}

const countComment = (comments: any): number => {
  let count: number = 0;
  for (let comment of comments) {
    count = count + 1;
    count += countComment(comment.responses);
  }
  return count;
}
</script>

<template>
  <div class="flex py-1" :class="itemClass">
    <Avatar size="xs">
      <img :src="data.avatar" />
    </Avatar>
    <div class="ml-3 text-gray-700">
      <h3 class="font-bold">{{ data.fullname }}</h3>
      <p class="leading-tight">{{ data.text }}</p>
      <div class="flex items-center text-sm text-gray-600 pt-1">
        <Button compact variant="light" size="sm" class="mr-5 p-1">
          <HeartIcon class="w-[18px]" />
        </Button>
        <Button compact variant="light" size="sm" class="p-1 mr-2">
          <ChatBubbleLeftEllipsisIcon class="w-[18px]" />
        </Button>
        <div class="text-gray-500">{{ $moment(data.date).fromNow() }}</div>
      </div>
      <button
        v-if="data.responses.length"
        class="flex items-center text-primary text-sm hover:underline pt-1.5 font-semibold"
        @click="toggleThread"
      >
        <component class="w-[12px] mr-1.5" :is="isThreadOpen ? ArrowUturnUpIcon : ArrowUturnLeftIcon"></component>
        <span v-if="!isThreadOpen">{{ countComment(data.responses) }} Replies</span>
        <span v-else>hide replies</span>
      </button>
    </div>
  </div>
  <div class="pl-12">
    <slot name="responses" v-bind="{ isCommentOpen, isThreadOpen }"></slot>
  </div>
</template>
