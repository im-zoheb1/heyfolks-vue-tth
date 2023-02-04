<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Sidenav from "@/components/Sidenav/index.vue";
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
  <Header 
    class="
      h-16 pl-20 z-header
      lg:pl-64
      xl:pl-72
    " 
    :user-data="userData" 
  />
  <Sidenav 
    class="
      w-20 z-sidenav 
      lg:w-64
      xl:w-72
    " 
    :user-data="userData" 
  />
  <main 
    class="
      w-full bg-light-1 pt-16 min-h-screen pl-20
      lg:pl-64
      xl:pl-72
    "
  >
    <div class="p-3">
      <slot></slot>
    </div>
  </main>
</template>
