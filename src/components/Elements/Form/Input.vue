<script lang="ts" setup>
const props = defineProps<{
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  underlined?: boolean;
}>();
</script>

<template>
  <div class="input__bordered" v-if="!underlined">
    <span class="prepend">prepend</span>
    <input class="w-full outline-0 py-1 px-2" />
    <span class="append">append</span>
  </div>
  <div v-else class="input__holder">
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
.input__bordered {
  @apply border rounded flex;
  .prepend, .append {
    @apply bg-light-1 py-1.5 px-3 text-muted;
  }
  .prepend {
    @apply border-r;
  }
  .append {
    @apply border-l;
  }
}
.input__holder {
    @apply w-full;
}

.input--field {
    @apply relative block tracking-wide border-0 outline-0 w-full bg-transparent font-semibold px-1 py-2.5 text-xl;
    &::placeholder {
        @apply text-muted font-semibold;
    }

    &:focus:not(:valid) ~ .input--border::after,
    &:focus:valid ~ .input--border::before {
        @apply left-auto w-0 right-0;
    }

    &:focus:valid ~ .input--border::after,
    &:focus:not(:valid) ~ .input--border::before,
    &:valid:not(:placeholder-shown) ~ .input--border::after, 
    &:not(:placeholder-shown):not(:valid) ~ .input--border::before {
      @apply w-full;
    }

    &:placeholder-shown~.input--label {
      @apply opacity-0 -translate-y-[60px] invisible;
    }
}

.input--border {
    @apply relative mt-px h-[3px] w-full bg-gray-500;
    &::after,
    &::before {
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
  @apply block text-base text-primary -translate-y-[75px] font-semibold ml-[5px] mt-[7px] transition-all duration-300;
}
</style>
