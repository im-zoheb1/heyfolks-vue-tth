<template>
  <div class="animate-skeleton">
    <div v-for="i in 10" :key="`chat-list-skeleton-${i}`" class="flex items-center p-4">
      <div class="w-12 h-12 bg-skeleton rounded-full mr-3"></div>
      <div class="flex-1">
        <div class="bg-skeleton h-3 w-32 mb-3 rounded-full"></div>
        <div class="bg-skeleton h-3 rounded-full"></div>
      </div>
    </div>
  </div>
</template>
