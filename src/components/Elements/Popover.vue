<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ref } from "vue";

type PanelPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'fixed-header-right'

const props = defineProps<{
  panelClass?: string;
  panelPosition?: PanelPosition
}>();

const position = ref<string>({
  'top-left': 'absolute right-0 bottom-[100%]',
  'top-right': 'absolute left-0 bottom-[100%]',
  'bottom-left': 'absolute right-0',
  'bottom-right': 'absolute left-0',
  'fixed-header-right': 'fixed top-[68px] right-2 bottom-2'
}[props.panelPosition ?? 'bottom-right'])
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton class="outline-0 flex">
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
        class="bg-main-bg shadow-md rounded-lg ring-1 ring-slate-500 ring-opacity-5 w-full z-popover"
        :class="[panelClass, position]"
      >
        <slot name="content"></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
