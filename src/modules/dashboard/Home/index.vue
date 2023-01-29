<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import PostCard from "@/components/Elements/Cards/PostCard/index.vue"
import { faker } from "@faker-js/faker";
import { ref, onMounted } from "vue";

const getFakePost = (): any => {
  const fullname: string =  faker.name.fullName();
  const avatar: string = faker.image.avatar();
  const city: string = faker.address.city()
  return {
    avatar,
    fullname,
    city,
  }
}

const posts = ref<any>([]);

onMounted(() => {
  for (let i = 0; i < 25; i++) {
    posts.value.push(getFakePost())
  }
})
</script>

<template>
  <MainLayout>
    <div class="gap-3 columns-[30rem] [&>*]:mb-3">
      <CreatePost />
      <PostCard v-for="post in posts" :value="post" />
    </div>
  </MainLayout>
</template>
