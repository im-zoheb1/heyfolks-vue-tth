<script setup lang="ts">
import Separator from '@/components/Elements/Separator.vue'
import Button from '@/components/Elements/Button.vue'
import { faker } from '@faker-js/faker'
import { PhotoIcon } from '@heroicons/vue/24/solid';

const firstName: string = faker.name.firstName()
const placeholder: string = `What's been on your mind lately, ${firstName}?`
</script>

<template>
  <div class="px-4 py-2">
    <textarea class="w-full bg-white outline-0 text-gray-700 text-lg resize-none tracking-wide" :placeholder="placeholder" rows="3"></textarea>
    <Separator />
    <div class="flex pt-2">
      <button class="flex items-center justify-center text-green-600 w-10 h-10 bg-green-100 rounded-full transition duration-300">
        <PhotoIcon class="w-6 h-6" />
      </button>
      <Button class="px-[20px] ml-auto" size="sm">Post</Button>
    </div>
  </div>
</template>
