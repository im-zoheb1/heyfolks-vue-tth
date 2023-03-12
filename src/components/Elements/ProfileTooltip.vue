<script lang="ts" setup>
import Avatar from './Avatar.vue';
import Button from './Button.vue';
import { ref } from 'vue'
import { faker } from '@faker-js/faker';
import { 
  ChatBubbleBottomCenterTextIcon as MessageIcon,
  MapPinIcon as LocationIcon 
} from '@heroicons/vue/20/solid';

interface PositionStyleInterface { 
	top?: string; 
	left?: string; 
	bottom?: string;  
}

const tooltipTimeout = ref<null | number>(null)
const tooltipVisible = ref<boolean>(false)
const position = ref<PositionStyleInterface>({ top: '', left: '', bottom: '' })
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
const setPosition = (P: Position, E: MouseEvent): void => {
	const el = (E.target as HTMLDivElement)
  const { top, left, bottom } = el.getBoundingClientRect()
	if (P === 'top') { 
    position.value = { 
      bottom: (window.innerHeight - top) + 'px', 
      left: left + 'px', 
      top: 'auto'
    }
	} else {
		position.value = { 
      top: top + el.offsetHeight + 'px', 
      left: left + 'px',
    }
	}
}

const displayTooltip = (E: MouseEvent): void => {
  const wHeight = window.innerHeight // window height
  const wHalf = wHeight / 2 // window half
	if (wHalf > E.clientY) {
		setPosition('bottom', E)
	} else {
		setPosition('top', E)
	}
  tooltipTimeout.value = setTimeout(() => (tooltipVisible.value = true), 500) 
}

const hideTooltip = (e: MouseEvent): void => {
  tooltipVisible.value = false
  if (tooltipTimeout.value) clearTimeout(tooltipTimeout.value)
}
</script>

<template>
  <a href="#" class="relative font-semibold inline-block" @mouseenter="displayTooltip" @mouseleave="hideTooltip">
    <span>
      <slot>Profile Tooltip</slot>
    </span>
    <Teleport to="body">
			<div 
				v-if="tooltipVisible"
				class="fixed bg-main-bg shadow-xl rounded-xl border w-96 p-3 z-tooltip"
				:style="position"
				@mouseenter="tooltipVisible = true" 
				@mouseleave="hideTooltip"
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
					<p class="mt-3 text-muted flex font-normal text-md">
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
    </Teleport>
  </a>
</template>
