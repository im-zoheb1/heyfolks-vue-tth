<script lang="ts" setup>
import Card from "@/components/Elements/Card.vue";
import { ref } from "vue";
import { getFakeSuggesstions } from "@/generator/suggesstions";
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";

const suggesstions = ref<any>(getFakeSuggesstions());
</script>

<template>
  <Card class="flex-1 bg-main-bg shadow-sm p-3">
    <h3 class="font-bold text-xl mb-3">Suggesstions</h3>
    <div>
      <div
        v-for="(suggesstion, index) in suggesstions"
        :key="`friends-suggesstions-${index}`"
        class="flex items-start mt-5 gap-3"
      >
        <Avatar :src="suggesstion.avatar" size="sm"></Avatar>
        <div class="flex flex-1 items-start justify-between">
          <div class="mr-3">
            <h5 class="font-semibold text-gray-600">{{ suggesstion.fullname }}</h5>
            <div class="leading-tight line-clamp-1 text-muted">
              {{ suggesstion.bio }}
            </div>
          </div>
          <Button class="ml-auto mt-1 px-4" variant="light" pilled size="sm">Follow</Button>
        </div>
      </div>
    </div>
  </Card>
</template>
