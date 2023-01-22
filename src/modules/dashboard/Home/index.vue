<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import CreatePost from "@/components/Elements/CreatePost/index.vue";
import Card from "@/components/Elements/Card.vue";
</script>

<template>
  <MainLayout>
    <div class="grid grid-cols-2 gap-3">
      <Card>
        <CreatePost />
      </Card>
    </div>
  </MainLayout>
</template>
