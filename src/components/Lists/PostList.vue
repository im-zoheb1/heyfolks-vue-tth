<script lang="ts" setup>
import PostCard from '../Elements/PostCard/index.vue'
import PostsSkeleton from '../Skeleton/PostsSkeleton.vue'
import { ref, inject, onMounted } from 'vue'
import { getPosts } from '@/generator/posts';
import injectKey from '@/config/injectKey';

const $http = inject(injectKey.$http)
const posts = ref<any[]>([])
const loading = ref<boolean>(true)

const fetchPosts = async (): Promise<void> => {
  try {
    loading.value = true
    const res = await $http?.get('post/list')
    posts.value = res?.data.data
  } catch (error) {
    console.log(error) 
  } finally {
    loading.value = false
  }
}

onMounted(() => {
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
