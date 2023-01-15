<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue'
import Button from '@/components/Elements/Button.vue'
import Input from '@/components/Elements/Form/Input.vue'
</script>

<template>
  <AuthLayout title="Log In">
    <template #description>
      <p class="mt-4">Don't have an account?</p>
      <Button class="mt-9" variant="light" pilled transform-on-hover>
        Join Now
      </Button>
    </template>
    <form>
      <Input 
        class="mb-14" 
        label="Username" 
        placeholder="Username" 
        type="email" 
        required 
      ></Input>
      <Input 
        class="mb-14" 
        label="Password" 
        placeholder="Password" 
        type="password" 
        required 
      ></Input>
      <div class="text-base mb-8 font-bold text-primary pointer text-right">
        <a class="cursor-pointer hover:underline">Forgot Password?</a>
      </div>
      <Button class="px-10 py-4" type="submit" pilled>
        Sign In
      </Button>
    </form>
  </AuthLayout>
</template>
