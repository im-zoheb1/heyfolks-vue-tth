<script lang="ts" setup>
import Dialog from '@/components/Elements/Dialog.vue';
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue';
import Comments from '@/components/Elements/Comments/index.vue'
import NoUserPhoto from '@/assets/img/no-user-photo.png' 
import { ref, computed, watch, onMounted } from 'vue'
import { 
  HandThumbUpIcon as LikeIcon, 
  ChatBubbleOvalLeftEllipsisIcon as CommentIcon, 
  BookmarkIcon as SaveIcon 
} from '@heroicons/vue/24/outline';
import { 
  HandThumbUpIcon as LikeSolidIcon, 
  BookmarkIcon as SaveSolidIcon 
} from '@heroicons/vue/24/solid';

const props = defineProps<{
  modelValue: boolean;
  data: any
}>()

// start: events
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
// end: events

// start: refs
const isOpen = ref<boolean>(false)
const likesCount = computed(() => props.data.interactions.likes)
const commentsCount = computed(() => props.data.interactions.comments)
const isLiked = computed(() => props.data.interactions.isLiked)
const isSaved = computed(() => props.data.interactions.isSaved)
// end: refs

// start: watchers
watch(isOpen, (value: boolean) => {
  emits('update:modelValue', value)
})

watch(() => props.modelValue, (value: boolean) => {
  isOpen.value = value 
})
// end: watchers

// start: methods
const closeDialog =  (): void  => {
  isOpen.value = false
}

const onImgError = (event: Event) => {
  (event.target as HTMLImageElement).src = NoUserPhoto
}

const toggleLike = (): void => {
  props.data.interactions.isLiked = !props.data.interactions.isLiked
  if (!props.data.interactions.isLiked) props.data.interactions.likes--
  else props.data.interactions.likes++
}

const toggleSave = (): void => {
  props.data.interactions.isSaved = !props.data.interactions.isSaved
}
// end: methods

onMounted(() => {
  isOpen.value = props.modelValue
})
</script>

<template>
  <Dialog 
    v-model="isOpen"
    size="max-w-2xl"
    no-padding
    hide-header
    hide-footer
  >
    <div class="relative">
      <!-- start: header  -->
      <div class="p-3 sticky top-0 bg-white">
        <div class="flex items-center">
          <Avatar size="sm">
            <img :src="data.avatar" @error="onImgError" />
          </Avatar>
          <span class="leading-tight ml-3">
            <div class="text-md">{{ data.fullname }}</div>
            <div class="text-gray-400 text-sm">{{ data.city }}</div>
          </span>
        </div>
      </div>
      <!-- end: header -->

      <!-- start: content -->
      <div class="px-3">
        <div class="leading-normal text-base mb-3">
          {{ data.content.text }}
        </div>
        <div v-if="data.content.photo" class="mb-3 h-[300px] w-full overflow-hidden rounded-md">
          <img class="w-full h-full object-cover" :src="data.content.photo" />
        </div>
      </div>
      <!-- end: content  -->

      <!-- start: interactions start -->
      <Separator />
      <div class="flex text-sm font-semibold">
        <button class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2" :class="{ 'font-bold text-primary': isLiked }" @click="toggleLike">
          <component :is="isLiked ? LikeSolidIcon : LikeIcon" class="w-6"></component>
          <div class="ml-2">{{ likesCount }} Likes</div>
        </button>
        <button class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2">
          <CommentIcon class="w-6" />
          <div class="ml-2">{{ commentsCount }} comments</div>
        </button>
        <button class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2" @click="toggleSave">
          <component :is="isSaved ? SaveSolidIcon : SaveIcon" class="w-6"></component>
          <div class="ml-2">Save</div>
        </button>
      </div>

      <!-- start: comments -->
      <Comments />
      <!-- end: comments -->
    </div>
    
  </Dialog>
</template>
