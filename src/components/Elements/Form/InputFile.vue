<script lang="ts" setup>
import Button from '../Button.vue'

const props = defineProps<{
  name: string,
  multiple?: boolean;
}>()

/* const emit = defineEmits<{
  (e: 'change', value: Event): void
}>() */
</script>

<template>
  <span>
    <label :for="name" class="block cursor-pointer">
      <slot>
        Upload
      </slot>
    </label>
    <input :id="name" class="hidden" type="file" :multiple="multiple" @change="$emit('change', $event)" />
  </span>
</template>
