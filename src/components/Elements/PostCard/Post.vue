<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue';
import NoUserPhoto from '@/assets/img/no-user-photo.png' 
import { 
  HeartIcon as LikeIcon, 
  ChatBubbleOvalLeftEllipsisIcon as CommentIcon, 
  BookmarkIcon as SaveIcon 
} from '@heroicons/vue/24/outline';
import { 
  HeartIcon as LikeSolidIcon, 
  BookmarkIcon as SaveSolidIcon 
} from '@heroicons/vue/24/solid';

import { computed } from 'vue'

const props = defineProps<{
  data: any;
  activateComment?: (arg: boolean) => void;
}>()

// computed: start
const likesCount = computed(() => props.data.interactions.likes)
const commentsCount = computed(() => props.data.interactions.comments)
const isLiked = computed(() => props.data.interactions.isLiked)
const isSaved = computed(() => props.data.interactions.isSaved)
// computed: end

// methods: start
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
// methods: end
</script>

<template>
  <div>
    <!-- start: header  -->
    <div class="p-3">
      <div class="flex items-center">
        <Avatar size="sm">
          <img :src="data.avatar" @error="onImgError" />
        </Avatar>
        <span class="leading-tight ml-3">
          <div class="text-md">{{ data.fullname }}</div>
          <div class="text-gray-400 text-sm">{{ $moment(data.date).fromNow() }}</div>
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
      <button class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2" @click="activateComment && activateComment(true)">
        <CommentIcon class="w-6" />
        <div class="ml-2">{{ commentsCount || '' }} comments</div>
      </button>
      <button class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2" @click="toggleSave">
        <component :is="isSaved ? SaveSolidIcon : SaveIcon" class="w-6"></component>
        <div class="ml-2">Save</div>
      </button>
    </div>
    <!-- end: interactions end -->
  </div>
</template>