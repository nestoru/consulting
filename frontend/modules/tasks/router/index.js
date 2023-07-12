// modules/tasks/router/index.js
const routes = [
  {
    path: '/tasks',
    component: () => import('../views/TaskList.vue'),
  },
  {
    path: '/tasks/:id',
    component: () => import('../views/TaskDetails.vue'),
  },
  {
    path: '/tasks/create',
    component: () => import('../views/TaskForm.vue'),
  },
  {
    path: '/tasks/:id/edit',
    component: () => import('../views/TaskForm.vue'),
  },
];

export default routes;

