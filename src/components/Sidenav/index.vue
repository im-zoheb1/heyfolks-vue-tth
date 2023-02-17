<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue'
import navigations from './menu'

const props = defineProps<{
  userData?: any
}>()
</script>

<template>
  <aside class="sidebar">
    <!-- user profile : start -->
    <a href="#" class="sidebar__user-profile">
      <Avatar class="sidebar__user-profile__avatar">
        <img :src="userData.avatar" />
      </Avatar>
      <span class="sidebar__user-profile__info">
        <div class="sidebar__user-profile__full-name">{{ userData.fullname }}</div>
        <div class="sidebar__user-profile__username">@{{ userData.username }}</div>
      </span>
    </a>
    <!-- user profile : end -->
    <Separator class="mx-4 hidden lg:block" />
    <!-- navigation : start -->
    <nav class="sidebar__navigation">
      <ul class="sidebar__navigation__list">
        <li 
          v-for="(navigation, index) in navigations" 
          :key="`nav-menu-item-${index}`"
          class="sidebar__navigation__item"
        >
          <RouterLink
            class="sidebar__navigation__link"
            active-class="bg-light-1 text-primary"
            :to="navigation.link" 
          >
            <component class="sidebar__navigation__icon" :is="navigation.icon"></component> 
            <span class="sidebar__navigation__text">{{ navigation.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <!-- navigation : end -->
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply flex bg-white fixed bottom-0 left-0 right-0 drop-shadow-2xl;
  @apply sm:flex-col sm:top-0 sm:shadow-sm sm:pt-20 sm:right-auto sm:drop-shadow-none;
  @apply lg:pt-4;
  &__user-profile {
    @apply transition duration-300 rounded-3xl mb-3 hidden relative;
    @apply lg:flex lg:items-center lg:mx-4 lg:px-3 lg:py-3 lg:hover:bg-light-1;
    &__avatar {
      @apply mx-auto lg:mx-0;
    }
    &__info {
      @apply ml-3 text-black leading-none hidden line-clamp-1 text-base;
      @apply lg:inline-block;
    }
    &__full-name {
      @apply mb-1.5;
    }
    &__username {
      @apply text-gray-500;
    }
  }

  &__navigation {
    @apply w-full overflow-y-auto p-1;
    @apply lg:mt-6 sm:p-0;
    &__list {
      @apply flex;
      @apply sm:block;
    }
    &__item {
      @apply flex-1;
    }
    &__link {
      @apply flex items-center py-3 hover:bg-light-1 hover:text-primary transition duration-300 font-bold rounded-md active:scale-95;
      @apply sm:mx-3 sm:mb-1 sm:py-[14px];
      @apply lg:px-5;
    }
    &__icon {
      @apply h-[26px] mx-auto lg:mx-0 lg:h-6;
    }
    &__text {
      @apply ml-3 hidden lg:inline-block; 
    }
  }
}
</style>
