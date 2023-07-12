// routes.js
import { createRouter, createWebHistory } from 'vue-router';

// Function to import modules dynamically
async function importModuleRoutes() {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('./modules/tasks/views/TaskList.vue'),
    }
  ];

  const modules = import.meta.globEager('./modules/*/router/index.js');

  for (const path in modules) {
    const moduleRoutes = modules[path].default;
    routes.push(...moduleRoutes);
  }

  return routes;
}

const router = createRouter({
  history: createWebHistory(),
  routes: await importModuleRoutes(),
});

export default router;

