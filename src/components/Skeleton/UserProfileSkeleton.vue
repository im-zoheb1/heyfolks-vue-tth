<script lang="ts" setup>
import Card from '../Elements/Card.vue';
import Button from '../Elements/Button.vue';
import { MapPinIcon as LocationIcon } from "@heroicons/vue/24/solid";
import Avatar from '../Elements/Avatar.vue';
</script>

<template>
  <Card class="overflow-hidden animate-skeleton">
    <div class="bg-gradient w-full h-56"></div>
    <div class="px-3 mx-auto">
      <!-- user details: start -->
      <div class="flex items-start mt-[-20px]">
        <Avatar src="@/assets/img/no-user-photo.svg" size="xl" />
        <h6 class="h-6 w-40 bg-skeleton ml-4 mt-8 rounded-lg"></h6>
      </div>
      <div class="mt-4 mb-4">
        <div class="text-base mt-1 bg-skeleton h-4 w-56 rounded-lg"></div>
        <div class="text-base mt-2 bg-skeleton h-4 rounded-lg"></div>
        <div class="text-base mt-2 bg-skeleton h-4 rounded-lg"></div>
      </div>
      <div class="flex">
        <div class="w-40 h-9 bg-skeleton mb-1 mr-1 rounded-lg"></div>
        <div class="w-40 h-9 bg-skeleton mb-1 rounded-lg"></div>
      </div>
    </div>
  </Card>
</template>
