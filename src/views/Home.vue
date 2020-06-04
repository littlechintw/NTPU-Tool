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
                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">產生條碼</v-btn>
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
      <v-container fluid>
        <v-row>
          <v-col cols="12" >
            <v-row align="center" justify="center" length>
                <qr-code :text="id"></qr-code>
            </v-row>
            <v-row align="center" justify="center" length>
                <barcode :value="id" :options="barcode_option"></barcode>
            </v-row>
            <v-row align="center" justify="center" length>
                <h3>{{ id }}</h3>
            </v-row>
            <v-row align="center" justify="center" length>
                <v-btn color="success" class="mr-4" @click="reset_form">重新輸入</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    id: '',
    idRules: [
      v => !!v || '請輸入學號',
      v => (v && v.length === 9) || '學號必須包含 9 個數字',
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
  }),

  methods: {
    validate () {
      if(this.$refs.form.validate()){
        this.qrcode_show = true
        this.form_show = false
        this.$cookie.set('userid', this.id, 30);
      }
    },
    reset_form(){
      this.qrcode_show = false
      this.form_show = true
      this.$cookie.delete('userid');
    }
  },

  created: function () {
    if(this.$cookie.get('userid')){
      this.id = this.$cookie.get('userid')
      this.qrcode_show = true
      this.form_show = false
    }
  }
}
</script>
