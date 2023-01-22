<script lang="ts" setup>
import Button from "@/components/Elements/Button.vue";
import Popover from "@/components/Elements/Popover.vue";
import Separator from "@/components/Elements/Separator.vue"
import Input from "@/components/Elements/Form/Input.vue"
import { ChatBubbleOvalLeftIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <Popover panel-class="w-96">
    <template #default="{ open }">
      <Button compact variant="light" pilled class="p-2 mx-3">
        <ChatBubbleOvalLeftIcon class="w-7" :class="{ 'text-gray-600': !open }" />
      </Button>
    </template>
    <template #content>
      <h3 class="text-lg tracking-wide font-bold py-3 px-4">Messages</h3>
      <Separator />
      <div class="p-3">
        <Input placeholder="Search" />
      </div>
    </template>
  </Popover>
</template>
