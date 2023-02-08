<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Nested from './NestedThread.vue';
import CommentInput from './CommentInput.vue';

const props = defineProps<{
  data: any
}>()

const comment = ref<string>('')
</script>

<template>
  <div class="h-full relative">
    <div>
      <div v-if="data.length" class="px-3 pt-4">
        <Nested 
          v-for="item in data" 
          :level="0" 
          :data="item"
        ></Nested>
      </div>
      <div v-else class="my-3 text-center">
        <img src="@/assets/illustration/no-results.svg" class="w-32 mx-auto" />
        <div class="text-gray-500 mt-2">No comments available</div>
      </div>
    </div>
    <CommentInput v-model="comment" class="sticky bottom-0 px-3 py-2" />
  </div>
</template>
