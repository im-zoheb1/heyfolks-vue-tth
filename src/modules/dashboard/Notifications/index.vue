<script lang="ts" setup>
import NotificationList from "@/components/Elements/NotificationList.vue";
import MainLayout from "@/layout/MainLayout.vue";
import SuggesstionsCard from '@/components/Elements/SuggesstionsCard.vue'
</script>

<template>
  <MainLayout no-padding>
    <div class="flex gap-3 items-start">
      <Card class="bg-main-bg shadow-sm rounded flex-[5] min-h-[calc(100vh-85px)]">
        <NotificationList />
      </Card>
			<div class="flex-[3] shrink-0 max-lg:hidden">
				<SuggesstionsCard />
			</div>
    </div>
  </MainLayout>
</template>
