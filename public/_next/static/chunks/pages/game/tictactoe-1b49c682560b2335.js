(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{1076:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/tictactoe",function(){return t(6607)}])},6607:function(n,r,t){"use strict";t.r(r);var e=t(9815),u=t(5893),i=t(7294),o=t(6953),c=t.n(o),a=function(){var n=(0,i.useState)("x"),r=n[0],t=n[1],o=(0,i.useState)(Array(9).fill("")),a=o[0],s=o[1],f=(0,i.useState)(),l=f[0],d=f[1];(0,i.useEffect)(function(){},[]);var m=function(n){var r={across:[[0,1,2],[3,4,5],[6,7,8],],down:[[0,3,6],[1,4,7],[2,5,8],],diagnol:[[0,4,8],[2,4,6],]};for(var t in r)r[t].forEach(function(r){""===n[r[0]]||""===n[r[1]]||""===n[r[2]]||n[r[0]]===n[r[1]]&&n[r[1]]===n[r[2]]&&d(n[r[0]])})},x=function(n){if(""!==a[n]){alert("already clicked");return}var u=(0,e.Z)(a);"x"===r?(u[n]="x",t("o")):(u[n]="o",t("x")),m(u),s(u)},j=function(){d(null),s(Array(9).fill(""))},h=function(n){var r=n.num;return(0,u.jsx)("td",{className:c().cel,onClick:function(){return x(r)},children:a[r]})};return(0,u.jsxs)("div",{className:c().board,children:[(0,u.jsxs)("table",{children:["Turn: ",r,(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)(h,{num:0}),(0,u.jsx)(h,{num:1}),(0,u.jsx)(h,{num:2})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)(h,{num:3}),(0,u.jsx)(h,{num:4}),(0,u.jsx)(h,{num:5})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)(h,{num:6}),(0,u.jsx)(h,{num:7}),(0,u.jsx)(h,{num:8})]})]})]}),l&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[l," is the winner!"]}),(0,u.jsx)("button",{onClick:function(){return j()},children:"Play Again"})]})]})};r.default=a},6953:function(n){n.exports={board:"GameTicTacToe_board__KFXp8",cel:"GameTicTacToe_cel__ajuAa"}},943:function(n,r,t){"use strict";function e(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=Array(r);t<r;t++)e[t]=n[t];return e}t.d(r,{Z:function(){return e}})},3375:function(n,r,t){"use strict";function e(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}t.d(r,{Z:function(){return e}})},9815:function(n,r,t){"use strict";t.d(r,{Z:function(){return o}});var e=t(943),u=t(3375),i=t(1566);function o(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||(0,u.Z)(n)||(0,i.Z)(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(n,r,t){"use strict";t.d(r,{Z:function(){return u}});var e=t(943);function u(n,r){if(n){if("string"==typeof n)return(0,e.Z)(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return(0,e.Z)(n,r)}}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=1076)}),_N_E=n.O()}]);