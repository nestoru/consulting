<template>
  <v-card>
    <v-list>
      <v-list-item v-for="task in tasks" :key="task._id" :to="`/tasks/${task._id}`">
        <v-list-item-title>{{ task.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn color="primary" @click="createTask">Create New Task</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TaskList',
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios
        .get('/api/tasks')
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    createTask() {
      // Redirect to the create task form
      this.$router.push('/tasks/create');
    },
  },
};
</script>

<style>
/* Add any custom styling here */
</style>

