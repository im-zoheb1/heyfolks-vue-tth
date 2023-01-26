<script lang="ts" setup>
const props = defineProps<{
  name: string,
  multiple?: boolean;
  accept?: string
}>()

const emit = defineEmits<{
  (e: 'change', value: Event): void;
  (e: 'load', value: Event): void
}>()

const onLoad = (e: Event): void => {
  emit('load', e)
}

const onChange = (e: Event): void => {
  emit('change', e)
}
</script>

<template>
  <span>
    <label :for="name" class="block cursor-pointer">
      <slot>
        Upload
      </slot>
    </label>
    <input 
      :id="name" 
      :accept="accept && 'image/*'" 
      class="hidden" 
      type="file" 
      :multiple="multiple" 
      @change="onChange" 
      @load="onLoad"
    />
  </span>
</template>
