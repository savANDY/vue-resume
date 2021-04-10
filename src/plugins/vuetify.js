import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import en from "vuetify/es5/locale/en";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#607d8b",
        secondary: "#ffc107",
        accent: "#00bcd4",
        error: "#f44336",
        warning: "#ff5722",
        info: "#03a9f4",
        success: "#8bc34a",
      },
      dark: {
        primary: "#00c7ff",
        secondary: "#ffc107",
        accent: "#00bcd4",
        error: "#f44336",
        warning: "#ff5722",
        info: "#03a9f4",
        success: "#8bc34a",
      },
    },
  },
  lang: {
    locales: { en },
    current: "es",
  },
  icons: {
    iconfont: "fa",
  },
});
