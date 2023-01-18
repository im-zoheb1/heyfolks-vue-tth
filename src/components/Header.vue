<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue'
import SearchBar from '@/components/Elements/SearchBar/index.vue'
import Button from '@/components/Elements/Button.vue'
import Popover from '@/components/Elements/Popover.vue'
import Separator from '@/components/Elements/Separator.vue'
import { 
  BellIcon, 
  ChatBubbleOvalLeftIcon,
} from '@heroicons/vue/20/solid'

const props = defineProps<{
  userData: any
}>()
</script>

<template>
  <header class="bg-white absolute top-0 left-0 right-0 w-full shadow-sm flex items-center justify-between">
    <SearchBar class="ml-3"></SearchBar>
    <div class="flex items-center">
      <!-- messages menu -->
      <Popover>
        <Button compact variant="light" pilled class="p-2 mx-3">
          <ChatBubbleOvalLeftIcon class="w-7 text-gray-700" />
        </Button>
        <template #content>
          <h3 class="text-lg tracking-wide font-bold">Messages</h3>
        </template>
      </Popover>
      <!-- notifications menu -->
      <Popover>
        <Button compact variant="light" pilled class="p-2">
          <BellIcon class="w-7 text-gray-700"></BellIcon>
        </Button>
        <template #content>
          <h3 class="text-lg tracking-wide font-bold">Notifications</h3>
        </template>
      </Popover>
      <Separator is-vertical class="mx-4 h-8" />
      <!-- user profile menu -->
      <Avatar class="mr-3" size="sm" clickable>
        <img :src="userData.avatar" />
      </Avatar>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
