<script lang="ts" setup>
import ChatLayout from "@/layout/ChatLayout.vue";
import Separator from "@/components/Elements/Separator.vue";
import ChatList from "@/components/Elements/ChatList.vue";
import CommentInput from "@/components/Elements/Comments/CommentInput.vue";
import Avatar from "@/components/Elements/Avatar.vue";
import Button from "@/components/Elements/Button.vue";
import SpinningLoader from "@/components/Elements/Loaders/Spinning.vue";
import ConversationHeaderSkeleton from '@/components/Skeleton/ConversationHeaderSkeleton.vue'
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { ref, inject, onMounted } from "vue";
import {
  EllipsisHorizontalIcon as EllipsisIcon,
  BellIcon as MuteIcon,
  MagnifyingGlassIcon as SearchIcon,
	XMarkIcon as CancelIcon,
	ArrowSmallLeftIcon as BackIcon
} from "@heroicons/vue/24/outline";
import injectKey from "@/config/injectKey";

// inject: START
const $http = inject(injectKey.$http)
// inject: END

// varaibles: START
const message = ref<string>("")
const conversation = ref<any>({ userInfo: {}, messages: [] })
const selectedChat = ref<any>(null)
const isLoadingConversation = ref<boolean>(true)
const isConversationOpen = ref<boolean>(false)
const isChatSearchMode = ref<boolean>()
const scrollerRef = ref<HTMLDivElement | null>(null)
const searchChatInputRef = ref<HTMLInputElement | null>(null)
// variables: END

// methods: START
const isSelf = (message: any): boolean => {
  return message.sender.id === 1
}

const isLastType = (index: number): boolean => {
  const { messages } = conversation.value
  if (!messages[index+1]) return true
  if (messages[index].sender.id !== messages[index+1].sender.id) return true
  return false
}

const scrollToBottom = (): void => {
  setTimeout(() => {
    const el = document.getElementById('scroller')
    if (el) el.scrollTop = el.scrollHeight
  }, 0)
}

const closeChatSearch = (): void => {
  isChatSearchMode.value = false
}

const openChatSearch = (): void => {
  isChatSearchMode.value = true
	setTimeout(() => searchChatInputRef.value?.focus(), 0)
}

const openChatList = (): void => {
  isConversationOpen.value = false
}

const openConversation = async (chat: any): Promise<void> => {
  conversation.value = { userInfo: '', messages: [] }
  selectedChat.value = chat
  isConversationOpen.value = true
  isLoadingConversation.value = true
  isChatSearchMode.value = false
  try {
    const res = await $http?.get('/chat/messages')
    const data = res?.data.data
    conversation.value = data
    scrollToBottom()
  } catch (error) {
    console.log(error) 
  } finally {
    isLoadingConversation.value = false
  }
}
// methods: END

// mounted: START
onMounted(() => {
  scrollToBottom() 
})
// mounted: END
</script>

<template>
  <ChatLayout>
    <div 
      :class="[
        'chat',
        { 'is-conversation-open': isConversationOpen } 
      ]"
    >
			<ChatList class="chat__list" @open-chat="openConversation">
        <template #search-prepend>
          <Button class="mr-2 p-2 lg:hidden" variant="flat" compact pilled @click="$router.push({ name: 'home' })">
            <BackIcon class="w-6" />
          </Button>
        </template>
      </ChatList>
      <Separator is-vertical />
      <div class="chat__conversation">
        <template v-if="selectedChat">
          <div class="chat__header">
            <ConversationHeaderSkeleton v-if="isLoadingConversation" />
            <template v-else>
              <Button class="mr-2 p-2 lg:hidden" variant="flat" compact pilled @click="openChatList">
                <BackIcon class="w-6" />
              </Button>
              <div class="flex items-center">
                <Avatar :src="conversation.userInfo.avatar" size="sm" />
                <div class="ml-3 leading-tight">
                  <div class="font-semibold">{{ conversation.userInfo.name }}</div>
                  <div class="text-muted text-sm font-semibold">
                    @{{ conversation.userInfo.username }}
                  </div>
                </div>
              </div>
              <div class="flex ml-auto">
                <Button variant="flat" pilled compact class="p-2" @click.prevent="openChatSearch">
                  <SearchIcon class="w-6" />
                </Button>
                <Button variant="flat" pilled compact class="p-2">
                  <MuteIcon class="w-6" />
                </Button>
                <Button variant="flat" pilled compact class="p-2">
                  <EllipsisIcon class="w-6" />
                </Button>
              </div>
            </template>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div v-if="isChatSearchMode" class="chat__search-box">
                <SearchIcon class="w-6" />
                <input ref="searchChatInputRef" class="outline-none ml-3 text-base flex-1 bg-transparent" type="text" placeholder="Search chat" />
                <Button class="p-1.5 ml-3 bg-light-1" variant="light" compact pilled @click.prevent="closeChatSearch">
                  <CancelIcon class="w-4" />
                </Button>
              </div>
            </transition>
          </div>
          <PerfectScrollbar id="scroller" ref="scrollerRef" class="chat__content">
            <div class="chat__messages">
              <SpinningLoader v-if="isLoadingConversation" class="mx-auto my-3" />
              <div 
                v-for="(message, index) in conversation.messages"
                class="chat__message"
                :class="{ 
                  'is-self': isSelf(message),
                  'is-last-type': isLastType(index)
                }"
                :key="`chat-conversation-message-${index}`"
              >
                <div v-if="!isSelf(message)" class="chat__message__avatar-wrapper">
                  <Avatar :src="message.sender.avatar" size="xs" no-ring />
                </div>
                <div class="chat__message__content">
                  <div class="chat__message__text">{{ message.content }}</div>
                  <div class="chat__message__footer">{{ $moment(message.timestamp).format('LT') }}</div>
                </div> 
              </div>
            </div>
          </PerfectScrollbar>
          <Separator />
          <div class="chat__footer">
            <CommentInput v-model="message" :disabled="isLoadingConversation" />
          </div>
        </template>
        <div class="grid place-content-center place-items-center h-full text-center" v-else>
          <img class="w-64" src="@/assets/illustration/messaging.svg" />
          <h2 class="text-xl font-semibold mt-8">Need someone to talk to?</h2>
          <h3 class="text-lg mt-1 max-w-sm">Pick a person from the left menu and start chatting!</h3>
        </div>
      </div> 
    </div>
  </ChatLayout>
</template>

<style lang="scss" scoped>
.chat {
  height: calc(100dvh - 66px);
  @apply bg-main-bg flex items-stretch;
	&__list {
		@apply block flex-[1];
	}
  &__conversation {
    @apply flex flex-col flex-[2] relative;
  }
  &__header {
    @apply h-16 flex items-center px-3 shadow relative border-b;
  }
	&__search-box {
		@apply absolute bg-main-bg border top-full left-0 right-0 z-[1] p-3 flex items-center text-base;
	}
  &__content {
    @apply p-3 flex-1 overflow-y-scroll
  }
  &__messages {
    @apply flex flex-col;
  }
  &__message {
    @apply mt-1.5 flex items-end;
    &__avatar-wrapper {
      @apply mr-2 cursor-pointer hidden sm:inline-block;
    }
  }
  &__message.is-self {
    @apply flex flex-row-reverse;
  }
  &__message:not(.is-last-type) &__message__avatar-wrapper {
    @apply invisible opacity-0;
  }
  &__message__content {
    @apply inline-block border py-2 px-4 max-w-xs lg:max-w-lg bg-primary text-light-1 rounded-3xl;
  }
  &__message.is-last-type &__message__content {
    @apply rounded-bl-none;
  }
  &__message.is-self &__message__content {
    @apply bg-light-1 text-gray-600 text-left;
  }
  &__message.is-self.is-last-type &__message__content {
    @apply rounded-3xl rounded-br-none;
  }
  &__message__footer {
    @apply text-right text-[12px] font-semibold text-light-2;
  }
  &__message.is-self &__message__footer {
    @apply text-gray-500;
  }
  &__footer {
    @apply p-2;
  }
}

.chat.is-conversation-open .chat__list {
  @apply max-md:hidden;
}
.chat:not(.chat.is-conversation-open) .chat__conversation {
  @apply max-md:hidden;
}
</style>
