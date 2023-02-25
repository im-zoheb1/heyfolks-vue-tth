<script lang="ts" setup>
import NotificationList from "@/components/Elements/NotificationList.vue";
import MainLayout from "@/layout/MainLayout.vue";
</script>

<template>
  <MainLayout no-padding>
    <div class="flex gap-3 items-start">
      <Card class="bg-main-bg shadow-sm rounded flex-[2] min-h-[calc(100vh-85px)]">
        <!-- <h3 class="font-bold text-xl">Notifications</h3> -->
        <NotificationList />
      </Card>
      <Card class="flex-1 bg-main-bg shadow-sm p-3 max-lg:hidden">
        <h3 class="font-bold text-xl">Suggesstions</h3>
      </Card>
    </div>
  </MainLayout>
</template>
