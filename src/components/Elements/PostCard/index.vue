<script lang="ts" setup>
import Card from '@/components/Elements/Card.vue'
import Post from '@/components/Elements/PostCard/Post.vue'
import PostDialog from './PostDialog.vue'
import { ref } from 'vue'

const props = defineProps<{
  value: any;
}>()

const isCommentsActive = ref<boolean>(false)

const activeComment = (value: boolean) => {
  isCommentsActive.value = value
}
</script>

<template>
  <Card>
    <Post :data="value" :activate-comment="activeComment" />
    <PostDialog 
      v-model="isCommentsActive"
      :data="value"
      size="max-w-2xl"
      no-padding
      hide-header
      hide-footer
    />
  </Card>
</template>

<style lang="scss" scoped>
body {
  display: none;
}
</style>
