// routes.js
import { createRouter, createWebHistory } from 'vue-router';

// Function to import modules dynamically
async function importModuleRoutes() {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('./modules/tasks/views/TaskList.vue'),
      meta: { breadcrumb: {title: 'Home', to: '/'} },
    },
  ];

  const modules = Object.entries(import.meta.globEager('./modules/*/router/index.js'));

  for (const [path, moduleRoutes] of modules) {
    routes.push.apply(routes, moduleRoutes.default);
  }

  return routes;
}

const router = createRouter({
  history: createWebHistory(),
  routes: await importModuleRoutes(),
});

export default router;

