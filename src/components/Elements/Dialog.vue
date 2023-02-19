<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import Button from '@/components/Elements/Button.vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

// start: props
const props = defineProps<{
  modelValue: boolean;
  noPadding?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  size?: string;
}>()
// end: props

// start: events
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
// end: events

// start: refs
const isOpen = ref<boolean>(false)
// end: refs

// start: watchers
watch(isOpen, (value: boolean) => {
  emits('update:modelValue', value)
})
watch(() => props.modelValue, (value: boolean) => {
  isOpen.value = value 
})
// end: watchers

// start: methods
const closeDialog =  (): void  => {
  isOpen.value = false
}
// end: methods

onMounted(() => {
  isOpen.value = props.modelValue
})
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeDialog" class="relative z-dialog">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 translate-y-10"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0 -translate-y-10"
          >
            <DialogPanel
              class="w-full transform rounded-lg bg-main-bg text-left align-middle shadow-xl transition-all max-h-[95vh] overflow-y-auto scroll-smooth"
              :class="[
                size ?? 'max-w-md',
                { 'p-3': !noPadding }
              ]"
            >
              <DialogTitle v-if="!hideHeader">Dialog title</DialogTitle>
              <slot></slot>
              <div v-if="!hideFooter" class="text-right">
                <slot name="footer">
                  <Button variant="light" @click="closeDialog">Cancel</Button>
                </slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
