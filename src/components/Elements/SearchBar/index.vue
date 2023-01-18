<script lang="ts" setup>
import { ref } from "vue";
import Button from "@/components/Elements/Button.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/vue";

const value = ref<any>(null);
const options = ["Durward Reynolds", "Kenton Towne"];

const search = (event: Event): void => {
  console.log("on change", event);
};
</script>

<template>
  <div>
    <Combobox v-model="value">
      <div class="relative">
        <div class="flex bg-blue-50 py-2 px-4 rounded-full">
          <ComboboxInput
            class="outline-0 bg-transparent w-64 mr-2 px-1 text-md"
            placeholder="Search"
            @change="search"
          ></ComboboxInput>
          <MagnifyingGlassIcon class="h-7 w-7 text-gray-600"></MagnifyingGlassIcon>
        </div>
        <ComboboxOptions class="absolute min-w-full bg-white">
          <ComboboxOption v-for="item in options" :value="item">
            {{ item }}
          </ComboboxOption>
        </ComboboxOptions>
      </div>
    </Combobox>
  </div>
</template>
