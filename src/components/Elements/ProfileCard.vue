<script lang="ts" setup>
import Card from './Card.vue';
import Avatar from './Avatar.vue';
import Button from './Button.vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid';

const props = defineProps<{
  data: any
}>()
</script>

<template>
  <Card class="px-3 py-6">
    <div class="flex items-center leading-none">
      <Avatar size="md">
        <img :src="data.avatar" />
      </Avatar>
      <div class="mx-5">
        <h3 class="font-semibold mb-1">{{ data.fullname }}</h3>
        <h3 class="text-muted line-clamp-1">{{ data.city }}</h3>
        <div class="line-clamp-1 leading-tight mt-2">{{ data.bio }}</div>
      </div>
      <div class="ml-auto flex gap-3">
        <Button variant="light">Following</Button>
        <Button variant="light" class="px-2" compact>
          <EllipsisHorizontalIcon class="w-5" />
        </Button>
      </div>
    </div>
  </Card>
</template>
