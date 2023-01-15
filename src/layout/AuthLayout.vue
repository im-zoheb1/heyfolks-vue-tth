<script setup lang="ts">
import Logo from '@/components/Elements/Logo.vue'

const props = defineProps<{
  title: string;
}>()
</script>

<template>
  <div class="h-screen flex">
    <!-- helper section with logo and description -->
    <section class="hidden md:grid place-content-center bg-folks bg-cover bg-center bg-no-repeat h-full w-5/12 text-center">
      <Logo />
      <div class="text-white text-2xl font-semibold">
        <slot name="description"></slot>
      </div>
    </section>
    <!-- section with title and form -->
    <section class="w-full md:w-7/12 bg-blue-50 px-6 py-14 lg:px-20 lg:py-16 flex 
      items-center text-grey overflow-y-auto h-full flex-col scroll-p-0 scroll-smooth">
      <div class="w-full my-auto">
        <h1 class="font-bold text-5xl mb-16">
          {{ title }}
        </h1>
        <slot></slot>
      </div>
    </section>
  </div>
</template>
