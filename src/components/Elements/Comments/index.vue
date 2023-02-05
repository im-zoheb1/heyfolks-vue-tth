<script lang="ts" setup>
import Separator from '@/components/Elements/Separator.vue';
import Button from '@/components/Elements/Button.vue'
import Avatar from '@/components/Elements/Avatar.vue';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { faker } from '@faker-js/faker';
import { ref } from 'vue';

const avatar: string = faker.internet.avatar()

const isCommentActive = ref<boolean>(false)
</script>

<template>
  <div class="bg-light-1 h-full shadow-inner relative">
    <div class="flex items-center p-2 sticky bottom-0 bg-white">
      <Avatar size="xs">
        <img :src="avatar" />
      </Avatar>
      <a 
        class="flex items-center rounded-lg w-full ml-2 bg-white p-1 border"
        :class="{ 'ring-2': isCommentActive }"
      >
        <input 
          class="w-full outline-none text-base rounded-lg px-2" 
          placeholder="Share your thoughts" 
          @focus="isCommentActive = true" 
          @blur="isCommentActive = false" 
        />
        <Button compact class="p-1.5">
          <PaperAirplaneIcon class="h-6" />
        </Button>
      </a>
    </div>
  </div>
</template>
