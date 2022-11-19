<template>
  <TaskParent title="In progress" caption="3 tasks">
    <TaskItem title="Testing the development"></TaskItem>
    <TaskItem title="Reviewing logo and branding"></TaskItem>
    <TaskItem title="Dashboard, mobile, and web DS"></TaskItem>
  </TaskParent>
  <TaskParent title="Logo and Branding" caption="Waiting for confirmation (2)">
    <TaskItem title="Testing the development"></TaskItem>
    <TaskItem title="Reviewing logo and branding"></TaskItem>
    <TaskItem title="Dashboard, mobile, and web DS"></TaskItem>
  </TaskParent>
</template>

<script setup>
const tasks = reactive([
  { title: "In progress" }
])
</script>