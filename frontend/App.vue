<template>
  <v-app>
    <Breadcrumbs :items="breadcrumbItems" divider="/" v-if="breadcrumbItems.length" />
    <router-view />
  </v-app>
</template>

<script>
import Breadcrumbs from './modules/breadcrumbs/Breadcrumbs.vue';

export default {
  name: 'App',
  components: {
    Breadcrumbs,
  },
  data() {
    return {
     breadcrumbItems: [], // Initialize an empty array or define initial breadcrumb items
    };
  },
  created() {
    this.updateBreadcrumbs(this.$route);

    this.$router.beforeEach((to, from, next) => {
      this.updateBreadcrumbs(to);
      next();
    });
  },
  methods: {
    updateBreadcrumbs(route) {
      const MAX_BREADCRUMB_ITEMS = 5;
      const matchedRoutes = route.matched.filter((record) => record.meta.breadcrumb);

      // Create new breadcrumb items for the matched routes and add them to the history
      const newBreadcrumbItems = matchedRoutes.map((record) => ({
        title: record.meta.breadcrumb.title,
        href: record.meta.breadcrumb.href,
      }));
      this.breadcrumbItems.push(...newBreadcrumbItems);

      // If the breadcrumbItems array exceeds the maximum allowed size, remove the oldest items
      if (this.breadcrumbItems.length > MAX_BREADCRUMB_ITEMS) {
            this.breadcrumbItems.splice(0, this.breadcrumbItems.length - MAX_BREADCRUMB_ITEMS);
            
      }
    },
  },
};
</script>

<style>
/* Add any custom styling here */
</style>

