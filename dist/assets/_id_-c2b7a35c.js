import{a as d}from"./axios-3a76d256.js";import{u,d as r,i as _,e as m,r as h,o as p,c as v,b as s,t as a,a as f,w as g,g as x}from"./index-4b18e533.js";const b={class:"p-5"},k={class:"container"},w={class:"row"},y={class:"col-8"},B=s("hr",null,null,-1),N=["src"],R=s("hr",null,null,-1),V={class:"d-flex aling-items-center"},j={class:"me-4 mb-0"},I={__name:"[id]",setup(C){const n=u(),t=r([]),c=r(""),l=async()=>{try{const e=await d({method:"get",url:"/json/vue-courses.json"});t.value=e.data,e.data.forEach(o=>{o.id==n.params.id&&(t.value=o)})}catch{c.data="API 錯誤"}return c};return _(e=>{let o=new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g");return e=e.replace(o,","),e}),m(()=>{l()}),(e,o)=>{const i=h("RouterLink");return p(),v("div",b,[s("div",k,[s("div",w,[s("div",y,[s("h1",null,a(t.value.courseName),1),B,s("img",{src:t.value.cover,alt:"",class:"img-fluid pb-3"},null,8,N),s("p",null,a(t.value.description),1),R,s("div",V,[s("h4",j,a(t.value.price),1),f(i,{to:"/courses",class:"btn btn-primary"},{default:g(()=>[x("返回列表")]),_:1})])])])])])}}};export{I as default};