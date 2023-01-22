<script lang="ts" setup>
import NotificationMenu from './NotificationMenu.vue'
import MessageMenu from './MessageMenu.vue'
import SearchBar from '@/components/Elements/SearchBar.vue'
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue'

const props = defineProps<{
  userData: any
}>()
</script>

<template>
  <header class="bg-white absolute top-0 left-0 right-0 w-full shadow-sm flex items-center justify-between">
    <SearchBar class="ml-3"></SearchBar>
    <div class="flex items-center">
      <MessageMenu /> 
      <NotificationMenu />
      <Separator is-vertical class="mx-4 h-8" />
      <Avatar class="mr-3" size="sm" clickable>
        <img :src="userData.avatar" />
      </Avatar>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
