<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue'
import Button from '@/components/Elements/Button.vue'
</script>

<template>
  <AuthLayout title="Sign In">
    <template #description>
      <p class="mt-4">Don't have an account?</p>
      <Button 
        class="mt-9" 
        variant="light" 
        pilled 
        transform-on-hover
      >Join Now</Button>
    </template>
    <form></form>
  </AuthLayout>
</template>
