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
    <Separator class="mx-4" />
    <!-- navigation : start -->
    <nav class="sidebar__navigation">
      <ul>
        <li 
          v-for="(navigation, index) in navigations" 
          :key="`nav-menu-item-${index}`"
        >
          <a 
            href="#" 
            class="sidebar__navigation__link"
            :class="{ 'bg-light-1 text-primary': !index }"
          >
            <component class="sidebar__navigation__icon" :is="navigation.icon"></component> 
            <span class="sidebar__navigation__text">{{ navigation.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- navigation : end -->
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply flex flex-col bg-white fixed top-0 left-0 bottom-0 shadow-sm pt-4;

  &__user-profile {
    @apply flex items-center transition duration-300 rounded-3xl mb-3;
    @apply lg:mx-4 lg:px-3 lg:py-3 lg:hover:bg-light-1 ;
    &__avatar {
      @apply mx-auto lg:mx-0;
    }
    &__info {
      @apply ml-3 text-black leading-none font-semibold hidden;
      @apply lg:inline-block;
    }
    &__full-name {
      @apply mb-1.5 line-clamp-1;
    }
    &__username {
      @apply text-gray-500 line-clamp-1;
    }
  }

  &__navigation {
    @apply w-full overflow-y-auto mt-6;
    &__link {
      @apply flex items-center py-[14px] hover:bg-light-1 hover:text-primary transition duration-300 font-bold mx-3 mb-1 rounded-md active:scale-95;
      @apply lg:px-5;
    }
    &__icon {
      @apply h-6 mx-auto lg:mx-0 lg:h-6;
    }
    &__text {
      @apply ml-3 hidden lg:inline-block; 
    }
  }
}
</style>
