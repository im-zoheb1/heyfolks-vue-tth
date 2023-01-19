<script lang="ts" setup>
import { ref } from "vue";
import { faker } from '@faker-js/faker'
import Avatar from '@/components/Elements/Avatar.vue'
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption
} from "@headlessui/vue";

const value = ref<any>(null);
const options = ref<any[]>([])

const search = (event: Event): void => {
  const random: number = Math.ceil(Math.random() * 10)
  const data: any[] = []
  for (let i = 0; i < random; i++) {
    data.push({
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      bio: faker.name.jobTitle()
    })
  }
  options.value = data
};
</script>

<template>
  <div>
    <Combobox v-model="value">
      <div class="relative">
        <div class="flex bg-blue-50 py-2.5 px-4 rounded-full">
          <ComboboxInput
            v-model="value"
            class="outline-0 bg-transparent w-64 mr-2 px-1 text-md"
            placeholder="Search"
            autocomplete="off"
            @input="search"
          ></ComboboxInput>
          <MagnifyingGlassIcon class="h-7 w-7 text-gray-600 cursor-pointer"></MagnifyingGlassIcon>
        </div>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
        >
          <ComboboxOptions
            class="absolute mt-1 min-w-[380px] overflow-auto rounded-md bg-white 
              py-2 px-3 text-base shadow-lg ring-1 ring-slate-500 ring-opacity-5"
          >
            <ComboboxOption
              v-for="item in options"
              v-slot="{ selected, active }"
              :value="item.name"
            >
              <li
                class="relative select-none py-3 px-3 cursor-pointer rounded-xl transition duration-200"
                :class="{ 'bg-gray-200': active, 'text-gray-900': !active, }"
              >
                <span
                  class="flex items-center truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  <Avatar size="sm">
                    <img :src="item.avatar" />
                  </Avatar>
                  <div class="ml-4 leading-none font-semibold">
                    <h3 class="text-base">{{ item.name }}</h3>
                    <h4 class="text-sm text-gray-400">{{ item.bio }}</h4>
                  </div>
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </transition>
      </div>
    </Combobox>
  </div>
</template>
