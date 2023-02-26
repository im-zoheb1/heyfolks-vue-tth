<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import SuggesstionsCard from "@/components/Elements/SuggesstionsCard.vue";
import Card from "@/components/Elements/Card.vue";
import Avatar from "@/components/Elements/Avatar.vue";
import { getFakeProfile } from "@/generator/profile";
import { ref } from "vue";

const profile = ref<any>(getFakeProfile());
</script>

<template>
  <MainLayout>
    <div class="flex items-start gap-3">
      <Card class="flex-[2] overflow-hidden">
        <div class="bg-gradient w-full h-56">
          <img v-if="profile.cover" class="w-full h-full object-cover" :src="profile.cover" />
        </div>
        <div class="px-5">
          <div class="flex items-center mt-[-20px]">
            <Avatar class="ring-offset-4" :src="profile.avatar" size="xl" />
            <div class="leading-tight ml-4">
              <h6 class="font-bold text-xl">{{ profile.fullname }}</h6>
              <h6 class="font-semibold text-muted">@{{ profile.username }}</h6>
            </div>
          </div>
          <p class="my-4">{{ profile.bio }}</p>
        </div>
      </Card>
      <SuggesstionsCard class="flex-1" />
    </div>
  </MainLayout>
</template>
