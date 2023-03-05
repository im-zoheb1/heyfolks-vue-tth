<script lang="ts" setup>
import Avatar from './Avatar.vue';
import Button from './Button.vue';
import { ref } from 'vue'
import { faker } from '@faker-js/faker';
import { 
  ChatBubbleBottomCenterTextIcon as MessageIcon,
  MapPinIcon as LocationIcon 
} from '@heroicons/vue/20/solid';

const tooltipVisible = ref<boolean>(false)
const position = ref<string>('top-full')
const data = ref((() => {
  const avatar = faker.internet.avatar()
  const fullname = faker.name.fullName()
  const username = faker.internet.userName(...fullname.split(' '))
  const contacts = faker.random.numeric(2)
  const bio = faker.lorem.sentences(2)
  const city: string = faker.address.city() + ', ' + faker.address.country()
  return { avatar, fullname, username, contacts, bio, city }
})())

type Position = 'top' | 'bottom'
const setPosition = (value: Position): void => {
  if (value === 'top') {
    position.value = 'bottom-full'
  } else {
    position.value = 'top-full'
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
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-2 opacity-0"
    >
      <div 
        v-if="tooltipVisible"
        class="absolute bg-main-bg shadow-xl rounded-xl border w-80 p-3 z-popover"
        :class="[position]"
      > 
        <div class="flex items-center gap-3 mb-2">
          <Avatar :src="data.avatar" size="lg" />
          <div>
            <h3>{{ data.fullname }}</h3>
            <h3 class="text-muted text-sm">@{{ data.username }}</h3>
            <div class="mt-1.5 text-sm">{{ data.contacts }} <span class="text-muted">Connections</span></div>
          </div> 
        </div>
        <div>
          <p class="mt-3 text-muted flex items-center font-normal text-md">
            <LocationIcon class="w-5 mr-1 mb-1" /> {{ data.city }}
          </p>
          <p class="mt-1 font-normal">{{ data.bio }}</p>
        </div>
        <div class="flex ml-auto mt-3">
          <Button class="flex-1" variant="primary" pilled>Follow</Button>
          <Button pilled compact class="ml-2" variant="light" @click="() => $router.push({ name: 'messages' })">
            <MessageIcon class="w-5 m-2" />
          </Button>
        </div>
      </div>
    </transition>
  </a>
</template>
