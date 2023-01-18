<script lang="ts" setup>
import { ref } from 'vue'
import Button from '@/components/Elements/Button.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

const value = ref<any>(null)

const search = (event: Event): void => {
  console.log('on change', event)
}
</script>

<template>
  <div>
    <Button 
      compact
      pilled
      class="p-2 rounded-full"
    >
      <MagnifyingGlassIcon class="h-6 w-6"></MagnifyingGlassIcon>
    </Button>
    <Combobox v-model="value">
      <ComboboxInput @change="search"></ComboboxInput>
      <ComboboxOptions>
        <ComboboxOption value="Durward Reynolds">
          Durward Reynolds
        </ComboboxOption>
        <ComboboxOption value="Kenton Towne">
          Kenton Towne
        </ComboboxOption>
      </ComboboxOptions>
    </Combobox>
  </div>
</template>
