<script lang="ts" setup>
import Header from "@/components/Header/index.vue";
import Sidenav from "@/components/Sidenav/index.vue";
import { reactive } from "vue";
import { getUserData } from "@/generator/user";

const userData: any = reactive<any>(getUserData());
</script>

<template>
  <Header class="h-16 z-header-tab lg:pl-64 lg:z-header xl:pl-72" :user-data="userData" />
  <Sidenav is-collapsed class="z-sidenav sm:w-20 sm:block lg:w-64 xl:w-72" :user-data="userData" />
  <main
    class="w-full bg-light-1 pt-16 min-h-screen pb-16 sm:pl-20 sm:pb-0 lg:pl-64 xl:pl-72"
  >
    <div class="p-3">
      <slot></slot>
    </div>
  </main>
</template>
