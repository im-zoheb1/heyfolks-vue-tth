<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import PostCard from "@/components/Elements/PostCard/index.vue"
import SeekingLoader from '@/components/Elements/Loaders/Seeking.vue'
import PostsSkeleton from "@/components/Skeleton/PostsSkeleton.vue";
import { ref, inject, computed, onMounted } from "vue";
import injectKey from "@/config/injectKey";

const $http = inject(injectKey.$http)
const posts = ref<any[]>([])
const skeletonCount = ref(5)

// computed: start
const data = computed(() => {
  const [createPost, data, skeleton] = [{}, posts.value, new Array(skeletonCount.value).fill(true)]
  return [createPost, ...data, ...skeleton]
})
// computed: end

// methods: start
const setLoading = function(value = true) {
  skeletonCount.value = value ? 5 : 0
}

const fetchData = async function (): Promise<void> {
  setLoading(true)
  try {
    const res = await $http?.get('post/list')
    const data = res?.data.data
    posts.value.push(...data)
  } catch(err) {
		console.log(err)
	} finally {
    setLoading(false)
  }
}

const infiniteScroll = function (): void {
  window.addEventListener('scroll', (): void => {
    const { 
      scrollTop, 
      scrollHeight, 
      clientHeight 
    } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 5 && 
      !skeletonCount.value) {
      fetchData()
    }
  }, { passive: true })
}
// methods: end

onMounted(() => {
  fetchData()
  infiniteScroll()
})
</script>

<template>
  <MainLayout>
    <MasonryWall :items="data" :columns-width="300" :gap="10">
      <template #default="{ item, index }">
        <CreatePost v-if="index === 0" />
        <PostCard v-else-if="(index < posts.length + 1)" :value="item" />
				<PostsSkeleton v-else />
      </template>
    </MasonryWall>
  </MainLayout>
</template>
