import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { store } from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
