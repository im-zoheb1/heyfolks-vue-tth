<script lang="ts" setup>
import Card from '@/components/Elements/Cards/index.vue'
import Avatar from '@/components/Elements/Avatar.vue'

const props = defineProps<{
  value: any
}>()
</script>

<template>
  <Card class="p-3">
    <div class="flex items-center">
      <Avatar size="sm">
        <img :src="value.avatar" />
      </Avatar>
      <span class="leading-tight ml-3">
        <div class="text-md">{{ value.fullname }}</div>
        <div class="text-gray-400 text-sm">{{ value.city }}</div>
      </span>
    </div>
  </Card>
</template>
