<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div class="translate__div">
        <p>{{ country }} | {{ place }}</p>
      </div>
      <!-- <p>{{ propsCountry }} | {{ propsPlace }}</p> -->
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "TranslateView",
  props: ["propsCountry", "propsPlace"],
  data: () => ({
    country: "",
    place: "",
  }),
  created() {
    this.country = localStorage.getItem("country");
    this.place = localStorage.getItem("place");
  },
  components: {
    HeadComponent,
    NavComponent,
  },
  methods: {},
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
