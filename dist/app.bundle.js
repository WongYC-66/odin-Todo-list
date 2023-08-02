(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap);"]),d.push([t.id,":root {\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n#container {\n    height: 900px;\n    /*  */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n}\n#container.inactive{\n    opacity: 0.1;\n}\n\n#header {\n    padding: 10px;\n    font-size: 2rem;\n    background-color: #2f2f2f;\n    color: white;\n}\n\n#content {\n    flex: 1;\n    /*  */\n    display: flex;\n\n}\n\n.side-bar {\n    flex: 2.5;\n    max-height: 750px;\n    padding: 30px;\n    background-color: #535353;\n    color: white;\n    overflow-y: auto;\n    /*  */\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\n.project-card {\n    border: 3px solid white;\n    padding: 15px 30px;\n    border-radius: 15px;\n}\n\n.project-card:hover {\n    cursor: pointer;\n    transform: translateY(-2px);\n    transition: all 0.2s;\n    box-shadow: 3px 3px 0.5px 0.5px rgba(255, 255, 255, 0.75);\n\n}\n\n.content-box {\n    flex: 7;\n    padding: 30px;\n    max-height: 750px;\n    overflow-y: auto;\n    /*  */\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n\n}\n\n.todo-card{\n    /* border: 1px solid black; */\n    padding: 10px 0px;\n    /*  */\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 15px;\n}\n.todo-card:hover{\n    background-color: #53535353;\n}\n\n.todo-card p:first-child{\n    flex: 1;\n}\n\n.icon{\n    width: 30px;\n}\n.icon:hover{\n    cursor: pointer;\n    color: aliceblue;\n    transform: translateY(-2px);\n    transition: all 0.2s;\n}\n.todo-card .priority-low{\n    background-color: #81c867;\n    padding: 5px;\n}\n.todo-card .priority-high{\n    background-color: #c86767;\n    padding: 5px;\n}\n\n#addTodoBtn,\n#addProjectBtn {\n    position: fixed;\n    right: 5%;\n    bottom: 10%;\n    font-size: 2rem;\n    padding: 10px 20px;\n    border-radius: 100%;\n    background-color: #535353;\n    color: whitesmoke;\n    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n}\n\n#addProjectBtn {\n    background-color: whitesmoke;\n    color: #535353;\n    right: 83%;\n}\n\n#addTodoBtn:hover,\n#addProjectBtn:hover{\n    cursor: pointer;\n    background-color: #81c867;\n    color: aliceblue;\n    transform: rotate(180deg);\n    transition: all 0.5s;\n    box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.35);\n\n}\n\n#footer {\n    padding: 10px;\n    text-align: center;\n    background-color: #2f2f2f;\n    color: white;\n}\n\n/* form */\n#projectForm{\n    border: 1px solid whitesmoke;\n    background-color: #2f2f2f;\n    padding: 25px 35px;\n    position: fixed;\n    top: 35%;\n    left: 35%;\n    width: 300px;\n\n    /*  */\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between ;\n    gap: 15px;\n    \n}\n\n#projectForm input{\n    width: 100%;\n}\n#projectForm .add,\n#projectForm .cancel,\n#todoForm .add,\n#todoForm .cancel{\n    background-color: whitesmoke;\n    color: #2f2f2f;\n    padding: 15px 25px;\n    width: 30%;\n    text-align: center;\n}\n#projectForm .cancel,\n#todoForm .cancel{\n    background-color: #2f2f2f;\n    border: 1px solid whitesmoke;\n    color: whitesmoke;\n}\n\n#projectForm .add:hover,\n#projectForm .cancel:hover,\n#todoForm .add:hover,\n#todoForm .cancel:hover{\n    cursor: pointer;\n    background-color: #979797;\n}\n\n/* form */\n#todoForm{\n    border: 1px solid whitesmoke;\n    background-color: #2f2f2f;\n    color: whitesmoke;\n    padding: 25px 35px;\n    position: fixed;\n    top: 30%;\n    left: 25%;\n    width: 500px;\n    \n    /*  */\n    display: grid;\n    grid-auto-columns: 1fr 1.5fr;\n    gap: 15px;\n    \n}\n\n#todoForm > input,\n#todoForm > select,\n#todoForm > .cancel,\n#todoForm > .add{\n    grid-column: 2;    \n}\n\n#todoForm > .cancel,\n#todoForm > .add{\n    width: 60%;\n    justify-self: center;\n}\n\n#todoForm > .add{\n    width: 78%;\n    justify-self: center;\n}",""]);const c=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(d[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},d=[],c=0;c<t.length;c++){var a=t[c],l=o.base?a[0]+o.base:a[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=n(p),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}d.push(p)}return d}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var d=0;d<i.length;d++){var c=n(i[d]);e[c].references--}for(var a=o(t,r),l=0;l<i.length;l++){var s=n(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=a}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{class t{constructor(t){this.projectArr=[],this.name=t,this.selectedIndex=null}add(t){this.projectArr.push(t)}remove(t){this.projectArr.splice(t,1)}getLastIndex(){return this.projectArr.length-1}}class e{constructor(t){this.todoArray=[],this.name=t}addTodo(t){this.todoArray.push(t)}removeTodo(t){this.todoArray.splice(t,1)}moveItemToNewProject(t,e){let n=this.todoArray[t];this.removeTodo(t),e.addTodo(n)}}class o{constructor({title:t,description:e,dueDate:n,priority:o}){this.title=t,this.description=e,this.dueDate=n,this.priority=o}changePriority(t){this.priortity=t}edit({title:t,description:e,dueDate:n,priority:o}){this.title=t,this.description=e,this.dueDate=n,this.priority=o}}const r=n.p+"8d317290131028fe10cf.svg",i=n.p+"bde675c38d54979f589e.svg";function d(t,e){const n=document.createElement("button");return n.textContent="+",t.append(n),"todo"==e?n.id="addTodoBtn":"project"==e&&(n.id="addProjectBtn"),n}function c(t,e,n){if(!t)return console.log("error type");let o=document.createElement(t);return e&&(o.id=e),n&&o.classList.add(n),o}function a(t,e){Object.keys(e).forEach((n=>t.setAttribute(n,e[n])))}function l(){document.querySelector("#container").classList.toggle("inactive"),document.querySelector("#projectForm").style.visibility="hidden"}function s(t){document.querySelector("#container").classList.toggle("inactive"),document.querySelector("#todoForm").style.visibility="visible",document.querySelector("#projectForm").style.visibility="hidden",document.querySelector("#todoForm .add").textContent="edit"==t?"Edit":"Add"}function p(){document.querySelector("#container").classList.toggle("inactive"),document.querySelector("#todoForm").style.visibility="hidden"}var u=n(379),f=n.n(u),m=n(795),h=n.n(m),x=n(569),y=n.n(x),g=n(565),v=n.n(g),b=n(216),w=n.n(b),j=n(589),S=n.n(j),C=n(426),A={};A.styleTagTransform=S(),A.setAttributes=v(),A.insert=y().bind(null,"head"),A.domAPI=h(),A.insertStyleElement=w(),f()(C.Z,A),C.Z&&C.Z.locals&&C.Z.locals;let F=new t("myNewProjectList");const k=new e("default"),T=new o({title:"todo Item #1",description:"no descrption",dueDate:"2023-08-21",priority:"low"});let q=k,E={mode:!1,editingTodo:null};if(k.addTodo(T),F.add(k),O()){console.log("cache found");let t=O();F=t[0],q=t[1],console.log(F),console.log(q)}else console.log("no cache");!function(){const t=c("div","container"),e=c("div","header"),n=c("div","content"),o=c("div",null,"side-bar"),r=c("div",null,"content-box");n.append(o,r);const i=c("div","footer");t.append(e,n,i),document.body.appendChild(t),function({header:t,sidebar:e,contentBox:n,footer:o}){t.textContent="To-do List",e.textContent="sidebar",n.textContent="contentBox",o.textContent="copyright @2023 YC-Wong66"}({container:t,header:e,content:n,sidebar:o,contentBox:r,footer:i}),function({container:t}){(()=>{const t=c("form","projectForm"),e=c("input",null),n=c("div",null,"add"),o=c("div",null,"cancel");e.setAttribute("type","text"),n.textContent="Add",o.textContent="Cancel",t.append(e,n,o),t.style.visibility="hidden",document.body.appendChild(t)})(),(()=>{const t=c("form","todoForm"),e=c("div"),n=c("div"),o=c("div"),r=c("div");e.textContent="to-do : ",n.textContent="details : ",o.textContent="due date : ",r.textContent="priority : ";const i=c("input"),d=c("input"),l=c("input"),s=c("select"),p=c("option"),u=c("option");a(i,{type:"text",required:"true"}),a(d,{type:"text",required:"true"}),a(l,{type:"date",required:"true"}),p.textContent="low",u.textContent="high",s.add(p),s.add(u);const f=c("button",null,"add"),m=c("div",null,"cancel");a(f,{type:"submit"}),f.textContent="Add",m.textContent="Cancel",t.append(e,i,n,d,o,l,r,s,f,m),t.style.visibility="hidden",document.body.appendChild(t)})()}({container:t}),d(r,"todo"),d(o,"project")}(),M(F);const L=document.querySelector("#projectForm .add"),I=document.querySelector("#projectForm .cancel"),P=document.querySelector("#todoForm .add"),B=document.querySelector("#todoForm .cancel");function N(){const t=document.querySelector("#addProjectBtn"),e=document.querySelector("#addTodoBtn");t.addEventListener("click",(()=>{document.querySelector("#container").classList.toggle("inactive"),document.querySelector("#projectForm").style.visibility="visible",document.querySelector("#todoForm").style.visibility="hidden"})),e.addEventListener("click",(()=>{s()}));const n=document.querySelector(".content-box h1 .icon");n&&(n.addEventListener("click",(t=>{let e=t.target.parentNode.getAttribute("project-index");F.remove(e),M(F),D(F)})),document.querySelectorAll(".todo-card .icon:nth-of-type(2)").forEach((t=>{t.addEventListener("click",(()=>{let e=t.parentNode.getAttribute("todo-index");q.removeTodo(e),M(F),D(F)}))})),document.querySelectorAll(".todo-card .icon:nth-of-type(1)").forEach((t=>{t.addEventListener("click",(()=>{E.mode=!0;let e=t.parentNode.getAttribute("todo-index");E.editingTodo=q.todoArray[e],s("edit"),D(F)}))})),document.querySelectorAll(".project-card").forEach(((t,e)=>{t.addEventListener("click",(()=>{F.selectedIndex=e,q=F.projectArr[e],M(F),D(F)}))})))}function M(t){!function(t){const e=document.querySelector(".side-bar");e.innerHTML="";const n=c("h2");n.textContent="Projects",e.appendChild(n),t.projectArr.forEach((t=>{const n=c("div",null,"project-card");n.textContent=t.name,e.appendChild(n)})),d(e,"project");const o=document.querySelector(".content-box");if(o.innerHTML="",t.projectArr.length<=0)return d(o,"todo");let a=t.selectedIndex;(!a||a>t.projectArr.length-1)&&(a=0);const l=t.projectArr[a],s=c("h1"),p=c("img");s.setAttribute("project-index",a),s.textContent=l.name,p.src=i,p.classList.add("icon"),s.append(p),o.append(s),l.todoArray.forEach(((t,e)=>{const n=c("div",null,"todo-card"),d=c("p"),a=c("p"),l=c("img"),s=c("img"),p=c("p");n.setAttribute("todo-index",e),d.textContent=t.title,a.textContent=t.dueDate,l.src=r,l.classList.add("icon"),s.src=i,s.classList.add("icon"),p.textContent=t.priority,p.classList.add(`priority-${t.priority}`),n.append(d,a,l,s,p),o.appendChild(n)})),d(o,"todo")}(t),N()}function D(t){localStorage.setItem("data",JSON.stringify(t))}function O(){let n=JSON.parse(localStorage.getItem("data"));if(!n)return!1;if(n){const r=new t(n.name);r.selectedIndex=n.selectedIndex,n.projectArr.forEach((t=>{let n=new e(t.name);t.todoArray.forEach((t=>{let e=new o(t);n.addTodo(e)})),r.add(n)}));const i=r.projectArr[r.selectedIndex];return[r,i]}}L.addEventListener("click",(()=>{l();let t=document.querySelector("#projectForm input").value;if(t){const n=new e(t);F.add(n),q=n,F.selectedIndex=F.getLastIndex(),M(F),D(F)}})),I.addEventListener("click",(()=>{l()})),P.parentNode.addEventListener("submit",(t=>{t.preventDefault(),p();const e=document.querySelector("#todoForm"),n=e.querySelectorAll("input");let r={title:n[0].value,description:n[1].value,dueDate:n[2].value,priority:e.querySelector("select").value};if(E.mode)E.mode=!1,console.log(E.editingTodo),E.editingTodo.edit(r),E.editingTodo=null;else{const t=new o(r);q.addTodo(t)}M(F),D(F)})),B.addEventListener("click",(()=>{p()}))})()})();