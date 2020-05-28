<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>NTPU Tool</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/" icon>
        <v-icon>home</v-icon>
      </v-btn>
      
      <v-btn href="about" icon>
        <v-icon>help_outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12" style="font-size: 3vw;">
        &copy; {{ new Date().getFullYear() }} Copyright <a href='https://littlechintw.github.io'>littlechintw.github.io</a>. All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
