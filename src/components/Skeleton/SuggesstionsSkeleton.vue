<template>
  <div v-for="i in 3" :key="`suggesstions-card-skeleton-${i}`" class="animate-skeleton flex items-center mt-4">
    <div class="w-12 h-12 bg-skeleton rounded-full"></div>
    <div class="ml-3">
      <div class="h-3 rounded-full bg-skeleton w-32"></div>
      <div class="h-3 rounded-full bg-skeleton mt-3 w-48"></div>
    </div>
    <div class="w-20 h-9 bg-skeleton rounded-full ml-auto"></div>
  </div>
</template>
