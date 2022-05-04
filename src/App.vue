<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>NTPU Tool</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/" icon>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn href="/covid" icon>
        <v-icon>mdi-database</v-icon>
      </v-btn>

      <v-btn href="/about" icon>
        <v-icon>help_outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center">
              <router-view></router-view>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer padless class="font-weight-medium">
      <v-col class="text-center" cols="12" style="font-size: 14px">
        &copy; {{ new Date().getFullYear() }} Copyright
        <a href="https://littlechintw.github.io">littlechintw.github.io</a>. All
        rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
};
</script>

<style>
@font-face {
  font-family: "HunInn";
  src: url(https://cdn.jsdelivr.net/gh/marsnow/open-huninn-font@1.1/font/jf-openhuninn.eot); /* IE9 Compat Modes */
  src: url(https://cdn.jsdelivr.net/gh/marsnow/open-huninn-font@1.1/font/jf-openhuninn.eot?#iefix)
      format("embedded-opentype"),
    /* IE6-IE8 */
      url(https://cdn.jsdelivr.net/gh/marsnow/open-huninn-font@1.1/font/jf-openhuninn.woff)
      format("woff"),
    /* Modern Browsers */
      url(https://cdn.jsdelivr.net/gh/marsnow/open-huninn-font@1.1/font/jf-openhuninn.ttf)
      format("truetype"),
    /* Safari, Android, iOS */
      url(https://cdn.jsdelivr.net/gh/marsnow/open-huninn-font@1.1/font/jf-openhuninn.svg#SealmemoryHeader)
      format("svg"); /* Legacy iOS */
}
</style>