(function(){"use strict";var e={8627:function(e,t,n){var o=n(9242),r=n(7724),i=(n(4415),n(3396));function a(e,t,n,o,r,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var s={name:"App",components:{}},l=n(89);const u=(0,l.Z)(s,[["render",a]]);var c=u,p=n(2483);function d(e,t,n,o,r,a){const s=(0,i.up)("el-table-column"),l=(0,i.up)("el-table"),u=(0,i.Q2)("loading");return(0,i.wy)(((0,i.wg)(),(0,i.j4)(l,{data:r.sign_history,stripe:"",style:{width:"100%"}},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{prop:"sign_time",label:"签到日期"}),(0,i.Wm)(s,{prop:"status",label:"签到状态"})])),_:1},8,["data"])),[[u,r.loading]])}n(1703);var m=n(6265),g=n.n(m),h=n(7178),f=n(2655);const w=g().create({baseURL:{NODE_ENV:"production",BASE_URL:""}.VUE_APP_BASE_API,timeout:8e3});w.interceptors.request.use((e=>e),(e=>(console.log(e),Promise.reject(e)))),w.interceptors.response.use((e=>{const t=e.data;return 200!==t.code?((0,h.z8)({message:t.msg||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||f.T.confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((()=>{})),Promise.reject(new Error(t.msg||"Error"))):t}),(e=>(console.log("err"+e),(0,h.z8)({message:e.message,type:"error",duration:5e3}),Promise.reject(e))));var v=w;const b={isEnd:!1,start(e){let t=null;e&&window.addEventListener("scroll",(()=>{t&&clearTimeout(t),t=setTimeout((()=>{const t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.scrollHeight,o=document.documentElement.clientHeight;this.isEnd||n!=t+o||(window.scrollTo(0,t-100),e())}),300)}))},end(){this.isEnd=!0}};var _=b,y={data(){return{sign_history:[],loading:!1,count:50,user:{}}},mounted(){this.user=JSON.parse(window.localStorage.getItem("user")),this.getSignLi(),_.start(this.getSignLi)},methods:{getSignLi(){console.log("获取新数据"),this.loading=!0;let e=new FormData;e.append("username",this.user.username),e.append("pwd",this.user.pwd),e.append("skip",this.sign_history.length),e.append("limit",this.count),v.post("http://superupup.top/98t/checkStatus",e).then((e=>{const t=e.sign_history;for(let n=0,o=t.length;n<o;n++){const e=new Date(1e3*t[n].sign_time),o=e.getFullYear(),r=("0"+(e.getMonth()+1)).slice(-2),i=("0"+e.getDate()).slice(-2),a=("0"+e.getHours()).slice(-2),s=("0"+e.getMinutes()).slice(-2);t[n].sign_time=`${o}年${r}月${i}日 ${a}:${s}`}t.length<this.count&&_.end(),this.sign_history=this.sign_history.concat(t)})).finally((()=>{this.loading=!1}))}}};const x=(0,l.Z)(y,[["render",d]]);var S=x,W=n.p+"img/bg.f36d942f.jpg",E=n.p+"img/github.13ad660f.svg";const O=e=>((0,i.dD)("data-v-00d3e086"),e=e(),(0,i.Cn)(),e),P=O((()=>(0,i._)("img",{class:"bgone",src:W},null,-1))),V={class:"login-container"},k=O((()=>(0,i._)("div",{class:"title"},[(0,i._)("div",{class:"name1"},"98tang自动签到系统"),(0,i._)("div",{class:"name2"},"98tang auto sign system")],-1))),j={class:"login-panel"},C=O((()=>(0,i._)("div",{style:{"font-size":"12px",color:"grey","margin-right":"20px"}}," 到github上Fork和Star就是我维护的动力 ",-1))),T=O((()=>(0,i._)("div",null,[(0,i._)("img",{style:{height:"35px",width:"35px"},alt:"github",src:E}),(0,i._)("div",{style:{"white-space":"nowrap","font-size":"14px","margin-top":"3px"}}," 源码 ")],-1))),L=[C,T],U=["model"],D={class:"mt-4"},I=(0,i.Uk)("登录"),$=(0,i.Uk)("昨日签到用户数");function q(e,t,o,r,a,s){const l=(0,i.up)("el-image"),u=(0,i.up)("el-input"),c=(0,i.up)("el-option"),p=(0,i.up)("el-select"),d=(0,i.up)("el-button"),m=(0,i.up)("el-badge");return(0,i.wg)(),(0,i.iD)(i.HY,null,[P,(0,i._)("div",V,[k,(0,i._)("div",j,[(0,i._)("div",{onClick:t[0]||(t[0]=(...e)=>s.goGithub&&s.goGithub(...e)),class:"github"},L),(0,i.Wm)(l,{style:{width:"320px",height:"320px"},src:n(8259),fit:"cover"},null,8,["src"]),(0,i._)("div",{class:"form",model:a.form},[(0,i.Wm)(u,{modelValue:a.form.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.name=e),placeholder:"用户名"},null,8,["modelValue"]),(0,i.Wm)(u,{modelValue:a.form.pwd,"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.pwd=e),type:"password",placeholder:"密码","show-password":""},null,8,["modelValue"]),(0,i._)("div",D,[(0,i.Wm)(u,{modelValue:a.form.answer,"onUpdate:modelValue":t[4]||(t[4]=e=>a.form.answer=e),placeholder:"选填",class:"input-with-select"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(p,{modelValue:a.form.questionId,"onUpdate:modelValue":t[3]||(t[3]=e=>a.form.questionId=e),placeholder:"密保问题",style:{width:"115px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{label:"母亲的名字",value:"1"}),(0,i.Wm)(c,{label:"爷爷的名字",value:"2"}),(0,i.Wm)(c,{label:"父亲出生的城市",value:"3"}),(0,i.Wm)(c,{label:"您其中一位老师的名字",value:"4"}),(0,i.Wm)(c,{label:"您个人计算机的型号",value:"5"}),(0,i.Wm)(c,{label:"您最喜欢的餐馆名称",value:"6"}),(0,i.Wm)(c,{label:"驾驶执照最后四位数字",value:"7"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])]),(0,i.Wm)(d,{loading:a.loading,onClick:s.onSubmit,class:"login-btn",type:"primary"},{default:(0,i.w5)((()=>[I])),_:1},8,["loading","onClick"])],8,U),(0,i.Wm)(m,{max:999999,class:"sign-count",value:a.signCount},{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[$])),_:1})])),_:1},8,["value"])])])],64)}var A={name:"LoginPanel",props:{msg:String},data(){return{loading:!1,signCount:"",form:{name:"",pwd:"",questionId:"",answer:""}}},mounted(){v.get("http://superupup.top/98t/usersCount").then((e=>{this.signCount=e.count})).finally((()=>{}))},methods:{goGithub(){window.location.href="https://github.com/super-upup/98tang"},onSubmit(){let e=new FormData;e.append("username",this.form.name),e.append("pwd",this.form.pwd),this.form.answer&&(e.append("questionid",this.form.questionId),e.append("answer",this.form.answer)),this.loading=!0,window.localStorage.setItem("user",JSON.stringify({username:this.form.name,pwd:this.form.pwd})),v.post("http://superupup.top/98t/commit",e).then((e=>{this.$router.push({name:"SignPanel"})})).finally((()=>{this.loading=!1}))}}};const F=(0,l.Z)(A,[["render",q],["__scopeId","data-v-00d3e086"]]);var z=F;const B=[{path:"/",name:"LoginPanel",component:z},{path:"/SignPanel",name:"SignPanel",component:S}],H=(0,p.p7)({history:(0,p.r5)(""),routes:B});var N=H;const Z=(0,o.ri)(c);Z.use(r.Z),Z.use(N),Z.config.globalProperties.$globalData={},Z.mount("#app")},8259:function(e,t,n){e.exports=n.p+"img/decorate.04e02886.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunk_98t_auto_sign"]=self["webpackChunk_98t_auto_sign"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8627)}));o=n.O(o)})();
//# sourceMappingURL=app.e3bcd6a5.js.map