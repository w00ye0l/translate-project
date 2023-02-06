import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    country: "",
    place: "",
    countries: {
      미국: "en",
      일본: "ja",
      중국: "zh-CN",
      베트남: "vi",
      인도네시아: "id",
      태국: "th",
      독일: "de",
      러시아: "ru",
      스페인: "es",
      이탈리아: "it",
      프랑스: "fr",
    },
    places: {
      공항: "plane-departure",
      교통: "car-side",
      식당: "utensils",
      쇼핑: "cart-shopping",
      관광지: "landmark",
      숙소: "hotel",
    },
    languages: [
      "en",
      "ja",
      "zh-CN",
      "vi",
      "id",
      "th",
      "de",
      "ru",
      "es",
      "it",
      "fr",
    ],
    loadingStatus: false,
  },
  mutations: {
    startSpinner(state) {
      console.log("start");
      state.loadingStatus = true;
    },
    endSpinner(state) {
      console.log("end");
      state.loadingStatus = false;
    },
  },
});
