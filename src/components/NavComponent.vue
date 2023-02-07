<template>
  <div class="nav">
    <div v-on:click="$router.go(-1)">
      <!-- <font-awesome-icon icon="fa-solid fa-arrow-left" /> -->
      <font-awesome-icon
        class="nav-icon"
        :icon="['fas', 'arrow-left']"
        size="xl"
      />
      <!-- <font-awesome-icon class="fa-2x" icon="fa-arrow-left" /> -->
    </div>

    <img class="logo" src="../assets/images/logo.png" alt="" />

    <div v-on:click="$router.push('developer')">
      <!-- <font-awesome-icon class="fa-2x" icon="fa-bars" /> -->
      <font-awesome-icon
        v-show="currentRouteName !== 'developer'"
        class="nav-icon"
        :icon="['fas', 'bars']"
        size="xl"
      />
      <!-- <font-awesome-icon icon="fa-solid fa-bars" /> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.logo {
  width: 3rem;
  height: 3rem;
}
.nav-icon:hover {
  cursor: pointer;
}
</style>
