<script lang="ts" setup>
import Button from "../Elements/Button.vue";
import Popover from "../Elements/Popover.vue";
import Separator from "../Elements/Separator.vue";
import ChatList from "../Elements/ChatList.vue";
import { ChatBubbleOvalLeftIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <Popover panel-class="max-w-[400px] w-[96%]" panel-position="fixed-header-right">
    <template #default="{ open }">
      <Button compact variant="light" pilled class="p-2 mx-3">
        <ChatBubbleOvalLeftIcon class="w-7" :class="{ 'text-primary': open }" />
      </Button>
    </template>
    <template #content>
      <div class="flex flex-col h-full">
        <h3 class="text-xl tracking-wide font-bold py-3 px-4">Messages</h3>
        <Separator />
        <ChatList /> 
        <div>
          <Separator />
          <Button class="px-4 m-3" size="sm" variant="light">
            View all messages 
          </Button>
        </div>
      </div>
    </template>
  </Popover>
</template>
