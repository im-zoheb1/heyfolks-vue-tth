<script setup lang="ts">
import Header from "@/components/Header.vue"
import Menu from "@/components/Menu/index.vue";
</script>

<template>
  <Header class="h-16 ml-72" />
  <Menu class="w-72" />
  <main class="w-full bg-blue-50 pl-72 pt-16 min-h-screen">
    <slot></slot>
  </main>
</template>
