import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/HomeView.vue";
import Country from "../views/CountryView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/country",
    name: "country",
    component: Country,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
