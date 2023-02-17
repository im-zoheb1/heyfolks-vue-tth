<script lang="ts" setup>
import Card from './Card.vue';
import Avatar from './Avatar.vue';

const props = defineProps<{
  data: any
}>()
</script>

<template>
  <Card class="p-3">
    <!-- {{ data }} -->
    <div class="flex items-center leading-none">
      <Avatar size="md">
        <img :src="data.avatar" />
      </Avatar>
      <div class="pl-4">
        <h3 class="font-semibold mb-1">{{ data.fullname }}</h3>
        <h3 class="text-gray-400 text-[15px] line-clamp-1">{{ data.city }}</h3>
      </div>
    </div>
    testing 
  </Card>
</template>
