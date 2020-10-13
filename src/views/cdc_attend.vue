<template>
  <div class="home">
    <div class="form" v-show="form_show">
      <v-card class="mx-auto" width="344" :disabled="!init" :loading="!init">
        <v-container fluid style="text-align: center;width:87%;">
          <v-row align="center" justify="center">
            <v-col cols="12" >
              <v-row align="center" justify="center" length>
                  <h1>實聯制登錄名單存取</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                  <br>
                  <p style="font-size: 12px;color: gray;">Event - {{ event_title }}</p>
                  <br>
              </v-row>
              <v-row align="center" justify="center" length>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="access_code" :rules="idAccess_Code" label="通行碼 / Access Code" required></v-text-field>
                  <div v-show="btn_show">
                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">送出</v-btn>
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
      </v-card>
    </div>
    <div class="qrcode" v-show="result_show">
      <v-card class="mx-auto" align="center" justify="center" :color="check_color">
        <h2>下載</h2>
        <p>下載之檔案為 .csv 檔，期間以逗號隔開，且格式為 utf-8</p>
        <v-btn class="ma-2" rounded color="success" :href="csv_url" @click="url_random">
          <v-icon left>mdi-download</v-icon> Download .csv
        </v-btn>
      </v-card><br>
      <v-card class="mx-auto" align="center" justify="center">
        <v-btn class="ma-2" rounded color="" @click="validate">
          <v-icon left>mdi-refresh</v-icon> Refresh
        </v-btn>
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="name_list"
          :items-per-page="5"
          class="elevation-1"
          :disabled="loading_show"
          :loading="loading_show"
          :search="search"
        ></v-data-table>
      </v-card>
    </div>
    <div class="form" v-show="error_page">
      <h2 style="color: red;">{{ error_msg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CDC - Attend',
  components: {
    
  },
  data: () => ({
    valid: true,
    access_code: '',
    idAccess_Code: [
      v => !!v || '請輸入通行碼',
    ],
    select: null,
    result_show: false,
    form_show: true,
    error_page: false,
    error_msg: '',
    uuid_get: '',
    time_get: '',
    event_id: '',
    init: false,
    event_title: 'Loading...',
    agency: 'Loading...',
    headers: [
      { text: '時間', value: 'timestamp' },
      { text: '學號', value: 'stu_id' },
      { text: '姓名', value: 'name' },
      { text: '電話', value: 'phone' },
      { text: 'uuid', value: 'uuid' },
    ],
    name_list: [],
    search: '',
    csv_url: "",
    btn_show: true,
    loading_show: false,
    check_color: '#ffffff',
  }),

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        this.error_msg = "載入中..."
        this.btn_show = false
        this.loading_show = true
        this.name_list = []
        let url = 'https://38b3b37dd174.ngrok.io/cdc/access'
        this.$http.post(url, {
          event: this.event_id,
          access_code: this.access_code,
        })
        .then((response) => {
          if(response.body.code == "200"){
            this.error_msg = ""
            this.name_list = response.body.message
            this.csv_url = 'https://38b3b37dd174.ngrok.io/cdc/access/csv/' + this.event_id + '/' + this.access_code + '/' + Math.random()
            this.result_show = true
            this.form_show = false
            this.loading_show = false
          }
          else{
            this.btn_show = true
            this.error_msg = "存取時發生錯誤，或通行碼錯誤，請重新送出"
          }
        })
        .catch(() => {
          this.btn_show = true
          this.error_msg = "無法載入，請重新送出"
          console.log('Got some errors!!')
        })
      }
    },
    url_random(){
      this.csv_url = 'https://38b3b37dd174.ngrok.io/cdc/access/csv/' + this.event_id + '/' + this.access_code + '/' + Math.random()
    }
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
