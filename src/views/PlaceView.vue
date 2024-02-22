<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div class="place__container">
        <div
          class="place__div select"
          v-for="(icon, place) in $store.state.places"
          v-bind:key="place"
          v-on:click="selectPlace($event)"
        >
          <div class="icon__container">
            <font-awesome-icon
              class="place__icon"
              :icon="['fas', icon]"
              size="xl"
            />
          </div>
          <p class="place__name">{{ place }}</p>
        </div>
      </div>

      <div class="place__div self" v-on:click="translateSelf()">
        <p class="place__name">직접 입력</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "PlaceView",
  data: () => ({}),
  components: {
    HeadComponent,
    NavComponent,
  },
  methods: {
    selectPlace(event) {
      const text = event.currentTarget.querySelector("p").innerText;
      // console.log(text);
      // this.$store.dispatch("setPlace", text);
      this.$store.dispatch("setPlaceTalkList", text);
      // this.$emit("selectPlace", text);
      this.$router.push("talk");
    },
    translateSelf() {
      this.$router.push("translate");
    },
  },
};
</script>

<style scoped>
.main {
  margin: 2rem auto;
  width: 70vw;
  max-width: 1200px;
}
.place__container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 0 5vw;
}
.place__div {
  margin: 1rem 0;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #00a886;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
}
.select {
  width: 100%;
}
.self {
  width: 100%;
  height: 7rem;
}
.place__div:hover {
  cursor: pointer;
}
.icon__container {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background-color: #fff;
  border-radius: 50%;
}
.place__icon {
  color: #005c3e;
  font-size: 2rem;
}
.place__name {
  font-size: 1.3rem;
}

@media (min-width: 992px) {
  .place__icon {
    font-size: 3rem;
  }
  .icon__container {
    width: 5rem;
    height: 5rem;
  }
  .self {
    height: 9rem;
  }
  .place__name {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .place__div {
    margin: 4vw auto;
  }
  .place__name {
    font-size: 6vw;
  }
}
</style>
