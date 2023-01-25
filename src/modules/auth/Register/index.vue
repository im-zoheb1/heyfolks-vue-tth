<script lang="ts" setup>
import AuthLayout from '@/layout/AuthLayout.vue'
import Button from '@/components/Elements/Button.vue'
import Input from '@/components/Elements/Form/Input.vue'
</script>

<template>
  <AuthLayout title="Sign Up" is-reverse>
    <template #description>
      <p class="mt-4">Already have an account?</p>
      <Button class="mt-9" variant="light-primary" size="xl" pilled transform-on-hover @click="$router.push({ name: 'auth' })">
        Sign In
      </Button>
    </template>
    <!-- SIGNUP FORM START -->
    <form @submit.prevent="$router.push({ name: 'home' })">
      <Input class="mb-10" label="Fullname" placeholder="Fullname" type="text" required />
      <Input class="mb-10" label="Username" placeholder="Username" type="text" required />
      <Input class="mb-10" label="Email Address" placeholder="Email Address" type="email" required />
      <Input class="mb-10" label="Password" placeholder="Password" type="text" required />
      <Input class="mb-10" label="Confirm Password" placeholder="Confirm Password" type="text" required />
      <Button class="px-10 py-4" type="submit" size="xl" pilled>Sign Up</Button>
    </form>
    <!-- SIGNUP FORM END -->
  </AuthLayout>
</template>
