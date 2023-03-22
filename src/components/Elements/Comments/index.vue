<script lang="ts" setup>
import { ref, inject, computed, onMounted } from 'vue';
import CommentInput from './CommentInput.vue';
import CommentsList from './CommentsList.vue';
import injectKey from '@/config/injectKey';

const $http = inject(injectKey.$http)
const comment = ref<string>('')
const comments = ref<any[]>([])
const isLoading = ref(true)

// computed: start
const hasComments = computed(() => {
  return !!comments.value.length
})
// computed: end

// methods: start
const fetchComments = async (): Promise<void> => {
  isLoading.value = true
  try {
    const res = await $http?.get('/comment/list')
    const data = res?.data.data
    comments.value.push(...data)
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false 
  }
}
// methods: end

onMounted(() => {
  fetchComments()
})
</script>

<template>
  <div class="h-full relative">
    <div class="px-3 py-2">
			<template v-if="hasComments">
				<CommentsList 
					v-for="(item, index) in comments" 
					:data="item"
					:key="`comment-item-${index}`"
				/>
			</template>
      <div v-else class="my-3 text-center">
        <img src="@/assets/illustration/no-results.svg" class="w-32 mx-auto" />
        <div class="text-muted mt-2">No comments available</div>
      </div>
    </div>
    <CommentInput v-model="comment" class="sticky bottom-0 px-3 py-2" />
  </div>
</template>
