<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue'
import Button from '@/components/Elements/Button.vue'
import Input from '@/components/Elements/Form/Input.vue'
</script>

<template>
  <AuthLayout title="Log In">
    <template #description>
      <p class="mt-4">Don't have an account?</p>
      <Button class="mt-9" variant="light-primary" size="xl" pilled transform-on-hover @click="$router.push({ name: 'register' })">
        Join Now
      </Button>
    </template>
    <!-- FORM SECTION START -->
    <form @submit.prevent="$router.push({ name: 'home' })">
      <Input class="mb-14" label="Email" placeholder="Email" type="email" required />
      <Input class="mb-14" label="Password" placeholder="Password" type="password" required />
      <a class="text-base mb-8 font-bold text-primary text-right cursor-pointer hover:underline block">
        Forgot Password?
      </a>
      <Button class="px-10 py-4" type="submit" size="xl" pilled>
        Sign In
      </Button>
    </form>
    <!-- FORM SECTION END -->
  </AuthLayout>
</template>
