<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div class="img__div">
        <img class="img" src="../assets/images/wooyeol.jpg" alt="" />
      </div>

      <div class="info__div">
        <h1>제작자</h1>
        <hr style="width: 100%" />
        <h2 class="title"><span>프론트엔드</span> <br />개발자를 꿈꾸는</h2>
        <hr style="width: 100%" />
        <h1>이우열</h1>

        <div class="link__container">
          <a class="link" href="https://github.com/w00ye0l">
            <img src="../assets/images/github.png" alt="" />
            GitHub
          </a>
          <a class="link" href="https://w00ye0l.tistory.com/">
            <img src="../assets/images/tistory.png" alt="" />
            Tistory
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
  components: {
    HeadComponent,
    NavComponent,
  },
};
</script>

<style scoped>
.main {
  margin: 5rem auto;
  width: 60vw;
}
.img__div {
  margin: auto;
  width: 12rem;
  height: 12rem;
  overflow: hidden;
  border: 2px solid #08523f;
  border-radius: 50%;
}
.img {
  width: 100%;
  object-fit: cover;
}
.info__div {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.title span {
  color: #1c9c85;
}
.link__container {
  padding: 2rem;
  display: flex;
  gap: 30px;
  background-color: #1c9c85;
}
.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
}
.link img {
  width: 4rem;
  border-radius: 50%;
}
</style>
