(this.webpackJsonpfullthrottle=this.webpackJsonpfullthrottle||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),c=a.n(l),s=(a(89),a.p,a(90),a(74)),r=a(75),d=a(80),o=a(79),h=(a(91),a(55)),m=a.n(h),j=a(190),u=a(189),b=a(188),_=a(77),p=a.n(_),O=(a(110),"https://raw.githubusercontent.com/mjroidu/Dummy-Data/master/DummyJson"),x=a(4),f=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).componentDidMount=function(){m.a.get(O).then((function(t){e.setState({user_data:t.data.members,api_fail:!1})})).catch((function(t){console.log("hi",t.response),e.setState({api_error:t.response,api_fail:!0})}))},e.openModal=function(t){e.setState({open_modal:!0,current_data:t})},e.handleClose=function(){e.setState({open_modal:!1,date_match_modal:!1,errorValid:!1,selected_date:""})},e.handleCloseSub=function(){e.setState({date_match_modal:!1,errorValid:!1,selected_date:""})},e.handleDateChange=function(t){e.setState({selected_date:t,errorValid:!1})},e.findDate=function(){if(e.setState({date_match_modal:!0,date_match:!1}),""!==e.state.selected_date){var t=e.state.selected_date,a=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear();e.state.current_data.activity_periods.map((function(t){var n=t.start_time.split("  "),i=new Date(n[0]),l=i.getDate()+"-"+(i.getMonth()+1)+"-"+i.getFullYear();a===l&&e.setState({date_match:!0,date_match_modal:!0})}))}else e.setState({errorValid:!0})},e.state={user_data:[],api_fail:!1,api_error:"",open_modal:!1,current_data:[],selected_date:new Date,errorValid:!1,date_match:!1,date_match_modal:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.user_data,n=t.api_fail,i=t.date_match,l=t.date_match_modal,c=t.api_error,s=t.open_modal,r=t.errorValid,d=t.current_data,o=t.selected_date;return console.log("hi",d.activity_periods),Object(x.jsxs)("div",{className:"main-div",children:[Object(x.jsx)("h1",{className:"heading-title",children:"Full Throttle"}),n?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"child-div",children:["Sorry! This api is giving no ",c," response"]})}):Object(x.jsx)(x.Fragment,{children:a.map((function(t){return Object(x.jsx)("div",{className:"child-div",onClick:function(){return e.openModal(t)},children:t.real_name},t.id)}))}),s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(u.a,{open:s,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(x.jsx)("h3",{className:"modal-title",children:d.real_name}),Object(x.jsxs)("h3",{className:"modal-subtitle",children:[" Location: ",d.tz]}),null===d||void 0===d?void 0:d.activity_periods.map((function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("h3",{className:"modal-subtitle2",children:[Object(x.jsx)("b",{children:"Start Time:"})," ",e.start_time,Object(x.jsx)("hr",{className:"divider"}),Object(x.jsx)("b",{children:"End Time: "}),e.end_time]})})})),Object(x.jsxs)("div",{className:"date-styling",children:[Object(x.jsx)(p.a,{selected:o,onChange:function(t){return e.handleDateChange(t)},name:"startDate",placeholderText:"Enter Date",dateFormat:"MM/dd/yyyy"}),r?Object(x.jsx)("div",{className:"invalid-error",children:"invalid date"}):""]}),Object(x.jsx)("div",{className:"date-styling",children:Object(x.jsx)(j.a,{variant:"contained",className:"btn-class",color:"primary",onClick:this.findDate,children:"Submit Date"})}),Object(x.jsx)(b.a,{children:Object(x.jsx)(j.a,{onClick:this.handleClose,color:"primary",children:"Close"})})]}),Object(x.jsxs)(u.a,{open:l,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"modal-title",children:"Its a Match"}),Object(x.jsxs)("h3",{className:"modal-subtitle",children:[" Name: ",d.real_name]}),Object(x.jsxs)("h3",{className:"modal-subtitle",children:[" Location: ",d.tz]})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h3",{className:"modal-title",children:"Oops! your date didn't matched'"})}),Object(x.jsx)(b.a,{children:Object(x.jsx)(j.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]}):"",Object(x.jsx)("h4",{className:"footer",children:"By: Malay Mishra"})]})}}]),a}(n.Component);var g=function(){return Object(x.jsx)("div",{className:"App main-pad",children:Object(x.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),l(e),c(e)}))};c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),v()},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[163,1,2]]]);
//# sourceMappingURL=main.d6f284d6.chunk.js.map