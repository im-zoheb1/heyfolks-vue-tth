<script lang="ts" setup>
import Avatar from './Avatar.vue'
import Card from './Card.vue';
import Button from './Button.vue';
import {
  PencilSquareIcon as EditIcon,
  Cog6ToothIcon as SettingsIcon,
} from "@heroicons/vue/20/solid";
import { MapPinIcon as LocationIcon } from "@heroicons/vue/24/solid";
import { ref, watch, onMounted } from 'vue'

const { 
  value, 
  tab = 'timeline',
  contentClass = ''
} = defineProps<{ value: any; tab?: 'timeline' | 'friends'; contentClass?: string }>()

const emit = defineEmits<{
  (e: 'update:tab', value?: string): void
}>()

const tabs = ref<any[]>(["timeline", "friends"]);
const activeTab = ref<string>(tabs.value[0]);

watch(() => activeTab.value, (value: string): void => {
  emit('update:tab', value)
})
watch(() => tab, (value: string): void => {
  activeTab.value = value
})
onMounted(() => {
  if (tab) activeTab.value = tab
})
</script>

<template>
  <Card class="overflow-hidden">
    <div class="bg-gradient w-full h-56">
      <img
        v-if="value.cover"
        class="w-full h-full object-cover"
        :src="value.cover"
      />
    </div>
    <div class="px-3 mx-auto" :class="[contentClass]">
      <!-- user details: start -->
      <div class="flex items-start mt-[-20px]">
        <Avatar class="ring-offset-4" :src="value.avatar" size="xl" />
        <div class="mt-7 flex-1">
          <slot name="title">
            <div class="flex justify-between">
              <div class="leading-tight ml-4">
                <h6 class="font-bold text-xl">{{ value.fullname }}</h6>
                <h6 class="font-semibold text-muted">@{{ value.username }}</h6>
              </div>
              <div class="flex items-center">
                <Button 
                  size="sm" 
                  variant="light" 
                  class="flex items-center p-2 xl:px-4" 
                  compact 
                  pilled 
                  @click="() => $router.push({ name: 'profileManage' })"
                >
                  <EditIcon class="w-5 inline-block" />
                  <span class="ml-1 max-xl:hidden">Edit Profile</span>
                </Button>
                <!-- <Button size="sm" variant="flat" class="ml-2 hover:[&>*]:rotate-90 p-2" compact pilled>
                  <SettingsIcon class="w-5 transition-all duration-500" />
                </Button> -->
              </div>
            </div>
          </slot>
        </div>
        
        
      </div>
      <slot>
        <p class="mt-5 text-muted flex items-center">
          <LocationIcon class="w-5 mr-1 mb-1" /> {{ value.city }}
        </p>
        <p class="text-base mt-2 mb-4">{{ value.bio }}</p>
        <!-- user details: end -->
        <!-- tabs: start -->
        <div class="flex font-semibold [&>*]:px-5 [&>*]:py-2">
          <button
            v-for="tab in tabs"
            :key="`value.tab-${tab}`"
            class="capitalize border-b-[3px] transition-all duration-300"
            :class="{ 'border-primary text-primary': activeTab === tab, 'border-transparent': activeTab !== tab }"
            @click="() => (activeTab = tab)"
          >
            {{ tab }}
          </button>
        </div>
        <!-- tabs: end -->
      </slot>
    </div>
  </Card>
</template>
