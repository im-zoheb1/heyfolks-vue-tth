<script lang="ts" setup>
const props = defineProps<{
  data: any;
  level: number;
}>()
</script>

<template>
  <section class="w-full">
    <ul>
      <li class="relative" v-for="(item, index) in data">
        {{ item.text }}
        <NestedThread 
          v-if="item.responses?.length" 
          :level="level + 1"
          :data="item.responses"
          :class="{ 'pl-7': level }"
        ></NestedThread>
      </li>
    </ul>
  </section>
</template>
