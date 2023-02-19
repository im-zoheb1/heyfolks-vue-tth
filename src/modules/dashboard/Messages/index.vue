<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import Separator from "@/components/Elements/Separator.vue";
import ChatList from "@/components/Elements/ChatList.vue";
</script>

<template>
  <MainLayout>
    <div class="chat">
      <ChatList />
      <Separator is-vertical />
      <div class="chat__user-chat">right</div>
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped>
.chat {
  height: calc(100vh - 88px);
  @apply  bg-main-bg shadow-sm flex items-stretch;
  &__left-sidebar {
    @apply flex-1 p-2;
  }
  &__user-chat {
    @apply flex-[2] p-2;
  }
}
</style>
