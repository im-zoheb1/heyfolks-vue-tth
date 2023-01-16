<script setup lang="ts">
import Header from "@/components/Header.vue"
import Menu from "@/components/Menu/index.vue";
</script>

<template>
  <Header class="h-16 ml-64" />
  <Menu class="w-64" />
  <main class="w-full bg-blue-50 pl-64 pt-16 min-h-screen">
    <slot></slot>
  </main>
</template>
