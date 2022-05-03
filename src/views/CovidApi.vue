<template>
  <div class="home">
    <br />

    <covidAlert />

    <v-card class="mx-auto" max-width="80%" elevation="0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="left" length>
              <h1>Covid-19 @NTPU</h1>
            </v-row>
            <v-row align="center" justify="left" length>
              <h5>Data from: <a href="http://lms.ntpu.edu.tw/board.php?courseID=50180&f=news" target="_bland">北大防疫專區</a> （資料依校方公告為主）</h5>
            </v-row>
            <v-row align="center" justify="left" length>
              <h4 style="color: red">{{ data_loading }}</h4>
            </v-row>
            <v-row align="center" justify="left" length>
              <v-divider />
            </v-row>
            <v-row align="center" justify="left" length>
              <br />
            </v-row>

            <v-row align="center" justify="left" length>
              <h2>API URL</h2>
            </v-row>
            <v-row align="center" justify="left" length>
              <v-sheet
                color="grey darken-1"
                height="30"
                rounded
                width="100%"
                style="color: white; padding: 3px;"
              >
                <code>[GET] https://script.google.com/macros/s/AKfycbxZTWjZU1T-Ro0BQW5NLi8ewFSCNxv2NJTLoLpTXNmdMT0fXSCD9k6BeRY0Y8UrBnFN9g/exec</code>
              </v-sheet>
            </v-row>
            <v-row align="center" justify="left" length>
              <br />
            </v-row>

            <v-row align="center" justify="left" length>
              <h2>API Format</h2>
            </v-row>
            <v-row align="center" justify="center" length>
              <json-viewer
                :value="jsonData"
                :expand-depth=5
                ></json-viewer>
            </v-row>
            <v-row align="center" justify="left" length>
              <br />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
      data_loading: "Hi there!",
      jsonData: [
        {
          "dataTimestamp": "資料更新時間",
          "date": "此資料日期",
          "confirmedToday": {
            "studentTotal": "今日學生確診總數",
            "studentZoneDetail": {
              "Taipei": "今日臺北學生確診人數",
              "Sanxia": "今日三峽學生確診人數",
            },
            "teacher": "今日教師確診人數",
            "staff": "今日行政人員確診人數",
          },
          "confirmedCase": {
            "studentTotal": "確診總人數",
            "studentZoneDetail": {
              "Taipei": "臺北學生確診人數",
              "Sanxia": "三峽學生確診人數",
            },
            "teacher": "教師確診人數",
            "staff": "行政人員確診人數",
          },
          "isolate": {
            "studentTotal": "隔離總人數",
            "studentZoneDetail": {
              "Taipei": "臺北學生隔離人數",
              "Sanxia": "三峽學生隔離人數",
            },
            "teacher": "教師隔離人數",
            "staff": "行政人員隔離人數",
          },
          "selfHealthManagement": {
            "studentTotal": "自主健康管理總人數",
            "studentZoneDetail": {
              "Taipei": "臺北學生自主健康管理人數",
              "Sanxia": "三峽學生自主健康管理人數",
            },
            "teacher": "教師自主健康管理人數",
            "staff": "行政人員自主健康管理人數",
          },
          "homeQuarantine": {
            "studentTotal": "居家檢疫總人數",
            "studentZoneDetail": {
              "Taipei": "臺北學生居家檢疫人數",
              "Sanxia": "三峽學生居家檢疫人數",
            },
            "teacher": "教師居家檢疫人數",
            "staff": "行政人員居家檢疫人數",
          }
        }
      ]
    };
  },
  methods: {
  },
  created: function () {
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