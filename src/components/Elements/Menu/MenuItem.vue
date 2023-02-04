<script lang="ts" setup>
import { MenuItem } from '@headlessui/vue'
</script>

<template>
  <MenuItem v-slot="{ active }">
    <button
      :class="[
        active ? 'bg-light-1' : 'text-gray-900',
        'group w-full rounded-md p-3 text-md',
      ]"
    >
      <slot></slot>
    </button>
  </MenuItem>
</template>
