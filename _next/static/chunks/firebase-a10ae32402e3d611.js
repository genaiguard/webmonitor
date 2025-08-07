"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{3159:function(e,t,n){n.d(t,{C6:function(){return S},Jn:function(){return E},KN:function(){return A},Mq:function(){return b},Xd:function(){return y},ZF:function(){return T},qX:function(){return v},rh:function(){return w}});var i=n(2044),r=n(6872),s=n(4444),a=n(9400);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",u="0.10.13",h=new r.Yd("@firebase/app"),c="[DEFAULT]",d={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){let t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(m.set(t,e),f.values()))g(n,e);for(let t of p.values())g(t,e);return!0}function v(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e){return void 0!==e.settings}let _=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E="10.14.1";function T(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:c,automaticDataCollectionEnabled:!1},t),a=r.name;if("string"!=typeof a||!a)throw _.create("bad-app-name",{appName:String(a)});if(n||(n=(0,s.aH)()),!n)throw _.create("no-options");let o=f.get(a);if(o){if((0,s.vZ)(n,o.options)&&(0,s.vZ)(r,o.config))return o;throw _.create("duplicate-app",{appName:a})}let l=new i.H0(a);for(let e of m.values())l.addComponent(e);let u=new I(n,r,l);return f.set(a,u),u}function b(e=c){let t=f.get(e);if(!t&&e===c&&(0,s.aH)())return T();if(!t)throw _.create("no-app",{appName:e});return t}function S(){return Array.from(f.values())}function A(e,t,n){var r;let s=null!==(r=d[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);let a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${s}" with version "${t}":`];a&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),h.warn(e.join(" "));return}y(new i.wA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let C="firebase-heartbeat-store",k=null;function N(){return k||(k=(0,a.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(C)}catch(e){console.warn(e)}}}).catch(e=>{throw _.create("idb-open",{originalErrorMessage:e.message})})),k}async function R(e){try{let t=(await N()).transaction(C),n=await t.objectStore(C).get(D(e));return await t.done,n}catch(e){if(e instanceof s.ZR)h.warn(e.message);else{let t=_.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}async function O(e,t){try{let n=(await N()).transaction(C,"readwrite"),i=n.objectStore(C);await i.put(t,D(e)),await n.done}catch(e){if(e instanceof s.ZR)h.warn(e.message);else{let t=_.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function D(e){return`${e.name}!${e.options.appId}`}class P{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new M(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=L();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){h.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=L(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),x(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),x(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return h.warn(e),""}}}function L(){return new Date().toISOString().substring(0,10)}class M{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await R(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function x(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}y(new i.wA("platform-logger",e=>new o(e),"PRIVATE")),y(new i.wA("heartbeat",e=>new P(e),"PRIVATE")),A(l,u,""),A(l,u,"esm2017"),A("fire-js","")},2044:function(e,t,n){n.d(t,{H0:function(){return o},wA:function(){return r}});var i=n(4444);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},6872:function(e,t,n){var i,r;n.d(t,{Yd:function(){return h},in:function(){return i}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(r=i||(i={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,l={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=l[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},4444:function(e,t,n){n.d(t,{BH:function(){return w},G6:function(){return C},L:function(){return u},LL:function(){return O},L_:function(){return T},P0:function(){return g},Pz:function(){return v},Sg:function(){return _},ZR:function(){return R},aH:function(){return y},b$:function(){return S},eu:function(){return N},hl:function(){return k},m9:function(){return q},ne:function(){return V},pd:function(){return U},q4:function(){return m},ru:function(){return b},tV:function(){return h},uI:function(){return E},vZ:function(){return function e(t,n){if(t===n)return!0;let i=Object.keys(t),r=Object.keys(n);for(let s of i){if(!r.includes(s))return!1;let i=t[s],a=n[s];if(L(i)&&L(a)){if(!e(i,a))return!1}else if(i!==a)return!1}for(let e of r)if(!i.includes(e))return!1;return!0}},w1:function(){return A},xO:function(){return M},xb:function(){return P},z$:function(){return I},zd:function(){return x}});var i=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},s=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=r>>2,h=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),i.push(n[u],n[h],n[c],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,l=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==l)throw new o;let u=r<<2|s>>4;if(i.push(u),64!==a){let e=s<<4&240|a>>2;if(i.push(e),64!==l){let e=a<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=r(e);return a.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===i||void 0===i.env)return;let e=i.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&h(e[1]);return t&&JSON.parse(t)},p=()=>{try{return c()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},g=e=>{let t=m(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function T(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function b(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function S(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function A(){let e=I();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){return!function(){var e;let t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function N(){return new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(D,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new R(i,a,n)}}let D=/\{\$([^}]+)}/g;function P(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function x(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function U(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function V(e,t){let n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(i=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(i.next=j),void 0===i.error&&(i.error=j),void 0===i.complete&&(i.complete=j);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return e&&e._delegate?e._delegate:e}},8009:function(e,t,n){n.d(t,{C6:function(){return i.C6},Mq:function(){return i.Mq},ZF:function(){return i.ZF}});var i=n(3159);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i.KN)("firebase","10.14.1","app")},1154:function(e,t,n){n.r(t),n.d(t,{ActionCodeOperation:function(){return f},ActionCodeURL:function(){return to},AuthCredential:function(){return eQ},AuthErrorCodes:function(){return v},EmailAuthCredential:function(){return e7},EmailAuthProvider:function(){return tu},FacebookAuthProvider:function(){return tf},FactorId:function(){return u},GithubAuthProvider:function(){return tm},GoogleAuthProvider:function(){return tp},OAuthCredential:function(){return te},OAuthProvider:function(){return td},OperationType:function(){return d},PhoneAuthCredential:function(){return ta},PhoneAuthProvider:function(){return n4},PhoneMultiFactorGenerator:function(){return iK},ProviderId:function(){return h},RecaptchaVerifier:function(){return nJ},SAMLAuthProvider:function(){return ty},SignInMethod:function(){return c},TotpMultiFactorGenerator:function(){return iW},TotpSecret:function(){return iY},TwitterAuthProvider:function(){return tv},applyActionCode:function(){return tz},beforeAuthStateChanged:function(){return no},browserLocalPersistence:function(){return nT},browserPopupRedirectResolver:function(){return i$},browserSessionPersistence:function(){return nS},checkActionCode:function(){return t$},confirmPasswordReset:function(){return tB},connectAuthEmulator:function(){return eG},createUserWithEmailAndPassword:function(){return tG},debugErrorMap:function(){return m},deleteUser:function(){return nf},fetchSignInMethodsForEmail:function(){return tX},getAdditionalUserInfo:function(){return nn},getAuth:function(){return i4},getIdToken:function(){return Z},getIdTokenResult:function(){return ee},getMultiFactorResolver:function(){return ng},getRedirectResult:function(){return iI},inMemoryPersistence:function(){return ev},indexedDBLocalPersistence:function(){return nB},initializeAuth:function(){return eH},initializeRecaptchaConfig:function(){return nr},isSignInWithEmailLink:function(){return tQ},linkWithCredential:function(){return tD},linkWithPhoneNumber:function(){return n0},linkWithPopup:function(){return is},linkWithRedirect:function(){return iw},multiFactor:function(){return nw},onAuthStateChanged:function(){return nl},onIdTokenChanged:function(){return na},parseActionCodeURL:function(){return tl},prodErrorMap:function(){return g},reauthenticateWithCredential:function(){return tP},reauthenticateWithPhoneNumber:function(){return n1},reauthenticateWithPopup:function(){return ir},reauthenticateWithRedirect:function(){return iy},reload:function(){return el},revokeAccessToken:function(){return nd},sendEmailVerification:function(){return tZ},sendPasswordResetEmail:function(){return tq},sendSignInLinkToEmail:function(){return tW},setPersistence:function(){return ni},signInAnonymously:function(){return tE},signInWithCredential:function(){return tO},signInWithCustomToken:function(){return tM},signInWithEmailAndPassword:function(){return tK},signInWithEmailLink:function(){return tY},signInWithPhoneNumber:function(){return nZ},signInWithPopup:function(){return ii},signInWithRedirect:function(){return im},signOut:function(){return nc},unlink:function(){return tA},updateCurrentUser:function(){return nh},updateEmail:function(){return t9},updatePassword:function(){return t4},updatePhoneNumber:function(){return n9},updateProfile:function(){return t2},useDeviceLanguage:function(){return nu},validatePassword:function(){return ns},verifyBeforeUpdateEmail:function(){return t0},verifyPasswordResetCode:function(){return tH}});var i,r=n(3159),s=n(4444),a=n(6872),o=n(2616),l=n(2044);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u={PHONE:"phone",TOTP:"totp"},h={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},c={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},d={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},f={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function p(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let m=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}},g=p,y=new s.LL("auth","Firebase",p()),v={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"},w=new a.Yd("@firebase/auth");function _(e,...t){w.logLevel<=a.in.ERROR&&w.error(`Auth (${r.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,...t){throw A(e,...t)}function E(e,...t){return A(e,...t)}function T(e,t,n){let i=Object.assign(Object.assign({},g()),{[t]:n});return new s.LL("auth","Firebase",i).create(t,{appName:e.name})}function b(e){return T(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function S(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&I(e,"argument-error"),T(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function A(e,...t){if("string"!=typeof e){let n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return y.create(e,...t)}function C(e,t,...n){if(!e)throw A(t,...n)}function k(e){let t="INTERNAL ASSERTION FAILED: "+e;throw _(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function R(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){var n;this.shortDelay=e,this.longDelay=t,n="Short delay should be less than long delay!",t>e||k(n),this.isMobile=(0,s.uI)()||(0,s.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(R()||(0,s.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){var n,i;n=e.emulator,i="Emulator should always be set here",n||k(i);let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},x=new D(3e4,6e4);function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,i,r={}){return F(e,r,async()=>{let r={},a={};i&&("GET"===t?a=i:r={body:JSON.stringify(i)});let o=(0,s.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);let u=Object.assign({method:t,headers:l},r);return(0,s.L_)()||(u.referrerPolicy="no-referrer"),L.fetch()(q(e,e.config.apiHost,n,o),u)})}async function F(e,t,n){e._canInitEmulator=!1;let i=Object.assign(Object.assign({},M),t);try{let t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let s=await r.json();if("needConfirmation"in s)throw z(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{let[t,n]=(r.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw z(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw z(e,"user-disabled",s);let a=i[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(n)throw T(e,a,n);I(e,a)}}catch(t){if(t instanceof s.ZR)throw t;I(e,"network-request-failed",{message:String(t)})}}async function j(e,t,n,i,r={}){let s=await V(e,t,n,i,r);return"mfaPendingCredential"in s&&I(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,i){let r=`${t}${n}?${i}`;return e.config.emulator?P(e.config,r):`${e.config.apiScheme}://${r}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(E(this.auth,"network-request-failed")),x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){let i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);let r=E(e,t,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return void 0!==e&&void 0!==e.getResponse}function H(e){return void 0!==e&&void 0!==e.enterprise}class G{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function W(e,t){return V(e,"GET","/v2/recaptchaConfig",U(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function Y(e,t){return V(e,"POST","/v1/accounts:update",t)}async function J(e,t){return V(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t=!1){return(0,s.m9)(e).getIdToken(t)}async function ee(e,t=!1){let n=(0,s.m9)(e),i=await n.getIdToken(t),r=en(i);C(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");let a="object"==typeof r.firebase?r.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:r,token:i,authTime:X(et(r.auth_time)),issuedAtTime:X(et(r.iat)),expirationTime:X(et(r.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function et(e){return 1e3*Number(e)}function en(e){let[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return _("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,s.tV)(n);if(!e)return _("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return _("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ei(e){let t=en(e);return C(t,"internal-error"),C(void 0!==t.exp,"internal-error"),C(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof s.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=X(this.lastLoginAt),this.creationTime=X(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e){var t;let n=e.auth,i=await e.getIdToken(),r=await er(e,J(n,{idToken:i}));C(null==r?void 0:r.users.length,n,"internal-error");let s=r.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?eu(s.providerUserInfo):[],o=[...e.providerData.filter(e=>!a.some(t=>t.providerId===e.providerId)),...a],l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null==o?void 0:o.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ea(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&u})}async function el(e){let t=(0,s.m9)(e);await eo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function eu(e){return e.map(e=>{var{providerId:t}=e,n=(0,o._T)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(e,t){let n=await F(e,{},async()=>{let n=(0,s.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,a=q(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",L.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ec(e,t){return V(e,"POST","/v2/accounts:revokeToken",U(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(void 0!==e.idToken,"internal-error"),C(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):ei(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){C(0!==e.length,"internal-error");let t=ei(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(C(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:i,expiresIn:r}=await eh(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ed;return n&&(C("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(C("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(C("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ed,this.toJSON())}_performRefresh(){return k("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e,t){C("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ep{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,o._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new es(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ea(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await er(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ee(this,e)}reload(){return el(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ep(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await eo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.rh)(this.auth.app))return Promise.reject(b(this.auth));let e=await this.getIdToken();return await er(this,Q(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,a,o,l,u;let h=null!==(n=t.displayName)&&void 0!==n?n:void 0,c=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:I,stsTokenManager:E}=t;C(v&&E,e,"internal-error");let T=ed.fromJSON(this.name,E);C("string"==typeof v,e,"internal-error"),ef(h,e.name),ef(c,e.name),C("boolean"==typeof w,e,"internal-error"),C("boolean"==typeof _,e,"internal-error"),ef(d,e.name),ef(f,e.name),ef(p,e.name),ef(m,e.name),ef(g,e.name),ef(y,e.name);let b=new ep({uid:v,auth:e,email:c,emailVerified:w,displayName:h,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(b.providerData=I.map(e=>Object.assign({},e))),m&&(b._redirectEventId=m),b}static async _fromIdTokenResponse(e,t,n=!1){let i=new ed;i.updateFromServerResponse(t);let r=new ep({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await eo(r),r}static async _fromGetAccountInfoResponse(e,t,n){let i=t.users[0];C(void 0!==i.localId,"internal-error");let r=void 0!==i.providerUserInfo?eu(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null==r?void 0:r.length),a=new ed;a.updateFromIdToken(n);let o=new ep({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s});return Object.assign(o,{uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ea(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null==r?void 0:r.length)}),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em=new Map;function eg(e){var t,n;t="Expected a class definition",e instanceof Function||k(t);let i=em.get(e);return i?(n="Instance stored in cache mismatched with class",i instanceof e||k(n)):(i=new e,em.set(e,i)),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ey.type="NONE";let ev=ey;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(e,t,n){return`firebase:${e}:${t}:${n}`}class e_{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:i,name:r}=this.auth;this.fullUserKey=ew(this.userKey,i.apiKey,r),this.fullPersistenceKey=ew("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ep._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new e_(eg(ev),e,n);let i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=i[0]||eg(ev),s=ew(n,e.config.apiKey,e.name),a=null;for(let n of t)try{let t=await n._get(s);if(t){let i=ep._fromJSON(e,t);n!==r&&(a=i),r=n;break}}catch(e){}let o=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&o.length&&(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new e_(r,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(eE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eC(t))return"Blackberry";if(ek(t))return"Webos";if(eT(t))return"Safari";if((t.includes("chrome/")||eb(t))&&!t.includes("edge/"))return"Chrome";if(eA(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function eE(e=(0,s.z$)()){return/firefox\//i.test(e)}function eT(e=(0,s.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eb(e=(0,s.z$)()){return/crios\//i.test(e)}function eS(e=(0,s.z$)()){return/iemobile/i.test(e)}function eA(e=(0,s.z$)()){return/android/i.test(e)}function eC(e=(0,s.z$)()){return/blackberry/i.test(e)}function ek(e=(0,s.z$)()){return/webos/i.test(e)}function eN(e=(0,s.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eR(e=(0,s.z$)()){return eN(e)||eA(e)||ek(e)||eC(e)||/windows phone/i.test(e)||eS(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(e,t=[]){let n;switch(e){case"Browser":n=eI((0,s.z$)());break;case"Worker":n=`${eI((0,s.z$)())}-${e}`;break;default:n=e}let i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,i)=>{try{let i=e(t);n(i)}catch(e){i(e)}});n.onAbort=t,this.queue.push(n);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(e,t={}){return V(e,"GET","/v2/passwordPolicy",U(e,t))}class eL{constructor(e){var t,n,i,r;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,a;let o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsLowercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(r=o.containsUppercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eU(this),this.idTokenSubscription=new eU(this),this.beforeStateQueue=new eD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=eg(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await e_.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await J(this,{idToken:e}),n=await ep._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.rh)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!n||n===r)&&(null==a?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return(C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId)?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.rh)(this.app))return Promise.reject(b(this));let t=e?(0,s.m9)(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,r.rh)(this.app)?Promise.reject(b(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.rh)(this.app)?Promise.reject(b(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(eg(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new eL(await eP(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new s.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await ec(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&eg(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await e_.create(this,[eg(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{s||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{let n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eO(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){w.logLevel<=a.in.WARN&&w.warn(`Auth (${r.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ex(e){return(0,s.m9)(e)}class eU{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,s.ne)(e=>this.observer=e)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eV={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eF(e){return eV.loadJS(e)}function ej(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eq{constructor(e){this.type="recaptcha-enterprise",this.auth=ex(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{W(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(i=>{if(void 0===i.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new G(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function i(t,n,i){let r=window.grecaptcha;H(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{n(this.auth).then(n=>{if(!t&&H(window.grecaptcha))i(n,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}let t=eV.recaptchaEnterpriseScript;0!==t.length&&(t+=n),eF(t).then(()=>{i(n,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function eB(e,t,n,i=!1){let r;let s=new eq(e);try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}let a=Object.assign({},t);return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ez(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r||!r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return i(e,t).catch(async r=>{if("auth/missing-recaptcha-token"!==r.code)return Promise.reject(r);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let r=await eB(e,t,n,"getOobCode"===n);return i(e,r)}});{let r=await eB(e,t,n,"getOobCode"===n);return i(e,r)}}async function e$(e){let t=ex(e),n=new G(await W(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,n.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")&&new eq(t).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eH(e,t){let n=(0,r.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),i=n.getOptions();if((0,s.vZ)(i,null!=t?t:{}))return e;I(e,"already-initialized")}return n.initialize({options:t})}function eG(e,t,n){let i=ex(e);C(i._canInitEmulator,i,"emulator-config-failed"),C(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");let r=!!(null==n?void 0:n.disableWarnings),s=eK(t),{host:a,port:o}=function(e){let t=eK(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){let e=r[1];return{host:e,port:eW(i.substr(e.length+1))}}{let[e,t]=i.split(":");return{host:e,port:eW(t)}}}(t),l=null===o?"":`:${o}`;i.config.emulator={url:`${s}//${a}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function eK(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eW(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,t){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eY(e,t){return V(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function eJ(e,t){return V(e,"POST","/v1/accounts:update",t)}async function eX(e,t){return V(e,"POST","/v1/accounts:signUp",t)}async function eZ(e,t){return V(e,"POST","/v1/accounts:update",U(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function e1(e,t){return V(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function e2(e,t){return e1(e,t)}async function e9(e,t){return e1(e,t)}async function e4(e,t){return e1(e,t)}async function e6(e,t){return e1(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function e3(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7 extends eQ{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new e7(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new e7(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ez(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",e0);case"emailLink":return e5(e,{email:this._email,oobCode:this._password});default:I(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ez(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eX);case"emailLink":return e3(e,{idToken:t,email:this._email,oobCode:this._password});default:I(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e8(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}class te extends eQ{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):I("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,o._T)(t,["providerId","signInMethod"]);if(!n||!i)return null;let s=new te(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return e8(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,e8(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,e8(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,s.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function tn(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function ti(e,t){let n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}let tr={USER_NOT_FOUND:"user-not-found"};async function ts(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),tr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends eQ{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ta({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ta({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tn(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ti(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ts(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new ta({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}class to{constructor(e){var t,n,i,r,a,o;let l=(0,s.zd)((0,s.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(n=l.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);C(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(r=l.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,s.zd)((0,s.pd)(e)).link,n=t?(0,s.zd)((0,s.pd)(t)).deep_link_id:null,i=(0,s.zd)((0,s.pd)(e)).deep_link_id;return(i?(0,s.zd)((0,s.pd)(i)).link:null)||i||n||t||e}(e);try{return new to(t)}catch(e){return null}}}function tl(e){return to.parseLink(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.providerId=tu.PROVIDER_ID}static credential(e,t){return e7._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=to.parseLink(t);return C(n,"argument-error"),e7._fromEmailAndCode(e,n.code,n.tenantId)}}tu.PROVIDER_ID="password",tu.EMAIL_PASSWORD_SIGN_IN_METHOD="password",tu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends th{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class td extends tc{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return C("providerId"in t&&"signInMethod"in t,"argument-error"),te._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),te._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return td.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return td.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:a}=e;if(!n&&!i&&!t&&!r||!a)return null;try{return new td(a)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends tc{constructor(){super("facebook.com")}static credential(e){return te._fromParams({providerId:tf.PROVIDER_ID,signInMethod:tf.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tf.credentialFromTaggedObject(e)}static credentialFromError(e){return tf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tf.credential(e.oauthAccessToken)}catch(e){return null}}}tf.FACEBOOK_SIGN_IN_METHOD="facebook.com",tf.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends tc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return te._fromParams({providerId:tp.PROVIDER_ID,signInMethod:tp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tp.credentialFromTaggedObject(e)}static credentialFromError(e){return tp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tp.credential(t,n)}catch(e){return null}}}tp.GOOGLE_SIGN_IN_METHOD="google.com",tp.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends tc{constructor(){super("github.com")}static credential(e){return te._fromParams({providerId:tm.PROVIDER_ID,signInMethod:tm.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tm.credentialFromTaggedObject(e)}static credentialFromError(e){return tm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tm.credential(e.oauthAccessToken)}catch(e){return null}}}tm.GITHUB_SIGN_IN_METHOD="github.com",tm.PROVIDER_ID="github.com";class tg extends eQ{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return e8(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,e8(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,e8(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){let{providerId:t,signInMethod:n,pendingToken:i}="string"==typeof e?JSON.parse(e):e;return t&&n&&i&&t===n?new tg(t,i):null}static _create(e,t){return new tg(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class ty extends th{constructor(e){C(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return ty.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ty.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){let t=tg.fromJSON(e);return C(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return tg._create(n,t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends tc{constructor(){super("twitter.com")}static credential(e,t){return te._fromParams({providerId:tv.PROVIDER_ID,signInMethod:tv.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tv.credentialFromTaggedObject(e)}static credentialFromError(e){return tv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return tv.credential(t,n)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(e,t){return j(e,"POST","/v1/accounts:signUp",U(e,t))}tv.TWITTER_SIGN_IN_METHOD="twitter.com",tv.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){return new t_({user:await ep._fromIdTokenResponse(e,n,i),providerId:tI(n),_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){return await e._updateTokensIfNecessary(n,!0),new t_({user:e,providerId:tI(n),_tokenResponse:n,operationType:t})}}function tI(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(e){var t;if((0,r.rh)(e.app))return Promise.reject(b(e));let n=ex(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new t_({user:n.currentUser,providerId:null,operationType:"signIn"});let i=await tw(n,{returnSecureToken:!0}),s=await t_._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends s.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,tT.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new tT(e,t,n,i)}}function tb(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tT._fromErrorAndOperation(e,n,t,i);throw n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(e,t){let n=(0,s.m9)(e);await tk(!0,n,t);let{providerUserInfo:i}=await Y(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),r=tS(i||[]);return n.providerData=n.providerData.filter(e=>r.has(e.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function tC(e,t,n=!1){let i=await er(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return t_._forOperation(e,"link",i)}async function tk(e,t,n){await eo(t),C(tS(t.providerData).has(n)===e,t.auth,!1===e?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(e,t,n=!1){let{auth:i}=e;if((0,r.rh)(i.app))return Promise.reject(b(i));let s="reauthenticate";try{let r=await er(e,tb(i,s,t,e),n);C(r.idToken,i,"internal-error");let a=en(r.idToken);C(a,i,"internal-error");let{sub:o}=a;return C(e.uid===o,i,"user-mismatch"),t_._forOperation(e,s,r)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&I(i,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(e,t,n=!1){if((0,r.rh)(e.app))return Promise.reject(b(e));let i="signIn",s=await tb(e,i,t),a=await t_._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(a.user),a}async function tO(e,t){return tR(ex(e),t)}async function tD(e,t){let n=(0,s.m9)(e);return await tk(!1,n,t.providerId),tC(n,t)}async function tP(e,t){return tN((0,s.m9)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(e,t){if((0,r.rh)(e.app))return Promise.reject(b(e));let n=ex(e),i=await tL(n,{token:t,returnSecureToken:!0}),s=await t_._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tU._fromServerResponse(e,t):"totpInfo"in t?tV._fromServerResponse(e,t):I(e,"internal-error")}}class tU extends tx{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tU(t)}}class tV extends tx{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new tV(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(e,t,n){var i;C((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),C(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tj(e){let t=ex(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tq(e,t,n){let i=ex(e),r={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&tF(i,r,n),await ez(i,r,"getOobCode",e9)}async function tB(e,t,n){await eY((0,s.m9)(e),{oobCode:t,newPassword:n}).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tj(e),t})}async function tz(e,t){await eZ((0,s.m9)(e),{oobCode:t})}async function t$(e,t){let n=(0,s.m9)(e),i=await eY(n,{oobCode:t}),r=i.requestType;switch(C(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(i.mfaInfo,n,"internal-error");default:C(i.email,n,"internal-error")}let a=null;return i.mfaInfo&&(a=tx._fromServerResponse(ex(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:a},operation:r}}async function tH(e,t){let{data:n}=await t$((0,s.m9)(e),t);return n.email}async function tG(e,t,n){if((0,r.rh)(e.app))return Promise.reject(b(e));let i=ex(e),s=ez(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tw),a=await s.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tj(e),t}),o=await t_._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(o.user),o}function tK(e,t,n){return(0,r.rh)(e.app)?Promise.reject(b(e)):tO((0,s.m9)(e),tu.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tj(e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tW(e,t,n){let i=ex(e),r={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};C(n.handleCodeInApp,i,"argument-error"),n&&tF(i,r,n),await ez(i,r,"getOobCode",e4)}function tQ(e,t){let n=to.parseLink(t);return(null==n?void 0:n.operation)==="EMAIL_SIGNIN"}async function tY(e,t,n){if((0,r.rh)(e.app))return Promise.reject(b(e));let i=(0,s.m9)(e),a=tu.credentialWithLink(t,n||N());return C(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),tO(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tJ(e,t){return V(e,"POST","/v1/accounts:createAuthUri",U(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tX(e,t){let n=R()?N():"http://localhost",{signinMethods:i}=await tJ((0,s.m9)(e),{identifier:t,continueUri:n});return i||[]}async function tZ(e,t){let n=(0,s.m9)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&tF(n.auth,i,t);let{email:r}=await e2(n.auth,i);r!==e.email&&await e.reload()}async function t0(e,t,n){let i=(0,s.m9)(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&tF(i.auth,r,n);let{email:a}=await e6(i.auth,r);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(e,t){return V(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;let i=(0,s.m9)(e),r=await i.getIdToken(),a=await er(i,t1(i.auth,{idToken:r,displayName:t,photoUrl:n,returnSecureToken:!0}));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;let o=i.providerData.find(({providerId:e})=>"password"===e);o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function t9(e,t){let n=(0,s.m9)(e);return(0,r.rh)(n.auth.app)?Promise.reject(b(n.auth)):t6(n,t,null)}function t4(e,t){return t6((0,s.m9)(e),null,t)}async function t6(e,t,n){let{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);let s=await er(e,eJ(i,r));await e._updateTokensIfNecessary(s,!0)}class t5{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class t3 extends t5{constructor(e,t,n,i){super(e,t,n),this.username=i}}class t7 extends t5{constructor(e,t){super(e,"facebook.com",t)}}class t8 extends t3{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class ne extends t5{constructor(e,t){super(e,"google.com",t)}}class nt extends t3{constructor(e,t,n){super(e,"twitter.com",t,n)}}function nn(e){let{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){var t,n;if(!e)return null;let{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){let i=null===(n=null===(t=en(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i)return new t5(s,"anonymous"!==i&&"custom"!==i?i:null)}if(!i)return null;switch(i){case"facebook.com":return new t7(s,r);case"github.com":return new t8(s,r);case"google.com":return new ne(s,r);case"twitter.com":return new nt(s,r,e.screenName||null);case"custom":case"anonymous":return new t5(s,null);default:return new t5(s,i,r)}}(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e,t){return(0,s.m9)(e).setPersistence(t)}function nr(e){return e$(e)}async function ns(e,t){return ex(e).validatePassword(t)}function na(e,t,n,i){return(0,s.m9)(e).onIdTokenChanged(t,n,i)}function no(e,t,n){return(0,s.m9)(e).beforeAuthStateChanged(t,n)}function nl(e,t,n,i){return(0,s.m9)(e).onAuthStateChanged(t,n,i)}function nu(e){(0,s.m9)(e).useDeviceLanguage()}function nh(e,t){return(0,s.m9)(e).updateCurrentUser(t)}function nc(e){return(0,s.m9)(e).signOut()}function nd(e,t){return ex(e).revokeAccessToken(t)}async function nf(e){return(0,s.m9)(e).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new np("enroll",e,t)}static _fromMfaPendingCredential(e){return new np("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return np._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return np._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){let n=ex(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map(e=>tx._fromServerResponse(n,e));C(i.mfaPendingCredential,n,"internal-error");let s=np._fromMfaPendingCredential(i.mfaPendingCredential);return new nm(s,r,async e=>{let r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;let a=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":let o=await t_._fromIdTokenResponse(n,t.operationType,a);return await n._updateCurrentUser(o.user),o;case"reauthenticate":return C(t.user,n,"internal-error"),t_._forOperation(t.user,t.operationType,a);default:I(n,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}function ng(e,t){var n;let i=(0,s.m9)(e);return C(t.customData.operationType,i,"argument-error"),C(null===(n=t.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),nm._fromError(i,t)}class ny{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>tx._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new ny(e)}async getSession(){return np._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){let n=await this.getSession(),i=await er(this.user,e._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){let t="string"==typeof e?e:e.uid,n=await this.user.getIdToken();try{var i,r;let e=await er(this.user,(i=this.user.auth,r={idToken:n,mfaEnrollmentId:t},V(i,"POST","/v2/accounts/mfaEnrollment:withdraw",U(i,r))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}let nv=new WeakMap;function nw(e){let t=(0,s.m9)(e);return nv.has(t)||nv.set(t,ny._fromUser(t)),nv.get(t)}let n_="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(n_,"1"),this.storage.removeItem(n_),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class nE extends nI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);(0,s.w1)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nE.type="LOCAL";let nT=nE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb extends nI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nb.type="SESSION";let nS=nb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new nA(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:i}=e.data,r=this.handlersMap[n];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(r).map(async t=>t(e.origin,i)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}nA.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let i,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=nC("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},n);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(e.data.response);break;default:clearTimeout(u),clearTimeout(i),o(Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(){return void 0!==nN().WorkerGlobalScope&&"function"==typeof nN().importScripts}async function nO(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nD="firebaseLocalStorageDb",nP="firebaseLocalStorage",nL="fbase_key";class nM{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nx(e,t){return e.transaction([nP],t?"readwrite":"readonly").objectStore(nP)}function nU(){let e=indexedDB.open(nD,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(nP,{keyPath:nL})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(nP)?t(n):(n.close(),await new nM(indexedDB.deleteDatabase(nD)).toPromise(),t(await nU()))})})}async function nV(e,t,n){return new nM(nx(e,!0).put({[nL]:t,value:n})).toPromise()}async function nF(e,t){let n=nx(e,!1).get(t),i=await new nM(n).toPromise();return void 0===i?null:i.value}function nj(e,t){return new nM(nx(e,!0).delete(t)).toPromise()}class nq{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await nU()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nA._getInstance(nR()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nO(),!this.activeServiceWorker)return;this.sender=new nk(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await nU();return await nV(e,n_,"1"),await nj(e,n_),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>nV(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>nF(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nj(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new nM(nx(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;if(0!==e.length)for(let{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nq.type="LOCAL";let nB=nq;class nz{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let n=this.counter;return this._widgets.set(n,new n$(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;let n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class n${constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let i="string"==typeof e?document.getElementById(e):e;C(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<50;e++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}(0);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nH=ej("rcb"),nG=new D(3e4,6e4);class nK{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=nN().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return(C(t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t),e,"argument-error"),this.shouldResolveImmediately(t)&&$(nN().grecaptcha))?Promise.resolve(nN().grecaptcha):new Promise((n,i)=>{let r=nN().setTimeout(()=>{i(E(e,"network-request-failed"))},nG.get());nN()[nH]=()=>{nN().clearTimeout(r),delete nN()[nH];let s=nN().grecaptcha;if(!s||!$(s)){i(E(e,"internal-error"));return}let a=s.render;s.render=(e,t)=>{let n=a(e,t);return this.counter++,n},this.hostLanguage=t,n(s)},eF(`${eV.recaptchaV2Script}?${(0,s.xO)({onload:nH,render:"explicit",hl:t})}`).catch(()=>{clearTimeout(r),i(E(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=nN().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class nW{async load(e){return new nz(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nQ="recaptcha",nY={theme:"light",type:"image"};class nJ{constructor(e,t,n=Object.assign({},nY)){this.parameters=n,this.type=nQ,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ex(e),this.isInvisible="invisible"===this.parameters.size,C("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let i="string"==typeof t?document.getElementById(t):t;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new nW:new nK,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha();return t.getResponse(e)||new Promise(n=>{let i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let n=nN()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;C(R()&&!nR(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await K(this.auth);C(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=ta._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function nZ(e,t,n){if((0,r.rh)(e.app))return Promise.reject(b(e));let i=ex(e);return new nX(await n2(i,t,(0,s.m9)(n)),e=>tO(i,e))}async function n0(e,t,n){let i=(0,s.m9)(e);return await tk(!1,i,"phone"),new nX(await n2(i.auth,t,(0,s.m9)(n)),e=>tD(i,e))}async function n1(e,t,n){let i=(0,s.m9)(e);return(0,r.rh)(i.auth.app)?Promise.reject(b(i.auth)):new nX(await n2(i.auth,t,(0,s.m9)(n)),e=>tP(i,e))}async function n2(e,t,n){var i,r,s;let a=await n.verify();try{let o;if(C("string"==typeof a,e,"argument-error"),C(n.type===nQ,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o)return C("enroll"===t.type,e,"internal-error"),(await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},V(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,r)))).phoneSessionInfo.sessionInfo;{C("signin"===t.type,e,"internal-error");let n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;return C(n,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}},V(e,"POST","/v2/accounts/mfaSignIn:start",U(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await tt(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{n._reset()}}async function n9(e,t){let n=(0,s.m9)(e);if((0,r.rh)(n.auth.app))return Promise.reject(b(n.auth));await tC(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.providerId=n4.PROVIDER_ID,this.auth=ex(e)}verifyPhoneNumber(e,t){return n2(this.auth,e,(0,s.m9)(t))}static credential(e,t){return ta._fromVerification(e,t)}static credentialFromResult(e){return n4.credentialFromTaggedObject(e)}static credentialFromError(e){return n4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?ta._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n6(e,t){return t?eg(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}n4.PROVIDER_ID="phone",n4.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5 extends eQ{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return e8(e,this._buildIdpRequest())}_linkToIdToken(e,t){return e8(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return e8(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function n3(e){return tR(e.auth,new n5(e),e.bypassAuthState)}function n7(e){let{auth:t,user:n}=e;return C(n,t,"internal-error"),tN(n,new n5(e),e.bypassAuthState)}async function n8(e){let{auth:t,user:n}=e;return C(n,t,"internal-error"),tC(n,new n5(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n3;case"linkViaPopup":case"linkViaRedirect":return n8;case"reauthViaPopup":case"reauthViaRedirect":return n7;default:I(this.auth,"internal-error")}}resolve(e){var t,n;t=this.pendingPromise,n="Pending promise was never set",t||k(n),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,n;t=this.pendingPromise,n="Pending promise was never set",t||k(n),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=new D(2e3,1e4);async function ii(e,t,n){if((0,r.rh)(e.app))return Promise.reject(E(e,"operation-not-supported-in-this-environment"));let i=ex(e);S(e,t,th);let s=n6(i,n);return new ia(i,"signInViaPopup",t,s).executeNotNull()}async function ir(e,t,n){let i=(0,s.m9)(e);if((0,r.rh)(i.auth.app))return Promise.reject(E(i.auth,"operation-not-supported-in-this-environment"));S(i.auth,t,th);let a=n6(i.auth,n);return new ia(i.auth,"reauthViaPopup",t,a,i).executeNotNull()}async function is(e,t,n){let i=(0,s.m9)(e);S(i.auth,t,th);let r=n6(i.auth,n);return new ia(i.auth,"linkViaPopup",t,r,i).executeNotNull()}class ia extends ie{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ia.currentPopupAction&&ia.currentPopupAction.cancel(),ia.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||k(t);let n=nC();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(E(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(E(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ia.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(E(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,it.get())};e()}}ia.currentPopupAction=null;let io=new Map;class il extends ie{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{let t=await iu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iu(e,t){let n=ip(t),i=id(e);if(!await i._isAvailable())return!1;let r=await i._get(n)==="true";return await i._remove(n),r}async function ih(e,t){return id(e)._set(ip(t),"true")}function ic(e,t){io.set(e._key(),t)}function id(e){return eg(e._redirectPersistence)}function ip(e){return ew("pendingRedirect",e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(e,t,n){return ig(e,t,n)}async function ig(e,t,n){if((0,r.rh)(e.app))return Promise.reject(b(e));let i=ex(e);S(e,t,th),await i._initializationPromise;let s=n6(i,n);return await ih(s,i),s._openRedirect(i,t,"signInViaRedirect")}function iy(e,t,n){return iv(e,t,n)}async function iv(e,t,n){let i=(0,s.m9)(e);if(S(i.auth,t,th),(0,r.rh)(i.auth.app))return Promise.reject(b(i.auth));await i.auth._initializationPromise;let a=n6(i.auth,n);await ih(a,i.auth);let o=await iT(i);return a._openRedirect(i.auth,t,"reauthViaRedirect",o)}function iw(e,t,n){return i_(e,t,n)}async function i_(e,t,n){let i=(0,s.m9)(e);S(i.auth,t,th),await i.auth._initializationPromise;let r=n6(i.auth,n);await tk(!1,i,t.providerId),await ih(r,i.auth);let a=await iT(i);return r._openRedirect(i.auth,t,"linkViaRedirect",a)}async function iI(e,t){return await ex(e)._initializationPromise,iE(e,t,!1)}async function iE(e,t,n=!1){if((0,r.rh)(e.app))return Promise.reject(b(e));let i=ex(e),s=n6(i,t),a=new il(i,s,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function iT(e){let t=nC(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}class ib{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iA(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!iA(e)){let i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(E(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(iS(e))}saveEventToCache(e){this.cachedEventUids.add(iS(e)),this.lastProcessedEventTime=Date.now()}}function iS(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function iA({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(e,t={}){return V(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ik=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iN=/^https?/;async function iR(e){if(e.config.emulator)return;let{authorizedDomains:t}=await iC(e);for(let e of t)try{if(function(e){let t=N(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!iN.test(n))return!1;if(ik.test(e))return i===e;let r=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}(e))return}catch(e){}I(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iO=new D(3e4,6e4);function iD(){let e=nN().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let iP=null,iL=new D(5e3,15e3),iM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ix=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function iU(e){let t=await (iP=iP||new Promise((t,n)=>{var i,r,s;function a(){iD(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{iD(),n(E(e,"network-request-failed"))},timeout:iO.get()})}if(null===(r=null===(i=nN().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=nN().gapi)||void 0===s?void 0:s.load)a();else{let t=ej("iframefcb");return nN()[t]=()=>{gapi.load?a():n(E(e,"network-request-failed"))},eF(`${eV.gapiScript}?onload=${t}`).catch(e=>n(e))}}).catch(e=>{throw iP=null,e})),n=nN().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;C(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?P(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:r.Jn},a=ix.get(e.config.apiHost);a&&(i.eid=a);let o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${(0,s.xO)(i).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iM,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});let r=E(e,"network-request-failed"),s=nN().setTimeout(()=>{i(r)},iL.get());function a(){nN().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{i(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class iF{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let ij=encodeURIComponent("fac");async function iq(e,t,n,i,a,o){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r.Jn,eventId:a};if(t instanceof th)for(let[n,i]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,s.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[n]=i;if(t instanceof tc){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),h=u?`#${ij}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?P(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,s.xO)(l).slice(1)}${h}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iB="webStorageSupport";class iz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nS,this._completeRedirectFn=iE,this._overrideRedirectResult=ic}async _openPopup(e,t,n,i){var r,a,o;a=null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,o="_initialize() not called before _openPopup()",a||k(o);let l=await iq(e,t,n,N(),i);return function(e,t,n,i=500,r=600){let a=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),l="",u=Object.assign(Object.assign({},iV),{width:i.toString(),height:r.toString(),top:a,left:o}),h=(0,s.z$)().toLowerCase();n&&(l=eb(h)?"_blank":n),eE(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,s.z$)()){var t;return eN(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}(t||"",l),new iF(null);let d=window.open(t||"",l,c);C(d,e,"popup-blocked");try{d.focus()}catch(e){}return new iF(d)}(e,l,nC())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=await iq(e,t,n,N(),i),nN().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var n;let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(n="If manager is not set, promise should be",i||k(n),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await iU(e),n=new ib(e);return t.register("authEvent",t=>(C(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(iB,{type:iB},n=>{var i;let r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[iB];void 0!==r&&t(!!r),I(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eR()||eT()||eN()}}let i$=iz;class iH{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return k("unexpected MultiFactorSessionType")}}}class iG extends iH{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new iG(e)}_finalizeEnroll(e,t,n){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class iK{constructor(){}static assertion(e){return iG._fromCredential(e)}}iK.FACTOR_ID="phone";class iW{static assertionForEnrollment(e,t){return iQ._fromSecret(e,t)}static assertionForSignIn(e,t){return iQ._fromEnrollmentId(e,t)}static async generateSecret(e){var t,n;C(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let i=await V(n=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",U(n,{idToken:e.credential,totpEnrollmentInfo:{}}));return iY._fromStartTotpMfaEnrollmentResponse(i,e.user.auth)}}iW.FACTOR_ID="totp";class iQ extends iH{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new iQ(t,void 0,e)}static _fromEnrollmentId(e,t){return new iQ(t,e)}async _finalizeEnroll(e,t,n){return C(void 0!==this.secret,e,"argument-error"),V(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){C(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let n={verificationCode:this.otp};return V(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}class iY{constructor(e,t,n,i,r,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new iY(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(iJ(e)||iJ(t))&&(i=!0),i&&(iJ(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),iJ(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function iJ(e){return void 0===e||(null==e?void 0:e.length)===0}var iX="@firebase/auth",iZ="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let i1=(0,s.Pz)("authIdTokenMaxAge")||300,i2=null,i9=e=>async t=>{let n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>i1)return;let r=null==n?void 0:n.token;i2!==r&&(i2=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function i4(e=(0,r.Mq)()){let t=(0,r.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=eH(e,{popupRedirectResolver:i$,persistence:[nB,nT,nS]}),i=(0,s.Pz)("authTokenSyncURL");if(i&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(i,location.origin);if(location.origin===e.origin){let t=i9(e.toString());no(n,t,()=>t(n.currentUser)),na(n,e=>t(e))}}let a=(0,s.q4)("auth");return a&&eG(n,`http://${a}`),n}eV={loadJS:e=>new Promise((t,n)=>{var i,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=E("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},i="Browser",(0,r.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;C(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});let l=new eM(n,r,s,{apiKey:a,authDomain:o,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eO(i)});return function(e,t){let n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(eg);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,r.Xd)(new l.wA("auth-internal",e=>new i0(ex(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(iX,iZ,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(i)),(0,r.KN)(iX,iZ,"esm2017")},8718:function(e,t,n){n.d(t,{hJ:function(){return rv},ad:function(){return rE},cf:function(){return rZ},IO:function(){return rj},ar:function(){return rB}});var i,r,s,a,o,l,u,h,c,d,f,p,m,g,y=n(3159),v=n(2044),w=n(6872),_=n(4444),I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},E={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],a=t+(s^n&(r^s))+i[0]+3614090360&4294967295;a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[1]+3905402710&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[2]+606105819&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[3]+3250441966&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[4]+4118548399&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[5]+1200080426&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[6]+2821735955&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[7]+4249261313&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[8]+1770035416&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[9]+2336552879&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[10]+4294925233&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[11]+2304563134&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[12]+1804603682&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[13]+4254626195&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[14]+2792965006&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[15]+1236535329&4294967295,n=r+(a<<22&4294967295|a>>>10),a=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[12]+2368359562&4294967295,a=t+((n=r+(a<<20&4294967295|a>>>12))^r^s)+i[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[8]+2272392833&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[11]+1839030562&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[14]+4259657740&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[4]+1272893353&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[7]+4139469664&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[10]+3200236656&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[0]+3936430074&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[3]+3572445317&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[6]+76029189&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[12]+3873151461&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[15]+530742520&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[2]+3299628645&4294967295,n=r+(a<<23&4294967295|a>>>9),a=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function n(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var i=n-this.blockSize,r=this.B,s=this.h,a=0;a<n;){if(0==s)for(;a<=i;)t(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<n;)if(r[s++]=e.charCodeAt(a++),s==this.blockSize){t(this,r),s=0;break}}else for(;a<n;)if(r[s++]=e[a++],s==this.blockSize){t(this,r),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var s,a={};function o(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(a,e)?a[e]:a[e]=t(e)):new n([0|e],0>e?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return u;if(0>e)return p(l(-e));for(var t=[],i=1,r=0;e>=i;r++)t[r]=e/i|0,i*=4294967296;return new n(t,0)}var u=o(0),h=o(1),c=o(16777216);function d(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function f(e){return -1==e.h}function p(e){for(var t=e.g.length,i=[],r=0;r<t;r++)i[r]=~e.g[r];return new n(i,~e.h).add(h)}function m(e,t){return e.add(p(t))}function g(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(d(t))throw Error("division by zero");if(d(e))return new y(u,u);if(f(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(f(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(f(e)||f(t))throw Error("slowDivide_ only works with positive integers.");for(var n=h,i=t;0>=i.l(e);)n=w(n),i=w(i);var r=_(n,1),s=_(i,1);for(i=_(i,2),n=_(n,2);!d(i);){var a=s.add(i);0>=a.l(e)&&(r=r.add(n),s=a),i=_(i,1),n=_(n,1)}return t=m(e,r.j(t)),new y(r,t)}for(r=u;0<=e.l(t);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,i-48),a=(s=l(n)).j(t);f(a)||0<a.l(e);)n-=i,a=(s=l(n)).j(t);d(s)&&(s=h),r=r.add(s),e=m(e,a)}return new y(r,e)}function w(e){for(var t=e.g.length+1,i=[],r=0;r<t;r++)i[r]=e.i(r)<<1|e.i(r-1)>>>31;return new n(i,e.h)}function _(e,t){var i=t>>5;t%=32;for(var r=e.g.length-i,s=[],a=0;a<r;a++)s[a]=0<t?e.i(a+i)>>>t|e.i(a+i+1)<<32-t:e.i(a+i);return new n(s,e.h)}(s=n.prototype).m=function(){if(f(this))return-p(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.i(n);e+=(0<=i?i:4294967296+i)*t,t*=4294967296}return e},s.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(f(this))return"-"+p(this).toString(e);for(var t=l(Math.pow(e,6)),n=this,i="";;){var r=v(n,t).g,s=((0<(n=m(n,r.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(d(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},s.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},s.l=function(e){return f(e=m(this,e))?-1:d(e)?0:1},s.abs=function(){return f(this)?p(this):this},s.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0,s=0;s<=t;s++){var a=r+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);r=o>>>16,a&=65535,o&=65535,i[s]=o<<16|a}return new n(i,-2147483648&i[i.length-1]?-1:0)},s.j=function(e){if(d(this)||d(e))return u;if(f(this))return f(e)?p(this).j(p(e)):p(p(this).j(e));if(f(e))return p(this.j(p(e)));if(0>this.l(c)&&0>e.l(c))return l(this.m()*e.m());for(var t=this.g.length+e.g.length,i=[],r=0;r<2*t;r++)i[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var a=this.i(r)>>>16,o=65535&this.i(r),h=e.i(s)>>>16,m=65535&e.i(s);i[2*r+2*s]+=o*m,g(i,2*r+2*s),i[2*r+2*s+1]+=a*m,g(i,2*r+2*s+1),i[2*r+2*s+1]+=o*h,g(i,2*r+2*s+1),i[2*r+2*s+2]+=a*h,g(i,2*r+2*s+2)}for(r=0;r<t;r++)i[r]=i[2*r+1]<<16|i[2*r];for(r=t;r<2*t;r++)i[r]=0;return new n(i,0)},s.A=function(e){return v(this,e).h},s.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.i(r)&e.i(r);return new n(i,this.h&e.h)},s.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.i(r)|e.i(r);return new n(i,this.h|e.h)},s.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],r=0;r<t;r++)i[r]=this.i(r)^e.i(r);return new n(i,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,r=E.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=l,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return p(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=l(Math.pow(n,8)),r=u,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=l(Math.pow(n,a)),r=r.j(a).add(l(o))):r=(r=r.j(i)).add(l(o))}return r},i=E.Integer=n}).apply(void 0!==I?I:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},b={};(function(){var e,t,n,i="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},r=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof T&&T];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=r;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in n))break e;n=n[a]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&i(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,i,r;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,i=!1,(r={next:function(){if(!i&&n<e.length){var r=n++;return{value:t(r,e[r]),done:!1}}return i=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return r},r}});var f=f||{},p=this||self;function m(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function g(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function y(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return(w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v).apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function E(e){let t=e.length;if(0<t){let n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function S(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(m(n)){let t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}class A{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function C(e){return/^[\s\xa0]*$/.test(e)}function k(){var e=p.navigator;return e&&(e=e.userAgent)?e:""}function N(e){return N[" "](e),e}N[" "]=function(){};var R=-1!=k().indexOf("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&-1==k().indexOf("Edge"))&&!(-1!=k().indexOf("Trident")||-1!=k().indexOf("MSIE"))&&-1==k().indexOf("Edge");function O(e,t,n){for(let i in e)t.call(n,e[i],i,e)}function D(e){let t={};for(let n in e)t[n]=e[n];return t}let P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<P.length;t++)n=P[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}class M{constructor(){this.h=this.g=null}add(e,t){let n=x.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var x=new A(()=>new U,e=>e.reset());class U{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let V,F=!1,j=new M,q=()=>{let e=p.Promise.resolve(void 0);V=()=>{e.then(B)}};var B=()=>{let e;for(var t;e=null,j.g&&(e=j.g,j.g=j.g.next,j.g||(j.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){p.setTimeout(()=>{throw e},0)}(e)}x.j(t),100>x.h&&(x.h++,t.next=x.g,x.g=t)}F=!1};function z(){this.s=this.s,this.C=this.C}function $(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},$.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};p.addEventListener("test",e,t),p.removeEventListener("test",e,t)}catch(e){}return e}();function G(e,t){if($.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(R){e:{try{N(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:K[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.aa.h.call(this)}}I(G,$);var K={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),Q=0;function Y(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++Q,this.da=this.fa=!1}function J(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function X(e){this.src=e,this.g={},this.h=0}function Z(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=Array.prototype.indexOf.call(r,t,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(J(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ee(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==i)return r}return -1}X.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ee(e,t,i,r);return -1<a?(t=e[a],n||(t.fa=!1)):((t=new Y(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var et="closure_lm_"+(1e6*Math.random()|0),en={};function ei(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var a=g(r)?!!r.capture:!!r,o=eo(e);if(o||(e[et]=o=new X(e)),(n=o.add(t,n,i,a,s)).proxy)return n;if(i=function e(t){return ea.call(e.src,e.listener,t)},n.proxy=i,i.src=e,i.listener=n,e.addEventListener)H||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(es(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function er(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[W])Z(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(es(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=eo(t))?(Z(n,e),0==n.h&&(n.src=null,t[et]=null)):J(e)}}}function es(e){return e in en?en[e]:en[e]="on"+e}function ea(e,t){if(e.da)e=!0;else{t=new G(t,this);var n=e.listener,i=e.ha||e.src;e.fa&&er(e),e=n.call(i,t)}return e}function eo(e){return(e=e[et])instanceof X?e:null}var el="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(e){return"function"==typeof e?e:(e[el]||(e[el]=function(t){return e.handleEvent(t)}),e[el])}function eh(){z.call(this),this.i=new X(this),this.M=this,this.F=null}function ec(e,t){var n,i=e.F;if(i)for(n=[];i;i=i.F)n.push(i);if(e=e.M,i=t.type||t,"string"==typeof t)t=new $(t,e);else if(t instanceof $)t.target=t.target||e;else{var r=t;L(t=new $(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];r=ed(a,i,!0,t)&&r}if(r=ed(a=t.g=e,i,!0,t)&&r,r=ed(a,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=ed(a=t.g=n[s],i,!1,t)&&r}function ed(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&Z(e.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}function ef(e,t,n){if("function"==typeof e)n&&(e=w(e,n));else if(e&&"function"==typeof e.handleEvent)e=w(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:p.setTimeout(e,t||0)}I(eh,z),eh.prototype[W]=!0,eh.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);else(r=g(r)?!!r.capture:!!r,i=eu(i),t&&t[W])?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=ee(a=t.g[n],i,r,s))&&(J(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=eo(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ee(n,i,r,s)),(i=-1<t?n[t]:null)&&er(i))}(this,e,t,n,i)},eh.prototype.N=function(){if(eh.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)J(n[i]);delete t.g[e],t.h--}}this.F=null},eh.prototype.K=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},eh.prototype.L=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};class ep extends z{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ef(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function em(e){z.call(this),this.h=e,this.g={}}I(em,z);var eg=[];function ey(e){O(e.g,function(e,t){this.g.hasOwnProperty(t)&&er(e)},e),e.g={}}em.prototype.N=function(){em.aa.N.call(this),ey(this)},em.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ev=p.JSON.stringify,ew=p.JSON.parse,e_=class{stringify(e){return p.JSON.stringify(e,void 0)}parse(e){return p.JSON.parse(e,void 0)}};function eI(){}function eE(e){return e.h||(e.h=e.i())}function eT(){}eI.prototype.h=null;var eb={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eS(){$.call(this,"d")}function eA(){$.call(this,"c")}I(eS,$),I(eA,$);var eC={},ek=null;function eN(){return ek=ek||new eh}function eR(e){$.call(this,eC.La,e)}function eO(e){let t=eN();ec(t,new eR(t))}function eD(e,t){$.call(this,eC.STAT_EVENT,e),this.stat=t}function eP(e){let t=eN();ec(t,new eD(t,e))}function eL(e,t){$.call(this,eC.Ma,e),this.size=t}function eM(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){e()},t)}function ex(){this.g=!0}function eU(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return ev(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}eC.La="serverreachability",I(eR,$),eC.STAT_EVENT="statevent",I(eD,$),eC.Ma="timingevent",I(eL,$),ex.prototype.xa=function(){this.g=!1},ex.prototype.info=function(){};var eV={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eF={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ej(){}function eq(e,t,n,i){this.j=e,this.i=t,this.l=n,this.R=i||1,this.U=new em(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eB}function eB(){this.i=null,this.g="",this.h=!1}I(ej,eI),ej.prototype.g=function(){return new XMLHttpRequest},ej.prototype.i=function(){return{}},t=new ej;var ez={},e$={};function eH(e,t,n){e.L=1,e.v=ta(tt(t)),e.m=n,e.P=!0,eG(e,null)}function eG(e,t){e.F=Date.now(),eW(e),e.A=tt(e.v);var n=e.A,i=e.R;Array.isArray(i)||(i=[String(i)]),tw(n.i,"t",i),e.C=0,n=e.j.J,e.h=new eB,e.g=t6(e.j,n?t:null,!e.m),0<e.O&&(e.M=new ep(w(e.Y,e,e.g),e.O)),t=e.U,n=e.g,i=e.ca;var r="readystatechange";Array.isArray(r)||(r&&(eg[0]=r.toString()),r=eg);for(var s=0;s<r.length;s++){var a=function e(t,n,i,r,s){if(r&&r.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=eu(i),t&&t[W]?t.L(n,i,g(r)?!!r.capture:!!r,s):ei(t,n,i,!0,r,s)}(t,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=eu(i),t&&t[W]?t.K(n,i,g(r)?!!r.capture:!!r,s):ei(t,n,i,!1,r,s)}(n,r[s],i||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eO(),function(e,t,n,i,r,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eK(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function eW(e){e.S=Date.now()+e.I,eQ(e,e.I)}function eQ(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eM(w(e.ba,e),t)}function eY(e){e.B&&(p.clearTimeout(e.B),e.B=null)}function eJ(e){0==e.j.G||e.J||t0(e.j,e)}function eX(e){eY(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ey(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eZ(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e4(n.h,e))){if(!e.K&&e4(n.h,e)&&3==n.G){try{var i=n.Da.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tZ(n),tz(n);else break e}tY(n),eP(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=eM(w(n.Za,n),6e3));if(1>=e9(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else t2(n,11)}else if((e.K||n.g==e)&&tZ(n),!C(t))for(r=n.Da.g.parse(t),t=0;t<r.length;t++){let o=r[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.K=o[1],n.ia=o[2];let t=o[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let r=o[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e6(s,s.h),s.h=null))}if(i.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.ya=e,ts(i.I,i.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(i=n).qa=t4(i,i.J?i.ia:null,i.W),e.K){e5(i.h,e);var a=i.L;a&&(e.I=a),e.B&&(eY(e),eW(e)),i.g=e}else tQ(i);0<n.i.length&&tH(n)}else"stop"!=o[0]&&"close"!=o[0]||t2(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?t2(n,7):tB(n):"noop"!=o[0]&&n.l&&n.l.ta(o),n.v=0)}}eO(4)}catch(e){}}eq.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tV(e)?t.j():this.Y(e)},eq.prototype.Y=function(e){try{if(e==this.g)e:{let c=tV(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>c)&&(3!=c||this.g&&(this.h.h||this.g.oa()||tF(this.g)))){this.J||4!=c||7==t||(8==t||0>=d?eO(3):eO(2)),eY(this);var n=this.g.Z();this.X=n;t:if(eK(this)){var i=tF(this.g);e="";var r=i.length,s=4==tV(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eX(this),eJ(this);var a="";break t}this.h.i=new p.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:!(s&&t==r-1)});i.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,i,r,s,a){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.i,this.u,this.A,this.l,this.R,c,n),this.o){if(this.T&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(o)){var u=o;break t}}u=null}if(n=u)eU(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eZ(this,n);else{this.o=!1,this.s=3,eP(12),eX(this),eJ(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var n=e.C,i=t.indexOf("\n",n);return -1==i?e$:isNaN(n=Number(t.substring(n,i)))?ez:(i+=1)+n>t.length?e$:(t=t.slice(i,i+n),e.C=i+n,t)}(this,a))==e$){4==c&&(this.s=4,eP(14),n=!1),eU(this.i,this.l,null,"[Incomplete Response]");break}else if(e==ez){this.s=4,eP(15),eU(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else eU(this.i,this.l,e,null),eZ(this,e);if(eK(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=a.length||this.h.h||(this.s=1,eP(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tJ(h),h.M=!0,eP(11))}}else eU(this.i,this.l,a,"[Invalid Chunked Response]"),eX(this),eJ(this)}else eU(this.i,this.l,a,null),eZ(this,a);4==c&&eX(this),this.o&&!this.J&&(4==c?t0(this.j,this):(this.o=!1,eW(this)))}else(function(e){let t={};e=(e.g&&2<=tV(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(C(e[i]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[r]||[];t[r]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,eP(12)):(this.s=0,eP(13)),eX(this),eJ(this)}}}catch(e){}finally{}},eq.prototype.cancel=function(){this.J=!0,eX(this)},eq.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eO(),eP(17)),eX(this),this.s=2,eJ(this)):eQ(this,this.S-e)};var e0=class{constructor(e,t){this.g=e,this.map=t}};function e1(e){this.l=e||10,e=p.PerformanceNavigationTiming?0<(e=p.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e2(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e9(e){return e.h?1:e.g?e.g.size:0}function e4(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e6(e,t){e.g?e.g.add(t):e.h=t}function e5(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e3(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return E(e.i)}function e7(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(m(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(m(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let i in t=[],n=0,e)t[n++]=i;return t}}}(e),i=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(m(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}e1.prototype.cancel=function(){if(this.i=e3(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e8=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function te(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof te){this.h=e.h,tn(this,e.j),this.o=e.o,this.g=e.g,ti(this,e.s),this.l=e.l;var t=e.i,n=new tm;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tr(this,n),this.m=e.m}else e&&(t=String(e).match(e8))?(this.h=!1,tn(this,t[1]||"",!0),this.o=to(t[2]||""),this.g=to(t[3]||"",!0),ti(this,t[4]),this.l=to(t[5]||"",!0),tr(this,t[6]||"",!0),this.m=to(t[7]||"")):(this.h=!1,this.i=new tm(null,this.h))}function tt(e){return new te(e)}function tn(e,t,n){e.j=n?to(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ti(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tr(e,t,n){var i,r;t instanceof tm?(e.i=t,i=e.i,(r=e.h)&&!i.j&&(tg(i),i.i=null,i.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(ty(this,t),tw(this,n,e))},i)),i.j=r):(n||(t=tl(t,tf)),e.i=new tm(t,e.h))}function ts(e,t,n){e.i.set(t,n)}function ta(e){return ts(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function to(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tl(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tu(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}te.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tl(t,th,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(tl(t,th,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tl(n,"/"==n.charAt(0)?td:tc,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",tl(n,tp)),e.join("")};var th=/[#\/\?@]/g,tc=/[#\?:]/g,td=/[#\?]/g,tf=/[#\?@]/g,tp=/#/g;function tm(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tg(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function ty(e,t){tg(e),t=t_(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tv(e,t){return tg(e),t=t_(e,t),e.g.has(t)}function tw(e,t,n){ty(e,t),0<n.length&&(e.i=null,e.g.set(t_(e,t),E(n)),e.h+=n.length)}function t_(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tI(e,t,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(e){}}function tE(){this.g=new e_}function tT(e){this.l=e.Ub||null,this.j=e.eb||!1}function tb(e,t){eh.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tS(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tA(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tC(e)}function tC(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tk(e){let t="";return O(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function tN(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=tk(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ts(e,t,n))}function tR(e){eh.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=tm.prototype).add=function(e,t){tg(this),this.i=null,e=t_(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tg(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},n.na=function(){tg(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){let r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},n.V=function(e){tg(this);let t=[];if("string"==typeof e)tv(this,e)&&(t=t.concat(this.g.get(t_(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tg(this),this.i=null,tv(this,e=t_(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];let s=encodeURIComponent(String(i)),a=this.V(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),e.push(r)}}return this.i=e.join("&")},I(tT,eI),tT.prototype.g=function(){return new tb(this.l,this.j)},tT.prototype.i=(e={},function(){return e}),I(tb,eh),(n=tb.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tC(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||p).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tA(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tC(this)),this.g&&(this.readyState=3,tC(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==p.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tS(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tA(this):tC(this),3==this.readyState&&tS(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tA(this))},n.Qa=function(e){this.g&&(this.response=e,tA(this))},n.ga=function(){this.g&&tA(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tb.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),I(tR,eh);var tO=/^https?$/i,tD=["POST","PUT"];function tP(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tL(e),tx(e)}function tL(e){e.A||(e.A=!0,ec(e,"complete"),ec(e,"error"))}function tM(e){if(e.h&&void 0!==f&&(!e.v[1]||4!=tV(e)||2!=e.Z())){if(e.u&&4==tV(e))ef(e.Ea,0,e);else if(ec(e,"readystatechange"),4==tV(e)){e.h=!1;try{let a=e.Z();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,i=!0;break;default:i=!1}if(!(t=i)){if(n=0===a){var r=String(e.D).match(e8)[1]||null;!r&&p.self&&p.self.location&&(r=p.self.location.protocol.slice(0,-1)),n=!tO.test(r?r.toLowerCase():"")}t=n}if(t)ec(e,"complete"),ec(e,"success");else{e.m=6;try{var s=2<tV(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tL(e)}}finally{tx(e)}}}}function tx(e,t){if(e.g){tU(e);let n=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ec(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function tU(e){e.I&&(p.clearTimeout(e.I),e.I=null)}function tV(e){return e.g?e.g.readyState:0}function tF(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tj(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tq(e){this.Aa=0,this.i=[],this.j=new ex,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tj("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tj("baseRetryDelayMs",5e3,e),this.cb=tj("retryDelaySeedMs",1e4,e),this.Wa=tj("forwardChannelMaxRetries",2,e),this.wa=tj("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new e1(e&&e.concurrentRequestLimit),this.Da=new tE,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tB(e){if(t$(e),3==e.G){var t=e.U++,n=tt(e.I);if(ts(n,"SID",e.K),ts(n,"RID",t),ts(n,"TYPE","terminate"),tK(e,n),(t=new eq(e,e.j,t)).L=2,t.v=ta(tt(n)),n=!1,p.navigator&&p.navigator.sendBeacon)try{n=p.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&p.Image&&((new Image).src=t.v,n=!0),n||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),eW(t)}t9(e)}function tz(e){e.g&&(tJ(e),e.g.cancel(),e.g=null)}function t$(e){tz(e),e.u&&(p.clearTimeout(e.u),e.u=null),tZ(e),e.h.cancel(),e.s&&("number"==typeof e.s&&p.clearTimeout(e.s),e.s=null)}function tH(e){if(!e2(e.h)&&!e.s){e.s=!0;var t=e.Ga;V||q(),F||(V(),F=!0),j.add(t,e),e.B=0}}function tG(e,t){var n;n=t?t.l:e.U++;let i=tt(e.I);ts(i,"SID",e.K),ts(i,"RID",n),ts(i,"AID",e.T),tK(e,i),e.m&&e.o&&tN(i,e.m,e.o),n=new eq(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tW(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e6(e.h,n),eH(n,i,t)}function tK(e,t){e.H&&O(e.H,function(e,n){ts(t,n,e)}),e.l&&e7({},function(e,n){ts(t,n,e)})}function tW(e,t,n){n=Math.min(e.i.length,n);var i=e.l?w(e.l.Na,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=r[a].g,o=r[a].map;if(0>(n-=t))t=Math.max(0,r[a].g-100),s=!1;else try{!function(e,t,n){let i=n||"";try{e7(e,function(e,n){let r=e;g(e)&&(r=ev(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){i&&i(o)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function tQ(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;V||q(),F||(V(),F=!0),j.add(t,e),e.v=0}}function tY(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eM(w(e.Fa,e),t1(e,e.v)),e.v++,!0)}function tJ(e){null!=e.A&&(p.clearTimeout(e.A),e.A=null)}function tX(e){e.g=new eq(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=tt(e.qa);ts(t,"RID","rpc"),ts(t,"SID",e.K),ts(t,"AID",e.T),ts(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ts(t,"TO",e.ja),ts(t,"TYPE","xmlhttp"),tK(e,t),e.m&&e.o&&tN(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ta(tt(t)),n.m=null,n.P=!0,eG(n,e)}function tZ(e){null!=e.C&&(p.clearTimeout(e.C),e.C=null)}function t0(e,t){var n=null;if(e.g==t){tZ(e),tJ(e),e.g=null;var i=2}else{if(!e4(e.h,t))return;n=t.D,e5(e.h,t),i=1}if(0!=e.G){if(t.o){if(1==i){n=t.m?t.m.length:0,t=Date.now()-t.F;var r,s=e.B;ec(i=eN(),new eL(i,n)),tH(e)}else tQ(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==i&&(r=t,!(e9(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=r.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eM(w(e.Ga,e,r),t1(e,e.B)),e.B++,!0)))||2==i&&tY(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:t2(e,5);break;case 4:t2(e,10);break;case 3:t2(e,6);break;default:t2(e,2)}}}function t1(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function t2(e,t){if(e.j.info("Error code "+t),2==t){var n=w(e.fb,e),i=e.Xa;let t=!i;i=new te(i||"//www.google.com/images/cleardot.gif"),p.location&&"http"==p.location.protocol||tn(i,"https"),ta(i),t?function(e,t){let n=new ex;if(p.Image){let i=new Image;i.onload=_(tI,n,"TestLoadImage: loaded",!0,t,i),i.onerror=_(tI,n,"TestLoadImage: error",!1,t,i),i.onabort=_(tI,n,"TestLoadImage: abort",!1,t,i),i.ontimeout=_(tI,n,"TestLoadImage: timeout",!1,t,i),p.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(i.toString(),n):function(e,t){let n=new ex,i=new AbortController,r=setTimeout(()=>{i.abort(),tI(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:i.signal}).then(e=>{clearTimeout(r),e.ok?tI(n,"TestPingServer: ok",!0,t):tI(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(r),tI(n,"TestPingServer: error",!1,t)})}(i.toString(),n)}else eP(2);e.G=0,e.l&&e.l.sa(t),t9(e),t$(e)}function t9(e){if(e.G=0,e.ka=[],e.l){let t=e3(e.h);(0!=t.length||0!=e.i.length)&&(S(e.ka,t),S(e.ka,e.i),e.h.i.length=0,E(e.i),e.i.length=0),e.l.ra()}}function t4(e,t,n){var i=n instanceof te?tt(n):new te(n);if(""!=i.g)t&&(i.g=t+"."+i.g),ti(i,i.s);else{var r=p.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new te(null);i&&tn(s,i),t&&(s.g=t),r&&ti(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.ya,n&&t&&ts(i,n,t),ts(i,"VER",e.la),tK(e,i),i}function t6(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tR(e.Ca&&!e.pa?new tT({eb:n}):e.pa)).Ha(e.J),t}function t5(){}function t3(){}function t7(e,t){eh.call(this),this.g=new tq(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!C(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nt(this)}function t8(e){eS.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ne(){eA.call(this),this.status=1}function nt(e){this.g=e}(n=tR.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,i,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?eE(this.o):eE(t),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tP(this,e);return}if(e=i||"",i=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)i.set(s,r[s]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())i.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[t,a]of(r=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),s=p.FormData&&e instanceof p.FormData,!(0<=Array.prototype.indexOf.call(tD,n,void 0))||r||s||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tU(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tP(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ec(this,"complete"),ec(this,"abort"),tx(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tx(this,!0)),tR.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tM(this):this.bb())},n.bb=function(){tM(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tV(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ew(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tq.prototype).la=8,n.G=1,n.connect=function(e,t,n,i){eP(0),this.W=e,this.H=t||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=t4(this,null,this.W),tH(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let r=new eq(this,this.j,e),s=this.o;if(this.S&&(s?L(s=D(s),this.S):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tW(this,r,t),ts(n=tt(this.I),"RID",e),ts(n,"CVER",22),this.D&&ts(n,"X-HTTP-Session-Id",this.D),tK(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tk(s)))+"&"+t:this.m&&tN(n,this.m,s)),e6(this.h,r),this.Ua&&ts(n,"TYPE","init"),this.P?(ts(n,"$req",t),ts(n,"SID","null"),r.T=!0,eH(r,n,null)):eH(r,n,t),this.G=2}}else 3==this.G&&(e?tG(this,e):0==this.i.length||e2(this.h)||tG(this))}},n.Fa=function(){if(this.u=null,tX(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eM(w(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eP(10),tz(this),tX(this))},n.Za=function(){null!=this.C&&(this.C=null,tz(this),tY(this),eP(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eP(2)):(this.j.info("Failed to ping google.com"),eP(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t5.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t3.prototype.g=function(e,t){return new t7(e,t)},I(t7,eh),t7.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t7.prototype.close=function(){tB(this.g)},t7.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ev(e),e=n);t.i.push(new e0(t.Ya++,e)),3==t.G&&tH(t)},t7.prototype.N=function(){this.g.l=null,delete this.j,tB(this.g),delete this.g,t7.aa.N.call(this)},I(t8,eS),I(ne,eA),I(nt,t5),nt.prototype.ua=function(){ec(this.g,"a")},nt.prototype.ta=function(e){ec(this.g,new t8(e))},nt.prototype.sa=function(e){ec(this.g,new ne)},nt.prototype.ra=function(){ec(this.g,"b")},t3.prototype.createWebChannel=t3.prototype.g,t7.prototype.send=t7.prototype.o,t7.prototype.open=t7.prototype.m,t7.prototype.close=t7.prototype.close,d=b.createWebChannelTransport=function(){return new t3},c=b.getStatEventTarget=function(){return eN()},h=b.Event=eC,u=b.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eV.NO_ERROR=0,eV.TIMEOUT=8,eV.HTTP_ERROR=6,l=b.ErrorCode=eV,eF.COMPLETE="complete",o=b.EventType=eF,eT.EventType=eb,eb.OPEN="a",eb.CLOSE="b",eb.ERROR="c",eb.MESSAGE="d",eh.prototype.listen=eh.prototype.K,a=b.WebChannel=eT,b.FetchXmlHttpFactory=tT,tR.prototype.listenOnce=tR.prototype.L,tR.prototype.getLastError=tR.prototype.Ka,tR.prototype.getLastErrorCode=tR.prototype.Ba,tR.prototype.getStatus=tR.prototype.Z,tR.prototype.getResponseJson=tR.prototype.Oa,tR.prototype.getResponseText=tR.prototype.oa,tR.prototype.send=tR.prototype.ea,tR.prototype.setWithCredentials=tR.prototype.Ha,s=b.XhrIo=tR}).apply(void 0!==T?T:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),n(3454);var S=n(1876).Buffer;let A="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}C.UNAUTHENTICATED=new C(null),C.GOOGLE_CREDENTIALS=new C("google-credentials-uid"),C.FIRST_PARTY=new C("first-party-uid"),C.MOCK_USER=new C("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k="10.14.0",N=new w.Yd("@firebase/firestore");function R(){return N.logLevel}function O(e,...t){if(N.logLevel<=w.in.DEBUG){let n=t.map(L);N.debug(`Firestore (${k}): ${e}`,...n)}}function D(e,...t){if(N.logLevel<=w.in.ERROR){let n=t.map(L);N.error(`Firestore (${k}): ${e}`,...n)}}function P(e,...t){if(N.logLevel<=w.in.WARN){let n=t.map(L);N.warn(`Firestore (${k}): ${e}`,...n)}}function L(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e="Unexpected state"){let t=`FIRESTORE (${k}) INTERNAL ASSERTION FAILED: `+e;throw D(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends _.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class j{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(C.UNAUTHENTICATED))}shutdown(){}}class q{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class B{constructor(e){this.t=e,this.currentUser=C.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||M();let n=this.i,i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new V;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new V,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},a=e=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new V)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||M(),new F(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||M(),new C(e)}}class z{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=C.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ${constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new z(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(C.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class H{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||M();let n=e=>{null!=e.error&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,O("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let i=e=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?i(e):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||M(),this.R=e.token,new H(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function W(e,t){return e<t?-1:e>t?1:0}function Q(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new Y(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Y(0,0))}static max(){return new J(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){void 0===t?t=0:t>e.length&&M(),void 0===n?n=e.length-t:n>e.length-t&&M(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===X.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof X?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let n=e.get(i),r=t.get(i);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends X{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new U(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}let ee=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends X{construct(e,t,n){return new et(e,t,n)}static isValidIdentifier(e){return ee.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new et(["__name__"])}static fromServerFormat(e){let t=[],n="",i=0,r=()=>{if(0===n.length)throw new U(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;i<e.length;){let t=e[i];if("\\"===t){if(i+1===e.length)throw new U(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new U(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?s=!s:"."!==t||s?n+=t:r(),i++}if(r(),s)throw new U(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.path=e}static fromPath(e){return new en(Z.fromString(e))}static fromName(e){return new en(Z.fromString(e).popFirst(5))}static empty(){return new en(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Z.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new en(new Z(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}ei.UNKNOWN_ID=-1;class er{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new er(J.min(),en.empty(),-1)}static max(){return new er(J.max(),en.empty(),-1)}}class es{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(e){if(e.code!==x.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new eo((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof eo?t:eo.resolve(t)}catch(e){return eo.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):eo.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):eo.reject(t)}static resolve(e){return new eo((t,n)=>{t(e)})}static reject(e){return new eo((t,n)=>{n(e)})}static waitFor(e){return new eo((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=eo.resolve(!1);for(let n of e)t=t.next(e=>e?eo.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new eo((n,i)=>{let r=e.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new eo((n,i)=>{let r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}function el(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function eh(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ed(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ef(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}eu.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t){this.comparator=e,this.root=t||eg.EMPTY}insert(e,t){return new ep(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eg.BLACK,null,null))}remove(e){return new ep(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eg.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new em(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new em(this.root,e,this.comparator,!1)}getReverseIterator(){return new em(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new em(this.root,e,this.comparator,!0)}}class em{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eg{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:eg.RED,this.left=null!=i?i:eg.EMPTY,this.right=null!=r?r:eg.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new eg(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eg.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return eg.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eg.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eg.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}eg.EMPTY=null,eg.RED=!0,eg.BLACK=!1,eg.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,n,i,r){return this}insert(e,t,n){return new eg(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.comparator=e,this.data=new ep(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ev(this.data.getIterator())}getIteratorFrom(e){return new ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ey)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ey(this.comparator);return t.data=e,t}}class ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new ew([])}unionWith(e){let t=new ey(et.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ew(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Q(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.binaryString=e}static fromBase64String(e){return new eI(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new e_("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eI(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eI.EMPTY_BYTE_STRING=new eI("");let eE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eT(e){if(e||M(),"string"==typeof e){let t=0,n=eE.exec(e);if(n||M(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:eb(e.seconds),nanos:eb(e.nanos)}}function eb(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eS(e){return"string"==typeof e?eI.fromBase64String(e):eI.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eC(e){let t=e.mapValue.fields.__previous_value__;return eA(t)?eC(t):t}function ek(e){let t=eT(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,t,n,i,r,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class eR{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new eR("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof eR&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eO={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eD(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eA(e)?4:eK(e)?9007199254740991:eH(e)?10:11:M()}function eP(e,t){if(e===t)return!0;let n=eD(e);if(n!==eD(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ek(e).isEqual(ek(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eT(e.timestampValue),i=eT(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eS(e.bytesValue).isEqual(eS(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eb(e.geoPointValue.latitude)===eb(t.geoPointValue.latitude)&&eb(e.geoPointValue.longitude)===eb(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eb(e.integerValue)===eb(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eb(e.doubleValue),i=eb(t.doubleValue);return n===i?eh(n)===eh(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Q(e.arrayValue.values||[],t.arrayValue.values||[],eP);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ec(n)!==ec(i))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!eP(n[e],i[e])))return!1;return!0}(e,t);default:return M()}}function eL(e,t){return void 0!==(e.values||[]).find(e=>eP(e,t))}function eM(e,t){if(e===t)return 0;let n=eD(e),i=eD(t);if(n!==i)return W(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eb(e.integerValue||e.doubleValue),i=eb(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return ex(e.timestampValue,t.timestampValue);case 4:return ex(ek(e),ek(t));case 5:return W(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eS(e),i=eS(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){let t=W(n[e],i[e]);if(0!==t)return t}return W(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=W(eb(e.latitude),eb(t.latitude));return 0!==n?n:W(eb(e.longitude),eb(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eU(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,i,r,s;let a=e.fields||{},o=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(i=o.value)||void 0===i?void 0:i.arrayValue,h=W((null===(r=null==l?void 0:l.values)||void 0===r?void 0:r.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eU(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eO.mapValue&&t===eO.mapValue)return 0;if(e===eO.mapValue)return 1;if(t===eO.mapValue)return -1;let n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){let t=W(i[e],s[e]);if(0!==t)return t;let a=eM(n[i[e]],r[s[e]]);if(0!==a)return a}return W(i.length,s.length)}(e.mapValue,t.mapValue);default:throw M()}}function ex(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return W(e,t);let n=eT(e),i=eT(t),r=W(n.seconds,i.seconds);return 0!==r?r:W(n.nanos,i.nanos)}function eU(e,t){let n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){let t=eM(n[e],i[e]);if(t)return t}return W(n.length,i.length)}function eV(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eT(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eS(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,en.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let i of e.values||[])n?n=!1:t+=",",t+=eV(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",i=!0;for(let r of t)i?i=!1:n+=",",n+=`${r}:${eV(e.fields[r])}`;return n+"}"}(e.mapValue):M()}function eF(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ej(e){return!!e&&"integerValue"in e}function eq(e){return!!e&&"arrayValue"in e}function eB(e){return!!e&&"nullValue"in e}function ez(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e$(e){return!!e&&"mapValue"in e}function eH(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eG(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ed(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eG(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eG(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eK(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e){this.value=e}static empty(){return new eW({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!e$(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eG(t)}setAll(e){let t=et.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){let e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=eG(e):i.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){let t=this.field(e.popLast());e$(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eP(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];e$(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){for(let i of(ed(t,(t,n)=>e[t]=n),n))delete e[i]}clone(){return new eW(eG(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e,t,n,i,r,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eQ(e,0,J.min(),J.min(),J.min(),eW.empty(),0)}static newFoundDocument(e,t,n,i){return new eQ(e,1,t,J.min(),n,i,0)}static newNoDocument(e,t){return new eQ(e,2,t,J.min(),J.min(),eW.empty(),0)}static newUnknownDocument(e,t){return new eQ(e,3,t,J.min(),J.min(),eW.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(J.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eW.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eW.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eQ&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eQ(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY{constructor(e,t){this.position=e,this.inclusive=t}}function eJ(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){let s=t[r],a=e.position[r];if(i=s.field.isKeyField()?en.comparator(en.fromName(a.referenceValue),n.key):eM(a,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function eX(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eP(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{}class e1 extends e0{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new e6(e,t,n):"array-contains"===t?new e8(e,n):"in"===t?new te(e,n):"not-in"===t?new tt(e,n):"array-contains-any"===t?new tn(e,n):new e1(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new e5(e,n):new e3(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eM(t,this.value)):null!==t&&eD(this.value)===eD(t)&&this.matchesComparison(eM(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e2 extends e0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new e2(e,t)}matches(e){return e9(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function e9(e){return"and"===e.op}function e4(e){for(let t of e.filters)if(t instanceof e2)return!1;return!0}class e6 extends e1{constructor(e,t,n){super(e,t,n),this.key=en.fromName(n.referenceValue)}matches(e){let t=en.comparator(e.key,this.key);return this.matchesComparison(t)}}class e5 extends e1{constructor(e,t){super(e,"in",t),this.keys=e7("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e3 extends e1{constructor(e,t){super(e,"not-in",t),this.keys=e7("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e7(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>en.fromName(e.referenceValue))}class e8 extends e1{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eq(t)&&eL(t.arrayValue,this.value)}}class te extends e1{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eL(this.value.arrayValue,t)}}class tt extends e1{constructor(e,t){super(e,"not-in",t)}matches(e){if(eL(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eL(this.value.arrayValue,t)}}class tn extends e1{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eq(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eL(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.ue=null}}function tr(e,t=null,n=[],i=[],r=null,s=null,a=null){return new ti(e,t,n,i,r,s,a)}function ts(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof e1)return t.field.canonicalString()+t.op.toString()+eV(t.value);if(e4(t)&&e9(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eV(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eV(e)).join(",")),e.ue=t}return e.ue}function ta(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,i;if(n=e.orderBy[r],i=t.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof e1?n instanceof e1&&t.op===n.op&&t.field.isEqual(n.field)&&eP(t.value,n.value):t instanceof e2?n instanceof e2&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,i,r)=>t&&e(i,n.filters[r]),!0):void M()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eX(e.startAt,t.startAt)&&eX(e.endAt,t.endAt)}function to(e){return en.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function th(e){return null!==e.collectionGroup}function tc(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ey(et.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new eZ(t,i))}),n.has(et.keyField().canonicalString())||e.ce.push(new eZ(et.keyField(),i))}return e.ce}function td(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return tr(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eZ(e.field,t)});let n=e.endAt?new eY(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new eY(e.startAt.position,e.startAt.inclusive):null;return tr(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}(e,tc(e))),e.le}function tf(e,t){let n=e.filters.concat([t]);return new tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tp(e,t,n){return new tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tm(e,t){return ta(td(e),td(t))&&e.limitType===t.limitType}function tg(e){return`${ts(td(e))}|lt:${e.limitType}`}function ty(e){var t;let n;return`Query(target=${n=(t=td(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e1?`${t.field.canonicalString()} ${t.op} ${eV(t.value)}`:t instanceof e2?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eV(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eV(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tv(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):en.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tc(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let i=eJ(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,tc(e),t))&&(!e.endAt||!!function(e,t,n){let i=eJ(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,tc(e),t))}function tw(e){return(t,n)=>{let i=!1;for(let r of tc(e)){let e=function(e,t,n){let i=e.field.isKeyField()?en.comparator(t.key,n.key):function(e,t,n){let i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?eM(i,r):M()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return -1*i;default:return M()}}(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,i]of n)if(this.equalsFn(t,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ed(this.inner,(t,n)=>{for(let[t,i]of n)e(t,i)})}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tI=new ep(en.comparator),tE=new ep(en.comparator);function tT(...e){let t=tE;for(let n of e)t=t.insert(n.key,n);return t}function tb(){return new t_(e=>e.toString(),(e,t)=>e.isEqual(t))}new ep(en.comparator);let tS=new ey(en.comparator);function tA(...e){let t=tS;for(let n of e)t=t.add(n);return t}let tC=new ey(W);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(t)?"-0":t}}function tN(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this._=void 0}}class tO extends tR{}class tD extends tR{constructor(e){super(),this.elements=e}}function tP(e,t){let n=tV(t);for(let t of e.elements)n.some(e=>eP(e,t))||n.push(t);return{arrayValue:{values:n}}}class tL extends tR{constructor(e){super(),this.elements=e}}function tM(e,t){let n=tV(t);for(let t of e.elements)n=n.filter(e=>!eP(e,t));return{arrayValue:{values:n}}}class tx extends tR{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tU(e){return eb(e.integerValue||e.doubleValue)}function tV(e){return eq(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tF{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tF}static exists(e){return new tF(void 0,e)}static updateTime(e){return new tF(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tj(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tq{}function tB(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tY(e.key,tF.none()):new tH(e.key,e.data,tF.none());{let n=e.data,i=eW.empty(),r=new ey(et.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new tG(e.key,i,new ew(r.toArray()),tF.none())}}function tz(e,t,n,i){return e instanceof tH?function(e,t,n,i){if(!tj(e.precondition,t))return n;let r=e.value.clone(),s=tQ(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof tG?function(e,t,n,i){if(!tj(e.precondition,t))return n;let r=tQ(e.fieldTransforms,i,t),s=t.data;return(s.setAll(tK(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):tj(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function t$(e,t){var n,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&Q(n,i,(e,t)=>{var n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof tD&&i instanceof tD||n instanceof tL&&i instanceof tL?Q(n.elements,i.elements,eP):n instanceof tx&&i instanceof tx?eP(n.Pe,i.Pe):n instanceof tO&&i instanceof tO)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tH extends tq{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tG extends tq{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function tK(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=e.data.field(n);t.set(n,i)}}),t}function tW(e,t,n){var i;let r=new Map;e.length===n.length||M();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof tD?tP(o,l):o instanceof tL?tM(o,l):i))}return r}function tQ(e,t,n){let i=new Map;for(let r of e){let e=r.transform,s=n.data.field(r.field);i.set(r.field,e instanceof tO?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eA(t)&&(t=eC(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof tD?tP(e,s):e instanceof tL?tM(e,s):function(e,t){var n,i;let r=(n=e,i=t,n instanceof tx?ej(i)||i&&"doubleValue"in i?i:{integerValue:0}:null),s=tU(r)+tU(e.Pe);return ej(r)&&ej(e.Pe)?tN(s):tk(e.serializer,s)}(e,s))}return i}class tY extends tq{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var i;i=n[t],r instanceof tH?function(e,t,n){let i=e.value.clone(),r=tW(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,e,i):r instanceof tG?function(e,t,n){if(!tj(e.precondition,t))return void t.convertToUnknownDocument(n.version);let i=tW(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(tK(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,i)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tz(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tz(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tb();return this.mutations.forEach(i=>{let r=e.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields),o=tB(s,a=t.has(i.key)?null:a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(J.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tA())}isEqual(e){return this.batchId===e.batchId&&Q(this.mutations,e.mutations,(e,t)=>t$(e,t))&&Q(this.baseMutations,e.baseMutations,(e,t)=>t$(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(e,t){this.count=e,this.unchangedNames=t}}function t0(e){if(void 0===e)return D("GRPC error has no .code"),x.UNKNOWN;switch(e){case f.OK:return x.OK;case f.CANCELLED:return x.CANCELLED;case f.UNKNOWN:return x.UNKNOWN;case f.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case f.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case f.INTERNAL:return x.INTERNAL;case f.UNAVAILABLE:return x.UNAVAILABLE;case f.UNAUTHENTICATED:return x.UNAUTHENTICATED;case f.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case f.NOT_FOUND:return x.NOT_FOUND;case f.ALREADY_EXISTS:return x.ALREADY_EXISTS;case f.PERMISSION_DENIED:return x.PERMISSION_DENIED;case f.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case f.ABORTED:return x.ABORTED;case f.OUT_OF_RANGE:return x.OUT_OF_RANGE;case f.UNIMPLEMENTED:return x.UNIMPLEMENTED;case f.DATA_LOSS:return x.DATA_LOSS;default:return M()}}(p=f||(f={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t1=new i([4294967295,4294967295],0);function t2(e){let t=(new TextEncoder).encode(e),n=new r;return n.update(t),new Uint8Array(n.digest())}function t9(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new i([n,r],0),new i([s,a],0)]}class t4{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new t6(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new t6(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new t6(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=i.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(i.fromNumber(n)));return 1===r.compare(t1)&&(r=new i([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let[t,n]=t9(t2(e));for(let e=0;e<this.hashCount;e++){let i=this.Ee(t,n,e);if(!this.de(i))return!1}return!0}static create(e,t,n){let i=new t4(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ie)return;let[t,n]=t9(t2(e));for(let e=0;e<this.hashCount;e++){let i=this.Ee(t,n,e);this.Ae(i)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class t6 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,t3.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new t5(J.min(),i,new ep(W),tI,tA())}}class t3{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new t3(n,t,tA(),tA(),tA())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class t8{constructor(e,t){this.targetId=e,this.me=t}}class ne{constructor(e,t,n=eI.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class nt{constructor(){this.fe=0,this.ge=nr(),this.pe=eI.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=tA(),t=tA(),n=tA();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M()}}),new t3(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=nr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||M()}Ne(){this.we=!0,this.ye=!0}}class nn{constructor(e){this.Le=e,this.Be=new Map,this.ke=tI,this.qe=ni(),this.Qe=new ep(W)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){let t=e.targetId,n=e.me.count,i=this.Je(t);if(i){let r=i.target;if(to(r)){if(0===n){let e=new en(r.path);this.Ue(t,e,eQ.newNoDocument(e,J.min()))}else 1===n||M()}else{let i=this.Ye(t);if(i!==n){let n=this.Ze(e),r=n?this.Xe(n,e,i):1;0!==r&&(this.je(t),this.Qe=this.Qe.insert(t,2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,n;let i=e.me.unchangedNames;if(!i||!i.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=i;try{t=eS(r).toUint8Array()}catch(e){if(e instanceof e_)return P("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new t4(t,s,a)}catch(e){return P(e instanceof t6?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ie?null:n}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){let n=this.Le.getRemoteKeysForTarget(t),i=0;return n.forEach(n=>{let r=this.Le.tt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((n,i)=>{let r=this.Je(i);if(r){if(n.current&&to(r.target)){let t=new en(r.target.path);null!==this.ke.get(t)||this.it(i,t)||this.Ue(i,t,eQ.newNoDocument(t,e))}n.be&&(t.set(i,n.ve()),n.Ce())}});let n=tA();this.qe.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let i=new t5(e,t,this.Qe,this.ke,n);return this.ke=tI,this.qe=ni(),this.Qe=new ep(W),i}$e(e,t){if(!this.ze(e))return;let n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new nt,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ey(W),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new nt),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ni(){return new ep(en.comparator)}function nr(){return new ep(en.comparator)}let ns={asc:"ASCENDING",desc:"DESCENDING"},na={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},no={and:"AND",or:"OR"};class nl{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nu(e,t){return e.useProto3Json||null==t?t:{value:t}}function nh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nd(e){return e||M(),J.fromTimestamp(function(e){let t=eT(e);return new Y(t.seconds,t.nanos)}(e))}function nf(e,t){return np(e,t).canonicalString()}function np(e,t){let n=new Z(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nm(e){let t=Z.fromString(e);return nE(t)||M(),t}function ng(e,t){let n=nm(t);if(n.get(1)!==e.databaseId.projectId)throw new U(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new U(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new en(nw(n))}function ny(e,t){return nf(e.databaseId,t)}function nv(e){return new Z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nw(e){return e.length>4&&"documents"===e.get(4)||M(),e.popFirst(5)}function n_(e){return{fieldPath:e.canonicalString()}}function nI(e){return et.fromServerFormat(e.fieldPath)}function nE(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,n,i,r=J.min(),s=J.min(),a=eI.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new nT(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nT(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nT(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(eb(e.integerValue));else if("doubleValue"in e){let n=eb(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),eh(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=eT(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(eS(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?eK(e)?this.dt(t,Number.MAX_SAFE_INTEGER):eH(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):M()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let n=e.fields||{};for(let e of(this.dt(t,55),Object.keys(n)))this.Vt(e,t),this.Tt(n[e],t)}wt(e,t){var n,i;let r=e.fields||{};this.dt(t,53);let s="value",a=(null===(i=null===(n=r[s].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.dt(t,15),t.At(eb(a)),this.Vt(s,t),this.Tt(r[s],t)}bt(e,t){let n=e.values||[];for(let e of(this.dt(t,50),n))this.Tt(e,t)}yt(e,t){this.dt(t,37),en.fromName(e).path.forEach(e=>{this.dt(t,60),this.Dt(e,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}nS.vt=new nS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.un=new nC}addToCollectionParentIndex(e,t){return this.un.add(t),eo.resolve()}getCollectionParents(e,t){return eo.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return eo.resolve()}deleteFieldIndex(e,t){return eo.resolve()}deleteAllFieldIndexes(e){return eo.resolve()}createTargetIndexes(e,t){return eo.resolve()}getDocumentsMatchingTarget(e,t){return eo.resolve(null)}getIndexType(e,t){return eo.resolve(0)}getFieldIndexes(e,t){return eo.resolve([])}getNextCollectionGroupToUpdate(e){return eo.resolve(null)}getMinOffset(e,t){return eo.resolve(er.min())}getMinOffsetFromCollectionGroup(e,t){return eo.resolve(er.min())}updateCollectionGroup(e,t,n){return eo.resolve()}updateIndexEntries(e,t){return eo.resolve()}}class nC{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ey(Z.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ey(Z.comparator)).toArray()}}new Uint8Array(0);class nk{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new nk(e,nk.DEFAULT_COLLECTION_PERCENTILE,nk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nk.DEFAULT_COLLECTION_PERCENTILE=10,nk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nk.DEFAULT=new nk(41943040,nk.DEFAULT_COLLECTION_PERCENTILE,nk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nk.DISABLED=new nk(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new nN(0)}static kn(){return new nN(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.changes=new t_(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eQ.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?eo.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tz(n.mutation,e,ew.empty(),Y.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tA()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tA()){let i=tb();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=tT();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tb();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tA()))}populateOverlays(e,t,n){let i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=tI,s=tb(),a=tb();return t.forEach((e,t)=>{let a=n.get(t.key);i.has(t.key)&&(void 0===a||a.mutation instanceof tG)?r=r.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tz(a.mutation,t,a.mutation.getFieldMask(),Y.now())):s.set(t.key,ew.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nO(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tb(),i=new ep((e,t)=>e-t),r=tA();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ew.empty();a=r.applyToLocalView(s,a),n.set(e,a);let o=(i.get(r.batchId)||tA()).add(e);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,u=tb();l.forEach(e=>{if(!r.has(e)){let i=tB(t.get(e),n.get(e));null!==i&&u.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return eo.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,i){return en.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):th(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):eo.resolve(tb()),a=-1,o=r;return s.next(t=>eo.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(t)?eo.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,tA())).next(e=>{let t;return{batchId:a,changes:(t=tE,e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new en(t)).next(e=>{let t=tT();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){let r=t.collectionGroup,s=tT();return this.indexManager.getCollectionParents(e,r).next(a=>eo.forEach(a,a=>{let o=new tl(a.child(r),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,i).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(e=>{r.forEach((t,n)=>{let i=n.getKey();null===e.get(i)&&(e=e.insert(i,eQ.newInvalidDocument(i)))});let n=tT();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&tz(s.mutation,i,ew.empty(),Y.now()),tv(t,i)&&(n=n.insert(e,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return eo.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:t.id,version:t.version,createTime:nd(t.createTime)}),eo.resolve()}getNamedQuery(e,t){return eo.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,i=function(e){let t=nm(e);return 4===t.length?Z.emptyPath():nw(t)}(e.parent),r=e.structuredQuery,s=r.from?r.from.length:0,a=null;if(s>0){1===s||M();let e=r.from[0];e.allDescendants?a=e.collectionId:i=i.child(e.collectionId)}let o=[];r.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nI(e.unaryFilter.field);return e1.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nI(e.unaryFilter.field);return e1.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=nI(e.unaryFilter.field);return e1.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=nI(e.unaryFilter.field);return e1.create(r,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):void 0!==t.fieldFilter?e1.create(nI(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e2.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op)):M()}(e);return n instanceof e2&&e4(t=n)&&e9(t)?n.getFilters():[n]}(r.where));let l=[];r.orderBy&&(l=r.orderBy.map(e=>new eZ(nI(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;r.limit&&(u=null==(n="object"==typeof(t=r.limit)?t.value:t)?null:n);let h=null;r.startAt&&(h=function(e){let t=!!e.before;return new eY(e.values||[],t)}(r.startAt));let c=null;return r.endAt&&(c=function(e){let t=!e.before;return new eY(e.values||[],t)}(r.endAt)),new tl(i,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tp(t,t.limit,"L"):t}(t.bundledQuery),readTime:nd(t.readTime)}),eo.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this.overlays=new ep(en.comparator),this.Ir=new Map}getOverlay(e,t){return eo.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tb();return eo.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.ht(e,t,i)}),eo.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.Ir.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.Ir.delete(n)),eo.resolve()}getOverlaysForCollection(e,t,n){let i=tb(),r=t.length+1,s=new en(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return eo.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new ep((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=tb(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tb(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=i)););return eo.resolve(a)}ht(e,t,n){let i=this.overlays.get(n.key);if(null!==i){let e=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tX(t,n));let r=this.Ir.get(t);void 0===r&&(r=tA(),this.Ir.set(t,r)),this.Ir.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(){this.sessionToken=eI.EMPTY_BYTE_STRING}getSessionToken(e){return eo.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,eo.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.Tr=new ey(nU.Er),this.dr=new ey(nU.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let n=new nU(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Vr(new nU(e,t))}mr(e,t){e.forEach(e=>this.removeReference(e,t))}gr(e){let t=new en(new Z([])),n=new nU(t,e),i=new nU(t,e+1),r=[];return this.dr.forEachInRange([n,i],e=>{this.Vr(e),r.push(e.key)}),r}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new en(new Z([])),n=new nU(t,e),i=new nU(t,e+1),r=tA();return this.dr.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new nU(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nU{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return en.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||en.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ey(nU.Er)}checkEmpty(e){return eo.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){let r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tJ(r,t,n,i);for(let t of(this.mutationQueue.push(s),i))this.br=this.br.add(new nU(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return eo.resolve(s)}lookupMutationBatch(e,t){return eo.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.vr(t+1),i=n<0?0:n;return eo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return eo.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return eo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nU(t,0),i=new nU(t,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([n,i],e=>{let t=this.Dr(e.wr);r.push(t)}),eo.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ey(W);return t.forEach(e=>{let t=new nU(e,0),i=new nU(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,i],e=>{n=n.add(e.wr)})}),eo.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,r=n;en.isDocumentKey(r)||(r=r.child(""));let s=new nU(new en(r),0),a=new ey(W);return this.br.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(a=a.add(e.wr)),!0)},s),eo.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let n=this.Dr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Fr(t.batchId,"removed")||M(),this.mutationQueue.shift();let n=this.br;return eo.forEach(t.mutations,i=>{let r=new nU(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){let n=new nU(t,0),i=this.br.firstAfterOrEqual(n);return eo.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,eo.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e){this.Mr=e,this.docs=new ep(en.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return eo.resolve(n?n.document.mutableCopy():eQ.newInvalidDocument(t))}getEntries(e,t){let n=tI;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eQ.newInvalidDocument(e))}),eo.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=tI,s=t.path,a=new en(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=en.comparator(e.documentKey,t.documentKey))?n:W(e.largestBatchId,t.largestBatchId)}(new er(a.readTime,a.key,-1),n)||(i.has(a.key)||tv(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return eo.resolve(r)}getAllFromCollectionGroup(e,t,n,i){M()}Or(e,t){return eo.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nj(this)}getSize(e){return eo.resolve(this.size)}}class nj extends nR{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),eo.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e){this.persistence=e,this.Nr=new t_(e=>ts(e),ta),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nx,this.targetCount=0,this.kr=nN.Bn()}forEachTarget(e,t){return this.Nr.forEach((e,n)=>t(n)),eo.resolve()}getLastRemoteSnapshotVersion(e){return eo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return eo.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),eo.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),eo.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new nN(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,eo.resolve()}updateTargetData(e,t){return this.Kn(t),eo.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,eo.resolve()}removeTargets(e,t,n){let i=0,r=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),eo.waitFor(r).next(()=>i)}getTargetCount(e){return eo.resolve(this.targetCount)}getTargetData(e,t){let n=this.Nr.get(t)||null;return eo.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),eo.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),eo.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),eo.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Br.yr(t);return eo.resolve(n)}containsKey(e,t){return eo.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t){this.qr={},this.overlays={},this.Qr=new eu(0),this.Kr=!1,this.Kr=!0,this.$r=new nM,this.referenceDelegate=e(this),this.Ur=new nq(this),this.indexManager=new nA,this.remoteDocumentCache=new nF(e=>this.referenceDelegate.Wr(e)),this.serializer=new nb(t),this.Gr=new nP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new nV(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);let i=new nz(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(e=>this.referenceDelegate.jr(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Hr(e,t){return eo.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class nz extends es{constructor(e){super(),this.currentSequenceNumber=e}}class n${constructor(e){this.persistence=e,this.Jr=new nx,this.Yr=null}static Zr(e){return new n$(e)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),eo.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),eo.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),eo.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(e=>this.Xr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Xr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return eo.forEach(this.Xr,n=>{let i=en.fromPath(n);return this.ei(e,i).next(e=>{e||t.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return eo.or([()=>eo.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=tA(),i=tA();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new nH(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(0,_.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,_.z$)())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){let r={result:null};return this.Yi(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.Zi(e,t,i,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;let n=new nG;return this.Xi(e,t,n).next(i=>{if(r.result=i,this.zi)return this.es(e,t,n,i.size)})}).next(()=>r.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(R()<=w.in.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",ty(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),eo.resolve()):(R()<=w.in.DEBUG&&O("QueryEngine","Query:",ty(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(R()<=w.in.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",ty(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,td(t))):eo.resolve())}Yi(e,t){if(tu(t))return eo.resolve(null);let n=td(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(n=td(t=tp(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{let r=tA(...i);return this.Ji.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ts(t,i);return this.ns(t,s,r,n.readTime)?this.Yi(e,tp(t,null,"F")):this.rs(e,s,t,n)}))})))}Zi(e,t,n,i){return tu(t)||i.isEqual(J.min())?eo.resolve(null):this.Ji.getDocuments(e,n).next(r=>{let s=this.ts(t,r);return this.ns(t,s,n,i)?eo.resolve(null):(R()<=w.in.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ty(t)),this.rs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1;return new er(J.fromTimestamp(1e9===i?new Y(n+1,0):new Y(n,i)),en.empty(),-1)}(i,0)).next(e=>e))})}ts(e,t){let n=new ey(tw(e));return t.forEach((t,i)=>{tv(e,i)&&(n=n.add(i))}),n}ns(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(e,t,n){return R()<=w.in.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",ty(t)),this.Ji.getDocumentsMatchingQuery(e,t,er.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ep(W),this._s=new t_(e=>ts(e),ta),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}async function nQ(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],s=[],a=tA();for(let e of i)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({hs:e,removedBatchIds:r,addedBatchIds:s}))})})}function nY(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}async function nJ(e,t,n){let i=e.os.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,i))}catch(e){if(!el(e))throw e;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.os=e.os.remove(t),e._s.delete(i.target)}function nX(e,t,n){let i=J.min(),r=tA();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let i=e._s.get(n);return void 0!==i?eo.resolve(e.os.get(i)):e.Ur.getTargetData(t,n)})(e,s,td(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Ur.getMatchingKeysForTargetId(s,t.targetId).next(e=>{r=e})}).next(()=>e.ss.getDocumentsMatchingQuery(s,t,n?i:J.min(),n?r:tA())).next(n=>{var i;let s;return i=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.us.get(i)||J.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.us.set(i,s),{documents:n,Ts:r}}))}class nZ{constructor(){this.activeTargetIds=tC}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class n0{constructor(){this.so=new nZ,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new nZ,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){for(let e of(O("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ho))e(0)}lo(){for(let e of(O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ho))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n9=null;function n4(){return null===n9?n9=268435456+Math.round(2147483648*Math.random()):n9++,"0x"+n9.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n3="WebChannelConnection";class n7 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${i}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Fo(){return!1}Mo(e,t,n,i,r){let s=n4(),a=this.xo(e,t.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(o,i,r),this.No(e,a,o,n).then(t=>(O("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw P("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Lo(e,t,n,i,r,s){return this.Mo(e,t,n,i,r)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+k}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}xo(e,t){let n=n6[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){let r=n4();return new Promise((a,u)=>{let h=new s;h.setWithCredentials(!0),h.listenOnce(o.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case l.NO_ERROR:let t=h.getResponseJson();O(n3,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),a(t);break;case l.TIMEOUT:O(n3,`RPC '${e}' ${r} timed out`),u(new U(x.DEADLINE_EXCEEDED,"Request time out"));break;case l.HTTP_ERROR:let n=h.getStatus();if(O(n3,`RPC '${e}' ${r} failed with status:`,n,"response text:",h.getResponseText()),n>0){let e=h.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(t)>=0?t:x.UNKNOWN}(t.status);u(new U(e,t.message))}else u(new U(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(x.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{O(n3,`RPC '${e}' ${r} completed.`)}});let c=JSON.stringify(i);O(n3,`RPC '${e}' ${r} sending request:`,i),h.send(t,"POST",c,n,15)})}Bo(e,t,n){let i=n4(),r=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=d(),o=c(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;void 0!==p&&(l.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let m=r.join("");O(n3,`Creating RPC '${e}' stream ${i}: ${m}`,l);let g=s.createWebChannel(m,l),y=!1,v=!1,w=new n5({Io:t=>{v?O(n3,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(y||(O(n3,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),O(n3,`RPC '${e}' stream ${i} sending:`,t),g.send(t))},To:()=>g.close()}),_=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return _(g,a.EventType.OPEN,()=>{v||(O(n3,`RPC '${e}' stream ${i} transport opened.`),w.yo())}),_(g,a.EventType.CLOSE,()=>{v||(v=!0,O(n3,`RPC '${e}' stream ${i} transport closed`),w.So())}),_(g,a.EventType.ERROR,t=>{v||(v=!0,P(n3,`RPC '${e}' stream ${i} transport errored:`,t),w.So(new U(x.UNAVAILABLE,"The operation could not be completed")))}),_(g,a.EventType.MESSAGE,t=>{var n;if(!v){let r=t.data[0];r||M();let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){O(n3,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=f[e];if(void 0!==t)return t0(t)}(t),r=s.message;void 0===n&&(n=x.INTERNAL,r="Unknown error status: "+t+" with message "+s.message),v=!0,w.So(new U(n,r)),g.close()}else O(n3,`RPC '${e}' stream ${i} received:`,r),w.bo(r)}}),_(o,h.STAT_EVENT,t=>{t.stat===u.PROXY?O(n3,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.NOPROXY&&O(n3,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function n8(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return new nl(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,n=1e3,i=1.5,r=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n,i,r,s,a,o){this.ui=e,this.Ho=n,this.Jo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new it(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(D(t.toString()),D("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Yo===t&&this.P_(e,n)},t=>{e(()=>{let e=new U(x.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)})})}P_(e,t){let n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(e=>{n(()=>this.I_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.e_?this.E_(e):this.onNext(e))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ir extends ii{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=function(e,t){let n;if("targetChange"in t){var i,r;t.targetChange;let s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:M(),a=t.targetChange.targetIds||[],o=(r=t.targetChange.resumeToken,e.useProto3Json?(void 0===r||"string"==typeof r||M(),eI.fromBase64String(r||"")):(void 0===r||r instanceof S||r instanceof Uint8Array||M(),eI.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause;n=new ne(s,a,o,l&&new U(void 0===l.code?x.UNKNOWN:t0(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let i=t.documentChange;i.document,i.document.name,i.document.updateTime;let r=ng(e,i.document.name),s=nd(i.document.updateTime),a=i.document.createTime?nd(i.document.createTime):J.min(),o=new eW({mapValue:{fields:i.document.fields}}),l=eQ.newFoundDocument(r,s,a,o);n=new t7(i.targetIds||[],i.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let i=t.documentDelete;i.document;let r=ng(e,i.document),s=i.readTime?nd(i.readTime):J.min(),a=eQ.newNoDocument(r,s);n=new t7([],i.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let i=t.documentRemove;i.document;let r=ng(e,i.document);n=new t7([],i.removedTargetIds||[],r,null)}else{if(!("filter"in t))return M();{t.filter;let e=t.filter;e.targetId;let{count:i=0,unchangedNames:r}=e,s=new tZ(i,r);n=new t8(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return J.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?J.min():t.readTime?nd(t.readTime):J.min()}(e);return this.listener.d_(t,n)}A_(e){let t={};t.database=nv(this.serializer),t.addTarget=function(e,t){let n;let i=t.target;if((n=to(i)?{documents:{documents:[ny(e,i.path)]}}:{query:function(e,t){var n,i;let r;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(r=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=ny(e,r);let o=function(e){if(0!==e.length)return function e(t){return t instanceof e1?function(e){if("=="===e.op){if(ez(e.value))return{unaryFilter:{field:n_(e.field),op:"IS_NAN"}};if(eB(e.value))return{unaryFilter:{field:n_(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ez(e.value))return{unaryFilter:{field:n_(e.field),op:"IS_NOT_NAN"}};if(eB(e.value))return{unaryFilter:{field:n_(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:n_(e.field),op:na[e.op],value:e.value}}}(t):t instanceof e2?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:no[t.op],filters:n}}}(t):M()}(e2.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:n_(e.field),direction:ns[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=nu(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),{_t:s,parent:r}}(e,i)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nc(e,t.resumeToken);let i=nu(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(J.min())>0){n.readTime=nh(e,t.snapshotVersion.toTimestamp());let i=nu(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){let t={};t.database=nv(this.serializer),t.removeTarget=e,this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Mo(e,np(t,n),i,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new U(x.UNKNOWN,e.toString())})}Lo(e,t,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,np(t,n),i,s,a,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new U(x.UNKNOWN,e.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ia{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(D(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(e=>{n.enqueueAndForget(async()=>{iy(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.L_.add(4),await iu(e),e.q_.set("Unknown"),e.L_.delete(4),await il(e)}(this))})}),this.q_=new ia(n,i)}}async function il(e){if(iy(e))for(let t of e.B_)await t(!0)}async function iu(e){for(let t of e.B_)await t(!1)}function ih(e,t){e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ig(e)?im(e):iS(e).r_()&&id(e,t))}function ic(e,t){let n=iS(e);e.N_.delete(t),n.r_()&&ip(e,t),0===e.N_.size&&(n.r_()?n.o_():iy(e)&&e.q_.set("Unknown"))}function id(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}iS(e).A_(t)}function ip(e,t){e.Q_.xe(t),iS(e).R_(t)}function im(e){e.Q_=new nn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),iS(e).start(),e.q_.v_()}function ig(e){return iy(e)&&!iS(e).n_()&&e.N_.size>0}function iy(e){return 0===e.L_.size}async function iv(e){e.q_.set("Online")}async function iw(e){e.N_.forEach((t,n)=>{id(e,t)})}async function i_(e,t){e.Q_=void 0,ig(e)?(e.q_.M_(t),im(e)):e.q_.set("Unknown")}async function iI(e,t,n){if(e.q_.set("Online"),t instanceof ne&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let i of t.targetIds)e.N_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.N_.delete(i),e.Q_.removeTarget(i))}(e,t)}catch(n){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await iE(e,n)}else if(t instanceof t7?e.Q_.Ke(t):t instanceof t8?e.Q_.He(t):e.Q_.We(t),!n.isEqual(J.min()))try{let t=await nY(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.Q_.rt(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){let r=e.N_.get(i);r&&e.N_.set(i,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let i=e.N_.get(t);if(!i)return;e.N_.set(t,i.withResumeToken(eI.EMPTY_BYTE_STRING,i.snapshotVersion)),ip(e,t);let r=new nT(i.target,t,n,i.sequenceNumber);id(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){O("RemoteStore","Failed to raise snapshot:",t),await iE(e,t)}}async function iE(e,t,n){if(!el(t))throw t;e.L_.add(1),await iu(e),e.q_.set("Offline"),n||(n=()=>nY(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await il(e)})}async function iT(e,t){e.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");let n=iy(e);e.L_.add(3),await iu(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await il(e)}async function ib(e,t){t?(e.L_.delete(2),await il(e)):t||(e.L_.add(2),await iu(e),e.q_.set("Unknown"))}function iS(e){var t,n,i;return e.K_||(e.K_=(t=e.datastore,n=e.asyncQueue,i={Eo:iv.bind(null,e),Ro:iw.bind(null,e),mo:i_.bind(null,e),d_:iI.bind(null,e)},t.w_(),new ir(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,i)),e.B_.push(async t=>{t?(e.K_.s_(),ig(e)?im(e):e.q_.set("Unknown")):(await e.K_.stop(),e.Q_=void 0)})),e.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new V,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){let s=new iA(e,t,Date.now()+n,i,r);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new U(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iC(e,t){if(D("AsyncQueue",`${t}: ${e}`),el(e))return new U(x.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.comparator=e?(t,n)=>e(t,n)||en.comparator(t.key,n.key):(e,t)=>en.comparator(e.key,t.key),this.keyedMap=tT(),this.sortedSet=new ep(this.comparator)}static emptySet(e){return new ik(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ik)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new ik;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.W_=new ep(en.comparator)}track(e){let t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):M():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class iR{constructor(e,t,n,i,r,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,r){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new iR(e,t,ik.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tm(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class iD{constructor(){this.queries=iP(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=iP(),n.forEach((e,n)=>{for(let e of n.j_)e.onError(t)})}(this,new U(x.ABORTED,"Firestore shutting down"))}}function iP(){return new t_(e=>tg(e),tm)}async function iL(e,t){let n=3,i=t.query,r=e.queries.get(i);r?!r.H_()&&t.J_()&&(n=2):(r=new iO,n=t.J_()?0:1);try{switch(n){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(n){let e=iC(n,`Initialization of query '${ty(t.query)}' failed`);return void t.onError(e)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&iV(e)}async function iM(e,t){let n=t.query,i=3,r=e.queries.get(n);if(r){let e=r.j_.indexOf(t);e>=0&&(r.j_.splice(e,1),0===r.j_.length?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function ix(e,t){let n=!1;for(let i of t){let t=i.query,r=e.queries.get(t);if(r){for(let e of r.j_)e.X_(i)&&(n=!0);r.z_=i}}n&&iV(e)}function iU(e,t,n){let i=e.queries.get(t);if(i)for(let e of i.j_)e.onError(n);e.queries.delete(t)}function iV(e){e.Y_.forEach(e=>{e.next()})}(g=m||(m={})).ea="default",g.Cache="cache";class iF{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new iR(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){return!(e.fromCache&&this.J_())||(!this.options._a||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=iR.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==m.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij{constructor(e){this.key=e}}class iq{constructor(e){this.key=e}}class iB{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=tA(),this.mutatedKeys=tA(),this.Aa=tw(e),this.Ra=new ik(this.Aa)}get Va(){return this.Ta}ma(e,t){let n=t?t.fa:new iN,i=t?t.Ra:this.Ra,r=t?t.mutatedKeys:this.mutatedKeys,s=i,a=!1,o="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{let u=i.get(e),h=tv(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.ga(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Aa(h,o)>0||l&&0>this.Aa(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:a,mutatedKeys:r}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){let r=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let s=e.fa.G_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return n(e)-n(t)})(e.type,t.type)||this.Aa(e.doc,t.doc)),this.pa(n),i=null!=i&&i;let a=t&&!i?this.ya():[],o=0===this.da.size&&this.current&&!i?1:0,l=o!==this.Ea;return(this.Ea=o,0!==s.length||l)?{snapshot:new iR(this.query,e.Ra,r,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new iN,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=tA(),this.Ra.forEach(e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))});let t=[];return e.forEach(e=>{this.da.has(e)||t.push(new iq(e))}),this.da.forEach(n=>{e.has(n)||t.push(new ij(n))}),t}ba(e){this.Ta=e.Ts,this.da=tA();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return iR.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class iz{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class i${constructor(e){this.key=e,this.va=!1}}class iH{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new t_(e=>tg(e),tm),this.Ma=new Map,this.xa=new Set,this.Oa=new ep(en.comparator),this.Na=new Map,this.La=new nx,this.Ba={},this.ka=new Map,this.qa=nN.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function iG(e,t,n=!0){let i;let r=i7(e),s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await iW(r,t,n,!0),i}async function iK(e,t){let n=i7(e);await iW(n,t,!0,!1)}async function iW(e,t,n,i){var r,s;let a;let o=await (r=e.localStore,s=td(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.Ur.getTargetData(e,s).next(n=>n?(t=n,eo.resolve(t)):r.Ur.allocateTargetId(e).next(n=>(t=new nT(s,n,"TargetPurposeListen",e.currentSequenceNumber),r.Ur.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.os.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.os=r.os.insert(e.targetId,e),r._s.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return i&&(a=await iQ(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&ih(e.remoteStore,o),a}async function iQ(e,t,n,i,r){e.Ka=(t,n,i)=>(async function(e,t,n,i){let r=t.view.ma(n);r.ns&&(r=await nX(e.localStore,t.query,!1).then(({documents:e})=>t.view.ma(e,r)));let s=i&&i.targetChanges.get(t.targetId),a=i&&null!=i.targetMismatches.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s,a);return i9(e,t.targetId,o.wa),o.snapshot})(e,t,n,i);let s=await nX(e.localStore,t,!0),a=new iB(t,s.Ts),o=a.ma(s.documents),l=t3.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),u=a.applyChanges(o,e.isPrimaryClient,l);i9(e,n,u.wa);let h=new iz(t,n,a);return e.Fa.set(t,h),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function iY(e,t,n){let i=e.Fa.get(t),r=e.Ma.get(i.targetId);if(r.length>1)return e.Ma.set(i.targetId,r.filter(e=>!tm(e,t))),void e.Fa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(i.targetId),e.sharedClientState.isActiveQueryTarget(i.targetId)||await nJ(e.localStore,i.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(i.targetId),n&&ic(e.remoteStore,i.targetId),i1(e,i.targetId)}).catch(ea)):(i1(e,i.targetId),await nJ(e.localStore,i.targetId,!0))}async function iJ(e,t){let n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&1===i.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ic(e.remoteStore,n.targetId))}async function iX(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{var s;let a,o;let l=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;u.push(e.Ur.removeMatchingKeys(r,s.removedDocuments,a).next(()=>e.Ur.addMatchingKeys(r,s.addedDocuments,a)));let h=l.withSequenceNumber(r.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(eI.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),i=i.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Ur.updateTargetData(r,h))});let h=tI,c=tA();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(r,n))}),u.push((s=t.documentUpdates,a=tA(),o=tA(),s.forEach(e=>a=a.add(e)),l.getEntries(r,a).next(e=>{let t=tI;return s.forEach((n,i)=>{let r=e.get(n);i.isFoundDocument()!==r.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(J.min())?(l.removeEntry(n,i.readTime),t=t.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(i),t=t.insert(n,i)):O("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)}),{Ps:t,Is:o}})).next(e=>{h=e.Ps,c=e.Is})),!n.isEqual(J.min())){let t=e.Ur.getLastRemoteSnapshotVersion(r).next(t=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,n));u.push(t)}return eo.waitFor(u).next(()=>l.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,h,c)).next(()=>h)}).then(t=>(e.os=i,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let i=e.Na.get(n);i&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||M(),t.addedDocuments.size>0?i.va=!0:t.modifiedDocuments.size>0?i.va||M():t.removedDocuments.size>0&&(i.va||M(),i.va=!1))}),await i6(e,n,t)}catch(e){await ea(e)}}function iZ(e,t,n){var i;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let r=[];e.Fa.forEach((e,n)=>{let i=n.view.Z_(t);i.snapshot&&r.push(i.snapshot)}),(i=e.eventManager).onlineState=t,n=!1,i.queries.forEach((e,i)=>{for(let e of i.j_)e.Z_(t)&&(n=!0)}),n&&iV(i),r.length&&e.Ca.d_(r),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function i0(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let i=e.Na.get(t),r=i&&i.key;if(r){let n=new ep(en.comparator);n=n.insert(r,eQ.newNoDocument(r,J.min()));let i=tA().add(r),s=new t5(J.min(),new Map,new ep(W),n,i);await iX(e,s),e.Oa=e.Oa.remove(r),e.Na.delete(t),i4(e)}else await nJ(e.localStore,t,!1).then(()=>i1(e,t,n)).catch(ea)}function i1(e,t,n=null){for(let i of(e.sharedClientState.removeLocalQueryTarget(t),e.Ma.get(t)))e.Fa.delete(i),n&&e.Ca.$a(i,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(t=>{e.La.containsKey(t)||i2(e,t)})}function i2(e,t){e.xa.delete(t.path.canonicalString());let n=e.Oa.get(t);null!==n&&(ic(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),i4(e))}function i9(e,t,n){for(let i of n)i instanceof ij?(e.La.addReference(i.key,t),function(e,t){let n=t.key,i=n.path.canonicalString();e.Oa.get(n)||e.xa.has(i)||(O("SyncEngine","New document in limbo: "+n),e.xa.add(i),i4(e))}(e,i)):i instanceof iq?(O("SyncEngine","Document no longer in limbo: "+i.key),e.La.removeReference(i.key,t),e.La.containsKey(i.key)||i2(e,i.key)):M()}function i4(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){let t=e.xa.values().next().value;e.xa.delete(t);let n=new en(Z.fromString(t)),i=e.qa.next();e.Na.set(i,new i$(n)),e.Oa=e.Oa.insert(n,i),ih(e.remoteStore,new nT(td(new tl(n.path)),i,"TargetPurposeLimboResolution",eu.oe))}}async function i6(e,t,n){let i=[],r=[],s=[];e.Fa.isEmpty()||(e.Fa.forEach((a,o)=>{s.push(e.Ka(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let i=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,i?"current":"not-current")}if(t){i.push(t);let e=nH.Wi(o.targetId,t);r.push(e)}}))}),await Promise.all(s),e.Ca.d_(i),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>eo.forEach(t,t=>eo.forEach(t.$i,i=>e.persistence.referenceDelegate.addReference(n,t.targetId,i)).next(()=>eo.forEach(t.Ui,i=>e.persistence.referenceDelegate.removeReference(n,t.targetId,i)))))}catch(e){if(!el(e))throw e;O("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.os.get(t),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);e.os=e.os.insert(t,r)}}}(e.localStore,r))}async function i5(e,t){var n;if(!e.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());let i=await nQ(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.ka.forEach(e=>{e.forEach(e=>{e.reject(new U(x.CANCELLED,n))})}),e.ka.clear(),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await i6(e,i.hs)}}function i3(e,t){let n=e.Na.get(t);if(n&&n.va)return tA().add(n.key);{let n=tA(),i=e.Ma.get(t);if(!i)return n;for(let t of i){let i=e.Fa.get(t);n=n.unionWith(i.view.Va)}return n}}function i7(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iX.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i0.bind(null,e),e.Ca.d_=ix.bind(null,e.eventManager),e.Ca.$a=iU.bind(null,e.eventManager),e}class i8{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ie(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){var t;return t=this.persistence,new nW(t,new nK,e.initialUser,this.serializer)}Ga(e){return new nB(n$.Zr,this.serializer)}Wa(e){return new n0}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}i8.provider={build:()=>new i8};class re{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>iZ(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=i5.bind(null,this.syncEngine),await ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iD}createDatastore(e){let t=ie(e.databaseInfo.databaseId),n=new n7(e.databaseInfo);return new is(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new io(t,this.datastore,e.asyncQueue,e=>iZ(this.syncEngine,e,0),n2.D()?new n2:new n1)}createSyncEngine(e,t){return function(e,t,n,i,r,s,a){let o=new iH(e,t,n,i,r,s);return a&&(o.Qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){O("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await iu(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}re.provider={build:()=>new re};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):D("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=C.UNAUTHENTICATED,this.clientId=K.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async e=>{O("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(O("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new V;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=iC(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ri(e,t){e.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await nQ(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function rr(e,t){e.asyncQueue.verifyOperationInProgress();let n=await rs(e);O("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>iT(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>iT(t.remoteStore,n)),e._onlineComponents=t}async function rs(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await ri(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;P("Error using user provided cache. Falling back to memory cache: "+t),await ri(e,new i8)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await ri(e,new i8)}return e._offlineComponents}async function ra(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await rr(e,e._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await rr(e,new re))),e._onlineComponents}async function ro(e){let t=await ra(e),n=t.eventManager;return n.onListen=iG.bind(null,t.syncEngine),n.onUnlisten=iY.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=iK.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iJ.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=new Map;function rh(e){if(en.isDocumentKey(e))throw new U(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function rc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":M()}function rd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new U(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=rc(e);throw new U(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new U(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new U(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new U(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rl(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rp{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new U(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new j;switch(e.type){case"firstParty":return new $(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new U(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ru.get(e);t&&(O("ComponentProvider","Removing Datastore"),ru.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new rm(this.firestore,e,this._query)}}class rg{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ry(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rg(this.firestore,e,this._key)}}class ry extends rm{constructor(e,t,n){super(e,t,new tl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new rg(this.firestore,null,new en(e))}withConverter(e){return new ry(this.firestore,e,this._path)}}function rv(e,t,...n){if(e=(0,_.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){if(!n)throw new U(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof rp){let i=Z.fromString(t,...n);return rh(i),new ry(e,null,i)}{if(!(e instanceof rg||e instanceof ry))throw new U(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(Z.fromString(t,...n));return rh(i),new ry(e.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new it(this,"async_queue_retry"),this.Vu=()=>{let e=n8();e&&O("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;let t=n8();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=n8();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new V;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!el(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(e=>{let t;throw this.Eu=e,this.du=!1,D("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.du=!1,e))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=iA.createAndSchedule(this,e,t,n,e=>this.yu(e));return this.Tu.push(i),i}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{for(let t of(this.Tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Tu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function r_(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class rI extends rp{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new rw,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new rw(e),this._firestoreClient=void 0,await e}}}function rE(e,t){let n="object"==typeof e?e:(0,y.Mq)(),i=(0,y.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!i._initialized){let e=(0,_.P0)("firestore");e&&function(e,t,n,i={}){var r;let s=(e=rd(e,rp))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&P("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=C.MOCK_USER;else{t=(0,_.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new U(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new C(s)}e._authCredentials=new q(new F(t,n))}}(i,...e)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rT(eI.fromBase64String(e))}catch(e){throw new U(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new rT(eI.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new U(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rk=/^__.*__$/;function rN(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class rR{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rR(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return rL(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(rN(this.Cu)&&rk.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rO{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ie(e)}Qu(e,t,n,i=!1){return new rR({Cu:e,methodName:t,qu:n,path:et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rD(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof rA||e instanceof rT||e instanceof rg||e instanceof rS||e instanceof rC)}let rP=RegExp("[~\\*/\\[\\]]");function rL(e,t,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new U(x.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new rg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new rx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(rU("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rx extends rM{data(){return super.data()}}function rU(e,t){return"string"==typeof t?function(e,t,n){if(t.search(rP)>=0)throw rL(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,void 0);try{return new rb(...t.split("."))._internalPath}catch(n){throw rL(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,void 0)}}(e,t):t instanceof rb?t._internalPath:t._delegate._internalPath}class rV{}class rF extends rV{}function rj(e,t,...n){let i=[];for(let r of(t instanceof rV&&i.push(t),function(e){let t=e.filter(e=>e instanceof rz).length,n=e.filter(e=>e instanceof rq).length;if(t>1||t>0&&n>0)throw new U(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i=i.concat(n)),i))e=r._apply(e);return e}class rq extends rF{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new rq(e,t,n)}_apply(e){let t=this._parse(e);return rG(e._query,t),new rm(e.firestore,e.converter,tf(e._query,t))}_parse(e){let t=function(e){let t=e._freezeSettings(),n=ie(e._databaseId);return new rO(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore);return function(e,t,n,i,r,s,a){let o;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new U(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){rH(a,s);let t=[];for(let n of a)t.push(r$(i,e,n));o={arrayValue:{values:t}}}else o=r$(i,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||rH(a,s),o=function(e,t,n,i=!1){return function e(t,n){if(rD(t=(0,_.m9)(t)))return function(e,t,n){if(!rD(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=rc(n);throw"an object"===i?t.Bu(e+" a custom object"):t.Bu(e+" "+i)}}("Unsupported field value:",n,t),function(t,n){let i={};return ef(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):ed(t,(t,r)=>{let s=e(r,n.Mu(t));null!=s&&(i[t]=s)}),{mapValue:{fields:i}}}(t,n);if(t instanceof rS)return function(e,t){if(!rN(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.xu&&4!==n.Cu)throw n.Bu("Nested arrays are not supported");return function(t,n){let i=[],r=0;for(let s of t){let t=e(s,n.Lu(r));null==t&&(t={nullValue:"NULL_VALUE"}),i.push(t),r++}return{arrayValue:{values:i}}}(t,n)}return function(e,t){var n,i,r;if(null===(e=(0,_.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(r=i=e)&&Number.isInteger(r)&&!eh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?tN(i):tk(n,i);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=Y.fromDate(e);return{timestampValue:nh(t.serializer,n)}}if(e instanceof Y){let n=new Y(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nh(t.serializer,n)}}if(e instanceof rA)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof rT)return{bytesValue:nc(t.serializer,e._byteString)};if(e instanceof rg){let n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Bu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nf(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof rC)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Bu("VectorValues must only contain numeric values.");return tk(t.serializer,e)})}}}}};throw t.Bu(`Unsupported field value: ${rc(e)}`)}(t,n)}(n,e.Qu(i?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return e1.create(r,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rB(e,t,n){let i=rU("where",e);return rq._create(i,t,n)}class rz extends rV{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rz(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:e2.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())rG(n,e),n=tf(n,e)}(e._query,t),new rm(e.firestore,e.converter,tf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function r$(e,t,n){if("string"==typeof(n=(0,_.m9)(n))){if(""===n)throw new U(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!th(t)&&-1!==n.indexOf("/"))throw new U(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let i=t.path.child(Z.fromString(n));if(!en.isDocumentKey(i))throw new U(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return eF(e,new en(i))}if(n instanceof rg)return eF(e,n._key);throw new U(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rc(n)}.`)}function rH(e,t){if(!Array.isArray(e)||0===e.length)throw new U(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function rG(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new U(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new U(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class rK{convertValue(e,t="none"){switch(eD(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eb(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eS(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ed(e,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,i;return new rC(null===(i=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.map(e=>eb(e.doubleValue)))}convertGeoPoint(e){return new rA(eb(e.latitude),eb(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eC(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ek(e));default:return null}}convertTimestamp(e){let t=eT(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=Z.fromString(e);nE(n)||M();let i=new eR(n.get(1),n.get(3)),r=new en(n.popFirst(5));return i.isEqual(t)||D(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rW{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rQ extends rM{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new rY(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(rU("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rY extends rQ{data(e={}){return super.data(e)}}class rJ{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new rW(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new rY(this._firestore,this._userDataWriter,n.key,n,new rW(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let i=new rY(e._firestore,e._userDataWriter,n.doc.key,n.doc,new rW(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let i=new rY(e._firestore,e._userDataWriter,t.doc.key,t.doc,new rW(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class rX extends rK{constructor(e){super(),this.firestore=e}convertBytes(e){return new rT(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new rg(this.firestore,null,t)}}function rZ(e,...t){var n,i,r;let s,a,o;e=(0,_.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||r_(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(r_(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[u+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}if(e instanceof rg)a=rd(e.firestore,rI),o=new tl(e._key.path),s={next:n=>{t[u]&&t[u](function(e,t,n){let i=n.docs.get(t._key),r=new rX(e);return new rQ(e,r,t._key,i,new rW(n.hasPendingWrites,n.fromCache),t.converter)}(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=rd(e,rm);a=rd(n.firestore,rI),o=n._query;let i=new rX(a);s={next:e=>{t[u]&&t[u](new rJ(a,i,n,e))},error:t[u+1],complete:t[u+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new U(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,n,i){let r=new rt(i),s=new iF(t,r,n);return e.asyncQueue.enqueueAndForget(async()=>iL(await ro(e),s)),()=>{r.Za(),e.asyncQueue.enqueueAndForget(async()=>iM(await ro(e),s))}}(function(e){if(e._terminated)throw new U(x.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,i,r;let s=e._freezeSettings(),a=(r=e._databaseId,new eN(r,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,rl(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new rn(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}(a),o,h,s)}new WeakMap,function(e=!0){k=y.Jn,(0,y.Xd)(new v.wA("firestore",(t,{instanceIdentifier:n,options:i})=>{let r=t.getProvider("app").getImmediate(),s=new rI(new B(t.getProvider("auth-internal")),new G(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new U(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eR(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),(0,y.KN)(A,"4.7.3",void 0),(0,y.KN)(A,"4.7.3","esm2017")}()},4208:function(e,t,n){n.d(t,{$C:function(){return w},V1:function(){return _}});var i,r=n(3159),s=n(4444),a=n(2044);function o(e,t){let n={};for(let i in e)e.hasOwnProperty(i)&&(n[i]=t(e[i]));return n}function l(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{let t=Number(e.value);if(isNaN(t))throw Error("Data cannot be decoded from JSON: "+e);return t}default:throw Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>l(e)):"function"==typeof e||"object"==typeof e?o(e,e=>l(e)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="functions",h={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class c extends s.ZR{constructor(e,t,n){super(`${u}/${e}`,t||""),this.details=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{let e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.appCheck){let t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="us-central1";class p{constructor(e,t,n,i,r=f,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new d(t,n,i),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{let e=new URL(r);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=f}catch(e){this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){let t=this.app.options.projectId;if(null!==this.emulatorOrigin){let n=this.emulatorOrigin;return`${n}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}async function m(e,t,n,i){let r;n["Content-Type"]="application/json";try{r=await i(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let s=null;try{s=await r.json()}catch(e){}return{status:r.status,json:s}}async function g(e,t,n,i){var r;let s;let a={data:n=function e(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t)||!0===t||!1===t||"[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(t=>e(t));if("function"==typeof t||"object"==typeof t)return o(t,t=>e(t));throw Error("Data cannot be encoded in JSON: "+t)}(n)},u={},d=await e.contextProvider.getContext(i.limitedUseAppCheckTokens);d.authToken&&(u.Authorization="Bearer "+d.authToken),d.messagingToken&&(u["Firebase-Instance-ID-Token"]=d.messagingToken),null!==d.appCheckToken&&(u["X-Firebase-AppCheck"]=d.appCheckToken);let f=(r=i.timeout||7e4,s=null,{promise:new Promise((e,t)=>{s=setTimeout(()=>{t(new c("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{s&&clearTimeout(s)}}),p=await Promise.race([m(t,a,u,e.fetchImpl),f.promise,e.cancelAllRequests]);if(f.cancel(),!p)throw new c("cancelled","Firebase Functions instance was deleted.");let g=function(e,t){let n,i=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),r=i;try{let e=t&&t.error;if(e){let t=e.status;if("string"==typeof t){if(!h[t])return new c("internal","internal");i=h[t],r=t}let s=e.message;"string"==typeof s&&(r=s),n=e.details,void 0!==n&&(n=l(n))}}catch(e){}return"ok"===i?null:new c(i,r,n)}(p.status,p.json);if(g)throw g;if(!p.json)throw new c("internal","Response is not valid JSON object.");let y=p.json.data;if(void 0===y&&(y=p.json.result),void 0===y)throw new c("internal","Response is missing data field.");return{data:l(y)}}let y="@firebase/functions",v="0.11.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e=(0,r.Mq)(),t=f){let n=(0,r.qX)((0,s.m9)(e),u).getImmediate({identifier:t}),i=(0,s.P0)("functions");return i&&function(e,t,n){(0,s.m9)(e).emulatorOrigin=`http://${t}:${n}`}(n,...i),n}function _(e,t,n){var i;return i=(0,s.m9)(e),e=>(function(e,t,n,i){let r=e._url(t);return g(e,r,n,i)})(i,t,e,n||{})}i=fetch.bind(self),(0,r.Xd)(new a.wA(u,(e,{instanceIdentifier:t})=>{let n=e.getProvider("app").getImmediate();return new p(n,e.getProvider("auth-internal"),e.getProvider("messaging-internal"),e.getProvider("app-check-internal"),t,i)},"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(y,v,void 0),(0,r.KN)(y,v,"esm2017")}}]);