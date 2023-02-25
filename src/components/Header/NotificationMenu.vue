<script lang="ts" setup>
import Popover from "@/components/Elements/Popover.vue";
import Button from "@/components/Elements/Button.vue";
import Separator from "@/components/Elements/Separator.vue";
import Avatar from "@/components/Elements/Avatar.vue";
import { BellIcon, CheckIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import { getNotifications } from "@/generator/notifications";

const notifications = ref<any[]>(getNotifications());
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
        <div>
          <div class="flex items-center justify-between py-3 px-4">
            <h3 class="text-xl tracking-wide font-bold">Notifications</h3>
            <a href="#" class="flex text-md font-semibold text-primary hover:underline">
              <CheckIcon class="w-5" />
              <CheckIcon class="w-5 -translate-x-3" />
              <span class="-translate-x-2">Mark all as read</span>
            </a>
          </div>
          <Separator />
        </div>

        <div class="p-2 flex-1">
          <a
            href="#"
            v-for="(notification, index) in notifications"
            class="flex p-3 pr-8 hover:bg-light-2 hover:border-transparent transition duration-300 relative"
            :class="{
              'bg-light-1': notification.isNew,
              'border-t': index,
              'after:content-[\'\'] after:w-2.5 after:h-2.5 after:bg-primary after:absolute after:right-2 after:top-3 after:rounded-full':
                notification.isNew,
            }"
          >
            <Avatar size="sm">
              <img :src="notification.avatar" />
            </Avatar>
            <div class="pl-4">
              <div>
                <span class="font-bold">{{ notification.name }}</span>
                {{ notification.comment }}
              </div>
              <div class="text-primary font-semibold text-sm mt-1">
                {{ $moment(notification.date).fromNow() }}
              </div>
              <div
                v-if="notification.type === 'follow-request'"
                class="flex items-center mt-1"
              >
                <Button class="mr-3" size="sm">Accept</Button>
                <Button variant="light" size="sm">Decline</Button>
              </div>
            </div>
          </a>
        </div>

        <div>
          <Separator />
          <Button class="px-4 m-3" size="sm" variant="light">
            View all notifications
          </Button>
        </div>
      </div>
    </template>
  </Popover>
</template>
