<script lang="ts" setup>
import Popover from "@/components/Elements/Popover.vue";
import Button from "@/components/Elements/Button.vue";
import Separator from "@/components/Elements/Separator.vue";
import { BellIcon } from "@heroicons/vue/20/solid";
import NotificationList from "../Elements/NotificationList.vue";
</script>

<template>
  <Popover panel-class="max-w-[400px] w-[96%]" panel-position="fixed-header-right">
    <template #default="{ open }">
      <Button variant="light" class="p-2" pilled compact>
        <BellIcon class="w-7" :class="{ 'text-primary': open }"></BellIcon>
      </Button>
    </template>
    <template #content>
      <div class="flex flex-col h-full">
        <NotificationList />
        <div>
          <Separator />
          <RouterLink :to="{ name: 'notifications' }">
            <Button class="px-4 m-3" size="sm" variant="light">
              View all notifications
            </Button>
          </RouterLink>
        </div>
      </div>
    </template>
  </Popover>
</template>
