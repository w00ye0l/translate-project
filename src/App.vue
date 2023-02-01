<template>
  <div id="app">
    <router-view
      v-on:selectCountry="selectCountry"
      v-on:selectPlace="selectPlace"
      v-bind:propsCountry="country"
      v-bind:propsPlace="place"
    >
    </router-view>
    <!-- <p>{{ country }} | {{ place }}</p> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      country: "",
      place: "",
    };
  },
  methods: {
    selectCountry(country) {
      this.country = country;
      sessionStorage.setItem("country", this.country);
      // console.log("현재 저장된 나라 " + this.country);
    },
    selectPlace(place) {
      this.place = place;
      sessionStorage.setItem("place", this.place);
      // console.log("현재 저장된 장소 " + this.place);
    },
  },
};
</script>

<style scoped></style>
