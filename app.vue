<template>
  <div class="h-screen flex">
    <!-- Left bar navigation -->
    <div
      class="w-[16rem] h-full border-r border-[#34363A] p-4 bg-[#1F2125] text-white flex flex-col gap-3">

      <!-- Avatar + profile name -->
      <div class="flex gap-2 items-center">
        <BaseAvatar />
        <div class="text-xs font-medium">
          <p>Bulik</p>
          <p class="text-[#797979]">Project Manager</p>
        </div>
      </div>

      <div class="flex gap-2">
        <BaseInput placeholder="New issue" />
        <BaseButton>
          <BaseIcon />
        </BaseButton>
      </div>
    </div>

    <!-- Main page -->
    <div class="flex-1 bg-[#1F2125] text-white">
      <div class="p-4 border-y border-[#34363A]">
        <BaseButton>Filter</BaseButton>
      </div>
      <NuxtPage />
    </div>

    <!-- Right sidebar -->
    <div
      class="w-[16rem] bg-[#1F2125] border-l border-[#34363A] h-full p-4 text-white flex flex-col gap-3">
      <div class="text-xs">
        <p>Attached filed</p>
        <p class="text-[#797979]">20 files</p>
      </div>

      <!-- Search filter -->
      <div class="flex gap-2">
        <BaseInput placeholder="Search file" />
        <BaseButton>
          <BaseIcon />
        </BaseButton>
      </div>

      <!-- Attached files types -->
      <div class="grid grid-cols-5 gap-2">
        <FileType>FIG</FileType>
        <FileType>JPG</FileType>
        <FileType disabled>PSD</FileType>
        <FileType disabled>URL</FileType>
        <FileType disabled>GIF</FileType>
        <FileType>EPS</FileType>
        <FileType disabled>DOC</FileType>
        <FileType>XLS</FileType>
        <FileType>M4A</FileType>
        <FileType disabled>PNG</FileType>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<!-- https://dribbble.com/shots/19810446-Yagitu-To-do-list-Dashboard -->