<script lang="ts" setup>
export interface Props {
  count?: number;
  skeletonClass?: string;
}

defineProps<Props>()
</script>

<template>
  <div v-for="i in count" :key="`profile-card-skeleton-${i}`" class="flex items-center animate-skeleton border p-3 rounded-lg" :class="skeletonClass">
    <div class="min-w-[5rem] min-h-[5rem] max-w-[5rem] max-h-[5rem] bg-skeleton rounded-2xl"></div>
    <div class="ml-3 flex-1">
      <div class="flex-1 flex items-center justify-between">
        <div>
          <div class="h-3 w-40 bg-skeleton mb-2 rounded-full"></div>
          <div class="h-3 w-48 bg-skeleton rounded-full"></div>
        </div>
        <div class="w-8 h-8 bg-skeleton rounded-full mr-3"></div>
      </div>
      <div class="h-3 w-80 bg-skeleton rounded-full mt-4"></div>
    </div>
  </div>
</template>
