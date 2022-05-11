"use strict";(self["webpackChunkntpu_tool"]=self["webpackChunkntpu_tool"]||[]).push([[534],{5189:function(t,a,e){e.d(a,{Z:function(){return _}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("v-alert",{attrs:{dense:"",outlined:"",type:"error","max-height":"80%"}},[e("strong",[t._v("嚴重警告！")]),t._v(" 目前不使用累加確診數的方式，但發現公布之當日新增數據與前日發生衝突，"),e("strong",[t._v("資料缺乏正確性")]),t._v("，請自行斟酌校方提供資料，所有內容皆已完全顯示於 "),e("a",{attrs:{href:"/covid/list"}},[t._v("防疫數據列表")]),t._v("，可參考檢視。 ")])],1),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("v-alert",{attrs:{dense:"",outlined:"",type:"error","max-height":"80%"}},[e("strong",[t._v("嚴重警告！")]),t._v(" 根據 "),e("a",{attrs:{href:"https://www.dcard.tw/f/ntpu/p/238790018"}},[t._v("「本校確診人數統計方式」 - Dcard 臺北大學版")]),t._v(" 顯示，校方不提供累積確診數之有意義數據，以下數據僅供參考。 ")])],1)],1)],1)],1)},r=[],n=e(1001),i=e(3453),d=e.n(i),c=e(7847),o=e(7024),l=e(1819),h=e(7894),f={},v=(0,n.Z)(f,s,r,!1,null,null,null),_=v.exports;d()(v,{VAlert:c.Z,VCol:o.Z,VContainer:l.Z,VRow:h.Z})},8938:function(t,a,e){e.r(a),e.d(a,{default:function(){return C}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("br"),e("covidAlert"),e("h1",[t._v("Covid-19 @NTPU")]),t._m(0),e("h4",{staticStyle:{color:"red"}},[t._v(t._s(t.data_loading))]),e("v-divider"),e("br"),e("v-card",{staticClass:"mx-auto",attrs:{width:"80%",color:"#F77676"}},[e("br"),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h0",[t._v("+"+t._s(t.cdc_data_tidy.newestConfirmedCase))])],1),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h4",[t._v(t._s(t.cdc_data_tidy.newestConfirmedCaseDate)+" 新增確診人數")])])],1)],1)],1),e("br")],1),e("br"),e("v-card",{staticClass:"mx-auto",attrs:{width:"80%",color:"#F7AD76"}},[e("br"),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h0",[t._v(t._s(t.cdc_data_tidy.confirmedCase))])],1),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h4",[t._v(t._s(t.cdc_data_tidy.newestConfirmedCaseDate)+" 未痊癒確診")])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h4",{staticStyle:{color:"red"}},[t._v("本數據非累積確診數量")])])],1)],1)],1),e("br")],1),e("v-card",{staticClass:"mx-auto",attrs:{width:"80%",elevation:"0"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("v-card",{staticClass:"mx-auto",attrs:{width:"33%",elevation:"2"}},[e("br"),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h1",[t._v(t._s(t.cdc_data_tidy.confirmedCaseSanxia))])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h3",[t._v("三峽")])])],1)],1)],1),e("br")],1),e("v-card",{staticClass:"mx-auto",attrs:{width:"33%",elevation:"2"}},[e("br"),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h1",[t._v(t._s(t.cdc_data_tidy.confirmedCaseTaipei))])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h3",[t._v("臺北")])])],1)],1)],1),e("br")],1),e("v-card",{staticClass:"mx-auto",attrs:{width:"34%",elevation:"2"}},[e("br"),e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h1",[t._v(t._s(t.cdc_data_tidy.confirmedCaseUndefined))])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h3",[t._v("未定義")])])],1)],1)],1),e("br")],1)],1)],1)],1)],1)],1),e("br"),e("v-divider"),e("br"),e("h3",[t._v("最近七日數據線性圖")]),e("br"),e("v-card",{staticClass:"mx-auto",attrs:{width:"80%"}},[e("GChart",{staticStyle:{height:"400px"},attrs:{type:"LineChart",data:t.chartData,options:t.chartOptions}})],1),e("br"),e("v-divider"),e("br"),e("v-card",{staticClass:"mx-auto",attrs:{width:"80%",elevation:"0"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h2",[t._v(t._s(t.cdc_data_tidy.newestConfirmedCaseDate))])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h3",[t._v(" 居家隔離 "),e("strong",[t._v(t._s(t.cdc_data_tidy.isolateTotal))]),t._v(" 人")])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h3",[t._v(" 自主健康管理 "),e("strong",[t._v(t._s(t.cdc_data_tidy.selfHealthManagementTotal))]),t._v(" 人")])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h3",[t._v(" 居家檢疫 "),e("strong",[t._v(t._s(t.cdc_data_tidy.homeQuarantineTotal))]),t._v(" 人")])])],1)],1)],1)],1),e("br"),e("v-divider"),e("br"),e("v-card",{staticClass:"mx-auto",attrs:{width:"100%",elevation:"0"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("h2",[t._v("更多")])]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e("v-row",{attrs:{align:"center",justify:"center",length:""}},[e("v-btn",{attrs:{elevation:"2",outlined:"",href:"covid/list"}},[t._v(" 資料列表 ")]),e("div",{staticStyle:{padding:"5px"}}),e("v-btn",{attrs:{elevation:"2",outlined:"",href:"covid/api"}},[t._v(" API 串接 ")])],1)],1)],1)],1)],1),e("br")],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h5",[t._v("Data from: "),e("a",{attrs:{href:"http://lms.ntpu.edu.tw/board.php?courseID=50180&f=news",target:"_bland"}},[t._v("北大防疫專區")]),t._v(" （資料依校方公告為主）")])}],n=e(5189),i={name:"HomeView",components:{covidAlert:n.Z},data(){return{data_loading:"Loading data...",cdc_data:[],cdc_data_tidy:{confirmedCase:"N/A",confirmedCaseTaipei:"N/A",confirmedCaseSanxia:"N/A",confirmedCaseUndefined:"N/A",newestConfirmedCase:"N/A",newestConfirmedCaseTaipei:"N/A",newestConfirmedCaseSanxia:"N/A",newestConfirmedCaseUndefined:"N/A",newestConfirmedCaseDate:"N/A",isolateTotal:"N/A",selfHealthManagementTotal:"N/A",homeQuarantineTotal:"N/A"},chartData:[],tmpChartData:[],chartOptions:{legend:{position:"bottom"}},selfHealthManagementPublic:!0,homeQuarantinePublic:!0}},methods:{get_dorm_status(){const t="https://script.google.com/macros/s/AKfycbxZTWjZU1T-Ro0BQW5NLi8ewFSCNxv2NJTLoLpTXNmdMT0fXSCD9k6BeRY0Y8UrBnFN9g/exec";this.$axios.get(t).then((t=>{console.log(t),this.cdc_data=t.data;const a=new Date(this.cdc_data[0].dataTimestamp);this.data_loading="Updated: "+a,this.tidy_cdc_data()})).catch((t=>{console.log(t),this.data_loading=t}))},tidy_cdc_data(){var t={confirmedCase:0,confirmedCaseTaipei:0,confirmedCaseSanxia:0,confirmedCaseUndefined:0,newestConfirmedCase:0,newestConfirmedCaseTaipei:0,newestConfirmedCaseSanxia:0,newestConfirmedCaseUndefined:0,newestConfirmedCaseDate:"",isolateTotal:0,selfHealthManagementTotal:0,homeQuarantineTotal:0};this.cdc_graph_list=[],this.tmpChartData=[["日期","未痊癒確診","新增確診","隔離"]],t.newestConfirmedCaseDate=this.cdc_data[0].date,"校方未公開"!=this.cdc_data[0].confirmedToday.studentTotal&&(t.newestConfirmedCase+=this.cdc_data[0].confirmedToday.studentTotal),"校方未公開"!=this.cdc_data[0].confirmedToday.teacher&&(t.newestConfirmedCase+=this.cdc_data[0].confirmedToday.teacher),"校方未公開"!=this.cdc_data[0].confirmedToday.staff&&(t.newestConfirmedCase+=this.cdc_data[0].confirmedToday.staff),t.isolateTotal+=this.cdc_data[0].isolate.studentTotal,t.isolateTotal+=this.cdc_data[0].isolate.teacher,t.isolateTotal+=this.cdc_data[0].isolate.staff,t.confirmedCase=this.cdc_data[0].confirmedCase.studentTotal,t.confirmedCaseTaipei=this.cdc_data[0].confirmedCase.studentZoneDetail.Taipei,t.confirmedCaseSanxia=this.cdc_data[0].confirmedCase.studentZoneDetail.Sanxia,"校方未公開"!=this.cdc_data[0].confirmedCase.teacher&&(t.confirmedCaseUndefined+=this.cdc_data[0].confirmedCase.teacher,t.confirmedCase+=this.cdc_data[0].confirmedCase.teacher),"校方未公開"!=this.cdc_data[0].confirmedCase.staff&&(t.confirmedCaseUndefined+=this.cdc_data[0].confirmedCase.staff,t.confirmedCase+=this.cdc_data[0].confirmedCase.staff),"校方未公開"!=this.cdc_data[0].selfHealthManagement.studentTotal&&(t.selfHealthManagementTotal+=this.cdc_data[0].selfHealthManagement.studentTotal),"校方未公開"!=this.cdc_data[0].selfHealthManagement.teacher&&(t.selfHealthManagementTotal+=this.cdc_data[0].selfHealthManagement.teacher),"校方未公開"!=this.cdc_data[0].selfHealthManagement.staff&&(t.selfHealthManagementTotal+=this.cdc_data[0].selfHealthManagement.staff),"校方未公開"===this.cdc_data[0].selfHealthManagement.studentTotal&&"校方未公開"===this.cdc_data[0].selfHealthManagement.teacher&&"校方未公開"===this.cdc_data[0].selfHealthManagement.staff&&(t.selfHealthManagementTotal="校方未公開"),"校方未公開"!=this.cdc_data[0].homeQuarantine.studentTotal&&(t.homeQuarantineTotal+=this.cdc_data[0].homeQuarantine.studentTotal),"校方未公開"!=this.cdc_data[0].homeQuarantine.teacher&&(t.homeQuarantineTotal+=this.cdc_data[0].homeQuarantine.teacher),"校方未公開"!=this.cdc_data[0].homeQuarantine.staff&&(t.homeQuarantineTotal+=this.cdc_data[0].homeQuarantine.staff),"校方未公開"===this.cdc_data[0].homeQuarantine.studentTotal&&"校方未公開"===this.cdc_data[0].homeQuarantine.teacher&&"校方未公開"===this.cdc_data[0].homeQuarantine.staff&&(t.homeQuarantineTotal="校方未公開");for(var a=this.cdc_data.length-1;a>=0;a--){var e=0,s=0,r=0;"校方未公開"!=this.cdc_data[a].confirmedCase.studentTotal&&(e+=this.cdc_data[a].confirmedCase.studentTotal),"校方未公開"!=this.cdc_data[a].confirmedCase.teacher&&(e+=this.cdc_data[a].confirmedCase.teacher),"校方未公開"!=this.cdc_data[a].confirmedCase.staff&&(e+=this.cdc_data[a].confirmedCase.staff),"校方未公開"!=this.cdc_data[a].confirmedToday.studentTotal&&(s+=this.cdc_data[a].confirmedToday.studentTotal),"校方未公開"!=this.cdc_data[a].confirmedToday.teacher&&(s+=this.cdc_data[a].confirmedToday.teacher),"校方未公開"!=this.cdc_data[a].confirmedToday.staff&&(s+=this.cdc_data[a].confirmedToday.staff),"校方未公開"!=this.cdc_data[a].isolate.studentTotal&&(r+=this.cdc_data[a].isolate.studentTotal),"校方未公開"!=this.cdc_data[a].isolate.teacher&&(r+=this.cdc_data[a].isolate.teacher),"校方未公開"!=this.cdc_data[a].isolate.staff&&(r+=this.cdc_data[a].isolate.staff),this.tmpChartData.push([this.cdc_data[a].date,e,s,r])}this.cdc_data_tidy=t,this.chartData=this.getChartDataNum(7)},getChartDataNum(t){var a=[],e=[];a.push(this.tmpChartData[0]);for(var s=this.tmpChartData.length-1,r=0;r<t;s--,r++)e.push(this.tmpChartData[s]);for(s=e.length-1;s>=0;s--)a.push(e[s]);return a}},created:function(){this.get_dorm_status()}},d=i,c=e(1001),o=e(3453),l=e.n(o),h=e(6847),f=e(2026),v=e(7024),_=e(1819),m=e(5596),u=e(7894),g=(0,c.Z)(d,s,r,!1,null,null,null),C=g.exports;l()(g,{VBtn:h.Z,VCard:f.Z,VCol:v.Z,VContainer:_.Z,VDivider:m.Z,VRow:u.Z})},2026:function(t,a,e){e.d(a,{Z:function(){return d}});var s=e(9744),r=e(6740),n=e(9367),i=e(5530),d=(0,i.Z)(r.Z,n.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const t={...s.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:a,data:e}=this.generateRouteLink();return e.style=this.styles,this.isClickable&&(e.attrs=e.attrs||{},e.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,e),[this.genProgress(),this.$slots.default])}})},5596:function(t,a,e){e.d(a,{Z:function(){return r}});var s=e(2066),r=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let a;return this.$attrs.role&&"separator"!==this.$attrs.role||(a=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":a,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=534.b099f0c1.js.map