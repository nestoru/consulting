<template>
  <div>
    <h1>{{ formTitle }}</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title</label>
        <input v-model="task.title" type="text" id="title" required />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea v-model="task.description" id="description" required></textarea>
      </div>
      <button type="submit">{{ submitButtonText }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
      }, // Object to store the form data for creating/editing a task
    };
  },
  computed: {
    formTitle() {
      return this.$route.params.id ? 'Edit Task' : 'Create Task';
    },
    submitButtonText() {
      return this.$route.params.id ? 'Update' : 'Create';
    },
  },
  methods: {
    submitForm() {
      if (this.$route.params.id) {
        // Make API request to update the existing task
        // For example, using axios:
        axios.put(`/api/tasks/${this.$route.params.id}`, this.task).then(() => {
          // Handle success or show a notification
          // Redirect to the task details view
          this.$router.push(`/tasks/${this.$route.params.id}`);
        });
      } else {
        // Make API request to create a new task
        // For example, using axios:
        axios.post('/api/tasks', this.task).then((response) => {
          // Handle success or show a notification
          // Redirect to the newly created task details view
          this.$router.push(`/tasks/${response.data.id}`);
        });
      }
    },
  },
};
</script>

