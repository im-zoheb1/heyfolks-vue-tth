<script lang="ts" setup>
import MainLayout from "@/layout/MainLayout.vue";
import ProfileCard from "@/components/Elements/ProfileCard.vue";
import SearchBox from "@/components/Elements/SearchBox.vue";
import ProfileCardSkeleton from "@/components/Skeleton/ProfileCardSkeleton.vue";
import { ref, inject, onMounted } from "vue";
import injectKey from "@/config/injectKey";

const friends = ref<any[]>([]);
const loading = ref<boolean>(true)
const $http = inject(injectKey.$http)

const fetchData = async (): Promise<void> => {
  loading.value = true
  try {
    const res = await $http?.get('connection/list')
    const data = res?.data.data
    friends.value = data
  } catch (error) {
    console.log(error) 
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>

<template>
  <MainLayout>
    <div class="p-3 bg-main-bg rounded">
      <div class="flex justify-between items-center mb-3">
        <div class="capitalize font-bold mb-2 text-xl">Friends</div>
        <SearchBox class="w-80" popover-class="right-0" />
      </div>
      <div class="grid gap-3 md:grid-cols-2">
        <ProfileCardSkeleton v-if="loading" />
        <ProfileCard 
          v-else
					v-for="(friend, index) in friends" 
					:key="`friends-profile-card-${index}`"
					:data="friend"
				></ProfileCard>
      </div>
    </div>
  </MainLayout>
</template>
