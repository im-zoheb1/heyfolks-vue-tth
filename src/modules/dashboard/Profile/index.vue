<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import SuggesstionsCard from "@/components/Elements/SuggesstionsCard.vue";
import Card from "@/components/Elements/Card.vue";
import PostCard from '@/components/Elements/PostCard/index.vue'
import ProfileCard from "@/components/Elements/ProfileCard.vue";
import ActiveConactsCard from "@/components/Elements/ActiveContactsCard.vue"
import { getFakeProfile } from "@/generator/profile";
import { ref } from "vue";
import UserProfileCard from "@/components/Elements/UserProfileCard.vue";

const profile = ref<any>(getFakeProfile());
const tab = ref<string>('timeline')
</script>

<template>
  <MainLayout>
    <div class="flex items-start gap-3 relative">
      <div class="flex-[6]">
        <UserProfileCard v-model:tab="tab" :value="profile" />
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform translate-y-5 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
        >
          <div v-if="tab === 'timeline'">
            <PostCard 
							v-for="(post, index) in profile.timeline" 
							:key="`profile-post-card-${index}`"
							:value="post" 
							class="mt-3"
						></PostCard>
          </div>
        </transition>
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform translate-y-5 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
        >
          <Card v-if="tab === 'friends'" class="p-3 mt-3 gap-3 columns-[25rem]">
            <ProfileCard 
							v-for="(friend, index) in profile.friends" 
							:key="`profile-friend-card-${index}`"
							:data="friend" 
							class="mb-3"
						></ProfileCard>
          </Card>
        </transition>
      </div>

      <!-- right section: start -->
      <div class="flex-[3] max-md:hidden sticky top-[4.75rem]">
				<!-- <SuggesstionsCard class="flex-1 mb-3" /> -->
        <ActiveConactsCard />
      </div>
      <!-- right section: end -->
    </div>
  </MainLayout>
</template>
