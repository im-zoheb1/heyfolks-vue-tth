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
        <h3 class="text-muted text-[15px] line-clamp-1">{{ data.city }}</h3>
        <div class="flex items-center mt-3 capitalize">
          <div class="flex mr-5">
            <div class="font-semibold">{{ data.followers }}</div>
            <div class="text-muted ml-1">followers</div>
          </div>
          <div class="flex">
            <div class="font-semibold">{{ data.following }}</div>
            <div class="text-muted ml-1">following</div>
          </div>
        </div>
      </div>
    </div>
    testing 
  </Card>
</template>
