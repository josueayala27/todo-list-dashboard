<template>
  <div class="px-4 py-2 text-xs bg-[#27292D] border-y border-[#34363A]">
    <!-- Left section -->
    <div class="flex gap-2">
      <p>{{ props.title }}</p>
      <p class="text-[#797979]">{{ props.caption }}</p>
    </div>
  </div>

  <slot />
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  caption: { type: String, default: '' },
})
</script>