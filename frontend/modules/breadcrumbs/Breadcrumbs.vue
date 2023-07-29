<template>
  <v-breadcrumbs v-if="items.length">
    <template v-for="(item, index) in items" :key="index">
      <li v-if="item.href" class="v-breadcrumbs-item">
        <router-link
          v-if="item.href"
          :to="item.href"
          class="v-breadcrumbs-item--link"
          :class="{ 'router-link-active': index === items.length - 1 }"
          exact
        >
          {{ item.title }}
        </router-link>
      </li>
      <li v-else class="v-breadcrumbs-item">{{ item.title }}</li>
      <li v-if="index < items.length - 1" class="v-breadcrumbs-divider">-</li>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Add any additional custom styling for breadcrumbs here */
</style>

