<script lang="ts" setup>
import PostCard from '../Elements/PostCard/index.vue'
import PostsSkeleton from '../Skeleton/PostsSkeleton.vue'
import { ref, inject, onMounted } from 'vue'
import injectKey from '@/config/injectKey';

const $http = inject(injectKey.$http)
const posts = ref<any[]>([])
const loading = ref<boolean>(true)

const fetchPosts = async (): Promise<void> => {
  try {
    loading.value = true
    const res = await $http?.get('post/list')
		res && posts.value.push(...res.data.data)
  } catch (error) {
    console.log(error) 
  } finally {
    loading.value = false
  }
}

const infiniteScroll = function (): void {
  window.addEventListener('scroll', (): void => {
    const { 
      scrollTop, 
      scrollHeight, 
      clientHeight 
    } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      fetchPosts()
    }
  }, { passive: true })
}

onMounted(() => {
	infiniteScroll()
  fetchPosts()
})
</script>

<template>
  <PostCard
    class="mt-3"
    v-for="(post, index) in posts"
    :key="`frist-list-post-${index}`"
    :value="post"
  ></PostCard>
  <PostsSkeleton
    class="mt-3"
    v-if="loading"
    v-for="i in 2"
    :key="`friends-list-post-skeleton-${i}`"
  ></PostsSkeleton>
</template>
