<script lang="ts" setup>
import Avatar from '@/components/Elements/Avatar.vue'
import Separator from '@/components/Elements/Separator.vue';
import { 
  HeartIcon as LikeIcon, 
  ChatBubbleOvalLeftEllipsisIcon as CommentIcon, 
  BookmarkIcon as SaveIcon 
} from '@heroicons/vue/24/outline';
import { 
  HeartIcon as LikeSolidIcon, 
  BookmarkIcon as SaveSolidIcon 
} from '@heroicons/vue/24/solid';

import { ref, computed } from 'vue'

const props = defineProps<{
  data: any;
  activateComment?: (arg: boolean) => void;
}>()

const solidLikeClass = ref('')

// computed: start
const likesCount = computed(() => props.data.interactions.likes)
const commentsCount = computed(() => props.data.interactions.comments)
const isLiked = computed(() => props.data.interactions.isLiked)
const isSaved = computed(() => props.data.interactions.isSaved)
// computed: end

const toggleLike = (): void => {
  props.data.interactions.isLiked = !props.data.interactions.isLiked
  if (!props.data.interactions.isLiked) { 
    props.data.interactions.likes-- 
    solidLikeClass.value = ''
  } else { 
    props.data.interactions.likes++ 
    solidLikeClass.value = 'animate__bounceIn'
  }
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
        <Avatar size="sm" :src="data.avatar" />
        <span class="leading-tight ml-3">
          <div class="text-md">{{ data.fullname }}</div>
          <div class="text-muted text-sm">{{ $moment(data.date).fromNow() }}</div>
        </span>
      </div>
    </div>
    <!-- end: header -->

    <!-- start: content -->
    <div class="px-3">
      <div class="leading-normal text-base mb-3">
        {{ data.content.text }}
      </div>
      <div v-if="data.content.photo" class="mb-3 h-[300px] w-full overflow-hidden rounded-md bg-slate-100">
        <img class="w-full h-full object-cover" :src="data.content.photo" />
      </div>
    </div>
    <!-- end: content  -->
    <Separator />
    <!-- start: interactions start -->
    <div class="flex text-sm font-semibold">
      <button 
				class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2" 
				:class="{ 'font-bold text-danger': isLiked }" 
				@click="toggleLike"
			>
        <LikeSolidIcon 
          v-if="isLiked" 
          :class="['sm:w-6 w-5 animate__animated animate__faster', solidLikeClass]"
        ></LikeSolidIcon>
        <LikeIcon v-else class="sm:w-6 w-5"></LikeIcon>
        <div class="ml-2">{{ likesCount }} Likes</div>
      </button>
      <button 
				class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2" 
				@click="activateComment && activateComment(true)"
			>
        <CommentIcon class="sm:w-6 w-5" />
        <div class="ml-2">{{ commentsCount || '' }} Comments</div>
      </button>
			<button 
				class="flex items-center justify-center cursor-pointer w-4/12 hover:bg-light-1 py-2" 
				:class="{ 'text-primary': isSaved }" 
				@click="toggleSave"
			>
        <component :is="isSaved ? SaveSolidIcon : SaveIcon" class="sm:w-6 w-5"></component>
        <div class="ml-2">Save</div>
      </button>
    </div>
    <!-- end: interactions end -->
  </div>
</template>
