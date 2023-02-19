<script lang="ts" setup>
import { ref } from 'vue';
import CommentInput from './CommentInput.vue';
import CommentsList from './CommentsList.vue';

defineProps<{
  data: any
}>()

const comment = ref<string>('')
</script>

<template>
  <div class="h-full relative">
    <div class="px-3 py-2">
      <CommentsList 
        v-for="(item, index) in data" 
        v-if="data.length" 
        :data="item"
        :key="`comment-item-${index}`"
      ></CommentsList>
      <div v-else class="my-3 text-center">
        <img src="@/assets/illustration/no-results.svg" class="w-32 mx-auto" />
        <div class="text-muted mt-2">No comments available</div>
      </div>
    </div>
    <CommentInput v-model="comment" class="sticky bottom-0 px-3 py-2" />
  </div>
</template>
