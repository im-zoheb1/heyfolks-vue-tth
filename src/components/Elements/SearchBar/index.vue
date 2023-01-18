<script lang="ts" setup>
import { ref } from "vue";
import Button from "@/components/Elements/Button.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption
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
            autocomplete="off"
            @change="search"
          ></ComboboxInput>
          <MagnifyingGlassIcon class="h-7 w-7 text-gray-600"></MagnifyingGlassIcon>
        </div>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 min-w-[380px] overflow-auto rounded-md bg-white py-2 
              px-3 text-base shadow-lg ring-1 ring-slate-500 ring-opacity-5"
          >
            <ComboboxOption
              v-for="item in options"
              v-slot="{ selected, active }"
              :value="item"
            >
              <li
                class="relative select-none py-3 px-5 cursor-pointer rounded-md"
                :class="{
                  'bg-slate-100': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ item }}
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </transition>
      </div>
    </Combobox>
  </div>
</template>
