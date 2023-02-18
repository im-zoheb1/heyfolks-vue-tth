<script lang="ts" setup>
defineProps<{
  data: any
}>()
</script>

<template>
  <span>
    <div>
      <slot></slot>
    </div>
    <div>content</div>
  </span>
</template>
