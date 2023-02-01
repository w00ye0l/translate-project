<template>
  <div class="nav">
    <div>
      <p>화살표</p>
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
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  transform: translate(-50%, -20%);
}
.logo {
  width: 5rem;
  height: 5rem;
}
</style>
