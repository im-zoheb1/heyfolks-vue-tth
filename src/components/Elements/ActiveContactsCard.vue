<script lang="ts" setup>
import Card from "./Card.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { faker } from "@faker-js/faker";
import { ref, onMounted } from "vue";
import Avatar from "./Avatar.vue";

const activeContacts = ref<any[]>([])

onMounted((): void => {
  for (let i = 0; i < 20; i++) {
    activeContacts.value.push({
      fullname: faker.name.fullName(),
      avatar: faker.internet.avatar()
    })
  }
})
</script>

<template>
  <Card class="p-3">
    <PerfectScrollbar ref="friendsScrollRef" class="h-[calc(100vh-110px)]">
      <h5 class="text-xl font-bold">Contacts</h5>
      <div class="mt-3">
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
