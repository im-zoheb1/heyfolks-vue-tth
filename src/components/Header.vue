<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue'
import SearchBar from '@/components/Elements/SearchBar/index.vue'
import Button from '@/components/Elements/Button.vue'
import { BellIcon, ChatBubbleOvalLeftIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header class="bg-white absolute top-0 left-0 right-0 w-full shadow-sm flex items-center justify-between">
    <SearchBar></SearchBar>
    <div class="flex items-center">
      <Button compact variant="light" pilled class="p-2 mx-3 text-gray-700">
        <ChatBubbleOvalLeftIcon class="w-7" />
      </Button>
      <Button compact variant="light" pilled class="p-2 text-gray-700">
        <BellIcon class="w-7"></BellIcon>
      </Button>
      <div class="w-px h-8 mx-4 bg-gray-200 "></div> <!-- vertical separator -->
      <Avatar class="mr-3" size="sm" clickable>
        <img src="@/assets/img/user.png" />
      </Avatar>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
