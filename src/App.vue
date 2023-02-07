<template>
  <div id="app">
    <router-view> </router-view>
    <Spinner v-if="this.$store.state.loadingStatus"></Spinner>
  </div>
</template>

<script>
import Spinner from "@/components/SpinnerComponent.vue";

export default {
  name: "App",
  components: {
    Spinner,
  },
  methods: {
    // selectCountry(country) {
    //   this.$store.state.country = country;
    //   sessionStorage.setItem("country", this.$store.state.country);
    // },
    // selectPlace(place) {
    //   this.$store.state.place = place;
    //   sessionStorage.setItem("place", this.$store.state.place);
    // },
  },
};
</script>

<style scoped></style>
