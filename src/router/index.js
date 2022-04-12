import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Contracts from "../views/Contracts.vue"

const routes = [
  {
    path: "",
    component: Dashboard,
    children: [
      {
        path: '/dashboard',
        name: Dashboard,
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
      },
      {
        path: '/contracts',
        name: Contracts,
        component: () =>
          import(/* webpackChunkName: "contract" */ "../views/Contracts.vue"),
      },
      {
        path: '/events',
        component: () =>
          import(/* webpackChunkName: "events" */ "../views/Events & Reminders.vue"),
      },
      {
        path: '/complaints',
        component: () =>
          import(/* webpackChunkName: "complaints" */ "../views/Complaints.vue"),
      },
      {
        path: '/reporting',
        component: () =>
          import(/* webpackChunkName: "reporting" */ "../views/Reporting.vue"),
      },
    ]
  },  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
