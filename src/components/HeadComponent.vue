<template lang="">
  <div class="header"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: relative;
  background-color: #1c9c85;
  color: aliceblue;
  height: 5rem;
}

.header::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 2rem;
  background-color: white;
  border-radius: 2rem 2rem 0 0;
}
</style>
