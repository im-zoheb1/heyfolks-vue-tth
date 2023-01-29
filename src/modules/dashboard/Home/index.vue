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
  const content: any = {
    text: faker.lorem.sentences(),
    photo: faker.datatype.boolean() ? faker.image.people(600, 400, true) : null
  }
  const interactions: any = {
    likes: faker.random.numeric(faker.datatype.boolean() ? 2 : 1),
    comments: faker.random.numeric(faker.datatype.boolean() ? 2 : 1),
    isLiked: faker.datatype.boolean(),
    isSaved: faker.datatype.boolean()
  }
  return {
    avatar,
    fullname,
    city,
    content,
    interactions
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
    <div class="gap-3 columns-[30rem] [&>*]:mb-3 [&>*]:break-inside-avoid-column">
      <CreatePost />
      <PostCard v-for="post in posts" :value="post" />
    </div>
  </MainLayout>
</template>
