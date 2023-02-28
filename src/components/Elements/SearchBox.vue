<script lang="ts" setup>
import { ref, computed } from "vue";
import { faker } from '@faker-js/faker'
import Avatar from '@/components/Elements/Avatar.vue'
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption
} from "@headlessui/vue";
import { isCoreComponent } from "@vue/compiler-core";

export interface Props {
  popoverClass?: string;
  type?: 'input' | 'select'
}

const { popoverClass = '', type = 'input' } = defineProps<Props>()

const value = ref<any>(null);
const options = ref<any[]>([])
const isFocused = ref<boolean>(false)

const isTypeSelect = computed(() => {
  return type === 'select'
})

const onFocus = (): void => {
  // isFocused.value = true
}

const onBlur = (): void => {
  isFocused.value = false
}

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
        <div class="flex bg-light-1 py-2.5 px-4 rounded-full" :class="{ 'ring-2': isFocused }">
          <ComboboxInput
            v-model="value"
            class="outline-0 bg-transparent w-full mr-2 px-1 text-md"
            placeholder="Search"
            autocomplete="off"
            @input="search"
            @focus="onFocus"
            @blur="onBlur"
          ></ComboboxInput>
          <MagnifyingGlassIcon class="h-7 w-7 text-gray-600 cursor-pointer"></MagnifyingGlassIcon>
        </div>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
        >
          <ComboboxOptions
            v-if="isTypeSelect"
            class="absolute mt-1 min-w-[380px] overflow-auto rounded-xl bg-main-bg 
              p-2 text-base shadow-lg ring-1 ring-slate-500 ring-opacity-5 max-h-[500px] z-popover"
            :class="popoverClass"
          >
            <ComboboxOption
              v-for="(item, index) in options"
              v-slot="{ selected, active }"
              :value="item.name"
							:key="`search-box-item-${index}`"
            >
              <li
                class="relative select-none py-3 px-3 cursor-pointer rounded-xl transition duration-200"
                :class="{ 'bg-light-1': active, 'text-gray-900': !active, }"
              >
                <span
                  class="flex items-center truncate p-1"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  <Avatar size="sm" :src="item.avatar" />
                  <div class="ml-3 leading-none font-semibold">
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
