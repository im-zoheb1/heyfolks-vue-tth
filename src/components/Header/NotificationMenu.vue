<script lang="ts" setup>
import Popover from "@/components/Elements/Popover.vue";
import Button from "@/components/Elements/Button.vue";
import Separator from "@/components/Elements/Separator.vue";
import { BellIcon, CheckIcon } from "@heroicons/vue/20/solid";
import { faker } from "@faker-js/faker";
import { ref } from 'vue'

const notifications = ref<any[]>([])
</script>

<template>
  <Popover panel-class="w-[500px]">
    <template #default="{ open }">
      <Button compact variant="light" pilled class="p-2">
        <BellIcon class="w-7" :class="{ 'text-gray-600': !open }"></BellIcon>
      </Button>
    </template>
    <template #content>
      <div class="flex items-center justify-between py-3 px-4">
        <h3 class="text-xl tracking-wide font-bold">Notifications</h3>
        <a href="#" class="flex text-md font-semibold text-primary hover:underline">
          <CheckIcon class="w-5" />
          <CheckIcon class="w-5 -translate-x-3" />
          <span class="-translate-x-2">Mark all as read</span>
        </a>
      </div>
      <Separator />
      <!-- notifications list: start -->
      <div class="p-3">test</div>
      <!-- notifications list: end -->
      <Separator />
      <Button class="px-4 m-3" size="sm" variant="light">View all notifications</Button>
    </template>
  </Popover>
</template>
