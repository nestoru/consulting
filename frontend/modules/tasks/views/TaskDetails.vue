<template>
  <v-card>
    <v-card-title>{{ task.title }}</v-card-title>
    <v-card-text>
      <strong>Description:</strong> {{ task.description }}
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="editTask">Edit</v-btn>
      <v-btn color="error" @click="deleteTask">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: {}, // Populate with your task data
    };
  },
  created() {
    // Retrieve the task ID from the route params
    const taskId = this.$route.params.id;
    // Make API request to retrieve the task with the given ID and update the `task` data property
    // For example, using axios:
    axios.get(`/api/tasks/${taskId}`).then((response) => {
      this.task = response.data;
    });
  },
  methods: {
    editTask() {
      // Redirect to the task edit page
      this.$router.push(`/tasks/${this.task._id}/edit`);
    },
    deleteTask() {
      // Make API request to delete the task
      axios.delete(`/api/tasks/${this.task._id}`).then(() => {
        // Handle success or show a notification
        // Redirect to the task list page
        this.$router.push('/tasks');
      });
    },
  },
};
</script>

