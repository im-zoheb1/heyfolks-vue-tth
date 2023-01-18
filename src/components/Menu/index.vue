<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue'
import navigations from './menu'
</script>

<template>
  <aside class="menu flex flex-col">
    <!-- user profile : start -->
    <a href="#" class="flex items-center px-7 py-3 hover:bg-slate-200 transition duration-300 rounded-3xl mx-4 mb-3">
      <Avatar>
        <img src="@/assets/img/user.png" />
      </Avatar>
      <span class="ml-3 font-medium text-black leading-none">
        <div class="text-medium mb-1">Emilia Mark</div>
        <div class="text-gray-500">@emilia_mark</div>
      </span>
    </a>
    <!-- user profile : end -->
    <div class="h-px bg-gray-100 mx-5"></div>
    <!-- navigation : start -->
    <nav class="w-full overflow-y-auto mt-6">
      <ul>
        <li v-for="(navigation, index) in navigations" :key="`nav-menu-item-${index}`">
          <a 
            href="#" 
            class="flex items-center pl-8 py-[14px] hover:bg-indigo-50 
              transition duration-300 font-bold mx-3 mb-1 rounded-2xl active:scale-95"
            :class="{ 'bg-indigo-50': !index }"
          >
            <component class="h-6 mr-3" :is="navigation.icon"></component> 
            {{ navigation.label }}
          </a>
        </li>
      </ul>
    </nav>
    <!-- navigation : end -->
  </aside>
</template>

<style lang="scss" scoped>
.menu {
  @apply bg-white fixed top-0 left-0 bottom-0 shadow-sm pt-4;
  &__user {

  }
}
</style>
