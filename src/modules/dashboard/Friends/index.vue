<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import ProfileCard from "@/components/Elements/ProfileCard.vue";
import SearchBar from "@/components/Elements/SearchBar.vue";
import { getFakeFriends } from "@/generator/friends";
import { ref } from "vue";

const friends = ref(getFakeFriends());
</script>

<template>
  <MainLayout>
    <div class="p-3 bg-white rounded">
      <div class="flex justify-between items-center mb-3">
        <div class="capitalize font-bold mb-2 text-xl">Friends</div>
        <SearchBar popover-class="right-0" />
      </div>
      <div
        class="grid gap-3 lg:grid-cols-2"
      >
        <ProfileCard v-for="friend in friends" :data="friend"></ProfileCard>
      </div>
    </div>
  </MainLayout>
</template>
