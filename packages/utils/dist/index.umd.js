(function(u,p){typeof exports=="object"&&typeof module<"u"?p(exports):typeof define=="function"&&define.amd?define(["exports"],p):(u=typeof globalThis<"u"?globalThis:u||self,p(u.index={}))})(this,function(u){"use strict";function p(t,e=1e3){let n=!1,r,i=1e3;e&&(i=e);const a=async()=>{try{await t()}finally{n&&(r=setTimeout(()=>{clearTimeout(r),a()},i))}};return{start:()=>{if(n)throw new Error("ready start!");n=!0,a()},stop:()=>n=!1,refresh:a,setTime:h=>{i=h}}}function A({cb:t,retryCount:e,intervalTime:n,event:r}){let i=!1,a=!1,s=()=>{};return{promise:new Promise(async(f,h)=>{s=()=>{if(i==!0)return;e=0,a=!0,i=!0;const l="Because of reason [user cancel], re-execute end";return console.warn(l),r(l),h(new Error(l))};const y=async()=>{try{const l=await t();i=!0,f(l)}catch(l){if(a)return;let d="";l instanceof Error?d=l.message:d=JSON.stringify(l);const S=`Because of reason [${d}], start re-execute on ${e}`;if(console.warn(S),r(S),e==0){const E=`Because of reason [${d}], re-execute end`;console.error(E),r(E),i=!0,h(l)}else e!==0&&(e>0&&e--,setTimeout(()=>{y()},n))}};y()}),cancel:s}}function B(t,e){let n=s=>{},r;e&&(r=setTimeout(()=>{n("execute function timeout")},e));const i=new Promise((s,o)=>{n=(f="promise aborted")=>{o(new F(f))}});return{promise:Promise.race([t,i]).then(s=>(r&&(clearTimeout(r),r=void 0),s)),abort:n}}class F extends Error{constructor(e){super(e)}}function m(t){return t&&(Array.isArray(t)?t.map(e=>m(e)):t instanceof Date?new Date(t):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([e,n])=>[e,m(n)])):t)}function z(t){const e=m(t);return{data:t,defaultData:e,getClone:()=>m(e)}}class L{constructor(e){this.events={},e.forEach(n=>{Reflect.set(this.events,n,[])})}addEventListener(e,n){if(!Reflect.has(this.events,e))throw new Error(`event ${e} doesn't exist!`);this.events[e].includes(n)||this.events[e].push(n)}removeEventListener(e,n){if(!Reflect.has(this.events,e))throw new Error(`event ${e} doesn't exist!`);const r=this.events[e].indexOf(n);r!==-1&&this.events[e].splice(r,1)}dispatchEvent(e,n){if(!Reflect.has(this.events,e))throw new Error(`event ${e} doesn't exist!`);this.events[e].forEach(r=>r(n))}}function x(t={},e={}){let n;for(n in e)t[n]=G(t[n])?x(t[n],e[n]):t[n]=e[n];return t}function G(t){return Object.prototype.toString.call(t)==="[object Object]"}var U=typeof global=="object"&&global&&global.Object===Object&&global,_=typeof self=="object"&&self&&self.Object===Object&&self,I=U||_||Function("return this")(),v=I.Symbol,$=Object.prototype,q=$.hasOwnProperty,H=$.toString,b=v?v.toStringTag:void 0;function J(t){var e=q.call(t,b),n=t[b];try{t[b]=void 0;var r=!0}catch{}var i=H.call(t);return r&&(e?t[b]=n:delete t[b]),i}var X=Object.prototype,K=X.toString;function Q(t){return K.call(t)}var V="[object Null]",Y="[object Undefined]",C=v?v.toStringTag:void 0;function Z(t){return t==null?t===void 0?Y:V:C&&C in Object(t)?J(t):Q(t)}function N(t){return t!=null&&typeof t=="object"}var tt="[object Symbol]";function et(t){return typeof t=="symbol"||N(t)&&Z(t)==tt}var nt=/\s/;function rt(t){for(var e=t.length;e--&&nt.test(t.charAt(e)););return e}var it=/^\s+/;function st(t){return t&&t.slice(0,rt(t)+1).replace(it,"")}function O(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var D=NaN,at=/^[-+]0x[0-9a-f]+$/i,ot=/^0b[01]+$/i,ct=/^0o[0-7]+$/i,ft=parseInt;function R(t){if(typeof t=="number")return t;if(et(t))return D;if(O(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=O(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=st(t);var n=ot.test(t);return n||ct.test(t)?ft(t.slice(2),n?2:8):at.test(t)?D:+t}var P=function(){return I.Date.now()},lt="Expected a function",ut=Math.max,ht=Math.min;function dt(t,e,n){var r,i,a,s,o,f,h=0,y=!1,l=!1,d=!0;if(typeof t!="function")throw new TypeError(lt);e=R(e)||0,O(n)&&(y=!!n.leading,l="maxWait"in n,a=l?ut(R(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d);function S(c){var g=r,T=i;return r=i=void 0,h=c,s=t.apply(T,g),s}function E(c){return h=c,o=setTimeout(j,e),y?S(c):s}function St(c){var g=c-f,T=c-h,M=e-g;return l?ht(M,a-T):M}function k(c){var g=c-f,T=c-h;return f===void 0||g>=e||g<0||l&&T>=a}function j(){var c=P();if(k(c))return W(c);o=setTimeout(j,St(c))}function W(c){return o=void 0,d&&r?S(c):(r=i=void 0,s)}function pt(){o!==void 0&&clearTimeout(o),h=0,r=f=i=o=void 0}function bt(){return o===void 0?s:W(P())}function w(){var c=P(),g=k(c);if(r=arguments,i=this,f=c,g){if(o===void 0)return E(f);if(l)return clearTimeout(o),o=setTimeout(j,e),S(f)}return o===void 0&&(o=setTimeout(j,e)),s}return w.cancel=pt,w.flush=bt,w}const gt={searchParams:{},pageParams:{pageIndex:1,pageSize:10},pageSizes:[10,30,50],list:[],total:0,totalPage:0,getListStatus:"succeed",searchStatus:"succeed",pagingStatus:"succeed"};class mt{constructor({requestFun:e,listState:n}){this.events=new L(["changeState"]),this.addStateChangeListener=r=>this.events.addEventListener("changeState",r),this.removeStateChangeListener=r=>this.events.removeEventListener("changeState",r),this.dispatchStateChangeListener=dt(()=>{const r=m(this.listState);this.events.dispatchEvent("changeState",r)},50),this.setListState=r=>{let i={set:(s,o,f)=>(Reflect.set(s,o,f),this.dispatchStateChangeListener(),!0)};const a=x(gt,r);return new Proxy(a,i)},this.getList=()=>new Promise((r,i)=>{this.listState.getListStatus==="loading"&&i(new Error("加载中,请稍等")),this.listState.getListStatus="loading";const a={...this.listState.searchParams,page:this.listState.pageParams};this.requestFun(a).then(s=>{const{list:o,total:f,totalPage:h=0}=s;this.listState.totalPage=h,this.listState.total=f,this.listState.list=o,this.listState.getListStatus="succeed",r(s)}).catch(s=>{console.error(s),this.listState.getListStatus="failed",i(s)})}),this.handleSearch=async()=>{this.listState.searchStatus="loading",this.listState.pageParams.pageIndex=1;try{const r=await this.getList();return this.listState.searchStatus="succeed",r}catch(r){console.error("search get error:"+r),this.listState.searchStatus="failed"}},this.handlePageChange=async({pageIndex:r,pageSize:i})=>{this.listState.pagingStatus="loading",r&&(this.listState.pageParams.pageIndex=r),i&&(this.listState.pageParams.pageSize=i);try{const a=await this.getList();return this.listState.pagingStatus="succeed",a}catch(a){console.error("search get error:"+a),this.listState.pagingStatus="failed"}},this.listState=this.setListState(n),e&&(this.requestFun=e)}}u.EventsCollect=L,u.ListInstance=mt,u.cancelablePromise=B,u.dataWithDefault=z,u.deepClone=m,u.loopFunc=p,u.reExecute=A,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
