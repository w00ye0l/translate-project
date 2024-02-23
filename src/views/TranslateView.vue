<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div class="select__container">
        <select class="select__country" v-model="countrySelected">
          <option value="" hidden disabled>
            {{ getCountry }}
          </option>
          <option
            v-for="(key, country) in this.$store.state.countries"
            v-bind:key="country"
            v-bind:value="country"
          >
            {{ country }}
          </option>
        </select>
      </div>

      <div class="translate__container">
        <label class="subtitle" for="">한국에서는 이렇게</label>
        <textarea
          rows="10"
          class="translate__obj input__textarea"
          v-model="input"
          placeholder="번역할 문장을 입력해주세요."
        ></textarea>
      </div>

      <button class="translate__btn" v-on:click="getData()">번역하기</button>

      <div class="translate__container">
        <label class="subtitle" for=""
          >{{ this.$store.state.country }}에서는 이렇게</label
        >
        <div class="translate__obj">
          <p class="result__p">{{ result }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import QueryString from "qs";

export default {
  name: "TranslateView",
  data: () => ({
    countrySelected: "",
    placeSelected: "",
    input: "",
    result: "",
  }),
  components: {
    HeadComponent,
    NavComponent,
  },
  computed: {
    getCountry() {
      return this.$store.getters.getCountry;
    },
    getPlace() {
      return this.$store.getters.getPlace;
    },
  },
  watch: {
    countrySelected(val) {
      this.$store.dispatch("setCountry", val);
    },
    placeSelected(val) {
      this.$store.dispatch("setPlace", val);
    },
  },
  methods: {
    async getData() {
      const params = QueryString.stringify({
        source: "ko",
        target: this.$store.state.countries[this.getCountry],
        text: this.input,
      });

      const config = {
        baseURL: "/api",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Naver-Client-Id": process.env.VUE_APP_X_NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.VUE_APP_X_NAVER_CLIENT_SECRET,
        },
      };

      try {
        this.$store.commit("startSpinner");
        // console.log(this.$store.state.loadingStatus);
        await this.$axios
          .post("/papago/n2mt", params, config)
          .then((res) => {
            this.$store.commit("endSpinner");
            // console.log(this.$store.state.loadingStatus);
            if (res.status == 200) {
              console.log(res.data.message.result.translatedText);
              this.result = res.data.message.result.translatedText;
            }
          })
          .catch((err) => {
            console.log("실패", err);
            this.$store.commit("endSpinner");
            // console.log(this.$store.state.loadingStatus);
          });
      } catch (err) {
        console.log("실패", err);
        this.$store.commit("endSpinner");
        // console.log(this.$store.state.loadingStatus);
      }
    },
  },
};
</script>

<style scoped>
.main {
  margin: 2rem auto;
  width: 70vw;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.select__container {
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5vw;
}
.select__country {
  padding: 0.3rem;
  max-width: 10rem;
  width: 30vw;
  font-size: 1rem;
  color: #08523f;
  background-color: #b4e1d9;
  border: 0;
  border-radius: 10px;
}
.translate__container {
  padding: 0.5rem 1rem;
  width: 100%;
}
.subtitle {
  font-size: 20px;
  font-weight: bold;
}
.translate__obj {
  margin-top: 1rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
}
.input__textarea {
  border: 0;
  resize: none;
  font-size: 16px;
}
.translate__btn {
  margin: 2rem 0;
  padding: 0.8rem;
  width: 10rem;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #1c9c85;
  border: 0;
  border-radius: 2rem;
}
.result__p {
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  font-size: 20px;
}
</style>
