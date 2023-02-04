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
/* body {
} */
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c9c85;
  background: linear-gradient(140deg, #28d8b8, #8bada7e8);
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
  box-shadow: 0 0 20px #ffffff;
  background-color: #fff;
}
.title {
  padding: 0 5rem;
  text-align: center;
  color: #0a3f35;
}
.btn {
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  background: linear-gradient(to left, #0d6152, #18816ee5);
  box-shadow: 0 0 5px #0a3f35e5;
  border-radius: 2rem;
  transition: all 0.5s;
}
.btn:hover {
  box-shadow: 0 0 10px #0a3f35e5;
}
.tap2 {
  display: none;
}
</style>
