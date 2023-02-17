<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import ProfileCard from "@/components/Elements/ProfileCard.vue";
import { getFakeFriends } from "@/generator/friends";
import { ref } from "vue";

const friends = ref(getFakeFriends());
</script>

<template>
  <MainLayout>
    <div
      class="gap-3 columns-[19rem] [&>*]:mb-3 [&>*]:break-inside-avoid-column"
    >
      <ProfileCard v-for="friend in friends" :data="friend"></ProfileCard>
    </div>
  </MainLayout>
</template>
