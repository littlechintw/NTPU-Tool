<template>
  <div class="home">
    <br />

    <covidAlert />

    <h1>Covid-19 @NTPU</h1>
    <h5>Data from: <a href="http://lms.ntpu.edu.tw/board.php?courseID=50180&f=news" target="_bland">北大防疫專區</a> （資料依校方公告為主）</h5>
    <h4 style="color: red">{{ data_loading }}</h4>
    <v-divider />
    <br />

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
      headers: [
        { text: '時間', value: 'date', align: 'center' },
        { text: '新增確診 - 學生', value: 'confirmedToday.studentTotal', align: 'center' },
        { text: '新增確診 - 學生 - 臺北', value: 'confirmedToday.studentZoneDetail.Taipei', align: 'center' },
        { text: '新增確診 - 學生 - 三峽', value: 'confirmedToday.studentZoneDetail.Sanxia', align: 'center' },
        { text: '新增確診 - 老師', value: 'confirmedToday.teacher', align: 'center' },
        { text: '新增確診 - 職員', value: 'confirmedToday.staff', align: 'center' },
        { text: '確診 - 學生', value: 'confirmedCase.studentTotal', align: 'center' },
        { text: '確診 - 學生 - 臺北', value: 'confirmedCase.studentZoneDetail.Taipei', align: 'center' },
        { text: '確診 - 學生 - 三峽', value: 'confirmedCase.studentZoneDetail.Sanxia', align: 'center' },
        { text: '確診 - 老師', value: 'confirmedCase.teacher', align: 'center' },
        { text: '確診 - 職員', value: 'confirmedCase.staff', align: 'center' },
        { text: '居家隔離 - 學生', value: 'isolate.studentTotal', align: 'center' },
        { text: '居家隔離 - 學生 - 臺北', value: 'isolate.studentZoneDetail.Taipei', align: 'center' },
        { text: '居家隔離 - 學生 - 三峽', value: 'isolate.studentZoneDetail.Sanxia', align: 'center' },
        { text: '居家隔離 - 老師', value: 'isolate.teacher', align: 'center' },
        { text: '居家隔離 - 職員', value: 'isolate.staff', align: 'center' },
        { text: '自主健康管理 - 學生	', value: 'selfHealthManagement.studentTotal', align: 'center' },
        { text: '自主健康管理 - 學生 - 臺北', value: 'selfHealthManagement.studentZoneDetail.Taipei', align: 'center' },
        { text: '自主健康管理 - 學生 - 三峽', value: 'selfHealthManagement.studentZoneDetail.Sanxia', align: 'center' },
        { text: '自主健康管理 - 老師', value: 'selfHealthManagement.teacher', align: 'center' },
        { text: '自主健康管理 - 職員', value: 'selfHealthManagement.staff', align: 'center' },
        { text: '居家檢疫 - 學生', value: 'homeQuarantine.studentTotal', align: 'center' },
        { text: '居家檢疫 - 學生 - 臺北', value: 'homeQuarantine.studentZoneDetail.Taipei', align: 'center' },
        { text: '居家檢疫 - 學生 - 三峽', value: 'homeQuarantine.studentZoneDetail.Sanxia', align: 'center' },
        { text: '居家檢疫 - 老師', value: 'homeQuarantine.teacher', align: 'center' },
        { text: '居家檢疫 - 職員', value: 'homeQuarantine.staff', align: 'center' },
      ],
    };
  },
  methods: {
    get_dorm_status() {
      const api = "https://script.google.com/macros/s/AKfycbxZTWjZU1T-Ro0BQW5NLi8ewFSCNxv2NJTLoLpTXNmdMT0fXSCD9k6BeRY0Y8UrBnFN9g/exec";
      this.$axios
        .get(api)
        .then((resp) => {
          console.log(resp);
          this.cdc_data = resp.data;
          const updateTimestamp = new Date(this.cdc_data[0].dataTimestamp);
          this.data_loading = "Updated: " + updateTimestamp;
        })
        .catch((err) => {
          console.log(err);
          this.data_loading = err;
        });
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