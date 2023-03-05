<script lang="ts" setup>
import { ref } from 'vue'
import Avatar from './Avatar.vue';
import { faker } from '@faker-js/faker';

const tooltipVisible = ref<boolean>(false)
const position = ref<string>('top-full')
const data = ref((() => {
  const avatar = faker.internet.avatar()
  const fullname = faker.name.fullName()
  const username = faker.internet.userName(...fullname.split(' '))
  const contacts = faker.random.numeric(2)
  const bio = faker.lorem.sentences(2)
  return { avatar, fullname, username, contacts, bio }
})())

type Position = 'top' | 'bottom'
const setPosition = (value: Position): void => {
  if (value === 'top') {
    position.value = 'bottom-full -left-1/2'
  } else {
    position.value = 'top-full -left-1/2'
  }
}

const displayTooltip = (e: MouseEvent): void => {
  const wHeight = window.innerHeight // window height
  const wHalf = wHeight / 2 // window half
  tooltipVisible.value = true
  if (e.clientY < wHalf) { 
     setPosition('bottom')
  } else { 
    setPosition('top')
  }
}

const hideTooltip = (e: MouseEvent): void => {
  tooltipVisible.value = false
}
</script>

<template>
  <a href="#" class="relative font-semibold" @mouseenter="displayTooltip" @mouseleave="hideTooltip">
    <span>
      <slot>Profile Tooltip</slot>
    </span>
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >
      <div 
        v-if="tooltipVisible"
        class="absolute bg-main-bg shadow-xl rounded-xl border w-80 p-2"
        :class="[position]"
      > 
        <div class="flex items-center gap-3">
          <Avatar :src="faker.internet.avatar()" size="lg" />
          <div>
            <h3 class="font-semibold">{{ faker.name.fullName() }}</h3>
          </div>
        </div>
      </div>
    </transition>
  </a>
</template>
