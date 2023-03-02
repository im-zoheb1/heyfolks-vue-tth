<script lang="ts" setup>
import UserProfileCard from '@/components/Elements/UserProfileCard.vue';
import MainLayout from '@/layout/MainLayout.vue'
import Button from '@/components/Elements/Button.vue';
import Input from '@/components/Elements/Form/Input.vue';
import { faker } from '@faker-js/faker';
import Separator from '@/components/Elements/Separator.vue';

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
			<form class="form mt-12 py-3">
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>	
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" />
					</div>
				</div>
			</form>
		</UserProfileCard>
	</MainLayout>
</template>

<style lang="scss" scoped>
.form {
	@apply text-base;
	&__item {
		@apply flex items-start;
	}
	&__label {
		@apply flex-[1] font-semibold;
	}
	&__input-wrapper {
		@apply flex-[3];
	}
	&__input {
		@apply max-w-xl;
	}
}
</style>
