<script setup lang="ts">
const props = defineProps<{
  isVertical?: boolean
}>()
</script>

<template>
  <div v-if="props.isVertical" class="w-px min-h-full bg-light-2"></div> <!-- vertical separator -->
  <div v-else class="h-px bg-light-2"></div>
</template>
