<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div
        class="country__div"
        v-for="(img, country) in $store.state.countries"
        v-bind:key="country"
        v-on:click="selectCountry($event)"
      >
        <img
          class="country__img"
          v-bind:src="require('@/assets/images/' + img + '.png')"
          alt=""
        />
        <p class="country__name">{{ country }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "CountryView",
  data: () => ({}),
  components: {
    HeadComponent,
    NavComponent,
  },
  methods: {
    selectCountry(event) {
      console.log(event.currentTarget.querySelector("p").innerText);
      const text = event.currentTarget.querySelector("p").innerText;
      console.log(text);
      this.$store.dispatch("setCountry", text);
      // this.$emit("selectCountry", text);
      this.$router.push("place");
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
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 0 5vw;
}
.country__div {
  margin: 1rem;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  color: #fff;
  text-align: center;
  background-color: #00a886;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
}
.country__div:hover {
  cursor: pointer;
}
.country__img {
  margin-bottom: 0.5rem;
  width: 15vw;
  max-width: 5rem;
}
.country__name {
  font-size: 1.3rem;
}

@media (max-width: 576px) {
  .country__name {
    font-size: 5vw;
  }
}
</style>
