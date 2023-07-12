<template>
  <div>
    <h1>Task Details</h1>
    <div v-if="task">
      <h2>{{ task.title }}</h2>
      <p>{{ task.description }}</p>
      <router-link :to="`/tasks/${task.id}/edit`">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: null, // Object to store the task retrieved from the API
    };
  },
  mounted() {
    // Retrieve the task ID from the route params
    const taskId = this.$route.params.id;
    // Make API request to retrieve the task with the given ID and update the `task` data property
    // For example, using axios:
    axios.get(`/api/tasks/${taskId}`).then((response) => {
      this.task = response.data;
    });
  },
};
</script>

