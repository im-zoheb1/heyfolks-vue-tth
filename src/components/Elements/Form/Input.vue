<script lang="ts" setup>
const props = defineProps<{
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}>();
</script>

<template>
  <div class="input">
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
.input {
  @apply w-full;
  &--field {
    @apply 
    letter-spacing: 0.5px;
    padding: 10px 5px;
    @apply border-0 outline-0 w-full relative block bg-transparent font-semibold text-xl;

    &::placeholder {
      @apply font-semibold text-gray-500;
    }

    &:focus:not(:valid) ~ .input_border::after,
    &:focus:valid ~ .input_border::before {
      @apply w-0 r-0;
      left: auto;
    }

    &:focus:valid ~ .input_border::after,
    &:focus:not(:valid) ~ .input_border::before,
    &:valid:not(:placeholder-shown) ~ .input_border::after,
    &:not(:placeholder-shown):not(:valid) ~ .input_border::before {
      @apply w-full;
    }

    &:placeholder-shown ~ .input_label {
      @apply opacity-0 hidden -translate-y-60;
    }
  }

  &--border {
    @apply relative w-full h-0.5 mt-px bg-gray-500;

    &::after,
    &::before {
      @apply content-[''] table w-0 h-full absolute top-0 left-0;
      transition: width 0.5s cubic-bezier(0.74, 0.73, 0.23, 1);
    }
    &::after {
      @apply bg-gradient-to-r from-primary to-secondary;
    }
    &::before {
      @apply bg-gradient-to-r from-red-700 to-red-600;
    }
  }

  &--label {
    @apply block text-base text-primary -translate-y-75 font-bold ml-5 mt-5;
    transition: all 0.3s;
  }
}

</style>
