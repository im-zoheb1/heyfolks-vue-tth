<script lang="ts" setup>
import NotificationMenu from './NotificationMenu.vue'
import MessageMenu from './MessageMenu.vue'
import SearchBar from '@/components/Elements/SearchBar.vue'
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
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
      <Menu as="div" class="relative inline-block text-left mr-3">
        <MenuButton class="inline-flex">
          <Avatar size="sm">
            <img :src="userData.avatar" />
          </Avatar>
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="pl-4 pr-2 py-2 leading-tight">
              <div class="font-semibold text-md">{{ userData.fullname }}</div>
              <div class="font-semibold text-sm text-gray-400">{{ userData.username }}</div>
            </div>
            <div class="px-2 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-50' : 'text-gray-900',
                    'group flex w-full items-center rounded-md p-3 text-md',
                  ]"
                >
                  <UserIcon class="w-6 mr-3" /> Profile
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-50' : 'text-gray-900',
                    'group flex w-full items-center rounded-md p-3 text-md',
                  ]"
                >
                  <Cog6ToothIcon class="w-6 mr-3" /> Settings
                </button>
              </MenuItem>
            </div>
            <div class="px-2 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-50' : '',
                    'group flex w-full items-center rounded-md p-3 text-md text-red-600',
                  ]"
                >
                  <ArrowLeftOnRectangleIcon class="w-6 mr-3" /> Logout
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
    </Menu>
      <!-- end: user menu -->
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
