<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import PostCard from "@/components/Elements/Cards/PostCard/index.vue"
</script>

<template>
  <MainLayout>
    <div class="gap-3 columns-2 [&>*]:mb-3">
      <CreatePost />
      <PostCard v-for="i in 100"></PostCard>
    </div>
  </MainLayout>
</template>
