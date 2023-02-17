<script lang="ts" setup>
import Card from './Card.vue';

const props = defineProps<{
  data: any
}>()
</script>

<template>
  <Card>{{ data }}</Card>
</template>
