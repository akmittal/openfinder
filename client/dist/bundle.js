var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};var t=function(){return(t=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function i(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}function r(e,t,i,r){return new(i||(i=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${s}--\x3e`,l=new RegExp(`${s}|${a}`);class d{constructor(e,t){this.parts=[],this.element=t;const i=[],r=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,a=-1,d=0;const{strings:h,values:{length:m}}=e;for(;d<m;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let r=0;for(let e=0;e<i;e++)c(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=h[d],i=p.exec(t)[2],r=i.toLowerCase()+"$lit$",n=e.getAttribute(r);e.removeAttribute(r);const o=n.split(l);this.parts.push({type:"attribute",index:a,name:i,strings:o}),d+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const r=e.parentNode,n=t.split(l),o=n.length-1;for(let t=0;t<o;t++){let i,o=n[t];if(""===o)i=u();else{const e=p.exec(o);null!==e&&c(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}r.insertBefore(i,e),this.parts.push({type:"node",index:++a})}""===n[o]?(r.insertBefore(u(),e),i.push(e)):e.data=n[o],d+=o}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&a!==o||(a++,t.insertBefore(u(),e)),o=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(i.push(e),a--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),d++}}else n.currentNode=r.pop()}for(const e of i)e.parentNode.removeChild(e)}}const c=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},h=e=>-1!==e.index,u=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function m(e,t){const{element:{content:i},parts:r}=e,n=document.createTreeWalker(i,133,null,!1);let o=f(r),s=r[o],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,o=f(r,o),s=r[o]}d.forEach((e=>e.parentNode.removeChild(e)))}const g=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},f=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(h(t))return i}return-1};const _=new WeakMap,v=e=>"function"==typeof e&&_.has(e),b={},y={};class A{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,s=0,a=0,l=r.nextNode();for(;s<i.length;)if(o=i[s],h(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),C=` ${s} `;class x{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const o=p.exec(e);t+=null===o?e+(i?C:a):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class z{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new M(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!E(e))return e}let r="";for(let n=0;n<t;n++){r+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(S(e)||!E(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class M{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===b||S(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=b,e(this)}this.value!==b&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}const e=this.__pendingValue;e!==b&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof A&&this.value.template===t)this.value.update(e.values);else{const i=new A(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,r=0;for(const n of e)i=t[r],void 0===i&&(i=new P(this.options),t.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(t[r-1])),i.setValue(n),i.commit(),r++;r<t.length&&(t.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=b}}class O extends z{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends M{}let k=!1;(()=>{try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class L{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=H(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=b}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const H=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function N(e){let t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(s);return i=t.keyString.get(r),void 0===i&&(i=new d(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const D=new Map,R=new WeakMap;const F=new class{handleAttributeExpressions(e,t,i,r){const n=t[0];if("."===n){return new O(e,t.slice(1),i).parts}if("@"===n)return[new L(e,t.slice(1),r.eventContext)];if("?"===n)return[new T(e,t.slice(1),i)];return new z(e,t,i).parts}handleTextExpression(e){return new P(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(e,...t)=>new x(e,t,"html",F),B=(e,t)=>`${e}--${t}`;let j=!0;void 0===window.ShadyCSS?j=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),j=!1);const $=e=>t=>{const i=B(t.type,e);let r=D.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},D.set(i,r));let n=r.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(s);if(n=r.keyString.get(o),void 0===n){const i=t.getTemplateElement();j&&window.ShadyCSS.prepareTemplateDom(i,e),n=new d(t,i),r.keyString.set(o,n)}return r.stringsArray.set(t.strings,n),n},U=["html","svg"],Y=new Set,q=(e,t,i)=>{Y.add(e);const r=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=n[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{U.forEach((t=>{const i=D.get(B(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),m(e,i)}))}))})(e);const a=r.content;i?function(e,t,i=null){const{element:{content:r},parts:n}=e;if(null==i)return void r.appendChild(t);const o=document.createTreeWalker(r,133,null,!1);let s=f(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=g(t),i.parentNode.insertBefore(t,i));-1!==s&&n[s].index===l;){if(a>0){for(;-1!==s;)n[s].index+=a,s=f(n,s);return}s=f(n,s)}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),m(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const G={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:X};class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=X){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||G,n="function"==typeof r?r:r.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||G.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const r=this.constructor,n=r._attributeNameForProperty(e,i);if(void 0!==n){const e=r._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){const e=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let r=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;const K=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),J=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Z(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):J(e,t)}function ee(e,t){return(i,r)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():`__${r}`;n.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(e)),this[t]}}return void 0!==r?te(n,i,r):ie(n,i)}}const te=(e,t,i)=>{Object.defineProperty(t,i,e)},ie=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),re=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol();class oe{constructor(e,t){if(t!==ne)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(re?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...t)=>{const i=t.reduce(((t,i,r)=>t+(e=>{if(e instanceof oe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1]),e[0]);return new oe(i,ne)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ae={};class le extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),r=[];i.forEach((e=>r.unshift(e))),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!re){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new oe(String(t),ne)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?re?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ae&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ae}}le.finalized=!0,le.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=R.has(t),s=j&&11===t.nodeType&&!!t.host,a=s&&!Y.has(r),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let r=R.get(t);void 0===r&&(o(t,t.firstChild),R.set(t,r=new P(Object.assign({templateFactory:N},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:$(r)},i)),a){const e=R.get(l);R.delete(l);const i=e.value instanceof A?e.value.template:void 0;q(r,l,i),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!n&&s&&window.ShadyCSS.styleElement(t.host)};class de extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",de);let ce,he=null,ue=window.HTMLImports&&window.HTMLImports.whenReady||null;function pe(e){requestAnimationFrame((function(){ue?ue(e):(he||(he=new Promise((e=>{ce=e})),"complete"===document.readyState?ce():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&ce()}))),he.then((function(){e&&e()})))}))}const me="__shadyCSSCachedStyle";let ge=null,fe=null;class _e{constructor(){this.customStyles=[],this.enqueued=!1,pe((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&fe&&(this.enqueued=!0,pe(fe))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[me])return e[me];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[me])continue;const r=this.getStyleForCustomStyle(i);if(r){const e=r.__appliedElement||r;ge&&ge(e),i[me]=e}}return e}}_e.prototype.addCustomStyle=_e.prototype.addCustomStyle,_e.prototype.getStyleForCustomStyle=_e.prototype.getStyleForCustomStyle,_e.prototype.processStyles=_e.prototype.processStyles,Object.defineProperties(_e.prototype,{transformCallback:{get:()=>ge,set(e){ge=e}},validateCallback:{get:()=>fe,set(e){let t=!1;fe||(t=!0),fe=e,t&&this.enqueueDocumentValidation()}}});const ve=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,be=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ye=/@media\s(.*)/;function Ae(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function we(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}const Ce=!(window.ShadyDOM&&window.ShadyDOM.inUse);let xe,Se;function Ee(e){xe=(!e||!e.shimcssproperties)&&(Ce||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Se=window.ShadyCSS.cssBuild);const ze=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?xe=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ee(window.ShadyCSS),window.ShadyCSS=void 0):Ee(window.WebComponents&&window.WebComponents.flags);const Me=xe,Pe=new _e;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){Pe.processStyles(),Ae(e,t)},styleElement(e){Pe.processStyles()},styleDocument(e){Pe.processStyles(),Ae(document.body,e)},getComputedStyleValue:(e,t)=>we(e,t),flushCustomStyles(){},nativeCss:Me,nativeShadow:Ce,cssBuild:Se,disableRuntime:ze}),window.ShadyCSS.CustomStyleInterface=Pe,window.JSCompiler_renameProperty=function(e,t){return e};let Te,Oe,Ie=/(url\()([^)]*)(\))/g,ke=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Le(e,t){if(e&&ke.test(e))return e;if("//"===e)return e;if(void 0===Te){Te=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Te="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),Te)try{return new URL(e,t).href}catch(t){return e}return Oe||(Oe=document.implementation.createHTMLDocument("temp"),Oe.base=Oe.createElement("base"),Oe.head.appendChild(Oe.base),Oe.anchor=Oe.createElement("a"),Oe.body.appendChild(Oe.anchor)),Oe.base.href=t,Oe.anchor.href=e,Oe.anchor.href||e}function He(e,t){return e.replace(Ie,(function(e,i,r,n){return i+"'"+Le(r.replace(/["']/g,""),t)+"'"+n}))}function Ne(e){return e.substring(0,e.lastIndexOf("/")+1)}const De=!window.ShadyDOM||!window.ShadyDOM.inUse,Re=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),De&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let Fe=window.Polymer&&window.Polymer.rootPath||Ne(document.baseURI||window.location.href),Ve=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Be=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,je=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,$e=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ue=window.Polymer&&window.Polymer.legacyOptimizations||!1,Ye=window.Polymer&&window.Polymer.legacyWarnings||!1,qe=window.Polymer&&window.Polymer.syncInitialRender||!1,Ge=window.Polymer&&window.Polymer.legacyUndefined||!1,Xe=window.Polymer&&window.Polymer.orderedComputed||!1,We=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Qe=window.Polymer&&window.Polymer.fastDomIf||!1,Ke=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Je=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ze=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,et={},tt={};function it(e,t){et[e]=tt[e.toLowerCase()]=t}function rt(e){return et[e]||tt[e.toLowerCase()]}class nt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=rt(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,r){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Le(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ne(t)}return this.__assetpath}register(e){if(e=e||this.id){if(je&&void 0!==rt(e))throw it(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,it(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}nt.prototype.modules=et,customElements.define("dom-module",nt);function ot(e){return nt.import(e)}function st(e){const t=He((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function at(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...lt(t[e]));return i}function lt(e){const t=ot(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...ct(t));const i=t.querySelector("template");i&&e.push(...dt(i,t.assetpath)),t._styles=e}return t._styles}function dt(e,t){if(!e._styles){const i=[],r=e.content.querySelectorAll("style");for(let e=0;e<r.length;e++){let n=r[e],o=n.getAttribute("include");o&&i.push(...at(o).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(n.textContent=He(n.textContent,t)),i.push(n)}e._styles=i}return e._styles}function ct(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let r=i[e];if(r.import){const e=r.import,i=r.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=st(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=st(e));t.push(i?e._unscopedStyle:e._style)}}return t}function ht(e){let t=ot(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=ct(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const r=dt(e,t);for(let e=0;e<r.length;e++){let t=r[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const ut=window.ShadyCSS.CustomStyleInterface;class pt extends HTMLElement{constructor(){super(),this._style=null,ut.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=ht(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",pt);const mt=document.createElement("template");mt.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(mt.content);const gt=document.createElement("template");gt.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(gt.content);const ft=document.createElement("template");ft.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(ft.content);const _t=document.createElement("template");_t.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(_t.content);const vt=document.createElement("template");vt.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(vt.content);class bt{constructor(e){this.value=e.toString()}toString(){return this.value}}function yt(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof bt)return function(e){if(e instanceof bt)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const At=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce(((t,i,r)=>t+yt(i)+e[r+1]),e[0]),i};let wt;const Ct=At(wt||(wt=(e=>e)`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(Ct.content);let xt=0;const St=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=xt++;return function(r){let n=r.__mixinSet;if(n&&n[i])return r;let o=t,s=o.get(r);if(!s){s=e(r),o.set(r,s);let t=Object.create(s.__mixinSet||n||null);t[i]=!0,s.__mixinSet=t}return s}},Et=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function zt(e){return e.indexOf(".")>=0}function Mt(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function Pt(e,t){return 0===e.indexOf(t+".")}function Tt(e,t){return 0===t.indexOf(e+".")}function Ot(e,t,i){return t+i.slice(e.length)}function It(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let r=e[i].toString().split(".");for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(".")}return e}function kt(e){return Array.isArray(e)?It(e).split("."):e.toString().split(".")}function Lt(e,t,i){let r=e,n=kt(t);for(let e=0;e<n.length;e++){if(!r)return;r=r[n[e]]}return i&&(i.path=n.join(".")),r}function Ht(e,t,i){let r=e,n=kt(t),o=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(r=r[n[e]],!r)return}r[o]=i}else r[t]=i;return n.join(".")}const Nt={},Dt=/-[a-z]/g,Rt=/([A-Z])/g;function Ft(e){return Nt[e]||(Nt[e]=e.indexOf("-")<0?e:e.replace(Dt,(e=>e[1].toUpperCase())))}function Vt(e){return Nt[e]||(Nt[e]=e.replace(Rt,"-$1").toLowerCase())}let Bt=0,jt=0,$t=[],Ut=0,Yt=!1,qt=document.createTextNode("");new window.MutationObserver((function(){Yt=!1;const e=$t.length;for(let t=0;t<e;t++){let e=$t[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}$t.splice(0,e),jt+=e})).observe(qt,{characterData:!0});const Gt={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Xt={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Wt={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Qt={run:e=>(Yt||(Yt=!0,qt.textContent=Ut++),$t.push(e),Bt++),cancel(e){const t=e-jt;if(t>=0){if(!$t[t])throw new Error("invalid async handle: "+e);$t[t]=null}}},Kt=Qt,Jt=St((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let r=this.__data[e],n=this._shouldPropertyChange(e,t,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Kt.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,r){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,r)}_attributeToProperty(e,t,i){if(!this.__serializing){const r=this.__dataAttributes,n=r&&r[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const r=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=Et(e)),void 0===r?e.removeAttribute(i):e.setAttribute(i,r)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),Zt={};let ei=HTMLElement.prototype;for(;ei;){let e=Object.getOwnPropertyNames(ei);for(let t=0;t<e.length;t++)Zt[e[t]]=!0;ei=Object.getPrototypeOf(ei)}const ti=St((e=>{const t=Jt(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Ft(e[t]))}static attributeNameForProperty(e){return Vt(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!Zt[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),ii={"dom-if":!0,"dom-repeat":!0};let ri=!1,ni=!1;function oi(e){(function(){if(!ri){ri=!0;const e=document.createElement("textarea");e.placeholder="a",ni=e.placeholder===e.textContent}return ni})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function si(e){let t=e.getAttribute("is");if(t&&ii[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function ai(e,t){let i=t.parentInfo&&ai(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}function li(e,t,i,r){r.id&&(t[r.id]=i)}function di(e,t,i){if(i.events&&i.events.length)for(let r,n=0,o=i.events;n<o.length&&(r=o[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function ci(e,t,i,r){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=r)}const hi=St((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let r=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,i)||r,oi(n),n.firstChild&&this._parseTemplateChildNodes(n,t,i),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,i)||r),r||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let r,n=e.firstChild,o=0;n;n=r){if("template"==n.localName&&(n=si(n)),r=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,r=i.nextSibling,e.removeChild(i),i=r;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let s={parentIndex:o,parentInfo:i};this._parseTemplateNode(n,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),n.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let r=e,n=this._parseTemplate(r,t);return(n.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let r=!1,n=Array.from(e.attributes);for(let o,s=n.length-1;o=n[s];s--)r=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,i,r,n){return"on-"===r.slice(0,3)?(e.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,r=t.content||e.content,n=document.importNode(r,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let o=n.nodeList=new Array(i.length);n.$={};for(let e,r=0,s=i.length;r<s&&(e=i[r]);r++){let i=o[r]=ai(n,e);li(0,n.$,i,e),ci(0,i,e,t),di(this,i,e)}return n=n,n}_addMethodEventListenerToNode(e,t,i,r){let n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));let ui=0;const pi=[],mi={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},gi=/[A-Z]/;function fi(e,t,i){let r=e[t];if(r){if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),i))for(let e in r){let t=r[e],i=r[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else r=e[t]={};return r}function _i(e,t,i,r,n,o){if(t){let s=!1;const a=ui++;for(let l in i){let d=t[n?Mt(l):l];if(d)for(let t,c=0,h=d.length;c<h&&(t=d[c]);c++)t.info&&t.info.lastRun===a||n&&!bi(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,r,t.info,n,o),s=!0)}return s}return!1}function vi(e,t,i,r,n,o,s,a){let l=!1,d=t[s?Mt(r):r];if(d)for(let t,c=0,h=d.length;c<h&&(t=d[c]);c++)t.info&&t.info.lastRun===i||s&&!bi(r,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,r,n,o,t.info,s,a),l=!0);return l}function bi(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!Pt(i,e))||!(!t.wildcard||!Tt(i,e))}return!0}function yi(e,t,i,r,n){let o="string"==typeof n.method?e[n.method]:n.method,s=n.property;o?o.call(e,e.__data[s],r[s]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Ai(e,t,i){let r=Mt(t);if(r!==t){return wi(e,Vt(r)+"-changed",i[t],t),!0}return!1}function wi(e,t,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),Et(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function Ci(e,t,i,r,n,o){let s=(o?Mt(t):t)!=t?t:null,a=s?Lt(e,s):e.__data[t];s&&void 0===a&&(a=i[t]),wi(e,n.eventName,a,s)}function xi(e,t,i,r,n){let o=e.__data[t];Ve&&(o=Ve(o,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,o)}function Si(e,t,i,r){let n=e[mi.COMPUTE];if(n)if(Xe){ui++;const o=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[mi.COMPUTE];let r,{counts:n,ready:o,total:s}=function(e){const t=e.__computeInfo,i={},r=e[mi.COMPUTE],n=[];let o=0;for(let e in t){const r=t[e];o+=i[e]=r.args.filter((e=>!e.literal)).length+(r.dynamicFn?1:0)}for(let e in r)t[e]||n.push(e);return{counts:i,ready:n,total:o}}(e);for(;r=o.shift();){t.set(r,t.size);const e=i[r];e&&e.forEach((e=>{const t=e.info.methodInfo;--s,0==--n[t]&&o.push(t)}))}if(0!==s){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),s=[];for(let e in t)zi(e,n,s,o,r);let a;for(;a=s.shift();)Mi(e,"",t,i,a)&&zi(a.methodInfo,n,s,o,r);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;_i(e,n,o,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}const Ei=(e,t,i)=>{let r=0,n=t.length-1,o=-1;for(;r<=n;){const s=r+n>>1,a=i.get(t[s].methodInfo)-i.get(e.methodInfo);if(a<0)r=s+1;else{if(!(a>0)){o=s;break}n=s-1}}o<0&&(o=n+1),t.splice(o,0,e)},zi=(e,t,i,r,n)=>{const o=t[n?Mt(e):e];if(o)for(let t=0;t<o.length;t++){const s=o[t];s.info.lastRun===ui||n&&!bi(e,s.trigger)||(s.info.lastRun=ui,Ei(s.info,i,r))}};function Mi(e,t,i,r,n){let o=Hi(e,t,i,r,n);if(o===pi)return!1;let s=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,o,!0):(e[s]=o,!1)}function Pi(e,t,i,r,n,o,s){i.bindings=i.bindings||[];let a={kind:r,target:n,parts:o,literal:s,isCompound:1!==o.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Vt(n)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let r=a.parts[i];r.compoundIndex=i,Ti(e,t,a,r,l)}}function Ti(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,s={index:n,binding:i,part:r,evaluator:e};for(let i=0;i<o.length;i++){let r=o[i];"string"==typeof r&&(r=Vi(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Oi,info:s,trigger:r})}}}function Oi(e,t,i,r,n,o,s){let a=s[n.index],l=n.binding,d=n.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=i[t];t=Ot(d.source,l.target,t),a._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(a)}else{let s=n.evaluator._evaluateBinding(e,d,t,i,r,o);s!==pi&&function(e,t,i,r,n){n=function(e,t,i,r){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,i,r),Ve&&(n=Ve(n,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[mi.READ_ONLY]&&t[mi.READ_ONLY][r]||t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}(e,a,l,d,s)}}function Ii(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length);for(let e=0;e<r.length;e++)n[e]=r[e].literal;let o=t.target;i[o]=n,t.literal&&"property"==t.kind&&("className"===o&&(e=Et(e)),e[o]=t.literal)}}function ki(e,t,i){if(i.listenerEvent){let r=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,r,n){let o,s=e.detail,a=s&&s.path;a?(r=Ot(i,r,a),o=s&&s.value):o=e.currentTarget[i],o=n?!o:o,t[mi.READ_ONLY]&&t[mi.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,o,!0,Boolean(a))||s&&s.queueProperty||t._invalidateProperties()}(e,t,i.target,r.source,r.negate)}))}}function Li(e,t,i,r,n,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:o};for(let n,o=0;o<t.args.length&&(n=t.args[o]);o++)n.literal||e._addPropertyEffect(n.rootProperty,i,{fn:r,info:s,trigger:n});return o&&e._addPropertyEffect(t.methodName,i,{fn:r,info:s}),s}function Hi(e,t,i,r,n){let o=e._methodHost||e,s=o[n.methodName];if(s){let r=e._marshalArgs(n.args,t,i);return r===pi?pi:s.apply(o,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const Ni=[],Di=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Ri(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function Fi(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Ni};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=Vi(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Vi(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=Mt(t),i.structured=zt(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Bi(e,t,i){let r=Lt(e,i);return void 0===r&&(r=t[i]),r}function ji(e,t,i,r){const n={indexSplices:r};Ge&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),Ge&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function $i(e,t,i,r,n,o){ji(e,t,i,[{index:r,addedCount:n,removed:o,object:t,type:"splice"}])}const Ui=St((e=>{const t=hi(ti(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return mi}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Yi.length){let e=Yi[Yi.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[mi.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==mi.READ_ONLY);let r=fi(this,t,!0)[e];r||(r=this[t][e]=[]),r.push(i)}_removePropertyEffect(e,t,i){let r=fi(this,t,!0)[e],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,mi.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,mi.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,mi.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,mi.COMPUTE)}_setPendingPropertyOrPath(e,t,i,r){if(r||Mt(Array.isArray(e)?e[0]:e)!==e){if(!r){let i=Lt(this,e);if(!(e=Ht(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let r=e.__dataLinkedPaths;if(r){let n;for(let o in r){let s=r[o];Tt(o,t)?(n=Ot(o,s,t),e._setPendingPropertyOrPath(n,i,!0,!0)):Tt(s,t)&&(n=Ot(s,o,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=Et(e)),e[t]=i)}_setPendingProperty(e,t,i){let r=this.__dataHasPaths&&zt(e),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[mi.NOTIFY]&&this[mi.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[mi.READ_ONLY]&&this[mi.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let r,n=this.__dataHasPaths;this.__dataHasPaths=!1,Si(this,t,i,n),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),_i(this,this[mi.REFLECT],t,i,n),_i(this,this[mi.OBSERVE],t,i,n),r&&function(e,t,i,r,n){let o,s,a=e[mi.NOTIFY],l=ui++;for(let s in t)t[s]&&(a&&vi(e,a,l,s,i,r,n)||n&&Ai(e,s,i))&&(o=!0);o&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[mi.PROPAGATE]&&_i(this,this[mi.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,r){const n=(t,r)=>{_i(this,e.propertyEffects,t,i,r,e.nodeList);for(let n=e.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,t,i,r)};e.runEffects?e.runEffects(n,t,r):n(t,r)}linkPaths(e,t){e=It(e),t=It(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=It(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};ji(this,Lt(this,e,i),i.path,t)}get(e,t){return Lt(t||this,e)}set(e,t,i){i?Ht(i,e,t):this[mi.READ_ONLY]&&this[mi.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},r=Lt(this,e,i),n=r.length,o=r.push(...t);return t.length&&$i(this,r,i.path,n,t.length,[]),o}pop(e){let t={path:""},i=Lt(this,e,t),r=Boolean(i.length),n=i.pop();return r&&$i(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...r){let n,o={path:""},s=Lt(this,e,o);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?s.splice(t):s.splice(t,i,...r),(r.length||n.length)&&$i(this,s,o.path,t,r.length,n),n}shift(e){let t={path:""},i=Lt(this,e,t),r=Boolean(i.length),n=i.shift();return r&&$i(this,i,t.path,0,0,[n]),n}unshift(e,...t){let i={path:""},r=Lt(this,e,i),n=r.unshift(...t);return t.length&&$i(this,r,i.path,0,t.length,[]),n}notifyPath(e,t){let i;if(1==arguments.length){let r={path:""};t=Lt(this,e,r),i=r.path}else i=Array.isArray(e)?It(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,mi.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let r={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,mi.OBSERVE,{fn:yi,info:r,trigger:{name:e}}),i&&this._addPropertyEffect(t,mi.OBSERVE,{fn:yi,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let i=Fi(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Li(this,i,mi.OBSERVE,Hi,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,mi.NOTIFY,{fn:Ci,info:{eventName:Vt(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,mi.REFLECT,{fn:xi,info:{attrName:t}})}_createComputedProperty(e,t,i){let r=Fi(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");const n=Li(this,r,mi.COMPUTE,Mi,e,i);fi(this,"__computeInfo")[e]=n}_marshalArgs(e,t,i){const r=this.__data,n=[];for(let o=0,s=e.length;o<s;o++){let{name:s,structured:a,wildcard:l,value:d,literal:c}=e[o];if(!c)if(l){const e=Tt(s,t),n=Bi(r,i,e?t:s);d={path:e?t:s,value:n,base:e?Lt(r,s):n}}else d=a?Bi(r,i,s):r[s];if(Ge&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return pi;n[o]=d}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==i;if(!r)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=r,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),Yi.push(this);let i=super._stampTemplate(e,t);if(Yi.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let n=r[t],o=i[t],s=n.bindings;if(s)for(let t=0;t<s.length;t++){let i=s[t];Ii(o,i),ki(o,e,i)}o.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:r,parent:n}=t;i?i.nextSibling=r:n&&(n.firstChild=r),r?r.previousSibling=i:n&&(n.lastChild=i),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];Et(Et(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,r){let n=t._parseTemplateNode.call(this,e,i,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=Ri(t)||" ",Pi(this,i,r,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,i,r,n,o){let s=this._parseBindings(o,i);if(s){let t=n,o="property";gi.test(n)?o="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),o="attribute");let a=Ri(s);return a&&"attribute"==o&&("class"==n&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(n)),e.setAttribute(n,a)),"attribute"==o&&"disable-upgrade$"==t&&e.setAttribute(n,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(n=Ft(n)),Pi(this,i,r,o,n,s,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,r,n,o)}static _parseTemplateNestedTemplate(e,i,r){let n=t._parseTemplateNestedTemplate.call(this,e,i,r);const o=e.parentNode,s=r.templateInfo,a="dom-if"===o.localName,l="dom-repeat"===o.localName;We&&(a||l)&&(o.removeChild(e),(r=r.parentInfo).templateInfo=s,r.noted=!0,n=!1);let d=s.hostProps;if(Qe&&a)d&&(i.hostProps=Object.assign(i.hostProps||{},d),We||(r.parentInfo.noted=!0));else{let e="{";for(let t in d){Pi(this,i,r,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return n}static _parseBindings(e,t){let i,r=[],n=0;for(;null!==(i=Di.exec(e));){i.index>n&&r.push({literal:e.slice(n,i.index)});let o=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,d="",c=-1;"{"==o&&(c=a.indexOf("::"))>0&&(d=a.substring(c+2),a=a.substring(0,c),l=!0);let h=Fi(a),u=[];if(h){let{args:e,methodName:i}=h;for(let t=0;t<e.length;t++){let i=e[t];i.literal||u.push(i)}let r=t.dynamicFns;(r&&r[i]||h.static)&&(u.push(i),h.dynamicFn=!0)}else u.push(a);r.push({source:a,mode:o,negate:s,customEvent:l,signature:h,dependencies:u,event:d}),n=Di.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&r.push({literal:t})}return r.length?r:null}static _evaluateBinding(e,t,i,r,n,o){let s;return s=t.signature?Hi(e,i,r,0,t.signature):i!=t.source?Lt(e,t.source):o&&zt(i)?Lt(e,i):e.__data[i],t.negate&&(s=!s),s}}})),Yi=[];const qi=St((e=>{const t=Jt(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=function(e){const t={};for(let i in e){const r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),Gi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Xi=St((e=>{const t=qi(Ui(e));function i(e,t,i,r){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,r)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,r[i.observer]),e._addPropertyToAttributeMap(t)}function r(e,t,i,r){if(!Gi){const n=t.content.querySelectorAll("style"),o=dt(t),s=function(e){let t=ot(e);return t?ct(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<s.length;i++){let n=s[i];n.textContent=e._processStyleText(n.textContent,r),t.content.insertBefore(n,a)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],s=n[l];s!==i?(i=i.cloneNode(!0),s.parentNode.insertBefore(i,s)):l++,i.textContent=e._processStyleText(i.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),Ze&&Gi&&Re){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Ue||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let r=0;r<e.length;r++)i._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!je||$e)&&(t=nt.import(e,"template"),je&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Ne(e.url);else{const e=nt.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Fe,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let r=t[i];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return He(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;r(this,t,e,i?Le(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=Et(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),qe&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Le(this.importPath)),Le(e,t)}static _parseTemplateContent(e,i,r){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,r)}static _addTemplatePropertyEffect(e,i,r){return!Ye||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,r)}}})),Wi=Xi(HTMLElement);class Qi{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Ki.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ki.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Qi?e._cancelAsync():e=new Qi,e.setConfig(t,i),e}}let Ki=new Set;const Ji=function(e){Ki.add(e)},Zi=function(){const e=Boolean(Ki.size);return Ki.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};let er="string"==typeof document.head.style.touchAction,tr="__polymerGestures",ir="__polymerGesturesHandled",rr="__polymerGesturesTouchAction",nr=["mousedown","mousemove","mouseup","click"],or=[0,1,4,2],sr=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function ar(e){return nr.indexOf(e)>-1}let lr=!1;function dr(e){if(!ar(e)&&"touchend"!==e)return er&&lr&&Be?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){lr=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let cr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const hr=[],ur={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},pr={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function mr(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let r=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<r.length;e++)t.push(r[e])}}return t}let gr=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[ir]={skip:!0},"click"===e.type)){let t=!1,r=Ar(e);for(let e=0;e<r.length;e++){if(r[e].nodeType===Node.ELEMENT_NODE)if("label"===r[e].localName)hr.push(r[e]);else if(i=r[e],ur[i.localName]){let i=mr(r[e]);for(let e=0;e<i.length;e++)t=t||hr.indexOf(i[e])>-1}if(r[e]===vr.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function fr(e){let t=cr?["click"]:nr;for(let i,r=0;r<t.length;r++)i=t[r],e?(hr.length=0,document.addEventListener(i,gr,!0)):document.removeEventListener(i,gr,!0)}function _r(e){let t=e.type;if(!ar(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!sr&&(t=or[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let vr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function br(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function yr(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){vr.mouse.mouseIgnoreJob||fr(!0),vr.mouse.target=Ar(e)[0],vr.mouse.mouseIgnoreJob=Qi.debounce(vr.mouse.mouseIgnoreJob,Gt.after(2500),(function(){fr(),vr.mouse.target=null,vr.mouse.mouseIgnoreJob=null}))}),!!lr&&{passive:!0});const Ar=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],wr={},Cr=[];function xr(e){const t=Ar(e);return t.length>0?t[0]:e.target}function Sr(e){let t,i=e.type,r=e.currentTarget.__polymerGestures;if(!r)return;let n=r[i];if(n){if(!e[ir]&&(e[ir]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(vr.touch.id=t.identifier),vr.touch.id!==t.identifier)return;er||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)vr.touch.x=t.clientX,vr.touch.y=t.clientY,vr.touch.scrollDecided=!1;else if("touchmove"===i){if(vr.touch.scrollDecided)return;vr.touch.scrollDecided=!0;let i=function(e){let t="auto",i=Ar(e);for(let e,r=0;r<i.length;r++)if(e=i[r],e[rr]){t=e[rr];break}return t}(e),r=!1,n=Math.abs(vr.touch.x-t.clientX),o=Math.abs(vr.touch.y-t.clientY);e.cancelable&&("none"===i?r=!0:"pan-x"===i?r=o>n:"pan-y"===i&&(r=n>o)),r?e.preventDefault():Or("track")}}(e)}if(t=e[ir],!t.skip){for(let i,r=0;r<Cr.length;r++)i=Cr[r],n[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let r,o=0;o<Cr.length;o++)r=Cr[o],n[r.name]&&!t[r.name]&&(t[r.name]=!0,r[i](e))}}}function Er(e,t,i){return!!wr[t]&&(function(e,t,i){let r=wr[t],n=r.deps,o=r.name,s=e[tr];s||(e[tr]=s={});for(let t,i,r=0;r<n.length;r++)t=n[r],cr&&ar(t)&&"click"!==t||(i=s[t],i||(s[t]=i={_count:0}),0===i._count&&e.addEventListener(t,Sr,dr(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),r.touchAction&&Pr(e,r.touchAction)}(e,t,i),!0)}function zr(e,t,i){return!!wr[t]&&(function(e,t,i){let r=wr[t],n=r.deps,o=r.name,s=e[tr];if(s)for(let t,i,r=0;r<n.length;r++)t=n[r],i=s[t],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,Sr,dr(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function Mr(e){Cr.push(e);for(let t=0;t<e.emits.length;t++)wr[e.emits[t]]=e}function Pr(e,t){er&&e instanceof HTMLElement&&Qt.run((()=>{e.style.touchAction=t})),e[rr]=t}function Tr(e,t,i){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,Et(e).dispatchEvent(r),r.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Or(e){let t=function(e){for(let t,i=0;i<Cr.length;i++){t=Cr[i];for(let i,r=0;r<t.emits.length;r++)if(i=t.emits[r],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Ir(e,t,i,r){t&&Tr(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(e){return Or(e)}})}function kr(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function Lr(e,t,i){if(!t)return;let r,n=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],s=o.x-e.x,a=o.y-e.y,l=0;n&&(r=o.x-n.x,l=o.y-n.y),Tr(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:r,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let n=r;if(r=r.shadowRoot.elementFromPoint(e,t),n===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function Hr(e,t,i){let r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=xr(i||t);!o||pr[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=xr(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||Tr(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}Mr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){yr(this.info)},mousedown:function(e){if(!_r(e))return;let t=xr(e),i=this;br(this.info,(function(e){_r(e)||(Ir("up",t,e),yr(i.info))}),(function(e){_r(e)&&Ir("up",t,e),yr(i.info)})),Ir("down",t,e)},touchstart:function(e){Ir("down",xr(e),e.changedTouches[0],e)},touchend:function(e){Ir("up",xr(e),e.changedTouches[0],e)}}),Mr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,yr(this.info)},mousedown:function(e){if(!_r(e))return;let t=xr(e),i=this,r=function(e){let r=e.clientX,n=e.clientY;kr(i.info,r,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Or("tap"),i.info.addMove({x:r,y:n}),_r(e)||(i.info.state="end",yr(i.info)),t&&Lr(i.info,t,e),i.info.started=!0)};br(this.info,r,(function(e){i.info.started&&r(e),yr(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=xr(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;kr(this.info,r,n)&&("start"===this.info.state&&Or("tap"),this.info.addMove({x:r,y:n}),Lr(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=xr(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Lr(this.info,t,i))}}),Mr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){_r(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){_r(e)&&Hr(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Hr(this.info,e.changedTouches[0],e)}});const Nr=St((e=>class extends e{_addEventListenerToNode(e,t,i){Er(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){zr(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})),Dr=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}},Rr=e=>class extends(Dr(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!t&&Array.from(i.content.querySelectorAll("style[include]")).forEach((t=>{this._includeStyle(t.getAttribute("include"),e)})),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=nt.prototype.modules;let i=!1;const r=this.is+"-default-theme";Object.keys(t).sort(((e,t)=>{const i=0===e.indexOf("vaadin-"),r=0===t.indexOf("vaadin-"),n=["lumo-","material-"],o=n.filter((t=>0===e.indexOf(t))).length>0,s=n.filter((e=>0===t.indexOf(e))).length>0;return i!==r?i?-1:1:o!==s?o?-1:1:0})).forEach((n=>{if(n!==r){const r=t[n].getAttribute("theme-for");r&&r.split(" ").forEach((t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(n,e))}))}})),!i&&t[r]&&this._includeStyle(r,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i)}}};let Fr=!1;window.addEventListener("keydown",(()=>{Fr=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{Fr=!1}),{capture:!0});const Vr=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",(e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)})),this.addEventListener("focusout",(e=>this._setFocused(!1))),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",(e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout((()=>this._isShiftTabbing=!1),0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity="0",e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",(()=>this.parentNode.removeChild(e)))}}})),this.autofocus&&!this.disabled&&window.requestAnimationFrame((()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&Fr?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}},Br=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Zi()}while(e||t)};class jr{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){const{scrollLeft:r}=i;if("rtl"!==t||!e)return r;switch(e){case"negative":return i.scrollWidth-i.clientWidth+r;case"reverse":return i.scrollWidth-i.clientWidth-r}return r}static setNormalizedScrollLeft(e,t,i,r){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+r;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-r;break;default:i.scrollLeft=r}else i.scrollLeft=r}}const $r=[];let Ur;new MutationObserver((function(){const e=qr();$r.forEach((t=>{Yr(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Yr=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},qr=function(){return document.documentElement.getAttribute("dir")},Gr=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),Ur||(Ur=jr.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Yr(this,qr()))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const r=i===qr()&&-1===$r.indexOf(this),n=!i&&t&&-1===$r.indexOf(this),o=i!==qr()&&t===qr();r||n?(this.__subscribe(),Yr(this,qr())):o&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===$r.indexOf(this)&&$r.push(this):$r.indexOf(this)>-1&&$r.splice($r.indexOf(this),1)}__getNormalizedScrollLeft(e){return jr.getNormalizedScrollLeft(Ur,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return jr.setNormalizedScrollLeft(Ur,this.getAttribute("dir")||"ltr",e,t)}},Xr=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Wr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Qr(e,t){if("function"!=typeof e)return;const i=Xr.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const Kr=function(e,t){if(window.Vaadin.developmentMode)return Qr(e,t)};function Jr(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Wr?!(Wr&&Object.keys(Wr).map((e=>Wr[e])).filter((e=>e.productionMode)).length>0):!Qr((function(){return!0})))}catch(e){return!1}}());const Zr=function(){return Kr(Jr)};let en;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Zr&&Zr()};const tn=new Set,rn=e=>class extends(Gr(e)){static finalize(){super.finalize();const{is:e}=this;e&&!tn.has(e)&&(window.Vaadin.registrations.push(this),tn.add(e),window.Vaadin.developmentModeCallback&&(en=Qi.debounce(en,Wt,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),Ji(en)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};let nn,on=e=>e;class sn extends(rn(Vr(Rr(Nr(Wi))))){static get template(){return At(nn||(nn=on`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`))}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Er(this,"down",(()=>!this.disabled&&this.setAttribute("active",""))),Er(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active",""))),this.addEventListener("keyup",(()=>this.removeAttribute("active"))),this.addEventListener("blur",(()=>this.removeAttribute("active")))}get focusElement(){return this.$.button}}customElements.define(sn.is,sn);class an{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ln(e){return dn(function(e){let t=new an;t.start=0,t.end=e.length;let i=t;for(let r=0,n=e.length;r<n;r++)if(e[r]===un){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new an,i.start=r+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[r]===pn&&(i.end=r+1,i=i.parent||t);return t}(e=e.replace(mn.comments,"").replace(mn.port,"")),e)}function dn(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let r=e.previous?e.previous.end:e.parent.start;i=t.substring(r,e.start-1),i=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(i),i=i.replace(mn.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=i.trim();e.atRule=0===n.indexOf(_n),e.atRule?0===n.indexOf(fn)?e.type=hn.MEDIA_RULE:n.match(mn.keyframesRule)&&(e.type=hn.KEYFRAMES_RULE,e.keyframesName=e.selector.split(mn.multipleSpaces).pop()):0===n.indexOf(gn)?e.type=hn.MIXIN_RULE:e.type=hn.STYLE_RULE}let r=e.rules;if(r)for(let e,i=0,n=r.length;i<n&&(e=r[i]);i++)dn(e,t);return e}function cn(e,t,i=""){let r="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(gn)}(i))for(let e,n=0,o=i.length;n<o&&(e=i[n]);n++)r=cn(e,t,r);else r=t?e.cssText:function(e){return function(e){return e.replace(mn.mixinApply,"").replace(mn.varApply,"")}(e=function(e){return e.replace(mn.customProp,"").replace(mn.mixinProp,"")}(e))}(e.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(e.selector&&(i+=e.selector+" "+un+"\n"),i+=r,e.selector&&(i+=pn+"\n\n")),i}const hn={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},un="{",pn="}",mn={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},gn="--",fn="@media",_n="@",vn=new Set;function bn(e){const t=e.textContent;if(!vn.has(t)){vn.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function yn(e){return e.hasAttribute("shady-unscoped")}function An(e,t){return e?("string"==typeof e&&(e=ln(e)),t&&Cn(e,t),cn(e,Me)):""}function wn(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=ln(e.textContent)),e.__cssRules||null}function Cn(e,t,i,r){if(!e)return;let n=!1,o=e.type;if(r&&o===hn.MEDIA_RULE){let t=e.selector.match(ye);t&&(window.matchMedia(t[1]).matches||(n=!0))}o===hn.STYLE_RULE?t(e):i&&o===hn.KEYFRAMES_RULE?i(e):o===hn.MIXIN_RULE&&(n=!0);let s=e.rules;if(s&&!n)for(let e,n=0,o=s.length;n<o&&(e=s[n]);n++)Cn(e,t,i,r)}function xn(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let r=function(e,t){let i=0;for(let r=t,n=e.length;r<n;r++)if("("===e[r])i++;else if(")"===e[r]&&0==--i)return r;return-1}(e,i+3),n=e.substring(i+4,r),o=e.substring(0,i),s=xn(e.substring(r+1),t),a=n.indexOf(",");return-1===a?t(o,n.trim(),"",s):t(o,n.substring(0,a).trim(),n.substring(a+1).trim(),s)}window.ShadyDOM&&window.ShadyDOM.wrap;function Sn(e){if(void 0!==Se)return Se;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function En(e){return""!==Sn(e)}const zn=/;\s*/m,Mn=/^\s*(initial)|(inherit)\s*$/,Pn=/\s*!important/;class Tn{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let On=null;class In{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Tn}detectMixin(e){return function(e){const t=be.test(e)||ve.test(e);return be.lastIndex=0,ve.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const r=i[e];yn(r)?Ce||(bn(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=wn(e);return this.transformRules(i,t),e.textContent=An(i),i}transformCustomStyle(e){let t=wn(e);return Cn(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=An(t),t}transformRules(e,t){this._currentElement=t,Cn(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(ve,((e,i,r,n)=>this._produceCssProperties(e,i,r,n,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let r=!1;return Cn(t,(t=>{r=r||t===e,r||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))})),i}_consumeCssProperties(e,t){let i=null;for(;i=be.exec(e);){let r=i[0],n=i[1],o=i.index,s=o+r.indexOf("@apply"),a=o+r.length,l=e.slice(0,s),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let h=this._atApplyToCssProperties(n,c);e=`${l}${h}${d}`,be.lastIndex=o+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(zn,"");let i=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){let n,o,s;this._currentElement&&(r.dependants[this._currentElement]=!0);const a=r.properties;for(n in a)s=t&&t[n],o=[n,": var(",e,"_-_",n],s&&o.push(",",s.replace(Pn,"")),o.push(")"),Pn.test(a[n])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=Mn.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,r,n=e.split(";"),o={};for(let e,s,a=0;a<n.length;a++)e=n[a],e&&(s=e.split(":"),s.length>1&&(i=s[0].trim(),r=s.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(i,r)),o[i]=r));return o}_invalidateMixinEntry(e){if(On)for(let t in e.dependants)t!==this._currentElement&&On(t)}_produceCssProperties(e,t,i,r,n){if(i&&xn(i,((e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)})),!r)return e;let o=this._consumeCssProperties(""+r,n),s=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,d=this._map.get(t),c=d&&d.properties;c?l=Object.assign(Object.create(c),a):this._map.set(t,l);let h,u,p=[],m=!1;for(h in l)u=a[h],void 0===u&&(u="initial"),c&&!(h in c)&&(m=!0),p.push(`${t}_-_${h}: ${u}`);return m&&this._invalidateMixinEntry(d),d&&(d.properties=l),i&&(s=`${e};${s}`),`${s}${p.join("; ")};`}}In.prototype.detectMixin=In.prototype.detectMixin,In.prototype.transformStyle=In.prototype.transformStyle,In.prototype.transformCustomStyle=In.prototype.transformCustomStyle,In.prototype.transformRules=In.prototype.transformRules,In.prototype.transformRule=In.prototype.transformRule,In.prototype.transformTemplate=In.prototype.transformTemplate,In.prototype._separator="_-_",Object.defineProperty(In.prototype,"invalidCallback",{get:()=>On,set(e){On=e}});const kn={},Ln="_applyShimCurrentVersion",Hn="_applyShimNextVersion",Nn="_applyShimValidatingVersion",Dn=Promise.resolve();function Rn(e){let t=kn[e];t&&function(e){e[Ln]=e[Ln]||0,e[Nn]=e[Nn]||0,e[Hn]=(e[Hn]||0)+1}(t)}function Fn(e){return e[Ln]===e[Hn]}const Vn=new In;class Bn{constructor(){this.customStyleInterface=null,Vn.invalidCallback=Rn}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Vn.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),En(e))return;kn[t]=e;let i=Vn.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&Vn.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Ae(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",r="";return t?t.indexOf("-")>-1?i=t:(r=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,r=e.extends),{is:i,typeExtension:r}}(e),i=kn[t];if((!i||!En(i))&&i&&!Fn(i)){(function(e){return!Fn(e)&&e[Nn]===e[Hn]})(i)||(this.prepareTemplate(i,t),function(e){e[Nn]=e[Hn],e._validating||(e._validating=!0,Dn.then((function(){e[Ln]=e[Hn],e._validating=!1})))}(i));let r=e.shadowRoot;if(r){let e=r.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=An(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Bn;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,r){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>we(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Me,nativeShadow:Ce,cssBuild:Se,disableRuntime:ze},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Vn;const jn=/:host\(:dir\((ltr|rtl)\)\)/g,$n=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Un=/:dir\((?:ltr|rtl)\)/,Yn=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),qn=[];let Gn=null,Xn="";function Wn(){Xn=document.documentElement.getAttribute("dir")}function Qn(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Xn)}}function Kn(){Wn(),Xn=document.documentElement.getAttribute("dir");for(let e=0;e<qn.length;e++)Qn(qn[e])}const Jn=St((e=>{Yn||Gn||(Wn(),Gn=new MutationObserver(Kn),Gn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=ti(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Yn&&Un.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(jn,':host([dir="$1"])'),t=t.replace($n,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Gn&&Gn.takeRecords().length&&Kn(),qn.push(this),Qn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=qn.indexOf(this);e>-1&&qn.splice(e,1)}}}return i.__activateDir=!1,i}));let Zn=!1,eo=[],to=[];function io(){Zn=!0,requestAnimationFrame((function(){Zn=!1,function(e){for(;e.length;)ro(e.shift())}(eo),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)ro(e.shift())}(to)}))}))}function ro(e){const t=e[0],i=e[1],r=e[2];try{i.apply(t,r)}catch(e){setTimeout((()=>{throw e}))}}function no(e,t,i){Zn||io(),to.push([e,t,i])}function oo(){document.body.removeAttribute("unresolved")}function so(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?oo():window.addEventListener("DOMContentLoaded",oo);function ao(e,t,i,r,n,o){let s,a=0,l=0,d=Math.min(i-t,o-n);if(0==t&&0==n&&(a=function(e,t,i){for(let r=0;r<i;r++)if(!co(e[r],t[r]))return r;return i}(e,r,d)),i==e.length&&o==r.length&&(l=function(e,t,i){let r=e.length,n=t.length,o=0;for(;o<i&&co(e[--r],t[--n]);)o++;return o}(e,r,d-a)),n+=a,o-=l,(i-=l)-(t+=a)==0&&o-n==0)return[];if(t==i){for(s=so(t,[],0);n<o;)s.removed.push(r[n++]);return[s]}if(n==o)return[so(t,[],i-t)];let c=function(e){let t=e.length-1,i=e[0].length-1,r=e[t][i],n=[];for(;t>0||i>0;){if(0==t){n.push(2),i--;continue}if(0==i){n.push(3),t--;continue}let o,s=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];o=a<l?a<s?a:s:l<s?l:s,o==s?(s==r?n.push(0):(n.push(1),r=s),t--,i--):o==a?(n.push(3),t--,r=a):(n.push(2),i--,r=l)}return n.reverse(),n}(function(e,t,i,r,n,o){let s=o-n+1,a=i-t+1,l=new Array(s);for(let e=0;e<s;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<s;i++)for(let o=1;o<a;o++)if(co(e[t+o-1],r[n+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,r,n,o));s=void 0;let h=[],u=t,p=n;for(let e=0;e<c.length;e++)switch(c[e]){case 0:s&&(h.push(s),s=void 0),u++,p++;break;case 1:s||(s=so(u,[],0)),s.addedCount++,u++,s.removed.push(r[p]),p++;break;case 2:s||(s=so(u,[],0)),s.addedCount++,u++;break;case 3:s||(s=so(u,[],0)),s.removed.push(r[p]),p++}return s&&h.push(s),h}function lo(e,t){return ao(e,0,e.length,t,0,t.length)}function co(e,t){return e===t}function ho(e){return"slot"===e.localName}let uo=class{static getFlattenedNodes(e){const t=Et(e);return ho(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>ho(e)?Et(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ho(this._target)?this._listenSlots([this._target]):Et(this._target).children&&(this._listenSlots(Et(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ho(this._target)?this._unlistenSlots([this._target]):Et(this._target).children&&(this._unlistenSlots(Et(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Qt.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=lo(t,this._effectiveNodes);for(let t,r=0;r<i.length&&(t=i[r]);r++)for(let i,r=0;r<t.removed.length&&(i=t.removed[r]);r++)e.removedNodes.push(i);for(let r,n=0;n<i.length&&(r=i[n]);n++)for(let i=r.index;i<r.index+r.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ho(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ho(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};const po=Element.prototype,mo=po.matches||po.matchesSelector||po.mozMatchesSelector||po.msMatchesSelector||po.oMatchesSelector||po.webkitMatchesSelector,go=function(e,t){return mo.call(e,t)};class fo{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new uo(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Et(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=Et(t).parentNode||Et(t).host;return t===this.node}getOwnerRoot(){return Et(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Et(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Et(this.node).assignedSlot;for(;t;)e.push(t),t=Et(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Et(i).importNode(e,t)}getEffectiveChildNodes(){return uo.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let r,n=0,o=t.length;n<o&&(r=t[n]);n++)r.nodeType===Node.ELEMENT_NODE&&go(r,e)&&i.push(r);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function _o(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}class vo{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let bo=fo;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(fo.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=fo.prototype[t])})),_o(e.prototype,["classList"]),bo=e,Object.defineProperties(vo.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&yo(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const r=i[e];if(yo(r).getOwnerRoot()===t)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let r=t[i];e[r]=function(){return this.node[r].apply(this.node,arguments)}}}(fo.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),_o(fo.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})}}(fo.prototype,["textContent","innerHTML","className"]);const yo=function(e){if((e=e||document)instanceof bo)return e;if(e instanceof vo)return e;let t=e.__domApi;return t||(t=e instanceof Event?new vo(e):new bo(e),e.__domApi=t),t},Ao=window.ShadyDOM,wo=window.ShadyCSS;function Co(e,t){return Et(e).getRootNode()===t}const xo=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};St((e=>{const t=Xi(e);let i=xo(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,r){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Et(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,r)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}));let So=window.ShadyCSS;const Eo=St((e=>{const t=Nr(Xi(e)),i=Gi?t:Jn(t),r=xo(i),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(Je&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(Je&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return Je&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):r.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,r){t!==i&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Et(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,r),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(Ue&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Je&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let r,n=0;n<i.length&&(r=i[n]);n++){let i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=t;let n=i.node||this;return Et(n).dispatchEvent(r),r}listen(e,t,i){e=e||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(e);n||(n={},r.set(e,n));let o=t+i;n[o]||(n[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let r=this.__boundListeners&&this.__boundListeners.get(e),n=t+i,o=r&&r[n];o&&(this._removeEventListenerFromNode(e,t,o),r[n]=null)}setScrollDirection(e,t){Pr(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=Et(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=yo(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return yo(this).getEffectiveChildNodes()}queryDistributedElements(e){return yo(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,r=0;i=e[r];r++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?yo(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&Et(t).contains(e)&&Et(t).getRootNode()===Et(e).getRootNode()}isLocalDescendant(e){return this.root===Et(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Ao||!wo)return null;if(!Ao.handlesDynamicScoping)return null;const i=wo.ScopingShim;if(!i)return null;const r=i.scopeForNode(e),n=Et(e).getRootNode(),o=e=>{if(!Co(e,n))return;const t=Array.from(Ao.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!Co(o,n))continue;const s=i.currentScopeForNode(o);s!==r&&(""!==s&&i.unscopeNode(o,s),i.scopeNode(o,r))}};if(o(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return So.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Qi.debounce(this._debouncers[e],i>0?Gt.after(i):Qt,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Gt.run(e.bind(this),t):~Qt.run(e.bind(this))}cancelAsync(e){e<0?Qt.cancel(~e):Gt.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return go(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(Et(i).setAttribute(e,""),!0):(Et(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,r){r=r||this,this.transform("translate3d("+e+","+t+","+i+")",r)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=Lt(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o})),zo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Mo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Po=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Mo);function To(e,t,i,r){!function(e,t,i){const r=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let o=0;o<n.length;o++){let s=n[o];if(!(s in i))if(r)t[s]=e[s];else{let i=Object.getOwnPropertyDescriptor(e,s);i&&(i.configurable=!0,Object.defineProperty(t,s,i))}}}(t,e,r);for(let e in zo)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function Oo(e,t,i){t=t||[];for(let r=e.length-1;r>=0;r--){let n=e[r];n?Array.isArray(n)?Oo(n,t):t.indexOf(n)<0&&(!i||i.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function Io(e,t){for(const i in t){const r=e[i],n=t[i];e[i]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}const ko=Eo(HTMLElement);function Lo(e,t,i){let r;const n={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let e,t=0;t<r.length;t++)e=r[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(r)for(let e=0;e<r.length;e++)Io(t,r[e].properties);return Io(t,e.properties),t}static get observers(){let t=[];if(r)for(let e,i=0;i<r.length;i++)e=r[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=n.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),Ue&&s(e);const t=Object.getPrototypeOf(this);let i=n.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=n.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=n.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=n.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=n.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=n.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=n.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let r=n.attributeChanged;if(r)for(let n=0;n<r.length;n++)r[n].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;r=Oo(i,null,e),o.prototype.behaviors=e?e.concat(i):r}const s=t=>{r&&function(e,t,i){for(let r=0;r<t.length;r++)To(e,t[r],i,Po)}(t,r,n),To(t,e,n,Mo)};return Ue||s(o.prototype),o.generatedFrom=e,o}const Ho=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(ko):ko;return i=Lo(e,i,e.behaviors),i.is=i.prototype.is=e.is,i},No=function(e){let t;return t="function"==typeof e?e:No.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};function Do(e,t,i,r,n){let o;n&&(o="object"==typeof i&&null!==i,o&&(r=e.__dataTemp[t]));let s=r!==i&&(r==r||i==i);return o&&s&&(e.__dataTemp[t]=i),s}No.Class=Ho;const Ro=St((e=>class extends e{_shouldPropertyChange(e,t,i){return Do(this,e,t,i,!0)}})),Fo=St((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return Do(this,e,t,i,this.mutableData)}}));Ro._mutablePropertyChange=Do;let Vo=null;function Bo(){return Vo}Bo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Bo,writable:!0}});const jo=Ui(Bo),$o=Ro(jo);const Uo=Ui(class{});function Yo(e,t){for(let i=0;i<t.length;i++){let r=t[i];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),Et(Et(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const e=r.__polymerReplaced__;e&&Et(Et(e).parentNode).replaceChild(r,e)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}class qo extends Uo{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,i(e)}));else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,i)}}_showHideChildren(e){Yo(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}const Go=Ro(qo);function Xo(e){let t=e.__dataHost;return t&&t._methodHost||t}function Wo(e,t,i){let r=i.mutableData?Go:qo;Zo.mixin&&(r=Zo.mixin(r));let n=class extends r{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function(e,t,i,r){let n=i.hostProps||{};for(let t in r.instanceProps){delete n[t];let i=r.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Jo(t,i)})}if(r.forwardHostProp&&t.__dataHost)for(let t in n)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(n,e,t,i),n}function Qo(e,t,i,r){let n=i.forwardHostProp;if(n&&t.hasHostProps){const o="template"==e.localName;let s=t.templatizeTemplateClass;if(!s){if(o){let e=i.mutableData?$o:jo;class r extends e{}s=t.templatizeTemplateClass=r}else{const i=e.constructor;class r extends i{}s=t.templatizeTemplateClass=r}let a=t.hostProps;for(let e in a)s.prototype._addPropertyEffect("_host_"+e,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Ko(e,n)}),s.prototype._createNotifyingProperty("_host_"+e);Ye&&r&&function(e,t,i){const r=i.constructor._properties,{propertyEffects:n}=e,{instanceProps:o}=t;for(let e in n)if(!(r[e]||o&&o[e])){const t=n[e];for(let i=0;i<t.length;i++){const{part:r}=t[i].info;if(!r.signature||!r.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,r)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),o)!function(e,t){Vo=e,Object.setPrototypeOf(e,t.prototype),new t,Vo=null}(e,s),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,s.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function Ko(e,t){return function(e,i,r){t.call(e.__templatizeOwner,i.substring("_host_".length),r[i])}}function Jo(e,t){return function(e,i,r){t.call(e.__templatizeOwner,e,i,r[i])}}function Zo(e,t,i){if(je&&!Xo(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let r=(t?t.constructor:qo)._parseTemplate(e),n=r.templatizeInstanceClass;n||(n=Wo(e,r,i),r.templatizeInstanceClass=n);const o=Xo(e);Qo(e,r,i,o);let s=class extends n{};return s.prototype._methodHost=o,s.prototype.__dataHost=e,s.prototype.__templatizeOwner=t,s.prototype.__hostProps=r.hostProps,s=s,s}let es=!1;function ts(){if(Ue&&!De){if(!es){es=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const is=Nr(Fo(Ui(HTMLElement)));customElements.define("dom-bind",class extends is{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),je)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,r){this.mutableData=!0}connectedCallback(){ts()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Et(Et(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});const rs=Fo(Wi);class ns extends rs{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Ke,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),ts()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=Et(Et(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Zo(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let r,n=0;n<i.length&&(r=i[n]);n++)r.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((r=this.as)===(n=t)||Pt(r,n)||Tt(r,n)){let r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=i);let n=Ot(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,t);this.notifyPath(n,i)}var r,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Qi.debounce(this.__renderDebouncer,t>0?Gt.after(t):Qt,e.bind(this)),Ji(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Br()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>this.__continueChunking()))),this._setRenderedItemCount(this.__instances.length),Ke&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter(((t,i,r)=>this.__filterFn(e[t],i,r)))),this.__sortFn&&t.sort(((t,i)=>this.__sortFn(e[t],e[i]))),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),r=Math.max(t-i,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const r=this.__itemsIdxToInstIdx={};let n;for(n=0;n<t;n++){let t=this.__instances[n],o=i[n],s=e[o];r[o]=n,t?(t._setPendingProperty(this.as,s),t._setPendingProperty(this.indexAs,n),t._setPendingProperty(this.itemsIndexAs,o),t._flushProperties()):this.__insertInstance(s,n,o)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=Et(t.root);for(let e=0;e<t.children.length;e++){let r=t.children[e];i.appendChild(r)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(e,t,i){const r=this.__stampInstance(e,t,i);let n=this.__instances[t+1],o=n?n.children[0]:this;return Et(Et(this).parentNode).insertBefore(r.root,o),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),r=i.indexOf("."),n=r<0?i:i.substring(0,r);if(n==parseInt(n,10)){let e=r<0?"":i.substring(r+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[n],s=this.__instances[o];if(s){let i=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(i,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=Et(t).parentNode;return null}(this.template,e)}}customElements.define(ns.is,ns);class os extends Wi{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Qi.debounce(this.__renderDebouncer,Qt,(()=>this.__render())),Ji(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=Et(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Et(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ts()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:Et(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!Et(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=Et(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(Et(this).previousSibling!==t[t.length-1])for(let i,r=0;r<t.length&&(i=t[r]);r++)Et(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Br()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Ke&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const ss=Qe?class extends os{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(je&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let r=this.__syncInfo;if(this.if)r&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(r.changedProps,t)),e(t,i);else if(this.__instance)if(r||(r=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=Mt(e);r.changedProps[t]=this.__dataHost[t]}else Object.assign(r.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),Et(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Yo(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends os{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Zo(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Mt(e)]=!0))}})),this.__instance=new this.__ctor,Et(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Et(e[0]).parentNode;if(t){t=Et(t);for(let i,r=0;r<e.length&&(i=e[r]);r++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(ss.is,ss);let as=St((e=>{let t=Xi(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){let e=lo(i,r);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let r=e[i];t.forEach(((e,i)=>{e<r.index||(e>=r.index+r.removed.length?t.set(i,e+r.addedCount-r.removed.length):t.set(i,-1))}));for(let e=0;e<r.addedCount;e++){let i=r.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach(((e,r)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(r)):i++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((i,r)=>{t==e++&&this.deselect(r)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}}))(Wi);class ls extends as{static get is(){return"array-selector"}static get template(){return null}}customElements.define(ls.is,ls);const ds=Eo(HTMLElement).prototype;let cs;const hs=At(cs||(cs=(e=>e)`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`));hs.setAttribute("style","display: none;"),document.head.appendChild(hs.content);var us=document.createElement("style");us.textContent="[hidden] { display: none !important; }",document.head.appendChild(us);class ps{constructor(e){ps[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return ps.types[e]&&ps.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=ps.types[t]=ps.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=ps.types[this.type];return e?Object.keys(e).map((function(e){return ms[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}ps[" "]=function(){},ps.types={};var ms=ps.types;No({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var r=new ps({type:e,key:t});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new ps({type:this.type,key:e}).value}});let gs;No({_template:At(gs||(gs=(e=>e)`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`)),is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:ds.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&yo(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,yo(this.root).appendChild(this._img))}});let fs,_s,vs,bs,ys,As=e=>e,ws=class extends le{constructor(){super(...arguments),this.data=null,this.selected=!1,this.serverURL=""}handleClipUrl(e){const t=new CustomEvent("clipboard:img:url",{detail:{path:this.data.path},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return this.data?V(_s||(_s=As` <div class="${0}"> ${0} <div class="meta"> <div class="title">${0}</div> <div class="sub">${0}</div> <div class="sub"> ${0} </div> <div class="sub">${0}KB</div> <div class="sub"> ${0} </div> </div> <vaadin-button @click="${0}"> <iron-icon icon="content-copy" slot="prefix"></iron-icon> Copy Link </vaadin-button> </div> `),"card "+(this.selected?"active":""),"image"===this.data.type?V(vs||(vs=As`<img src="${0}" width="100%" loading="lazy">`),`${this.serverURL}/static${this.data.path}?q=${this.data.modified}`):V(bs||(bs=As`<video preload="metadata" controls width="100%" heigth="100%"> <source src="${0}"> </video> `),`${this.serverURL}/static${this.data.path}`),this.data.name,`${this.data.description}`,new Date(this.data.modified).toLocaleString(),Math.floor(this.data.size/1024),this.data.width&&-1!==this.data.height?`${this.data.width} x ${this.data.height}`:"",this.handleClipUrl):V(fs||(fs=As`Loading...`))}};ws.styles=se(ys||(ys=As`:host{box-sizing:border-box;margin:5px;background-color:#fff;border-radius:5px;box-shadow:2px 3px 5px rgba(0,0,0,.1);cursor:pointer}.card{padding:10px}.active{padding:7px;border:3px solid #1675f2}.meta{font-size:1rem;display:flex;flex-direction:column;align-items:start}.title{font-size:1rem}.sub{font-size:.8rem;color:#999}`)),i([Z({type:Object})],ws.prototype,"data",void 0),i([Z({type:Boolean})],ws.prototype,"selected",void 0),i([Z({type:String})],ws.prototype,"serverURL",void 0),ws=i([K("file-card")],ws);let Cs,xs,Ss,Es,zs=e=>e,Ms=class extends le{constructor(){super(...arguments),this.context="dir",this.selectedItemType=""}render(){return V(Cs||(Cs=zs` <div class="actions" @click="${0}"> <vaadin-button data-action="new-subfolder" class="border"> <iron-icon icon="add" slot="prefix"></iron-icon> New Subfolder </vaadin-button> ${0} </div> `),(e=>{if(console.log(e.target.tagName),"VAADIN-BUTTON"!=e.target.tagName)return;const t=new CustomEvent("onaction",{detail:e.target.getAttribute("data-action")});this.dispatchEvent(t),console.log(e.target.getAttribute("data-action"))}),"file"===this.context?"video"!==this.selectedItemType?V(xs||(xs=zs` <vaadin-button data-action="rename"> <iron-icon icon="find-replace" slot="prefix"></iron-icon> Rename </vaadin-button> <vaadin-button data-action="change-alt"> <iron-icon icon="create" slot="prefix"></iron-icon> Change Alt </vaadin-button> <vaadin-button data-action="replace"> <iron-icon icon="find-replace" slot="prefix"></iron-icon> Replace </vaadin-button> <vaadin-button data-action="download"> <iron-icon icon="visibility" slot="prefix"></iron-icon> Download </vaadin-button> `)):V(Ss||(Ss=zs` <vaadin-button data-action="rename"> <iron-icon icon="find-replace" slot="prefix"></iron-icon> Rename </vaadin-button> <vaadin-button data-action="download"> <iron-icon icon="visibility" slot="prefix"></iron-icon> Download </vaadin-button>`)):"")}};Ms.styles=se(Es||(Es=zs`:host{width:100%;display:inline-block}vaadin-button{border:1px solid #ccc;background-color:#fff}`)),i([Z({type:String})],Ms.prototype,"context",void 0),i([Z({type:String})],Ms.prototype,"selectedItemType",void 0),Ms=i([K("file-actions")],Ms);let Ps,Ts,Os=e=>e,Is=class extends le{constructor(){super(...arguments),this.context="",this.serverURL="",this.changed=0,this.dataProvider=(e,t)=>r(this,void 0,void 0,(function*(){let i=[];e.parentItem?(i=yield this.getDirs(`/${e.parentItem.name}`),i=i.data.map((e=>Object.assign(Object.assign({},e),{children:e.isLeafNode?null:[]})))):(i=yield this.getDirs("/"),i=[{name:"/",path:"/",isLeafNode:!1,children:[]}]),t(i,i.length)})),this.handleClick=e=>{const t=this.grid.getEventContext(e).item,i=new CustomEvent("onselection",{detail:t});this.grid.selectedItems=this.grid.selectedItems[0]===t?[]:[t],this.dispatchEvent(i)}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.grid&&this.grid.clearCache()}getDirs(e){return r(this,void 0,void 0,(function*(){this.context=e;const t=yield fetch(`${this.serverURL}/directory?context=${e}`);return yield t.json()}))}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return r(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}render(){return V(Ps||(Ps=Os`<vaadin-grid header="Media" .onclick="${0}" .dataProvider="${0}" aria-label="directories" style="background:0 0;border:0;min-height:calc(100vh - 50px)"> <vaadin-grid-tree-column header="" path="name" itemHasChildrenPath="children"> </vaadin-grid-tree-column> </vaadin-grid>`),this.handleClick,this.dataProvider)}};function ks(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}Is.styles=se(Ts||(Ts=Os`:host{height:100vh}::part(cell){background-color:transparent}`)),i([Z()],Is.prototype,"dirs",void 0),i([Z({type:String})],Is.prototype,"serverURL",void 0),i([Z({type:Number,attribute:!0})],Is.prototype,"changed",void 0),i([ee("vaadin-grid")],Is.prototype,"grid",void 0),Is=i([K("file-directories")],Is),(()=>{var e,t,i;const r=Symbol(),n=Symbol(),o=Symbol(),s=Symbol(),a=Symbol(),l=Symbol(),d=Symbol(),c=Symbol(),h=Symbol(),u=Symbol(),p=Symbol(),m=Symbol(),g=Symbol();class f{constructor(){this[e]=[],this[t]=[],this[i]=new Set}destructor(){this[h](this[o]);const e=this;e[r]=null,e[o]=null,e[n]=null}get top(){const e=this[r];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[r].push(e))}remove(e){const t=this[r].indexOf(e);return-1!==t&&(this[r].splice(t,1),t===this[r].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[r].indexOf(e)}[(e=r,t=o,i=n,l)](e){const t=this[n],i=this[o];if(!e)return this[h](i),t.clear(),void(this[o]=[]);const r=this[u](e);if(r[r.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=r;const s=this[p](e);if(!i.length)return void this[c](r,s,t);let a=i.length-1,l=r.length-1;for(;a>0&&l>0&&i[a]===r[l];)a--,l--;i[a]!==r[l]&&this[d](i[a],r[l]),a>0&&this[h](i.slice(0,a)),l>0&&this[c](r.slice(0,l),s,null)}[d](e,t){const i=e[s];this[m](e)&&!e.inert&&(e.inert=!0,i.add(e)),i.has(t)&&(t.inert=!1,i.delete(t)),t[a]=e[a],t[s]=i,e[a]=void 0,e[s]=void 0}[h](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[s];for(const t of e)t.inert=!1;t[s]=void 0}}[c](e,t,i){for(const r of e){const e=r.parentNode,n=e.children,o=new Set;for(let e=0;e<n.length;e++){const s=n[e];s===r||!this[m](s)||t&&t.has(s)||(i&&s.inert?i.add(s):(s.inert=!0,o.add(s)))}r[s]=o;const l=new MutationObserver(this[g].bind(this));r[a]=l;let d=e;const c=d;c.__shady&&c.host&&(d=c.host),l.observe(d,{childList:!0})}}[g](e){const t=this[o],i=this[n];for(const r of e){const e=r.target.host||r.target,n=e===document.body?t.length:t.indexOf(e),o=t[n-1],a=o[s];for(let e=0;e<r.removedNodes.length;e++){const t=r.removedNodes[e];if(t===o)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<r.addedNodes.length;e++){const t=r.addedNodes[e];this[m](t)&&(i&&t.inert?i.add(t):(t.inert=!0,a.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[u](e){const t=[];let i=e;for(;i&&i!==document.body;)if(i.nodeType===Node.ELEMENT_NODE&&t.push(i),i.assignedSlot){for(;i=i.assignedSlot;)t.push(i);i=t.pop()}else i=i.parentNode||i.host;return t}[p](e){const t=e.shadowRoot;if(!t)return null;const i=new Set;let r,n,o;const s=t.querySelectorAll("slot");if(s.length&&s[0].assignedNodes)for(r=0;r<s.length;r++)for(o=s[r].assignedNodes({flatten:!0}),n=0;n<o.length;n++)o[n].nodeType===Node.ELEMENT_NODE&&i.add(o[n]);return i}}document.$blockingElements=new f})();var Ls=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();function Hs(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){if("undefined"!=typeof window){var e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),r=function(){function r(e,t){Hs(this,r),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return Ls(r,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this;s(e,(function(e){return t._visitNode(e)}));var i=document.activeElement;if(!document.body.contains(e)){for(var r=e,n=void 0;r;){if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){n=r;break}r=r.parentNode}n&&(i=n.activeElement)}e.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType===Node.ELEMENT_NODE){var r=e;r!==this._rootElement&&r.hasAttribute("inert")&&this._adoptInertRoot(r),(t.call(r,i)||r.hasAttribute("tabindex"))&&this._manageNode(r)}}},{key:"_manageNode",value:function(e){var t=this._inertManager.register(e,this);this._managedNodes.add(t)}},{key:"_unmanageNode",value:function(e){var t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}},{key:"_unmanageSubtree",value:function(e){var t=this;s(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,i){t.forEach((function(t){var i=t.target;if("childList"===t.type)e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(i);else if(i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")){this._adoptInertRoot(i);var r=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(e){i.contains(e.node)&&r._manageNode(e.node)}))}}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),r}(),n=function(){function e(t,i){Hs(this,e),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([i]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return Ls(e,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var e=this.node;if(t.call(e,i)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),e}(),o=new(function(){function i(e){if(Hs(this,i),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),a(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return Ls(i,[{key:"setInert",value:function(e,t){if(t){if(this._inertRoots.has(e))return;var i=new r(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,i),!this._document.body.contains(e))for(var n=e.parentNode;n;)11===n.nodeType&&a(n),n=n.parentNode}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var i=this._managedNodes.get(e);return void 0!==i?i.addInertRoot(t):i=new n(e,t),this._managedNodes.set(e,i),i}},{key:"deregister",value:function(e,t){var i=this._managedNodes.get(e);return i?(i.removeInertRoot(t),i.destroyed&&this._managedNodes.delete(e),i):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(i,r){var n=this;i.forEach((function(i){switch(i.type){case"childList":e.call(i.addedNodes).forEach((function(i){if(i.nodeType===Node.ELEMENT_NODE){var r=e.call(i.querySelectorAll("[inert]"));t.call(i,"[inert]")&&r.unshift(i),r.forEach((function(e){this.setInert(e,!0)}),n)}}),n);break;case"attributes":if("inert"!==i.attributeName)return;var r=i.target,o=r.hasAttribute("inert");n.setInert(r,o)}}),this)}}]),i}())(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){o.setInert(this,e)}})}function s(e,t,i){if(e.nodeType==Node.ELEMENT_NODE){var r=e;t&&t(r);var n=r.shadowRoot;if(n)return void s(n,t);if("content"==r.localName){for(var o=r,a=o.getDistributedNodes?o.getDistributedNodes():[],l=0;l<a.length;l++)s(a[l],t);return}if("slot"==r.localName){for(var d=r,c=d.assignedNodes?d.assignedNodes({flatten:!0}):[],h=0;h<c.length;h++)s(c[h],t);return}}for(var u=e.firstChild;null!=u;)s(u,t),u=u.nextSibling}function a(e){if(!e.querySelector("style#inert-style, link#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t)}}}();var Ns={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},Ds={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Rs={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},Fs=function(i){function r(e){var n=i.call(this,t(t({},r.defaultAdapter),e))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.layoutFrame_=0,n.escapeKeyAction_=Ds.CLOSE_ACTION,n.scrimClickAction_=Ds.CLOSE_ACTION,n.autoStackButtons_=!0,n.areButtonsStacked_=!1,n.suppressDefaultPressSelector=Ds.SUPPRESS_DEFAULT_PRESS_SELECTOR,n}return function(t,i){function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}(r,i),Object.defineProperty(r,"cssClasses",{get:function(){return Ns},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return Ds},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Rs},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){this.adapter.hasClass(Ns.STACKED)&&this.setAutoStackButtons(!1)},r.prototype.destroy=function(){this.isOpen_&&this.close(Ds.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},r.prototype.open=function(){var e=this;this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.addClass(Ns.OPENING),this.runNextAnimationFrame_((function(){e.adapter.addClass(Ns.OPEN),e.adapter.addBodyClass(Ns.SCROLL_LOCK),e.layout(),e.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter.trapFocus(e.adapter.getInitialFocusEl()),e.adapter.notifyOpened()}),Rs.DIALOG_ANIMATION_OPEN_TIME_MS)}))},r.prototype.close=function(e){var t=this;void 0===e&&(e=""),this.isOpen_&&(this.isOpen_=!1,this.adapter.notifyClosing(e),this.adapter.addClass(Ns.CLOSING),this.adapter.removeClass(Ns.OPEN),this.adapter.removeBodyClass(Ns.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){t.adapter.releaseFocus(),t.handleAnimationTimerEnd_(),t.adapter.notifyClosed(e)}),Rs.DIALOG_ANIMATION_CLOSE_TIME_MS))},r.prototype.isOpen=function(){return this.isOpen_},r.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},r.prototype.setEscapeKeyAction=function(e){this.escapeKeyAction_=e},r.prototype.getScrimClickAction=function(){return this.scrimClickAction_},r.prototype.setScrimClickAction=function(e){this.scrimClickAction_=e},r.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},r.prototype.setAutoStackButtons=function(e){this.autoStackButtons_=e},r.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},r.prototype.setSuppressDefaultPressSelector=function(e){this.suppressDefaultPressSelector=e},r.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},r.prototype.handleClick=function(e){if(this.adapter.eventTargetMatches(e.target,Ds.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var t=this.adapter.getActionFromEvent(e);t&&this.close(t)}},r.prototype.handleKeydown=function(e){var t="Enter"===e.key||13===e.keyCode;if(t&&!this.adapter.getActionFromEvent(e)){var i=e.composedPath?e.composedPath()[0]:e.target,r=!this.adapter.eventTargetMatches(i,this.suppressDefaultPressSelector);t&&r&&this.adapter.clickDefaultButton()}},r.prototype.handleDocumentKeydown=function(e){("Escape"===e.key||27===e.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},r.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},r.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(Ns.OPENING),this.adapter.removeClass(Ns.CLOSING)},r.prototype.runNextAnimationFrame_=function(e){var t=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){t.animationFrame_=0,clearTimeout(t.animationTimer_),t.animationTimer_=setTimeout(e,0)}))},r.prototype.detectStackedButtons_=function(){this.adapter.removeClass(Ns.STACKED);var e=this.adapter.areButtonsStacked();e&&this.adapter.addClass(Ns.STACKED),e!==this.areButtonsStacked_&&(this.adapter.reverseButtons(),this.areButtonsStacked_=e)},r.prototype.detectScrollableContent_=function(){this.adapter.removeClass(Ns.SCROLLABLE),this.adapter.isContentScrollable()&&this.adapter.addClass(Ns.SCROLLABLE)},r}(function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}());function Vs(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var i={get passive(){return t=!0,!1}},r=function(){};e.document.addEventListener("test",r,i),e.document.removeEventListener("test",r,i)}catch(e){t=!1}return t}(e)&&{passive:!0}}function Bs(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}const js=()=>{},$s={get passive(){return!1}};document.addEventListener("x",js,$s),document.removeEventListener("x",js);class Us extends le{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}const Ys=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)};class qs{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach((t=>e+=t+" ")),this.element.setAttribute("class",e)}}}const Gs=new WeakMap,Xs=(Ws=e=>t=>{if(!(t instanceof M)||t instanceof I||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:r}=i;let n=Gs.get(t);void 0===n&&(r.setAttribute("class",i.strings.join(" ")),Gs.set(t,n=new Set));const o=r.classList||new qs(r);n.forEach((t=>{t in e||(o.remove(t),n.delete(t))}));for(const t in e){const i=e[t];i!=n.has(t)&&(i?(o.add(t),n.add(t)):(o.remove(t),n.delete(t)))}"function"==typeof o.commit&&o.commit()},(...e)=>{const t=Ws(...e);return _.set(t,!0),t});var Ws;let Qs,Ks,Js,Zs=e=>e;const ea=document.$blockingElements;class ta extends Us{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.mdcFoundationClass=Fs,this.boundLayout=null,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}get primaryButton(){let e=this.primarySlot.assignedNodes();e=e.filter((e=>e instanceof HTMLElement));const t=e[0];return t||null}emitNotification(e,t){const i=new CustomEvent(e,{detail:t?{action:t}:{}});this.dispatchEvent(i)}getInitialFocusEl(){const e=`[${this.initialFocusAttribute}]`,t=this.querySelector(e);if(t)return t;const i=this.primarySlot.assignedNodes({flatten:!0}),r=this.searchNodeTreesForAttribute(i,this.initialFocusAttribute);if(r)return r;const n=this.secondarySlot.assignedNodes({flatten:!0}),o=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(o)return o;const s=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(s,this.initialFocusAttribute)}searchNodeTreesForAttribute(e,t){for(const i of e)if(i instanceof HTMLElement){if(i.hasAttribute(t))return i;{const e=i.querySelector(`[${t}]`);if(e)return e}}return null}createAdapter(){return Object.assign(Object.assign({},(e=this.mdcRoot,{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)})),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const e=this.primaryButton;e&&e.click()},eventTargetMatches:(e,t)=>!!e&&Bs(e,t),getActionFromEvent:e=>{if(!e.target)return"";const t=function(e,t){if(e.closest)return e.closest(t);for(var i=e;i;){if(Bs(i,t))return i;i=i.parentElement}return null}(e.target,`[${this.actionAttribute}]`);return t&&t.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const e=this.contentElement;return!!e&&e.scrollHeight>e.offsetHeight},notifyClosed:e=>this.emitNotification("closed",e),notifyClosing:e=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",e)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{ea.remove(this)},trapFocus:e=>{ea.push(this),e&&e.focus()}});var e}render(){const e={[Ns.STACKED]:this.stacked};let t=V(Qs||(Qs=Zs``));this.heading&&(t=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return V(Ks||(Ks=Zs` <div class="mdc-dialog ${0}" role="alertdialog" aria-modal="true" aria-labelledby="title" aria-describedby="content"> <div class="mdc-dialog__container"> <div class="mdc-dialog__surface"> ${0} <div id="content" class="mdc-dialog__content"> <slot id="contentSlot"></slot> </div> <footer id="actions" class="${0}"> <span> <slot name="secondaryAction"></slot> </span> <span> <slot name="primaryAction"></slot> </span> </footer> </div> </div> <div class="mdc-dialog__scrim"></div> </div>`),Xs(e),t,Xs(i))}renderHeading(){return V(Js||(Js=Zs` <h2 id="title" class="mdc-dialog__title">${0}</h2>`),this.heading)}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,ea.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const e=this.getInitialFocusEl();e&&e.focus()}blur(){if(!this.shadowRoot)return;const e=this.shadowRoot.activeElement;if(e)e instanceof HTMLElement&&e.blur();else{const e=this.getRootNode(),t=e instanceof Document?e.activeElement:null;t instanceof HTMLElement&&t.blur()}}setEventListeners(){this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundLayout=()=>{this.open&&this.mdcFoundation.layout.bind(this.mdcFoundation)},this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation),this.mdcRoot.addEventListener("click",this.boundHandleClick),window.addEventListener("resize",this.boundLayout,Vs()),window.addEventListener("orientationchange",this.boundLayout,Vs()),this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,Vs()),document.addEventListener("keydown",this.boundHandleDocumentKeydown,Vs())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundLayout&&(window.removeEventListener("resize",this.boundLayout),window.removeEventListener("orientationchange",this.boundLayout)),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}ks([ee(".mdc-dialog")],ta.prototype,"mdcRoot",void 0),ks([ee('slot[name="primaryAction"]')],ta.prototype,"primarySlot",void 0),ks([ee('slot[name="secondaryAction"]')],ta.prototype,"secondarySlot",void 0),ks([ee("#contentSlot")],ta.prototype,"contentSlot",void 0),ks([ee(".mdc-dialog__content")],ta.prototype,"contentElement",void 0),ks([ee(".mdc-container")],ta.prototype,"conatinerElement",void 0),ks([Z({type:Boolean})],ta.prototype,"hideActions",void 0),ks([Z({type:Boolean}),Ys((function(){this.forceLayout()}))],ta.prototype,"stacked",void 0),ks([Z({type:String})],ta.prototype,"heading",void 0),ks([Z({type:String}),Ys((function(e){this.mdcFoundation.setScrimClickAction(e)}))],ta.prototype,"scrimClickAction",void 0),ks([Z({type:String}),Ys((function(e){this.mdcFoundation.setEscapeKeyAction(e)}))],ta.prototype,"escapeKeyAction",void 0),ks([Z({type:Boolean,reflect:!0}),Ys((function(e){this.mdcFoundation&&this.isConnected&&(e?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))}))],ta.prototype,"open",void 0),ks([Z()],ta.prototype,"defaultAction",void 0),ks([Z()],ta.prototype,"actionAttribute",void 0),ks([Z()],ta.prototype,"initialFocusAttribute",void 0);let ia;const ra=se(ia||(ia=(e=>e)`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity,0);transition:opacity 280ms cubic-bezier(.4,0,.2,1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color,#fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width:592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width:592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium,4px)}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size,1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height,2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight,500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing,.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform,inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size,1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height,1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight,400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing,.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform,inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}.mdc-dialog__button[dir=rtl],[dir=rtl] .mdc-dialog__button{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}.mdc-dialog__button:first-child[dir=rtl],[dir=rtl] .mdc-dialog__button:first-child{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--closing,.mdc-dialog--open,.mdc-dialog--opening{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0s cubic-bezier(0,0,.2,1)}.mdc-dialog--closing .mdc-dialog__container,.mdc-dialog--closing .mdc-dialog__scrim{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow,0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12))}@media(min-width:560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width,560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32);background-color:var(--mdc-dialog-scrim-color,rgba(0,0,0,.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87);color:var(--mdc-dialog-heading-ink-color,rgba(0,0,0,.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6);color:var(--mdc-dialog-content-ink-color,rgba(0,0,0,.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-color:rgba(0,0,0,.12);border-color:var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width,280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height,calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}#actions ::slotted(*)[dir=rtl],[dir=rtl] #actions ::slotted(*){margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions :not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`));let na=class extends ta{};na.styles=ra,na=ks([K("mwc-dialog")],na);let oa,sa,aa=e=>e,la=class extends le{constructor(){super(...arguments),this.opened=!1,this.label=""}handleClick(){const e=new CustomEvent("onsubmit",{detail:this.input.value});this.dispatchEvent(e),this.input.value=""}render(){return V(oa||(oa=aa` <mwc-dialog .open="${0}"> <vaadin-text-field @keypress="${0}"></vaadin-text-field> <vaadin-button @click="${0}">Submit</vaadin-button> </mwc-dialog> `),this.opened,(e=>{"Enter"===e.key&&this.handleClick()}),this.handleClick)}};la.styles=se(sa||(sa=aa`:host{display:flex}`)),i([ee("vaadin-dialog")],la.prototype,"dialog",void 0),i([ee("vaadin-text-field")],la.prototype,"input",void 0),i([Z({type:Boolean})],la.prototype,"opened",void 0),i([Z({type:String})],la.prototype,"label",void 0),la=i([K("input-modal")],la);let da,ca,ha,ua,pa=e=>e,ma=class extends le{constructor(){super(...arguments),this.show=!1}render(){return V(da||(da=pa` ${0} `),this.show?V(ca||(ca=pa`<div class="loading"><vaadin-progress-bar indeterminate value="0"></vaadin-progress-bar></div>`)):V(ha||(ha=pa``)))}};ma.styles=se(ua||(ua=pa`:host{display:flex}.loading{display:flex;align-items:center;justify-content:center;position:fixed;left:0;right:0;bottom:0;top:0;background:rgba(0,0,0,.5);z-index:999}.loading>*{width:50%}`)),i([Z({type:Boolean})],ma.prototype,"show",void 0),ma=i([K("loading-spinner")],ma);const ga=document.createElement("template");ga.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(ga.content);const fa=document.createElement("template");fa.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(fa.content);const _a=document.createElement("template");_a.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_a.content);const va=document.createElement("template");va.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(va.content);const ba=document.createElement("template");ba.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ba.content);let ya;const Aa=At(ya||(ya=(e=>e)`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="helper-text"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-left"]) [part="value"] {
        text-align: left;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="input-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="input-field"]::after {
        transform-origin: 0% 0;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
      }

      :host([dir="rtl"]) [part="value"]:focus,
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      @-moz-document url-prefix() {
        :host([dir="rtl"]) [part="value"],
        :host([dir="rtl"]) [part="input-field"] ::slotted(input),
        :host([dir="rtl"]) [part="input-field"] ::slotted(textarea),
        :host([dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      :host([theme~="align-left"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(Aa.content);let wa;const Ca=At(wa||(wa=(e=>e)`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(Ca.content);const xa={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},Sa={DEFAULT:"default",ACCESSIBLE:"accessible"},Ea=e=>class extends e{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+xa.default.join(", ")+")","_hostAccessiblePropsChanged("+xa.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=Qi.debounce(this._inputDebouncer,Gt.after(200),(()=>{this.removeAttribute("input-prevented")})))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value,this.__userInput=!1}_stateChanged(e,t,i,r){!e&&!t&&i&&r?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput||(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e,this)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e,this)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e,this)}_onHelperSlotChange(){const e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=e.filter((e=>3!==e.nodeType)).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(Sa).map((e=>Sa[e])).forEach((e=>this._propagateHostAttributes(xa[e].map((e=>this[e])),e)))}_hostPropsChanged(...e){this._propagateHostAttributes(e,Sa.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,Sa.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const i=this.inputElement,r=xa[t];t===Sa.ACCESSIBLE?r.forEach(((t,r)=>{this._setOrToggleAttribute(t,e[r],i),this._setOrToggleAttribute(`aria-${t}`,!!e[r]&&"true",i)})):r.forEach(((t,r)=>{this._setOrToggleAttribute(t,e[r],i)}))}_setOrToggleAttribute(e,t,i){e&&i&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}_constraintsChanged(e,t,i,r){this.invalid&&(e||t||i||r?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",(()=>this._valueClearing=!0)),this.$.clearButton.addEventListener("mouseleave",(()=>this._valueClearing=!1)),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=Ea._uniqueId=1+Ea._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._helperTextId=`${this.constructor.is}-helper-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",(()=>{this.__observeOffsetHeight()}))}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout((()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}})))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(i)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){const t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){const t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame((()=>{this.__preventInput=!1}))},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,i,r,n,o){const s=[];(r||o)&&s.push(n),t&&e&&s.push(i),this._setOrToggleAttribute("aria-describedby",s.join(" "),this.focusElement)}_getActiveLabelId(e,t,i){let r=i;e&&(r=`${t} ${i}`),this.focusElement.setAttribute("aria-labelledby",r)}_getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const i="__previous"+e;void 0!==this[i]&&this[i]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0})),this[i]=t}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=Qi.debounce(this.__observeOffsetHeightDebouncer,Xt,(()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles();if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach((t=>{t.style[e]="visible",t.style[e]=""}))}}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}};let za,Ma=e=>e;class Pa extends(rn(Ea(Vr(Rr(Wi))))){static get template(){return At(za||(za=Ma`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`))}static get is(){return"vaadin-text-field"}static get version(){return"2.8.2"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(Pa.is,Pa);let Ta;const Oa=At(Ta||(Ta=(e=>e)`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(Oa.content);const Ia=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",(e=>this._setFocused(!0)),!0),this.addEventListener("blur",(e=>this._setFocused(!1)),!0),this.addEventListener("mousedown",(e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)})),this.addEventListener("keydown",(e=>this._onKeydown(e))),this.addEventListener("keyup",(e=>this._onKeyup(e)))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}};let ka,La=e=>e;class Ha extends(Ia(Rr(Gr(Wi)))){static get template(){return At(ka||(ka=La`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`))}static get is(){return"vaadin-item"}static get version(){return"2.3.0"}constructor(){super(),this.value}}customElements.define(Ha.is,Ha);let Na;const Da=At(Na||(Na=(e=>e)`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(Da.content);const Ra=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",(e=>this._onKeydown(e))),this.addEventListener("click",(e=>this._onClick(e))),this._observer=new uo(this,(e=>{this._setItems(this._filterItems(Array.from(this.children)))}))}_enhanceItems(e,t,i,r){if(!r&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach((e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()})),this._setFocusable(i);const r=e[i];e.forEach((e=>e.selected=e===r)),r&&!r.disabled&&this._scrollToItem(i)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter((e=>e._hasVaadinItemMixin))}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let i;t&&!t.disabled&&(i=this.items.indexOf(t))>=0&&(this.selected=i)}_searchKey(e,t){this._searchReset=Qi.debounce(this._searchReset,Gt.after(500),(()=>this._searchBuf="")),this._searchBuf+=t.toLowerCase();this.items.some((e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf)))||(this._searchBuf=t.toLowerCase());const i=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(i,1,(e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf)))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),i=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(i,t);return void(e>=0&&this._focus(e))}let r,n;const o=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(n=-o,r=i-o):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(n=o,r=i+o):"Home"===t?(n=1,r=0):"End"===t&&(n=-1,r=this.items.length-1),r=this._getAvailableIndex(r,n,(e=>!(e.disabled||this._isItemHidden(e)))),r>=0&&(this._focus(r),e.preventDefault())}_getAvailableIndex(e,t,i){const r=this.items.length;for(let n=0;"number"==typeof e&&n<r;n++,e+=t||1){e<0?e=r-1:e>=r&&(e=0);if(i(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,(e=>!e.disabled));const t=this.items[e]||this.items[0];this.items.forEach((e=>e.tabIndex=e===t?0:-1))}_focus(e){const t=this.items[e];this.items.forEach((e=>e.focused=e===t)),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[e+1]||t).getBoundingClientRect(),o=(this.items[e-1]||t).getBoundingClientRect();let s=0;!this._isRTL&&n[i[1]]>=r[i[1]]||this._isRTL&&n[i[1]]<=r[i[1]]?s=n[i[1]]-r[i[1]]:(!this._isRTL&&o[i[0]]<=r[i[0]]||this._isRTL&&o[i[0]]>=r[i[0]])&&(s=o[i[0]]-r[i[0]]),this._scroll(s)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=jr.detectScrollType(),i=jr.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;jr.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,i)}}},Fa=e=>class extends(Ra(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",(e=>this._onMultipleClick(e))),super.ready()}_enhanceMultipleItems(e,t,i,r){if(e&&t){if(r){const t=r.map((t=>e[t]));e.forEach((e=>e.selected=-1!==t.indexOf(e)))}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const t=this._filterItems(e.composedPath())[0],i=t&&!t.disabled?this.items.indexOf(t):-1;i<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(i)?this.selectedValues=this.selectedValues.filter((e=>e!==i)):this.selectedValues=this.selectedValues.concat(i))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach((e=>e.selected=!1))),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}};let Va,Ba=e=>e;class ja extends(rn(Fa(Rr(Wi)))){static get template(){return At(Va||(Va=Ba`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`))}static get is(){return"vaadin-list-box"}static get version(){return"1.4.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof Wi||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(ja.is,ja);let $a;const Ua=At($a||($a=(e=>e)`<dom-module id="lumo-select" theme-for="vaadin-select">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [selected] {
        padding-left: 0;
        padding-right: 0;
        flex: auto;
      }

      :host([theme~="small"]) [selected] {
        padding: 0;
        min-height: var(--lumo-size-s);
      }

      :host([theme~="align-left"]) [selected] {
        text-align: left;
      }

      :host([theme~="align-right"]) [selected] {
        text-align: right;
      }

      :host([theme~="align-center"]) [selected] {
        text-align: center;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      /* Highlight the toggle button when hovering over the entire component */
      :host(:hover:not([readonly]):not([disabled])) [part="toggle-button"] {
        color: var(--lumo-contrast-80pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style>
      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }

      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }

      [part="input-field"] {
        cursor: default;
      }

      [part="input-field"] ::slotted([part="value"]) {
        display: flex;
      }

      /* ShadyCSS limitation workaround */
      [part="input-field"] ::slotted([part="value"]) [selected]::before {
        display: none;
      }

      [part="input-field"]:focus {
        outline: none;
      }

      /* RTL specific styles */

      :host([theme~="align-left"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }

      :host([theme~="align-center"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) ::slotted([part~="value"]),
      :host([theme~="align-right"][dir="rtl"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-overlay" theme-for="vaadin-select-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host {
        --_lumo-item-selected-icon-display: block;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part~="overlay"] {
        min-width: var(--vaadin-select-text-field-width);
      }

      /* Small viewport adjustment */
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

      :host([theme~="align-left"]) {
        text-align: left;
      }

      :host([theme~="align-right"]) {
        text-align: right;
      }

      :host([theme~="align-center"]) {
        text-align: center;
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(Ua.content);var Ya=new Set;const qa={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Ya.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():De||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=yo(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(Ya.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Ya.delete(this):Ya.add(this)}};No({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});const Ga=Element.prototype,Xa=Ga.matches||Ga.matchesSelector||Ga.mozMatchesSelector||Ga.msMatchesSelector||Ga.oMatchesSelector||Ga.webkitMatchesSelector;let Wa,Qa=e=>e,Ka=0;const Ja={},Za=e=>{Ka++;const t=`vaadin-overlay-content-${Ka}`,i=document.createElement("template"),r=document.createElement("style");r.textContent=":host { display: block; }"+e,i.content.appendChild(r),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);const n=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(n.is,n),Ja[e]=t,t};class el extends(Rr(Gr(Wi))){static get template(){return At(Wa||(Wa=Qa`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`))}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new uo(this,(e=>{this._setTemplateFromNodes(e.addedNodes)})),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{}))}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter((e=>e.localName&&"template"===e.localName))[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),no(this,(()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)})),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,r=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",r),delete this[i])};this[i]=r,this.addEventListener("animationend",r)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter((e=>e instanceof el&&!e.hasAttribute("closing"))).sort(((e,t)=>e.__zIndex-t.__zIndex||0))}get _last(){return this===el.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),el.__attachedInstances.forEach((e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=el.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach((e=>{e.parentNode===this.content&&this.content.removeChild(e)})),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Zo(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const i=e._templateRoot||(e._templateRoot=e.getRootNode());if(i!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(i.querySelectorAll("style")).reduce(((e,t)=>e+t.textContent),"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(i.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=Ja[e]||Za(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this.template=void 0:i!==r&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,r,n,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const s=this._oldOwner!==i||this._oldModel!==r;this._oldModel=r,this._oldOwner=i;const a=this._oldInstanceProps!==n||this._oldTemplate!==e;this._oldInstanceProps=n,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==o;if(this._oldOpened=o,e&&a)this._stampOverlayTemplate(e,n);else if(t&&(l||d||s)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);o&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return Xa.call(e,"input, select, textarea, button, object")?Xa.call(e,":not([disabled])"):Xa.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&Xa.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const i=e,r=this._normalizedTabIndex(i);let n,o=r>0;if(r>=0&&t.push(i),n="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children,n)for(let e=0;e<n.length;e++)o=this._collectTabbableNodes(n[e],t)||o;return o}static _isVisible(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)}static _sortByTabIndex(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2),r=this._sortByTabIndex(e.slice(0,i)),n=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(r,n)}static _mergeSortByTabIndex(e,t){const i=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}static _hasLowerTabOrder(e,t){const i=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return 0===i||0===r?r>i:i>r}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=el.__attachedInstances.filter((e=>e!==this)).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(el.is,el);const tl=document.createElement("template");tl.innerHTML='<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(tl.content);class il extends el{static get is(){return"vaadin-select-overlay"}}let rl;customElements.define(il.is,il);class nl extends Pa{static get is(){return"vaadin-select-text-field"}static get template(){if(super.template.content.querySelector('slot[name="input"]'))return super.template;if(!rl){rl=super.template.cloneNode(!0);const e=document.createElement("slot");e.setAttribute("name","value");const t=rl.content.querySelector("input");t.parentElement.replaceChild(e,t),e.appendChild(t)}return rl}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(nl.is,nl);let ol,sl=e=>e;const al=document.createElement("template");al.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-select-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(al.content);class ll extends(rn(Vr(Rr(function(e,t){return Lo({},Eo(t),e)}(qa,Wi))))){static get template(){return At(ol||(ol=sl`
    <style>
      :host {
        display: inline-block;
      }

      vaadin-select-text-field {
        width: 100%;
        min-width: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="toggle-button"] {
        font-family: "vaadin-select-icons";
      }

      [part="toggle-button"]::before {
        content: "\\e900";
      }
    </style>

    <vaadin-select-text-field placeholder="[[placeholder]]" label="[[label]]" required="[[required]]" invalid="[[invalid]]" error-message="[[errorMessage]]" readonly\$="[[readonly]]" helper-text="[[helperText]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>
      <div part="value"></div>
      <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
    </vaadin-select-text-field>
    <vaadin-select-overlay opened="{{opened}}" with-backdrop="[[_phone]]" phone\$="[[_phone]]" theme\$="[[theme]]"></vaadin-select-overlay>

    <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
`))}static get is(){return"vaadin-select"}static get version(){return"2.4.0"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._valueElement=this.shadowRoot.querySelector('[part="value"]'),this._toggleElement=this.shadowRoot.querySelector('[part="toggle-button"]'),this._nativeInput=this.focusElement.shadowRoot.querySelector("input"),this._nativeInput.setAttribute("aria-hidden",!0),this._nativeInput.setAttribute("tabindex",-1),this._nativeInput.style.pointerEvents="none",this.focusElement.addEventListener("click",(e=>this.opened=!this.readonly)),this.focusElement.addEventListener("keydown",(e=>this._onKeyDown(e))),this._observer=new uo(this,(e=>this._setTemplateFromNodes(e.addedNodes))),this._observer.flush()}_setTemplateFromNodes(e){const t=Array.from(e).filter((e=>e.localName&&"template"===e.localName))[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=t,this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){const e=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;this._overlayElement._instance&&(this._overlayElement._instance.forwardHostProp=(...t)=>{e.apply(this._overlayElement._instance,t),setTimeout((()=>{this._updateValueSlot()}))},this._assignMenuElement())}}render(){this._overlayElement.render(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items)}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this._contentTemplate=void 0:i!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i){if(i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for select content");this._oldTemplate=e,this._oldRenderer=t,t&&(i.setProperties({owner:this,renderer:t}),this.render(),i.content.firstChild&&this._assignMenuElement())}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter((e=>"style"!==e.localName))[0],this._menuElement&&(this._menuElement.addEventListener("items-changed",(e=>{this._items=this._menuElement.items,this._items.forEach((e=>e.setAttribute("role","option")))})),this._menuElement.addEventListener("selected-changed",(e=>this._updateValueSlot())),this._menuElement.addEventListener("keydown",(e=>this._onKeyDownInside(e))),this._menuElement.addEventListener("click",(e=>{this.__userInteraction=!0,this.opened=!1}),!0),this._menuElement.setAttribute("role","listbox"))}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_requiredChanged(e){this.setAttribute("aria-required",e)}_valueChanged(e,t){""===e?this.focusElement.removeAttribute("has-value"):this.focusElement.setAttribute("has-value",""),""===e&&void 0===t||this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened)if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){const t=this._menuElement.selected,i=void 0!==t?t:-1,r=this._menuElement._searchKey(i,e.key);r>=0&&(this.__userInteraction=!0,this._updateSelectedItem(this._items[r].value,this._items))}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly)return void(this.opened=!1);this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring"),this._menuElement.focus(),this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0)}else t&&(this._phone?this._setFocused(!1):(this.focusElement.focus(),this._openedWithFocusRing&&this.focusElement.setAttribute("focus-ring","")),this.validate(),window.removeEventListener("scroll",this._boundSetPosition,!0))}_hasContent(e){return!!e&&Boolean(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()||e.children.length)}_attachSelectedItem(e){if(!e)return;let t;e.hasAttribute("label")?(t=document.createElement("vaadin-item"),t.textContent=e.getAttribute("label")):t=e.cloneNode(!0),t._sourceItem=e,t.removeAttribute("tabindex"),t.removeAttribute("role"),this._valueElement.appendChild(t),t.selected=!0}_updateAriaExpanded(e,t,i){t&&t.setAttribute("aria-expanded",e),i&&i.focusElement&&i.focusElement.setAttribute("aria-expanded",e)}_updateValueSlot(){this.opened=!1,this._valueElement.innerHTML="";const e=this._items[this._menuElement.selected],t=this._hasContent(e),i=this._inputElement.shadowRoot.querySelector('slot[name="input"]')?"input":"value";this._valueElement.slot=t?i:"",t&&window.ShadyDOM&&window.ShadyDOM.flush(),this._attachSelectedItem(e),!this._valueChanging&&e&&(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging)}_updateSelectedItem(e,t){t&&(this._menuElement.selected=t.reduce(((t,i,r)=>void 0===t&&i.value===e?r:t),void 0),this._selectedChanging||(this._valueChanging=!0,this._updateValueSlot(),delete this._valueChanging))}_setFocused(e){super._setFocused(this.opened||e),this.focusElement._setFocused(this.hasAttribute("focused")),!this.hasAttribute("focused")&&this.validate()}_setPosition(){const e=this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect(),t=Math.min(window.innerHeight,document.documentElement.clientHeight),i=e.top>(t-e.height)/2;"rtl"===this.getAttribute("dir")?this._overlayElement.style.right=document.documentElement.clientWidth-e.right+"px":this._overlayElement.style.left=e.left+"px",i?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=t-e.bottom+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=e.top+"px"),this._overlayElement.updateStyles({"--vaadin-select-text-field-width":e.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}customElements.define(ll.is,ll);let dl;const cl=At(dl||(dl=(e=>e)`<dom-module id="lumo-radio-button" theme-for="vaadin-radio-button">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="radio"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: 50%;
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        will-change: transform;
        line-height: 1.2;
        transform: translateZ(0); /* Workaround IE11 jumpiness */
      }

      /* Used for activation "halo" */
      [part="radio"]::before {
        /* Needed to align the radio-button nicely on the baseline */
        content: "\\2003";
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
        will-change: transform, opacity;
      }

      /* Used for the dot */
      [part="radio"]::after {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid var(--lumo-primary-contrast-color);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: 0.25s transform;
        will-change: transform;
        background-clip: content-box;
      }

      :host([checked]) [part="radio"] {
        background-color: var(--lumo-primary-color);
      }

      :host([checked]) [part="radio"]::after {
        transform: translate(-50%, -50%) scale(1);
      }

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="radio"] {
        background-color: var(--lumo-contrast-30pct);
      }

      :host([active]) [part="radio"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="radio"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="radio"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }

      :host([focus-ring]) [part="radio"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="radio"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="radio"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      /* IE11 only */
      ::-ms-backdrop,
      [part="radio"] {
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(cl.content);let hl,ul=e=>e;class pl extends(rn(Vr(Rr(Nr(Wi))))){static get template(){return At(hl||(hl=ul`
    <style>
      :host {
        display: inline-block;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="radio"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="radio"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="radio">
        <input type="radio" checked="[[checked]]" disabled\$="[[disabled]]" role="presentation" on-change="_onChange" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`))}static get is(){return"vaadin-radio-button"}static get version(){return"1.5.1"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},name:String,value:{type:String,value:"on"}}}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),/^(disabled|checked)$/.test(e)){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.shadowRoot&&parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],10)){const e="-webkit-backface-visibility";this.shadowRoot.querySelectorAll("*").forEach((t=>{t.style[e]="visible",t.style[e]=""}))}}}ready(){super.ready(),this.setAttribute("role","radio"),this._addListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.setAttribute("aria-checked",e)}_addListeners(){this._addEventListenerToNode(this,"down",(e=>{this.disabled||this.setAttribute("active","")})),this._addEventListenerToNode(this,"up",(e=>{this.removeAttribute("active"),this.checked||this.disabled||this.click()})),this.addEventListener("keydown",(e=>{this.disabled||32!==e.keyCode||(e.preventDefault(),this.setAttribute("active",""))})),this.addEventListener("keyup",(e=>{this.disabled||32!==e.keyCode||(e.preventDefault(),this.click(),this.removeAttribute("active"))}))}click(){this.disabled||this.shadowRoot.querySelector("input").dispatchEvent(new MouseEvent("click"))}get focusElement(){return this.shadowRoot.querySelector("input")}_onChange(e){this.checked=e.target.checked;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}}customElements.define(pl.is,pl);let ml;const gl=At(ml||(ml=(e=>e)`<dom-module id="lumo-radio-group" theme-for="vaadin-radio-group">
  <template>
    <style include="lumo-required-field">
      :host {
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-size-m);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([theme~="vertical"]) [part="group-field"] {
        display: flex;
        flex-direction: column;
      }

      [part="label"] {
        padding-bottom: 0.7em;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="group-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(gl.content);let fl,_l=e=>e;class vl extends(Rr(Gr(Wi))){static get template(){return At(fl||(fl=_l`
    <style>
      :host {
        display: inline-flex;

        /* Prevent horizontal overflow in IE 11 instead of wrapping radios */
        max-width: 100%;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-group-field-container {
        display: flex;
        flex-direction: column;

        /* Prevent horizontal overflow in IE 11 instead of wrapping radios */
        width: 100%;
      }

      [part="label"]:empty {
        display: none;
      }
    </style>

    <div class="vaadin-group-field-container">
      <label part="label">[[label]]</label>

      <div part="group-field">
        <slot id="slot"></slot>
      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]" aria-live="assertive" aria-hidden\$="[[_getHelperTextAriaHidden(helperText, _helperTextId, _hasSlottedHelper)]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>
    </div>
`))}static get is(){return"vaadin-radio-group"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},readonly:{type:Boolean,reflectToAttribute:!0,observer:"_readonlyChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},_errorId:{type:String},_helperTextId:{type:String},_hasSlottedHelper:Boolean,_checkedButton:{type:Object},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},value:{type:String,notify:!0,observer:"_valueChanged"}}}ready(){super.ready(),this._addListeners(),this._observer=new uo(this,(e=>{const t=e=>{e.target.checked&&this._changeSelectedButton(e.target)};this._filterRadioButtons(e.addedNodes).reverse().forEach((e=>{e.addEventListener("checked-changed",t),this.disabled&&(e.disabled=!0),e.checked&&this._changeSelectedButton(e)})),this._filterRadioButtons(e.removedNodes).forEach((e=>{e.removeEventListener("checked-changed",t),e==this._checkedButton&&(this.value=void 0)})),this._setOrToggleHasHelperAttribute()})),this._radioButtons.length&&this._setFocusable(0),this.setAttribute("role","radiogroup");const e=vl._uniqueId=1+vl._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._helperTextId=`${this.constructor.is}-helper-${e}`}get _radioButtons(){return this._filterRadioButtons(this.querySelectorAll("*"))}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused")}_filterRadioButtons(e){return Array.from(e).filter((e=>e instanceof pl))}_disabledChanged(e){this.setAttribute("aria-disabled",e),this._updateDisableButtons()}_updateDisableButtons(){this._radioButtons.forEach((e=>{this.disabled?e.disabled=!0:this.readonly?e.disabled=e!==this._checkedButton&&this.readonly:e.disabled=!1}))}_readonlyChanged(e,t){(e||t)&&this._updateDisableButtons()}_addListeners(){this.addEventListener("keydown",(e=>{var t=e.target==this?this._checkedButton:e.target;const i="rtl"===this.getAttribute("dir")&&"vertical"!==this.theme;37!==e.keyCode&&38!==e.keyCode||(e.preventDefault(),this._selectIncButton(i,t)),39!==e.keyCode&&40!==e.keyCode||(e.preventDefault(),this._selectIncButton(!i,t))})),this.addEventListener("focusin",(()=>this._setFocused(this._containsFocus()))),this.addEventListener("focusout",(e=>{e.composed&&this.validate(),this._setFocused(!1)}))}_selectIncButton(e,t){e?this._selectNextButton(t):this._selectPreviousButton(t)}_selectButton(e,t){this._containsFocus()&&(e.focus(),t&&e.setAttribute("focus-ring","")),this._changeSelectedButton(e,t)}_containsFocus(){const e=this.getRootNode(),t=void 0!==e._activeElement?e._activeElement:e.activeElement;return this.contains(t)}_hasEnabledButtons(){return!this._radioButtons.every((e=>e.disabled))}_selectNextButton(e){if(this._hasEnabledButtons()){var t=e.nextElementSibling||this.firstElementChild;t.disabled?this._selectNextButton(t):this._selectButton(t,!0)}}_selectPreviousButton(e){if(this._hasEnabledButtons()){var t=e.previousElementSibling||this.lastElementChild;t.disabled?this._selectPreviousButton(t):this._selectButton(t,!0)}}_changeSelectedButton(e,t){this._checkedButton!==e&&(this._checkedButton=e,this._checkedButton&&(this.value=this._checkedButton.value),this._radioButtons.forEach((e=>{e===this._checkedButton?t?e.click():e.checked=!0:e.checked=!1})),this.validate(),this.readonly&&this._updateDisableButtons(),e&&this._setFocusable(this._radioButtons.indexOf(e)))}_valueChanged(e,t){if(t&&(""===e||null==e))return this._changeSelectedButton(null),void this.removeAttribute("has-value");if(!this._checkedButton||e!=this._checkedButton.value){const t=this._radioButtons.filter((t=>t.value==e))[0];t?(this._selectButton(t),this.setAttribute("has-value","")):console.warn(`No <vaadin-radio-button> with value ${e} found.`)}}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}_setFocusable(e){const t=this._radioButtons;t.forEach((i=>i.tabindex=i===t[e]?0:-1))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e)}_setOrToggleAttribute(e,t){e&&(t?this.setAttribute(e,"boolean"==typeof t?"":t):this.removeAttribute(e))}_setOrToggleHasHelperAttribute(){const e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes();this._hasSlottedHelper=e.filter((e=>3!==e.nodeType)).length>0,this._setOrToggleAttribute("has-helper",this._hasSlottedHelper?"slotted":!!this.helperText)}_getActiveErrorId(e,t,i){return t&&e?i:void 0}_getErrorMessageAriaHidden(e,t,i){return(!this._getActiveErrorId(e,t,i)).toString()}_getHelperTextAriaHidden(e,t,i){return(!(e||i)).toString()}}customElements.define(vl.is,vl);let bl,yl,Al=e=>e,wl=class extends le{constructor(){super(...arguments),this.show=!1,this.column="name",this.isAscending=!1,this.handleClose=()=>{const e=new CustomEvent("of:close-settings");this.dispatchEvent(e)},this.handleSortChange=e=>{this.column=e.target.value,this.triggerSortChange()},this.handeOrderChange=e=>{console.log(e.target.value),this.isAscending="asc"===e.target.value,this.triggerSortChange()},this.handleThumbSize=e=>{const t=new CustomEvent("op:thumbchange",{detail:e.target.value});this.dispatchEvent(t)}}triggerSortChange(){const e=new CustomEvent("op:sortfield",{detail:{column:this.column,isAscending:this.isAscending}});this.dispatchEvent(e)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",(e=>{"Escape"===e.key&&this.show&&this.handleClose()}))}render(){return V(bl||(bl=Al` <div class="${0}"> <div class="actions"> <iron-icon icon="close" @click="${0}"></iron-icon> </div> <div class="center"> <vaadin-select label="Sort By" @change="${0}" value="name"> <template> <vaadin-list-box> <vaadin-item value="name">File Name</vaadin-item> <vaadin-item value="size">File Size</vaadin-item> <vaadin-item value="modified">Date</vaadin-item> </vaadin-list-box> </template> </vaadin-select> <div> <vaadin-radio-group label="Sort order" @change="${0}"> <vaadin-radio-button value="asc" checked="checked">Ascending</vaadin-radio-button> <vaadin-radio-button value="desc">Descending</vaadin-radio-button> </vaadin-radio-group> </div> <label>Thumbnail Size</label> <input type="range" @change="${0}" min="8" max="24" step="2" value="15"> </div> </div>`),`drawer ${this.show&&"visible"}`,this.handleClose,this.handleSortChange,this.handeOrderChange,this.handleThumbSize)}};wl.styles=se(yl||(yl=Al`:host{z-index:99}.center{padding:10px;display:flex;justify-content:center;flex-direction:column}.drawer{position:absolute;right:0;border:0;top:0;min-width:200px;width:20%;height:100%;z-index:999;background:#fff;border-left:1px solid #f1f1f1;box-shadow:0 2px 8px rgba(0,0,0,.3);transform:translateX(100%);transition:transform .2s ease-out}.drawer.visible{transform:translateX(0)}.actions{padding:10px;width:100%;border-bottom:1px solid #ddd}`)),i([Z({type:Boolean})],wl.prototype,"show",void 0),i([Z({type:String})],wl.prototype,"column",void 0),i([Z({type:Boolean})],wl.prototype,"isAscending",void 0),wl=i([K("of-settings")],wl);let Cl;const xl=At(Cl||(Cl=(e=>e)`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-indeterminate {
        0% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }

      /* RTL specific styles */

      :host([indeterminate][dir="rtl"]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      :host(:not([aria-valuenow])[dir="rtl"]) [part="value"]::before,
      :host([indeterminate][dir="rtl"]) [part="value"]::before {
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      @keyframes vaadin-progress-indeterminate-rtl {
        0% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      /* Contrast color */

      :host([theme~="contrast"][dir="rtl"]) [part="value"],
      :host([theme~="contrast"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"][dir="rtl"]) [part="value"],
      :host([theme~="error"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"][dir="rtl"]) [part="value"],
      :host([theme~="success"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`));document.head.appendChild(xl.content);const Sl=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,i){const r=this._normalizeValue(e,t,i);this.style.setProperty("--vaadin-progress-value",r),this.updateStyles({"--vaadin-progress-value":String(r)})}_valueChanged(e,t){this.setAttribute("aria-valuenow",e)}_minChanged(e,t){this.setAttribute("aria-valuemin",e)}_maxChanged(e,t){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,i){let r;return e||0==e?t>=i?r=1:(r=(e-t)/(i-t),r=Math.min(Math.max(r,0),1)):r=0,r}};let El,zl=e=>e;class Ml extends(rn(Rr(Sl(Wi)))){static get template(){return At(El||(El=zl`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"] {
        transform-origin: 100% 50%;
      }
    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`))}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(Ml.is,Ml);let Pl;const Tl=At(Pl||(Pl=(e=>e)`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`));document.head.appendChild(Tl.content);const Ol=document.createElement("template");Ol.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Ol.content);let Il,kl=e=>e;class Ll extends(Rr(Wi)){static get template(){return At(Il||(Il=kl`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`))}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const i=Boolean(e);this.hasAttribute(t)!==i&&(i?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(Ll.is,Ll);let Hl,Nl=e=>e;class Dl extends(rn(Rr(Wi))){static get template(){return At(Hl||(Hl=Nl`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`))}static get is(){return"vaadin-upload"}static get version(){return"4.4.1"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),r=Math.max(0,Math.min(3,i-1));return parseFloat((e/Math.pow(t,i)).toFixed(r))+" "+this.i18n.units.size[i]}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(var r=0;r<t.length&&e>0;r++)i[r]=e%t[r],e=Math.floor(e/t[r]);return i}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map((e=>(e<10?"0":"")+e)).join(":")}_formatFileProgress(e){return e.totalStr+": "+e.progress+"% ("+(e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(var t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,r){e.elapsed=r,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(r*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/r/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter((e=>!e.complete)),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr(e);let r,n;i.upload.onprogress=o=>{clearTimeout(r),n=Date.now();const s=(n-t)/1e3,a=o.loaded,l=o.total,d=~~(a/l*100);e.loaded=a,e.progress=d,e.indeterminate=a<=0||a>=l,e.error?e.indeterminate=e.status=void 0:e.abort||(d<100?(this._setStatus(e,l,a,s),r=setTimeout((()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)}),2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing,e.uploading=!1)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(4==i.readyState){if(clearTimeout(r),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);e.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0})))return;0===i.status?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent("upload-"+(e.error?"error":"success"),{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)}};const o=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName;if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0})))return;o.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)};this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:o},cancelable:!0}))&&i.send(o)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){var t="files."+this.files.indexOf(e)+".";for(var i in e)e.hasOwnProperty(i)&&this.notifyPath(t+i,e[i])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=e.name.match(/\.[^\.]*$|$/)[0],i=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||i.test(e.type)||i.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.unshift("files",e),this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&this.splice("files",this.files.indexOf(e),1)}_onAddFilesTouchEnd(e){e.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){vr.mouse.mouseIgnoreJob&&vr.mouse.mouseIgnoreJob.flush()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1==e?t.one:t.many}_isMultiple(e){return 1!=e}}customElements.define(Dl.is,Dl);let Rl,Fl,Vl=e=>e,Bl=class extends le{constructor(){super(...arguments),this.opened=!1,this.context={path:"/"},this.imagePath="",this.serverURL="",this.onFileUpload=e=>{if(this.vaadinUpload.files.map((e=>!e.complete)).length===this.vaadinUpload.files.length){this.vaadinUpload.files=[];const t=new CustomEvent("onsubmit",{detail:e});this.dispatchEvent(t)}}}render(){const e=`${this.serverURL}/replace?path=${this.imagePath}`;return V(Rl||(Rl=Vl` <mwc-dialog .open="${0}"> <vaadin-upload style="overflow:visible" data-action="edit" type="file" accept="image/*" max-files="1" .target="${0}" .headers="${0}" @upload-success="${0}"> </vaadin-upload> </mwc-dialog>`),this.opened,e,{path:this.context.path},this.onFileUpload)}};Bl.styles=se(Fl||(Fl=Vl`:host{display:flex}`)),i([ee("vaadin-upload")],Bl.prototype,"vaadinUpload",void 0),i([Z({type:Boolean})],Bl.prototype,"opened",void 0),i([Z({type:Object})],Bl.prototype,"context",void 0),i([Z({type:String})],Bl.prototype,"imagePath",void 0),i([Z({type:String})],Bl.prototype,"serverURL",void 0),Bl=i([K("input-modal-upload")],Bl);let jl;const $l=At(jl||(jl=(e=>e)`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius-s);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild($l.content);let Ul,Yl=e=>e;class ql extends(rn(Vr(Rr(Nr(Wi))))){static get template(){return At(Ul||(Ul=Yl`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`))}static get is(){return"vaadin-checkbox"}static get version(){return"2.5.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",(e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")})),this._addEventListenerToNode(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))})),this.addEventListener("keyup",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))}))}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(ql.is,ql);let Gl;const Xl=At(Gl||(Gl=(e=>e)`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      :host([dir="rtl"][theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      :host([dir="rtl"]) [last-frozen] {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid transparent;
      }

      :host([dir="rtl"][overflow~="right"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-left-color: var(--_lumo-grid-border-color);
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`));document.head.appendChild(Xl.content);const Wl={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:yo(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}};var Ql=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Kl=Ql&&Ql[1]>=8,Jl=Xt,Zl=Wt,ed=Qt;const td=Ho({behaviors:[qa,Wl],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,r){t<this._scrollBottom&&(e=r),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,Jl),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var r=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+r,this._physicalStart=this._physicalStart+r,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var n=this._getReusables(i);i?(this._physicalTop=n.physicalTop,this._virtualStart=this._virtualStart+n.indexes.length,this._physicalStart=this._physicalStart+n.indexes.length):(this._virtualStart=this._virtualStart-n.indexes.length,this._physicalStart=this._physicalStart-n.indexes.length),this._update(n.indexes,i?null:n.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),ed)}},_getReusables:function(e){var t,i,r,n=[],o=this._hiddenContentSize*this._ratio,s=this._virtualStart,a=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,h=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,i=h-d):(t=this._physicalEnd,i=c-u);i-=r=this._getPhysicalSizeIncrement(t),!(n.length>=l||i<=o);)if(e){if(a+n.length+1>=this._virtualCount)break;if(d+r>=h-this._scrollOffset)break;n.push(t),d+=r,t=(t+1)%l}else{if(s-n.length<=0)break;if(d+this._physicalSize-r<=u)break;n.push(t),d-=r,t=0===t?l-1:t-1}return{indexes:n,physicalTop:d-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart),i=(t=this._convertIndexToCompleteRow(t))-this._physicalCount,r=Math.round(.5*this._physicalCount);if(!(i<0)){if(i>0){var n=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var o=0;o<i;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+i),this._update(),this._templateCost=(window.performance.now()-n)/i,r=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===r||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),Zl):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),ed))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._collection=(this.items,null),this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,Jl))},_iterateItems:function(e,t){var i,r,n,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],r=this._computeVidx(i),null!=(n=e.call(this,i,r)))return n}else{for(i=this._physicalStart,r=this._virtualStart;i<this._physicalCount;i++,r++)if(null!=(n=e.call(this,i,r)))return n;for(i=0;i<this._physicalStart;i++,r++)if(null!=(n=e.call(this,i,r)))return n}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){Br();var t=0,i=0,r=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems((function(e,r){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((n*r+t)/this._physicalAverageCount))},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;this._iterateItems((function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!Kl&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Br(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,r=0,n=this._hiddenContentSize;i<e&&r<=n;)r+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),Jl)},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=Qi.debounce(this._debouncers[e],i,t.bind(this)),Ji(this._debouncers[e])}});class id extends td{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(e,t){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI((()=>super.scrollToIndex(e-this._vidxOffset))),this._scrollHandler();const t=Array.from(this.$.items.children).filter((t=>t.index===e))[0];if(t){const e=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(e)>1&&(this.$.table.scrollTop+=e,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){let t,i=0;if(this._iterateItems(((e,r)=>{if(r===this._firstVisibleIndex){const r=this._physicalItems[e];t=r.index,i=r.getBoundingClientRect().top}})),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){const t=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(e,t)}}this._accessIronListAPI((()=>super._itemsChanged({path:"items"}))),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI((()=>this._scrollToIndex(Math.min(e-1,t)))),this._iterateItems(((e,r)=>{const n=this._physicalItems[e];if(n.index===t&&(this.$.table.scrollTop+=Math.round(n.getBoundingClientRect().top-i)),n.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const e=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);n.children[e].focus()}}))),this._assignModels(),requestAnimationFrame((()=>this._update())),this.__updateFooterPositioning(),this._ie&&(this.$.table.style.display="block",setTimeout((()=>{this.$.table.style.display="flex",this._translateStationaryElements()})))}_positionItems(){let e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);let t=this._physicalTop;this._iterateItems(((e,i)=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]})),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=Qi.debounce(this._debounceIncreasePool,Xt,(()=>{this._updateMetrics();const e=this._optPhysicalSize-this._physicalSize;let t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes())}))):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){const e=Array.from(this.$.items.childNodes);!!e.reduce(((e,t,i,r)=>{if(0===i||r[i-1].index===t.index-1)return e}),!0)||e.sort(((e,t)=>e.index-t.index)).forEach((e=>this.$.items.appendChild(e)))}_createPool(e){const t=document.createDocumentFragment(),i=this._createScrollerRows(e);i.forEach((e=>t.appendChild(e))),this._getRowTarget().appendChild(t);const r=this.querySelector("[slot]");if(r){const e=r.getAttribute("slot");r.setAttribute("slot","foo-bar"),r.setAttribute("slot",e)}return no(this,(()=>this.notifyResize())),i}_assignModels(e){this._iterateItems(((e,t)=>{const i=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,i),this._updateScrollerItem(i,t+(this._vidxOffset||0))}),e)}_scrollHandler(){const e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const t=this._vidxOffset;this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(e):this._vidxOffset=0,this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);const e=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),t=e*this._effectiveSize;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset||0,t=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)),this._noScale=!0);const r=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=r,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<r&&(this._vidxOffset+=Math.min(r-this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;const t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=Qi.debounce(this._debouncerWarnPrivateAPIAccess,Xt,(()=>this._warnPrivateAPIAccessAsyncEnabled=!0)),t}_debounceRender(e,t){super._debounceRender((()=>this._accessIronListAPI(e)),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI((()=>super.firstVisibleIndex))}get _lastVisibleIndex(){return this._accessIronListAPI((()=>super.lastVisibleIndex))}_scrollToIndex(e){this._accessIronListAPI((()=>this.scrollToIndex(e)))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),Br()}}customElements.define(id.is,id);const rd=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer||e.path||e.header)))).length}_a11yGetFooterRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer)))).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",t+1)))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach((e=>e.setAttribute("aria-selected",Boolean(t))))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach((e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")}))}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach((e=>{e!==t&&e.setAttribute("aria-controls",t.id)}))}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}}))}},nd=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const r=i._content,n=this.getRootNode().activeElement;r.contains(n)&&(!this._ie||this._isFocusable(n))||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){return od(e)}},od=e=>{if(!e.parentNode)return!1;const t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((e=>"cell body-cell"!==e.getAttribute("part"))).indexOf(e);return!e.disabled&&t},sd=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,i){if(i){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){let i=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",i)&&(i=this._filter(i)),this.size=i.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",i)&&(i=i.sort(this._multiSort.bind(this)));const r=e.page*e.pageSize,n=r+e.pageSize;t(i.slice(r,n),i.length)}_checkPaths(e,t,i){if(!i.length)return!1;let r=!0;for(var n in e){const o=e[n].path;if(!o||-1===o.indexOf("."))continue;const s=o.replace(/\.[^\.]*$/,"");void 0===ds.get(s,i[0])&&(console.warn(`Path "${o}" used for ${t} does not exist in all of the items, ${t} is disabled.`),r=!1)}return r}_multiSort(e,t){return this._sorters.map((i=>"asc"===i.direction?this._compare(ds.get(i.path,e),ds.get(i.path,t)):"desc"===i.direction?this._compare(ds.get(i.path,t),ds.get(i.path,e)):0)).reduce(((e,t)=>e||t),0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter(((e,t)=>0===this._filters.filter((t=>{const i=this._normalizeEmptyValue(ds.get(t.path,e)),r=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===i.toString().toLowerCase().indexOf(r)})).length))}},ad=e=>class extends(Nr(e)){ready(){super.ready();const e=this.$.scroller;Er(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",(t=>e.hasAttribute("column-resizing")&&t.preventDefault())),e.addEventListener("contextmenu",(e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault())),e.addEventListener("mousedown",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()))}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let o=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===o.localName;)o=Array.prototype.slice.call(o._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();const s=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));var i=s.filter((e=>e._column===o))[0];if(i.offsetWidth){var r=window.getComputedStyle(i),n=10+parseInt(r.paddingLeft)+parseInt(r.paddingRight)+parseInt(r.borderLeftWidth)+parseInt(r.borderRightWidth)+parseInt(r.marginLeft)+parseInt(r.marginRight);const t=i.offsetWidth+(this.__isRTL?i.getBoundingClientRect().left-e.detail.x:e.detail.x-i.getBoundingClientRect().right);o.width=Math.max(n,t)+"px",o.flexGrow=0}s.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,r){t<r.indexOf(i)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}},ld=class e{constructor(e,t,i){this.grid=e,this.parentCache=t,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter((e=>this.itemCaches[e].isLoading()))[0])}getItemForIndex(e){const{cache:t,scaledIndex:i}=this.getCacheAndIndex(e);return t.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(((e,t)=>{const i=this.itemCaches[t];return i.updateSize(),e+i.effectiveSize}),0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const i=new e(this.grid,this,this.items[t]);this.itemCaches[t]=i,this.grid._loadPage(0,i)}}getCacheAndIndex(e){let t=e;const i=Object.keys(this.itemCaches);for(var r=0;r<i.length;r++){const e=Number(i[r]),n=this.itemCaches[e];if(t<=e)return{cache:this,scaledIndex:t};if(t<=e+n.effectiveSize)return n.getCacheAndIndex(t-e-1);t-=n.effectiveSize}return{cache:this,scaledIndex:t}}},dd=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new ld(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize,this._increasePoolIfNeeded(0),this._debounceIncreasePool&&this._debounceIncreasePool.flush()}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:i,scaledIndex:r}=this._cache.getCacheAndIndex(e),n=i.items[r];n?(this._toggleAttribute("loading",!1,t),this._updateItem(t,n),this._isExpanded(n)&&i.ensureSubCacheForScaledIndex(r)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(r),i))}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(e){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(e){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach((e=>{this.__expandedKeys.add(this.getItemId(e))})))}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e)}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1)}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),i=0;for(;t.parentCache;)t=t.parentCache,i++;return i}_canPopulate(){return Boolean(this._hasData&&this._columnTree)}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this.dataProvider(i,((r,n)=>{void 0!==n?t.size=n:i.parentItem&&(t.size=r.length);const o=Array.from(this.$.items.children).map((e=>e._item));r.forEach(((i,r)=>{const n=e*this.pageSize+r;t.items[n]=i,this._isExpanded(i)&&o.indexOf(i)>-1&&t.ensureSubCacheForScaledIndex(n)})),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=Qi.debounce(this._debouncerApplyCachedData,Gt.after(0),(()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e)})),this._increasePoolIfNeeded(0),this.__scrollToPendingIndex()})),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()}))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new ld(this),Array.from(this.$.items.children).forEach((e=>{Array.from(e.children).forEach((e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)}))})),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Qi.debounce(this._debouncerCheckSize,Gt.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach(((t,r)=>{this._itemsEqual(t,e)&&(i=r)})),i}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}},cd=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return uo.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map((e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e])).reduce(((e,t)=>e.concat(t)),[])}_getColumnTree(){for(var e=[],t=uo.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){var e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new uo(this,(e=>{const t=e.addedNodes.filter((e=>"template"===e.localName&&e.classList.contains("row-details")))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t),(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&this._updateColumnTree(),this._debouncerCheckImports=Qi.debounce(this._debouncerCheckImports,Gt.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(var i=0,r=e.length;i<r;i++)if(e[i]instanceof Array&&t[i]instanceof Array){if(!this._arrayEquals(e[i],t[i]))return!1}else if(e[i]!=t[i])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((e=>{var t=this.querySelector(e);!t||t instanceof Wi||console.warn(`Make sure you have imported the required module for <${e}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((e=>this._updateFirstAndLastColumnForRow(e)))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,i)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===i.length-1,e)}))}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}},hd=e=>class extends e{getEventContext(e){const t={},i=e.composedPath(),r=i[i.indexOf(this.$.table)-3];return r?(t.section=["body","header","footer","details"].filter((e=>r.getAttribute("part").indexOf(e)>-1))[0],r._column&&(t.column=r._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(r.parentElement)),t):t}},ud=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){-1===this._filters.indexOf(e.target)&&this._filters.push(e.target),e.stopPropagation(),this.dataProvider&&this.clearCache()}_mapFilters(){return this._filters.map((e=>({path:e.path,value:e.value})))}};class pd extends class extends Wi{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame((()=>this.notifyPath("_templateInstances.*",this._templateInstances))))}removeInstance(e){const t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=Zo(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach((i=>i.notifyPath(e,t)))},notifyInstanceProp:function(e,t,i){if("index"===t||"item"===t)return;const r=`__${t}__`;if(e[r]===i)return;e[r]=i;const n=Array.from(this._grid.$.items.children).filter((t=>this._grid._itemsEqual(t._item,e.item)))[0];n&&Array.from(n.children).forEach((e=>{e._instance&&(e._instance[r]=i,e._instance.notifyPath(t,i))}));const o="item.";if(Array.isArray(this._grid.items)&&0===t.indexOf(o)){const r=this._grid.items.indexOf(e.item),n=t.slice(o.length);this._grid.notifyPath(`items.${r}.${n}`,i)}const s=`_${t}InstanceChangedCallback`;this._grid&&this._grid[s]&&this._grid[s](e,i)}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach((i=>i.notifyPath(e,t)))}_templateInstancesChanged(e,t){let i,r;if("_templateInstances"===e.path)i=0,r=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;i=e.value.index,r=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach((e=>{for(var t=i;t<i+r;t++)this._templateInstances[t].set(e,this._parentPathValues[e])}))}}customElements.define(pd.is,pd);const md=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){var i=new pd;i._grid=this,i.dataHost=this.dataHost,i.template=e,e.templatizer=i}this._columnTree&&Array.from(this.$.items.children).forEach((e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance})),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e,t,i){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach((e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)}))}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');if(!i)return;const r=!this._isDetailsOpened(t),n=!!i.hidden!==r;(i._instance||i._renderer)&&i.hidden===r||(i.hidden=r,r?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(i._renderer=this.rowDetailsRenderer,i._renderer.call(this,i._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!i._instance&&(i._instance=this._rowDetailsTemplate.templatizer.createInstance(),i._content.innerHTML="",i._content.appendChild(i._instance.root),this._updateItem(e,t)),Br(),e.style.setProperty("padding-bottom",`${i.offsetHeight}px`),requestAnimationFrame((()=>this.notifyResize())))),n&&(this._updateMetrics(),this._positionItems())}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach((e=>{e.parentElement.style.setProperty("padding-bottom",`${e.offsetHeight}px`)}))}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e)}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(e,t){super._detailsOpenedInstanceChangedCallback&&super._detailsOpenedInstanceChangedCallback(e,t),t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}},gd=e=>class extends e{get _timeouts(){return{SCROLLING:500,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.addEventListener("wheel",this._onWheel),this.$.items.addEventListener("focusin",(e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]})),this.$.items.addEventListener("focusout",(()=>this._rowWithFocusedElement=void 0)),this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout((()=>this._reorderRows()),this._timeouts.SCROLLING))}))}scrollToIndex(e){this._accessIronListAPI((()=>super.scrollToIndex(e)))}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;const t=this.$.table;let i=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?i*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(i*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=i,void e.preventDefault();i+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=Qi.debounce(this._debouncerWheelAnimationFrame,Xt,(()=>this._wheelAnimationFrame=!1));var r=Math.abs(e.deltaX)+Math.abs(i);this._canScroll(t,e.deltaX,i)?(e.preventDefault(),t.scrollTop+=i,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Qi.debounce(this._debouncerIgnoreNewWheel,Gt.after(this._timeouts.IGNORE_WHEEL),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(e,t,i){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this._toggleAttribute("scrolling",!0,this.$.scroller)))),this._debounceScrolling=Qi.debounce(this._debounceScrolling,Gt.after(this._timeouts.SCROLLING),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this._reorderRows()}))}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=Qi.debounce(this._debounceOverflow,Xt,(()=>{const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}))}_reorderRows(){if(this.__mouseDown)return void(this.__pendingReorder=!0);const e=this.$.items,t=e.querySelectorAll("tr");if(!t.length)return;const i=this._virtualStart+this._vidxOffset,r=this._rowWithFocusedElement||Array.from(t).filter((e=>!e.hidden))[0];if(!r)return;const n=r.index-i,o=Array.from(t).indexOf(r)-n;if(o>0)for(let i=0;i<o;i++)e.appendChild(t[i]);else if(o<0)for(let i=t.length+o;i<t.length;i++)e.insertBefore(t[i],t[0]);if(this._safari){const{transform:e}=this.$.header.style;this.$.header.style.transform="",setTimeout((()=>this.$.header.style.transform=e))}}_frozenCellsChanged(){this._debouncerCacheElements=Qi.debounce(this._debouncerCacheElements,Qt,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()})),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort(((e,t)=>e._order-t._order));const t=e.reduce(((e,t,i)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?i:e)),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}_translateStationaryElements(){const e=Math.max(0,this._scrollLeft),t=Math.max(0,this._scrollTop);let i=0,r=0,n=0;if(this._useSticky||(i=e,r=t,n=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+i,r),this.$.footer.style.transform=this._getTranslate(-e+i,r+n),this.$.items.style.transform=this._getTranslate(-e+i,0),this._frozenCells.length>0){const e=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft;for(var o=this._getTranslate(e,0),s=0;s<this._frozenCells.length;s++)this._frozenCells[s].style.transform=o}}_getTranslate(e,t){return`translate(${e}px, ${t}px)`}},fd=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e)}deselectItem(e){const t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1)}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach((e=>{this._updateItem(e,e._item)}))}_selectedInstanceChangedCallback(e,t){super._selectedInstanceChangedCallback&&super._selectedInstanceChangedCallback(e,t),t?this.selectItem(e.item):this.deselectItem(e.item)}},_d=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged),window.ShadyDOM&&Qt.run((()=>{const e=this.querySelectorAll("vaadin-grid-sorter");Array.from(e).forEach((e=>{e instanceof Wi&&e.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}))}))}_onSorterChanged(e){const t=e.target;this._removeArrayItem(this._sorters,t),t._order=null,this.multiSort?(t.direction&&this._sorters.unshift(t),this._sorters.forEach(((e,t)=>e._order=this._sorters.length>1?t:null),this)):t.direction&&(this._sorters.forEach((e=>{e._order=null,e.direction=null})),this._sorters=[t]),e.stopPropagation(),this.dataProvider&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map((e=>({path:e.path,direction:e.direction})))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}},vd=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(e){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>this._generateCellClassNames(e,this.__getRowModel(e))))}_generateCellClassNames(e,t){Array.from(e.children).forEach((e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.remove(t))),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=i&&i.split(" ").filter((e=>e.length>0)),e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.add(t)))}}))}},bd="between",yd="on-top-or-between",Ad="on-grid",wd="on-top",Cd="above",xd="below",Sd="empty",Ed=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())}))}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(e)[1],t.style.transform="none",requestAnimationFrame((()=>{t.style.top="",t.style.transform=e}))}const i=t.getBoundingClientRect();window.ShadyDOM||(this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top));let r=[t];this._isSelected(t._item)&&(r=this.__getViewportRows().filter((e=>this._isSelected(e._item))).filter((e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e))))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),t.setAttribute("dragstart",r.length>1?r.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-i.left+20+"px","--_grid-drag-start-y":e.clientY-i.top+10+"px"}),requestAnimationFrame((()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})}));const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:r.map((e=>e._item)),setDragData:(t,i)=>e.dataTransfer.setData(t,i),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().filter((e=>"tr"===e.localName))[0];if(this._effectiveSize&&this.dropMode!==Ad)if(t&&t.parentNode===this.$.items){const i=t.getBoundingClientRect();if(this._dropLocation=wd,this.dropMode===bd){const t=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=t?Cd:xd}else this.dropMode===yd&&(e.clientY-i.top<i.height/3?this._dropLocation=Cd:e.clientY-i.top>i.height/3*2&&(this._dropLocation=xd))}else{if(t)return;if(this.dropMode!==bd&&this.dropMode!==yd)return;t=Array.from(this.$.items.children).filter((e=>!e.hidden)).pop(),this._dropLocation=xd}else this._dropLocation=Sd;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===Sd?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,r=t-e+this.__dndAutoScrollThreshold,n=e-i+this.__dndAutoScrollThreshold;let o=0;if(n>0?o=2*n:r>0&&(o=2*-r),o){const e=this.$.table.scrollTop;this.$.table.scrollTop+=o;if(e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>this.__dndAutoScrolling=!1),20),this._scrollHandler(),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((i=>{const r=i.getBoundingClientRect();return r.bottom>e&&r.top<t}))}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach((e=>e.removeAttribute("dragover")))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map((t=>({type:t,data:e.dataTransfer.getData(t)})));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map((e=>Array.from(e.children).filter((e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell"))).sort(((e,t)=>e._column._order>t._column._order?1:-1)).map((e=>e._content.textContent.trim())).filter((e=>e)).join("\t"))).join("\n")}_dragDropAccessChanged(e,t,i,r){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._filterDragAndDrop(e,this.__getRowModel(e))}))}_filterDragAndDrop(e,t){const i=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),r=!this.dropMode||this.dropFilter&&!this.dropFilter(t);(window.ShadyDOM?[e]:Array.from(e.children).map((e=>e._content))).forEach((e=>{i?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)})),this._toggleAttribute("drag-disabled",i,e),this._toggleAttribute("drop-disabled",r,e)}},zd=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",(()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0})),this.addEventListener("mouseup",(()=>this._isMousedown=!1)))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&e.setAttribute("tabindex","0")}_onKeyDown(e){let t,i=e.key;switch("Up"!==i&&"Down"!==i&&"Left"!==i&&"Right"!==i||(i="Arrow"+i),"Esc"===i&&(i="Escape"),"Spacebar"===i&&(i=" "),i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":t="Navigation";break;case"Enter":case"Escape":case"F2":t="Interaction";break;case"Tab":t="Tab";break;case" ":t="Space"}this._detectInteracting(e),this.hasAttribute("interacting")&&"Interaction"!==t&&(t=void 0),t&&this[`_on${t}KeyDown`](e,i)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter((t=>t.index===e))[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function i(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}this._scrollHandler(),e.preventDefault();const r=this._lastVisibleIndex-this._firstVisibleIndex-1;let n=0,o=0;switch(t){case"ArrowRight":n=this.__isRTL?-1:1;break;case"ArrowLeft":n=this.__isRTL?1:-1;break;case"Home":n=-1/0,e.ctrlKey&&(o=-1/0);break;case"End":n=1/0,e.ctrlKey&&(o=1/0);break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=r;break;case"PageUp":o=-r}const s=e.composedPath()[0],a=i(s),l=this._elementMatches(s,'[part~="details-cell"]'),d=s.parentNode,c=d.parentNode,h=(c===this.$.items?this._effectiveSize:c.children.length)-1,u=c===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:d.index:i(d);let p=Math.max(0,Math.min(u+o,h)),m=!1;if(c===this.$.items){const e=d._item,t=this._cache.getItemForIndex(p);m=l?0===o:1===o&&this._isDetailsOpened(e)||-1===o&&p!==u&&this._isDetailsOpened(t),m!==l&&(1===o&&m||-1===o&&!m)&&(p=u)}if(c!==this.$.items)if(p>u)for(;p<h&&c.children[p].hidden;)p++;else if(p<u)for(;p>0&&c.children[p].hidden;)p--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(c,u).filter((e=>!e.hidden))[a]._order);const g=this._getColumns(c,p).filter((e=>!e.hidden)),f=g.map((e=>e._order)).sort(((e,t)=>e-t)),_=f.length-1,v=f.indexOf(f.slice(0).sort(((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder)))[0]),b=0===o&&l?v:Math.max(0,Math.min(v+n,_));b!==v&&(this._focusedColumnOrder=void 0),c===this.$.items&&this._ensureScrolledToIndex(p),this._toggleAttribute("navigating",!0,this);const y=g.reduce(((e,t,i)=>(e[t._order]=i,e)),{})[f[b]],A=c===this.$.items?Array.from(c.children).filter((e=>e.index===p))[0]:c.children[p];if(!A)return;const w=m?Array.from(A.children).filter((e=>this._elementMatches(e,'[part~="details-cell"]')))[0]:A.children[y];if(this._scrollHorizontallyToCell(w),c===this.$.items&&(this._focusedItemIndex=p),c===this.$.items){const e=w.getBoundingClientRect(),t=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;e.bottom>t?(this.$.table.scrollTop+=e.bottom-t,this._scrollHandler()):e.top<i&&(this.$.table.scrollTop-=i-e.top,this._scrollHandler())}w.focus()}_parseEventPath(e){const t=e.indexOf(this.$.table);return{rowGroup:e[t-1],row:e[t-2],cell:e[t-3]}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],r="input"===i.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(i.type);let n;switch(t){case"Enter":n=!this.hasAttribute("interacting")||!r;break;case"Escape":n=!1;break;case"F2":n=!this.hasAttribute("interacting")}const{cell:o}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==n)if(n){const t=o._content.querySelector("[focus-target]")||o._content.firstElementChild;t&&(e.preventDefault(),t.focus(),this._toggleAttribute("interacting",!0,this),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._toggleAttribute("interacting",!1,this),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let r=i.indexOf(e);for(r+=t;r>=0&&r<=i.length-1&&(!i[r]||i[r].parentNode.hidden);)r+=t;return i[r]}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const r=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),r.index!==this._focusedItemIndex){const e=Array.from(r.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).filter((e=>e.index===this._focusedItemIndex))[0];t&&(i=t.children[e])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key))return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const e=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",e,this)}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._toggleAttribute("interacting",!1,this)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){if(this._detectInteracting(e),3===e.composedPath().indexOf(this.$.table)){const t=e.composedPath()[0];this._activeRowGroup=t.parentNode.parentNode,this._activeRowGroup===this.$.header?this._headerFocusable=t:this._activeRowGroup===this.$.items?this._itemsFocusable=t:this._activeRowGroup===this.$.footer&&(this._footerFocusable=t),t._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some((e=>"vaadin-grid-cell-content"===e.localName)),this)}_detectFocusedItemIndex(e){const{rowGroup:t,row:i}=this._parseEventPath(e.composedPath());t===this.$.items&&(this._focusedItemIndex=i.index)}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter((e=>!e.hidden))[0]),this.$.items.firstElementChild){const e=this._iterateItems(((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]}));e&&(this._itemsFocusable=Array.from(e.children).filter((e=>!e.hidden))[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter((e=>!e.hidden))[0])}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this._elementMatches(e,'[part~="details-cell"]'))return;const t=e.getBoundingClientRect(),i=e.parentNode,r=Array.from(i.children).indexOf(e),n=this.$.table.getBoundingClientRect();let o=n.left,s=n.right;for(let e=r-1;e>=0;e--){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){o=t.getBoundingClientRect().right;break}}for(let e=r+1;e<i.children.length;e++){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){s=t.getBoundingClientRect().left;break}}t.left<o&&(this.$.table.scrollLeft+=Math.round(t.left-o)),t.right>s&&(this.$.table.scrollLeft+=Math.round(t.right-s))}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}},Md=e=>class extends(Nr(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),Er(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})}),100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content)return;const r=this.getRootNode().activeElement;if(i._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(r)))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.path||yo(e).path;if(t&&t.filter((e=>e.hasAttribute&&e.hasAttribute("draggable")))[0])return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(i&&-1!==i.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,i),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter((e=>!e.hidden)).sort(((e,t)=>e._order-t._order))}_cellFromPoint(e,t){let i;if(e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller),De?i=this.shadowRoot.elementFromPoint(e,t):(i=document.elementFromPoint(e,t),"vaadin-grid-cell-content"===i.localName&&(i=i.assignedSlot.parentNode)),this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),r=e-i.width/2,n=t-i.height/2,o=parseInt(this._reorderGhost._left||0),s=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(i.left-r),this._reorderGhost._top=s-(i.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){return e.localName?"none"===getComputedStyle(e).display?"":Array.from(e.childNodes).map((e=>this._getInnerText(e))).join(""):e.textContent}_updateGhost(e){const t=this._reorderGhost;t.textContent=this._getInnerText(e._content);const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((e=>t.style[e]=i[e])),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach(((e,t)=>e._order=0)),e[0].forEach(((e,t)=>e._order=(t+1)*this._orderBaseScope)))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter((t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e))).forEach((e=>e._reorderStatus=t))}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,r=e.parentElement===t.parentElement,n=e.frozen===t.frozen;return i&&r&&n}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter((t=>e.contains(t._column)))[0],r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=i.getBoundingClientRect();return n.left>r.left?t>n.right-r.width:t<n.left+r.width}_swapColumnOrders(e,t){const i=e._order;e._order=t._order,t._order=i,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}},Pd=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame((()=>{this._allCells.forEach((e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._findHostGrid()||this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}))})),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((e=>e))}constructor(){super(),this._templateObserver=new uo(this,(e=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()}))}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){const i=new pd;i._grid=this._grid,i.dataHost=this.dataHost,i._instanceProps=t||i._instanceProps,i.template=e,e.templatizer=i}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,i){const r=[t._content,this];i&&i.item&&r.push(i),e.apply(this,r)}__setColumnTemplateOrRenderer(e,t,i){if(e&&t)throw new Error("You should only use either a renderer or a template");i.forEach((i=>{const r=this._grid.__getRowModel(i.parentElement);if(t)i._renderer=t,(r.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,i,r);else if(i._template!==e){i._template=e,i._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;const t=e.templatizer.createInstance();i._content.appendChild(t.root),i._instance=t,r.item&&i._instance.setProperties(r)}}))}_setBodyTemplateOrRenderer(e,t,i,r){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,i)}_setHeaderTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,[i])}_setFooterTemplateOrRenderer(e,t,i){(e||t)&&i&&(this.__setColumnTemplateOrRenderer(e,t,[i]),this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_selectFirstTemplate(e=!1,t=!1){return uo.getFlattenedNodes(this).filter((i=>"template"===i.localName&&i.classList.contains("header")===e&&i.classList.contains("footer")===t))[0]}_findTemplate(e,t){const i=this._selectFirstTemplate(e,t);return i&&this.dataHost&&(i._rootDataHost=this.dataHost._rootDataHost||this.dataHost),i}_flexGrowChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((t=>t.style.flexGrow=e))}_orderChanged(e,t,i,r){this._allCells.forEach((t=>t.style.order=e))}_widthChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((t=>t.style.width=e)),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach((t=>this._toggleAttribute("frozen",e,t))),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach((t=>this._toggleAttribute("last-frozen",e,t))),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,i,r,n,o,s,a,l){const d=void 0!==t;if(!s&&!l&&d&&i&&this.__setTextContent(i._content,t),e&&n.value){if(!o&&!a){const t=(t,i,{item:r})=>this.__setTextContent(t,this.get(e,r));this.__setColumnTemplateOrRenderer(void 0,t,n.value)}s||l||d||!i||null===t||this.__setTextContent(i._content,this._generateHeader(e))}i&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,(e=>e.toUpperCase()))}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}_reorderStatusChanged(e,t,i,r){this._allCells.forEach((t=>t.setAttribute("reorder-status",e)))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach((t=>{if(t){const i=t.querySelector('[part~="resize-handle"]');if(i&&t.removeChild(i),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}}))}_textAlignChanged(e,t,i,r){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let n;"ltr"===getComputedStyle(this._grid).direction?"start"===e?n="left":"end"===e&&(n="right"):"start"===e?n="right":"end"===e&&(n="left"),this._allCells.forEach((t=>{t._content.style.textAlign=e,getComputedStyle(t._content).textAlign!==e&&(t._content.style.textAlign=n)}))}_hiddenChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})),this._grid._debouncerHiddenChanged=Qi.debounce(this._grid._debouncerHiddenChanged,Xt,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class Td extends(Pd(Gr(Wi))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(Td.is,Td);let Od;const Id=document.createElement("dom-module");Id.appendChild(At(Od||(Od=(e=>e)`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~="details-cell"] {
      display: none !important;
    }

    #sizer [part~="cell"][hidden] {
      display: none !important;
    }

    #sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~="cell"]::before {
      content: "-";
    }

    #sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir="rtl"]) #items,
    :host([dir="rtl"]) #header,
    :host([dir="rtl"]) #footer {
      left: auto;
    }

    :host([dir="rtl"]) [part~="reorder-ghost"] {
      left: auto;
      right: 0;
    }

    :host([dir="rtl"]) [part~="resize-handle"] {
      left: 0;
      right: auto;
    }

    :host([dir="rtl"]) [part~="resize-handle"]::before {
      transform: translateX(50%);
    }

    :host([dir="rtl"]) [last-column] [part~="resize-handle"]::before,
    :host([dir="rtl"]) [last-frozen] [part~="resize-handle"]::before {
      left: 0;
      right: auto;
    }
  </style>
`))),Id.register("vaadin-grid-styles");let kd,Ld=e=>e;const Hd=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Nd extends(rn(Rr(dd(sd(cd(nd(gd(fd(_d(md(zd(rd(ud(Md(ad(hd(Ed(vd(id))))))))))))))))))){static get template(){return At(kd||(kd=Ld`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" safari\$="[[_safari]]" ios\$="[[_ios]]" ie\$="[[_ie]]" loading\$="[[loading]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`))}static get is(){return"vaadin-grid"}static get version(){return"5.7.7"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_edge:{type:Boolean,value:"undefined"!=typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:Hd},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"dir"===e&&(this.__isRTL="rtl"===i,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((e=>e.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach((e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0})),e.forEach((e=>{e._currentWidth=0,e._allCells.forEach((t=>{const i=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,i)}))})),e.forEach((e=>{e.width=`${e._currentWidth}px`,e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0}))}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth));this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(var i=0;i<e;i++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}var r,n,o;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>e.notifyPath&&e.notifyPath("_cells.*",e._cells))),r=this,n=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()},Zn||io(),eo.push([r,n,o]),t}_getRowTarget(){return this.$.items}_createCell(e){const t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",t);const r=document.createElement(e);r.id=t.replace("-content-","-"),r.setAttribute("tabindex","-1"),r.setAttribute("role","td"===e?"gridcell":"columnheader");const n=document.createElement("slot");return n.setAttribute("name",t),r.appendChild(n),r._content=i,i.addEventListener("mousedown",(()=>{if(window.chrome){const e=()=>{i.contains(this.getRootNode().activeElement)||r.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout((()=>{i.contains(this.getRootNode().activeElement)||r.focus()}))})),r}_updateRow(e,t,i,r,n){i=i||"body";const o=document.createDocumentFragment();Array.from(e.children).forEach((e=>e._vacant=!0)),e.innerHTML="","sizer"!==e.id&&(e.hidden=!0),t.filter((e=>!e.hidden)).forEach(((t,s,a)=>{let l;if("body"===i){if(t._cells=t._cells||[],l=t._cells.filter((e=>e._vacant))[0],l||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),s===a.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter((e=>e._vacant))[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||o.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1}t.notifyPath&&!n&&t.notifyPath("_cells.*",t._cells)}else{const n="header"===i?"th":"td";r||"vaadin-grid-column-group"===t.localName?(l=t[`_${i}Cell`]||this._createCell(n),l._column=t,e.appendChild(l),t[`_${i}Cell`]=l):(t._emptyCells=t._emptyCells||[],l=t._emptyCells.filter((e=>e._vacant))[0]||this._createCell(n),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=t})),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(i.headerRenderer||i._headerTemplate)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer||i._footerTemplate)return!0}));e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e,t){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach((t=>this._updateRow(t,e[e.length-1],null,!1,!0)));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1))),Array.from(this.$.footer.children).forEach(((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",0===i))),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning()}__updateFooterPositioning(){if(this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`)),this._ios){!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout((()=>this.$.table.style.height=`${this.$.scroller.offsetHeight}px`)))}}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleAttribute("selected",i.selected,e),this._a11yUpdateRowSelected(e,i.selected),this._a11yUpdateRowLevel(e,i.level),this._toggleAttribute("expanded",i.expanded,e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach((e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,i)}else e._instance&&(e._instance.__detailsOpened__=i.detailsOpened,e._instance.__selected__=i.selected,e._instance.__level__=i.level,e._instance.__expanded__=i.expanded,e._instance.setProperties(i))})),this._debouncerUpdateHeights=Qi.debounce(this._debouncerUpdateHeights,Gt.after(1),(()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()}))}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this.__updateFooterPositioning()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived(),requestAnimationFrame((()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"})))}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach((e=>{e.forEach((e=>e._renderHeaderAndFooter()))})),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=Qi.debounce(this._debouncerForceReflow,Xt,(()=>{this.$.scroller.style.overflow="hidden",setTimeout((()=>this.$.scroller.style.overflow=""))}))}}customElements.define(Nd.is,Nd);let Dd;const Rd=At(Dd||(Dd=(e=>e)`<dom-module id="lumo-grid-tree-toggle" theme-for="vaadin-grid-tree-toggle">
  <template>
    <style>
      :host {
        --vaadin-grid-tree-toggle-level-offset: 2em;
        align-items: center;
        vertical-align: middle;
        margin-left: calc(var(--lumo-space-s) * -1);
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([leaf])) {
        cursor: default;
      }

      [part="toggle"] {
        display: inline-block;
        font-size: 1.5em;
        line-height: 1;
        width: 1em;
        height: 1em;
        text-align: center;
        color: var(--lumo-contrast-50pct);
        /* Increase touch target area */
        padding: calc(1em / 3);
        margin: calc(1em / -3);
      }

      :host(:not([dir="rtl"])) [part="toggle"] {
        margin-right: 0;
      }

      @media (hover: hover) {
        :host(:hover) [part="toggle"] {
          color: var(--lumo-contrast-80pct);
        }
      }

      [part="toggle"]::before {
        font-family: "lumo-icons";
        display: inline-block;
        height: 100%;
      }

      :host(:not([expanded])) [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
      }

      :host([expanded]) [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
        transform: rotate(90deg);
      }

      /* Experimental support for hierarchy connectors, using an unsupported selector */
      :host([theme~="connectors"]) #level-spacer {
        position: relative;
        z-index: -1;
        font-size: 1em;
        height: 1.5em;
      }

      :host([theme~="connectors"]) #level-spacer::before {
        display: block;
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
        height: calc(var(--lumo-space-m) + 3em);
        background-image: linear-gradient(to right, transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px), var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px));
        background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
        background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) {
        margin-left: 0;
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"]) [part="toggle"] {
        margin-left: 0;
      }

      :host([dir="rtl"][expanded]) [part="toggle"]::before {
        transform: rotate(-90deg);
      }

      :host([dir="rtl"][theme~="connectors"]) #level-spacer::before {
        background-image: linear-gradient(to left, transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px), var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px));
        background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
      }

      :host([dir="rtl"]:not([expanded])) [part="toggle"]::before,
      :host([dir="rtl"][expanded]) [part="toggle"]::before {
        content: var(--lumo-icons-angle-left);
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(Rd.content);let Fd,Vd=e=>e;const Bd=document.createElement("template");Bd.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-grid-tree-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Bd.content);class jd extends(Rr(Gr(Wi))){static get template(){return At(Fd||(Fd=Vd`
    <style>
      :host {
        display: inline-flex;
        align-items: baseline;

        /* CSS API for :host */
        --vaadin-grid-tree-toggle-level-offset: 1em;

        /*
          ShadyCSS seems to polyfill :dir(rtl) only for :host, thus using
          a host custom CSS property for ltr/rtl toggle icon choice.
         */
        ---collapsed-icon: "\\e7be\\00a0";
      }

      :host(:dir(rtl)) {
        ---collapsed-icon: "\\e7bd\\00a0";
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:not([leaf])) {
        cursor: pointer;
      }

      #level-spacer,
      [part="toggle"] {
        flex: none;
      }

      #level-spacer {
        display: inline-block;
        width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
      }

      [part="toggle"]::before {
        font-family: "vaadin-grid-tree-icons";
        line-height: 1em; /* make icon font metrics not affect baseline */
      }

      :host(:not([expanded])) [part="toggle"]::before {
        content: var(---collapsed-icon);
      }

      :host([expanded]) [part="toggle"]::before {
        content: "\\e7bc\\00a0"; /* icon glyph + single non-breaking space */
      }

      :host([leaf]) [part="toggle"] {
        visibility: hidden;
      }
    </style>

    <span id="level-spacer"></span>
    <span part="toggle"></span>
    <slot></slot>
`))}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",(e=>this._onClick(e)))}_onClick(e){this.leaf||od(e.target)||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){const t=Number(e).toString();this.style["---level"]=t,this._debouncerUpdateLevel=Qi.debounce(this._debouncerUpdateLevel,Qt,(()=>this.updateStyles({"---level":t})))}}customElements.define(jd.is,jd);let $d,Ud=e=>e;class Yd extends Td{static get template(){return At($d||($d=Ud`
    <template id="template">
      <vaadin-grid-tree-toggle leaf="[[__isLeafItem(item, itemHasChildrenPath)]]" expanded="{{expanded}}" level="[[level]]">
        [[__getToggleContent(path, item)]]
      </vaadin-grid-tree-toggle>
    </template>
`))}static get is(){return"vaadin-grid-tree-column"}static get properties(){return{path:String,itemHasChildrenPath:{type:String,value:"children"}}}_prepareBodyTemplate(){const e=this._prepareTemplatizer(this.$.template);return e.templatizer.dataHost=this,e}__isLeafItem(e,t){return!(e&&e[t])}__getToggleContent(e,t){return e&&this.get(e,t)}}customElements.define(Yd.is,Yd),No({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new ps({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var r=yo(e.root||e);return r.insertBefore(i,r.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(yo(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return yo(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var r=e.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=r.getAttribute("viewBox")||"0 0 "+t+" "+t,s="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&r.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",o),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=s,n.appendChild(r).removeAttribute("id"),n}return null}});let qd;const Gd=At(qd||(qd=(e=>e)`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`));document.head.appendChild(Gd.content),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Draggable",[],t):"object"==typeof exports?exports.Draggable=t():e.Draggable=t()}(window,(function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=72)}([function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(66),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(70),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(57);Object.defineProperty(t,"closest",{enumerable:!0,get:function(){return a(r).default}});var n=i(55);Object.defineProperty(t,"requestNextAnimationFrame",{enumerable:!0,get:function(){return a(n).default}});var o=i(53);Object.defineProperty(t,"distance",{enumerable:!0,get:function(){return a(o).default}});var s=i(51);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"touchCoords",{enumerable:!0,get:function(){return a(s).default}})},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(46);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(49),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(14);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var n=i(13);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=i(12);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var s=i(6);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var a,l=i(39),d=(a=l)&&a.__esModule?a:{default:a};t.default=d.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(4);Object.defineProperty(t,"Sensor",{enumerable:!0,get:function(){return d(r).default}});var n=i(48);Object.defineProperty(t,"MouseSensor",{enumerable:!0,get:function(){return d(n).default}});var o=i(45);Object.defineProperty(t,"TouchSensor",{enumerable:!0,get:function(){return d(o).default}});var s=i(43);Object.defineProperty(t,"DragSensor",{enumerable:!0,get:function(){return d(s).default}});var a=i(41);Object.defineProperty(t,"ForceTouchSensor",{enumerable:!0,get:function(){return d(a).default}});var l=i(3);function d(e){return e&&e.__esModule?e:{default:e}}Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(20);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(25);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(29);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(32);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(35);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(68);Object.defineProperty(t,"Announcement",{enumerable:!0,get:function(){return a(r).default}}),Object.defineProperty(t,"defaultAnnouncementOptions",{enumerable:!0,get:function(){return r.defaultOptions}});var n=i(65);Object.defineProperty(t,"Focusable",{enumerable:!0,get:function(){return a(n).default}});var o=i(63);Object.defineProperty(t,"Mirror",{enumerable:!0,get:function(){return a(o).default}}),Object.defineProperty(t,"defaultMirrorOptions",{enumerable:!0,get:function(){return o.defaultOptions}});var s=i(59);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"Scrollable",{enumerable:!0,get:function(){return a(s).default}}),Object.defineProperty(t,"defaultScrollableOptions",{enumerable:!0,get:function(){return s.defaultOptions}})},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(69);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(71);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(0),s=(r=o)&&r.__esModule?r:{default:r};const a=Symbol("onSortableSorted"),l=Symbol("onSortableSort"),d=t.defaultOptions={duration:150,easingFunction:"ease-in-out"};class c extends s.default{constructor(e){super(e),this.options=n({},d,this.getOptions()),this.lastAnimationFrame=null,this.lastElements=[],this[a]=this[a].bind(this),this[l]=this[l].bind(this)}attach(){this.draggable.on("sortable:sort",this[l]),this.draggable.on("sortable:sorted",this[a])}detach(){this.draggable.off("sortable:sort",this[l]),this.draggable.off("sortable:sorted",this[a])}getOptions(){return this.draggable.options.sortAnimation||{}}[l]({dragEvent:e}){const{sourceContainer:t}=e,i=this.draggable.getDraggableElementsForContainer(t);this.lastElements=Array.from(i).map((e=>({domEl:e,offsetTop:e.offsetTop,offsetLeft:e.offsetLeft})))}[a]({oldIndex:e,newIndex:t}){if(e===t)return;const i=[];let r,n,o;e>t?(r=t,n=e-1,o=1):(r=e+1,n=t,o=-1);for(let e=r;e<=n;e++){const t=this.lastElements[e],r=this.lastElements[e+o];i.push({from:t,to:r})}cancelAnimationFrame(this.lastAnimationFrame),this.lastAnimationFrame=requestAnimationFrame((()=>{i.forEach((e=>function({from:e,to:t},{duration:i,easingFunction:r}){const n=e.domEl,o=e.offsetLeft-t.offsetLeft,s=e.offsetTop-t.offsetTop;n.style.pointerEvents="none",n.style.transform=`translate3d(${o}px, ${s}px, 0)`,requestAnimationFrame((()=>{n.addEventListener("transitionend",h),n.style.transition=`transform ${i}ms ${r}`,n.style.transform=""}))}(e,this.options)))}))}}function h(e){e.target.style.transition="",e.target.style.pointerEvents="",e.target.removeEventListener("transitionend",h)}t.default=c},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=i(15),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default,t.defaultOptions=n.defaultOptions},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(0),s=(r=o)&&r.__esModule?r:{default:r};const a=Symbol("onSortableSorted"),l=t.defaultOptions={duration:150,easingFunction:"ease-in-out",horizontal:!1};class d extends s.default{constructor(e){super(e),this.options=n({},l,this.getOptions()),this.lastAnimationFrame=null,this[a]=this[a].bind(this)}attach(){this.draggable.on("sortable:sorted",this[a])}detach(){this.draggable.off("sortable:sorted",this[a])}getOptions(){return this.draggable.options.swapAnimation||{}}[a]({oldIndex:e,newIndex:t,dragEvent:i}){const{source:r,over:n}=i;cancelAnimationFrame(this.lastAnimationFrame),this.lastAnimationFrame=requestAnimationFrame((()=>{e>=t?c(r,n,this.options):c(n,r,this.options)}))}}function c(e,t,{duration:i,easingFunction:r,horizontal:n}){for(const i of[e,t])i.style.pointerEvents="none";if(n){const i=e.offsetWidth;e.style.transform=`translate3d(${i}px, 0, 0)`,t.style.transform=`translate3d(-${i}px, 0, 0)`}else{const i=e.offsetHeight;e.style.transform=`translate3d(0, ${i}px, 0)`,t.style.transform=`translate3d(0, -${i}px, 0)`}requestAnimationFrame((()=>{for(const n of[e,t])n.addEventListener("transitionend",h),n.style.transition=`transform ${i}ms ${r}`,n.style.transform=""}))}function h(e){e.target.style.transition="",e.target.style.pointerEvents="",e.target.removeEventListener("transitionend",h)}t.default=d},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=i(17),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default,t.defaultOptions=n.defaultOptions},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(0),o=(r=n)&&r.__esModule?r:{default:r},s=i(7);const a=Symbol("onDragStart"),l=Symbol("onDragStop"),d=Symbol("onDragOver"),c=Symbol("onDragOut"),h=Symbol("onMirrorCreated"),u=Symbol("onMirrorDestroy");class p extends o.default{constructor(e){super(e),this.firstSource=null,this.mirror=null,this[a]=this[a].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[u]=this[u].bind(this)}attach(){this.draggable.on("drag:start",this[a]).on("drag:stop",this[l]).on("drag:over",this[d]).on("drag:out",this[c]).on("droppable:over",this[d]).on("droppable:out",this[c]).on("mirror:created",this[h]).on("mirror:destroy",this[u])}detach(){this.draggable.off("drag:start",this[a]).off("drag:stop",this[l]).off("drag:over",this[d]).off("drag:out",this[c]).off("droppable:over",this[d]).off("droppable:out",this[c]).off("mirror:created",this[h]).off("mirror:destroy",this[u])}[a](e){e.canceled()||(this.firstSource=e.source)}[l](){this.firstSource=null}[d](e){if(e.canceled())return;const t=e.source||e.dragEvent.source;if(t===this.firstSource)return void(this.firstSource=null);const i=new s.SnapInEvent({dragEvent:e,snappable:e.over||e.droppable});this.draggable.trigger(i),i.canceled()||(this.mirror&&(this.mirror.style.display="none"),t.classList.remove(...this.draggable.getClassNamesFor("source:dragging")),t.classList.add(...this.draggable.getClassNamesFor("source:placed")),setTimeout((()=>{t.classList.remove(...this.draggable.getClassNamesFor("source:placed"))}),this.draggable.options.placedTimeout))}[c](e){if(e.canceled())return;const t=e.source||e.dragEvent.source,i=new s.SnapOutEvent({dragEvent:e,snappable:e.over||e.droppable});this.draggable.trigger(i),i.canceled()||(this.mirror&&(this.mirror.style.display=""),t.classList.add(...this.draggable.getClassNamesFor("source:dragging")))}[h]({mirror:e}){this.mirror=e}[u](){this.mirror=null}}t.default=p},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.SnapOutEvent=t.SnapInEvent=t.SnapEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get dragEvent(){return this.data.dragEvent}get snappable(){return this.data.snappable}}t.SnapEvent=s,s.type="snap";class a extends s{}t.SnapInEvent=a,a.type="snap:in",a.cancelable=!0;class l extends s{}t.SnapOutEvent=l,l.type="snap:out",l.cancelable=!0},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(7);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var n,o=i(19),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(0),s=(r=o)&&r.__esModule?r:{default:r},a=i(2);const l=Symbol("onMirrorCreated"),d=Symbol("onMirrorDestroy"),c=Symbol("onDragOver"),h=Symbol("resize"),u=t.defaultOptions={};class p extends s.default{constructor(e){super(e),this.options=n({},u,this.getOptions()),this.lastWidth=0,this.lastHeight=0,this.mirror=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this)}attach(){this.draggable.on("mirror:created",this[l]).on("drag:over",this[c]).on("drag:over:container",this[c])}detach(){this.draggable.off("mirror:created",this[l]).off("mirror:destroy",this[d]).off("drag:over",this[c]).off("drag:over:container",this[c])}getOptions(){return this.draggable.options.resizeMirror||{}}[l]({mirror:e}){this.mirror=e}[d](){this.mirror=null}[c](e){this[h](e)}[h]({overContainer:e,over:t}){requestAnimationFrame((()=>{if(!this.mirror.parentNode)return;this.mirror.parentNode!==e&&e.appendChild(this.mirror);const i=t||this.draggable.getDraggableElementsForContainer(e)[0];i&&(0,a.requestNextAnimationFrame)((()=>{const e=i.getBoundingClientRect();this.lastHeight===e.height&&this.lastWidth===e.width||(this.mirror.style.width=`${e.width}px`,this.mirror.style.height=`${e.height}px`,this.lastWidth=e.width,this.lastHeight=e.height)}))}))}}t.default=p},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=i(22),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default,t.defaultOptions=n.defaultOptions},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(0),o=(r=n)&&r.__esModule?r:{default:r},s=i(2),a=i(8);const l=Symbol("onDragMove"),d=Symbol("onDragStop"),c=Symbol("onRequestAnimationFrame");class h extends o.default{constructor(e){super(e),this.currentlyCollidingElement=null,this.lastCollidingElement=null,this.currentAnimationFrame=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this)}attach(){this.draggable.on("drag:move",this[l]).on("drag:stop",this[d])}detach(){this.draggable.off("drag:move",this[l]).off("drag:stop",this[d])}getCollidables(){const e=this.draggable.options.collidables;return"string"==typeof e?Array.prototype.slice.call(document.querySelectorAll(e)):e instanceof NodeList||e instanceof Array?Array.prototype.slice.call(e):e instanceof HTMLElement?[e]:"function"==typeof e?e():[]}[l](e){const t=e.sensorEvent.target;this.currentAnimationFrame=requestAnimationFrame(this[c](t)),this.currentlyCollidingElement&&e.cancel();const i=new a.CollidableInEvent({dragEvent:e,collidingElement:this.currentlyCollidingElement}),r=new a.CollidableOutEvent({dragEvent:e,collidingElement:this.lastCollidingElement}),n=Boolean(this.currentlyCollidingElement&&this.lastCollidingElement!==this.currentlyCollidingElement),o=Boolean(!this.currentlyCollidingElement&&this.lastCollidingElement);n?(this.lastCollidingElement&&this.draggable.trigger(r),this.draggable.trigger(i)):o&&this.draggable.trigger(r),this.lastCollidingElement=this.currentlyCollidingElement}[d](e){const t=this.currentlyCollidingElement||this.lastCollidingElement,i=new a.CollidableOutEvent({dragEvent:e,collidingElement:t});t&&this.draggable.trigger(i),this.lastCollidingElement=null,this.currentlyCollidingElement=null}[c](e){return()=>{const t=this.getCollidables();this.currentlyCollidingElement=(0,s.closest)(e,(e=>t.includes(e)))}}}t.default=h},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.CollidableOutEvent=t.CollidableInEvent=t.CollidableEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get dragEvent(){return this.data.dragEvent}}t.CollidableEvent=s,s.type="collidable";class a extends s{get collidingElement(){return this.data.collidingElement}}t.CollidableInEvent=a,a.type="collidable:in";class l extends s{get collidingElement(){return this.data.collidingElement}}t.CollidableOutEvent=l,l.type="collidable:out"},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(8);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var n,o=i(24),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(26);Object.defineProperty(t,"Collidable",{enumerable:!0,get:function(){return l(r).default}});var n=i(23);Object.defineProperty(t,"ResizeMirror",{enumerable:!0,get:function(){return l(n).default}}),Object.defineProperty(t,"defaultResizeMirrorOptions",{enumerable:!0,get:function(){return n.defaultOptions}});var o=i(21);Object.defineProperty(t,"Snappable",{enumerable:!0,get:function(){return l(o).default}});var s=i(18);Object.defineProperty(t,"SwapAnimation",{enumerable:!0,get:function(){return l(s).default}}),Object.defineProperty(t,"defaultSwapAnimationOptions",{enumerable:!0,get:function(){return s.defaultOptions}});var a=i(16);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"SortAnimation",{enumerable:!0,get:function(){return l(a).default}}),Object.defineProperty(t,"defaultSortAnimationOptions",{enumerable:!0,get:function(){return a.defaultOptions}})},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(5),s=(r=o)&&r.__esModule?r:{default:r},a=i(9);const l=Symbol("onDragStart"),d=Symbol("onDragOverContainer"),c=Symbol("onDragOver"),h=Symbol("onDragStop");const u={"sortable:sorted":function({dragEvent:e}){const t=e.source.textContent.trim()||e.source.id||"sortable element";if(e.over){const i=e.over.textContent.trim()||e.over.id||"sortable element";return e.source.compareDocumentPosition(e.over)&Node.DOCUMENT_POSITION_FOLLOWING?`Placed ${t} after ${i}`:`Placed ${t} before ${i}`}return`Placed ${t} into a different container`}};class p extends s.default{constructor(e=[],t={}){super(e,n({},t,{announcements:n({},u,t.announcements||{})})),this.startIndex=null,this.startContainer=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this.on("drag:start",this[l]).on("drag:over:container",this[d]).on("drag:over",this[c]).on("drag:stop",this[h])}destroy(){super.destroy(),this.off("drag:start",this[l]).off("drag:over:container",this[d]).off("drag:over",this[c]).off("drag:stop",this[h])}index(e){return this.getSortableElementsForContainer(e.parentNode).indexOf(e)}getSortableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter((t=>t!==this.originalSource&&t!==this.mirror&&t.parentNode===e))}[l](e){this.startContainer=e.source.parentNode,this.startIndex=this.index(e.source);const t=new a.SortableStartEvent({dragEvent:e,startIndex:this.startIndex,startContainer:this.startContainer});this.trigger(t),t.canceled()&&e.cancel()}[d](e){if(e.canceled())return;const{source:t,over:i,overContainer:r}=e,n=this.index(t),o=new a.SortableSortEvent({dragEvent:e,currentIndex:n,source:t,over:i});if(this.trigger(o),o.canceled())return;const s=g({source:t,over:i,overContainer:r,children:this.getSortableElementsForContainer(r)});if(!s)return;const{oldContainer:l,newContainer:d}=s,c=this.index(e.source),h=new a.SortableSortedEvent({dragEvent:e,oldIndex:n,newIndex:c,oldContainer:l,newContainer:d});this.trigger(h)}[c](e){if(e.over===e.originalSource||e.over===e.source)return;const{source:t,over:i,overContainer:r}=e,n=this.index(t),o=new a.SortableSortEvent({dragEvent:e,currentIndex:n,source:t,over:i});if(this.trigger(o),o.canceled())return;const s=g({source:t,over:i,overContainer:r,children:this.getDraggableElementsForContainer(r)});if(!s)return;const{oldContainer:l,newContainer:d}=s,c=this.index(t),h=new a.SortableSortedEvent({dragEvent:e,oldIndex:n,newIndex:c,oldContainer:l,newContainer:d});this.trigger(h)}[h](e){const t=new a.SortableStopEvent({dragEvent:e,oldIndex:this.startIndex,newIndex:this.index(e.source),oldContainer:this.startContainer,newContainer:e.source.parentNode});this.trigger(t),this.startIndex=null,this.startContainer=null}}function m(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}function g({source:e,over:t,overContainer:i,children:r}){const n=!r.length,o=e.parentNode!==i,s=t&&e.parentNode===t.parentNode;return n?function(e,t){const i=e.parentNode;return t.appendChild(e),{oldContainer:i,newContainer:t}}(e,i):s?function(e,t){const i=m(e),r=m(t);i<r?e.parentNode.insertBefore(e,t.nextElementSibling):e.parentNode.insertBefore(e,t);return{oldContainer:e.parentNode,newContainer:e.parentNode}}(e,t):o?function(e,t,i){const r=e.parentNode;t?t.parentNode.insertBefore(e,t):i.appendChild(e);return{oldContainer:r,newContainer:e.parentNode}}(e,t,i):null}t.default=p},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.SortableStopEvent=t.SortableSortedEvent=t.SortableSortEvent=t.SortableStartEvent=t.SortableEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get dragEvent(){return this.data.dragEvent}}t.SortableEvent=s,s.type="sortable";class a extends s{get startIndex(){return this.data.startIndex}get startContainer(){return this.data.startContainer}}t.SortableStartEvent=a,a.type="sortable:start",a.cancelable=!0;class l extends s{get currentIndex(){return this.data.currentIndex}get over(){return this.data.over}get overContainer(){return this.data.dragEvent.overContainer}}t.SortableSortEvent=l,l.type="sortable:sort",l.cancelable=!0;class d extends s{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}t.SortableSortedEvent=d,d.type="sortable:sorted";class c extends s{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}t.SortableStopEvent=c,c.type="sortable:stop"},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(9);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var n,o=i(28),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(5),s=(r=o)&&r.__esModule?r:{default:r},a=i(10);const l=Symbol("onDragStart"),d=Symbol("onDragOver"),c=Symbol("onDragStop");const h={"swappabled:swapped":function({dragEvent:e,swappedElement:t}){return`Swapped ${e.source.textContent.trim()||e.source.id||"swappable element"} with ${t.textContent.trim()||t.id||"swappable element"}`}};class u extends s.default{constructor(e=[],t={}){super(e,n({},t,{announcements:n({},h,t.announcements||{})})),this.lastOver=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this.on("drag:start",this[l]).on("drag:over",this[d]).on("drag:stop",this[c])}destroy(){super.destroy(),this.off("drag:start",this._onDragStart).off("drag:over",this._onDragOver).off("drag:stop",this._onDragStop)}[l](e){const t=new a.SwappableStartEvent({dragEvent:e});this.trigger(t),t.canceled()&&e.cancel()}[d](e){if(e.over===e.originalSource||e.over===e.source||e.canceled())return;const t=new a.SwappableSwapEvent({dragEvent:e,over:e.over,overContainer:e.overContainer});if(this.trigger(t),t.canceled())return;this.lastOver&&this.lastOver!==e.over&&p(this.lastOver,e.source),this.lastOver===e.over?this.lastOver=null:this.lastOver=e.over,p(e.source,e.over);const i=new a.SwappableSwappedEvent({dragEvent:e,swappedElement:e.over});this.trigger(i)}[c](e){const t=new a.SwappableStopEvent({dragEvent:e});this.trigger(t),this.lastOver=null}}function p(e,t){const i=t.parentNode,r=e.parentNode;!function(e){const t=document.createElement("div");e(t),t.parentNode.removeChild(t)}((n=>{r.insertBefore(n,e),i.insertBefore(e,t),r.insertBefore(t,n)}))}t.default=u},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.SwappableStopEvent=t.SwappableSwappedEvent=t.SwappableSwapEvent=t.SwappableStartEvent=t.SwappableEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get dragEvent(){return this.data.dragEvent}}t.SwappableEvent=s,s.type="swappable";class a extends s{}t.SwappableStartEvent=a,a.type="swappable:start",a.cancelable=!0;class l extends s{get over(){return this.data.over}get overContainer(){return this.data.overContainer}}t.SwappableSwapEvent=l,l.type="swappable:swap",l.cancelable=!0;class d extends s{get swappedElement(){return this.data.swappedElement}}t.SwappableSwappedEvent=d,d.type="swappable:swapped";class c extends s{}t.SwappableStopEvent=c,c.type="swappable:stop"},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(10);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var n,o=i(31),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(2),s=i(5),a=(r=s)&&r.__esModule?r:{default:r},l=i(11);const d=Symbol("onDragStart"),c=Symbol("onDragMove"),h=Symbol("onDragStop"),u=Symbol("dropInDropZone"),p=Symbol("returnToOriginalDropzone"),m=Symbol("closestDropzone"),g=Symbol("getDropzones");const f={"droppable:dropped":function({dragEvent:e,dropzone:t}){return`Dropped ${e.source.textContent.trim()||e.source.id||"draggable element"} into ${t.textContent.trim()||t.id||"droppable element"}`},"droppable:returned":function({dragEvent:e,dropzone:t}){return`Returned ${e.source.textContent.trim()||e.source.id||"draggable element"} from ${t.textContent.trim()||t.id||"droppable element"}`}},_={"droppable:active":"draggable-dropzone--active","droppable:occupied":"draggable-dropzone--occupied"},v={dropzone:".draggable-droppable"};class b extends a.default{constructor(e=[],t={}){super(e,n({},v,t,{classes:n({},_,t.classes||{}),announcements:n({},f,t.announcements||{})})),this.dropzones=null,this.lastDropzone=null,this.initialDropzone=null,this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this.on("drag:start",this[d]).on("drag:move",this[c]).on("drag:stop",this[h])}destroy(){super.destroy(),this.off("drag:start",this[d]).off("drag:move",this[c]).off("drag:stop",this[h])}[d](e){if(e.canceled())return;this.dropzones=[...this[g]()];const t=(0,o.closest)(e.sensorEvent.target,this.options.dropzone);if(!t)return void e.cancel();const i=new l.DroppableStartEvent({dragEvent:e,dropzone:t});if(this.trigger(i),i.canceled())e.cancel();else{this.initialDropzone=t;for(const e of this.dropzones)e.classList.contains(this.getClassNameFor("droppable:occupied"))||e.classList.add(...this.getClassNamesFor("droppable:active"))}}[c](e){if(e.canceled())return;const t=this[m](e.sensorEvent.target);t&&!t.classList.contains(this.getClassNameFor("droppable:occupied"))&&this[u](e,t)?this.lastDropzone=t:t&&t!==this.initialDropzone||!this.lastDropzone||(this[p](e),this.lastDropzone=null)}[h](e){const t=new l.DroppableStopEvent({dragEvent:e,dropzone:this.lastDropzone||this.initialDropzone});this.trigger(t);const i=this.getClassNamesFor("droppable:occupied");for(const e of this.dropzones)e.classList.remove(...this.getClassNamesFor("droppable:active"));this.lastDropzone&&this.lastDropzone!==this.initialDropzone&&this.initialDropzone.classList.remove(...i),this.dropzones=null,this.lastDropzone=null,this.initialDropzone=null}[u](e,t){const i=new l.DroppableDroppedEvent({dragEvent:e,dropzone:t});if(this.trigger(i),i.canceled())return!1;const r=this.getClassNamesFor("droppable:occupied");return this.lastDropzone&&this.lastDropzone.classList.remove(...r),t.appendChild(e.source),t.classList.add(...r),!0}[p](e){const t=new l.DroppableReturnedEvent({dragEvent:e,dropzone:this.lastDropzone});this.trigger(t),t.canceled()||(this.initialDropzone.appendChild(e.source),this.lastDropzone.classList.remove(...this.getClassNamesFor("droppable:occupied")))}[m](e){return this.dropzones?(0,o.closest)(e,this.dropzones):null}[g](){const e=this.options.dropzone;return"string"==typeof e?document.querySelectorAll(e):e instanceof NodeList||e instanceof Array?e:"function"==typeof e?e():[]}}t.default=b},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DroppableStopEvent=t.DroppableReturnedEvent=t.DroppableDroppedEvent=t.DroppableStartEvent=t.DroppableEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get dragEvent(){return this.data.dragEvent}}t.DroppableEvent=s,s.type="droppable";class a extends s{get dropzone(){return this.data.dropzone}}t.DroppableStartEvent=a,a.type="droppable:start",a.cancelable=!0;class l extends s{get dropzone(){return this.data.dropzone}}t.DroppableDroppedEvent=l,l.type="droppable:dropped",l.cancelable=!0;class d extends s{get dropzone(){return this.data.dropzone}}t.DroppableReturnedEvent=d,d.type="droppable:returned",d.cancelable=!0;class c extends s{get dropzone(){return this.data.dropzone}}t.DroppableStopEvent=c,c.type="droppable:stop",c.cancelable=!0},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(11);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var n,o=i(34),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this.callbacks={}}on(e,...t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(...t),this}off(e,t){if(!this.callbacks[e])return null;const i=this.callbacks[e].slice(0);for(let r=0;r<i.length;r++)t===i[r]&&this.callbacks[e].splice(r,1);return this}trigger(e){if(!this.callbacks[e.type])return null;const t=[...this.callbacks[e.type]],i=[];for(let r=t.length-1;r>=0;r--){const n=t[r];try{n(e)}catch(e){i.push(e)}}return i.length&&console.error(`Draggable caught errors while triggering '${e.type}'`,i),this}}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(37),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(2),s=i(12),a=i(38),l=(r=a)&&r.__esModule?r:{default:r},d=i(6),c=i(13),h=i(14);const u=Symbol("onDragStart"),p=Symbol("onDragMove"),m=Symbol("onDragStop"),g=Symbol("onDragPressure"),f={"drag:start":e=>`Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,"drag:stop":e=>`Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`},_={"container:dragging":"draggable-container--is-dragging","source:dragging":"draggable-source--is-dragging","source:placed":"draggable-source--placed","container:placed":"draggable-container--placed","body:dragging":"draggable--is-dragging","draggable:over":"draggable--over","container:over":"draggable-container--over","source:original":"draggable--original",mirror:"draggable-mirror"},v=t.defaultOptions={draggable:".draggable-source",handle:null,delay:{},distance:0,placedTimeout:800,plugins:[],sensors:[],exclude:{plugins:[],sensors:[]}};class b{constructor(e=[document.body],t={}){if(e instanceof NodeList||e instanceof Array)this.containers=[...e];else{if(!(e instanceof HTMLElement))throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");this.containers=[e]}this.options=n({},v,t,{classes:n({},_,t.classes||{}),announcements:n({},f,t.announcements||{}),exclude:{plugins:t.exclude&&t.exclude.plugins||[],sensors:t.exclude&&t.exclude.sensors||[]}}),this.emitter=new l.default,this.dragging=!1,this.plugins=[],this.sensors=[],this[u]=this[u].bind(this),this[p]=this[p].bind(this),this[m]=this[m].bind(this),this[g]=this[g].bind(this),document.addEventListener("drag:start",this[u],!0),document.addEventListener("drag:move",this[p],!0),document.addEventListener("drag:stop",this[m],!0),document.addEventListener("drag:pressure",this[g],!0);const i=Object.values(b.Plugins).filter((e=>!this.options.exclude.plugins.includes(e))),r=Object.values(b.Sensors).filter((e=>!this.options.exclude.sensors.includes(e)));this.addPlugin(...i,...this.options.plugins),this.addSensor(...r,...this.options.sensors);const o=new c.DraggableInitializedEvent({draggable:this});this.on("mirror:created",(({mirror:e})=>this.mirror=e)),this.on("mirror:destroy",(()=>this.mirror=null)),this.trigger(o)}destroy(){document.removeEventListener("drag:start",this[u],!0),document.removeEventListener("drag:move",this[p],!0),document.removeEventListener("drag:stop",this[m],!0),document.removeEventListener("drag:pressure",this[g],!0);const e=new c.DraggableDestroyEvent({draggable:this});this.trigger(e),this.removePlugin(...this.plugins.map((e=>e.constructor))),this.removeSensor(...this.sensors.map((e=>e.constructor)))}addPlugin(...e){const t=e.map((e=>new e(this)));return t.forEach((e=>e.attach())),this.plugins=[...this.plugins,...t],this}removePlugin(...e){return this.plugins.filter((t=>e.includes(t.constructor))).forEach((e=>e.detach())),this.plugins=this.plugins.filter((t=>!e.includes(t.constructor))),this}addSensor(...e){const t=e.map((e=>new e(this.containers,this.options)));return t.forEach((e=>e.attach())),this.sensors=[...this.sensors,...t],this}removeSensor(...e){return this.sensors.filter((t=>e.includes(t.constructor))).forEach((e=>e.detach())),this.sensors=this.sensors.filter((t=>!e.includes(t.constructor))),this}addContainer(...e){return this.containers=[...this.containers,...e],this.sensors.forEach((t=>t.addContainer(...e))),this}removeContainer(...e){return this.containers=this.containers.filter((t=>!e.includes(t))),this.sensors.forEach((t=>t.removeContainer(...e))),this}on(e,...t){return this.emitter.on(e,...t),this}off(e,t){return this.emitter.off(e,t),this}trigger(e){return this.emitter.trigger(e),this}getClassNameFor(e){return this.getClassNamesFor(e)[0]}getClassNamesFor(e){const t=this.options.classes[e];return t instanceof Array?t:"string"==typeof t||t instanceof String?[t]:[]}isDragging(){return Boolean(this.dragging)}getDraggableElements(){return this.containers.reduce(((e,t)=>[...e,...this.getDraggableElementsForContainer(t)]),[])}getDraggableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter((e=>e!==this.originalSource&&e!==this.mirror))}[u](e){const t=y(e),{target:i,container:r}=t;if(!this.containers.includes(r))return;if(this.options.handle&&i&&!(0,o.closest)(i,this.options.handle))return void t.cancel();if(this.originalSource=(0,o.closest)(i,this.options.draggable),this.sourceContainer=r,!this.originalSource)return void t.cancel();this.lastPlacedSource&&this.lastPlacedContainer&&(clearTimeout(this.placedTimeoutID),this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"))),this.source=this.originalSource.cloneNode(!0),this.originalSource.parentNode.insertBefore(this.source,this.originalSource),this.originalSource.style.display="none";const s=new h.DragStartEvent({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t});if(this.trigger(s),this.dragging=!s.canceled(),s.canceled())return this.source.parentNode.removeChild(this.source),void(this.originalSource.style.display=null);this.originalSource.classList.add(...this.getClassNamesFor("source:original")),this.source.classList.add(...this.getClassNamesFor("source:dragging")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:dragging")),document.body.classList.add(...this.getClassNamesFor("body:dragging")),A(document.body,"none"),requestAnimationFrame((()=>{const t=y(e).clone({target:this.source});this[p](n({},e,{detail:t}))}))}[p](e){if(!this.dragging)return;const t=y(e),{container:i}=t;let r=t.target;const n=new h.DragMoveEvent({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t});this.trigger(n),n.canceled()&&t.cancel(),r=(0,o.closest)(r,this.options.draggable);const s=(0,o.closest)(t.target,this.containers),a=t.overContainer||s,l=this.currentOverContainer&&a!==this.currentOverContainer,d=this.currentOver&&r!==this.currentOver,c=a&&this.currentOverContainer!==a,u=s&&r&&this.currentOver!==r;if(d){const e=new h.DragOutEvent({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,over:this.currentOver,overContainer:this.currentOverContainer});this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOver=null,this.trigger(e)}if(l){const e=new h.DragOutContainerEvent({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:this.currentOverContainer});this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.currentOverContainer=null,this.trigger(e)}if(c){a.classList.add(...this.getClassNamesFor("container:over"));const e=new h.DragOverContainerEvent({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:a});this.currentOverContainer=a,this.trigger(e)}if(u){r.classList.add(...this.getClassNamesFor("draggable:over"));const e=new h.DragOverEvent({source:this.source,originalSource:this.originalSource,sourceContainer:i,sensorEvent:t,overContainer:a,over:r});this.currentOver=r,this.trigger(e)}}[m](e){if(!this.dragging)return;this.dragging=!1;const t=new h.DragStopEvent({source:this.source,originalSource:this.originalSource,sensorEvent:e.sensorEvent,sourceContainer:this.sourceContainer});this.trigger(t),this.source.parentNode.insertBefore(this.originalSource,this.source),this.source.parentNode.removeChild(this.source),this.originalSource.style.display="",this.source.classList.remove(...this.getClassNamesFor("source:dragging")),this.originalSource.classList.remove(...this.getClassNamesFor("source:original")),this.originalSource.classList.add(...this.getClassNamesFor("source:placed")),this.sourceContainer.classList.add(...this.getClassNamesFor("container:placed")),this.sourceContainer.classList.remove(...this.getClassNamesFor("container:dragging")),document.body.classList.remove(...this.getClassNamesFor("body:dragging")),A(document.body,""),this.currentOver&&this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over")),this.currentOverContainer&&this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over")),this.lastPlacedSource=this.originalSource,this.lastPlacedContainer=this.sourceContainer,this.placedTimeoutID=setTimeout((()=>{this.lastPlacedSource&&this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed")),this.lastPlacedContainer&&this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed")),this.lastPlacedSource=null,this.lastPlacedContainer=null}),this.options.placedTimeout);const i=new h.DragStoppedEvent({source:this.source,originalSource:this.originalSource,sensorEvent:e.sensorEvent,sourceContainer:this.sourceContainer});this.trigger(i),this.source=null,this.originalSource=null,this.currentOverContainer=null,this.currentOver=null,this.sourceContainer=null}[g](e){if(!this.dragging)return;const t=y(e),i=this.source||(0,o.closest)(t.originalEvent.target,this.options.draggable),r=new h.DragPressureEvent({sensorEvent:t,source:i,pressure:t.pressure});this.trigger(r)}}function y(e){return e.detail}function A(e,t){e.style.webkitUserSelect=t,e.style.mozUserSelect=t,e.style.msUserSelect=t,e.style.oUserSelect=t,e.style.userSelect=t}t.default=b,b.Plugins={Announcement:s.Announcement,Focusable:s.Focusable,Mirror:s.Mirror,Scrollable:s.Scrollable},b.Sensors={MouseSensor:d.MouseSensor,TouchSensor:d.TouchSensor}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(4),o=(r=n)&&r.__esModule?r:{default:r},s=i(3);const a=Symbol("onMouseForceWillBegin"),l=Symbol("onMouseForceDown"),d=Symbol("onMouseDown"),c=Symbol("onMouseForceChange"),h=Symbol("onMouseMove"),u=Symbol("onMouseUp"),p=Symbol("onMouseForceGlobalChange");class m extends o.default{constructor(e=[],t={}){super(e,t),this.mightDrag=!1,this[a]=this[a].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[u]=this[u].bind(this)}attach(){for(const e of this.containers)e.addEventListener("webkitmouseforcewillbegin",this[a],!1),e.addEventListener("webkitmouseforcedown",this[l],!1),e.addEventListener("mousedown",this[d],!0),e.addEventListener("webkitmouseforcechanged",this[c],!1);document.addEventListener("mousemove",this[h]),document.addEventListener("mouseup",this[u])}detach(){for(const e of this.containers)e.removeEventListener("webkitmouseforcewillbegin",this[a],!1),e.removeEventListener("webkitmouseforcedown",this[l],!1),e.removeEventListener("mousedown",this[d],!0),e.removeEventListener("webkitmouseforcechanged",this[c],!1);document.removeEventListener("mousemove",this[h]),document.removeEventListener("mouseup",this[u])}[a](e){e.preventDefault(),this.mightDrag=!0}[l](e){if(this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),i=e.currentTarget,r=new s.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:i,originalEvent:e});this.trigger(i,r),this.currentContainer=i,this.dragging=!r.canceled(),this.mightDrag=!1}[u](e){if(!this.dragging)return;const t=new s.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:null,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,t),this.currentContainer=null,this.dragging=!1,this.mightDrag=!1}[d](e){this.mightDrag&&(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault())}[h](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),i=new s.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i)}[c](e){if(this.dragging)return;const t=e.target,i=e.currentTarget,r=new s.DragPressureSensorEvent({pressure:e.webkitForce,clientX:e.clientX,clientY:e.clientY,target:t,container:i,originalEvent:e});this.trigger(i,r)}[p](e){if(!this.dragging)return;const t=e.target,i=new s.DragPressureSensorEvent({pressure:e.webkitForce,clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i)}}t.default=m},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(40),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(2),o=i(4),s=(r=o)&&r.__esModule?r:{default:r},a=i(3);const l=Symbol("onMouseDown"),d=Symbol("onMouseUp"),c=Symbol("onDragStart"),h=Symbol("onDragOver"),u=Symbol("onDragEnd"),p=Symbol("onDrop"),m=Symbol("reset");class g extends s.default{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.draggableElement=null,this.nativeDraggableElement=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[u]=this[u].bind(this),this[p]=this[p].bind(this)}attach(){document.addEventListener("mousedown",this[l],!0)}detach(){document.removeEventListener("mousedown",this[l],!0)}[c](e){e.dataTransfer.setData("text",""),e.dataTransfer.effectAllowed=this.options.type;const t=document.elementFromPoint(e.clientX,e.clientY);if(this.currentContainer=(0,n.closest)(e.target,this.containers),!this.currentContainer)return;const i=new a.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});setTimeout((()=>{this.trigger(this.currentContainer,i),i.canceled()?this.dragging=!1:this.dragging=!0}),0)}[h](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),i=this.currentContainer,r=new a.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:i,originalEvent:e});this.trigger(i,r),r.canceled()||(e.preventDefault(),e.dataTransfer.dropEffect=this.options.type)}[u](e){if(!this.dragging)return;document.removeEventListener("mouseup",this[d],!0);const t=document.elementFromPoint(e.clientX,e.clientY),i=this.currentContainer,r=new a.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:i,originalEvent:e});this.trigger(i,r),this.dragging=!1,this.startEvent=null,this[m]()}[p](e){e.preventDefault()}[l](e){if(e.target&&(e.target.form||e.target.contenteditable))return;const t=(0,n.closest)(e.target,(e=>e.draggable));t&&(t.draggable=!1,this.nativeDraggableElement=t),document.addEventListener("mouseup",this[d],!0),document.addEventListener("dragstart",this[c],!1),document.addEventListener("dragover",this[h],!1),document.addEventListener("dragend",this[u],!1),document.addEventListener("drop",this[p],!1);const i=(0,n.closest)(e.target,this.options.draggable);i&&(this.startEvent=e,this.mouseDownTimeout=setTimeout((()=>{i.draggable=!0,this.draggableElement=i}),this.delay.drag))}[d](){this[m]()}[m](){clearTimeout(this.mouseDownTimeout),document.removeEventListener("mouseup",this[d],!0),document.removeEventListener("dragstart",this[c],!1),document.removeEventListener("dragover",this[h],!1),document.removeEventListener("dragend",this[u],!1),document.removeEventListener("drop",this[p],!1),this.nativeDraggableElement&&(this.nativeDraggableElement.draggable=!0,this.nativeDraggableElement=null),this.draggableElement&&(this.draggableElement.draggable=!1,this.draggableElement=null)}}t.default=g},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(42),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(2),o=i(4),s=(r=o)&&r.__esModule?r:{default:r},a=i(3);const l=Symbol("onTouchStart"),d=Symbol("onTouchEnd"),c=Symbol("onTouchMove"),h=Symbol("startDrag"),u=Symbol("onDistanceChange");let p=!1;window.addEventListener("touchmove",(e=>{p&&e.preventDefault()}),{passive:!1});class m extends s.default{constructor(e=[],t={}){super(e,t),this.currentScrollableParent=null,this.tapTimeout=null,this.touchMoved=!1,this.pageX=null,this.pageY=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[u]=this[u].bind(this)}attach(){document.addEventListener("touchstart",this[l])}detach(){document.removeEventListener("touchstart",this[l])}[l](e){const t=(0,n.closest)(e.target,this.containers);if(!t)return;const{distance:i=0}=this.options,{delay:r}=this,{pageX:o,pageY:s}=(0,n.touchCoords)(e);Object.assign(this,{pageX:o,pageY:s}),this.onTouchStartAt=Date.now(),this.startEvent=e,this.currentContainer=t,document.addEventListener("touchend",this[d]),document.addEventListener("touchcancel",this[d]),document.addEventListener("touchmove",this[u]),t.addEventListener("contextmenu",g),i&&(p=!0),this.tapTimeout=window.setTimeout((()=>{this[u]({touches:[{pageX:this.pageX,pageY:this.pageY}]})}),r.touch)}[h](){const e=this.startEvent,t=this.currentContainer,i=(0,n.touchCoords)(e),r=new a.DragStartSensorEvent({clientX:i.pageX,clientY:i.pageY,target:e.target,container:t,originalEvent:e});this.trigger(this.currentContainer,r),this.dragging=!r.canceled(),this.dragging&&document.addEventListener("touchmove",this[c]),p=this.dragging}[u](e){const{distance:t}=this.options,{startEvent:i,delay:r}=this,o=(0,n.touchCoords)(i),s=(0,n.touchCoords)(e),a=Date.now()-this.onTouchStartAt,l=(0,n.distance)(o.pageX,o.pageY,s.pageX,s.pageY);Object.assign(this,s),clearTimeout(this.tapTimeout),a<r.touch?document.removeEventListener("touchmove",this[u]):l>=t&&(document.removeEventListener("touchmove",this[u]),this[h]())}[c](e){if(!this.dragging)return;const{pageX:t,pageY:i}=(0,n.touchCoords)(e),r=document.elementFromPoint(t-window.scrollX,i-window.scrollY),o=new a.DragMoveSensorEvent({clientX:t,clientY:i,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,o)}[d](e){if(clearTimeout(this.tapTimeout),p=!1,document.removeEventListener("touchend",this[d]),document.removeEventListener("touchcancel",this[d]),document.removeEventListener("touchmove",this[u]),this.currentContainer&&this.currentContainer.removeEventListener("contextmenu",g),!this.dragging)return;document.removeEventListener("touchmove",this[c]);const{pageX:t,pageY:i}=(0,n.touchCoords)(e),r=document.elementFromPoint(t-window.scrollX,i-window.scrollY);e.preventDefault();const o=new a.DragStopSensorEvent({clientX:t,clientY:i,target:r,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,o),this.currentContainer=null,this.dragging=!1,this.startEvent=null}}function g(e){e.preventDefault(),e.stopPropagation()}t.default=m},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(44),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DragPressureSensorEvent=t.DragStopSensorEvent=t.DragMoveSensorEvent=t.DragStartSensorEvent=t.SensorEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get originalEvent(){return this.data.originalEvent}get clientX(){return this.data.clientX}get clientY(){return this.data.clientY}get target(){return this.data.target}get container(){return this.data.container}get pressure(){return this.data.pressure}}t.SensorEvent=s;class a extends s{}t.DragStartSensorEvent=a,a.type="drag:start";class l extends s{}t.DragMoveSensorEvent=l,l.type="drag:move";class d extends s{}t.DragStopSensorEvent=d,d.type="drag:stop";class c extends s{}t.DragPressureSensorEvent=c,c.type="drag:pressure"},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(2),o=i(4),s=(r=o)&&r.__esModule?r:{default:r},a=i(3);const l=Symbol("onContextMenuWhileDragging"),d=Symbol("onMouseDown"),c=Symbol("onMouseMove"),h=Symbol("onMouseUp"),u=Symbol("startDrag"),p=Symbol("onDistanceChange");class m extends s.default{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.pageX=null,this.pageY=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[u]=this[u].bind(this),this[p]=this[p].bind(this)}attach(){document.addEventListener("mousedown",this[d],!0)}detach(){document.removeEventListener("mousedown",this[d],!0)}[d](e){if(0!==e.button||e.ctrlKey||e.metaKey)return;const t=(0,n.closest)(e.target,this.containers);if(!t)return;const{delay:i}=this,{pageX:r,pageY:o}=e;Object.assign(this,{pageX:r,pageY:o}),this.onMouseDownAt=Date.now(),this.startEvent=e,this.currentContainer=t,document.addEventListener("mouseup",this[h]),document.addEventListener("dragstart",g),document.addEventListener("mousemove",this[p]),this.mouseDownTimeout=window.setTimeout((()=>{this[p]({pageX:this.pageX,pageY:this.pageY})}),i.mouse)}[u](){const e=this.startEvent,t=this.currentContainer,i=new a.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:e.target,container:t,originalEvent:e});this.trigger(this.currentContainer,i),this.dragging=!i.canceled(),this.dragging&&(document.addEventListener("contextmenu",this[l],!0),document.addEventListener("mousemove",this[c]))}[p](e){const{pageX:t,pageY:i}=e,{distance:r}=this.options,{startEvent:o,delay:s}=this;if(Object.assign(this,{pageX:t,pageY:i}),!this.currentContainer)return;const a=Date.now()-this.onMouseDownAt,l=(0,n.distance)(o.pageX,o.pageY,t,i)||0;clearTimeout(this.mouseDownTimeout),a<s.mouse?document.removeEventListener("mousemove",this[p]):l>=r&&(document.removeEventListener("mousemove",this[p]),this[u]())}[c](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),i=new a.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i)}[h](e){if(clearTimeout(this.mouseDownTimeout),0!==e.button)return;if(document.removeEventListener("mouseup",this[h]),document.removeEventListener("dragstart",g),document.removeEventListener("mousemove",this[p]),!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),i=new a.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,i),document.removeEventListener("contextmenu",this[l],!0),document.removeEventListener("mousemove",this[c]),this.currentContainer=null,this.dragging=!1,this.startEvent=null}[l](e){e.preventDefault()}}function g(e){e.preventDefault()}t.default=m},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(47),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};const n={mouse:0,drag:0,touch:100};t.default=class{constructor(e=[],t={}){this.containers=[...e],this.options=r({},t),this.dragging=!1,this.currentContainer=null,this.startEvent=null,this.delay=function(e){const t={};if(void 0===e)return r({},n);if("number"==typeof e){for(const i in n)n.hasOwnProperty(i)&&(t[i]=e);return t}for(const i in n)n.hasOwnProperty(i)&&(void 0===e[i]?t[i]=n[i]:t[i]=e[i]);return t}(t.delay)}attach(){return this}detach(){return this}addContainer(...e){this.containers=[...this.containers,...e]}removeContainer(...e){this.containers=this.containers.filter((t=>!e.includes(t)))}trigger(e,t){const i=document.createEvent("Event");return i.detail=t,i.initEvent(t.type,!0,!0),e.dispatchEvent(i),this.lastEvent=t,t}}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e={}){const{touches:t,changedTouches:i}=e;return t&&t[0]||i&&i[0]}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(50),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,r){return Math.sqrt((i-e)**2+(r-t)**2)}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(52),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return requestAnimationFrame((()=>{requestAnimationFrame(e)}))}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(54),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return null;const i=t,n=t,o=t,s=t,a=Boolean("string"==typeof t),l=Boolean("function"==typeof t),d=Boolean(t instanceof NodeList||t instanceof Array),c=Boolean(t instanceof HTMLElement);let h=e;do{if(h=h.correspondingUseElement||h.correspondingElement||h,(u=h)?a?r.call(u,i):d?[...o].includes(u):c?s===u:l&&n(u):u)return h;h=h.parentNode}while(h&&h!==document.body&&h!==document);var u;return null};const r=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(56),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=t.scroll=t.onDragStop=t.onDragMove=t.onDragStart=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(0),s=(r=o)&&r.__esModule?r:{default:r},a=i(2);const l=t.onDragStart=Symbol("onDragStart"),d=t.onDragMove=Symbol("onDragMove"),c=t.onDragStop=Symbol("onDragStop"),h=t.scroll=Symbol("scroll"),u=t.defaultOptions={speed:6,sensitivity:50,scrollableElements:[]};class p extends s.default{constructor(e){super(e),this.options=n({},u,this.getOptions()),this.currentMousePosition=null,this.scrollAnimationFrame=null,this.scrollableElement=null,this.findScrollableElementFrame=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this)}attach(){this.draggable.on("drag:start",this[l]).on("drag:move",this[d]).on("drag:stop",this[c])}detach(){this.draggable.off("drag:start",this[l]).off("drag:move",this[d]).off("drag:stop",this[c])}getOptions(){return this.draggable.options.scrollable||{}}getScrollableElement(e){return this.hasDefinedScrollableElements()?(0,a.closest)(e,this.options.scrollableElements)||document.documentElement:function(e){if(!e)return m();const t=getComputedStyle(e).getPropertyValue("position"),i="absolute"===t,r=(0,a.closest)(e,(e=>(!i||!function(e){return"static"===getComputedStyle(e).getPropertyValue("position")}(e))&&function(e){const t=/(auto|scroll)/,i=getComputedStyle(e,null),r=i.getPropertyValue("overflow")+i.getPropertyValue("overflow-y")+i.getPropertyValue("overflow-x");return t.test(r)}(e)));return"fixed"!==t&&r?r:m()}(e)}hasDefinedScrollableElements(){return Boolean(0!==this.options.scrollableElements.length)}[l](e){this.findScrollableElementFrame=requestAnimationFrame((()=>{this.scrollableElement=this.getScrollableElement(e.source)}))}[d](e){if(this.findScrollableElementFrame=requestAnimationFrame((()=>{this.scrollableElement=this.getScrollableElement(e.sensorEvent.target)})),!this.scrollableElement)return;const t=e.sensorEvent,i={x:0,y:0};"ontouchstart"in window&&(i.y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,i.x=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0),this.currentMousePosition={clientX:t.clientX-i.x,clientY:t.clientY-i.y},this.scrollAnimationFrame=requestAnimationFrame(this[h])}[c](){cancelAnimationFrame(this.scrollAnimationFrame),cancelAnimationFrame(this.findScrollableElementFrame),this.scrollableElement=null,this.scrollAnimationFrame=null,this.findScrollableElementFrame=null,this.currentMousePosition=null}[h](){if(!this.scrollableElement||!this.currentMousePosition)return;cancelAnimationFrame(this.scrollAnimationFrame);const{speed:e,sensitivity:t}=this.options,i=this.scrollableElement.getBoundingClientRect(),r=i.bottom>window.innerHeight,n=i.top<0||r,o=m(),s=this.scrollableElement,a=this.currentMousePosition.clientX,l=this.currentMousePosition.clientY;if(s===document.body||s===document.documentElement||n){const{innerHeight:i,innerWidth:r}=window;l<t?o.scrollTop-=e:i-l<t&&(o.scrollTop+=e),a<t?o.scrollLeft-=e:r-a<t&&(o.scrollLeft+=e)}else{const{offsetHeight:r,offsetWidth:n}=s;i.top+r-l<t?s.scrollTop+=e:l-i.top<t&&(s.scrollTop-=e),i.left+n-a<t?s.scrollLeft+=e:a-i.left<t&&(s.scrollLeft-=e)}this.scrollAnimationFrame=requestAnimationFrame(this[h])}}function m(){return document.scrollingElement||document.documentElement}t.default=p},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=i(58),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default,t.defaultOptions=n.defaultOptions},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.MirrorDestroyEvent=t.MirrorMoveEvent=t.MirrorAttachedEvent=t.MirrorCreatedEvent=t.MirrorCreateEvent=t.MirrorEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get dragEvent(){return this.data.dragEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}t.MirrorEvent=s;class a extends s{}t.MirrorCreateEvent=a,a.type="mirror:create";class l extends s{get mirror(){return this.data.mirror}}t.MirrorCreatedEvent=l,l.type="mirror:created";class d extends s{get mirror(){return this.data.mirror}}t.MirrorAttachedEvent=d,d.type="mirror:attached";class c extends s{get mirror(){return this.data.mirror}get passedThreshX(){return this.data.passedThreshX}get passedThreshY(){return this.data.passedThreshY}}t.MirrorMoveEvent=c,c.type="mirror:move",c.cancelable=!0;class h extends s{get mirror(){return this.data.mirror}}t.MirrorDestroyEvent=h,h.type="mirror:destroy",h.cancelable=!0},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=i(60);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=t.getAppendableContainer=t.onScroll=t.onMirrorMove=t.onMirrorCreated=t.onDragStop=t.onDragMove=t.onDragStart=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(0),s=(r=o)&&r.__esModule?r:{default:r},a=i(61);function l(e,t){var i={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r]);return i}const d=t.onDragStart=Symbol("onDragStart"),c=t.onDragMove=Symbol("onDragMove"),h=t.onDragStop=Symbol("onDragStop"),u=t.onMirrorCreated=Symbol("onMirrorCreated"),p=t.onMirrorMove=Symbol("onMirrorMove"),m=t.onScroll=Symbol("onScroll"),g=t.getAppendableContainer=Symbol("getAppendableContainer"),f=t.defaultOptions={constrainDimensions:!1,xAxis:!0,yAxis:!0,cursorOffsetX:null,cursorOffsetY:null,thresholdX:null,thresholdY:null};class _ extends s.default{constructor(e){super(e),this.options=n({},f,this.getOptions()),this.scrollOffset={x:0,y:0},this.initialScrollOffset={x:window.scrollX,y:window.scrollY},this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[u]=this[u].bind(this),this[p]=this[p].bind(this),this[m]=this[m].bind(this)}attach(){this.draggable.on("drag:start",this[d]).on("drag:move",this[c]).on("drag:stop",this[h]).on("mirror:created",this[u]).on("mirror:move",this[p])}detach(){this.draggable.off("drag:start",this[d]).off("drag:move",this[c]).off("drag:stop",this[h]).off("mirror:created",this[u]).off("mirror:move",this[p])}getOptions(){return this.draggable.options.mirror||{}}[d](e){if(e.canceled())return;"ontouchstart"in window&&document.addEventListener("scroll",this[m],!0),this.initialScrollOffset={x:window.scrollX,y:window.scrollY};const{source:t,originalSource:i,sourceContainer:r,sensorEvent:n}=e;this.lastMirrorMovedClient={x:n.clientX,y:n.clientY};const o=new a.MirrorCreateEvent({source:t,originalSource:i,sourceContainer:r,sensorEvent:n,dragEvent:e});if(this.draggable.trigger(o),function(e){return/^drag/.test(e.originalEvent.type)}(n)||o.canceled())return;const s=this[g](t)||r;this.mirror=t.cloneNode(!0);const l=new a.MirrorCreatedEvent({source:t,originalSource:i,sourceContainer:r,sensorEvent:n,dragEvent:e,mirror:this.mirror}),d=new a.MirrorAttachedEvent({source:t,originalSource:i,sourceContainer:r,sensorEvent:n,dragEvent:e,mirror:this.mirror});this.draggable.trigger(l),s.appendChild(this.mirror),this.draggable.trigger(d)}[c](e){if(!this.mirror||e.canceled())return;const{source:t,originalSource:i,sourceContainer:r,sensorEvent:n}=e;let o=!0,s=!0;if(this.options.thresholdX||this.options.thresholdY){const{x:e,y:t}=this.lastMirrorMovedClient;if(Math.abs(e-n.clientX)<this.options.thresholdX?o=!1:this.lastMirrorMovedClient.x=n.clientX,Math.abs(t-n.clientY)<this.options.thresholdY?s=!1:this.lastMirrorMovedClient.y=n.clientY,!o&&!s)return}const l=new a.MirrorMoveEvent({source:t,originalSource:i,sourceContainer:r,sensorEvent:n,dragEvent:e,mirror:this.mirror,passedThreshX:o,passedThreshY:s});this.draggable.trigger(l)}[h](e){if("ontouchstart"in window&&document.removeEventListener("scroll",this[m],!0),this.initialScrollOffset={x:0,y:0},this.scrollOffset={x:0,y:0},!this.mirror)return;const{source:t,sourceContainer:i,sensorEvent:r}=e,n=new a.MirrorDestroyEvent({source:t,mirror:this.mirror,sourceContainer:i,sensorEvent:r,dragEvent:e});this.draggable.trigger(n),n.canceled()||this.mirror.parentNode.removeChild(this.mirror)}[m](){this.scrollOffset={x:window.scrollX-this.initialScrollOffset.x,y:window.scrollY-this.initialScrollOffset.y}}[u]({mirror:e,source:t,sensorEvent:i}){const r=this.draggable.getClassNamesFor("mirror");e.style.display="none";const o={mirror:e,source:t,sensorEvent:i,mirrorClasses:r,scrollOffset:this.scrollOffset,options:this.options,passedThreshX:!0,passedThreshY:!0};return Promise.resolve(o).then(v).then(b).then(y).then(A).then(C({initial:!0})).then(w).then((e=>{let{mirrorOffset:t,initialX:i,initialY:r}=e,o=l(e,["mirrorOffset","initialX","initialY"]);return this.mirrorOffset=t,this.initialX=i,this.initialY=r,this.lastMovedX=i,this.lastMovedY=r,n({mirrorOffset:t,initialX:i,initialY:r},o)}))}[p](e){if(e.canceled())return null;const t={mirror:e.mirror,sensorEvent:e.sensorEvent,mirrorOffset:this.mirrorOffset,options:this.options,initialX:this.initialX,initialY:this.initialY,scrollOffset:this.scrollOffset,passedThreshX:e.passedThreshX,passedThreshY:e.passedThreshY,lastMovedX:this.lastMovedX,lastMovedY:this.lastMovedY};return Promise.resolve(t).then(C({raf:!0})).then((e=>{let{lastMovedX:t,lastMovedY:i}=e,r=l(e,["lastMovedX","lastMovedY"]);return this.lastMovedX=t,this.lastMovedY=i,n({lastMovedX:t,lastMovedY:i},r)}))}[g](e){const t=this.options.appendTo;return"string"==typeof t?document.querySelector(t):t instanceof HTMLElement?t:"function"==typeof t?t(e):e.parentNode}}function v(e){let{source:t}=e,i=l(e,["source"]);return x((e=>{const r=t.getBoundingClientRect();e(n({source:t,sourceRect:r},i))}))}function b(e){let{sensorEvent:t,sourceRect:i,options:r}=e,o=l(e,["sensorEvent","sourceRect","options"]);return x((e=>{const s=null===r.cursorOffsetY?t.clientY-i.top:r.cursorOffsetY,a=null===r.cursorOffsetX?t.clientX-i.left:r.cursorOffsetX;e(n({sensorEvent:t,sourceRect:i,mirrorOffset:{top:s,left:a},options:r},o))}))}function y(e){let{mirror:t,source:i,options:r}=e,o=l(e,["mirror","source","options"]);return x((e=>{let s,a;if(r.constrainDimensions){const e=getComputedStyle(i);s=e.getPropertyValue("height"),a=e.getPropertyValue("width")}t.style.display=null,t.style.position="fixed",t.style.pointerEvents="none",t.style.top=0,t.style.left=0,t.style.margin=0,r.constrainDimensions&&(t.style.height=s,t.style.width=a),e(n({mirror:t,source:i,options:r},o))}))}function A(e){let{mirror:t,mirrorClasses:i}=e,r=l(e,["mirror","mirrorClasses"]);return x((e=>{t.classList.add(...i),e(n({mirror:t,mirrorClasses:i},r))}))}function w(e){let{mirror:t}=e,i=l(e,["mirror"]);return x((e=>{t.removeAttribute("id"),delete t.id,e(n({mirror:t},i))}))}function C({withFrame:e=!1,initial:t=!1}={}){return i=>{let{mirror:r,sensorEvent:o,mirrorOffset:s,initialY:a,initialX:d,scrollOffset:c,options:h,passedThreshX:u,passedThreshY:p,lastMovedX:m,lastMovedY:g}=i,f=l(i,["mirror","sensorEvent","mirrorOffset","initialY","initialX","scrollOffset","options","passedThreshX","passedThreshY","lastMovedX","lastMovedY"]);return x((e=>{const i=n({mirror:r,sensorEvent:o,mirrorOffset:s,options:h},f);if(s){const e=u?Math.round((o.clientX-s.left-c.x)/(h.thresholdX||1))*(h.thresholdX||1):Math.round(m),n=p?Math.round((o.clientY-s.top-c.y)/(h.thresholdY||1))*(h.thresholdY||1):Math.round(g);h.xAxis&&h.yAxis||t?r.style.transform=`translate3d(${e}px, ${n}px, 0)`:h.xAxis&&!h.yAxis?r.style.transform=`translate3d(${e}px, ${a}px, 0)`:h.yAxis&&!h.xAxis&&(r.style.transform=`translate3d(${d}px, ${n}px, 0)`),t&&(i.initialX=e,i.initialY=n),i.lastMovedX=e,i.lastMovedY=n}e(i)}),{frame:e})}}function x(e,{raf:t=!1}={}){return new Promise(((i,r)=>{t?requestAnimationFrame((()=>{e(i,r)})):e(i,r)}))}t.default=_},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=i(62),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default,t.defaultOptions=n.defaultOptions},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(0),s=(r=o)&&r.__esModule?r:{default:r};const a=Symbol("onInitialize"),l=Symbol("onDestroy"),d={};class c extends s.default{constructor(e){super(e),this.options=n({},d,this.getOptions()),this[a]=this[a].bind(this),this[l]=this[l].bind(this)}attach(){this.draggable.on("draggable:initialize",this[a]).on("draggable:destroy",this[l])}detach(){this.draggable.off("draggable:initialize",this[a]).off("draggable:destroy",this[l]),this[l]()}getOptions(){return this.draggable.options.focusable||{}}getElements(){return[...this.draggable.containers,...this.draggable.getDraggableElements()]}[a](){requestAnimationFrame((()=>{this.getElements().forEach((e=>function(e){Boolean(!e.getAttribute("tabindex")&&-1===e.tabIndex)&&(h.push(e),e.tabIndex=0)}(e)))}))}[l](){requestAnimationFrame((()=>{this.getElements().forEach((e=>function(e){const t=h.indexOf(e);-1!==t&&(e.tabIndex=-1,h.splice(t,1))}(e)))}))}}t.default=c;const h=[]},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r,n=i(64),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.draggable=e}attach(){throw new Error("Not Implemented")}detach(){throw new Error("Not Implemented")}}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=i(0),s=(r=o)&&r.__esModule?r:{default:r};const a=Symbol("onInitialize"),l=Symbol("onDestroy"),d=Symbol("announceEvent"),c=Symbol("announceMessage"),h=t.defaultOptions={expire:7e3};class u extends s.default{constructor(e){super(e),this.options=n({},h,this.getOptions()),this.originalTriggerMethod=this.draggable.trigger,this[a]=this[a].bind(this),this[l]=this[l].bind(this)}attach(){this.draggable.on("draggable:initialize",this[a])}detach(){this.draggable.off("draggable:destroy",this[l])}getOptions(){return this.draggable.options.announcements||{}}[d](e){const t=this.options[e.type];t&&"string"==typeof t&&this[c](t),t&&"function"==typeof t&&this[c](t(e))}[c](e){!function(e,{expire:t}){const i=document.createElement("div");i.textContent=e,p.appendChild(i),setTimeout((()=>{p.removeChild(i)}),t)}(e,{expire:this.options.expire})}[a](){this.draggable.trigger=e=>{try{this[d](e)}finally{this.originalTriggerMethod.call(this.draggable,e)}}}[l](){this.draggable.trigger=this.originalTriggerMethod}}t.default=u;const p=function(){const e=document.createElement("div");return e.setAttribute("id","draggable-live-region"),e.setAttribute("aria-relevant","additions"),e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","assertive"),e.setAttribute("role","log"),e.style.position="fixed",e.style.width="1px",e.style.height="1px",e.style.top="-1px",e.style.overflow="hidden",e}();document.addEventListener("DOMContentLoaded",(()=>{document.body.appendChild(p)}))},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,n=i(67),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default,t.defaultOptions=n.defaultOptions},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DraggableDestroyEvent=t.DraggableInitializedEvent=t.DraggableEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get draggable(){return this.data.draggable}}t.DraggableEvent=s,s.type="draggable";class a extends s{}t.DraggableInitializedEvent=a,a.type="draggable:initialize";class l extends s{}t.DraggableDestroyEvent=l,l.type="draggable:destroy"},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};const n=Symbol("canceled");class o{constructor(e){this[n]=!1,this.data=e}get type(){return this.constructor.type}get cancelable(){return this.constructor.cancelable}cancel(){this[n]=!0}canceled(){return Boolean(this[n])}clone(e){return new this.constructor(r({},this.data,e))}}t.default=o,o.type="event",o.cancelable=!1},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DragStoppedEvent=t.DragStopEvent=t.DragPressureEvent=t.DragOutContainerEvent=t.DragOverContainerEvent=t.DragOutEvent=t.DragOverEvent=t.DragMoveEvent=t.DragStartEvent=t.DragEvent=void 0;var r,n=i(1),o=(r=n)&&r.__esModule?r:{default:r};class s extends o.default{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get mirror(){return this.data.mirror}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}t.DragEvent=s,s.type="drag";class a extends s{}t.DragStartEvent=a,a.type="drag:start",a.cancelable=!0;class l extends s{}t.DragMoveEvent=l,l.type="drag:move";class d extends s{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}t.DragOverEvent=d,d.type="drag:over",d.cancelable=!0;class c extends s{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}t.DragOutEvent=c,c.type="drag:out";class h extends s{get overContainer(){return this.data.overContainer}}t.DragOverContainerEvent=h,h.type="drag:over:container";class u extends s{get overContainer(){return this.data.overContainer}}t.DragOutContainerEvent=u,u.type="drag:out:container";class p extends s{get pressure(){return this.data.pressure}}t.DragPressureEvent=p,p.type="drag:pressure";class m extends s{}t.DragStopEvent=m,m.type="drag:stop";class g extends s{}t.DragStoppedEvent=g,g.type="drag:stopped"},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Sensors=t.Sortable=t.Swappable=t.Droppable=t.Draggable=t.BasePlugin=t.BaseEvent=void 0;var r=i(5);Object.defineProperty(t,"Draggable",{enumerable:!0,get:function(){return u(r).default}});var n=i(36);Object.defineProperty(t,"Droppable",{enumerable:!0,get:function(){return u(n).default}});var o=i(33);Object.defineProperty(t,"Swappable",{enumerable:!0,get:function(){return u(o).default}});var s=i(30);Object.defineProperty(t,"Sortable",{enumerable:!0,get:function(){return u(s).default}});var a=u(i(1)),l=u(i(0)),d=h(i(6)),c=h(i(27));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function u(e){return e&&e.__esModule?e:{default:e}}t.BaseEvent=a.default,t.BasePlugin=l.default,t.Sensors=d,t.Plugins=c}])}));let Xd,Wd,Qd,Kd,Jd,Zd=e=>e;class ec extends le{constructor(){super(...arguments),this.serverURL="",this.sortColumn="name",this.isAscending=!0,this.inputModalType="",this.inputModalState=!1,this.uploadModalState=!1,this.appShown=!0,this.showsubmit=!0,this.files=[],this.directryKey=0,this.thumbsize=15,this.showSettings=!1,this.context={path:"/"},this.activeItem=null,this.currentContext="dir",this.searchTerm="",this.isLoading=!1,this.onFileUpload=e=>{this.vaadinUpload.files.map((e=>!e.complete)).length===this.vaadinUpload.files.length&&(this.vaadinUpload.files=[],this.reloadFiles())},this.handleSubmit=e=>{const t=new CustomEvent("mediaselected",{detail:this.activeItem});this.dispatchEvent(t)},this.handleCancel=()=>{const e=new CustomEvent("fm:cancelled");this.dispatchEvent(e)},this.handleSelection=e=>r(this,void 0,void 0,(function*(){this.context=e.detail,this.currentContext="dir",yield this.getFiles(e.detail.path)})),this.toggleSettings=()=>{this.showSettings=!this.showSettings},this.rename=e=>r(this,void 0,void 0,(function*(){let t=`${this.serverURL}/rename`,i={context:this.context.path,filename:this.activeItem.name,newFilename:e,filePath:this.activeItem.path};return"dir"===this.currentContext?i.context=i.context.split("/"):t=`${this.serverURL}/rename`,fetch(t,{method:"POST",body:JSON.stringify(i),headers:{"content-type":"application/json"}})})),this.handleSearch=e=>{this.searchTerm=e.target.value},this.handleFileAction=e=>{switch(e.detail){case"new-subfolder":case"rename":this.inputModalType=e.detail,this.toggleInputModal();break;case"replace":this.inputModalType=e.detail,this.toggleUploadModal();break;case"change-alt":this.inputModalType=e.detail,this.toggleInputModal();break;case"download":this.triggerDownload()}},this.changeAlt=e=>r(this,void 0,void 0,(function*(){let t=`${this.serverURL}/meta`,i={context:this.context.path,filename:this.activeItem.name,description:e};return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})})),this.handleInoutSelect=e=>r(this,void 0,void 0,(function*(){switch(this.inputModalType){case"new-subfolder":yield this.createNewSubFolder(e.detail),this.directryKey=Math.random(),this.toggleInputModal();break;case"rename":yield this.rename(e.detail),this.resetSelection(),this.toggleInputModal(),this.reloadFiles();break;case"replace":this.toggleUploadModal(),this.reloadFiles(),this.resetSelection();break;case"change-alt":yield this.changeAlt(e.detail),this.toggleInputModal(),this.reloadFiles(),this.resetSelection()}})),this.handleThumbChange=e=>{this.thumbsize=e.detail}}toggleInputModal(){this.inputModalState=!this.inputModalState}toggleUploadModal(){this.uploadModalState=!this.uploadModalState}attributeChangedCallback(e,t,i){console.log("attribute change: ",e,i),super.attributeChangedCallback(e,t,i),"appshown"===e&&"true"===i&&this.getFiles(this.context.path),console.log({a:this.appShownElem}),this.appShownElem&&(console.log(this.querySelectorAll("file-card")),new Draggable.Draggable(this.appShownElem,{draggable:"file-card",dropzone:"file-directories"}),new Draggable.Droppable(this.appShownElem,{draggable:"file-card",dropzone:"file-directories"}))}reloadFiles(){return r(this,void 0,void 0,(function*(){this.getFiles(this.context.path)}))}getFiles(e){return r(this,void 0,void 0,(function*(){this.isLoading=!0,this.files=[],this.files=(yield(yield fetch(`${this.serverURL}/file?context=${e}`)).json()).data,this.showsubmit&&(this.files=this.files.filter((e=>"video"!==e.type))),this.isLoading=!1}))}triggerDownload(){const e=document.createElement("a");e.href=`${this.serverURL}/static${this.activeItem.path}`,e.target="_blank",document.body.appendChild(e),e.click(),document.body.removeChild(e)}createNewSubFolder(e){return r(this,void 0,void 0,(function*(){return fetch(`${this.serverURL}/directory`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({context:this.context.path,dir:e})})}))}resetSelection(){this.activeItem=null,this.currentContext="dir"}handleSortChange(e){console.log(e.detail,this.files),this.sortColumn=e.detail.column,this.isAscending=e.detail.isAscending}getSortedFiles(){return this.files.sort(((e,t)=>{const i="string"==typeof e[this.sortColumn]?e[this.sortColumn].toLowerCase():e[this.sortColumn],r="string"==typeof t[this.sortColumn]?t[this.sortColumn].toLowerCase():t[this.sortColumn];return this.isAscending?i>r?1:-1:i>r?-1:1}))}render(){return V(Xd||(Xd=Zd`<input-modal .opened="${0}" @onsubmit="${0}"></input-modal> <input-modal-upload .opened="${0}" serverURL="${0}" imagePath="${0}" @onsubmit="${0}"></input-modal-upload> <div class="${0}"> <of-settings .show="${0}" @op:sortfield="${0}" @of:close-settings="${0}" @op:thumbchange="${0}"></of-settings> <div class="wrapper"> <loading-spinner .show="${0}"></loading-spinner> <file-actions selectedItemType="${0}" context="${0}" @onaction="${0}"></file-actions> <div class="padding-x"> <vaadin-text-field placeholder="Search..." @input="${0}"></vaadin-text-field> </div> <div class="setting-container"> <iron-icon icon="settings" role="button" @click="${0}"></iron-icon> </div> </div> <file-directories changed="${0}" .serverURL="${0}" class="drawer" @onselection="${0}"></file-directories> <div class="content flex flex-col"> <vaadin-upload style="overflow:visible" data-action="edit" type="file" accept="video/*,image/*" .target="${0}" .headers="${0}" @upload-success="${0}"> </vaadin-upload> <div class="image-wrapper"> ${0} ${0} </div> </div> <section class="${0}"> <section> <vaadin-button @click="${0}">Cancel</vaadin-button> <vaadin-button theme="primary" @click="${0}" .disabled="${0}">Submit</vaadin-button> </section> </section> </div> `),this.inputModalState,this.handleInoutSelect,this.uploadModalState,this.serverURL,this.activeItem?this.activeItem.path:"",this.handleInoutSelect,this.appShown?"app-layout":"hidden app-layout",this.showSettings,this.handleSortChange,(e=>this.toggleSettings()),this.handleThumbChange,this.isLoading,this.activeItem?this.activeItem.type:"",this.currentContext,this.handleFileAction,this.handleSearch,this.toggleSettings,this.directryKey,this.serverURL,this.handleSelection,`${this.serverURL}/file`,{path:this.context.path},this.onFileUpload,0===this.getSortedFiles().length?V(Wd||(Wd=Zd`<h4>No files Found</h4>`)):V(Qd||(Qd=Zd``)),this.getSortedFiles().filter((e=>!this.searchTerm||e.name.toLowerCase().includes(this.searchTerm.toLowerCase()))).map((e=>V(Kd||(Kd=Zd`<file-card style="${0}" .serverURL="${0}" .data="${0}" @dblclick="${0}" @click="${0}" .selected="${0}"></file-card>`),`width:${this.thumbsize}em`,this.serverURL,e,(e=>{this.handleSubmit(e)}),(t=>{this.activeItem=e,this.currentContext="file"}),this.activeItem===e))),"selection "+(this.showsubmit?"":"hidden"),this.handleCancel,this.handleSubmit,!this.activeItem)}}ec.styles=se(Jd||(Jd=Zd`:host{overflow:hidden;position:relative;background:#f1f1f1;flex:1 1 100%;display:block;position:relative;flex-direction:column;align-items:center;justify-content:flex-start;font-size:calc(10px + 2vmin);color:#1a2b42;margin:0 auto}.wrapper{display:flex;justify-content:space-between;width:100%;border-bottom:1px;border-style:solid;border-color:#d1d1d1}.main{display:flex;position:relative}.drawer{flex:0 0 25%;min-width:200px}.padding-x{padding:0 10px}.flex{display:flex}.flex-col{flex-direction:column}[part=row]:selected{box-shadow:inset 0 0 0 1px var(--lumo-contrast-30pct);border:5px solid red;background-color:var(--lumo-base-color)}.image-wrapper{display:flex;justify-content:center;flex-direction:row;flex-wrap:wrap;overflow-y:scroll}.selection{width:100%;height:50px;background:#fff;border-top:1px;border-style:solid;border-color:#ccc;position:absolute;bottom:0;left:0;display:flex;justify-content:flex-end;padding:0 15px;box-sizing:border-box;z-index:9999}.app-layout{display:grid;width:100%;height:100%;grid-template-areas:'head head head' 'drawer main main' 'drawer footer footer';grid-gap:10px;grid-template-rows:50px 1fr 50px;grid-template-columns:250px 1fr}.app-layout>.wrapper{grid-area:head}.app-layout>file-directories{grid-area:drawer}.app-layout>.selection{grid-area:footer}.hidden{display:none}.content{grid-area:main;overflow:hidden;padding:10px;background-color:#fff;display:flex;align-items:center;width:100%}.setting-container{display:flex;padding:10px 10px}`)),i([ee(".app-layout")],ec.prototype,"appShownElem",void 0),i([ee("input-modal")],ec.prototype,"inputModal",void 0),i([ee("input-modal-upload")],ec.prototype,"uploadImageModal",void 0),i([ee("vaadin-upload")],ec.prototype,"vaadinUpload",void 0),i([Z({type:String})],ec.prototype,"serverURL",void 0),i([Z({type:String})],ec.prototype,"sortColumn",void 0),i([Z({type:Boolean})],ec.prototype,"isAscending",void 0),i([Z({type:String})],ec.prototype,"inputModalType",void 0),i([Z({type:Boolean})],ec.prototype,"inputModalState",void 0),i([Z({type:Boolean})],ec.prototype,"uploadModalState",void 0),i([Z({type:Boolean})],ec.prototype,"appShown",void 0),i([Z({type:Boolean})],ec.prototype,"showsubmit",void 0),i([Z({type:Array})],ec.prototype,"files",void 0),i([Z({type:Number})],ec.prototype,"directryKey",void 0),i([Z({type:Number})],ec.prototype,"thumbsize",void 0),i([Z({type:Boolean})],ec.prototype,"showSettings",void 0),i([Z({type:Object})],ec.prototype,"context",void 0),i([Z({type:Object})],ec.prototype,"activeItem",void 0),i([Z({type:String})],ec.prototype,"currentContext",void 0),i([Z({type:String})],ec.prototype,"searchTerm",void 0),i([Z({type:Boolean})],ec.prototype,"isLoading",void 0),customElements.define("file-manager",ec);
