<script lang="ts" setup>
const props = defineProps<{
  compact?: boolean;
  pilled?: boolean;
  type?: "submit" | "reset";
  variant?: "primary" | "light";
  transformOnHover?: boolean;
}>();

const variant: string = {
  primary: "bg-gradient-to-br from-primary to-secondary text-white",
  light: "bg-blue-50 hover:bg-blue-100 text-primary",
}[props.variant ?? "primary"];

const spacing: string = {
  compact: "",
  normal: "py-3.5 px-9 text-xl",
}[props.compact ? "compact" : "normal"];

const border: string = {
  pilled: "rounded-full",
  rounded: "rounded",
}[props.pilled ? "pilled" : "rounded"];

const transform: string = props.transformOnHover
  ? "hover:translate-y-[-4px] active:translate-y-[4px]"
  : "";

const defaultStyles = "font-bold transition duration-300 ease-in-out";

const style: string = `${variant} ${spacing} ${border} ${defaultStyles} ${transform}`;
</script>

<template>
  <button 
    :class="style"
    :type="props.type"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
