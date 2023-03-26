<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import Card from "@/components/Elements/Card.vue";
import PostCard from '@/components/Elements/PostCard/index.vue'
import ProfileCard from "@/components/Elements/ProfileCard.vue";
import ActiveConactsCard from "@/components/Elements/ActiveContactsCard.vue"
import UserProfileCard from "@/components/Elements/UserProfileCard.vue";
import UserProfileSkeleton from "@/components/Skeleton/UserProfileSkeleton.vue";
import { getFakeProfile } from "@/generator/profile";
import { ref, inject, onMounted } from "vue";
import injectKey from "@/config/injectKey";

const $http = inject(injectKey.$http)
const tab = ref<'timeline' | 'friends'>('timeline')
const profile = ref<any>(getFakeProfile());
const userInfo = ref<any>({})
const loadingUserInfo = ref<boolean>(true)

const getUserInfo = async (): Promise<void> => {
  try {
    const res = await $http?.get('/user/info')
    userInfo.value = res?.data.data
  } catch (error) {
    console.log(error)  
  } finally {
    loadingUserInfo.value = false
  }
}

onMounted(() => {
  getUserInfo()
})
</script>

<template>
  <MainLayout>
    <div class="flex items-start gap-3 relative">
      <div class="flex-[6]">

        <!-- USER PROFILE DETAILS: START -->
        <UserProfileSkeleton v-if="loadingUserInfo" />
        <UserProfileCard v-else v-model:tab="tab" :value="userInfo" />
        <!-- USER PROFILE DETAILS: END -->

        <!-- POSTS: START -->
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
        <!-- POSTS: END -->

        <!-- CONNECTIONS: START -->
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
        <!-- CONNECTIONS: END -->
      </div>

      <!-- RIGHT: START -->
      <div class="flex-[3] max-md:hidden sticky top-[4.75rem]">
        <ActiveConactsCard />
      </div>
      <!-- RIGHT: END -->
    </div>
  </MainLayout>
</template>
