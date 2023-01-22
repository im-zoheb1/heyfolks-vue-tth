<script lang="ts" setup>
import Button from "@/components/Elements/Button.vue";
import Popover from "@/components/Elements/Popover.vue";
import Separator from "@/components/Elements/Separator.vue"
import Avatar from '@/components/Elements/Avatar.vue'
import { ChatBubbleOvalLeftIcon } from "@heroicons/vue/20/solid";
import { faker } from '@faker-js/faker'
import { ref, onMounted } from 'vue'

const getFakeData = (): any => {
  const sex: any = faker.name.sex();
  const name: string = faker.name.fullName({ sex })
  const avatar: string = faker.image.avatar();
  const message: string = faker.lorem.words(+faker.random.numeric())
  return { name, avatar, message }
}

const messages = ref<any[]>([])

onMounted(() => {
  for (let i = 0; i < +faker.random.numeric(); i++) {
    const unread: number = i < 2 ? +faker.random.numeric() : 0
    messages.value.push({ ...getFakeData() , unread })
  }
})
</script>

<template>
  <Popover panel-class="w-[400px]">
    <template #default="{ open }">
      <Button compact variant="light" pilled class="p-2 mx-3">
        <ChatBubbleOvalLeftIcon class="w-7" :class="{ 'text-gray-600': !open }" />
      </Button>
    </template>
    <template #content>
      <h3 class="text-xl tracking-wide font-bold py-3 px-4">Messages</h3>
      <Separator />
      <div class="py-3 px-2">
        <a href="#" v-for="message in messages" class="flex items-center rounded-xl px-4 py-3 transition duration-300 hover:bg-blue-50">
          <Avatar size="sm">
            <img :src="message.avatar" />
          </Avatar>
          <span class="ml-3">
            <div class="font-bold text-md">{{ message.name }}</div>
            <div class="line-clamp-2 leading-tight text-md text-gray-400">{{ message.message }}</div>
          </span>
        </a>
      </div>
    </template>
  </Popover>
</template>
