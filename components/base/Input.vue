<template>
  <div class="flex w-full">
    <input v-bind="{ ...$attrs }"
      class="border border-[#353739] placeholder-[#797979] bg-[#26282C] text-xs w-full py-2 px-3 outline-none" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>