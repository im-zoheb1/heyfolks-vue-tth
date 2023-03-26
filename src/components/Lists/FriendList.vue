<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue'
import injectKey from '@/config/injectKey';
import ProfileCard from '../Elements/ProfileCard.vue';
import ProfileCardSkeleton from '../Skeleton/ProfileCardSkeleton.vue';

const $http = inject(injectKey.$http)
const friends = ref<any[]>([])
const loading = ref<boolean>(true)

const fetchData = async (): Promise<void> => {
  loading.value = true
  try {
    const res = await $http?.get('connection/list')    
    friends.value = res?.data.data
  } catch (error) {
    console.log(error) 
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <ProfileCard 
    class="mb-3"
    v-for="(friend, index) in friends"
    :key="`profile-card-list-${index}`"
    :data="friend"
  ></ProfileCard>
  <ProfileCardSkeleton v-if="loading" :count="4" skeleton-class="mb-3" />
</template>
