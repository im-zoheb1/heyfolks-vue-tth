<template>
  <div v-for="i in 20" :key="`active-contacts-skeleton-${i}`" class="animate-skeleton flex items-center gap-3 [&+*]:mt-4">
    <div class="w-9 h-9 bg-skeleton rounded-full"></div>
    <div class="w-32 h-3 bg-skeleton rounded-full"></div>
    <div class="w-3 h-3 bg-skeleton ml-auto mr-4"></div>
  </div>
</template>
