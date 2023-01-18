<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>

<template>
  <Popover class="relative">
    <PopoverButton class="outline-0">
      <slot></slot>
    </PopoverButton>
    <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
      <PopoverPanel class="absolute right-0 bg-white shadow-md w-96 rounded-lg ring-1 ring-slate-500 ring-opacity-5 py-3 px-4">
        <slot name="content"></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
