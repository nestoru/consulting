<template>
  <li>
    <router-link :to="`/tasks/${task.id}`">{{ task.title }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

