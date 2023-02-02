<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div class="translate__div">
        <p>{{ country }} | {{ place }}</p>
      </div>
      <div class="translate__div">
        <!-- <p>{{ result }}</p> -->
        <p>result</p>
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
  props: ["propsCountry", "propsPlace"],
  data: () => ({
    country: "",
    place: "",
    result: "",
  }),
  created() {
    this.country = sessionStorage.getItem("country");
    this.place = sessionStorage.getItem("place");
    // this.getData();
  },
  components: {
    HeadComponent,
    NavComponent,
  },
  methods: {
    async getData() {
      const params = QueryString.stringify({
        source: "ko",
        target: "en",
        text: "안녕하세요.",
      });

      const config = {
        baseURL: "https://proxy.cors.sh/https://openapi.naver.com/v1",
        headers: {
          "x-cors-api-key": "temp_0a5af26e928255d482e7a5efdebeecca",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Naver-Client-Id": "2Rql9F4A4qbEI2DhUe2i",
          "X-Naver-Client-Secret": "QGlM99Zhql",
        },
      };

      try {
        await this.$axios
          .post("/papago/n2mt", params, config)
          .then((res) => {
            if (res.status == 200) {
              console.log(res.data.message.result.translatedText);
              this.result = res.data.message.result.translatedText;
            }
          })
          .catch((error) => {
            console.log("실패", error);
          });
      } catch (error) {
        console.log("실패", error);
      }
    },
  },
};
</script>

<style scoped>
.main {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.translate__div {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
}
</style>
