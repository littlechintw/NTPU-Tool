<template>
  <div class="admin">
    <v-card class="mx-auto" width="344">
      <v-container fluid>
        <v-row>
          <v-col cols="12" >
            <v-row align="center" justify="center" length>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="id" label="通行碼" required></v-text-field>
                <v-btn color="success" class="mr-4" @click="validate">登入</v-btn>
              </v-form>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// import LoginForm from '@/components/LoginForm.vue'
import md5 from 'js-md5';
export default {
  name: 'Admin',
  components: {
    // LoginForm
  },
  data: () => ({
    id: '',
  }),

  methods: {
    validate () {
      var salt = md5(this.id)
      alert('Maybe u r ADMIN?')
      alert(salt)
      this.$cookie.set('access_code', salt, 30);
    },
  },

  created: function () {

  }
}
</script>
