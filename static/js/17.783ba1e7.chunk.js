(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[17],{1123:function(t,n,e){"use strict";e.r(n);var a=e(33),i=e(0),c=e.n(i),o=e(48),r=e(202),l=e(415),s=e(201),d=e(413),u=e(158),h=e(271),b=e(7),m=e(6),f=e(794),g=e(146),p=e(790),O={maPhieu:{id:"maPhieu",name:"Phi\u1ebfu",width:80,className:"text-small font-weight-bold",align:"center",isSearch:!0,sorter:Object(m.sortByText)("maPhieu")},getTableColumns:function(){return[Object(b.a)(Object(b.a)({},m.constants.stt),{},{fixed:!1}),this.maPhieu,f.a.ngay,f.a.thu,f.a.chi,f.a.conLai,g.a.tenDiaDiem,f.a.dienGiai,Object(b.a)(Object(b.a)({},p.a.tenTaiKhoanNganHang),{},{width:220}),m.constants.capNhatRow]},getInputFields:function(){return[f.a.ngay,f.a.thu,f.a.chi,f.a.dienGiai]},getExcelFields:function(){return[m.constants.stt,this.maPhieu,f.a.ngay,f.a.thu,f.a.chi,f.a.conLai,g.a.tenDiaDiem,f.a.dienGiai,p.a.tenTaiKhoanNganHang]}},j=e(414),v=e(3),T=e.n(v),w=e(9),C=e(459),N=e(35),x=e(787),y=e(823),K=e(274),M=e(416),I=e(17),S=u.d.bcThuChiTienMatModal,F=function(t){var n,e,a=t.onAfterAddFinish,i=Object(o.b)(),r=Object(o.c)((function(t){return t.form})),l=r.modal,d=r.datas,u=Object(o.c)((function(t){return t.account})).accountData,h=null===u||void 0===u||null===(n=u.paths)||void 0===n||null===(e=n.bcThuChiTienMat)||void 0===e?void 0:e.edit,b=c.a.useMemo((function(){var t;return!!(null===l||void 0===l||null===(t=l[S])||void 0===t?void 0:t.open)}),[l[S]]);function f(){return(f=Object(w.a)(T.a.mark((function t(n,e){var c,o,r,l;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=2;break}return t.abrupt("return",Object(N.h)());case 2:if(!e.chi||!e.thu){t.next=4;break}return t.abrupt("return",Object(N.f)());case 4:return c=!0,o=Object(m.convertMomentToString)(O.getInputFields(),n),r=Object(m.convertMomentToString)(O.getInputFields(),e),t.next=9,i(Object(K.d)(r));case 9:if(r=t.sent,r=i(Object(M.c)(r)),!e){t.next=25;break}if(null===n||void 0===n?void 0:n.id){t.next=20;break}return t.next=15,i(Object(C.c)(r));case 15:c=t.sent,null===a||void 0===a||a(null===(l=c)||void 0===l?void 0:l.id),c=Boolean(c),t.next=25;break;case 20:return t.t0=Boolean,t.next=23,i(Object(C.f)(o,r));case 23:t.t1=t.sent,c=(0,t.t0)(t.t1);case 25:c&&i(s.a({modalId:S}));case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(I.c)(m.MyModal,{form:!0,title:Object(I.b)("div",{children:"Thu Chi Ti\u1ec1n M\u1eb7t"}),visible:b,onClose:function(){i(s.a({modalId:S}))},onOkModal:function(t,n){return f.apply(this,arguments)},formOptions:Object(m.getFormItemFields)(O.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:S,datas:d,children:[Object(I.b)(x.a,{}),Object(I.b)(y.a,{isAddNew:!0})]})},k=e(199),D=e(270),A=e(66),H=e(75),P=e(15),E=function(t){var n,e=t.dateTimePicker,a=Object(o.b)(),i=Object(o.c)((function(t){return t.account})).isDev,c=Object(o.c)((function(t){return t.bcThuChiTienMat})).castMoneyRemainData;return Object(I.b)(I.a,{children:Object(I.b)(d.a,{header:Object(I.b)("div",{className:"font-weight-bold",children:Object(I.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(I.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(I.b)("div",{children:(null===e||void 0===e||null===(n=e.getMonthRender)||void 0===n?void 0:n.call(e))||null}),Object(I.c)("div",{className:"font-weight-bold",children:["T\u1ed3n cu\u1ed1i th\xe1ng tr\u01b0\u1edbc: ",Object(m.formatNumber)(c.conLai)]}),i&&Object(I.b)("div",{onClick:function(){Object(P.k)(),a(Object(C.g)())},children:Object(I.b)("button",{children:"C\u1eadp nh\u1eadt BCTC c\u0169"})})]}),footer:Object(I.b)("div",{children:Object(I.b)(A.a,{icon:Object(I.b)(H.a,{}),onClick:function(){a(Object(l.b)({tagPageId:u.d.bcThuChiTienMatModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},R=e(417),B=u.d.bcThuChiTienMatModal;n.default=function(){var t,n,e=Object(o.b)(),i=Object(o.c)((function(t){return t.bcThuChiTienMat})),u=i.tabsData,b=i.loading,m=i.pageSize,f=i.bcThuChiTienMats,g=Object(o.c)((function(t){var n;return null===(n=t.tagsPage)||void 0===n?void 0:n[B]})),p=Object(o.c)((function(t){return t.account})).accountData,v=null===p||void 0===p||null===(t=p.paths)||void 0===t||null===(n=t.bcThuChiTienMat)||void 0===n?void 0:n.edit,T=Object(R.b)(),w=Object(a.a)(T,2),x=w[0],y=w[1],K=Object(D.a)({Instance:k.a,onPending:C.e,addSelectedId:C.a,isEdit:v});return c.a.useEffect((function(){return e(Object(C.d)(x)),function(){Object(P.l)("bcThuChiTienMat")}}),[x]),Object(I.c)("div",{className:"bcThuChiTienMat-page",css:h.a,children:[Object(I.b)(d.b,{className:"tabs",options:u,activeKey:g?"aside":"",onTabClick:function(t){if("add"===t&&v){if(!v)return Object(N.h)();var n=new k.a;e(Object(s.c)({modalId:B,data:n.initData}))}else"aside"===t?e(Object(l.b)({tagPageId:B})):"taiExcel"===t&&e(Object(r.b)({tableId:B,constants:O,fileSheet:"bcThuChiTienMatSheet",fileName:"bcThuChiTienMatName"}))}}),Object(I.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[g&&Object(I.b)(E,{dateTimePicker:y}),Object(I.b)("div",{className:"aside-main",children:Object(I.b)(j.a,{isEdit:v,constants:O,actions:K,datas:f,loading:b,modalId:B,isSelection:!0,pagination:!0,pageSize:m,onChange:function(t){e(Object(C.h)(t.pageSize))}})})]}),Object(I.b)(F,{})]})}},787:function(t,n,e){"use strict";var a=e(0),i=e.n(a),c=e(6),o=e(48),r=e(416),l=e(17);n.a=function(t){var n=t.form,e=t.name,a=t.mode,s=t.label,d=t.labelCol,u=t.wrapperCol,h=t.rules,b=t.onAfterSelect,m=t.disabled,f=t.isDanhSachNL,g=t.isDontStoreState,p=t.style,O=Object(o.b)(),j=Object(o.c)((function(t){return t.diaDiem})).diaDiems,v=i.a.useMemo((function(){var t=Object.values(j).filter((function(t){return t.active}));return f&&(t=t.filter((function(t){return t.danhSachNL}))),t.map((function(t){var n="".concat(t.tenDiaDiem);return{value:t.id,label:n}}))}),[j]);var T=Object(l.b)(c.MyFormItem,{label:null!==s&&void 0!==s?s:"\u0110\u1ecba \u0111i\u1ec3m",type:"select",name:null!==e&&void 0!==e?e:"diaDiemId",innerProps:{mode:a,showSearch:!0,allowClear:!0,filterOption:c.onSelectSearch,onChange:function(t){g||O(Object(r.a)(t)),null===b||void 0===b||b(t)},disabled:m,style:p},options:v,rules:null!==h&&void 0!==h?h:[]});return n?Object(l.b)(l.a,{children:Object(l.b)(c.MyForm,{form:n,labelCol:null!==d&&void 0!==d?d:{span:8},wrapperCol:null!==u&&void 0!==u?u:{span:16},children:T})}):Object(l.b)(l.a,{children:T})}},790:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var a=e(6),i={maTaiKhoan:{id:"maTaiKhoan",name:"M\xe3 t\xe0i kho\u1ea3n",className:"text-small font-weight-bold",width:100,isSearch:!0,form:{type:"input"}},tenTaiKhoan:{id:"tenTaiKhoan",name:"T\xean t\xe0i kho\u1ea3n",className:"text-small font-weight-bold",width:130,isSearch:!0,form:{type:"input",rules:[{message:"Ch\u01b0a nh\u1eadp",required:!0}]}},tenTaiKhoanNganHang:{id:"tenTaiKhoanNganHang",name:"T\xean t\xe0i kho\u1ea3n",className:"text-small",isSearch:!0,width:200},soTaiKhoan:{id:"soTaiKhoan",name:"S\u1ed1 t\xe0i kho\u1ea3n",className:"text-small",width:100,align:"",isSearch:!0,form:{rules:[{message:"Ch\u01b0a nh\u1eadp",required:!0}],type:"input"}},nganHang:{id:"nganHang",name:"Ng\xe2n h\xe0ng",className:"text-small",width:100,align:"",isSearch:!0,sorter:Object(a.sortByText)("nganHang"),form:{rules:[{message:"Ch\u01b0a nh\u1eadp",required:!0}],type:"input"}},chiNhanh:{id:"chiNhanh",name:"Chi nh\xe1nh",className:"text-small",width:100,align:"",form:{type:"input"}},loaiTaiKhoan:{id:"loaiTaiKhoan",name:"Lo\u1ea1i TK",className:"text-small",width:100,align:"",isSearch:!0,sorter:Object(a.sortByText)("loaiTaiKhoan"),form:{type:"input"}},getTableColumns:function(){return[a.constants.stt,this.maTaiKhoan,this.tenTaiKhoan,this.soTaiKhoan,this.nganHang,this.chiNhanh,this.loaiTaiKhoan,a.constants.active,a.constants.editRow]},getInputFields:function(t){return[this.maTaiKhoan,this.tenTaiKhoan,this.soTaiKhoan,this.nganHang,this.chiNhanh,this.loaiTaiKhoan]},getFormViewFields:function(){var t=[this.maTaiKhoan,this.tenTaiKhoan,this.soTaiKhoan,this.nganHang,this.chiNhanh,this.loaiTaiKhoan];return Object(a.getFormItemViewFields)(t)}}},792:function(t,n,e){"use strict";var a=e(3),i=e.n(a),c=e(7),o=e(9),r=e(135),l=e(0),s=e.n(l),d=e(6),u=e(48),h=e(201),b=e(35),m=e(17),f=["modalId","constants","actions","modalTitle","onAfterAddFinish","isEdit"];n.a=function(t){var n=t.modalId,e=t.constants,a=t.actions,l=t.modalTitle,g=t.onAfterAddFinish,p=t.isEdit,O=Object(r.a)(t,f),j=Object(u.b)(),v=Object(u.c)((function(t){return t.form})),T=v.modal,w=v.edit,C=v.datas,N=s.a.useMemo((function(){var t;return!!(null===(t=T[n])||void 0===t?void 0:t.open)}),[T[n]]),x=s.a.useMemo((function(){return Object(d.getFormItemFields)(e.getInputFields(),w)}),[w]);function y(){return(y=Object(o.a)(i.a.mark((function t(e,c){var o,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!0,!c){t.next=17;break}if(p){t.next=4;break}return t.abrupt("return",Object(b.h)());case 4:if(e.id){t.next=12;break}return t.next=7,j(a.onAddAsync({validatedValues:c}));case 7:o=t.sent,null===g||void 0===g||g(null===(r=o)||void 0===r?void 0:r.id),o=Boolean(o),t.next=17;break;case 12:return t.t0=Boolean,t.next=15,j(a.onUpdateAsync({currentData:e,validatedValues:c}));case 15:t.t1=t.sent,o=(0,t.t0)(t.t1);case 17:o&&j(h.a({modalId:n}));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.b)(d.MyModal,Object(c.a)(Object(c.a)({},O),{},{form:!0,title:l,modalId:n,visible:N,onClose:function(t,n){return y.apply(this,arguments)},formOptions:x,formProps:{labelCol:{span:8},wrapperCol:{span:16}},datas:C}))}},794:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var a=e(6),i={tongDoanhThu:{id:"tongDoanhThu",name:"T\u1ed5ng doanh thu",width:130,className:"text-small font-weight-bold text-danger",align:"right",render:a.numberRender},ngay:{id:"ngay",name:"Ng\xe0y",width:80,className:"text-small font-weight-bold",align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},thu:{id:"thu",name:"Thu",width:100,className:"text-small font-weight-bold text-success",align:"right",form:{type:"input-number-format"},render:a.numberRender},chi:{id:"chi",name:"Chi",width:100,align:"right",className:"text-small font-weight-bold text-danger",form:{type:"input-number-format"},render:a.numberRender},conLai:{id:"conLai",name:"C\xf2n l\u1ea1i",width:100,align:"right",className:"text-small font-weight-bold",render:a.numberRender},dienGiai:{id:"dienGiai",name:"Di\u1ec5n gi\u1ea3i",width:200,className:"text-small",isSearch:!0,form:{type:"text-area"}},getTableColumns:function(){return[a.constants.stt,a.constants.active,a.constants.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[a.constants.active]}}},802:function(t,n,e){"use strict";e(0);var a=e(790),i=e(270),c=e(432),o=e(158),r=e(274),l=e(792),s=e(48),d=e(17);n.a=function(t){var n,e,u=t.onAfterAddFinish,h=Object(s.c)((function(t){return t.account})).accountData,b=null===h||void 0===h||null===(n=h.paths)||void 0===n||null===(e=n.taiKhoanNganHang)||void 0===e?void 0:e.edit,m=Object(i.a)({Instance:c.a,onPending:r.f,addSelectedId:r.a,isEdit:b});return Object(d.b)(l.a,{isEdit:b,modalId:o.d.taiKhoanNganHangModal,modalTitle:"T\xe0i kho\u1ea3n ng\xe2n h\xe0ng",actions:m,constants:a.a,onAfterAddFinish:u})}},823:function(t,n,e){"use strict";var a=e(0),i=e.n(a),c=e(66),o=e(132),r=e(6),l=e(48),s=e(274),d=e(802),u=e(59),h=e(201),b=e(158),m=e(17);n.a=function(t){var n=t.form,e=t.name,a=t.mode,f=t.label,g=t.labelCol,p=t.wrapperCol,O=t.rules,j=t.isAddNew,v=Object(l.b)(),T=Object(l.c)((function(t){return t.taiKhoanNganHang})).taiKhoanNganHangs,w=i.a.useMemo((function(){return Object.values(T).filter((function(t){return t.active})).map((function(t){var n="".concat(t.maTaiKhoan||""," - ").concat(t.tenTaiKhoan," - ").concat(t.soTaiKhoan," - ").concat(t.nganHang);return{value:t.id,label:n}}))}),[T]);var C=Object(m.b)(r.MyFormItem,{label:null!==f&&void 0!==f?f:"T\xe0i kho\u1ea3n ng\xe2n h\xe0ng",type:"select",name:null!==e&&void 0!==e?e:"taiKhoanNganHangId",innerProps:{mode:a,showSearch:!0,allowClear:!0,filterOption:r.onSelectSearch,onChange:function(t){v(Object(s.a)(t))},notFoundContent:j?Object(m.b)("div",{children:Object(m.b)(c.a,{icon:Object(m.b)(u.a,{}),type:"primary",onClick:function(){return v(Object(h.c)({modalId:b.d.taiKhoanNganHangModal,data:{}}))},children:"Th\xeam m\u1edbi"})}):Object(m.b)(o.a,{})},options:w,rules:O||[]});return n?Object(m.c)(m.a,{children:[Object(m.b)(r.MyForm,{form:n,labelCol:g||{span:8},wrapperCol:p||{span:16},children:C}),Object(m.b)(d.a,{onAfterAddFinish:function(t){n.setFieldsValue({taiKhoanNganHangId:t})}})]}):Object(m.c)(m.a,{children:[C,Object(m.b)(d.a,{})]})}}}]);