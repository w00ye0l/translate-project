<template>
  <div class="main">
    <div class="home tap1">
      <img class="logo" src="../assets/logo.png" alt="" />
      <h2 class="title">
        어디서든<br />자신감 있게<br />말할 수 있도록<br />도와주는 친구
      </h2>
      <router-link to="/country" class="btn">시작하기</router-link>
    </div>

    <div class="home tap2">
      <h1>tap2</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTap",
};
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
.logo {
  width: 15rem;
  height: 15rem;
  padding: 2rem;
  border-radius: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
}
.title {
  padding: 0 5rem;
  text-align: center;
}
.btn {
  padding: 1rem 2rem;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  background-color: #1c9c85;
  border-radius: 1rem;
  transition: 0.5s all;
}
.btn:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.tap2 {
  display: none;
}
</style>
