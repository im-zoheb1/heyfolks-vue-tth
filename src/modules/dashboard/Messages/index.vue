<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import Separator from "@/components/Elements/Separator.vue";
import ChatList from "@/components/Elements/ChatList.vue";
import CommentInput from "@/components/Elements/Comments/CommentInput.vue";
import Avatar from "@/components/Elements/Avatar.vue";
import Button from "@/components/Elements/Button.vue";
import { getChat } from "@/generator/conversation";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { ref } from "vue";
import {
  EllipsisHorizontalIcon as EllipsisIcon,
  BellIcon as MuteIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/vue/24/outline";

const message = ref<string>("");
const conversation = ref(getChat());
</script>

<template>
  <MainLayout>
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
        <PerfectScrollbar class="chat__content">
          <div class="chat__messages">
            <div 
              class="chat__message mt-4"
              :class="{ 'ml-auto': message.sender.id === 1 }"
              v-for="message in conversation.messages"
            >
              <div 
                class="inline-block border rounded-lg p-2"
                :class="{
                  'bg-light-1 rounded-tr-none ml-auto': message.sender.id === 1,
                  'bg-primary text-white rounded-tl-none': message.sender.id !== 1
                }"
              >
                {{ message.content }}
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
  </MainLayout>
</template>

<style lang="scss" scoped>
.chat-container {
  height: calc(100vh - 88px);
  @apply bg-main-bg shadow rounded-md flex items-stretch;
}
.chat {
  @apply flex flex-col flex-[2];
  &__header {
    @apply h-16 flex items-center px-3 justify-between shadow-sm;
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
