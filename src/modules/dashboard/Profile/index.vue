<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import SuggesstionsCard from "@/components/Elements/SuggesstionsCard.vue";
import Card from "@/components/Elements/Card.vue";
import Avatar from "@/components/Elements/Avatar.vue";
import Button from "@/components/Elements/Button.vue";
import PostCard from '@/components/Elements/PostCard/index.vue'
import { getFakeProfile } from "@/generator/profile";
import { ref } from "vue";
import {
  PencilSquareIcon as EditIcon,
  Cog6ToothIcon as SettingsIcon,
} from "@heroicons/vue/20/solid";
import { MapPinIcon as LocationIcon } from "@heroicons/vue/24/solid";

const profile = ref<any>(getFakeProfile());
const tabs = ref<any[]>(["timeline", "friends"]);
const activeTab = ref<string>(tabs.value[0]);
</script>

<template>
  <MainLayout>
    <div class="flex items-start gap-3">
      <div class="flex-[5]">
        <Card class="overflow-hidden">
          <div class="bg-gradient w-full h-56">
            <img
              v-if="profile.cover"
              class="w-full h-full object-cover"
              :src="profile.cover"
            />
          </div>
          <div class="px-3">
            <!-- user details: start -->
            <div class="flex items-center mt-[-20px]">
              <Avatar class="ring-offset-4" :src="profile.avatar" size="xl" />
              <div class="flex flex-1 justify-between">
                <div class="leading-tight ml-4">
                  <h6 class="font-bold text-xl">{{ profile.fullname }}</h6>
                  <h6 class="font-semibold text-muted">@{{ profile.username }}</h6>
                </div>
                <div class="flex items-center">
                  <Button
                    size="sm"
                    variant="light"
                    class="flex items-center p-2 px-4"
                    compact
                    pilled
                  >
                    <EditIcon class="w-5 inline-block mr-1" /> Edit Profile
                  </Button>
                  <Button
                    size="sm"
                    variant="flat"
                    class="ml-2 hover:[&>*]:rotate-90 p-2"
                    compact
                    pilled
                  >
                    <SettingsIcon class="w-5 transition-all duration-500" />
                  </Button>
                </div>
              </div>
            </div>
            <p class="mt-5 text-muted flex items-center">
              <LocationIcon class="w-5 mr-1 mb-1" /> {{ profile.city }}
            </p>
            <p class="text-base mt-2 mb-4">{{ profile.bio }}</p>
            <!-- user details: end -->

            <!-- tabs: start -->
            <div class="flex font-semibold [&>*]:px-5 [&>*]:py-2">
              <button
                v-for="tab in tabs"
                class="capitalize border-b-[3px] transition-all duration-300"
                :class="{
                  'border-primary text-primary': activeTab === tab,
                  'border-transparent': activeTab !== tab,
                }"
                @click="() => (activeTab = tab)"
              >
                {{ tab }}
              </button>
            </div>
            <!-- tabs: end -->
          </div>
        </Card>
        <div v-if="activeTab === 'timeline'">
          <PostCard v-for="post in profile.timeline" :value="post" class="mt-3"></PostCard>
        </div>
        <Card v-if="activeTab === 'friends'" class="mt-3">friends</Card>
      </div>

      <!-- right section: start -->
      <div class="flex-[3]">
        <SuggesstionsCard class="flex-1 mb-3" />
        <Card class="p-3">
          <h5 class="text-lg font-bold">Friends</h5>
        </Card>
      </div>
      <!-- right section: end -->
    </div>
  </MainLayout>
</template>
