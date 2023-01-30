<template>
  <div>
    <div class="tap1" v-on:mousedown="mouseDown">
      <img src="../assets/logo.png" alt="" />
      <h1>어디서든 자신감 있게 말할 수 있도록 도와주는 친구</h1>
      <router-link to="/country">시작하기</router-link>
    </div>

    <div class="tap2">
      <h2>tap2</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTap",
  // setup() {
  //   function mouseDown() {
  //     window.addEventListener("mousemove", mouseMove);
  //     window.addEventListener("mouseup", mouseUp);
  //   }

  //   function mouseMove(e) {
  //     console.log(e);
  //   }

  //   function mouseUp() {
  //     window.removeEventListener("mousemove", mouseMove);
  //     window.removeEventListener("mouseup", mouseUp);
  //   }

  //   return { mouseDown, mouseMove, mouseUp };
  // },
};
</script>

<style scoped></style>
