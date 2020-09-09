<template>
  <div class="home">
    <div class="form" v-show="form_show">
      <v-card class="mx-auto" width="344">
        <v-container fluid>
          <v-row>
            <v-col cols="12" >
              <v-row align="center" justify="center" length>
                  <h1>學生會活動防疫登入</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="id" :rules="idRules" type="number" label="學號 / Student ID" required></v-text-field>
                  <v-text-field v-model="name" :rules="idName" label="姓名 / Name" required></v-text-field>
                  <v-checkbox v-model="checkbox_self" :rules="[v => !!v || 'You must agree to continue!']" label="確定這個學號是自己的嗎？" required></v-checkbox>
                  <v-checkbox v-model="checkbox_law" :rules="[v => !!v || 'You must agree to continue!']" label="同意以下規定" required></v-checkbox>
                  <p style="font-size: 12px;color: gray;">本資料僅用於防疫需要，不會用於他處。</p>
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">送出</v-btn>
                  <p style="font-size: 12px;color: red;">{{ error_msg }}</p>
                </v-form>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
    <div class="qrcode" v-show="result_show">
      <v-card class="mx-auto" width="344" elevation="5">
        <v-container fluid>
          <v-row>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center" length>
                  <v-icon>done</v-icon>
                  <h1>成功登入防疫資訊！</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                  <h2 style="color: blue;">{{ id }} - {{ name }}</h2>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                  <h7 style="font-size: 10px;color: gray;">{{ time_get }}</h7>
              </v-row>
              <v-row align="center" justify="center" length>
                  <h7 style="font-size: 10px;color: gray;">{{ uuid_get }}</h7>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                  <h4>請將本畫面交予工作人員查看，您也可使用截圖功能儲存。</h4>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
// import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
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
    idName: [
      v => !!v || '請輸入姓名',
    ],
    select: null,
    checkbox_self: false,
    result_show: false,
    form_show: true,
    barcode_option:{
        displayValue: false,
        background: '#fff',
        width: '2px',
        height: '30px',
        fontSize: '10px'
    },
    error_msg: '',
    uuid_get: '',
    time_get: '',
  }),

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        this.error_msg = "載入中..."
        let url = 'https://235f408ccbae.ngrok.io/su/rns'
        this.$http.post(url, {uuid:this.id,name:this.name})
        .then((response) => {
          if(response.body.code == "200"){
            this.error_msg = ""
            this.uuid_get = response.body.message.uuid
            this.time_get = response.body.message.timestamp
            this.result_show = true
            this.form_show = false
          }
          else
            this.error_msg = "存取時發生錯誤，或輸入資料發生問題，請重新送出"
        })
        .catch(() => {
          this.error_msg = "無法載入，請重新送出"
          console.log('Got some errors!!')
        })
      }
    },
  },

  created: function () {
    // if(this.$cookie.get('userid')){
    //   this.id = this.$cookie.get('userid')
    //   this.qrcode_show = true
    //   this.form_show = false
    //   this.get_dorm_status()
    // }
  }
}
</script>
