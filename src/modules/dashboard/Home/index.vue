<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import PostCard from "@/components/Elements/PostCard/index.vue"
import SeekingLoader from '@/components/Elements/Loaders/Seeking.vue'
import { ref } from "vue";
import { getPosts } from "@/generator/posts";

const posts = ref<any[]>(getPosts());
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
    </div>
    <div class="h-24 grid place-content-center">
      <SeekingLoader />
    </div>
  </MainLayout>
</template>
