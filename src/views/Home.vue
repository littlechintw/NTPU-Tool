<template>
  <div class="home">
    <br />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length>
            <v-alert dense outlined type="error">
              <strong>警告！</strong>
              勿使用他人個資，衍生之法律問題請自行負責，伺服器亦不會記錄任何資訊。
            </v-alert>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="form" v-show="form_show">
      <v-card class="mx-auto" width="344">
        <br />
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-row align="center" justify="center" length>
                <h1>防疫登錄 QRCode</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                <br />
              </v-row>
              <v-row align="center" justify="center" length>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="id"
                    :rules="idRules"
                    type="number"
                    label="學號"
                    required
                  ></v-text-field>
                  <v-checkbox
                    v-model="checkbox_self"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="確定這個學號是自己的嗎？"
                    required
                  ></v-checkbox>
                  <v-checkbox
                    v-model="checkbox_law"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="同意服務條款"
                    required
                  ></v-checkbox>
                  <p style="font-size: 12px; color: gray">
                    相關條款可點選右上角問號按鈕查看
                  </p>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    >登入</v-btn
                  >
                </v-form>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <br />
      </v-card>
    </div>
    <div class="qrcode" v-show="qrcode_show">
      <v-card class="mx-auto" width="344" elevation="5">
        <br />
        <v-container fluid>
          <v-row>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center" length>
                <h1>防疫登錄</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                <br />
              </v-row>
              <v-row align="center" justify="center" length>
                <qr-code :text="id"></qr-code>
              </v-row>
              <v-row align="center" justify="center" length>
                <barcode :value="id" :options="barcode_option"></barcode>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <br />
      </v-card>
      <br />
      <v-card
        class="mx-auto"
        width="344"
        elevation="5"
        v-show="dorm_information"
      >
        <v-container fluid>
          <v-row>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center" length>
                <h1>宿舍抽籤資訊</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                <br />
              </v-row>
              <v-row align="center" justify="center" length>
                <p style="font-size: 22px">☞ {{ dorm_status }} ☜</p>
              </v-row>
              <v-row align="center" justify="center" length>
                <br />
              </v-row>
              <v-row align="center" justify="center" length>
                <p style="color: #646464; font-size: 13px">
                  {{ dorm_status_data_detail }}
                </p>
                <a
                  :href="dorm_status_data_detail_url"
                  style="color: #646464; font-size: 13px"
                  target="_blank"
                  >{{ dorm_status_data_detail_url }}</a
                >
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <br />
      <v-card class="mx-auto" width="344" elevation="0">
        <v-container fluid>
          <v-row>
            <v-col cols="12" align="center">
              <v-row align="center" justify="center" length>
                <v-btn color="success" class="mr-4" @click="reset_form"
                  >重新輸入</v-btn
                >
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    valid: true,
    id: "",
    idRules: [
      (v) => !!v || "請輸入學號",
      (v) => (v && v.length === 9) || "請輸入學號正確格式",
    ],
    select: null,
    checkbox_self: false,
    checkbox_law: false,
    qrcode_show: false,
    form_show: true,
    barcode_option: {
      displayValue: false,
      background: "#fff",
      width: "2px",
      height: "30px",
      fontSize: "10px",
    },
    dorm_status: "載入中...",
    dorm_status_data_detail: "",
    dorm_status_data_detail_url: "",
    dorm_information: false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.qrcode_show = true;
        this.form_show = false;
        this.$cookie.set("userid", this.id, 30);
        if (this.dorm_information) this.get_dorm_status();
      }
    },
    reset_form() {
      this.qrcode_show = false;
      this.form_show = true;
      this.$cookie.delete("userid");
      this.dorm_status = "載入中...";
      this.dorm_status_data_detail = "";
      this.dorm_status_data_detail_url = "";
    },
    get_dorm_status() {
      console.log("You just sent a request to get dorm status!");
      let url = "https://ntpu.herokuapp.com/dorm/detail";
      this.$http
        .post(url, { user_id: this.id })
        .then((response) => {
          if (response.body.message.status_code == "1") {
            this.dorm_status = response.body.message.status;
            this.dorm_status_data_detail = response.body.message.data_detail;
            this.dorm_status_data_detail_url =
              response.body.message.data_detail_url;
          } else if (response.body.message.status_code == "0") {
            this.dorm_status = response.body.message.status;
            this.dorm_status_data_detail = response.body.message.data_detail;
            this.dorm_status_data_detail_url =
              response.body.message.data_detail_url;
          } else this.dorm_status = "存取時發生錯誤";
        })
        .catch(() => {
          this.dorm_status = "無法載入";
          console.log("Got some errors!!");
        });
    },
  },

  created: function () {
    if (this.$cookie.get("userid")) {
      this.id = this.$cookie.get("userid");
      this.qrcode_show = true;
      this.form_show = false;
      if (this.dorm_information) this.get_dorm_status();
    }
  },
};
</script>

<style>
.home {
  margin-left: 20pt;
  margin-right: 20pt;
}
</style>