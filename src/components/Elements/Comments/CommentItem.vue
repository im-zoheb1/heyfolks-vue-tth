<script lang="ts" setup>
import Avatar from "@/components/Elements/Avatar.vue"
import Button from "@/components/Elements/Button.vue"
import { HeartIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/outline"
import { HeartIcon as HeartIconSolid } from "@heroicons/vue/24/solid"

defineProps<{
  data: any;
  itemClass?: string
}>();

const emits = defineEmits<{
  (e: 'comment'): void;
  (e: 'like'): void;
}>()

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
        <Button compact variant="light" size="sm" class="mr-5 p-1" @click="emits('like')">
          <HeartIconSolid v-if="data.isLiked" class="w-[18px] text-secondary" />
          <HeartIcon v-else class="w-[18px]" />
        </Button>
        <Button compact variant="light" size="sm" class="p-1 mr-2" @click="emits('comment')">
          <ChatBubbleLeftEllipsisIcon class="w-[18px]" />
        </Button>
        <div class="text-gray-500">{{ $moment(data.date).fromNow() }}</div>
      </div> 
      <slot></slot>
    </div>
  </div>
  <div class="pl-12">
    <slot name="responses"></slot>
  </div>
</template>
