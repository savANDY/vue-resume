<template>
  <v-card class="v-sheet--outlined" color="transparent" flat tile>
    <v-toolbar flat color="transparent" dark>
      <v-toolbar-title class="line-till-end d-flex align-center"
        >Experience</v-toolbar-title
      >
    </v-toolbar>
    <v-tabs vertical background-color="transparent" flat tile>
      <v-tab flat tile>
        <v-layout row>
          <v-flex xs12 class="d-flex justify-start">
            <v-icon left> far fa-handshake </v-icon>
            Certiorem
          </v-flex>
          <v-flex xs12 class="d-flex justify-end">
            <small> JUN 2018 - NOW</small>
          </v-flex>
        </v-layout>
      </v-tab>
      <v-tab>
        <v-layout row>
          <v-flex xs12 class="d-flex justify-start">
            <v-icon left> far fa-handshake </v-icon>
          Odd Panda Design
          </v-flex>
          <v-flex xs12 class="d-flex justify-end">
            <small> FEB 2018 - JUN 2018</small>
          </v-flex>
        </v-layout>
      </v-tab>
      <v-tab>
        <v-layout row>
          <v-flex xs12 class="d-flex justify-start">
            <v-icon left> far fa-handshake </v-icon>
            MP-Stor
          </v-flex>
          <v-flex xs12 class="d-flex justify-end">
            <small> FEB 2016 - JUN 2016</small>
          </v-flex>
        </v-layout>
      </v-tab>

      <v-tab-item flat tile class="transparent-body">
        <v-row no-gutters style="height: 150px">
          <v-col>
            <v-card flat class="pa-2" color="transparent">
              <v-card-text>
                <p>
                  Developing apps mainly dedicated for airports and insurance
                  companies.
                </p>

                <p>Something more to say...</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card flat class="pa-2" color="transparent">
              <v-card-text>
                <p>
                  I mainly work with these technologies/languages: <br />
                  Java, JavaScript, jQuery, PostgreSQL, VMware, Intellij Idea,
                  Jira, Oracle SQL, Java EE, spring framework, Maven, Jenkins,
                  CSS3, Spring MVC, TDD, Bootstrap, backbone, MongoDB,
                  websockets, activemq, meteor, bdd, atom, rest, api, kafka,
                  HTML5/CSS3, Node JS, ReactJS, Visual studio code, Spring
                  Boot...
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-card flat color="transparent"> </v-card>
      </v-tab-item>
      <v-tab-item flat tile class="transparent-body">
        <v-card flat color="transparent">
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
              egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam
              libero, non adipiscing dolor urna a orci. Curabitur ligula sapien,
              tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed
              turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque
              egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
              tortor. Proin viverra, ligula sit amet ultrices semper, ligula
              arcu tristique sapien, a accumsan nisi mauris ac eros. In hac
              habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra
              condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Nam commodo suscipit quam. In
              consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
              Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt
              libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum
              odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed,
              iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item flat tile class="transparent-body">
        <v-card flat color="transparent">
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
              Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec
              quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam
              at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<style>
.line-till-end::after {
  content: "";
  display: block;
  position: relative;
  top: 5px;
  width: 400px;
  height: 1px;
  margin-left: 20px;
  background-color: rgb(43, 60, 90);
}

.v-tab {
  border-left: 1px solid rgb(43, 60, 90);
}

.theme--dark.v-tabs > .v-tabs-bar {
  background-color: rgba(0, 0, 0, 0);
}

.theme--dark.v-tabs-items {
  background: transparent !important;
}
</style>

<script>
export default {
  name: "Experience",
};
</script>
