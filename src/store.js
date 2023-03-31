import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["country", "place", "talkList"],
    }),
  ],
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
      "en", // O
      "ja", // O
      "zh-CN", // O
      "vi", // X
      "id", // O
      "th", // X
      "de", // O
      "ru", // O
      "es", // O
      "it", // O
      "fr", // O
    ],
    loadingStatus: false,
    talkList: {},
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
    STORE_COUNTRY(state, payload) {
      state.country = payload;
    },
    STORE_PLACE(state, payload) {
      state.place = payload;
    },
    STORE_TALKLIST(state, payload) {
      state.talkList = payload;
    },
  },
  actions: {
    setCountry(context, country) {
      context.commit("STORE_COUNTRY", country);
    },
    setPlace(context, place) {
      context.commit("STORE_PLACE", place);
    },
    setCountryTalkList(context, val) {
      context.commit("STORE_COUNTRY", val);
      const state = this.state;

      let lang = state.countries[state.country];
      let place = state.places[state.place];
      let file = `${lang}_${place}.json`;

      axios
        .get(`./translate/${file}`)
        .then((res) => {
          // console.log(res.data);
          context.commit("STORE_TALKLIST", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setPlaceTalkList(context, val) {
      context.commit("STORE_PLACE", val);
      const state = this.state;

      let lang = state.countries[state.country];
      let place = state.places[state.place];
      let file = `${lang}_${place}.json`;

      axios
        .get(`./translate/${file}`)
        .then((res) => {
          // console.log(res.data);
          context.commit("STORE_TALKLIST", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getCountry(state) {
      return state.country;
    },
    getPlace(state) {
      return state.place;
    },
    getTalkList(state) {
      return state.talkList;
    },
  },
});
