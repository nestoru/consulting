// modules/tasks/router/index.js
export default [
  {
    path: '/tasks',
    component: () => import('../views/TaskList.vue'),
    meta: { breadcrumb: {title: 'Tasks'} },
  },
  {
    path: '/tasks/:id',
    component: () => import('../views/TaskDetails.vue'),
    meta: { breadcrumb: {title: 'Task Details'} },
  },
  {
    path: '/tasks/create',
    component: () => import('../views/TaskForm.vue'),
    meta: { breadcrumb: {title: 'Task Creation'} },
  },
  {
    path: '/tasks/:id/edit',
    component: () => import('../views/TaskForm.vue'),
    meta: { breadcrumb: {title: 'Task Edition'} },
  },
];

