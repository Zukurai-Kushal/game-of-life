(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var a=t(601),o=t.n(a),i=t(314),r=t.n(i),l=t(417),s=t.n(l),c=new URL(t(822),t.b),d=r()(o());d.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Varela+Round&display=swap);"]);var p=s()(c);d.push([n.id,`:root{\n    --game-display-size: min(800px, 70vw, 85vh);\n    --color-background: #052e16;\n    --color-highlight: #84cc16;\n    --color-bright: #a3e635;\n    --color-black-tint: rgba(0,0,0,0.25);\n    font-size: clamp(1rem, 1vw, 2rem);\n}\n\nbody{\n    background-color: #000000;\n    background-image: url(${p});\n}\n\n#content{\n    padding: 20px;\n    color: var(--color-bright);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    font-family: "Varela Round", serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\n#game-description{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-inline-size: 66ch;\n    line-height: 1.65;\n    border-radius: 10px;\n}\n\n#game-description .title{\n    font-size: 2em;\n    font-family: "Orbitron", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n}\n\n#game-description ol, #game-description .description{\n    background-color: var(--color-black-tint);\n    border-radius: 5px;\n}\n\n#game-display-container{\n    position: relative;\n    align-self: center;\n    display: grid;\n    gap: 10px;\n    grid-template-columns: min-content 1fr min-content;\n    grid-template-rows: min-content 1fr min-content;\n    margin: 20px 0px;\n}\n\n.offset-button[direction="up"]{\n    grid-area: 1/2/2/3;\n}\n\n.offset-button[direction="down"] {\n    grid-area: 3/2/4/3;\n}\n\n.offset-button[direction="down"] .svg-container{\n    transform: rotate(180deg);\n}\n\n.offset-button[direction="left"] {\n    grid-area: 2/1/3/2;\n}\n\n.offset-button[direction="left"] .svg-container {\n    transform: rotate(270deg);\n}\n\n.offset-button[direction="right"] {\n    grid-area: 2/3/2/4;\n}\n\n.offset-button[direction="right"] .svg-container {\n    transform: rotate(90deg);\n}\n\n#game-grid{\n    grid-area: 2/2/3/3;\n    border-collapse: collapse;\n    width: var(--game-display-size);\n    height: var(--game-display-size);\n    background-color: var(--color-background);\n}\n\n#game-grid .cell{\n    width: auto;\n    border: 1px solid var(--color-black-tint);\n}\n\n#game-grid .cell.alive{\n    background-color: var(--color-highlight);\n}\n\n.offset-button{\n    background-color: transparent;\n    color: var(--color-background);\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n}\n\n.offset-button:hover{\n    color: var(--color-bright);\n}\n\n.svg-container{\n    width: 1.5em;\n}\n\nbutton {\n    display: grid;\n    place-content: center;\n}\n\n.svg-container svg{\n    fill: currentColor;\n}\n\n#play-stop-button .svg-container{\n    display: none;\n}\n\n#play-stop-button[display="play"] .play-icon, #play-stop-button[display="stop"] .stop-icon{\n    display: block;\n}\n\n#game-status-container{\n    grid-area: 2/2/3/3;\n    position: absolute;\n    margin: 5px;\n    font-size: 0.7em;\n    font-family: "Roboto", serif;\n    font-weight: 300;\n    color: var(--color-bright);\n    pointer-events: none;\n}\n\n.game-status{\n    display: flex;\n    justify-content: space-between;\n    gap: 1ch;\n}\n\n#game-control-panel{\n    display: flex;\n    align-self: center;\n    min-width: var(--game-display-size);\n    align-items: stretch;\n    justify-content: center;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#game-control-panel button{\n    color: var(--color-highlight);\n    background-color: var(--color-background);\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n}\n\n#game-control-panel button:hover{\n    color: var(--color-background);\n    background-color: var(--color-highlight);\n}\n\n.slider-container{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    color: var(--color-highlight);\n    background-color: var(--color-black-tint);\n}\n\n.slider-container .svg-container{\n    width: 50px;\n}\n\n.slider-container .value-container{\n    min-width: 7ch;\n    display: flex;\n    justify-content: end;\n    gap: 5px;\n    font-family: "Roboto", serif;\n    font-weight: 300;\n    color: var(--color-bright);\n    background-color: var(--color-black-tint);\n    border-radius: 2px;\n}\n\n.slider {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    color: currentColor;\n    background: var(--color-background);\n    outline: none;\n    -webkit-transition: .2s;\n    transition: .2s;\n}\n\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: currentColor;\n    cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: currentColor;\n    cursor: pointer;\n}\n\n@media screen and (min-width: 1400px) {\n    #content {\n        flex-direction: row;\n        align-items: flex-start;\n    }\n    #game-control-panel{\n        min-width: 300px;\n    }\n}`,""]);const u=d},380:(n,e,t)=>{t.d(e,{A:()=>l});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,'/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n    4.1 Fallback fonts\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }',""]);const l=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(r[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);a&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},r=[],l=0;l<n.length;l++){var s=n[l],c=a.base?s[0]+a.base:s[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=o(h,a);a.byIndex=l,e.splice(l,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=a(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var l=t(i[r]);e[l].references--}for(var s=a(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},822:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 304 304%27 width=%27304%27 height=%27304%27%3E%3Cpath fill=%27%23052e16%27 fill-opacity=%270.4%27 d=%27M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z%27%3E%3C/path%3E%3C/svg%3E"}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=a[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var a=t(72),o=t.n(a),i=t(825),r=t.n(i),l=t(659),s=t.n(l),c=t(56),d=t.n(c),p=t(540),u=t.n(p),h=t(113),m=t.n(h),v=t(380),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=u(),o()(v.A,g),v.A&&v.A.locals&&v.A.locals;var f=t(208),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=u(),o()(f.A,b),f.A&&f.A.locals&&f.A.locals;let y=new Set,z=0,w=0;function x(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset";"reset"===n?y=new Set(["1,0","2,1","2,2","1,2","0,2","3,11","4,10","4,9","5,10","5,11"]):"clear"===n?y=new Set:console.error("Invalid type!"),w=y.size,z=0}function H(n){return`${n[0]},${n[1]}`}function L(n){const e=n.split(",");return[Number(e[0]),Number(e[1])]}function C(){y=function(){let n=new Set,e=new Set;return y.forEach((n=>{const[t,a]=L(n);e.add(H([t-1,a-1])),e.add(H([t-1,a])),e.add(H([t-1,a+1])),e.add(H([t,a-1])),e.add(H([t,a])),e.add(H([t,a+1])),e.add(H([t+1,a-1])),e.add(H([t+1,a])),e.add(H([t+1,a+1]))})),e.forEach((e=>{(function(n){if(y.has(n)){let e=V(n);return!(e<2||e>3)}if(3===V(n))return!0})(e)&&n.add(e)})),n}(),z++,w=y.size}function V(n){const[e,t]=L(n);let a=0;return y.has(H([e-1,t-1]))&&a++,y.has(H([e-1,t]))&&a++,y.has(H([e-1,t+1]))&&a++,y.has(H([e,t-1]))&&a++,y.has(H([e,t+1]))&&a++,y.has(H([e+1,t-1]))&&a++,y.has(H([e+1,t]))&&a++,y.has(H([e+1,t+1]))&&a++,a}function k(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"div"};const e=document.createElement(n.type);if("id"in n&&(e.id=n.id),"classList"in n)for(const t of n.classList)e.classList.add(t);if("attribute"in n)for(const t of n.attribute)e.setAttribute(t[0],t[1]);return"text"in n&&(e.textContent=n.text),"SVGIcon"in n&&e.appendChild(A(n.SVGIcon)),"eventListener"in n&&e.addEventListener(n.eventListener[0],n.eventListener[1]),e}function A(n){const e=document.createElement("div");return e.classList.add("svg-container"),fetch(n).then((n=>n.text())).then((n=>{e.innerHTML=n})).catch((n=>console.error("Error loading the SVG: ",n))),e}function M(n){const e=k({type:"div",classList:arguments.length>1&&void 0!==arguments[1]?arguments[1]:["parent-container"]});for(const t of n)e.appendChild(t);return e}const I=t.p+"690d22f7be63a407d563.svg",E=t.p+"9ee4a23d852217c79e80.svg",S=t.p+"6fdfa4a59b3d155367d5.svg",T=t.p+"b1f1ac74e3bd6ccdd4c5.svg",R=t.p+"6b6d2c19e7ff6cf0892a.svg",B=t.p+"8b3455d717d5c885f9af.svg",j=t.p+"279d9ca7020d07eda19c.svg",G=t.p+"0e969449b5023ce6e23c.svg";let N=50,U=[-20,-10],P=60;const O=document.getElementById("game-display-container");let $;function D(n){null===document.getElementById("game-grid")&&J();const e=document.getElementById("game-grid");for(const n of e.querySelectorAll(".cell.alive"))n.classList.remove("alive");n.forEach((n=>{let[t,a]=F("display",L(n));t>=0&&t<N&&a>=0&&a<N&&e.rows[t].cells[a].classList.add("alive")})),_()}function _(){document.getElementById("generation-count").textContent=z,document.getElementById("population-count").textContent=w}function F(n,e){let[t,a]=e,o=0;if("display"==n)o=1;else{if("gameState"!=n)return void console.error("Offset destination not valid!");o=-1}return t+=Math.floor(N/2)*o,a+=Math.floor(N/2)*o,t+=U[0]*o,a+=U[1]*o,[t,a]}function q(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;N=n;try{const e=document.getElementById("game-grid");e.innerHTML="";for(let t=0;t<n;t++){let a=e.insertRow();for(let e=0;e<n;e++){let n=a.insertCell();n.setAttribute("row",t),n.setAttribute("col",e),n.classList.add("cell")}}const t=document.getElementById("grid-size");t&&(t.innerText=n)}catch(n){console.log(n)}}function J(){O.innerHTML="";const n=k({type:"table",id:"game-grid"});n.onclick=n=>{if(n.target.classList.contains("cell")){n.target.classList.toggle("alive");let[e,t]=[Number(n.target.getAttribute("row")),Number(n.target.getAttribute("col"))];[e,t]=F("gameState",[e,t]),function(n){const e=H(n);y.has(e)?(y.delete(e),w--):(y.add(e),w++)}([e,t]),_()}},O.appendChild(n),q(),O.appendChild(Q("up")),O.appendChild(Q("down")),O.appendChild(Q("left")),O.appendChild(Q("right"));const e=k({type:"div",id:"game-status-container"});O.appendChild(e);const t=k({type:"div",classList:["game-status"]});e.appendChild(t),t.appendChild(k({type:"label",text:"Generation"})),t.appendChild(k({type:"div",text:z,id:"generation-count"}));const a=k({type:"div",classList:["game-status"]});e.appendChild(a),a.appendChild(k({type:"label",text:"Population"})),a.appendChild(k({type:"div",text:w,id:"population-count"}))}function Q(n){const e=k({type:"button",classList:["offset-button"],attribute:[["direction",n]],SVGIcon:I});return e.onclick=()=>{K(n)},e}function K(n){switch(n){case"up":U[0]+=Math.ceil(N/10);break;case"down":U[0]-=Math.ceil(N/10);break;case"left":U[1]+=Math.ceil(N/10);break;case"right":U[1]-=Math.ceil(N/10);break;default:return void console.error("Invalid direction!")}D(y)}function W(){C(),D(y)}function X(){$=window.clearInterval($),$=window.setInterval((()=>{C(),D(y)}),1e3/P)}x(),function(){const n=document.getElementById("game-description");n.innerHTML="",n.appendChild(k({type:"div",classList:["title"],text:"Conway's Game of Life"})),n.appendChild(k({type:"div",classList:["description"],text:"The Game of Life, also known as Conway's Game of Life or simply Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine."}));const e=k({type:"div",classList:["rules-container"]});n.appendChild(e),e.appendChild(k({type:"div",classList:["title"],text:"Rules"}));const t=k({type:"ol"});e.appendChild(t),t.appendChild(k({type:"li",text:"Any live cell with fewer than two live neighbours dies, as if by underpopulation."})),t.appendChild(k({type:"li",text:"Any live cell with two or three live neighbours lives on to the next generation."})),t.appendChild(k({type:"li",text:"Any live cell with more than three live neighbours dies, as if by overpopulation."})),t.appendChild(k({type:"li",text:"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction."}))}(),J(),function(){const n=document.getElementById("game-control-panel");n.innerHTML="";const e=k({type:"button",id:"play-stop-button",attribute:[["display","play"]]}),t=A(E);t.classList.add("play-icon"),e.appendChild(t);const a=A(S);a.classList.add("stop-icon"),e.appendChild(a),e.onclick=()=>{"play"===e.getAttribute("display")?(e.setAttribute("display","stop"),X()):(e.setAttribute("display","play"),console.log($),$=window.clearInterval($),console.log($))},n.appendChild(e),n.appendChild(k({type:"button",SVGIcon:T,eventListener:["click",W]})),n.appendChild(k({type:"button",SVGIcon:R,eventListener:["click",()=>{x("reset"),D(y)}]})),n.appendChild(k({type:"button",SVGIcon:B,eventListener:["click",()=>{x("clear"),D(y)}]})),n.appendChild(M([A(j),k({type:"input",attribute:[["type","range"],["min",1],["max",200],["value",60]],classList:["slider"],eventListener:["input",n=>{!function(n){P=n,$&&X();const e=document.getElementById("game-speed");e&&(e.innerText=n)}(n.target.value)}]}),M([k({type:"div",id:"game-speed",text:P}),k({type:"div",text:"FPS"})],["value-container"])],["slider-container"])),n.appendChild(M([A(G),k({type:"input",attribute:[["type","range"],["min",10],["max",200],["value",50]],classList:["slider"],eventListener:["input",n=>{q(n.target.value),D(y)}]}),M([k({type:"div",id:"grid-size",text:N}),k({type:"div",text:"Sq."})],["value-container"])],["slider-container"]))}(),document.body.addEventListener("keydown",(n=>{switch(n.key,n.key){case"ArrowLeft":K("left"),n.preventDefault();break;case"ArrowRight":K("right"),n.preventDefault();break;case"ArrowUp":K("up"),n.preventDefault();break;case"ArrowDown":K("down"),n.preventDefault();break;case"Enter":const e=document.getElementById("play-stop-button");null!=e&&e.click()}})),D(y)})();