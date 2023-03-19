<script lang="ts" setup>
import { PhotoIcon } from '@heroicons/vue/24/solid';
import Card from '../Elements/Card.vue';
import Separator from '../Elements/Separator.vue';

const canDisplay = (): boolean => !!Math.floor(Math.random() * 2)
</script>

<template>
  <Card>
    <div class="p-3 animate-skeleton">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div>
          <div class="h-2 w-40 bg-gray-200 rounded-full mb-2"></div>
          <div class="h-2 w-32 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div class="mb-3">
        <div class="h-2 w-[96%] bg-gray-200 rounded-full mb-3"></div>
        <div class="h-2 w-[99%] bg-gray-200 rounded-full mb-3"></div>
        <div class="h-2 w-[92%] bg-gray-200 rounded-full mb-3"></div>
        <div class="h-2 w-[95%] bg-gray-200 rounded-full mb-3"></div>
        <div class="h-2 w-[35%] bg-gray-200 rounded-full"></div>
      </div>
      <div v-if="canDisplay()" class="h-[250px] bg-gray-200 rounded-md grid place-content-center">
        <PhotoIcon class="w-20 h-20 text-gray-300" />
      </div>
      <Separator class="my-4" />
      <div class="flex justify-around">
        <div v-for="i in  3" class="h-3 w-20 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  </Card>
</template>
