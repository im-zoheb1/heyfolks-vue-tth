<script lang="ts" setup>
import SearchBox from "./SearchBox.vue";
import Avatar from "./Avatar.vue";
import ChatListSkeleton from "../Skeleton/ChatListSkeleton.vue";
import { ref, inject, onMounted } from "vue";
import { getMessages } from "@/generator/messages";
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import injectKey from "@/config/injectKey";

const props = defineProps<{
  goBack?: boolean
}>()

const emit = defineEmits<{
  (e: 'open-chat', value?: any): void
}>()

const messages = ref<any[]>([]);
const isLoading = ref<boolean>(true)
const $http = inject(injectKey.$http)

const openChat = (value: any): void => {
  emit('open-chat', value)
}

const fetchData = async (): Promise<void> => {
  try {
    const res = await $http?.get('chat/list')
    const data = res?.data.data
    messages.value?.push(...data)
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <PerfectScrollbar class="flex-1 h-full relative">
    <div class="sticky top-0 flex items-center p-2 bg-main-bg shadow-sm z-10">
      <slot name="search-prepend"></slot> 
      <SearchBox class="flex-1 overflow-hidden rounded-t-lg" />
    </div>
    <div>
      <ChatListSkeleton v-if="isLoading" />
      <a
        v-else
        href="#"
        v-for="(message, index) in messages"
				:key="`chat-list-message-${index}`"
        class="flex items-center p-4 transition duration-300 hover:bg-light-2"
        :class="{ 'bg-light-1': message.unread }"
        @click="openChat(message)"
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
