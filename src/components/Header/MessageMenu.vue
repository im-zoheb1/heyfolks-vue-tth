<script lang="ts" setup>
import Button from "@/components/Elements/Button.vue";
import Popover from "@/components/Elements/Popover.vue";
import Separator from "@/components/Elements/Separator.vue"
import Avatar from '@/components/Elements/Avatar.vue'
import { ChatBubbleOvalLeftIcon } from "@heroicons/vue/20/solid";
import { ref, onMounted } from 'vue'
import { getMessages } from "@/generator/messages";

const messages = ref<any[]>(getMessages())
</script>

<template>
  <Popover panel-class="w-[400px]" panel-position="bottom-left">
    <template #default="{ open }">
      <Button compact variant="light" pilled class="p-2 mx-3">
        <ChatBubbleOvalLeftIcon class="w-7" :class="{ 'text-primary': open }" />
      </Button>
    </template>
    <template #content>
      <h3 class="text-xl tracking-wide font-bold py-3 px-4">Messages</h3>
      <Separator />
      <div class="p-2">
        <a 
          href="#" 
          v-for="message in messages" 
          class="flex items-center p-3 transition duration-300 rounded-xl hover:bg-light-2 [&+*]:mt-1.5"
          :class="{ 'bg-blue-50': message.unread }"
        >
          <Avatar size="sm">
            <img :src="message.avatar" />
          </Avatar>
          <span class="ml-3">
            <div class="font-bold text-md">{{ message.name }}</div>
            <div class="line-clamp-1 leading-tight text-[15px] text-gray-500">{{ message.message }}</div>
          </span>
          <div class="ml-auto pl-2 text-xs font-semibold text-gray-500 flex-col">
            <div class="whitespace-nowrap mb-2">{{ $moment(message.date).format('LT') }}</div>
            <span v-if="message.unread" class="flex items-center justify-center bg-primary w-5 h-5 text-white ml-auto rounded-md">{{ message.unread }}</span>
          </div>
        </a>
      </div>
      <Separator />
      <div class="my-2 mx-3">
        <Button class="w-full" size="sm" variant="light">See all</Button>
      </div>
    </template>
  </Popover>
</template>
