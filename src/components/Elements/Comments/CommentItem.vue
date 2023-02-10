<script lang="ts" setup>
import Avatar from "@/components/Elements/Avatar.vue";
import {
  ArrowUturnLeftIcon,
  HandThumbUpIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/vue/24/outline";

defineProps<{
  data: any;
  itemClass?: string
}>();

function countComment(comments: any): number {
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
      <div class="flex text-sm font-semibold text-gray-600 pt-1">
        <button class="mr-5 flex items-center">
          <HandThumbUpIcon class="w-5 mr-1" /> Like
        </button>
        <button class="flex items-center">
          <ChatBubbleLeftEllipsisIcon class="w-5 mr-1" /> Comment
        </button>
      </div>
      <button
        v-if="data.responses.length"
        class="flex items-center text-primary text-sm hover:underline pt-1.5 font-semibold"
      >
        <ArrowUturnLeftIcon class="w-[12px] mr-1.5" />
        {{ countComment(data.responses) }} Replies
      </button>
    </div>
  </div>
  <div class="pl-12">
    <slot name="responses"></slot>
  </div>
</template>
