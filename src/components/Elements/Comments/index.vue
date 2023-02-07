<script lang="ts" setup>
import Button from '@/components/Elements/Button.vue'
import Avatar from '@/components/Elements/Avatar.vue';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { faker } from '@faker-js/faker';
import { ref, onMounted } from 'vue';
import Nested from './NestedThread.vue';

const props = defineProps<{
  data: any
}>()

const avatar: string = faker.internet.avatar()

const isCommentActive = ref<boolean>(false)
const commentInputRef = ref<null | HTMLInputElement>(null)

onMounted(() => {
  setTimeout(() => commentInputRef.value?.focus())
})
</script>

<template>
  <div class="bg-light-1 h-full relative">
    <div>
      <div v-if="data.length" class="p-3">
        <Nested :level="0" :data="data"></Nested>
      </div>
      <div v-else class="my-3 text-center">
        <img src="@/assets/illustration/no-results.svg" class="w-32 mx-auto" />
        <div class="text-gray-500 mt-2">No comments available</div>
      </div>
    </div>
    <div class="flex items-center py-2 px-3 sticky bottom-0 bg-white">
      <Avatar size="xs">
        <img :src="avatar" />
      </Avatar>
      <a 
        class="flex items-center rounded-lg w-full ml-2 p-1 border"
        :class="{ 'ring-2': isCommentActive }"
      >
        <input 
          ref="commentInputRef"
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
