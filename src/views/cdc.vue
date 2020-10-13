<template>
  <div class="home">
    <div class="form" v-show="form_show">
      <v-card class="mx-auto" width="344" :disabled="!init" :loading="!init">
        <v-container fluid style="text-align: center;width:87%;">
          <v-row align="center" justify="center">
            <v-col cols="12" >
              <v-row align="center" justify="center" length>
                  <h1>實聯制登錄</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
                  <v-chip class="ma-2" color="green" outlined>
                    {{ event_title }}
                  </v-chip>
                  <!-- <p style="font-size: 12px;color: gray;">Event - {{ event_title }}</p> -->
                  <br>
              </v-row>
              <v-row align="center" justify="center" length v-show="!summit_open && init">
                <v-chip class="ma-2" color="red" outlined>
                  目前非開放時間
                </v-chip>
              </v-row>
              <v-row align="center" justify="center" length v-show="summit_open">
                <v-form ref="form" v-model="valid">
                  <v-switch v-model="ntpu_stu" inset label="北大學生？" align="center" justify="center"></v-switch>
                  <v-text-field v-model="id" :error-messages="idErrors" type="number" label="學號 / Student ID" v-show="ntpu_stu"></v-text-field>
                  <!-- <p style="font-size: 10px;">如非在校學生，請在學號欄位輸入 000000000</p> -->
                  <v-text-field v-model="name" :rules="idName" label="姓名 / Name" required></v-text-field>
                  <v-text-field v-model="phone" :rules="idPhone" type="number" label="電話 / Phone" required></v-text-field>
                  <v-checkbox v-model="checkbox_law" :rules="[v => !!v || 'You must agree to continue!']" label="本人已閱讀說明並願意提供資料，且以上所有資訊正確無誤。" required></v-checkbox>
                  <div v-show="btn_show">
                    <v-btn :disabled="!checkbox_law" color="success" class="mr-4" @click="validate">送出</v-btn>
                  </div>
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
      <v-card class="mx-auto" width="344" :disabled="!init" :loading="!init">
        <v-container fluid style="text-align: center;width:87%;">
          <p style="font-size: 16px;">個人資料使用說明</p>
          <p style="font-size: 12px;">
            (一)蒐集機關之名稱：第 21 屆國立臺北大學三峽校區學生會資訊部、{{ agency }}
          </p>
          <p style="font-size: 12px;">
            (二)蒐集之目的：防疫目的，依據「個人資料保護法之特定目的及個人資料之類別」為代號012公共衛生或傳染病防治之特定目的，且不得為目的外利用。
          </p>
          <p style="font-size: 12px;"> 
            (三)蒐集之個人資料項目：學號、姓名、電話。
          </p>
          <p style="font-size: 12px;">
            (四)個人資料利用之期間：自蒐集日起28日內。
          </p>
          <p style="font-size: 12px;">
            (五)個人資料利用之對象及方式：為防堵疫情而有必要時，得提供衛生主管機關依傳染病防治法等規定進行疫情調查及聯繫使用。
          </p>
          <p style="font-size: 12px;">
            (六)當事人就其個人資料得依個人資料保護法規定，向蒐集之機關行使權利，包括查詢或請求閱覽、請求製給複製本、請求補充或更正、請求蒐集、處理或利用、請求刪除，及行使方式。
          </p>
          <p style="font-size: 12px;">  
            (七)當事人不同意提供個人資料對其權益之影響，不得參與活動。
          </p>
        </v-container>
      </v-card>
    </div>
    <div class="qrcode" v-show="result_show">
      <v-card class="mx-auto" width="344" elevation="5" :color="check_color">
        <v-container fluid>
          <v-row>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center" length>
                <v-icon>done</v-icon>
                <h1>成功登錄</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                <br>
                <v-chip class="ma-2" color="blue" outlined>
                  {{ event_title }}
                </v-chip>
                <!-- <p style="font-size: 18px;color: gray;">Event - {{ event_title }}</p> -->
                <br>
              </v-row>
              <v-row align="center" justify="center" length>
                <br>
              </v-row>
              <v-row align="center" justify="center" length>
                <h2 style="color: blue;">學號: {{ final_id }}</h2>
              </v-row>
              <v-row align="center" justify="center" length>
                <h2 style="color: blue;">姓名: {{ name }}</h2>
              </v-row>
              <!-- <v-row align="center" justify="center" length>
                <br>
              </v-row> -->
              <!-- <v-row align="center" justify="center" length>
                <h7 style="font-size: 10px;color: gray;">{{ time_get }}</h7>
              </v-row>
              <v-row align="center" justify="center" length>
                <h7 style="font-size: 10px;color: gray;">{{ uuid_get }}</h7>
              </v-row> -->
              <!-- <v-row align="center" justify="center" length>
                <br>
              </v-row> -->
              <!-- <v-row align="center" justify="center" length>
                <h4>請將本畫面交給工作人員查看，您也可使用截圖功能儲存。</h4>
              </v-row> -->
            </v-col>
          </v-row>
        </v-container>
      </v-card><br>
      <v-card class="mx-auto" width="344" elevation="5" align="center" justify="center">
        <!-- <br> -->
        <h2>檢查資料</h2>
        <h7 style="color: gray;">登錄時間: {{ time_get }}</h7><br>
        <h7 style="color: gray;">UUID: {{ uuid_get }}</h7><br>
      </v-card>
      <br>
      <h3 style="padding: 3%;"><strong>請停留於本畫面，並交給工作人員查看，或建議使用截圖功能儲存。</strong></h3>
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
    valid: false,
    id: '',
    idRules: [
      v => (v && v.length === 9) || '請輸入學號正確格式',
    ],
    idErrors: '',
    idName: [
      v => !!v || '請輸入姓名',
    ],
    idPhone: [
      v => !!v || '請輸入電話',
    ],
    select: null,
    result_show: false,
    form_show: true,
    error_page: false,
    error_msg: '',
    uuid_get: '',
    time_get: '',
    event_id: '',
    ntpu_stu: true,
    init: false,
    event_title: 'Loading...',
    agency: 'Loading...',
    summit_open: false,
    btn_show: true,
    checkbox_law: false,
    final_id: '非北大學生',
    check_color: '#ffffff',
  }),

  methods: {
    validate () {
      this.idErrors = ''
      var send_id = '000000000'
      if(!this.id && this.ntpu_stu){
        this.idErrors = '請輸入學號'
        return false
      }
      if(this.id.length != 9 && this.ntpu_stu){
        this.idErrors = '請輸入學號正確格式'
        return false
      }
      if(this.ntpu_stu){
        send_id = this.id
        this.final_id = this.id
      }
      if(this.$refs.form.validate()){
        // this.error_msg = "載入中..."
        this.btn_show = false
        let url = 'https://38b3b37dd174.ngrok.io/cdc/enter'
          this.$http.post(url, {
          uuid: send_id,
          name: this.name,
          event: this.event_id,
          phone: this.phone,
        })
        .then((response) => {
          if(response.body.code == "200"){
            this.error_msg = ""
            this.uuid_get = response.body.message.uuid
            this.time_get = response.body.message.timestamp
            this.result_show = true
            this.form_show = false
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
  },

  created: function () {
    if(!this.$route.params.id){
      this.result_show = false
      this.form_show = false
      this.error_page = true
      this.error_msg = '請確認登錄網址'
    }
    this.event_id = this.$route.params.id
    this.error_msg = "載入中..."
    let url = 'https://38b3b37dd174.ngrok.io/cdc/manage'
    this.$http.post(url, {
      event: this.event_id,
    })
    .then((response) => {
      if(response.body.code == "200"){
        this.error_msg = ""
        this.event_title = response.body.message.title
        this.agency = response.body.message.agency
        this.summit_open = response.body.message.open
        this.check_color = response.body.message.check_color
        this.init = true
      }
      else{
        this.result_show = false
        this.form_show = false
        this.error_page = true
        this.error_msg = "存取時發生錯誤，或此網頁目前無開放使用。"
      }
    })
    .catch(() => {
      this.event_title = "error..."
      this.agency = "error..."
      this.error_msg = "無法載入，請重新載入"
      console.log('Got some errors!!')
    })
  }
}
</script>
