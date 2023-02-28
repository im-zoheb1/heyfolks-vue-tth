<script lang="ts" setup>
import SearchBox from "./SearchBox.vue";
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";
import { ref } from "vue";
import { getMessages } from "@/generator/messages";
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { ArrowSmallLeftIcon as BackIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  goBack?: boolean
}>()

const emit = defineEmits<{
  (e: 'open-chat', value?: any): void
}>()

const messages = ref<any[]>(getMessages());

const openChat = (): void => {
  emit('open-chat')
}
</script>

<template>
  <PerfectScrollbar class="flex-1 h-full relative">
    <div class="sticky top-0 flex items-center p-2 bg-main-bg shadow-sm z-10">
      <slot name="search-prepend"></slot> 
      <SearchBox class="flex-1 overflow-hidden rounded-t-lg" />
    </div>
    <div>
      <a
        href="#"
        v-for="(message, index) in messages"
				:key="`chat-list-message-${index}`"
        class="flex items-center p-4 transition duration-300 hover:bg-light-2"
        :class="{ 'bg-light-1': message.unread }"
        @click="openChat"
      >
        <Avatar :src="message.avatar" size="sm" />
        <span class="ml-3">
          <div class="font-semibold text-md">{{ message.name }}</div>
          <div class="line-clamp-1 leading-tight text-[15px] text-muted">
            {{ message.message }}
          </div>
        </span>
        <div class="ml-auto pl-2 text-xs font-semibold text-muted flex-col">
          <div class="whitespace-nowrap mb-2">
            {{ $moment(message.date).format("LT") }}
          </div>
          <span
            v-if="message.unread"
            class="flex items-center justify-center bg-primary w-5 h-5 text-white ml-auto rounded-md"
          >
            {{ message.unread }}
          </span>
        </div>
      </a>
    </div>
  </PerfectScrollbar>
</template>
