<script lang="ts" setup>
import Popover from "@/components/Elements/Popover.vue";
import Button from "@/components/Elements/Button.vue";
import { BellIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <Popover>
    <template #default="{ open }">
      <Button compact variant="light" pilled class="p-2">
        <BellIcon class="w-7" :class="{ 'text-gray-600': !open }"></BellIcon>
      </Button>
    </template>
    <template #content>
      <h3 class="text-lg tracking-wide font-bold">Notifications</h3>
    </template>
  </Popover>
</template>
