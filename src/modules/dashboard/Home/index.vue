<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import PostCard from "@/components/Elements/PostCard/index.vue"
import SeekingLoader from '@/components/Elements/Loaders/Seeking.vue'
import PostsSkeleton from "@/components/Skeleton/PostsSkeleton.vue";
import { ref, inject, onMounted } from "vue";
import injectKey from "@/config/injectKey";

const $http = inject(injectKey.$http)
const posts = ref<any[]>([])
const isLoading = ref<boolean>(true)

const fetchData = async function (): Promise<void> {
  try {
    const res = await $http?.get('post/list')
    const data = res?.data.data
    posts.value.push(...data)
  }
  catch(err) { }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <MainLayout>
    <div class="
      gap-3 columns-[25rem] 
      [&>*]:mb-3 [&>*]:break-inside-avoid-column
      lg:colums-[28rem]
      xl:columns-[32rem]
      2xl:columns-[37rem]
    ">
      <CreatePost />
      <PostCard 
				v-for="(post, index) in posts" 
				:key="`home-post-card-${index}`"
				:value="post" 
			/>
      <template v-if="isLoading">
        <PostsSkeleton v-for="i in 5" />
      </template>
    </div>
    <div v-if="!isLoading" class="h-24 grid place-content-center">
      <SeekingLoader />
    </div>
  </MainLayout>
</template>
