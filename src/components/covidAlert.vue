<template>
  <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length>
            <v-alert dense outlined type="error" max-height="80%">
              <strong>嚴重警告！</strong>
              目前不使用累加確診數的方式，但發現公布之當日新增數據與前日發生衝突，<strong>資料缺乏正確性</strong>，請自行斟酌校方提供資料，所有內容皆已完全顯示於 <a href="/covid/list">防疫數據列表</a>，可參考檢視。
            </v-alert>
          </v-row>
          <v-row align="center" justify="center" length>
            <v-alert dense outlined type="error" max-height="80%">
              <strong>嚴重警告！</strong>
              根據 <a href="https://www.dcard.tw/f/ntpu/p/238790018">「本校確診人數統計方式」 - Dcard 臺北大學版</a> 顯示，校方不提供累積確診數之有意義數據，以下數據僅供參考。
            </v-alert>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>>