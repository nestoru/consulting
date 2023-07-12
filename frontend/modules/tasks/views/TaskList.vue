<template>
  <div>
    <h1>Task List</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <router-link :to="`/tasks/${task.id}`">{{ task.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tasks: [], // Array to store the tasks retrieved from the API
    };
  },
  mounted() {
    // Make API request to retrieve the tasks and update the `tasks` data property
    // For example, using axios:
    axios.get('/api/tasks').then((response) => {
      this.tasks = response.data;
    });
  },
};
</script>

