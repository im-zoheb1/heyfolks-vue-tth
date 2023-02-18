<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

defineProps<{
  popoverClass?: string
}>()
</script>

<template>
  <Menu as="div" class="relative inline-block text-left mr-3">
    <MenuButton class="inline-flex">
      <slot name="button"></slot> 
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
        class="absolute right-0 mt-2 w-56 z-popover origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        :class="popoverClass"
      >
        <div class="p-2">
          <slot></slot>
        </div>
      </MenuItems>
    </transition>         
  </Menu>
</template>
