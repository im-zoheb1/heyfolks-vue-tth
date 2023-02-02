<script lang="ts" setup>
import NotificationMenu from './NotificationMenu.vue'
import MessageMenu from './MessageMenu.vue'
import SearchBar from '@/components/Elements/SearchBar.vue'
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue'
import Menu from '@/components/Elements/Menu/index.vue'
import MenuItem from '@/components/Elements/Menu/MenuItem.vue'
import { UserIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  userData: any
}>()
</script>

<template>
  <header class="bg-white fixed top-0 left-0 right-0 w-full flex items-center justify-between shadow-sm">
    <SearchBar class="ml-3"></SearchBar>
    <div class="flex items-center">
      <MessageMenu /> 
      <NotificationMenu />
      <Separator is-vertical class="mx-4 h-8" />
      <!-- start: user menu -->
      <Menu>
        <template #button>
          <Avatar size="sm">
            <img :src="userData.avatar" />
          </Avatar>
        </template>
        <div class="ml-3 mb-2 font-semibold leading-tight">
          <div class="text-base">{{ userData.fullname }}</div>
          <div class="text-md text-gray-400">{{ userData.username }}</div>
        </div>
        <MenuItem class="flex items-center">
          <UserIcon class="w-6 mr-3" /> Profile
        </MenuItem>
        <MenuItem class="flex items-center">
          <Cog6ToothIcon class="w-6 mr-3" /> Settings
        </MenuItem>
        <Separator class="my-3" />
        <MenuItem class="flex items-center text-red-600">
          <ArrowLeftOnRectangleIcon class="w-6 mr-3" /> Logout
        </MenuItem>
      </Menu>
      <!-- end: user menu -->
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
