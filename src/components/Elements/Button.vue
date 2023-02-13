<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  compact?: boolean;
  pilled?: boolean;
  type?: "submit" | "reset";
  variant?: "primary" | "light" | "light-primary" | "danger-light";
  size?: "sm" | "md" | "lg" | "xl";
  transformOnHover?: boolean;
  noPointerEvents?: boolean;
}>();

const variant = ref<string>({
  primary: "bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white",
  light: "bg-light-1 hover:bg-light-2 text-gray-600",
  "light-primary": "bg-light-1 hover:bg-light-2 text-primary",
  "danger-light": "bg-red-50 hover:bg-red-100 text-gray-500 shadow-xl"
}[props.variant ?? "primary"]);

// const spacing = ''

const size = ref<string>(((S: string): string => {
  let [padding, text]: [string, string] = ['', '']
  if (S === 'xl') [padding, text] = ['py-3.5 px-9', 'text-xl']
  if (S === 'lg') [padding] = ['py-2.5 px-5', 'text-lg']
  if (S === 'md') [padding] = ['py-2 px-3', 'text-base']
  if (S === 'sm') [padding] = ['py-1.5 px-3', 'text-md']
  return props.compact ? text : padding + ' ' + text
})(props.size || 'md'))

const pointerEvents = ref<string>(props.noPointerEvents ? 'pointer-events-none' : '')

const border = ref<string>({
  pilled: "rounded-full",
  rounded: "rounded-lg",
}[props.pilled ? "pilled" : "rounded"]);

const transform = ref<string>(props.transformOnHover ? "hover:translate-y-[-4px] active:translate-y-[4px]" : "");

const defaultStyles = "inline-block font-bold transition duration-300 ease-in-out focus:outline-0";

const style = ref<string>(`${variant.value} ${size.value} ${border.value} ${defaultStyles} ${transform.value} ${pointerEvents.value}`);
</script>

<template>
  <button 
    :class="style"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>
