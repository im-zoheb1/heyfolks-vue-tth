<script lang="ts" setup>
import UserProfileCard from '@/components/Elements/UserProfileCard.vue';
import MainLayout from '@/layout/MainLayout.vue'
import Button from '@/components/Elements/Button.vue';
import Input from '@/components/Elements/Form/Input.vue';
import Separator from '@/components/Elements/Separator.vue';
import Avatar from '@/components/Elements/Avatar.vue';
import { faker } from '@faker-js/faker';
import { EnvelopeIcon, PhoneIcon, CalendarIcon } from '@heroicons/vue/24/outline';

const avatar = faker.internet.avatar()
const cover = faker.image.image()
</script>

<template>
	<MainLayout>
		<UserProfileCard :value="{ avatar, cover }" content-class="max-w-5xl" avatar-class="w-12 h-12">
			<template #title>
				<div 
					class="flex flex-1 ml-4 max-md:flex-col max-md:mt-7"
				>
					<div>
						<h3 class="text-2xl font-bold">Profile</h3>
						<p class="text-muted">Update your profile and personal details</p>
					</div>
					<div class="mt-1 md:ml-auto">
						<Button variant="light">Cancel</Button>
						<Button class="ml-3">Save</Button>
					</div>
				</div>
			</template>
			<form class="form mt-12 py-3">
				<div class="form__item">
					<div class="form__label">Fullname</div>
					<div class="form__input-wrapper">
						<Input class="form__input" placeholder="Write your fullname" />
					</div>
				</div>	
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Username</div>
					<div class="form__input-wrapper">
						<Input class="form__input" prepend="@" />
					</div>
				</div>	
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Website (optional)</div>
					<div class="form__input-wrapper">
						<Input class="form__input" prepend="https://" />
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">
						<h3>Photo (optional)</h3>
						<p class="text-muted font-normal">This will be displayed on your profile.</p>
					</div>
					<div class="form__input-wrapper">
						<div class="form__input flex items-start">
							<Avatar :src="avatar" />
							<Button class="ml-auto mr-1" variant="flat">Delete</Button>
							<Button variant="light">Update</Button>
						</div>
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">
						Bio
						<p class="text-muted font-normal">Write a short introduction.</p>
					</div>
					<div class="form__input-wrapper">
						<textarea class="form__input w-full outline-0 border rounded-lg p-3 max-w-xl" rows="4"></textarea>
						<p class="text-muted text-sm font-semibold">0 / 150</p>
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Email address</div>
					<div class="form__input-wrapper">
						<Input class="form__input">
							<template #prepend>
								<EnvelopeIcon class="w-5" />
							</template>
						</Input>
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Contact No.</div>
					<div class="form__input-wrapper">
						<Input class="form__input">
							<template #prepend>
								<PhoneIcon class="w-5" />
							</template>
						</Input>
					</div>
				</div>
				<Separator class="my-5" />
				<div class="form__item">
					<div class="form__label">Birthdate</div>
					<div class="form__input-wrapper">
						<Input class="form__input">
							<template #prepend>
								<CalendarIcon class="w-5" />
							</template>
						</Input>
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
		@apply flex-[2] font-semibold;
	}
	&__input-wrapper {
		@apply flex-[3];
	}
	&__input {
		@apply max-w-xl;
	}
}
</style>
