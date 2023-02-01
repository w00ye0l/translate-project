import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/HomeView.vue";
import Country from "../views/CountryView.vue";
import Place from "../views/PlaceView.vue";
import Translate from "../views/TranslateView.vue";

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
  {
    path: "/place",
    name: "place",
    component: Place,
  },
  {
    path: "/translate",
    name: "translate",
    component: Translate,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
