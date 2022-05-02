"use strict";(self["webpackChunkntpu_tool"]=self["webpackChunkntpu_tool"]||[]).push([[862],{5862:function(t,e,i){i.r(e),i.d(e,{default:function(){return j}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("br"),i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("v-alert",{attrs:{dense:"",outlined:""}},[i("strong",[t._v("公告！")]),t._v(" 從現在開始，您可以參訪 "),i("a",{attrs:{href:"../covid"}},[t._v("防疫數據")]),t._v(" 頁面，查看最新北大防疫數據。 ")]),i("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[i("strong",[t._v("警告！")]),t._v(" 勿使用他人個資，衍生之法律問題請自行負責，伺服器亦不會記錄任何資訊。 ")]),i("v-alert",{attrs:{dense:"",outlined:"",type:"warning"}},[i("strong",[t._v("注意！")]),t._v(" 請關注 Taiwan CDC 所發佈之最新消息，且建議下載「"),i("a",{attrs:{href:"../TaiwanSocialDistancing"}},[t._v("臺灣社交距離")]),t._v("」，打開藍牙、開啟追蹤，以保護自身與他人安全。 ")])],1)],1)],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.form_show,expression:"form_show"}],staticClass:"form"},[i("v-card",{staticClass:"mx-auto",attrs:{width:"344"}},[i("br"),i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("h1",[t._v("防疫登錄 QRCode")])]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("br")]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{rules:t.idRules,type:"number",label:"學號",required:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),i("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"確定這個學號是自己的嗎？",required:""},model:{value:t.checkbox_self,callback:function(e){t.checkbox_self=e},expression:"checkbox_self"}}),i("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"同意服務條款",required:""},model:{value:t.checkbox_law,callback:function(e){t.checkbox_law=e},expression:"checkbox_law"}}),i("p",{staticStyle:{"font-size":"12px",color:"gray"}},[t._v(" 相關條款可點選右上角問號按鈕查看 ")]),i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("登入")])],1)],1)],1)],1)],1),i("br")],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.qrcode_show,expression:"qrcode_show"}],staticClass:"qrcode"},[i("v-card",{staticClass:"mx-auto",attrs:{width:"344",elevation:"5"}},[i("br"),i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",align:"center"}},[i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("h1",[t._v("防疫登錄")])]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("br")]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("VueBarcode",{attrs:{value:t.id,options:t.barcode_option}})],1)],1)],1)],1),i("br")],1),i("br"),i("v-card",{directives:[{name:"show",rawName:"v-show",value:t.dorm_information,expression:"dorm_information"}],staticClass:"mx-auto",attrs:{width:"344",elevation:"5"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",align:"center"}},[i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("h1",[t._v("宿舍抽籤資訊")])]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("br")]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("p",{staticStyle:{"font-size":"22px"}},[t._v("☞ "+t._s(t.dorm_status)+" ☜")])]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("br")]),i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("p",{staticStyle:{color:"#646464","font-size":"13px"}},[t._v(" "+t._s(t.dorm_status_data_detail)+" ")]),i("a",{staticStyle:{color:"#646464","font-size":"13px"},attrs:{href:t.dorm_status_data_detail_url,target:"_blank"}},[t._v(t._s(t.dorm_status_data_detail_url))])])],1)],1)],1)],1),i("br"),i("v-card",{staticClass:"mx-auto",attrs:{width:"344",elevation:"0"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",align:"center"}},[i("v-row",{attrs:{align:"center",justify:"center",length:""}},[i("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:t.reset_form}},[t._v("重新輸入")])],1)],1)],1)],1)],1)],1),i("br")],1)},r=[],a={name:"HomeView",components:{},data:()=>({valid:!0,id:"",idRules:[t=>!!t||"請輸入學號",t=>t&&9===t.length||"請輸入學號正確格式"],select:null,checkbox_self:!1,checkbox_law:!1,qrcode_show:!1,form_show:!0,barcode_option:{displayValue:!1,background:"#fff",width:"2px",height:"30px",fontSize:"10px"},dorm_status:"載入中...",dorm_status_data_detail:"",dorm_status_data_detail_url:"",dorm_information:!1}),methods:{validate(){this.$refs.form.validate()&&(this.qrcode_show=!0,this.form_show=!1,this.$cookie.set("userid",this.id,30),this.dorm_information&&this.get_dorm_status())},reset_form(){this.qrcode_show=!1,this.form_show=!0,this.$cookie.delete("userid"),this.dorm_status="載入中...",this.dorm_status_data_detail="",this.dorm_status_data_detail_url=""}},created:function(){console.log(window.location.href),this.$cookie.get("userid")&&(this.id=this.$cookie.get("userid"),this.qrcode_show=!0,this.form_show=!1,this.dorm_information&&this.get_dorm_status())}},n=a,o=i(1001),l=i(3453),h=i.n(l),c=i(7847),u=i(6847),d=i(2026),v=i(9524),p=i(5332),m=i(4749),f=i(144),_=f.Z.extend({name:"rippleable",directives:{ripple:m.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),g=i(8789),w=i(5530);function b(t){t.preventDefault()}var k=(0,w.Z)(p.Z,_,g.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=p.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:b},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:b},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}),x=k.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...p.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(v.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),y=i(7024),V=i(1819),C=i(6141),$=i(950),I=(0,w.Z)(C.Z,(0,$.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),B=i(7894),S=i(2660),Z=(0,o.Z)(n,s,r,!1,null,null,null),j=Z.exports;h()(Z,{VAlert:c.Z,VBtn:u.Z,VCard:d.Z,VCheckbox:x,VCol:y.Z,VContainer:V.Z,VForm:I,VRow:B.Z,VTextField:S.Z})}}]);
//# sourceMappingURL=862.9a99d86c.js.map