<template>
  <v-card
    class="v-sheet--outlined"
    color="transparent"
    flat
    tile
    id="birdContainer"
  >
    <v-row>
      <v-col class="mb-4">
        <v-card flat tile class="d-flex justify-center" color="transparent">
          <v-card flat tile color="transparent" class="savandy"
          v-tilt
          >
            <h4 class="blue--text text--lighten-4">Hi, this is</h4>
            <h1
              class="display-2 font-weight-bold mb-2 grey--text text--lighten-3 header-primary-text"
            >
              Valeriu Andrei Sanautanu
            </h1>
            <h1
              class="display-2 font-weight-bold mb-3 grey--text text--lighten-1"
            >
              I am a web developer
            </h1>
            <p class="subheading font-weight-regular grey--text text--lighten-1">
              I am a Romanian guy currently based in Spain (Basque Country),
              <br />specialised in developing web applications. <br /><a
                href="https://certiorem.com"
                target="_blank"
                >Certiorem</a
              >
              is my actual contractor, we are currently building <br />an
              internal website for a life insurance company.
            </p>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <div class="bird-container bird-container--one">
      <div class="bird bird--one"></div>
    </div>
    <div class="bird-container bird-container--two">
      <div class="bird bird--two"></div>
    </div>
    <div class="bird-container bird-container--three">
      <div class="bird bird--three"></div>
    </div>
    <div class="bird-container bird-container--four">
      <div class="bird bird--four"></div>
    </div>
  </v-card>
</template>

<style lang="scss">
.vuetify-class {
  ::v-deep .header-primary-text {
    color: #00ffba !important;
    letter-spacing: -3px !important;
    text-shadow: -4px -1px 14px rgb(0 0 0 / 60%);
    position: relative;
  }
}
</style>
<style>
#birdContainer {
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 35rem;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 168, 76, 0.6)),
      to(rgba(255, 123, 13, 0.6))
    ),
    url("../assets/lake-fishing.jpg");
  background-image: linear-gradient(
      to bottom,
      rgba(255, 168, 76, 0.6) 0%,
      rgba(255, 123, 13, 0.6) 100%
    ),
    url("../assets/lake-fishing.jpg");
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center center;
  padding: 2rem;
}
.bird {
  background-image: url(http://www.iamramraj.com/demo/Flying_birds_CSS_animation_examples/bird-cells.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;
  -webkit-animation-name: fly-cycle;
  animation-name: fly-cycle;
  -webkit-animation-timing-function: steps(10);
  animation-timing-function: steps(10);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.bird--one {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.bird--two {
  -webkit-animation-duration: 0.9s;
  animation-duration: 0.9s;
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.bird--three {
  -webkit-animation-duration: 1.25s;
  animation-duration: 1.25s;
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.bird--four {
  -webkit-animation-duration: 1.1s;
  animation-duration: 1.1s;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.bird-container {
  position: absolute;
  top: 20%;
  left: -7.5vw;
  -webkit-transform: scale(0);
  transform: scale(0);
  will-change: transform;
  -webkit-animation-name: fly-right-one;
  animation-name: fly-right-one;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.bird-container--one {
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
  -webkit-animation-delay: 0;
  animation-delay: 0;
}
.bird-container--two {
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.bird-container--three {
  -webkit-animation-duration: 14.6s;
  animation-duration: 14.6s;
  -webkit-animation-delay: 9.5s;
  animation-delay: 9.5s;
}
.bird-container--four {
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  -webkit-animation-delay: 10.25s;
  animation-delay: 10.25s;
}
@-webkit-keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}
@keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}
@-webkit-keyframes fly-right-one {
  0% {
    left: -10%;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }
  10% {
    left: 10%;
    -webkit-transform: translateY(2vh) scale(0.4);
    transform: translateY(2vh) scale(0.4);
  }
  20% {
    left: 30%;
    -webkit-transform: translateY(0vh) scale(0.5);
    transform: translateY(0vh) scale(0.5);
  }
  30% {
    left: 50%;
    -webkit-transform: translateY(4vh) scale(0.6);
    transform: translateY(4vh) scale(0.6);
  }
  40% {
    left: 70%;
    -webkit-transform: translateY(2vh) scale(0.6);
    transform: translateY(2vh) scale(0.6);
  }
  50% {
    left: 90%;
    -webkit-transform: translateY(0vh) scale(0.6);
    transform: translateY(0vh) scale(0.6);
  }
  60% {
    left: 110%;
    -webkit-transform: translateY(0vh) scale(0.6);
    transform: translateY(0vh) scale(0.6);
  }
  100% {
    left: 110%;
    opacity: 1;
    -webkit-transform: translateY(0vh) scale(0.6);
    transform: translateY(0vh) scale(0.6);
  }
}
@keyframes fly-right-one {
  0% {
    left: -10%;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }
  10% {
    left: 10%;
    -webkit-transform: translateY(2vh) scale(0.4);
    transform: translateY(2vh) scale(0.4);
  }
  20% {
    left: 30%;
    -webkit-transform: translateY(0vh) scale(0.5);
    transform: translateY(0vh) scale(0.5);
  }
  30% {
    left: 50%;
    -webkit-transform: translateY(4vh) scale(0.6);
    transform: translateY(4vh) scale(0.6);
  }
  40% {
    left: 70%;
    -webkit-transform: translateY(2vh) scale(0.6);
    transform: translateY(2vh) scale(0.6);
  }
  50% {
    left: 90%;
    -webkit-transform: translateY(0vh) scale(0.6);
    transform: translateY(0vh) scale(0.6);
  }
  60% {
    left: 110%;
    -webkit-transform: translateY(0vh) scale(0.6);
    transform: translateY(0vh) scale(0.6);
  }
  100% {
    left: 110%;
    opacity: 1;
    -webkit-transform: translateY(0vh) scale(0.6);
    transform: translateY(0vh) scale(0.6);
  }
}
@-webkit-keyframes fly-right-two {
  0% {
    left: -10%;
    opacity: 1;
    -webkit-transform: translateY(-2vh) scale(0.5);
    transform: translateY(-2vh) scale(0.5);
  }
  10% {
    left: 10%;
    -webkit-transform: translateY(0vh) scale(0.4);
    transform: translateY(0vh) scale(0.4);
  }
  20% {
    left: 30%;
    -webkit-transform: translateY(-4vh) scale(0.6);
    transform: translateY(-4vh) scale(0.6);
  }
  30% {
    left: 50%;
    -webkit-transform: translateY(1vh) scale(0.45);
    transform: translateY(1vh) scale(0.45);
  }
  40% {
    left: 70%;
    -webkit-transform: translateY(-2.5vh) scale(0.5);
    transform: translateY(-2.5vh) scale(0.5);
  }
  50% {
    left: 90%;
    -webkit-transform: translateY(0vh) scale(0.45);
    transform: translateY(0vh) scale(0.45);
  }
  51% {
    left: 110%;
    -webkit-transform: translateY(0vh) scale(0.45);
    transform: translateY(0vh) scale(0.45);
  }
  100% {
    left: 110%;
    -webkit-transform: translateY(0vh) scale(0.45);
    transform: translateY(0vh) scale(0.45);
  }
}
@keyframes fly-right-two {
  0% {
    left: -10%;
    opacity: 1;
    -webkit-transform: translateY(-2vh) scale(0.5);
    transform: translateY(-2vh) scale(0.5);
  }
  10% {
    left: 10%;
    -webkit-transform: translateY(0vh) scale(0.4);
    transform: translateY(0vh) scale(0.4);
  }
  20% {
    left: 30%;
    -webkit-transform: translateY(-4vh) scale(0.6);
    transform: translateY(-4vh) scale(0.6);
  }
  30% {
    left: 50%;
    -webkit-transform: translateY(1vh) scale(0.45);
    transform: translateY(1vh) scale(0.45);
  }
  40% {
    left: 70%;
    -webkit-transform: translateY(-2.5vh) scale(0.5);
    transform: translateY(-2.5vh) scale(0.5);
  }
  50% {
    left: 90%;
    -webkit-transform: translateY(0vh) scale(0.45);
    transform: translateY(0vh) scale(0.45);
  }
  51% {
    left: 110%;
    -webkit-transform: translateY(0vh) scale(0.45);
    transform: translateY(0vh) scale(0.45);
  }
  100% {
    left: 110%;
    -webkit-transform: translateY(0vh) scale(0.45);
    transform: translateY(0vh) scale(0.45);
  }
}
</style>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
