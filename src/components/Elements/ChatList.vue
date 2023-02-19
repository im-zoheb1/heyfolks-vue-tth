<script lang="ts" setup>
import SearchBar from './SearchBar.vue';
import Avatar from './Avatar.vue';
import { ref } from 'vue';
import { getMessages } from '@/generator/messages';

const messages = ref<any[]>(getMessages());
</script>

<template>
  <div class="p-2 flex-1 h-full overflow-y-scroll">
    <SearchBar class="mb-2" />
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
        <div class="line-clamp-1 leading-tight text-[15px] text-gray-500">
          {{ message.message }}
        </div>
      </span>
      <div class="ml-auto pl-2 text-xs font-semibold text-gray-500 flex-col">
        <div class="whitespace-nowrap mb-2">
          {{ $moment(message.date).format("LT") }}
        </div>
        <span
          v-if="message.unread"
          class="flex items-center justify-center bg-primary w-5 h-5 text-white ml-auto rounded-md"
          >{{ message.unread }}</span
        >
      </div>
    </a>
  </div>
</template>
