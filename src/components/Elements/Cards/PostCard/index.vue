<script lang="ts" setup>
import Card from '@/components/Elements/Cards/index.vue'
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue';
import Input from '@/components/Elements/Form/Input.vue'
import NoUserPhoto from '@/assets/img/no-user-photo.png' 
import { ref, computed } from 'vue'

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
  value: any
}>()

const comment = ref<string>('')
const isCommentActive = ref<boolean>(false)

const likesCount = computed(() => props.value.interactions.likes)
const commentsCount = computed(() => props.value.interactions.comments)
const isLiked = computed(() => props.value.interactions.isLiked)
const isSaved = computed(() => props.value.interactions.isSaved)

const onImgError = (event: Event) => {
  (event.target as HTMLImageElement).src = NoUserPhoto
}

const toggleLike = (): void => {
  props.value.interactions.isLiked = !props.value.interactions.isLiked
  if (!props.value.interactions.isLiked) props.value.interactions.likes--
  else props.value.interactions.likes++
}

const toggleComment = (): void => {
  isCommentActive.value =! isCommentActive.value
}

const toggleSave = (): void => {
  props.value.interactions.isSaved = !props.value.interactions.isSaved
}
</script>

<template>
  <Card>
    <!-- start: header  -->
    <div class="p-3">
      <div class="flex items-center">
        <Avatar size="sm">
          <img :src="value.avatar" @error="onImgError" />
        </Avatar>
        <span class="leading-tight ml-3">
          <div class="text-md">{{ value.fullname }}</div>
          <div class="text-gray-400 text-sm">{{ value.city }}</div>
        </span>
      </div>
    </div>
    <!-- end: header -->

    <!-- start: content -->
    <div class="px-3">
      <div class="leading-normal text-base mb-3">
        {{ value.content.text }}
      </div>
      <div v-if="value.content.photo" class="mb-3 max-h-[300px] min-h-[300px] w-full overflow-hidden rounded-md">
        <img class="w-full h-full object-cover" :src="value.content.photo" />
      </div>
    </div>
    <!-- end: content  -->

    <!-- start: interactions start -->
    <Separator />
    <div class="flex py-2 px-3 text-sm font-semibold">
      <div class="flex items-center mr-6 cursor-pointer" :class="{ 'font-bold text-primary': isLiked }" @click="toggleLike">
        <LikeSolidIcon v-if="isLiked" class="w-6" />
        <LikeIcon v-else class="w-6" />
        <div class="ml-2">{{ likesCount }} Likes</div>
      </div>
      <div class="flex items-center mr-6 cursor-pointer" @click="toggleComment">
        <CommentIcon class="w-6" />
        <div class="ml-2">{{ commentsCount }} comments</div>
      </div>
      <div class="flex items-center cursor-pointer" @click="toggleSave">
        <SaveSolidIcon v-if="isSaved" class="w-6"/>
        <SaveIcon v-else class="w-6"/>
        <div class="ml-2">Save</div>
      </div>
    </div>
    <!-- end: interactions end -->
    <div v-if="isCommentActive">
      <Separator />
      <div class="p-3">
        <Input v-model="comment" />
      </div>
    </div>
  </Card>
</template>
