<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <div class="select__container">
        <select class="select__option" v-model="countrySelected">
          <option value="" hidden disabled>
            {{ getCountry }}
          </option>
          <option
            class="option"
            v-for="(key, country) in this.$store.state.countries"
            v-bind:key="country"
            v-bind:value="country"
          >
            {{ country }}
          </option>
        </select>

        <select class="select__option" v-model="placeSelected">
          <option value="" hidden disabled>
            {{ getPlace }}
          </option>
          <option
            class="option"
            v-for="(key, place) in this.$store.state.places"
            v-bind:key="place"
            v-bind:value="place"
          >
            {{ place }}
          </option>
        </select>
      </div>

      <div
        class="talk__div"
        v-for="(value, key) in getTalkList"
        v-bind:key="key"
      >
        <div class="result">
          <p class="korean__text">{{ key }}</p>
          <p class="foreign__text">{{ value }}</p>
        </div>

        <div class="icon__container">
          <div class="icon__div" v-on:click="copyClipboard(value)">
            <font-awesome-icon
              class="clipboard__icon"
              :icon="['fas', 'clipboard']"
            />
          </div>
          <div class="icon__div" v-on:click="g_gout">
            <font-awesome-icon
              class="play__icon"
              :icon="['fas', 'volume-high']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "TalkView",
  data: () => ({
    countrySelected: "",
    placeSelected: "",
    voices: [],
  }),
  components: {
    HeadComponent,
    NavComponent,
  },
  mounted() {
    this.voices = window.speechSynthesis.getVoices();
  },
  methods: {
    copyClipboard(value) {
      const text = value;
      // console.log(text);

      this.$copyText(text).then(() => {
        alert("복사 완료");
      });
    },

    setVoiceList() {
      this.voices = window.speechSynthesis.getVoices();
    },

    speech(text) {
      if (!window.speechSynthesis) {
        alert("음성 재생을 지원하지 않는 브라우저입니다.");
        return;
      }

      let lang = "";

      if (this.$store.state.countries[this.getCountry] == "en") {
        lang = "en-US";
      } else if (this.$store.state.countries[this.getCountry] == "ja") {
        lang = "ja-JP";
      } else if (this.$store.state.countries[this.getCountry] == "zh-CN") {
        lang = "zh-CN";
      } else if (this.$store.state.countries[this.getCountry] == "id") {
        lang = "id-ID";
      } else if (this.$store.state.countries[this.getCountry] == "de") {
        lang = "de-DE";
      } else if (this.$store.state.countries[this.getCountry] == "ru") {
        lang = "ru-RU";
      } else if (this.$store.state.countries[this.getCountry] == "es") {
        lang = "es-ES";
      } else if (this.$store.state.countries[this.getCountry] == "it") {
        lang = "it-IT";
      } else if (this.$store.state.countries[this.getCountry] == "fr") {
        lang = "fr-FR";
      } else {
        lang = "en-US";
      }

      const utterThis = new SpeechSynthesisUtterance(text);

      // utterThis.onend = (e) => {
      //   console.log("end", e);
      // };

      utterThis.onerror = (e) => {
        console.log("err", e);
      };

      let voiceFound = false;

      // console.log(this.voices);

      for (let i = 0; i < this.voices.length; i++) {
        if (
          this.voices[i].lang.indexOf(lang) >= 0 ||
          this.voices[i].lang.indexOf(lang.replace("-", "_")) >= 0
        ) {
          utterThis.voice = this.voices[i];
          voiceFound = true;
        }
      }

      if (!voiceFound) {
        alert("voice not found");
        return;
      }

      utterThis.lang = lang;
      utterThis.pitch = 1;
      utterThis.rate = 1;

      window.speechSynthesis.speak(utterThis);
    },

    g_gout(event) {
      const text = event.currentTarget.parentElement.parentElement
        .querySelector(".result")
        .querySelector(".foreign__text").innerText;
      // console.log(text);

      this.setVoiceList();

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = this.setVoiceList();
      }

      this.speech(text);
    },
  },
  computed: {
    getCountry() {
      return this.$store.getters.getCountry;
    },
    getPlace() {
      return this.$store.getters.getPlace;
    },
    getTalkList() {
      return this.$store.getters.getTalkList;
    },
  },
  watch: {
    countrySelected(val) {
      // this.$store.dispatch("setCountry", val);
      this.result = this.$store.dispatch("setCountryTalkList", val);
    },
    placeSelected(val) {
      // this.$store.dispatch("setPlace", val);
      this.result = this.$store.dispatch("setPlaceTalkList", val);
    },
  },
};
</script>

<style scoped>
.main {
  margin: 2rem auto;
  width: 70vw;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.select__container {
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5vw;
}
.select__option {
  padding: 0.3rem;
  max-width: 10rem;
  width: 30vw;
  font-size: 1rem;
  color: #08523f;
  background-color: #b4e1d9;
  border: 0;
  border-radius: 10px;
}
.talk__div {
  margin: 1rem auto;
  padding: 1rem;
  width: 100%;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 0 10px 1px #b4e1d9;
  border-radius: 20px;
}
.korean__text {
  font-size: 5vw;
}
.foreign__text {
  font-size: 7vw;
  color: #1c9c85;
}
.icon__container {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
.icon__div {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #08523f;
  color: #fff;
  border-radius: 50%;
}
.icon__div:hover {
  cursor: pointer;
  background-color: #1c9c85;
}

@media (min-width: 992px) {
  .korean__text {
    font-size: 1.5rem;
  }
  .foreign__text {
    font-size: 2rem;
    font-weight: bold;
  }
  .icon__div {
    width: 50px;
    height: 50px;
    font-size: 25px;
  }
}
</style>
