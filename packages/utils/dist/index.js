"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function A(t,e=1e3){let n=!1,s,r=1e3;e&&(r=e);const a=async()=>{try{await t()}finally{n&&(s=setTimeout(()=>{clearTimeout(s),a()},r))}};return{start:()=>{if(n)throw new Error("ready start!");n=!0,a()},stop:()=>n=!1,refresh:a,setTime:u=>{r=u}}}function F({cb:t,retryCount:e,intervalTime:n,event:s}){let r=!1,a=!1,o=()=>{};return{promise:new Promise(async(c,u)=>{o=()=>{if(r==!0)return;e=0,a=!0,r=!0;const f="Because of reason [user cancel], re-execute end";return console.warn(f),s(f),u(new Error(f))};const g=async()=>{try{const f=await t();r=!0,c(f)}catch(f){if(a)return;let h="";f instanceof Error?h=f.message:h=JSON.stringify(f);const S=`Because of reason [${h}], start re-execute on ${e}`;if(console.warn(S),s(S),e==0){const b=`Because of reason [${h}], re-execute end`;console.error(b),s(b),r=!0,u(f)}else e!==0&&(e>0&&e--,setTimeout(()=>{g()},n))}};g()}),cancel:o}}function z(t,e){let n=o=>{},s;e&&(s=setTimeout(()=>{n("execute function timeout")},e));const r=new Promise((o,i)=>{n=(c="promise aborted")=>{i(new G(c))}});return{promise:Promise.race([t,r]).then(o=>(s&&(clearTimeout(s),s=void 0),o)),abort:n}}class G extends Error{constructor(e){super(e)}}function m(t){return t&&(Array.isArray(t)?t.map(e=>m(e)):t instanceof Date?new Date(t):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([e,n])=>[e,m(n)])):t)}function U(t){const e=m(t);return{data:t,defaultData:e,getClone:()=>m(e)}}class C{constructor(e){this.events={},e.forEach(n=>{Reflect.set(this.events,n,[])})}addEventListener(e,n){if(!Reflect.has(this.events,e))throw new Error(`event ${e} doesn't exist!`);this.events[e].includes(n)||this.events[e].push(n)}removeEventListener(e,n){if(!Reflect.has(this.events,e))throw new Error(`event ${e} doesn't exist!`);const s=this.events[e].indexOf(n);s!==-1&&this.events[e].splice(s,1)}dispatchEvent(e,n){if(!Reflect.has(this.events,e))throw new Error(`event ${e} doesn't exist!`);this.events[e].forEach(s=>s(n))}}function D(t={},e={}){let n;for(n in e)t[n]=_(t[n])?D(t[n],e[n]):t[n]=e[n];return t}function _(t){return Object.prototype.toString.call(t)==="[object Object]"}var q=typeof global=="object"&&global&&global.Object===Object&&global,H=typeof self=="object"&&self&&self.Object===Object&&self,R=q||H||Function("return this")(),v=R.Symbol,k=Object.prototype,J=k.hasOwnProperty,X=k.toString,y=v?v.toStringTag:void 0;function K(t){var e=J.call(t,y),n=t[y];try{t[y]=void 0;var s=!0}catch{}var r=X.call(t);return s&&(e?t[y]=n:delete t[y]),r}var Q=Object.prototype,V=Q.toString;function Y(t){return V.call(t)}var Z="[object Null]",N="[object Undefined]",L=v?v.toStringTag:void 0;function tt(t){return t==null?t===void 0?N:Z:L&&L in Object(t)?K(t):Y(t)}function et(t){return t!=null&&typeof t=="object"}var nt="[object Symbol]";function rt(t){return typeof t=="symbol"||et(t)&&tt(t)==nt}var st=/\s/;function it(t){for(var e=t.length;e--&&st.test(t.charAt(e)););return e}var at=/^\s+/;function ot(t){return t&&t.slice(0,it(t)+1).replace(at,"")}function w(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var I=NaN,ct=/^[-+]0x[0-9a-f]+$/i,lt=/^0b[01]+$/i,ft=/^0o[0-7]+$/i,ut=parseInt;function $(t){if(typeof t=="number")return t;if(rt(t))return I;if(w(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=w(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=ot(t);var n=lt.test(t);return n||ft.test(t)?ut(t.slice(2),n?2:8):ct.test(t)?I:+t}var P=function(){return R.Date.now()},ht="Expected a function",dt=Math.max,gt=Math.min;function mt(t,e,n){var s,r,a,o,i,c,u=0,g=!1,f=!1,h=!0;if(typeof t!="function")throw new TypeError(ht);e=$(e)||0,w(n)&&(g=!!n.leading,f="maxWait"in n,a=f?dt($(n.maxWait)||0,e):a,h="trailing"in n?!!n.trailing:h);function S(l){var d=s,p=r;return s=r=void 0,u=l,o=t.apply(p,d),o}function b(l){return u=l,i=setTimeout(T,e),g?S(l):o}function W(l){var d=l-c,p=l-u,O=e-d;return f?gt(O,a-p):O}function x(l){var d=l-c,p=l-u;return c===void 0||d>=e||d<0||f&&p>=a}function T(){var l=P();if(x(l))return j(l);i=setTimeout(T,W(l))}function j(l){return i=void 0,h&&s?S(l):(s=r=void 0,o)}function B(){i!==void 0&&clearTimeout(i),u=0,s=c=r=i=void 0}function M(){return i===void 0?o:j(P())}function E(){var l=P(),d=x(l);if(s=arguments,r=this,c=l,d){if(i===void 0)return b(c);if(f)return clearTimeout(i),i=setTimeout(T,e),S(c)}return i===void 0&&(i=setTimeout(T,e)),o}return E.cancel=B,E.flush=M,E}const St={searchParams:{},pageParams:{pageIndex:1,pageSize:10},pageSizes:[10,30,50],list:[],total:0,totalPage:0,getListStatus:"succeed",searchStatus:"succeed",pagingStatus:"succeed"};class pt{constructor({requestFun:e=void 0,listState:n=void 0,listType:s="replace"}){this.events=new C(["changeState"]),this.addStateChangeListener=r=>this.events.addEventListener("changeState",r),this.removeStateChangeListener=r=>this.events.removeEventListener("changeState",r),this.emitStateChange=mt(async()=>{const r=m(this.listState);this.events.dispatchEvent("changeState",r)}),this.watchListState=r=>{let a={set:(i,c,u)=>(Reflect.set(i,c,u),this.emitStateChange(),!0)};const o=D(m(St),r);return new Proxy(o,a)},this.getList=()=>new Promise((r,a)=>{this.listState.getListStatus==="loading"&&a(new Error("加载中,请稍等")),this.listState.getListStatus="loading";const o={...this.listState.searchParams,page:this.listState.pageParams};this.requestFun(o).then(i=>{this.listState.getListStatus="succeed";const{list:c,total:u,totalPage:g=0}=i;this.listState.totalPage=g,this.listState.total=u,this.listType=="replace"||this.listState.pageParams.pageIndex==1?this.listState.list=c:this.listState.list=this.listState.list.concat(c),r(i)}).catch(i=>{console.error(i),this.listState.getListStatus="failed",a(i)})}),this.handleSearch=async()=>{this.listState.searchStatus="loading",this.listState.pageParams.pageIndex=1;try{const r=await this.getList();return this.listState.searchStatus="succeed",r}catch(r){console.error("search get error:"+r),this.listState.searchStatus="failed"}},this.handlePageChange=async({pageIndex:r,pageSize:a})=>{this.listState.pagingStatus="loading",r&&(this.listState.pageParams.pageIndex=r),a&&(this.listState.pageParams.pageSize=a);try{const o=await this.getList();return this.listState.pagingStatus="succeed",o}catch(o){console.error("search get error:"+o),this.listState.pagingStatus="failed"}},e&&(this.requestFun=e),this.listState=this.watchListState(n),this.listType=s}}function yt(t){let e={succeed:[],fail:[]},n=!1;return async function({Locked:s,parameters:r}){return new Promise(async(a,o)=>{if(n===!1&&s===!0){n=s;try{const i=await t(r);e.succeed.map(c=>c(i))}catch(i){e.fail.map(c=>c(i))}finally{e.succeed=[],e.fail=[],n=!1}}n?(e.succeed.push(a),e.fail.push(o)):a(null)})}}exports.EventsCollect=C;exports.ListInstance=pt;exports.cancelablePromise=z;exports.dataWithDefault=U;exports.deepClone=m;exports.loopFunc=A;exports.reExecute=F;exports.syncPromise=yt;
