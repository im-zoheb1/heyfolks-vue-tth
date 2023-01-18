<script setup lang="ts">
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar/index.vue";
</script>

<template>
  <Header class="h-16 pl-72" />
  <Sidebar class="w-72" />
  <main class="w-full bg-blue-50 pl-72 pt-16 min-h-screen">
    <div class="p-3">
      <slot></slot>
    </div>
  </main>
</template>
