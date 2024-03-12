import { createRouter, createWebHistory } from "vue-router";
import Account from "./pages/Account.vue";
import About from "./pages/About.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/account", component: Account },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
