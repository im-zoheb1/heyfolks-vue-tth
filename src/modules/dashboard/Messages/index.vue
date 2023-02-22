<script lang="ts" setup>
import ChatLayout from "@/layout/ChatLayout.vue";
import Separator from "@/components/Elements/Separator.vue";
import ChatList from "@/components/Elements/ChatList.vue";
import CommentInput from "@/components/Elements/Comments/CommentInput.vue";
import Avatar from "@/components/Elements/Avatar.vue";
import Button from "@/components/Elements/Button.vue";
import { getChat } from "@/generator/conversation";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { ref, onMounted } from "vue";
import {
  EllipsisHorizontalIcon as EllipsisIcon,
  BellIcon as MuteIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/vue/24/outline";

const message = ref<string>("");
const conversation = ref(getChat());
const scrollerRef = ref<HTMLDivElement | null>(null)

const isSelf = (message: any): boolean => {
  return message.sender.id === 1
}

const scrollToBottom = (): void => {
  if (scrollerRef.value) {
    const el = scrollerRef.value?.$el
    el.scrollTop = el.scrollHeight
  }
}

onMounted(() => {
  scrollToBottom()
})
</script>

<template>
  <ChatLayout>
    <div class="chat-container">
      <ChatList />
      <Separator is-vertical />
      <div class="chat">
        <div class="chat__header">
          <div class="flex items-center">
            <Avatar size="sm">
              <img :src="conversation.userInfo.avatar" />
            </Avatar>
            <div class="ml-3 leading-tight">
              <div class="font-semibold">{{ conversation.userInfo.name }}</div>
              <div class="text-muted text-sm font-semibold">
                @{{ conversation.userInfo.username }}
              </div>
            </div>
          </div>
          <div class="flex">
            <Button variant="flat" pilled compact class="p-2">
              <SearchIcon class="w-6" />
            </Button>
            <Button variant="flat" pilled compact class="p-2">
              <MuteIcon class="w-6" />
            </Button>
            <Button variant="flat" pilled compact class="p-2">
              <EllipsisIcon class="w-6" />
            </Button>
          </div>
        </div>
        <PerfectScrollbar ref="scrollerRef" class="chat__content">
          <div class="chat__messages">
            <div 
              class="chat__message mt-3"
              :class="{ 'ml-auto': message.sender.id === 1 }"
              v-for="message in conversation.messages"
            >
              <div 
                class="inline-block border rounded-3xl py-2 px-4 max-w-lg"
                :class="{
                  'bg-light-1 rounded-tr-none ml-auto': isSelf(message),
                  'bg-primary text-light-1 rounded-tl-none': !isSelf(message)
                }"
              >
                {{ message.content }}
                <div 
                  class="text-right text-[12px] text-muted font-semibold"
                  :class="{ 'text-gray-200': !isSelf(message)}"
                >{{ $moment(message.timestamp).format('LT') }}</div>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
        <Separator />
        <div class="chat__footer">
          <CommentInput v-model="message" />
        </div>
      </div>
    </div>
  </ChatLayout>
</template>

<style lang="scss" scoped>
.chat-container {
  height: calc(100vh - 66px);
  @apply bg-main-bg flex items-stretch;
}
.chat {
  @apply flex flex-col flex-[2];
  &__header {
    @apply h-16 flex items-center px-3 justify-between shadow;
  }
  &__content {
    @apply p-3 flex-1 overflow-y-scroll
  }
  &__messages {
    @apply flex flex-col;
  }
  &__footer {
    @apply p-2;
  }
}
</style>
