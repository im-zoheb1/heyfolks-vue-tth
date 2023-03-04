<script lang="ts" setup>
import { ref } from 'vue'

const isFocused = ref<boolean>(false)

const focusInput = (): void => {
  isFocused.value = true
}

const blurInput = (): void => {
  isFocused.value = false
}
</script>

<template>
  <textarea  
    class="form__input w-full outline-0 border rounded-lg p-3 max-w-xl"
    :class="{ 'ring-2 ring-offset-1': isFocused }"
    @focus="focusInput"
    @blur="blurInput"
    rows="4"
  ></textarea>
</template>
