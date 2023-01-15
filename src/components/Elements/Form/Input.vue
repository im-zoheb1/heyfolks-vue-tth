<script lang="ts" setup>
const props = defineProps<{
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}>();
</script>

<template>
  <div class="input__holder">
    <input
      class="input--field"
      :placeholder="props.placeholder"
      :required="props.required"
      :type="props.type"
    />
    <div class="input--border"></div>
    <div class="input--label">{{ props.label }}</div>
  </div>
</template>

<style lang="scss" scoped>
// tailwind.scss
.input__holder {
  width: 100%;
}
.input--field {
  @apply relative block bg-transparent tracking-wide border-0 outline-0 w-full text-xl font-semibold px-1 py-2.5;

  &::placeholder {
    @apply text-gray-500 font-semibold;
  }
  &:focus:not(:valid) ~ .input--border::after,
  &:focus:valid ~ .input--border::before {
    @apply left-auto right-0 w-full;
  }
  &:focus:valid ~ .input--border::after,
  &:focus:not(:valid) ~ .input--border::before,
  &:valid:not(:placeholder-shown) ~ .input--border::after,
  &:not(:placeholder-shown):not(:valid) ~ .input--border::before {
    @apply w-full;
  }
  &:placeholder-shown ~ .input--label {
    @apply opacity-0 -translate-y-[60px] invisible;
  }
}

.input--border {
  @apply relative mt-px h-[3px] w-full bg-gray-500;
  &::after, &::before {
    transition: width 0.5s cubic-bezier(0.74, 0.73, 0.23, 1);
    @apply absolute content-[''] table w-0 h-full top-0 left-0;
  }
  &::after {
    @apply bg-gradient-to-r from-primary to-secondary;
  }
  &::before {
    @apply bg-gradient-to-r from-red-700 to-red-600;
  }
}

.input--label {
  transition: all 0.3s;
  @apply block text-base text-primary -translate-y-[75px] font-semibold ml-[5px] mt-[7px];
}
</style>
