<script lang="ts" setup>
import UserProfileCard from '@/components/Elements/UserProfileCard.vue';
import MainLayout from '@/layout/MainLayout.vue'
import Button from '@/components/Elements/Button.vue';
import { faker } from '@faker-js/faker';

const avatar = faker.internet.avatar()
const cover = faker.image.image()
</script>

<template>
	<MainLayout>
		<UserProfileCard :value="{ avatar, cover }" content-class="max-w-5xl">
			<template #title>
				<div class="flex flex-1 justify-between items-center ml-4">
					<div class="pt-2">
						<h3 class="text-2xl font-bold">Profile</h3>
						<p class="text-muted">Update your profile and personal details</p>
					</div>
					<div>
						<Button variant="light">Cancel</Button>
						<Button class="ml-3">Save</Button>
					</div>
				</div>
			</template>
			<div class="mt-10">
				<h2>Profile</h2>
			</div>
		</UserProfileCard>
	</MainLayout>
</template>
