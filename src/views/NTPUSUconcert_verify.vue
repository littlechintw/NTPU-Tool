<template>
  <div class="home">
    <div class="form" v-show="form_show">
      <v-card class="mx-auto" width="344">
        <v-container fluid style="text-align: center;width:87%;">
          <v-row align="center" justify="center">
            <v-col cols="12" >
              <v-row align="center" justify="center" length>
                  <h1>曦望 | 2020北大校慶演唱會 校外人士驗證後台</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                <v-form ref="form" v-model="valid" @submit="validate" onSubmit="return false;">
                  <v-btn class="ma-2" rounded color="info" @click="camaraStatus">
                    <v-icon left>mdi-camera</v-icon> 開啟 / 關閉相機
                  </v-btn>
                  <v-text-field v-model="tic_id" label="Ticket ID"></v-text-field>
                  <div v-show="btn_show">
                    <v-btn color="success" class="mr-4" @click="validate">送出</v-btn>
                  </div><br>
                  <qrcode-stream :camera="camera" @decode="onCameraChange" v-show="camera_show"></qrcode-stream>
                  <div v-show="!btn_show">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </div>
                  <p style="font-size: 12px;color: red;">{{ error_msg }}</p>
                </v-form>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card><br>
    </div>
    <div class="qrcode" v-show="result_show">
      <v-card class="mx-auto" width="344" elevation="5" align="center" justify="center">
        <h2>Result: {{ result }}</h2>
        <h3>{{ result_easy }}</h3><br>
        <p>{{ result_detail_person }}</p>
        <p>{{ result_detail_ticket_num }}</p>
        <p>{{ result_detail_money }}</p>
        <p>{{ result_detail_other }}</p>
      </v-card><br>
    </div>
    <div class="form" v-show="error_page">
      <h2 style="color: red;">{{ error_msg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CDC',
  components: {
    
  },
  data: () => ({
    tic_id: '',
    valid: false,
    id: '',
    select: null,
    result_show: false,
    form_show: true,
    error_page: false,
    error_msg: '',
    init: false,
    summit_open: false,
    btn_show: true,
    checkbox_law: false,
    final_id: '非北大學生',
    check_color: '#ffffff',
    barcode_option:{
        displayValue: false,
        background: '#fff',
        width: '100%',
        height: '20px',
        fontSize: '0px'
    },
    result: '',
    result_easy: '',
    result_detail_person: '',
    result_detail_ticket_num: '',
    result_detail_money: '',
    result_detail_other: '',
    camera: 'off',
    camera_show: false,
  }),

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        this.btn_show = false
        this.result_show = false
        this.result_detail_person = ''
        this.result_detail_ticket_num = ''
        this.result_detail_money = ''
        this.result_detail_other = ''
        this.result_easy = ''
        let url = 'https://script.google.com/macros/s/AKfycbw_RKmE_oOEGja93_ZC8HrAIdue65Z-p-WkWPaMd5oz5tcg45Y/exec?s=s&v=1a6s4d1fsdf&uuid=' + this.tic_id + '&access_code=' + this.$cookie.get('access_code')
        this.$http.get(url)
        .then((response) => {
          if(response.status == "200"){
            this.error_msg = ""
            
            this.result_show = true
            this.btn_show = true
            if(response.body.f == '1'){
              this.result = ''
              this.result_detail_person = this.tic_id + ' ' + response.body.detail.name + ' '
              this.result_detail_person += response.body.detail.phone
              this.result_detail_ticket_num = '票券數量：' + response.body.detail.ticket_num
              this.result_detail_money = '繳費與否：' + response.body.detail.money
              this.result_detail_other = '註記：' + response.body.detail.other
              this.result_easy = response.body.detail.result
            }
            else if(response.body.f == '0'){
              this.result = '找不到或資料輸入錯誤'
            }
            else{
              this.result = response.body.err
            }
          }
          else{
            this.btn_show = true
            this.error_msg = "存取時發生錯誤，或輸入資料發生問題，請重新送出"
          }
        })
        .catch(() => {
          this.btn_show = true
          this.error_msg = "無法載入，請重新送出"
          console.log('Got some errors!!')
        })
      }
    },
    camaraStatus(){
      if(this.camera == 'off'){
        this.tic_id = ''
        this.camera = 'auto'
        this.camera_show = true
      }
      else{
        this.camera = 'off'
        this.camera_show = false
      }
    },
    onCameraChange(content){
      this.tic_id = content
      this.validate()
      this.camaraStatus()
    },
  },

  created: function () {
  },
}
</script>
