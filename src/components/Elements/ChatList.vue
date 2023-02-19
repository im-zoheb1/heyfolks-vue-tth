<script lang="ts" setup>
import SearchBox from "./SearchBox.vue";
import Avatar from "./Avatar.vue";
import ScrollBar from "./ScrollBar.vue";
import { ref } from "vue";
import { getMessages } from "@/generator/messages";

const messages = ref<any[]>(getMessages());
</script>

<template>
  <ScrollBar class="flex-1 h-full relative">
    <SearchBox
      class="sticky top-0 bg-main-bg p-2 shadow-sm overflow-hidden rounded-t-lg"
    />
    <div class="p-2">
      <a
        href="#"
        v-for="message in messages"
        class="flex items-center p-4 transition duration-300 rounded-xl hover:bg-light-2"
        :class="{ 'bg-light-1': message.unread }"
      >
        <Avatar size="sm">
          <img :src="message.avatar" />
        </Avatar>
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
  </ScrollBar>
</template>
