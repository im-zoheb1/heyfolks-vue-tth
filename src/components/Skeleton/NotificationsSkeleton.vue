<template>
  <div class="animate-skeleton">
    <div v-for="i in 8" :key="`notifications-skeleton-${i}`" class="flex p-3">
      <div class="w-12 h-12 bg-skeleton rounded-full mr-3"></div>
      <div class="flex-1 mt-2">
        <div class="bg-skeleton h-3 rounded-full"></div>
        <div class="bg-skeleton h-3 w-32 mt-3 rounded-full"></div>
      </div>
    </div>
  </div>
</template>
