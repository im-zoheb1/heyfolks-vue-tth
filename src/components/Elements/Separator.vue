<script setup lang="ts">
const props = defineProps<{
  isVertical?: boolean
}>()
</script>

<template>
  <div v-if="props.isVertical" class="w-px min-h-full bg-blue-100"></div> <!-- vertical separator -->
  <div v-else class="h-px bg-blue-100"></div>
</template>
