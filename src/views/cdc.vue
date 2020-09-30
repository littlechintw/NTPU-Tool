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
                  <p style="font-size: 12px;color: gray;">Event - {{ event_title }}</p>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length v-show="summit_open">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="id" :rules="idRules" type="number" label="學號 / Student ID" required></v-text-field>
                  <p style="font-size: 10px;">如非在校學生，請在學號欄位輸入 000000000</p>
                  <v-text-field v-model="name" :rules="idName" label="姓名 / Name" required></v-text-field>
                  <v-text-field v-model="phone" :rules="idPhone" label="電話 / Phone" required></v-text-field>
                  <v-checkbox v-model="checkbox_law" :rules="[v => !!v || 'You must agree to continue!']" label="本人已閱讀說明並願意提供資料，且以上所有資訊正確無誤。" required></v-checkbox>
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">送出</v-btn>
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
            (一)蒐集機關之名稱：國立臺北大學三峽校區學生會、{{ agency }}
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
      <v-card class="mx-auto" width="344" elevation="5">
        <v-container fluid>
          <v-row>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center" length>
                  <v-icon>done</v-icon>
                  <h1>成功登錄防疫資訊！</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
                  <p style="font-size: 12px;color: gray;">Event - {{ event_title }}</p>
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
                  <h4>請將本畫面交給工作人員查看，您也可使用截圖功能儲存。</h4>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
    <div class="form" v-show="error_page">
      <h2 style="color: red;">{{ error_msg }}</h2>
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
    valid: false,
    id: '',
    idRules: [
      v => !!v || '請輸入學號',
      v => (v && v.length === 9) || '請輸入學號正確格式',
    ],
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
    event_id: '',
    init: false,
    event_title: 'Loading...',
    agency: 'Loading...',
    summit_open: false,
  }),

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        this.error_msg = "載入中..."
        let url = 'https://38b3b37dd174.ngrok.io/cdc/enter'
        this.$http.post(url, {
          uuid: this.id,
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
