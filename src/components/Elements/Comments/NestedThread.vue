<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue';
import { ArrowUturnLeftIcon, HandThumbUpIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue'

const props = defineProps<{
  data: any;
  level: number;
}>()

const isThreadOpen = ref<boolean>(false)

function countComment(comments: any): number {
  let count: number = 0
  for (let comment of comments) {
    count = count + 1
    count += countComment(comment.responses)
  }
  return count
}

const toggleThread = (): void => {
  isThreadOpen.value = !isThreadOpen.value
}
</script>

<template>
  <section class="w-full">
    <ul>
      <li 
        v-for="(item, index) in data"
        class="relative"
        :class="{ 'connection-line': item.responses.length }"
      >
        <!-- comment: start  -->
        <div class="flex mb-4 relative" >
          <span :class="{ 'connection-line__curved': level }"></span>
          <Avatar size="xs">
            <img :src="item.avatar" />
          </Avatar>
          <div class="ml-3 text-gray-700">
            <h3 class="font-bold">{{ item.fullname }}</h3>
            <p class="leading-tight">{{ item.text }}</p>
            <div class="flex mt-1 my-2 text-sm font-semibold text-gray-600">
              <button class="mr-5 flex items-center">
                <HandThumbUpIcon class="w-5 mr-1" />
                Like
              </button>
              <button class="flex items-center">
                <ChatBubbleLeftEllipsisIcon class="w-5 mr-1" />
                Comment
              </button>
            </div>
            <button v-if="item.responses?.length && !isThreadOpen" class="flex items-center text-primary text-sm hover:underline" @click="toggleThread">
              <ArrowUturnLeftIcon class="w-[12px] mr-1.5" />
              {{ countComment(item.responses) }} Replies
            </button>
          </div>
        </div>
        <!-- comment: end -->
        <!-- thread: start -->
        <NestedThread 
          v-if="item.responses?.length && isThreadOpen" 
          :level="level + 1"
          :data="item.responses"
          class="pl-12"
        ></NestedThread>
        <!-- thread: end -->
      </li>
    </ul>
  </section>
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
