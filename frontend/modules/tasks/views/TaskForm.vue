<template>
  <v-card>
    <v-card-title>{{ formTitle }}</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submitForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="task.title"
                label="Title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="task.description"
                label="Description"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="submitForm">{{ submitButtonText }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
      },
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
  created() {
    if (this.$route.params.id) {
      // Fetch the task data from the API
      axios.get(`/api/tasks/${this.$route.params.id}`)
        .then((response) => {
          this.task = response.data;
        })
        .catch((error) => {
          console.error(error);
          // Handle error, show a notification, etc.
        });
    }
  },
  methods: {
    submitForm() {
      if (this.$route.params.id) {
        // Make API request to update the existing task
        axios.put(`/api/tasks/${this.$route.params.id}`, this.task)
          .then(() => {
            // Handle success or show a notification
            // Redirect to the task details view
            this.$router.push(`/tasks/${this.$route.params.id}`);
          })
          .catch((error) => {
            console.error(error);
            // Handle error, show a notification, etc.
          });
      } else {
        // Make API request to create a new task
        axios.post('/api/tasks', this.task)
          .then((response) => {
            // Handle success or show a notification
            // Redirect to the newly created task details view
            this.$router.push(`/tasks/${response.data._id}`);
          })
          .catch((error) => {
            console.error(error);
            // Handle error, show a notification, etc.
          });
      }
    },
  },
};
</script>

