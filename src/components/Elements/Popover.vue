<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const props = defineProps<{
  panelClass?: string;
}>();
</script>

<template>
  <Popover v-slot="{ open }" class="relative flex">
    <PopoverButton class="outline-0">
      <slot :open="open"></slot>
    </PopoverButton>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute right-0 bg-white shadow-md rounded-lg ring-1 ring-slate-500 ring-opacity-5 min-w-fit"
        :class="props.panelClass"
      >
        <slot name="content"></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
