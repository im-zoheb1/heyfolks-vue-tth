<script lang="ts" setup>
const props = defineProps<{
  isSmall?: boolean;
}>();

const size: string = props.isSmall ? 'text-3xl' : 'text-5xl'
</script>

<template>
  <span class="uppercase font-logo text-white" :class="size">
    <span class="text-accent">hey</span>folks
  </span>
</template>

<style lang="scss" scoped></style>
