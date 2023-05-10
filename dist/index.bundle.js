"use strict";(self.webpackChunkwebpack_setup=self.webpackChunkwebpack_setup||[]).push([[826],{426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,'\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(239, 239, 239);\r\n  font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nmain {\r\n  background-color: #f5f5f5;\r\n  box-shadow: 0 0 4rem rgb(53, 48, 41);\r\n  width: 50%;\r\n  margin: 20px auto;\r\n  padding: 10px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  border: 1px solid rgb(210, 210, 210);\r\n  padding: 10px;\r\n}\r\n\r\n.header h1 {\r\n  font-size: 22px;\r\n}\r\n\r\n.tasks_input {\r\n  width: 100%;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 20px;\r\n  padding: 10px;\r\n  border: 1px solid rgb(203, 202, 202);\r\n}\r\n\r\nform input {\r\n  width: 90%;\r\n  padding: 12px;\r\n}\r\n\r\nform button {\r\n  width: 20%;\r\n}\r\n\r\n#tasks_lists {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.listsdiv {\r\n  width: 100%;\r\n  border: 1px solid rgb(220, 215, 215);\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.listsdiv input[type="text"] {\r\n  width: 100%;\r\n  margin: 10px;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  width: 10%;\r\n  height: 20px;\r\n}\r\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],p=i[d]||0,u="".concat(d," ").concat(p);i[d]=p+1;var l=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var p=r(i[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},515:(n,e,r)=>{var t=r(379),o=r.n(t),i=r(795),a=r.n(i),c=r(569),s=r.n(c),d=r(565),p=r.n(d),u=r(216),l=r.n(u),f=r(589),m=r.n(f),h=r(426),v={};v.styleTagTransform=m(),v.setAttributes=p(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const x=[{description:"Learn basic fundamentals",completed:!1,index:4},{description:"Take break of 15 munite",completed:!1,index:2},{description:"Meet my coding partner after break",completed:!1,index:3},{description:"Meet my coding partner after break",completed:!0,index:1}];(()=>{const n=document.getElementById("tasks_lists");n.innerHTML="",x.sort(((n,e)=>n.index-e.index)),x.forEach((e=>{const r=document.createElement("li"),t=document.createElement("input"),o=document.createElement("input"),i=document.createElement("button"),a=document.createElement("div");a.className="listsdiv",i.innerHTML="",i.innerText="Remove",t.type="checkbox",o.type="text",o.value=`${e.description}`,a.append(t,o,i),r.append(a),e.completed&&r.classList.add("completed"),n.appendChild(r)}))})()}},n=>{n(n.s=515)}]);