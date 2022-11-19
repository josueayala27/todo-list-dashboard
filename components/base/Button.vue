<template>
  <button class="bg-blue-500 hover:bg-blue-600 p-2 text-xs aspect-square flex-shrink-0">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  icon: { type: Boolean, default: false }
})
</script>