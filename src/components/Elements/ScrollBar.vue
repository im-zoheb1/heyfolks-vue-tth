<template>
  <div class="scrollbar">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.scrollbar {
  overflow: auto;
}
.scrollbar::-webkit-scrollbar {
    width: 8px;
}
 
.scrollbar::-webkit-scrollbar-track {
  cursor: pointer;
}
 
.scrollbar::-webkit-scrollbar-thumb {
  @apply absolute rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer;
}
</style>
