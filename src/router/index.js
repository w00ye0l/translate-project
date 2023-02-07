import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/HomeView.vue";
import Country from "../views/CountryView.vue";
import Place from "../views/PlaceView.vue";
import Translate from "../views/TranslateView.vue";
import Talk from "../views/TalkView.vue";
import Developer from "../views/DeveloperView.vue";

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
    path: "/talk",
    name: "talk",
    component: Talk,
  },
  {
    path: "/translate",
    name: "translate",
    component: Translate,
  },
  {
    path: "/developer",
    name: "developer",
    component: Developer,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
