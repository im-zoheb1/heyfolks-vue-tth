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

const isLastType = (index: number): boolean => {
  const { messages } = conversation.value
  if (!messages[index+1]) return true
  if (messages[index].sender.id !== messages[index+1].sender.id) return true
  return false
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
              v-for="(message, index) in conversation.messages"
              class="chat__message"
              :class="{ 
                'is-self': isSelf(message),
                'is-last-type': isLastType(index)
              }"
              :key="`chat-message-${index}`"
            >
              <div class="chat__message__avatar-wrapper">
                <Avatar size="xs">
                  <img :src="message.sender.avatar" />
                </Avatar>
              </div>
              <div class="chat__message__content">
                <div class="chat__message__text">{{ message.content }}</div>
                <div class="chat__message__footer">{{ $moment(message.timestamp).format('LT') }}</div>
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
  &__message {
    @apply mt-2 flex items-end;
    &__avatar-wrapper {
      @apply mx-2 cursor-pointer;
    }
  }
  &__message.is-self {
    @apply flex flex-row-reverse;
  }
  &__message:not(.is-last-type) &__message__avatar-wrapper {
    @apply invisible opacity-0;
  }
  &__message__content {
    @apply inline-block border py-2 px-4 max-w-lg bg-primary text-light-1 rounded-2xl;
  }
  &__message.is-last-type &__message__content {
    @apply rounded-bl-none;
  }
  &__message.is-self &__message__content {
    @apply bg-light-1 text-gray-600 text-left;
  }
  &__message.is-self.is-last-type &__message__content {
    @apply rounded-2xl rounded-br-none;
  }
  &__message__footer {
    @apply text-right text-[12px] text-muted font-semibold text-light-2;
  }
  &__message.is-self &__message__footer {
    @apply text-gray-500;
  }
  &__footer {
    @apply p-2;
  }
}
</style>
