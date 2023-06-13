(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const S={context:void 0,registry:void 0};function B(e){S.context=e}const St=(e,t)=>e===t,ye=Symbol("solid-proxy"),xt=Symbol("solid-track"),pe={equals:St};let oe=null,Ge=nt;const M=1,le=2,Je={owned:null,cleanups:null,context:null,owner:null},Pe={};var y=null;let f=null,v=null,R=null,N=null,Se=0;const[or,je]=_(!1);function J(e,t){const n=v,s=y,r=e.length===0,i=r?Je:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=r?e:()=>e(()=>j(()=>H(i)));y=i,v=null;try{return I(o,!0)}finally{v=n,y=s}}function _(e,t){t=t?Object.assign({},pe,t):pe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(f&&f.running&&f.sources.has(n)?r=r(n.tValue):r=r(n.value)),tt(n,r));return[et.bind(n),s]}function Ie(e,t,n){const s=ue(e,t,!0,M);te(s)}function F(e,t,n){const s=ue(e,t,!1,M);te(s)}function vt(e,t,n){Ge=Lt;const s=ue(e,t,!1,M),r=W&&ae(y,W.id);r&&(s.suspense=r),(!n||!n.render)&&(s.user=!0),N?N.push(s):te(s)}function A(e,t,n){n=n?Object.assign({},pe,n):pe;const s=ue(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,te(s),et.bind(s)}function Pt(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i=t||{}):(s=e,r=t,i=n||{});let o=null,l=Pe,u=null,a=!1,c=!1,d="initialValue"in i,h=typeof s=="function"&&A(s);const m=new Set,[b,p]=(i.storage||_)(i.initialValue),[O,T]=_(void 0),[E,$]=_(void 0,{equals:!1}),[L,k]=_(d?"ready":"unresolved");if(S.context){u=`${S.context.id}${S.context.count++}`;let g;i.ssrLoadFrom==="initial"?l=i.initialValue:S.load&&(g=S.load(u))&&(l=g[0])}function q(g,w,C,V){return o===g&&(o=null,V!==void 0&&(d=!0),(g===l||w===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(V,{value:w})),l=Pe,f&&g&&a?(f.promises.delete(g),a=!1,I(()=>{f.running=!0,ne(w,C)},!1)):ne(w,C)),w}function ne(g,w){I(()=>{w===void 0&&p(()=>g),k(w!==void 0?"errored":d?"ready":"unresolved"),T(w);for(const C of m.keys())C.decrement();m.clear()},!1)}function re(){const g=W&&ae(y,W.id),w=b(),C=O();if(C!==void 0&&!o)throw C;return v&&!v.user&&g&&Ie(()=>{E(),o&&(g.resolved&&f&&a?f.promises.add(o):m.has(g)||(g.increment(),m.add(g)))}),w}function P(g=!0){if(g!==!1&&c)return;c=!1;const w=h?h():s;if(a=f&&f.running,w==null||w===!1){q(o,j(b));return}f&&o&&f.promises.delete(o);const C=l!==Pe?l:j(()=>r(w,{value:b(),refetching:g}));return typeof C!="object"||!(C&&"then"in C)?(q(o,C,void 0,w),C):(o=C,c=!0,queueMicrotask(()=>c=!1),I(()=>{k(d?"refreshing":"pending"),$()},!1),C.then(V=>q(C,V,void 0,w),V=>q(C,void 0,it(V),w)))}return Object.defineProperties(re,{state:{get:()=>L()},error:{get:()=>O()},loading:{get(){const g=L();return g==="pending"||g==="refreshing"}},latest:{get(){if(!d)return re();const g=O();if(g&&!o)throw g;return b()}}}),h?Ie(()=>P(!1)):P(!1),[re,{refetch:P,mutate:p}]}function j(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function Ye(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(i){i=!1;return}const u=j(()=>t(l,r,o));return r=l,u}}function Z(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function At(e,t){oe||(oe=Symbol("error")),y=ue(void 0,void 0,!0),y.context={[oe]:[t]},f&&f.running&&f.sources.add(y);try{return e()}catch(n){xe(n)}finally{y=y.owner}}function Qe(){return y}function Et(e,t){const n=y,s=v;y=e,v=null;try{return I(t,!0)}catch(r){xe(r)}finally{y=n,v=s}}function Ct(e){if(f&&f.running)return e(),f.done;const t=v,n=y;return Promise.resolve().then(()=>{v=t,y=n;let s;return W&&(s=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),I(e,!1),v=y=null,s?s.done:void 0})}function Ot(e){N.push.apply(N,e),e.length=0}function ee(e,t){const n=Symbol("context");return{id:n,Provider:Nt(n),defaultValue:e}}function X(e){let t;return(t=ae(y,e.id))!==void 0?t:e.defaultValue}function Ze(e){const t=A(e),n=A(()=>Ce(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let W;function $t(){return W||(W=ee({}))}function et(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===M)te(this);else{const t=R;R=null,I(()=>be(this),!1),R=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function tt(e,t,n){let s=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(f){const r=f.running;(r||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&I(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],o=f&&f.running;o&&f.disposed.has(i)||((o?!i.tState:!i.state)&&(i.pure?R.push(i):N.push(i),i.observers&&rt(i)),o?i.tState=M:i.state=M)}if(R.length>1e6)throw R=[],new Error},!1)}return t}function te(e){if(!e.fn)return;H(e);const t=y,n=v,s=Se;v=y=e,Me(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,s),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{I(()=>{f&&(f.running=!0),v=y=e,Me(e,e.tValue,s),v=y=null},!1)}),v=n,y=t}function Me(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(f&&f.running?(e.tState=M,e.tOwned&&e.tOwned.forEach(H),e.tOwned=void 0):(e.state=M,e.owned&&e.owned.forEach(H),e.owned=null)),e.updatedAt=n+1,xe(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?tt(e,s,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function ue(e,t,n,s=M,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=s),y===null||y!==Je&&(f&&f.running&&y.pure?y.tOwned?y.tOwned.push(i):y.tOwned=[i]:y.owned?y.owned.push(i):y.owned=[i]),i}function we(e){const t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===le)return be(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Se);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(f.disposed.has(r))return}if((t?e.tState:e.state)===M)te(e);else if((t?e.tState:e.state)===le){const r=R;R=null,I(()=>be(e,n[0]),!1),R=r}}}function I(e,t){if(R)return e();let n=!1;t||(R=[]),N?n=!0:N=[],Se++;try{const s=e();return Tt(n),s}catch(s){n||(N=null),R=null,xe(s)}}function Tt(e){if(R&&(nt(R),R=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const s=f.sources,r=f.disposed;N.push.apply(N,f.effects),t=f.resolve;for(const i of N)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,I(()=>{for(const i of r)H(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let o=0,l=i.owned.length;o<l;o++)H(i.owned[o]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}je(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,N),N=null,je(!0);return}}const n=N;N=null,n.length&&I(()=>Ge(n),!1),t&&t()}function nt(e){for(let t=0;t<e.length;t++)we(e[t])}function Lt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:we(s)}for(S.context&&B(),t=0;t<n;t++)we(e[t])}function be(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===M?r!==t&&(!r.updatedAt||r.updatedAt<Se)&&we(r):i===le&&be(r,t)}}}function rt(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=le:s.state=le,s.pure?R.push(s):N.push(s),s.observers&&rt(s))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),o=n.observerSlots.pop();s<r.length&&(i.sourceSlots[o]=s,r[s]=i,n.observerSlots[s]=o)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)H(e.tOwned[t]);delete e.tOwned}st(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function st(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)st(e.owned[n])}function it(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ve(e,t){for(const n of e)n(t)}function xe(e){const t=oe&&ae(y,oe);if(!t)throw e;const n=it(e);N?N.push({fn(){Ve(t,n)},state:M}):Ve(t,n)}function ae(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ae(e.owner,t):void 0}function Ce(e){if(typeof e=="function"&&!e.length)return Ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Ce(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Nt(e,t){return function(s){let r;return F(()=>r=j(()=>(y.context={[e]:s.value},Ze(()=>s.children))),void 0),r}}const kt=Symbol("fallback");function qe(e){for(let t=0;t<e.length;t++)e[t]()}function Rt(e,t,n={}){let s=[],r=[],i=[],o=0,l=t.length>1?[]:null;return Z(()=>qe(i)),()=>{let u=e()||[],a,c;return u[xt],j(()=>{let h=u.length,m,b,p,O,T,E,$,L,k;if(h===0)o!==0&&(qe(i),i=[],s=[],r=[],o=0,l&&(l=[])),n.fallback&&(s=[kt],r[0]=J(q=>(i[0]=q,n.fallback())),o=1);else if(o===0){for(r=new Array(h),c=0;c<h;c++)s[c]=u[c],r[c]=J(d);o=h}else{for(p=new Array(h),O=new Array(h),l&&(T=new Array(h)),E=0,$=Math.min(o,h);E<$&&s[E]===u[E];E++);for($=o-1,L=h-1;$>=E&&L>=E&&s[$]===u[L];$--,L--)p[L]=r[$],O[L]=i[$],l&&(T[L]=l[$]);for(m=new Map,b=new Array(L+1),c=L;c>=E;c--)k=u[c],a=m.get(k),b[c]=a===void 0?-1:a,m.set(k,c);for(a=E;a<=$;a++)k=s[a],c=m.get(k),c!==void 0&&c!==-1?(p[c]=r[a],O[c]=i[a],l&&(T[c]=l[a]),c=b[c],m.set(k,c)):i[a]();for(c=E;c<h;c++)c in p?(r[c]=p[c],i[c]=O[c],l&&(l[c]=T[c],l[c](c))):r[c]=J(d);r=r.slice(0,o=h),s=u.slice(0)}return r});function d(h){if(i[c]=h,l){const[m,b]=_(c);return l[c]=b,t(u[c],m)}return t(u[c])}}}function x(e,t){return j(()=>e(t||{}))}function de(){return!0}const Oe={get(e,t,n){return t===ye?n:e.get(t)},has(e,t){return t===ye?!0:e.has(t)},set:de,deleteProperty:de,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:de,deleteProperty:de}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)?e:{}}function _t(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Be(...e){let t=!1;for(let i=0;i<e.length;i++){const o=e[i];t=t||!!o&&ye in o,e[i]=typeof o=="function"?(t=!0,A(o)):o}if(t)return new Proxy({get(i){for(let o=e.length-1;o>=0;o--){const l=Ae(e[o])[i];if(l!==void 0)return l}},has(i){for(let o=e.length-1;o>=0;o--)if(i in Ae(e[o]))return!0;return!1},keys(){const i=[];for(let o=0;o<e.length;o++)i.push(...Object.keys(Ae(e[o])));return[...new Set(i)]}},Oe);const n={},s={};let r=!1;for(let i=e.length-1;i>=0;i--){const o=e[i];if(!o)continue;const l=Object.getOwnPropertyNames(o);r=r||i!==0&&!!l.length;for(let u=0,a=l.length;u<a;u++){const c=l[u];if(!(c==="__proto__"||c==="constructor"))if(c in n){const d=s[c],h=Object.getOwnPropertyDescriptor(o,c);d?h.get?d.push(h.get.bind(o)):h.value!==void 0&&d.push(()=>h.value):n[c]===void 0&&(n[c]=h.value)}else{const d=Object.getOwnPropertyDescriptor(o,c);d.get?Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:_t.bind(s[c]=[d.get.bind(o)])}):n[c]=d.value}}}return n}function jt(e,...t){if(ye in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},Oe));return i.push(new Proxy({get(o){return r.has(o)?void 0:e[o]},has(o){return r.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.has(o))}},Oe)),i}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,u=0;for(const a of t)a.includes(r)&&(l=!0,o?s[u][r]=i.value:Object.defineProperty(s[u],r,i)),++u;l||(o?n[r]=i.value:Object.defineProperty(n,r,i))}return[...s,n]}function he(e){let t,n;const s=r=>{const i=S.context;if(i){const[l,u]=_();(n||(n=e())).then(a=>{B(i),u(()=>a.default),B()}),t=l}else if(!t){const[l]=Pt(()=>(n||(n=e())).then(u=>u.default));t=l}let o;return A(()=>(o=t())&&j(()=>{if(!i)return o(r);const l=S.context;B(i);const u=o(r);return B(l),u}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let It=0;function Mt(){const e=S.context;return e?`${e.id}${e.count++}`:`cl-${It++}`}const Vt=e=>`Stale read from <${e}>.`;function lr(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(Rt(()=>e.each,e.children,t||void 0))}function Ne(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return A(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?j(()=>r(t?s:()=>{if(!j(n))throw Vt("Show");return e.when})):r}return e.fallback},void 0,void 0)}let G;function ot(){G&&[...G].forEach(e=>e())}function qt(e){let t,n;S.context&&S.load&&(n=S.load(S.context.id+S.context.count))&&(t=n[0]);const[s,r]=_(t,void 0);return G||(G=new Set),G.add(r),Z(()=>G.delete(r)),A(()=>{let i;if(i=s()){const o=e.fallback;return typeof o=="function"&&o.length?j(()=>o(i,()=>r())):o}return At(()=>e.children,r)},void 0,void 0)}const Bt=ee();function Ft(e){let t=0,n,s,r,i,o;const[l,u]=_(!1),a=$t(),c={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:l,effects:[],resolved:!1},d=Qe();if(S.context&&S.load){const b=S.context.id+S.context.count;let p=S.load(b);if(p&&(r=p[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[O,T]=_(void 0,{equals:!1});i=O,r.then(E=>{if(E||S.done)return E&&(o=E),T();S.gather(b),B(s),T(),B()})}}const h=X(Bt);h&&(n=h.register(c.inFallback));let m;return Z(()=>m&&m()),x(a.Provider,{value:c,get children(){return A(()=>{if(o)throw o;if(s=S.context,i)return i(),i=void 0;s&&r==="$$f"&&B();const b=A(()=>e.children);return A(p=>{const O=c.inFallback(),{showContent:T=!0,showFallback:E=!0}=n?n():{};if((!O||r&&r!=="$$f")&&T)return c.resolved=!0,m&&m(),m=s=r=void 0,Ot(c.effects),b();if(E)return m?p:J($=>(m=$,s&&(B({id:s.id+"f",count:0}),s=void 0),e.fallback),d)})})}})}const Dt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ut=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Dt]),Ht=new Set(["innerHTML","textContent","innerText","children"]),Kt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Wt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Xt(e,t){const n=Wt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const zt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Gt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Jt(e,t,n){let s=n.length,r=t.length,i=s,o=0,l=0,u=t[r-1].nextSibling,a=null;for(;o<r||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===o){const c=i<s?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<r;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[r]=n[i]}else{if(!a){a=new Map;let d=l;for(;d<i;)a.set(n[d],d++)}const c=a.get(t[o]);if(c!=null)if(l<c&&c<i){let d=o,h=1,m;for(;++d<r&&d<i&&!((m=a.get(t[d]))==null||m!==c+h);)h++;if(h>c-l){const b=t[o];for(;l<c;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Fe="_$DX_DELEGATE";function Yt(e,t,n,s={}){let r;return J(i=>{r=i,t===document?e():Te(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function lt(e,t,n){let s;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>j(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function ke(e,t=window.document){const n=t[Fe]||(t[Fe]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,sn))}}function $e(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Qt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Zt(e,t){t==null?e.removeAttribute("class"):e.className=t}function ct(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function en(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,o;for(i=0,o=r.length;i<o;i++){const l=r[i];!l||l==="undefined"||t[l]||(De(e,l,!1),delete n[l])}for(i=0,o=s.length;i<o;i++){const l=s[i],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(De(e,l,!0),n[l]=u)}return n}function tn(e,t,n){if(!t)return n?$e(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function Y(e,t={},n,s){const r={};return s||F(()=>r.children=Q(e,t.children,r.children)),F(()=>t.ref&&t.ref(e)),F(()=>nn(e,t,n,!0,r,!0)),r}function Te(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Q(e,t,s,n);F(r=>Q(e,t(),r,n),s)}function nn(e,t,n,s,r={},i=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=Ue(e,o,null,r[o],n,i)}for(const o in t){if(o==="children"){s||Q(e,t.children);continue}const l=t[o];r[o]=Ue(e,o,l,r[o],n,i)}}function rn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function De(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function Ue(e,t,n,s,r,i){let o,l,u,a,c;if(t==="style")return tn(e,n,s);if(t==="classList")return en(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);s&&e.removeEventListener(d,s),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);s&&e.removeEventListener(d,s,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),h=zt.has(d);if(!h&&s){const m=Array.isArray(s)?s[0]:s;e.removeEventListener(d,m)}(h||n)&&(ct(e,d,n,h),h&&ke([d]))}else if(t.slice(0,5)==="attr:")$e(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(u=Ht.has(t))||!r&&((a=Xt(t,e.tagName))||(l=Ut.has(t)))||(o=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?Zt(e,n):o&&!l&&!u?e[rn(t)]=n:e[a||t]=n;else{const d=r&&t.indexOf(":")>-1&&Gt[t.split(":")[0]];d?Qt(e,d,t,n):$e(e,Kt[t]||t,n)}return n}function sn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),S.registry&&!S.done&&(S.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,s,r){if(S.context){!n&&(n=[...e.childNodes]);let l=[];for(let u=0;u<n.length;u++){const a=n[u];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():l.push(a)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(S.context)return n;if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=z(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(S.context)return n;n=z(e,n,s)}else{if(i==="function")return F(()=>{let l=t();for(;typeof l=="function";)l=l();n=Q(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(Le(l,t,n,r))return F(()=>n=Q(e,l,n,s,!0)),()=>n;if(S.context){if(!l.length)return n;for(let a=0;a<l.length;a++)if(l[a].parentNode)return n=l}if(l.length===0){if(n=z(e,n,s),o)return n}else u?n.length===0?He(e,l,s):Jt(e,n,l):(n&&z(e),He(e,l));n=l}else if(t.nodeType){if(S.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=z(e,n,s,t);z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Le(e,t,n,s){let r=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=n&&n[i],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Le(e,l,u)||r;else if(a==="function")if(s){for(;typeof l=="function";)l=l();r=Le(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||r}else e.push(l),r=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return r}function He(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function z(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(r,l):e.insertBefore(r,n):u&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function on(e){return S.context?void 0:e.children}const ut=!1,ln="modulepreload",cn=function(e){return"/"+e},Ke={},ge=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=cn(i),i in Ke)return;Ke[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":ln,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function un(e,t){e&&t&&Yt(e,t===document?t.body:t)}const Re=ee(),an=["title","meta"],We=e=>e.tag+(e.name?`.${e.name}"`:""),fn=e=>{if(!S.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,i=>i.parentNode.removeChild(i))}const t=new Map;function n(r){if(r.ref)return r.ref;let i=document.querySelector(`[data-sm="${r.id}"]`);return i?(i.tagName.toLowerCase()!==r.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(r.tag)),i.removeAttribute("data-sm")):i=document.createElement(r.tag),i}const s={addClientTag:r=>{let i=We(r);if(an.indexOf(r.tag)!==-1){t.has(i)||t.set(i,[]);let l=t.get(i),u=l.length;l=[...l,r],t.set(i,l);{let a=n(r);r.ref=a,Y(a,r.props);let c=null;for(var o=u-1;o>=0;o--)if(l[o]!=null){c=l[o];break}a.parentNode!=document.head&&document.head.appendChild(a),c&&c.ref&&document.head.removeChild(c.ref)}return u}{let l=n(r);r.ref=l,Y(l,r.props),l.parentNode!=document.head&&document.head.appendChild(l)}return-1},removeClientTag:(r,i)=>{const o=We(r);if(r.ref){const l=t.get(o);if(l){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let u=i-1;u>=0;u--)l[u]!=null&&document.head.appendChild(l[u].ref)}l[i]=null,t.set(o,l)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return x(Re.Provider,{value:s,get children(){return e.children}})},at=(e,t,n)=>{const s=Mt();if(!X(Re))throw new Error("<MetaProvider /> should be in the tree");return dn({tag:e,props:t,setting:n,id:s,get name(){return t.name||t.property}}),null};function dn(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=X(Re);F(()=>{{let r=t(e);Z(()=>n(e,r))}})}const hn=e=>at("title",e,{escape:!0}),Xe=e=>at("meta",e,{escape:!0});function gn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function mn([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function yn(e){try{return document.querySelector(e)}catch{return null}}function pn(e,t){const n=yn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function wn(e,t,n,s){let r=!1;const i=l=>typeof l=="string"?{value:l}:l,o=mn(_(i(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!r&&t(l),l));return n&&Z(n((l=e())=>{r=!0,o[1](i(l)),r=!1})),{signal:o,utils:s}}function bn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:_({value:""})};return e}function Sn(){return wn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),pn(window.location.hash.slice(1),n)},e=>gn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function xn(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const o={to:r,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:u=>{u&&(n=!0),l.navigate(r,i)}});return!o.defaultPrevented}return{subscribe:t,confirm:s}}const vn=/^(?:[a-z0-9]+:)?\/\//i,Pn=/^\/+|(\/)\/+$/g;function K(e,t=!1){const n=e.replace(Pn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function me(e,t,n){if(vn.test(t))return;const s=K(e),r=n&&K(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+K(t,!i)}function An(e,t){if(e==null)throw new Error(t);return e}function ft(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function En(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function Cn(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),o=i.length;return l=>{const u=l.split("/").filter(Boolean),a=u.length-o;if(a<0||a>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<o;h++){const m=i[h],b=u[h],p=m[0]===":",O=p?m.slice(1):m;if(p&&Ee(b,d(O)))c.params[O]=b;else if(p||!Ee(b,m))return null;c.path+=`/${b}`}if(r){const h=a?u.slice(-a).join("/"):"";if(Ee(h,d(r)))c.params[r]=h;else return null}return c}}function Ee(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function On(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function dt(e){const t=new Map,n=Qe();return new Proxy({},{get(s,r){return t.has(r)||Et(n,()=>t.set(r,A(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ht(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return ht(s).reduce((i,o)=>[...i,...r.map(l=>l+o)],[])}const $n=100,gt=ee(),ve=ee(),fe=()=>An(X(gt),"Make sure your app is wrapped in a <Router />");let ce;const _e=()=>ce||X(ve)||fe().base,Tn=e=>{const t=_e();return A(()=>t.resolvePath(e()))},Ln=e=>{const t=fe();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Nn=()=>fe().navigatorFactory(),mt=()=>fe().location;function kn(e,t="",n){const{component:s,data:r,children:i}=e,o=!i||Array.isArray(i)&&!i.length,l={key:e,element:s?()=>x(s,{}):()=>{const{element:u}=e;return u===void 0&&n?x(n,{}):u},preload:e.component?s.preload:e.preload,data:r};return yt(e.path).reduce((u,a)=>{for(const c of ht(a)){const d=ft(t,c),h=o?d:d.split("/*",1)[0];u.push({...l,originalPath:c,pattern:h,matcher:Cn(h,!o,e.matchFilters)})}return u},[])}function Rn(e,t=0){return{routes:e,score:On(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],o=i.matcher(n);if(!o)return null;s.unshift({...o,route:i})}return s}}}function yt(e){return Array.isArray(e)?e:[e]}function pt(e,t="",n,s=[],r=[]){const i=yt(e);for(let o=0,l=i.length;o<l;o++){const u=i[o];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=kn(u,t,n);for(const c of a){s.push(c);const d=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!d)pt(u.children,c.pattern,n,s,r);else{const h=Rn([...s],r.length);r.push(h)}s.pop()}}}return s.length?r:r.sort((o,l)=>l.score-o.score)}function _n(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function jn(e,t){const n=new URL("http://sar"),s=A(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),r=A(()=>s().pathname),i=A(()=>s().search,!0),o=A(()=>s().hash),l=A(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return l()},query:dt(Ye(i,()=>En(s())))}}function In(e,t="",n,s){const{signal:[r,i],utils:o={}}=bn(e),l=o.parsePath||(P=>P),u=o.renderPath||(P=>P),a=o.beforeLeave||xn(),c=me("",t),d=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[h,m]=_(!1),b=async P=>{m(!0);try{await Ct(P)}finally{m(!1)}},[p,O]=_(r().value),[T,E]=_(r().state),$=jn(p,T),L=[],k={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(P){return me(c,P)}};if(n)try{ce=k,k.data=n({data:void 0,params:{},location:$,navigate:ne(k)})}finally{ce=void 0}function q(P,g,w){j(()=>{if(typeof g=="number"){g&&(o.go?a.confirm(g,w)&&o.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:C,resolve:V,scroll:D,state:se}={replace:!1,resolve:!0,scroll:!0,...w},U=V?P.resolvePath(g):me("",g);if(U===void 0)throw new Error(`Path '${g}' is not a routable path`);if(L.length>=$n)throw new Error("Too many redirects");const ie=p();if((U!==ie||se!==T())&&!ut){if(a.confirm(U,w)){const bt=L.push({value:ie,replace:C,scroll:D,state:T()});b(()=>{O(U),E(se),ot()}).then(()=>{L.length===bt&&re({value:U,state:se})})}}})}function ne(P){return P=P||X(ve)||k,(g,w)=>q(P,g,w)}function re(P){const g=L[0];g&&((P.value!==g.value||P.state!==g.state)&&i({...P,replace:g.replace,scroll:g.scroll}),L.length=0)}F(()=>{const{value:P,state:g}=r();j(()=>{P!==p()&&b(()=>{O(P),E(g)})})});{let P=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const w=g.composedPath().find(ie=>ie instanceof Node&&ie.nodeName.toUpperCase()==="A");if(!w||!w.hasAttribute("link"))return;const C=w.href;if(w.target||!C&&!w.hasAttribute("state"))return;const V=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||V&&V.includes("external"))return;const D=new URL(C);if(D.origin!==window.location.origin||c&&D.pathname&&!D.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const se=l(D.pathname+D.search+D.hash),U=w.getAttribute("state");g.preventDefault(),q(k,se,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:U&&JSON.parse(U)})};ke(["click"]),document.addEventListener("click",P),Z(()=>document.removeEventListener("click",P))}return{base:k,out:d,location:$,isRouting:h,renderPath:u,parsePath:l,navigatorFactory:ne,beforeLeave:a}}function Mn(e,t,n,s,r){const{base:i,location:o,navigatorFactory:l}=e,{pattern:u,element:a,preload:c,data:d}=s().route,h=A(()=>s().path);c&&c();const m={parent:t,pattern:u,get child(){return n()},path:h,params:r,data:t.data,outlet:a,resolvePath(b){return me(i.path(),b,h())}};if(d)try{ce=m,m.data=d({data:t.data,params:r,location:o,navigate:l(m)})}finally{ce=void 0}return m}const Vn=lt("<a link>"),qn=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,o=t||Sn(),l=In(o,s,r);return x(gt.Provider,{value:l,get children(){return e.children}})},Bn=e=>{const t=fe(),n=_e(),s=Ze(()=>e.children),r=A(()=>pt(s(),ft(n.pattern,e.base||""),Fn)),i=A(()=>_n(r(),t.location.pathname)),o=dt(()=>{const c=i(),d={};for(let h=0;h<c.length;h++)Object.assign(d,c[h].params);return d});t.out&&t.out.matches.push(i().map(({route:c,path:d,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:d,params:h})));const l=[];let u;const a=A(Ye(i,(c,d,h)=>{let m=d&&c.length===d.length;const b=[];for(let p=0,O=c.length;p<O;p++){const T=d&&d[p],E=c[p];h&&T&&E.route.key===T.route.key?b[p]=h[p]:(m=!1,l[p]&&l[p](),J($=>{l[p]=$,b[p]=Mn(t,b[p-1]||n,()=>a()[p+1],()=>i()[p],o)}))}return l.splice(c.length).forEach(p=>p()),h&&m?h:(u=b[0],b)}));return x(Ne,{get when(){return a()&&u},keyed:!0,children:c=>x(ve.Provider,{value:c,get children(){return c.outlet()}})})},Fn=()=>{const e=_e();return x(Ne,{get when(){return e.child},keyed:!0,children:t=>x(ve.Provider,{value:t,get children(){return t.outlet()}})})};function Dn(e){e=Be({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=jt(e,["href","state","class","activeClass","inactiveClass","end"]),n=Tn(()=>e.href),s=Ln(n),r=mt(),i=A(()=>{const o=n();if(o===void 0)return!1;const l=K(o.split(/[?#]/,1)[0]).toLowerCase(),u=K(r.pathname).toLowerCase();return e.end?l===u:u.startsWith(l)});return(()=>{const o=Vn();return Y(o,Be(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),o})()}const Un=[{component:he(()=>ge(()=>import("./events-55667de1.js"),["assets/events-55667de1.js","assets/common-0a03cb52.js","assets/Button-23785f8b.js"])),path:"/events"},{component:he(()=>ge(()=>import("./index-11482414.js"),["assets/index-11482414.js","assets/Button-23785f8b.js"])),path:"/"},{component:he(()=>ge(()=>import("./static-555cb2be.js"),["assets/static-555cb2be.js","assets/Button-23785f8b.js","assets/common-0a03cb52.js"])),path:"/static"},{component:he(()=>ge(()=>import("./_...404_-35c23c2d.js"),[])),path:"/*404"}],Hn=()=>Un,wt=ee({}),cr=Dn,Kn=Bn,ur=mt,ar=Nn,Wn="$FETCH",Xn=lt('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre>');function zn(e){return x(qt,{fallback:(t,n)=>x(Ne,{get when(){return!e.fallback},get fallback(){return A(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return x(Gn,{error:t})}}),get children(){return e.children}})}function Gn(e){return vt(()=>console.error(e.error)),(()=>{const t=Xn(),n=t.firstChild,s=n.firstChild,r=s.nextSibling,i=r.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),s.style.setProperty("font-weight","bold"),Te(s,()=>e.error.message),ct(r,"click",ot,!0),r.style.setProperty("color","rgba(252, 165, 165)"),r.style.setProperty("background-color","rgb(153, 27, 27)"),r.style.setProperty("border-radius","5px"),r.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),Te(i,()=>e.error.stack),t})()}ke(["click"]);const Jn=!1,Yn=!1,Qn=!1;function Zn(){return X(wt),[Yn,Qn,x(on,{get children(){return ut}}),Jn]}function er(e){return Y(document.documentElement,e,!1,!0),e.children}function tr(e){return Y(document.head,e,!1,!0),e.children}function nr(e){return Y(document.body,e,!1,!0),e.children}function rr(){return x(er,{lang:"en",get children(){return[x(tr,{get children(){return[x(hn,{children:"SolidStart - With TailwindCSS"}),x(Xe,{charset:"utf-8"}),x(Xe,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),x(nr,{className:"flex flex-col bg-gray-50 h-screen",get children(){return[x(Ft,{get children(){return x(zn,{get children(){return x(Kn,{get children(){return x(Hn,{})}})}})}}),x(Zn,{})]}})]}})}const ze=Object.values(Object.assign({}))[0],sr=ze?ze.default:void 0,ir=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Wn,fetch};function t(n){return x(qn,n)}return x(wt.Provider,{value:e,get children(){return x(fn,{get children(){return x(t,{get base(){return"/"},data:sr,get children(){return x(rr,{})}})}})}})};un(()=>x(ir,{}),document);export{cr as A,lr as F,vt as a,x as b,_ as c,A as d,F as e,ur as f,ke as g,ct as h,Te as i,$e as s,lt as t,ar as u};
