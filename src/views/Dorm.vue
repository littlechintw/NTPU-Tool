<template>
  <div class="home">
    <v-card class="mx-auto" width="344">
      <v-container fluid>
        <v-row>
          <v-col cols="12" >
            <v-row align="center" justify="center" length>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="id" :rules="idRules" type="number" label="學號" required></v-text-field>
                <p style="font-size: 12px;color: gray;">此頁面已用特殊方式鎖上ww</p>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">查詢</v-btn>
              </v-form>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br>
    <v-card class="mx-auto" width="344" elevation="5">
      <v-container fluid>
        <v-row>
          <v-col cols="12" align="center">
            <v-row align="center" justify="center" length>
                <br>
            </v-row>
            <v-row align="center" justify="center" length>
                <p style="font-size: 20px;">{{ dorm_status_data_detail }}</p>
            </v-row>
            <v-row align="center" justify="center" length>
                <p style="color:#646464;font-size: 20px;">{{ dorm_status }}</p>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Dorm',
  components: {
    // LoginForm
  },
  data: () => ({
    valid: true,
    id: '',
    idRules: [
      v => !!v || '請輸入學號',
      v => (v && v.length === 9) || '請輸入學號正確格式',
    ],
    dorm_status: 'Waiting...',
    dorm_status_data_detail: '',
  }),

  methods: {
    validate () {
      this.dorm_status = 'Loading...'
      this.dorm_status_data_detail = ''
      this.get_dorm_status()
    },
    get_dorm_status(){
      console.log("You just sent a request to get dorm status!")
      let url = 'https://235f408ccbae.ngrok.io/dorm/detail'
      this.$http.post(url, {
        user_id:this.id,
        access_code: this.$cookie.get('access_code')
      })
      .then((response) => {
        if(response.body.message.status_code == "1"){
          this.dorm_status = response.body.message.status
          this.dorm_status_data_detail = response.body.message.name
        }
        else if(response.body.message.status_code == "0"){
          this.dorm_status = response.body.message.status
          this.dorm_status_data_detail = response.body.message.name
        }
        else
          this.dorm_status = "存取時發生錯誤"
      })
      .catch(() => {
        this.dorm_status = "無法載入，或是你就不能存取阿ㄎㄎ。"
        console.log('Got some errors!!')
      })
    }
  },

  created: function () {

  }
}
</script>
