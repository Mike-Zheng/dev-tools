import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/HelloWorld.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
