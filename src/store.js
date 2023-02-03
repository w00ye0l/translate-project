import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    country: "",
    place: "",
    countries: [
      "미국",
      "일본",
      "중국",
      "베트남",
      "인도네시아",
      "태국",
      "독일",
      "러시아",
      "스페인",
      "이탈리아",
      "프랑스",
    ],
    places: ["식당", "카페", "관광지", "숙소", "직접 입력"],
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
