<script lang="ts" setup>
import Card from './Card.vue';
import Avatar from './Avatar.vue';
import Button from './Button.vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem.vue';

const props = defineProps<{
  data: any
}>()
</script>

<template>
  <Card class="px-3 py-4 shadow-sm">
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
          <EllipsisHorizontalIcon class="w-5" />
        </template>
        <MenuItem>Unfollow</MenuItem>
        <MenuItem>Message</MenuItem>
      </Menu>
    </div>
  </Card>
</template>
