<script lang="ts" setup>
const props = defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>()

const size = {
  xs: 'w-10 h-10',
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-18 h-18'
}[props.size ?? 'md']
</script>

<template>
  <span :class="size" class="rounded-full overflow-hidden ring-offset-2 ring-1 
    ring-slate-300 [&>*]:w-full [&>*]:h-full [&>*]:object-cover">
    <slot></slot>
  </span>
</template>
