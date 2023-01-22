<script lang="ts" setup>
import Popover from "@/components/Elements/Popover.vue";
import Button from "@/components/Elements/Button.vue";
import Separator from "@/components/Elements/Separator.vue";
import Avatar from "@/components/Elements/Avatar.vue"
import { BellIcon, CheckIcon } from "@heroicons/vue/20/solid";
import { faker } from "@faker-js/faker";
import { ref } from 'vue'

const getFakeData = (): any => {
  const sex: any = faker.name.sex();
  const name: string = faker.name.fullName({ sex })
  const avatar: string = faker.image.avatar();
  return { name, avatar }
}

const notifications = ref<any[]>([])

notifications.value.unshift({
  ...getFakeData(),
  type: 'text',
  date: faker.date.past(),
  comment: 'commented on your post.',
  isNew: false
})

notifications.value.unshift({
  ...getFakeData(),
  type: 'follow-request',
  date: faker.date.past(),
  comment: 'has requested to follow you.',
  isNew: true
})

notifications.value.unshift({
  ...getFakeData(),
  type: 'text',
  date: faker.date.past(),
  comment: 'has liked your post.',
  isNew: true
})
</script>

<template>
  <Popover panel-class="w-[400px]">
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
      <div class="p-2">
        <!-- notification item: start -->
        <a 
          href="#" 
          v-for="(notification, index) in notifications"
          class="flex p-3 pr-8 hover:bg-blue-50 hover:border-transparent transition duration-300 relative" 
          :class="{ 
            'border-t': index ,
            'after:content-[\'\'] after:w-2.5 after:h-2.5 after:bg-primary after:absolute after:right-2 after:top-3 after:rounded-full': notification.isNew
          }"
        >
          <Avatar size="sm">
            <img :src="notification.avatar" />
          </Avatar>
          <div class="pl-4">
            <div>
              <span class="font-bold">{{ notification.name }}</span> {{ notification.comment }}
            </div>
            <div v-if="notification.type === 'follow-request'" class="flex items-center mt-1">
              <Button class="mr-3" size="sm">Accept</Button>
              <Button variant="light" size="sm">Decline</Button>
            </div>
            <div class="text-gray-400 font-semibold text-md mt-1">testing</div>
          </div>
        </a>
        <!-- notification item: end -->
      </div>
      <!-- notifications list: end -->
      <Separator />
      <Button class="px-4 m-3" size="sm" variant="light">View all notifications</Button>
    </template>
  </Popover>
</template>
