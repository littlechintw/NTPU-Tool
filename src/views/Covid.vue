<template>
  <div class="home">
    <br />

    <covidAlert />

    <h1>Covid-19 @NTPU</h1>
    <h5>Data from: <a href="http://lms.ntpu.edu.tw/board.php?courseID=50180&f=news" target="_bland">北大防疫專區</a> （資料依校方公告為主）</h5>
    <h4 style="color: red">{{ data_loading }}</h4>
    <v-divider />
    <br />

    <v-card class="mx-auto" width="80%" color="#F77676">
      <br />
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>
              <h0>+{{ cdc_data_tidy.newestConfirmedCase }}</h0>
            </v-row>
            <v-row align="center" justify="center" length>
              <h4>{{ cdc_data_tidy.newestConfirmedCaseDate }} 確診人數</h4>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <br />
    </v-card>
    <!-- <v-card class="mx-auto" width="80%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>

              <v-card class="mx-auto" width="33%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>+{{ cdc_data_tidy.newestConfirmedCaseSanxia }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>三峽</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

              <v-card class="mx-auto" width="33%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>+{{ cdc_data_tidy.newestConfirmedCaseTaipei }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>臺北</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

              <v-card class="mx-auto" width="34%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>+{{ cdc_data_tidy.newestConfirmedCaseUndefined }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>未定義</h3>
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
    </v-card> -->

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
              <h4>{{ cdc_data_tidy.newestConfirmedCaseDate }} 公告確診</h4>
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

              <v-card class="mx-auto" width="33%" elevation="2">
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

              <v-card class="mx-auto" width="33%" elevation="2">
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

              <v-card class="mx-auto" width="34%" elevation="2">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.confirmedCaseUndefined }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>未定義</h3>
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

    <v-card class="mx-auto" width="80%">
      <GChart
        type="LineChart"
        :data="chartData"
        :options="chartOptions"
      />
    </v-card>

    <br />
    <v-divider />
    <br />


    <v-card class="mx-auto" width="80%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>
              <h2>{{ cdc_data_tidy.newestConfirmedCaseDate }}</h2>
            </v-row>
            <v-row align="center" justify="center" length>
              <br />
            </v-row>
            <v-row align="center" justify="center" length>
              <h3> 居家隔離 <strong>{{ cdc_data_tidy.isolateTotal }}</strong> 人</h3>
            </v-row>
            <v-row align="center" justify="center" length>
              <h3> 自主健康管理 <strong>{{ cdc_data_tidy.selfHealthManagementTotal }}</strong> 人</h3>
            </v-row>
            <v-row align="center" justify="center" length>
              <h3> 居家檢疫 <strong>{{ cdc_data_tidy.homeQuarantineTotal }}</strong> 人</h3>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- <v-card class="mx-auto" width="80%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>
              <v-card class="mx-auto" width="100%" elevation="2" color="#DAF7A6">
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h2>{{ cdc_data_tidy.newestConfirmedCaseDate }}</h2>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-row>
            <v-row align="center" justify="center" length>

              <v-card class="mx-auto" width="30%" elevation="2" color="#DAF7A6">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length>
                        <h1>{{ cdc_data_tidy.isolateTotal }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>居家隔離</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

              <v-card class="mx-auto" width="40%" elevation="2" color="#DAF7A6">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length v-if="selfHealthManagementPublic">
                        <h1>{{ cdc_data_tidy.selfHealthManagementTotal }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length v-if="!selfHealthManagementPublic">
                        <h3 style="color: red; padding: 10px"><strong>校方未公開</strong></h3>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>自主健康管理</h3>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
                <br />
              </v-card>

              <v-card class="mx-auto" width="30%" elevation="2" color="#DAF7A6">
                <br />
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row align="center" justify="center" length v-if="homeQuarantinePublic">
                        <h1>{{ cdc_data_tidy.homeQuarantineTotal }}</h1>
                      </v-row>
                      <v-row align="center" justify="center" length v-if="!homeQuarantinePublic">
                        <h3 style="color: red; padding: 10px"><strong>校方未公開</strong></h3>
                      </v-row>
                      <v-row align="center" justify="center" length>
                        <h3>居家檢疫</h3>
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
    </v-card> -->

    <br />
    <v-divider />
    <br />

    <!-- <v-card width="80%" height="150px" color="red">
      <h1>{{ cdc_data_tidy.confirmedCase }}</h1>
    </v-card> -->
    <v-card class="mx-auto" width="100%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center" length>
              <h2>更多</h2>
            </v-row>
            <v-row align="center" justify="center" length>
              <br />
            </v-row>
            <v-row align="center" justify="center" length>
              <v-btn
                elevation="2"
                outlined
                href="covid/list"
              >
                資料列表
              </v-btn>
              <div style="padding: 5px" />
              <v-btn
                elevation="2"
                outlined
                href="covid/api"
              >
                API 串接
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br />
  </div>
</template>

<script>
import covidAlert from '@/components/covidAlert.vue'

export default {
  name: "HomeView",
  components: {
    covidAlert
  },
  data() {
    return {
      data_loading: "Loading data...",
      cdc_data: [],
      cdc_data_tidy: {
        'confirmedCase': 'N/A',
        'confirmedCaseTaipei': 'N/A',
        'confirmedCaseSanxia': 'N/A',
        'confirmedCaseUndefined': 'N/A',
        'newestConfirmedCase': 'N/A',
        'newestConfirmedCaseTaipei': 'N/A',
        'newestConfirmedCaseSanxia': 'N/A',
        'newestConfirmedCaseUndefined': 'N/A',
        'newestConfirmedCaseDate': 'N/A',
        'isolateTotal': 'N/A',
        'selfHealthManagementTotal': 'N/A',
        'homeQuarantineTotal': 'N/A',
      },
      chartData: [],
      chartOptions: {
        chart: {
          title: 'COVID-19 確診數',
          subtitle: '',
        }
      },
      selfHealthManagementPublic: true,
      homeQuarantinePublic: true,
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
          // console.log('SHOW');
          // console.log(this.cdc_data);
          // const updateTimestamp = Date.parse(this.cdc_data[0].dataTimestamp) + (8*60*60*1000);
          const updateTimestamp = new Date(this.cdc_data[0].dataTimestamp);
          this.data_loading = "Updated: " + updateTimestamp;
          this.tidy_cdc_data()
        })
        .catch((err) => {
          console.log(err);
          this.data_loading = err;
        });
    },
    tidy_cdc_data() {
      var tmp_cdc_data_tidy = {
        'confirmedCase': 0,
        'confirmedCaseTaipei': 0,
        'confirmedCaseSanxia': 0,
        'confirmedCaseUndefined': 0,
        'newestConfirmedCase': 0,
        'newestConfirmedCaseTaipei': 0,
        'newestConfirmedCaseSanxia': 0,
        'newestConfirmedCaseUndefined': 0,
        'newestConfirmedCaseDate': '',
        'isolateTotal': 0,
        'selfHealthManagementTotal': 0,
        'homeQuarantineTotal': 0,
      }
      this.cdc_graph_list = []
      this.chartData = [["日期", "確診"]]
      
      tmp_cdc_data_tidy.newestConfirmedCaseDate = this.cdc_data[0].date;

      // tmp_cdc_data_tidy.newestConfirmedCase = this.cdc_data[0].confirmedToday;
      if (this.cdc_data[0].confirmedToday.studentTotal != "校方未公開")
        tmp_cdc_data_tidy.newestConfirmedCase += this.cdc_data[0].confirmedToday.studentTotal;
      if (this.cdc_data[0].confirmedToday.teacher != "校方未公開")
        tmp_cdc_data_tidy.newestConfirmedCase += this.cdc_data[0].confirmedToday.teacher;
      if (this.cdc_data[0].confirmedToday.staff != "校方未公開")
        tmp_cdc_data_tidy.newestConfirmedCase += this.cdc_data[0].confirmedToday.staff;

      // if (this.cdc_data[0].confirmedCase.teacher != "校方未公開")
      //   tmp_cdc_data_tidy.newestConfirmedCase += this.cdc_data[0].confirmedCase.teacher;
      // if (this.cdc_data[0].confirmedCase.staff != "校方未公開")
      //   tmp_cdc_data_tidy.newestConfirmedCase += this.cdc_data[0].confirmedCase.staff;

      // tmp_cdc_data_tidy.newestConfirmedCaseTaipei = this.cdc_data[0].confirmedCase.studentZoneDetail.Taipei;
      // tmp_cdc_data_tidy.newestConfirmedCaseSanxia = this.cdc_data[0].confirmedCase.studentZoneDetail.Sanxia;
      // if (this.cdc_data[0].confirmedCase.teacher != "校方未公開")
      //   tmp_cdc_data_tidy.newestConfirmedCaseUndefined += this.cdc_data[0].confirmedCase.teacher;
      // if (this.cdc_data[0].confirmedCase.staff != "校方未公開")
      //   tmp_cdc_data_tidy.newestConfirmedCaseUndefined += this.cdc_data[0].confirmedCase.staff;
      
      tmp_cdc_data_tidy.isolateTotal += this.cdc_data[0].isolate.studentTotal;
      tmp_cdc_data_tidy.isolateTotal += this.cdc_data[0].isolate.teacher;
      tmp_cdc_data_tidy.isolateTotal += this.cdc_data[0].isolate.staff;

      tmp_cdc_data_tidy.confirmedCase = this.cdc_data[0].confirmedCase.studentTotal;
      tmp_cdc_data_tidy.confirmedCaseTaipei = this.cdc_data[0].confirmedCase.studentZoneDetail.Taipei;
      tmp_cdc_data_tidy.confirmedCaseSanxia = this.cdc_data[0].confirmedCase.studentZoneDetail.Sanxia;
      // tmp_cdc_data_tidy.confirmedCaseUndefined += this.cdc_data[0].confirmedCase.teacher + this.cdc_data[0].confirmedCase.staff;
      if (this.cdc_data[0].confirmedCase.teacher != "校方未公開") {
        tmp_cdc_data_tidy.confirmedCaseUndefined += this.cdc_data[0].confirmedCase.teacher;
        tmp_cdc_data_tidy.confirmedCase += this.cdc_data[0].confirmedCase.teacher;
      }
      if (this.cdc_data[0].confirmedCase.staff != "校方未公開") {
        tmp_cdc_data_tidy.confirmedCaseUndefined += this.cdc_data[0].confirmedCase.staff;
        tmp_cdc_data_tidy.confirmedCase += this.cdc_data[0].confirmedCase.staff;
      }
      
      if (this.cdc_data[0].selfHealthManagement.studentTotal != "校方未公開") {
        tmp_cdc_data_tidy.selfHealthManagementTotal += this.cdc_data[0].selfHealthManagement.studentTotal;
      }
      if (this.cdc_data[0].selfHealthManagement.teacher != "校方未公開") {
        tmp_cdc_data_tidy.selfHealthManagementTotal += this.cdc_data[0].selfHealthManagement.teacher;
      }
      if (this.cdc_data[0].selfHealthManagement.staff != "校方未公開") {
        tmp_cdc_data_tidy.selfHealthManagementTotal += this.cdc_data[0].selfHealthManagement.staff;
      }
      if (this.cdc_data[0].selfHealthManagement.studentTotal === "校方未公開" && this.cdc_data[0].selfHealthManagement.teacher === "校方未公開" && this.cdc_data[0].selfHealthManagement.staff === "校方未公開")
        // this.selfHealthManagementPublic = false;
        tmp_cdc_data_tidy.selfHealthManagementTotal = "校方未公開";

      if (this.cdc_data[0].homeQuarantine.studentTotal != "校方未公開") {
        tmp_cdc_data_tidy.homeQuarantineTotal += this.cdc_data[0].homeQuarantine.studentTotal;
      }
      if (this.cdc_data[0].homeQuarantine.teacher != "校方未公開") {
        tmp_cdc_data_tidy.homeQuarantineTotal += this.cdc_data[0].homeQuarantine.teacher;
      }
      if (this.cdc_data[0].homeQuarantine.staff != "校方未公開") {
        tmp_cdc_data_tidy.homeQuarantineTotal += this.cdc_data[0].homeQuarantine.staff;
      }
      if (this.cdc_data[0].homeQuarantine.studentTotal === "校方未公開" && this.cdc_data[0].homeQuarantine.teacher === "校方未公開" && this.cdc_data[0].homeQuarantine.staff === "校方未公開")
        // this.homeQuarantinePublic = false;
        tmp_cdc_data_tidy.homeQuarantineTotal = "校方未公開";

      // var addDataTmp = 0;
      for (var i=this.cdc_data.length-1;i>=0;i--) {
        this.chartData.push([this.cdc_data[i].date, this.cdc_data[i].confirmedCase.studentTotal]);
        // var chartDataTmp = []
        // chartDataTmp.push(this.cdc_data[i].date);
        // var tmp_today_confirmedCase = 0;
        // tmp_today_confirmedCase += this.cdc_data[i].confirmedCase.studentTotal;
        // if (this.cdc_data[i].confirmedCase.teacher != "校方未公開")
        //   tmp_today_confirmedCase += this.cdc_data[i].confirmedCase.teacher;
        // if (this.cdc_data[i].confirmedCase.staff != "校方未公開")
        //   tmp_today_confirmedCase += this.cdc_data[i].confirmedCase.staff;
        // chartDataTmp.push(tmp_today_confirmedCase)
        // addDataTmp += tmp_today_confirmedCase;
        // chartDataTmp.push(addDataTmp)

        // this.chartData.push(chartDataTmp)
        
        // tmp_cdc_data_tidy.confirmedCase += this.cdc_data[i].confirmedCase.studentTotal;
        // if (this.cdc_data[i].confirmedCase.teacher != "校方未公開")
        //   tmp_cdc_data_tidy.confirmedCase += this.cdc_data[i].confirmedCase.teacher;
        // if (this.cdc_data[i].confirmedCase.staff != "校方未公開")
        //   tmp_cdc_data_tidy.confirmedCase += this.cdc_data[i].confirmedCase.staff;

        // tmp_cdc_data_tidy.confirmedCaseTaipei += this.cdc_data[i].confirmedCase.studentZoneDetail.Taipei;
        // tmp_cdc_data_tidy.confirmedCaseSanxia += this.cdc_data[i].confirmedCase.studentZoneDetail.Sanxia;

        // if (this.cdc_data[i].confirmedCase.teacher != "校方未公開")
        //   tmp_cdc_data_tidy.confirmedCaseUndefined += this.cdc_data[i].confirmedCase.teacher;
        // if (this.cdc_data[i].confirmedCase.staff != "校方未公開")
        //   tmp_cdc_data_tidy.confirmedCaseUndefined += this.cdc_data[i].confirmedCase.staff;
      }

      this.cdc_data_tidy = tmp_cdc_data_tidy
    },
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