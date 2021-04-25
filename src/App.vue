<template>
  <v-app>
    <v-app-bar app class="elevation-0" color="transparent" dark>
      <v-spacer></v-spacer>
      <div class="up">
        <div class="content">
          <h1>{{ logo }}</h1>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <v-container>
        <Experience />
      </v-container>
    </v-main>

    <v-navigation-drawer
      :width="'100px'"
      fab
      bottom
      clipped
      stateless
      permanent
      floating
      fixed
      class="transparent v-bottom-navigation--fixed"
    >
      <v-btn fab dark color="grey" class="mb-13" fixed bottom small>
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn fab dark color="blue" fixed bottom small>
        <v-icon>fab fa-facebook-f</v-icon>
      </v-btn>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
main {
  font-family: "Calibre", "San Francisco", "SF Pro Text", -apple-system,
    sans-serif;
}

.theme--dark.v-application .text--primary {
  color: rgba(255, 255, 255, 0.7) !important;
}

.theme--dark.v-application .text--secondary {
  color: #00c7ff !important;
}

.up {
  position: relative;
  width: 100%;
  max-width: 300px;
  min-height: 300px;
}

.up:before {
  width: 0;
  height: 0;
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-top: 180px solid #555;
}

.up .content {
  z-index: 10;
  position: relative;
  color: rgb(18, 18, 18);
  top: 40px;
  text-align: center;
  padding-top: 40px;
}

.up h1 {
  font-size: 88px;
}
</style>

<script>
import Experience from "./components/Experience";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    Experience,
    HelloWorld,
  },

  data: () => ({
    logo: "☺️",
    savandy: "SAVANDY",
    unicId: "article_" + Date.now(),
  }),
  methods: {
    repeatLogo() {
      let i = 0;
      let vm = this;
      let interval = setInterval(() => {
        vm.logo = vm.savandy.charAt(i);
        i++;
        if (i > vm.savandy.length) {
          i = 0;
          vm.logo = "☺️";
          clearInterval(interval);
          this.repeatLogo();
        }
      }, 500);
    },
  },
  mounted() {
    this.repeatLogo(this.logo, this.savandy);
  },
};
</script>
