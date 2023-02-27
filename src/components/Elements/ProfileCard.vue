<script lang="ts" setup>
import Card from "./Card.vue";
import Avatar from "./Avatar.vue";
import Separator from "./Separator.vue";
import Button from "./Button.vue";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem.vue";
import {
  EllipsisHorizontalIcon,
  ArchiveBoxXMarkIcon as UnfollowIcon,
  ChatBubbleLeftEllipsisIcon as MessageIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <Card class="px-3 py-4 shadow-none cursor-pointer transition-all hover:bg-slate-50">
    <div class="flex items-center leading-tight">
      <Avatar :src="data.avatar" size="lg" rounded />
      <div class="w-full ml-5">
        <div class="flex items-center justify-between w-full mb-3">
          <div>
            <h3 class="font-semibold mb-1">{{ data.fullname }}</h3>
            <h3 class="text-muted line-clamp-1">{{ data.city }}</h3>
          </div>
          <Menu class="ml-auto" width="200px">
            <template #button>
              <Button variant="light" class="p-1" compact pilled>
                <EllipsisHorizontalIcon class="w-6" />
              </Button>
            </template>
            <MenuItem class="flex items-center font-semibold text-sm rounded-none">
              <UnfollowIcon class="w-5 mr-2" />
              Remove
            </MenuItem>
            <Separator class="mx-2" />
            <MenuItem class="flex items-center font-semibold text-sm rounded-none">
              <MessageIcon class="w-5 mr-2" />
              Message
            </MenuItem>
          </Menu>
        </div>
        <div class="line-clamp-1 mr-2">{{ data.bio }}</div>
      </div>
    </div>
  </Card>
</template>
