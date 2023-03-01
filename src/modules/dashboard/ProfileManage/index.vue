<script lang="ts" setup>
import UserProfileCard from '@/components/Elements/UserProfileCard.vue';
import MainLayout from '@/layout/MainLayout.vue'
import { faker } from '@faker-js/faker';
import { ref } from 'vue'

const avatar = faker.internet.avatar()
const cover = faker.image.image()
</script>

<template>
	<MainLayout>
		<UserProfileCard :value="{ avatar, cover }">
			<template #title>
				<div class="flex flex-1 justify-between ml-4">testing</div>
			</template>
			<div>
				this is content
			</div>
		</UserProfileCard>
	</MainLayout>
</template>
