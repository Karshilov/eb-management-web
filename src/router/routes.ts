import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/AuditResources.vue')
      },
      {
        path: 'audit-resources',
        component: () => import('pages/AuditResources.vue')
      },
      {
        path: 'audit-team',
        component: () => import('pages/AuditTeam.vue')
      },
      {
        path: 'dash-board',
        component: () => import('pages/DashBoard.vue')
      },
      {
        path: 'realsee',
        component: () => import('pages/Realsee.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
