<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div
        class="country__div"
        v-for="country in countries"
        v-bind:key="country"
        v-on:click="selectCountry($event)"
      >
        <p>{{ country }}</p>
      </div>
      <!-- <p>{{ propsCountry }} | {{ propsPlace }}</p> -->
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "CountryView",
  props: ["propsCountry", "propsPlace"],
  data: () => ({
    countries: ["미국", "일본", "중국", "영국", "태국"],
  }),
  components: {
    HeadComponent,
    NavComponent,
  },
  methods: {
    selectCountry(event) {
      const text = event.target.innerText;
      console.log(text);
      this.$emit("selectCountry", text);
      this.$router.push("place");
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
.country__div {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 5rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
}
</style>
