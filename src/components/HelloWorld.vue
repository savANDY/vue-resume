<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <h4 class="primary--text">Hi, this is</h4>
        <h1 class="display-2 font-weight-bold mb-2 grey--text text--darken-1">Valeriu Andrei Sanautanu</h1>
        <h1 class="display-2 font-weight-bold mb-3 grey--text text--darken-2">I am a web developer</h1>
        <p class="subheading font-weight-regular grey--text text--darken-2">
          I am a Romanian guy currently based in Spain (Basque Country),
          <br/>specialised in developing web applications.
          <br/><a href="https://certiorem.com" target="_blank">Certiorem</a> is my actual contractor, we
          are currently building
          <br/>an internal website for a life insurance company.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
            "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
