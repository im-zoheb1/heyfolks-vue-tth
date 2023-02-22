<script lang="ts" setup>
import Header from "@/components/Header/index.vue";
import Sidenav from "@/components/Sidenav/index.vue";
import { reactive } from "vue";
import { getUserData } from "@/generator/user";

const userData: any = reactive<any>(getUserData());
</script>

<template>
  <Header class="h-16 z-header" :user-data="userData" />
  <Sidenav is-collapsed class="sm:w-20 sm:block border-r" :user-data="userData" />
  <main
    class="w-full bg-light-1 pt-16 min-h-screen pb-16 sm:pl-20 sm:pb-0"
  >
    <div>
      <slot></slot>
    </div>
  </main>
</template>
