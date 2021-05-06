<template>
  <div class="home">
    <div class="form" v-show="form_show">
      <v-card class="mx-auto" width="344">
        <v-container fluid style="text-align: center;width:87%;">
          <v-row align="center" justify="center">
            <v-col cols="12" >
              <v-row align="center" justify="center" length>
                  <h1>學生會費查詢</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                <v-form ref="form" v-model="valid" @submit="validate" onSubmit="return false;">
                  <v-text-field v-model="stu_id" type="number" label="學號 / Student ID"></v-text-field>
                  <div v-show="btn_show">
                    <v-btn color="success" class="mr-4" @click="validate">送出</v-btn>
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
    </div>
    <div class="qrcode" v-show="result_show">
      <v-card class="mx-auto" width="344" elevation="5" align="center" justify="center">
        <h2>Result: {{ result }}</h2><br>
        <p>{{ result_detail_time }}</p>
        <p>{{ result_detail_id }}</p>
        <p>{{ result_detail_name }}</p>
        <p>{{ result_detail_department }}</p>
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
    valid: false,
    id: '',
    idstu_id: [
      v => !!v || '請輸入學號',
    ],
    idaccess_code: [
      v => !!v || '請輸入通行碼',
    ],
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
    result_detail_time: '',
    result_detail_id: '',
    result_detail_name: '',
    result_detail_department: '',
  }),

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        this.btn_show = false
        this.result_show = false
        let url = 'https://script.google.com/macros/s/AKfycbzsUmwqjGiUEr-xGhxyusPKFCOm95j44-lo_KO249-wzdbM0xZq/exec?stu_id=' + this.stu_id + '&access_code=' + this.$cookie.get('access_code')
        
        this.$http.get(url)
        .then((response) => {
          if(response.status == "200"){
            this.error_msg = ""
            
            this.result_show = true
            this.btn_show = true
            if(response.body.f == '1'){
              this.result = '有繳'
              this.result_detail_time = response.body.detail.year + ' '
              this.result_detail_time += response.body.detail.semester
              this.result_detail_id = response.body.detail.stu_id
              this.result_detail_name = response.body.detail.name
              this.result_detail_department = response.body.detail.department + ' '
              this.result_detail_department += response.body.detail.grade
            }
            else if(response.body.f == '0'){
              this.result = '沒繳或資料輸入錯誤'
              this.result_detail_time = ''
              this.result_detail_id = ''
              this.result_detail_name = ''
              this.result_detail_department = ''
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
  },

  created: function () {
  },
}
</script>
