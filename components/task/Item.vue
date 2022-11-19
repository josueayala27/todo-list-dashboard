<template>
  <div class="px-4 py-2 text-xs first:border-t-0 border-y border-[#34363A]">
    <!-- Left section -->
    <div class="flex gap-2">
      <p>{{ props.title }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' }
})
</script>