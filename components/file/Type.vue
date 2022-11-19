<template>
  <div
    :class="[{}, props.disabled ? 'bg-[#27292D] text-[#797979]' : 'hover:border-[#3E389B] hover:bg-[#252434]']"
    class="bg-[#27292D] border border-[#323436]  p-1 text-xs flex items-center justify-center cursor-pointer">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  disabled: { type: Boolean, default: false }
});
</script>