<template>
  <div class="home">
    <div class="form" v-show="form_show">
      <v-card class="mx-auto" width="344">
        <v-container fluid>
          <v-row>
            <v-col cols="12" >
              <v-row align="center" justify="center" length>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="id" :rules="idRules" type="number" label="學號" required></v-text-field>
                  <v-checkbox v-model="checkbox_self" :rules="[v => !!v || 'You must agree to continue!']" label="確定這個學號是自己的嗎？" required></v-checkbox>
                  <v-checkbox v-model="checkbox_law" :rules="[v => !!v || 'You must agree to continue!']" label="同意服務條款" required></v-checkbox>
                  <p style="font-size: 12px;color: gray;">相關條款可點選右上角問號按鈕查看</p>
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">登入</v-btn>
                </v-form>
              </v-row>
              <!-- <v-row align="center" justify="left" length>
                <div class="warning">
                  <h3>本系統僅作為方便使用，請記得還是要攜帶學生證，如有發生盜用他人學號等情事，本系統不負任何責任，應由當事人自行承擔</h3>
                </div>
              </v-row> -->
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
    <div class="qrcode" v-show="qrcode_show">
      <v-card class="mx-auto" width="344" elevation="5">
        <v-container fluid>
          <v-row>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center" length>
                  <h1>防疫登入</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                  <qr-code :text="id"></qr-code>
              </v-row>
              <v-row align="center" justify="center" length>
                  <barcode :value="id" :options="barcode_option"></barcode>
              </v-row>
              <!-- <v-row align="center" justify="center" length>
                  <h3>{{ id }}</h3>
              </v-row> -->
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
                  <h1>宿舍抽籤資訊</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                  <p style="font-size: 22px;">☞ {{ dorm_status }} ☜</p>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                  <p style="color:#646464;font-size: 13px;">{{ dorm_status_data_detail }}</p>
                  <a :href=dorm_status_data_detail_url style="color:#646464;font-size: 13px;" target="_blank">{{ dorm_status_data_detail_url }}</a>
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
                  <v-btn color="success" class="mr-4" @click="reset_form">重新輸入</v-btn>
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
    select: null,
    checkbox_self: false,
    checkbox_law: false,
    qrcode_show: false,
    form_show: true,
    barcode_option:{
        displayValue: false,
        background: '#fff',
        width: '2px',
        height: '30px',
        fontSize: '10px'
    },
    dorm_status: '載入中...',
    dorm_status_data_detail: '',
    dorm_status_data_detail_url: '',
  }),

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        this.qrcode_show = true
        this.form_show = false
        this.$cookie.set('userid', this.id, 30);
        this.get_dorm_status()
      }
    },
    reset_form(){
      this.qrcode_show = false
      this.form_show = true
      this.$cookie.delete('userid');
      this.dorm_status = '載入中...'
      this.dorm_status_data_detail = ''
      this.dorm_status_data_detail_url = ''
    },
    get_dorm_status(){
      console.log("You just sent a request to get dorm status!")
      let url = 'https://ntpu.herokuapp.com/dorm/detail'
      this.$http.post(url, {user_id:this.id})
      .then((response) => {
        if(response.body.message.status_code == "1"){
          this.dorm_status = response.body.message.status
          this.dorm_status_data_detail = response.body.message.data_detail
          this.dorm_status_data_detail_url = response.body.message.data_detail_url
        }
        else if(response.body.message.status_code == "0"){
          this.dorm_status = response.body.message.status
          this.dorm_status_data_detail = response.body.message.data_detail
          this.dorm_status_data_detail_url = response.body.message.data_detail_url
        }
        else
          this.dorm_status = "存取時發生錯誤"
      })
      .catch(() => {
        this.dorm_status = "無法載入"
        console.log('Got some errors!!')
      })
    }
  },

  created: function () {
    if(this.$cookie.get('userid')){
      this.id = this.$cookie.get('userid')
      this.qrcode_show = true
      this.form_show = false
      this.get_dorm_status()
    }
  }
}
</script>
