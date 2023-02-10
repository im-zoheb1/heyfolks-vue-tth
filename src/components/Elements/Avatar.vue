<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: boolean;
  clickable?: boolean;
}>();

const size = ref<string>(
  {
    xs: "w-9 h-9",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-18 h-18",
  }[props.size ?? "md"]
);

const border = props.rounded ? "rounded-md" : "rounded-full";
</script>

<template>
  <span
    :class="[size, border, clickable && 'cursor-pointer']"
    class="bg-white inline-block overflow-hidden min-w-fit ring-offset-2 ring-1 ring-slate-300 [&>*]:w-full [&>*]:h-full [&>*]:object-cover"
  >
    <slot></slot>
  </span>
</template>
