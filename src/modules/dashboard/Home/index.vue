<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import PostCard from "@/components/Elements/PostCard/index.vue"
import { faker } from "@faker-js/faker";
import { ref, onMounted } from "vue";
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
      <PostCard v-for="post in posts" :value="post" />
    </div>
  </MainLayout>
</template>
