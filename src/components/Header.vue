<script lang="ts" setup>
import Avatar from "@/components/Elements/Avatar.vue";
</script>

<template>
  <header
    class="bg-white absolute top-0 left-0 right-0 w-full shadow-sm flex items-center justify-between"
  >
    <div>search</div>
    <div class="flex items-center">
      <div class="w-px h-8 mx-4 bg-gray-200 "></div>
      <Avatar class="mr-3" size="sm">
        <img src="@/assets/img/user.png" />
      </Avatar>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
