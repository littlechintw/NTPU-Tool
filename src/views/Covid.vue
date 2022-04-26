<template>
  <div class="home">
    <br />
    <h1>Covid-19 @NTPU</h1>
    <h5>Data from: <a href="http://lms.ntpu.edu.tw/board.php?courseID=50180&f=news" target="_bland">北大防疫專區</a> （資料依校方公告為主）</h5>
    <h3 style="color: red">{{ data_loading }}</h3>
    <v-divider />
    <br />

    <v-card class="mx-auto" width="80%" color="#F77676">
      <br />
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>
              <h0>{{ cdc_data_tidy.newestConfirmedCase }}</h0>
            </v-row>
            <v-row align="center" justify="center" length>
              <h4>{{ cdc_data_tidy.newestConfirmedCaseDate }} 確診人數</h4>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <br />
    </v-card>
    <v-card class="mx-auto" width="80%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>

              <v-card class="mx-auto" width="50%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.newestConfirmedCaseSanxia }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>三峽</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

              <v-card class="mx-auto" width="50%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.newestConfirmedCaseTaipei }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>臺北</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <br />

    <v-card class="mx-auto" width="80%" color="#F7AD76">
      <br />
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>
              <h0>{{ cdc_data_tidy.confirmedCase }}</h0>
            </v-row>
            <v-row align="center" justify="center" length>
              <h4>已公告總確診人數</h4>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <br />
    </v-card>
    <v-card class="mx-auto" width="80%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>

              <v-card class="mx-auto" width="50%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.confirmedCaseSanxia }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>三峽</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

              <v-card class="mx-auto" width="50%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.confirmedCaseTaipei }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>臺北</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <br />
    <v-divider />
    <br />

    <v-card class="mx-auto" width="80%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>

              <v-card class="mx-auto" width="50%" elevation="2" color="#76D1F7">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.isolateTotal }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>{{ cdc_data_tidy.newestConfirmedCaseDate }} 居家隔離</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

              <v-card class="mx-auto" width="50%" elevation="2" color="#DAF7A6">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.selfHealthManagementTotal }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>{{ cdc_data_tidy.newestConfirmedCaseDate }} 自主健康管理</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <br />
    <v-divider />
    <br />

    <!-- <v-card width="80%" height="150px" color="red">
      <h1>{{ cdc_data_tidy.confirmedCase }}</h1>
    </v-card> -->
    <h2>List of data</h2>
    <br />
    <v-data-table
      :headers="headers"
      :items="cdc_data"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <br />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      data_loading: "Loading data...",
      cdc_data: [],
      headers: [
        { text: '時間', value: 'date', align: 'center' },
        { text: '總確診', value: 'confirmedCase.total', align: 'center' },
        { text: '確診 - 臺北', value: 'confirmedCase.zoneDetail.Taipei', align: 'center' },
        { text: '確診 - 三峽', value: 'confirmedCase.zoneDetail.Sanxia', align: 'center' },
        { text: '居家隔離 - 學生', value: 'isolate.studentTotal', align: 'center' },
        // { text: '居家隔離 - 學生 - 臺北', value: 'isolate.studentZoneDetail.Taipei' },
        // { text: '居家隔離 - 學生 - 三峽', value: 'isolate.studentZoneDetail.Sanxia' },
        { text: '居家隔離 - 老師', value: 'isolate.teacher', align: 'center' },
        { text: '居家隔離 - 職員', value: 'isolate.staff', align: 'center' },
        { text: '自主健康管理 - 學生	', value: 'selfHealthManagement.studentTotal', align: 'center' },
        // { text: '自主健康管理 - 學生 - 臺北', value: 'selfHealthManagement.studentZoneDetail.Taipei' },
        // { text: '自主健康管理 - 學生 - 三峽', value: 'selfHealthManagement.studentZoneDetail.Sanxia' },
        { text: '自主健康管理 - 老師', value: 'selfHealthManagement.teacher', align: 'center' },
        { text: '自主健康管理 - 職員', value: 'selfHealthManagement.staff', align: 'center' },
      ],
      cdc_data_tidy: {
        'confirmedCase': 0,
        'confirmedCaseTaipei': 0,
        'confirmedCaseSanxia': 0,
        'newestConfirmedCase': 0,
        'newestConfirmedCaseTaipei': 0,
        'newestConfirmedCaseSanxia': 0,
        'newestConfirmedCaseDate': '',
        'isolateTotal': 0,
        'selfHealthManagementTotal': 0,
      }
    };
  },
  methods: {
    get_dorm_status() {
      // const api = "http://34.145.73.14:5000/api/ntpu_cdc";
      const api = "https://script.google.com/macros/s/AKfycbxZTWjZU1T-Ro0BQW5NLi8ewFSCNxv2NJTLoLpTXNmdMT0fXSCD9k6BeRY0Y8UrBnFN9g/exec";
      this.$axios
        .get(api)
        .then((resp) => {
          console.log(resp);
          this.cdc_data = resp.data;
          console.log('SHOW');
          console.log(this.cdc_data);
          this.data_loading = "";
          this.tidy_cdc_data()
        })
        .catch((err) => {
          console.log(err);
          this.data_loading = err;
        });
    },
    tidy_cdc_data() {
      this.cdc_data_tidy = {
        'confirmedCase': 0,
        'confirmedCaseTaipei': 0,
        'confirmedCaseSanxia': 0,
        'newestConfirmedCase': 0,
        'newestConfirmedCaseTaipei': 0,
        'newestConfirmedCaseSanxia': 0,
        'newestConfirmedCaseDate': '',
        'isolateTotal': 0,
        'selfHealthManagementTotal': 0,
      }
      this.cdc_data_tidy.newestConfirmedCaseDate = this.cdc_data[0].date;
      this.cdc_data_tidy.newestConfirmedCase = this.cdc_data[0].confirmedCase.total;
      this.cdc_data_tidy.newestConfirmedCaseTaipei = this.cdc_data[0].confirmedCase.zoneDetail.Taipei;
      this.cdc_data_tidy.newestConfirmedCaseSanxia = this.cdc_data[0].confirmedCase.zoneDetail.Sanxia;
        this.cdc_data_tidy.isolateTotal += this.cdc_data[0].isolate.studentTotal;
        this.cdc_data_tidy.isolateTotal += this.cdc_data[0].isolate.teacher;
        this.cdc_data_tidy.isolateTotal += this.cdc_data[0].isolate.staff;
        this.cdc_data_tidy.selfHealthManagementTotal += this.cdc_data[0].selfHealthManagement.studentTotal;
        this.cdc_data_tidy.selfHealthManagementTotal += this.cdc_data[0].selfHealthManagement.teacher;
        this.cdc_data_tidy.selfHealthManagementTotal += this.cdc_data[0].selfHealthManagement.staff;
      for (var i=0;i<this.cdc_data.length;i++) {
        this.cdc_data_tidy.confirmedCase += this.cdc_data[i].confirmedCase.total;
        this.cdc_data_tidy.confirmedCaseTaipei += this.cdc_data[i].confirmedCase.zoneDetail.Taipei;
        this.cdc_data_tidy.confirmedCaseSanxia += this.cdc_data[i].confirmedCase.zoneDetail.Sanxia;
      }
    }
  },
  created: function () {
    this.get_dorm_status()
  },
};
</script>

<style>
.home {
  margin-left: 20pt;
  margin-right: 20pt;
}

h0 {
  font-size: 72pt;
}
</style>