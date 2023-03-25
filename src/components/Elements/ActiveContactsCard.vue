<script lang="ts" setup>
import Card from "./Card.vue";
import ActiveContactsSkeleton from '@/components/Skeleton/ActiveContactsSkeleton.vue'
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { ref, inject, onMounted } from "vue";
import Avatar from "./Avatar.vue";
import injectKey from "@/config/injectKey";

const $http = inject(injectKey.$http)
const activeContacts = ref<any[]>([])
const loading = ref<boolean>(false)

const fetchData = async (): Promise<void> => {
  loading.value = true
  try {
    const res = await $http?.get('connection/active')
    activeContacts.value = res?.data.data
  } catch (error) {
    console.log(error) 
  } finally {
    loading.value = false
  }
}

onMounted((): void => {
  fetchData()
})
</script>

<template>
  <Card class="p-3">
    <PerfectScrollbar ref="friendsScrollRef" class="h-[calc(100vh-110px)]">
      <h5 class="text-xl font-bold mb-3">Contacts</h5>
      <ActiveContactsSkeleton v-if="loading" />
      <div v-else>
        <div 
					v-for="(contact, index) in activeContacts" 
					:key="`active-contacts-${index}`"
					class="flex items-center gap-3 [&+*]:mt-4"
				>
          <Avatar :src="contact.avatar" size="xs" no-ring />
          <h5 class="font-semibold text-gray-600">{{ contact.fullname }}</h5>
          <span class="inline-block w-2.5 h-2.5 bg-success rounded-full ml-auto mr-4"></span>
        </div>
      </div>
    </PerfectScrollbar>
  </Card>
</template>
