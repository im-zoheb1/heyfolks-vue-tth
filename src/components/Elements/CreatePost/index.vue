<script setup lang="ts">
import Separator from '@/components/Elements/Separator.vue'
import Button from '@/components/Elements/Button.vue'
import { faker } from '@faker-js/faker'

const firstName: string = faker.name.firstName()
const placeholder: string = `What's been on your mind lately, ${firstName}?`
</script>

<template>
  <div class="px-4 py-2">
    <textarea class="w-full bg-white outline-0 text-gray-700 text-lg resize-none tracking-wide" :placeholder="placeholder" rows="3"></textarea>
    <Separator />
    <div class="flex pt-2">
      <Button class="ml-auto" size="sm">Post</Button>
    </div>
  </div>
</template>
