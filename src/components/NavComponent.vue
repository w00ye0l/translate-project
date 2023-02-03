<template>
  <div class="nav">
    <div v-on:click="$router.go(-1)">
      <p>뒤로</p>
    </div>
    <img class="logo" src="../assets/logo.png" alt="" />
    <div>
      <p>더보기</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.logo {
  width: 5rem;
  height: 5rem;
}
</style>
