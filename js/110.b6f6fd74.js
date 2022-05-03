"use strict";(self["webpackChunkntpu_tool"]=self["webpackChunkntpu_tool"]||[]).push([[110],{2214:function(t,e,a){a.d(e,{Z:function(){return _}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("v-alert",{attrs:{dense:"",outlined:"",type:"error","max-height":"80%"}},[a("strong",[t._v("嚴重警告！")]),t._v(" 目前資料依照 2022/05/02 "),a("strong",[t._v("原先發佈（數據遭修改前）")]),t._v("之格式發佈，目前不使用累加確診數的方式，但目前公布之數據與前項發生衝突，"),a("strong",[t._v("資料缺乏正確性")]),t._v("，請自行斟酌校方提供資料，所有內容皆已完全顯示於最下方列表，可參考檢視。 ")])],1),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("v-alert",{attrs:{dense:"",outlined:"",type:"error","max-height":"80%"}},[a("strong",[t._v("嚴重警告！")]),t._v(" 由於校方公布之數據在公布過後又突然刪減資訊，目前無法正確得知計算方式，且行政單位說法不一，無法正確判斷所有資料狀況，請謹慎運用此資料。 ")])],1)],1)],1)],1)},n=[],r=a(1001),i=a(3453),c=a.n(i),d=a(7847),o=a(7024),l=a(1819),h=a(7894),f={},v=(0,r.Z)(f,s,n,!1,null,null,null),_=v.exports;c()(v,{VAlert:d.Z,VCol:o.Z,VContainer:l.Z,VRow:h.Z})},1281:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("br"),a("covidAlert"),a("h1",[t._v("Covid-19 @NTPU")]),t._m(0),a("h4",{staticStyle:{color:"red"}},[t._v(t._s(t.data_loading))]),a("v-divider"),a("br"),a("v-card",{staticClass:"mx-auto",attrs:{width:"80%",color:"#F77676"}},[a("br"),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h0",[t._v("+"+t._s(t.cdc_data_tidy.newestConfirmedCase))])],1),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h4",[t._v(t._s(t.cdc_data_tidy.newestConfirmedCaseDate)+" 確診人數")])])],1)],1)],1),a("br")],1),a("br"),a("v-card",{staticClass:"mx-auto",attrs:{width:"80%",color:"#F7AD76"}},[a("br"),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h0",[t._v(t._s(t.cdc_data_tidy.confirmedCase))])],1),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h4",[t._v(t._s(t.cdc_data_tidy.newestConfirmedCaseDate)+" 公告確診")])])],1)],1)],1),a("br")],1),a("v-card",{staticClass:"mx-auto",attrs:{width:"80%",elevation:"0"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("v-card",{staticClass:"mx-auto",attrs:{width:"33%",elevation:"2"}},[a("br"),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h1",[t._v(t._s(t.cdc_data_tidy.confirmedCaseSanxia))])]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h3",[t._v("三峽")])])],1)],1)],1),a("br")],1),a("v-card",{staticClass:"mx-auto",attrs:{width:"33%",elevation:"2"}},[a("br"),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h1",[t._v(t._s(t.cdc_data_tidy.confirmedCaseTaipei))])]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h3",[t._v("臺北")])])],1)],1)],1),a("br")],1),a("v-card",{staticClass:"mx-auto",attrs:{width:"34%",elevation:"2"}},[a("br"),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h1",[t._v(t._s(t.cdc_data_tidy.confirmedCaseUndefined))])]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h3",[t._v("未定義")])])],1)],1)],1),a("br")],1)],1)],1)],1)],1)],1),a("br"),a("v-card",{staticClass:"mx-auto",attrs:{width:"80%"}},[a("GChart",{attrs:{type:"LineChart",data:t.chartData,options:t.chartOptions}})],1),a("br"),a("v-divider"),a("br"),a("v-card",{staticClass:"mx-auto",attrs:{width:"80%",elevation:"0"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h2",[t._v(t._s(t.cdc_data_tidy.newestConfirmedCaseDate))])]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("br")]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h3",[t._v(" 居家隔離 "),a("strong",[t._v(t._s(t.cdc_data_tidy.isolateTotal))]),t._v(" 人")])]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h3",[t._v(" 自主健康管理 "),a("strong",[t._v(t._s(t.cdc_data_tidy.selfHealthManagementTotal))]),t._v(" 人")])]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h3",[t._v(" 居家檢疫 "),a("strong",[t._v(t._s(t.cdc_data_tidy.homeQuarantineTotal))]),t._v(" 人")])])],1)],1)],1)],1),a("br"),a("v-divider"),a("br"),a("v-card",{staticClass:"mx-auto",attrs:{width:"100%",elevation:"0"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("h2",[t._v("更多")])]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("br")]),a("v-row",{attrs:{align:"center",justify:"center",length:""}},[a("v-btn",{attrs:{elevation:"2",outlined:"",href:"covid/list"}},[t._v(" 資料列表 ")]),a("div",{staticStyle:{padding:"5px"}}),a("v-btn",{attrs:{elevation:"2",outlined:"",href:"covid/api"}},[t._v(" API 串接 ")])],1)],1)],1)],1)],1),a("br")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",[t._v("Data from: "),a("a",{attrs:{href:"http://lms.ntpu.edu.tw/board.php?courseID=50180&f=news",target:"_bland"}},[t._v("北大防疫專區")]),t._v(" （資料依校方公告為主）")])}],r=a(2214),i={name:"HomeView",components:{covidAlert:r.Z},data(){return{data_loading:"Loading data...",cdc_data:[],cdc_data_tidy:{confirmedCase:"N/A",confirmedCaseTaipei:"N/A",confirmedCaseSanxia:"N/A",confirmedCaseUndefined:"N/A",newestConfirmedCase:"N/A",newestConfirmedCaseTaipei:"N/A",newestConfirmedCaseSanxia:"N/A",newestConfirmedCaseUndefined:"N/A",newestConfirmedCaseDate:"N/A",isolateTotal:"N/A",selfHealthManagementTotal:"N/A",homeQuarantineTotal:"N/A"},chartData:[],chartOptions:{chart:{title:"COVID-19 確診數",subtitle:""}},selfHealthManagementPublic:!0,homeQuarantinePublic:!0}},methods:{get_dorm_status(){const t="https://script.google.com/macros/s/AKfycbxZTWjZU1T-Ro0BQW5NLi8ewFSCNxv2NJTLoLpTXNmdMT0fXSCD9k6BeRY0Y8UrBnFN9g/exec";this.$axios.get(t).then((t=>{console.log(t),this.cdc_data=t.data;const e=new Date(this.cdc_data[0].dataTimestamp);this.data_loading="Updated: "+e,this.tidy_cdc_data()})).catch((t=>{console.log(t),this.data_loading=t}))},tidy_cdc_data(){var t={confirmedCase:0,confirmedCaseTaipei:0,confirmedCaseSanxia:0,confirmedCaseUndefined:0,newestConfirmedCase:0,newestConfirmedCaseTaipei:0,newestConfirmedCaseSanxia:0,newestConfirmedCaseUndefined:0,newestConfirmedCaseDate:"",isolateTotal:0,selfHealthManagementTotal:0,homeQuarantineTotal:0};this.cdc_graph_list=[],this.chartData=[["日期","確診"]],t.newestConfirmedCaseDate=this.cdc_data[0].date,"校方未公開"!=this.cdc_data[0].confirmedToday.studentTotal&&(t.newestConfirmedCase+=this.cdc_data[0].confirmedToday.studentTotal),"校方未公開"!=this.cdc_data[0].confirmedToday.teacher&&(t.newestConfirmedCase+=this.cdc_data[0].confirmedToday.teacher),"校方未公開"!=this.cdc_data[0].confirmedToday.staff&&(t.newestConfirmedCase+=this.cdc_data[0].confirmedToday.staff),t.isolateTotal+=this.cdc_data[0].isolate.studentTotal,t.isolateTotal+=this.cdc_data[0].isolate.teacher,t.isolateTotal+=this.cdc_data[0].isolate.staff,t.confirmedCase=this.cdc_data[0].confirmedCase.studentTotal,t.confirmedCaseTaipei=this.cdc_data[0].confirmedCase.studentZoneDetail.Taipei,t.confirmedCaseSanxia=this.cdc_data[0].confirmedCase.studentZoneDetail.Sanxia,"校方未公開"!=this.cdc_data[0].confirmedCase.teacher&&(t.confirmedCaseUndefined+=this.cdc_data[0].confirmedCase.teacher,t.confirmedCase+=this.cdc_data[0].confirmedCase.teacher),"校方未公開"!=this.cdc_data[0].confirmedCase.staff&&(t.confirmedCaseUndefined+=this.cdc_data[0].confirmedCase.staff,t.confirmedCase+=this.cdc_data[0].confirmedCase.staff),"校方未公開"!=this.cdc_data[0].selfHealthManagement.studentTotal&&(t.selfHealthManagementTotal+=this.cdc_data[0].selfHealthManagement.studentTotal),"校方未公開"!=this.cdc_data[0].selfHealthManagement.teacher&&(t.selfHealthManagementTotal+=this.cdc_data[0].selfHealthManagement.teacher),"校方未公開"!=this.cdc_data[0].selfHealthManagement.staff&&(t.selfHealthManagementTotal+=this.cdc_data[0].selfHealthManagement.staff),"校方未公開"===this.cdc_data[0].selfHealthManagement.studentTotal&&"校方未公開"===this.cdc_data[0].selfHealthManagement.teacher&&"校方未公開"===this.cdc_data[0].selfHealthManagement.staff&&(t.selfHealthManagementTotal="校方未公開"),"校方未公開"!=this.cdc_data[0].homeQuarantine.studentTotal&&(t.homeQuarantineTotal+=this.cdc_data[0].homeQuarantine.studentTotal),"校方未公開"!=this.cdc_data[0].homeQuarantine.teacher&&(t.homeQuarantineTotal+=this.cdc_data[0].homeQuarantine.teacher),"校方未公開"!=this.cdc_data[0].homeQuarantine.staff&&(t.homeQuarantineTotal+=this.cdc_data[0].homeQuarantine.staff),"校方未公開"===this.cdc_data[0].homeQuarantine.studentTotal&&"校方未公開"===this.cdc_data[0].homeQuarantine.teacher&&"校方未公開"===this.cdc_data[0].homeQuarantine.staff&&(t.homeQuarantineTotal="校方未公開");for(var e=this.cdc_data.length-1;e>=0;e--)this.chartData.push([this.cdc_data[e].date,this.cdc_data[e].confirmedCase.studentTotal]);this.cdc_data_tidy=t}},created:function(){this.get_dorm_status()}},c=i,d=a(1001),o=a(3453),l=a.n(o),h=a(6847),f=a(2026),v=a(7024),_=a(1819),u=a(5596),m=a(7894),g=(0,d.Z)(c,s,n,!1,null,null,null),C=g.exports;l()(g,{VBtn:h.Z,VCard:f.Z,VCol:v.Z,VContainer:_.Z,VDivider:u.Z,VRow:m.Z})},2026:function(t,e,a){a.d(e,{Z:function(){return c}});var s=a(9744),n=a(6740),r=a(9367),i=a(5530),c=(0,i.Z)(n.Z,r.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const t={...s.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:a}=this.generateRouteLink();return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},5596:function(t,e,a){a.d(e,{Z:function(){return n}});var s=a(2066),n=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=110.b6f6fd74.js.map