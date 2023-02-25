<script lang="ts" setup>
import { getCurrentInstance, inject } from "vue";
import injectKey from "./config/injectKey";

const router = inject(injectKey.router);
const internalInstace = getCurrentInstance();
const progress = internalInstace?.appContext.config.globalProperties.$Progress;

router?.beforeEach((to, from, next) => {
  progress?.start();
  next();
});

router?.beforeResolve((to, from, next) => {
  progress?.finish();
  next();
});
</script>

<template>
  <RouterView />
  <vue-progress-bar />
</template>

<style scoped></style>
