<script lang="ts" setup>
const props = defineProps<{
  compact?: boolean;
  pilled?: boolean;
  type?: "submit" | "reset";
  variant?: "primary" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  transformOnHover?: boolean;
}>();

const variant: string = {
  primary: "bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white",
  light: "bg-blue-50 hover:bg-blue-100 text-primary",
}[props.variant ?? "primary"];

// const spacing = ''

const size = ((S: string): string => {
  let [padding, text]: [string, string] = ['', '']
  if (S === 'xl') [padding, text] = ['py-3.5 px-9', 'text-xl']
  if (S === 'lg') [padding] = ['py-2.5 px-5', 'text-lg']
  if (S === 'md') [padding] = ['py-2 px-3', 'text-base']
  if (S === 'sm') [padding] = ['py-1.5 px-2.5', 'text-md']
  return props.compact ? text : padding + ' ' + text
})(props.size || 'md')

/* const spacing: string = {
  compact: "",
  normal: "py-3.5 px-9 text-xl",
}[props.compact ? "compact" : "normal"]; */

const border: string = {
  pilled: "rounded-full",
  rounded: "rounded-lg",
}[props.pilled ? "pilled" : "rounded"];

const transform: string = props.transformOnHover
  ? "hover:translate-y-[-4px] active:translate-y-[4px]"
  : "";

const defaultStyles = "font-bold transition duration-300 ease-in-out";

const style: string = `${variant} ${size} ${border} ${defaultStyles} ${transform}`;
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
