<script setup lang="ts">
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar/index.vue";
import { faker } from "@faker-js/faker";
import { reactive } from "vue";

const gender: string = faker.name.sex();
const firstname: string = faker.name.firstName(gender === "male" ? "male" : "female");
const lastname: string = faker.name.lastName(gender === "male" ? "male" : "female");
const username: string = faker.internet.userName(firstname, lastname);
const avatar: string = faker.image.avatar();

const userData: any = reactive<any>({
  gender,
  avatar,
  username,
  get fullname() {
    return firstname + ' ' + lastname 
  },
});
</script>

<template>
  <Header class="h-16 pl-72" :user-data="userData" />
  <Sidebar class="w-72" :user-data="userData" />
  <main class="w-full bg-blue-50 pl-72 pt-16 min-h-screen">
    <div class="p-3">
      <slot></slot>
    </div>
  </main>
</template>
