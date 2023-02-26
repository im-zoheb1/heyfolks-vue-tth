<script lang="ts" setup>
import MainLayout from '@/layout/MainLayout.vue'
import SuggesstionsCard from '@/components/Elements/SuggesstionsCard.vue';
import Card from '@/components/Elements/Card.vue';
</script>

<template>
  <MainLayout>
    <div class="flex items-start gap-3">
      <Card class="flex-[2]">profile</Card>
      <SuggesstionsCard class="flex-1" />
    </div>
  </MainLayout>
</template>
