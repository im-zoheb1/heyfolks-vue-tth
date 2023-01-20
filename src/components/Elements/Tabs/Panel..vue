<script setup lang="ts">
const props = defineProps<{
  name: string,
  value?: string
}>()
</script>

<template>
  <slot v-bind="{ name: props.name, value: props.value }"></slot>
</template>
