<script lang="ts" setup>
import { ref } from "vue";
import NoUserPhoto from '@/assets/img/no-user-photo.svg' 

const props = defineProps<{
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
  clickable?: boolean;
	noRing?: boolean;
  src: string;
}>();

const size = ref<string>(
  {
    xs: "min-w-[2.25rem] min-h-[2.25rem] max-w-[2.25rem] max-h-[2.25rem]", // w-9
    sm: "min-w-[3rem] min-h-[3rem] max-w-[3rem] max-h-[3rem]", // w-12
    md: "min-w-[4rem] min-h-[4rem] max-w-[4rem] max-h-[4rem]", // w-16
    lg: "min-w-[5rem] min-h-[5rem] max-w-[5rem] max-h-[5rem]",
    xl: `min-w-[7rem] min-h-[7rem] max-w-[7rem] max-h-[7rem]`,
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
    class="inline-block overflow-hidden bg-slate-100 relative"
  >
    <img 
			:src="src" 
			@error="onImgError" 
			class="w-full h-full object-cover"
		/>
  </span>
</template>
