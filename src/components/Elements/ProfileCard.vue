<script lang="ts" setup>
import Card from './Card.vue';
import Avatar from './Avatar.vue';
import Separator from './Separator.vue';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem.vue';
import { 
  EllipsisHorizontalIcon,
  ArchiveBoxXMarkIcon as UnfollowIcon,
  ChatBubbleLeftEllipsisIcon as MessageIcon
} from '@heroicons/vue/24/outline';

const props = defineProps<{
  data: any
}>()
</script>

<template>
  <Card class="px-3 py-4 shadow-sm cursor-pointer">
    <div class="flex items-center leading-none">
      <Avatar size="md">
        <img :src="data.avatar" />
      </Avatar>
      <div class="mx-5">
        <h3 class="font-semibold mb-1">{{ data.fullname }}</h3>
        <h3 class="text-muted line-clamp-1">{{ data.city }}</h3>
      </div>
      <Menu class="ml-auto">
        <template #button>
          <EllipsisHorizontalIcon class="w-6" />
        </template>
        <MenuItem class="flex items-center font-bold text-sm">
          <UnfollowIcon class="w-5 mr-2" />
          Unfollow
        </MenuItem>
        <Separator />
        <MenuItem class="flex items-center font-bold text-sm">
          <MessageIcon class="w-5 mr-2" />
          Message
        </MenuItem>
      </Menu>
    </div>
  </Card>
</template>
