<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div
        class="place__div"
        v-for="place in places"
        v-bind:key="place"
        v-on:click="selectPlace($event)"
      >
        <p>{{ place }}</p>
      </div>
      <!-- <p>{{ propsCountry }} | {{ propsPlace }}</p> -->
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "PlaceView",
  props: ["propsCountry", "propsPlace"],
  data: () => ({
    places: ["식당", "카페", "관광지", "숙소", "직접 입력"],
  }),
  components: {
    HeadComponent,
    NavComponent,
  },
  methods: {
    selectPlace(event) {
      const text = event.target.innerText;
      console.log(text);
      this.$emit("selectPlace", text);
      this.$router.push("translate");
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
.place__div {
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
