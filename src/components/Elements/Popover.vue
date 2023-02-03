<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ref } from "vue";

type PanelPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const props = defineProps<{
  panelClass?: string;
  panelPosition?: PanelPosition
}>();

const position = ref<string>({
  'top-left': 'right-0 bottom-[100%]',
  'top-right': 'left-0 bottom-[100%]',
  'bottom-left': 'right-0',
  'bottom-right': 'left-0'
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
        class="absolute bg-white shadow-md rounded-lg ring-1 ring-slate-500 ring-opacity-5 min-w-fit z-popover"
        :class="[panelClass, position]"
      >
        <slot name="content"></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
