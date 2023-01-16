<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue'
import navigations from './menu'
</script>

<template>
  <aside class="menu">
    <a href="#" class="menu__user">
      <Avatar>
        <img src="@/assets/img/user.png" />
      </Avatar>
    </a>
  </aside>
</template>

<style lang="scss" scoped>
.menu {
  @apply bg-white fixed top-0 left-0 bottom-0 shadow-sm pt-5;
  &__user {

  }
}
</style>
