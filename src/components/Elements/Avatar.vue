<script lang="ts" setup>
import { ref } from "vue";
import NoUserPhoto from '@/assets/img/no-user-photo.svg' 

const props = defineProps<{
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: boolean;
  clickable?: boolean;
	noRing?: boolean;
  src: string;
}>();

const size = ref<string>(
  {
    xs: "w-9 h-9",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-[80px] h-[80px]",
  }[props.size ?? "md"]
);

const border = props.rounded ? "rounded-2xl" : "rounded-full";

// methods: start
const onImgError = (event: Event) => {
  (event.target as HTMLImageElement).src = NoUserPhoto
}
</script>

<template>
  <span
    :class="[size, border, clickable && 'cursor-pointer', !noRing && 'ring-offset-2 ring-1 ring-slate-300']"
    class="inline-block overflow-hidden min-w-max [&>*]:w-full [&>*]:h-full [&>*]:object-cover bg-slate-100"
  >
    <img :src="src" @error="onImgError" />
  </span>
</template>
