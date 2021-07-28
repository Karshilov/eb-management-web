(self["webpackChunkeb_management_web"]=self["webpackChunkeb_management_web"]||[]).push([[370],{7781:(e,s,a)=>{"use strict";a.d(s,{O:()=>i,z:()=>l});var t=a(1488),n=a.n(t);const i=[{name:"name",label:"团队名称",field:"name",require:!0,align:"center"},{name:"leader_id",label:"团队创建人",field:"leader_id",require:!0,align:"center"},{name:"create_time",label:"上传时间",field:"create_time",format:e=>n()(1e3*e).format("YYYY-MM-DD"),required:!0,align:"center"},{name:"action",label:"操作",field:e=>e,require:!0,align:"center"}],l=[{name:"title",label:"房源标题",field:"title",required:!0,align:"center",headerStyle:"min-width: 250px"},{name:"city",label:"房源城市",field:"city",required:!0,align:"center"},{name:"price",label:"预期价格（元/月）",field:"price",require:!0,align:"center"},{name:"rent_type",label:"结算类型",field:"rent_type",require:!0,align:"center"},{name:"create_time",label:"上传时间",field:"create_time",format:e=>n()(1e3*e).format("YYYY-MM-DD"),required:!0,align:"center"},{name:"area",label:"面积（㎡）",field:"area",required:!0,align:"center"},{name:"floor",label:"楼层信息",field:e=>`${e.floor} / ${e.total_floor}`,required:!0,align:"center"},{name:"owner",label:"房东/经纪人",field:e=>e.owner.username,required:!0,align:"center"},{name:"action",label:"操作",field:e=>e,require:!0,align:"center"}]},9203:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>Q});a(7280);var t=a(3673);const n=(0,t.Wm)("span",null,"请简述拒绝理由（如团队名称含敏感词）",-1),i={class:"list-page-center"};function l(e,s,a,l,r,o){const d=(0,t.up)("q-icon"),u=(0,t.up)("q-card-section"),c=(0,t.up)("q-input"),j=(0,t.up)("q-spinner-dots"),m=(0,t.up)("q-inner-loading"),p=(0,t.up)("q-btn"),g=(0,t.up)("q-form"),f=(0,t.up)("q-card"),h=(0,t.up)("q-dialog"),b=(0,t.up)("q-td"),y=(0,t.up)("q-table"),v=(0,t.up)("q-scroll-area"),k=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(k,{style:{background:"#fff"}},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{modelValue:e.visible,"onUpdate:modelValue":s[4]||(s[4]=s=>e.visible=s)},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{style:{width:"40vw",padding:"20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{class:"cloumn",style:{display:"flex","justify-content":"center"}},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{name:e.matInfo,style:{"font-size":"18px"}},null,8,["name"]),n])),_:1}),(0,t.Wm)(g,{onSubmit:s[2]||(s[2]=s=>e.onRefuse(e.currentSelected)),onReset:s[3]||(s[3]=()=>{this.reason=""}),class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{filled:"",modelValue:e.reason,"onUpdate:modelValue":s[1]||(s[1]=s=>e.reason=s),label:"在此输入拒绝的理由",type:"textarea","lazy-rules":"",rules:[e=>e&&e.length>0||"原因不得为空",e=>-1!==e.search(/[^\s]/)||"原因不能全是空字符"]},null,8,["modelValue","rules"]),(0,t.Wm)("div",null,[(0,t.Wm)(m,{showing:e.refuseLoading},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{size:"50px",color:"primary"})])),_:1},8,["showing"]),(0,t.Wm)(p,{label:"确定",type:"submit",color:"primary","v-close-popup":e.visible,disable:e.refuseLoading},null,8,["v-close-popup","disable"]),(0,t.Wm)(p,{label:"重置",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(v,{style:{position:"absolute",top:"0px",bottom:"0px",left:"0px",right:"0px"}},{default:(0,t.w5)((()=>[(0,t.Wm)("div",i,[0!==e.list.length?((0,t.wg)(),(0,t.j4)(y,{key:0,columns:e.columns,"row-key":"id",rows:e.list,title:"待审核房源",class:"header-table",pagination:e.pagination,"onUpdate:pagination":s[5]||(s[5]=s=>e.pagination=s),loading:e.tableLoading,onRequest:e.loadData},{"body-cell-action":(0,t.w5)((s=>[(0,t.Wm)(b,{key:"action",props:s,style:{"text-align":"center"},"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{label:"通过",color:"primary",disable:e.loading,style:{margin:"10px"},onClick:a=>e.onApproval(s.row)},null,8,["disable","onClick"]),(0,t.Wm)(p,{label:"拒绝",color:"primary",outline:"",disable:e.loading,style:{margin:"10px"},onClick:()=>{this.visible=!0,this.currentSelected=s.row}},null,8,["disable","onClick"])])),_:2},1032,["props"])])),_:1},8,["columns","rows","pagination","loading","onRequest"])):(0,t.kq)("",!0)])])),_:1})])),_:1})}var r=a(1959),o=a(1768),d=a(7781),u=a(9822),c=function(e,s,a,t){function n(e){return e instanceof a?e:new a((function(s){s(e)}))}return new(a||(a=Promise))((function(a,i){function l(e){try{o(t.next(e))}catch(s){i(s)}}function r(e){try{o(t["throw"](e))}catch(s){i(s)}}function o(e){e.done?a(e.value):n(e.value).then(l,r)}o((t=t.apply(e,s||[])).next())}))};const j=(0,t.aZ)({name:"audit-resources",setup(){const e=(0,r.iH)(!1),s=(0,r.iH)({page:1,rowsPerPage:10,rowsNumber:100}),a=(0,r.iH)([]),t=(0,r.iH)(0),n=(0,r.iH)(!1),i=(0,r.iH)(!1),l=(0,r.iH)(""),o=(0,r.iH)(!1),u=(0,r.iH)(a.value[0]);return{tableLoading:e,pagination:s,columns:d.O,list:a,total:t,loading:n,visible:i,reason:l,refuseLoading:o,currentSelected:u}},data(){return{matInfo:u.Qec}},created(){return c(this,void 0,void 0,(function*(){o.api.defaults.headers={"x-api-token":this.$store.state.userModule.apiToken},yield this.loadData({pagination:this.pagination})}))},methods:{loadData(e){return c(this,void 0,void 0,(function*(){this.tableLoading=!0;const{page:s,rowsPerPage:a}=e.pagination,t=yield o.api.get("/admin/audit/team",{params:{page_size:a,page_num:s}}),n=t.data.success,i=t.data.reason;if(n){const e=t.data.result.total,n=t.data.result.list;for(let s=0;s<n.length;s++){const e=yield o.api.get("/user",{params:{id:n[s].leader_id}});e.data.success&&(n[s].leader_id=e.data.result.username)}this.list=n,this.pagination.page=s,this.pagination.rowsPerPage=a,this.pagination.rowsNumber=e}else this.$q.notify({type:"negative",message:i});this.tableLoading=!1}))},onApproval(e){return c(this,void 0,void 0,(function*(){const{id:s}=e;this.loading=!0;const a=yield o.api.post("/admin/audit/team",{team_id:s,approval:!0,reason:"通过"}),t=a.data.success,n=a.data.reason;t?this.$q.notify({type:"positive",message:"审核成功"}):this.$q.notify({type:"negative",message:n}),this.loading=!1,yield this.loadData({pagination:this.pagination})}))},onRefuse(e){return c(this,void 0,void 0,(function*(){const{id:s}=e;this.refuseLoading=!0;const a=yield o.api.post("/admin/audit/team",{team_id:s,approval:!1,reason:this.reason}),t=a.data.success,n=a.data.reason;t?this.$q.notify({type:"positive",message:"已拒绝并通知对方"}):this.$q.notify({type:"negative",message:n}),this.reason="",this.refuseLoading=!1,this.visible=!1,yield this.loadData({pagination:this.pagination})}))}}});var m=a(4379),p=a(6778),g=a(151),f=a(5589),h=a(4554),b=a(8689),y=a(4842),v=a(6941),k=a(4765),w=a(4607),q=a(7704),_=a(4093),z=a(3884),x=a(677),W=a(7518),Z=a.n(W);j.render=l;const Q=j;Z()(j,"components",{QPage:m.Z,QDialog:p.Z,QCard:g.Z,QCardSection:f.Z,QIcon:h.Z,QForm:b.Z,QInput:y.Z,QInnerLoading:v.Z,QSpinnerDots:k.Z,QBtn:w.Z,QScrollArea:q.Z,QTable:_.Z,QTd:z.Z}),Z()(j,"directives",{ClosePopup:x.Z})},6700:(e,s,a)=>{var t={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function n(e){var s=i(e);return a(s)}function i(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=i,e.exports=n,n.id=6700}}]);