<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import Separator from "@/components/Elements/Separator.vue";
import ChatList from "@/components/Elements/ChatList.vue";
import CommentInput from "@/components/Elements/Comments/CommentInput.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { ref } from "vue";

const message = ref<string>("");
</script>

<template>
  <MainLayout>
    <div class="chat-container">
      <ChatList />
      <Separator is-vertical />
      <div class="chat">
        <div class="chat__header">chat header</div>
        <PerfectScrollbar class="chat__content">
          <div class="chat__messages">
            <div class="chat__message">messaages</div>
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
  &__header,
  &__content,
  &__footer {
    @apply p-2;
  }
  &__header {
    @apply shadow-sm;
  }
  &__content {
    @apply flex-1 overflow-y-scroll;
  }
  &__footer {
  }
}
</style>
