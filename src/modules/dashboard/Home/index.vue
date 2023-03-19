<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import PostCard from "@/components/Elements/PostCard/index.vue"
import PostsSkeleton from "@/components/Skeleton/PostsSkeleton.vue";
import { ref, onMounted } from "vue";
import { getPosts } from "@/generator/posts";

const isLoading = ref<boolean>(false)

const posts = ref<any[]>(getPosts());

onMounted(() => {
  setTimeout(() => {
    isLoading.value = true
  }, 5000);
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
      <PostsSkeleton v-if="isLoading" v-for="i in 4" />
    </div>
  </MainLayout>
</template>
