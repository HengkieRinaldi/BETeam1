(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{3665:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(8111)}])},8111:function(e,s,n){"use strict";n.r(s);var t=n(7568),a=n(655),i=n(5893),r=n(7294),l=n(9417),o=n(9603),u=n(1664),c=n.n(u),d=/^[A-z][A-z0-9-_]{2,23}$/,f=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/,h=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,p=/^\d{11,13}$/,x=/^[a-zA-Z0-9\s,.'-]{3,}$/,m=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,j=function(){var e,s=(0,r.useRef)(),n=(0,r.useRef)(),u=(0,r.useState)(""),j=u[0],v=u[1],b=(0,r.useState)(!1),N=b[0],g=b[1],G=(0,r.useState)(!1),S=G[0],y=G[1],C=(0,r.useState)(""),w=C[0],F=C[1],E=(0,r.useState)(!1),_=E[0],B=E[1],q=(0,r.useState)(!1),L=q[0],A=q[1],k=(0,r.useState)(""),$=k[0],z=k[1],M=(0,r.useState)(!1),P=M[0],T=M[1],Z=(0,r.useState)(!1),D=Z[0],O=Z[1],R=(0,r.useState)(""),I=R[0],U=R[1],Y=(0,r.useState)(!1),J=Y[0],X=Y[1],H=(0,r.useState)(!1),K=H[0],Q=H[1],V=(0,r.useState)(""),W=V[0],ee=V[1],es=(0,r.useState)(!1),en=es[0],et=es[1],ea=(0,r.useState)(!1),ei=ea[0],er=ea[1],el=(0,r.useState)(""),eo=el[0],eu=el[1],ec=(0,r.useState)(!1),ed=ec[0],ef=ec[1],eh=(0,r.useState)(!1),ep=eh[0],ex=eh[1],em=(0,r.useState)(""),ej=em[0],ev=em[1],eb=(0,r.useState)(!1),eN=eb[0],eg=eb[1],eG=(0,r.useState)(!1),eS=eG[0],ey=eG[1],eC=(0,r.useState)(""),ew=eC[0],eF=eC[1],eE=(0,r.useState)(!1),e_=eE[0],eB=eE[1],eq=(0,r.useState)(!1),eL=eq[0],eA=eq[1],ek=(0,r.useState)(""),e$=ek[0],ez=ek[1],eM=(0,r.useState)(!1),eP=eM[0],eT=eM[1],eZ=(0,r.useState)(!1),eD=eZ[0],eO=eZ[1],eR=(0,r.useState)("male"),eI=eR[0],eU=eR[1],eY=(0,r.useState)(""),eJ=eY[0],eX=eY[1],eH=(0,r.useState)(!1),eK=eH[0],eQ=eH[1];(0,r.useEffect)(function(){s.current.focus()},[]),(0,r.useEffect)(function(){eg(d.test(ej)),g(d.test(j)),B(d.test(w)),T(h.test($)),et(p.test(W)),X(x.test(I)),ef(m.test(eo))},[ej,j,w,$,W,I,eo]),(0,r.useEffect)(function(){eB(f.test(ew)),eT(ew===e$)},[ew,e$]),(0,r.useEffect)(function(){eX("")},[ej,ew,e$,j,w,W,$,I,eo,]);var eV=(e=(0,t.Z)(function(e){var s,t,i,r,l,o,u,c,b,N,g,G,S;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(e.preventDefault(),s=d.test(ej),t=f.test(ew),i=d.test(j),r=d.test(w),l=h.test($),o=p.test(W),u=x.test(I),c=m.test(eo),!s||!t||(!i||!r)&&(!l||!o)||!u||!c)return eX("Invalid Entry"),[2];a.label=1;case 1:return a.trys.push([1,3,,4]),b=eo.split("/").reverse().join("-"),N=new Date(b).getTime(),[4,axios.post("https://traditionalgame.herokuapp.com/api/user",JSON.stringify({first_name:j,last_name:w,username:ej,email:$,password:ew,phone:W,gender:eI,birth:N,address:I,typeUser:"user"}),{headers:{"Content-Type":"application/json"},withCredentials:!1})];case 2:return g=a.sent(),console.log(null==g?void 0:g.data),console.log(null==g?void 0:g.accessToken),console.log(JSON.stringify(g)),eQ(!0),ev(""),eF(""),ez(""),v(""),F(""),z(""),ee(""),U(""),eu(""),[3,4];case 3:return(null==(G=a.sent())?void 0:G.response)?(null===(S=G.response)||void 0===S?void 0:S.status)===409?eX("Username Taken"):eX("Registration Failed"):eX("No Server Response"),n.current.focus(),[3,4];case 4:return[2]}})}),function(s){return e.apply(this,arguments)});return(0,i.jsx)("div",{className:"mainbackground",id:"signup",children:(0,i.jsx)("div",{className:"container",children:eK?(0,i.jsxs)("section",{className:"sections",children:[(0,i.jsx)("h1",{children:"Success!"}),(0,i.jsx)("p",{children:(0,i.jsx)(c(),{href:"/login",children:"Log In"})})]}):(0,i.jsx)("section",{className:"sections",children:(0,i.jsxs)("div",{className:"signup-box",children:[(0,i.jsx)("p",{ref:n,className:eJ?"errmsg":"offscreen","aria-live":"assertive",children:eJ}),(0,i.jsx)("h1",{children:"Register"}),(0,i.jsxs)("form",{className:"forms",onSubmit:eV,children:[(0,i.jsxs)("label",{htmlFor:"username",children:["Username:",(0,i.jsx)(o.G,{icon:l.LEp,className:eN?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:eN||!ej?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"text",id:"username",ref:s,autoComplete:"off",onChange:function(e){return ev(e.target.value)},value:ej,required:!0,"aria-invalid":eN?"false":"true","aria-describedby":"uidnote",onFocus:function(){return ey(!0)},onBlur:function(){return ey(!1)}}),(0,i.jsxs)("p",{id:"uidnote",className:eS&&ej&&!eN?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"4 to 24 characters.",(0,i.jsx)("br",{}),"Must begin with a letter.",(0,i.jsx)("br",{}),"Letters, numbers, underscores, hyphens allowed."]}),(0,i.jsxs)("label",{htmlFor:"firstname",children:["Firstname:",(0,i.jsx)(o.G,{icon:l.LEp,className:N?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:N||!j?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"text",id:"firstname",ref:s,autoComplete:"off",onChange:function(e){return v(e.target.value)},value:j,required:!0,"aria-invalid":N?"false":"true","aria-describedby":"fnnote",onFocus:function(){return y(!0)},onBlur:function(){return y(!1)}}),(0,i.jsxs)("p",{id:"fnnote",className:S&&j&&!N?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"3 to 10 characters.",(0,i.jsx)("br",{})]}),(0,i.jsxs)("label",{htmlFor:"lastname",children:["Lastname:",(0,i.jsx)(o.G,{icon:l.LEp,className:_?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:_||!w?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"text",id:"lastname",ref:s,autoComplete:"off",onChange:function(e){return F(e.target.value)},value:w,required:!0,"aria-invalid":w?"false":"true","aria-describedby":"lnnote",onFocus:function(){return A(!0)},onBlur:function(){return A(!1)}}),(0,i.jsxs)("p",{id:"lnnote",className:L&&w&&!_?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"3 to 10 characters.",(0,i.jsx)("br",{})]}),(0,i.jsxs)("label",{htmlFor:"email",children:["Email:",(0,i.jsx)(o.G,{icon:l.LEp,className:P?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:P||!$?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"text",id:"email",ref:s,autoComplete:"off",onChange:function(e){return z(e.target.value)},value:$,required:!0,"aria-invalid":P?"false":"true","aria-describedby":"emailnote",onFocus:function(){return O(!0)},onBlur:function(){return O(!1)}}),(0,i.jsxs)("p",{id:"fnnote",className:D&&$&&!P?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"Email is invalid",(0,i.jsx)("br",{})]}),(0,i.jsxs)("label",{htmlFor:"phone",children:["Phone Number:",(0,i.jsx)(o.G,{icon:l.LEp,className:en?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:en||!W?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"text",id:"phone",ref:s,autoComplete:"off",onChange:function(e){return ee(e.target.value)},value:W,required:!0,"aria-invalid":P?"false":"true","aria-describedby":"phonenote",onFocus:function(){return er(!0)},onBlur:function(){return er(!1)}}),(0,i.jsxs)("p",{id:"fnnote",className:ei&&W&&!en?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"Phone number is invalid",(0,i.jsx)("br",{})]}),(0,i.jsxs)("label",{htmlFor:"address",children:["Address:",(0,i.jsx)(o.G,{icon:l.LEp,className:J?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:J||!I?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"text",id:"address",ref:s,autoComplete:"off",onChange:function(e){return U(e.target.value)},value:I,required:!0,"aria-invalid":J?"false":"true","aria-describedby":"addressnote",onFocus:function(){return Q(!0)},onBlur:function(){return Q(!1)}}),(0,i.jsxs)("p",{id:"fnnote",className:K&&I&&!J?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"Please fill the address",(0,i.jsx)("br",{})]}),(0,i.jsxs)("label",{htmlFor:"birth",children:["Day Of Birth:",(0,i.jsx)(o.G,{icon:l.LEp,className:ed?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:ed||!eo?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"text",id:"birth",ref:s,autoComplete:"off",onChange:function(e){return eu(e.target.value)},value:eo,required:!0,"aria-invalid":ed?"false":"true","aria-describedby":"birthnote",onFocus:function(){return ex(!0)},onBlur:function(){return ex(!1)}}),(0,i.jsxs)("p",{id:"birthnote",className:ep&&eo&&!ed?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"Must DD/MM/YYYY"]}),(0,i.jsxs)("div",{className:"d-flex",style:{justifyContent:"space-between",alignItem:"center"},children:[(0,i.jsx)("label",{children:"Gender :"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"radio",name:"gender",id:"rd1",value:"male",onChange:function(e){return eU(e.target.value)}}),(0,i.jsx)("label",{htmlFor:"rd1",children:"Male "})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"radio",name:"gender",id:"rd2",value:"female",onChange:function(e){return eU(e.target.value)}}),(0,i.jsx)("label",{htmlFor:"rd2",children:"Female"})]})]}),(0,i.jsxs)("label",{htmlFor:"password",children:["Password:",(0,i.jsx)(o.G,{icon:l.LEp,className:e_?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:e_||!ew?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"password",id:"password",onChange:function(e){return eF(e.target.value)},value:ew,required:!0,"aria-invalid":e_?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return eA(!0)},onBlur:function(){return eA(!1)}}),(0,i.jsxs)("p",{id:"pwdnote",className:eL&&!e_?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"8 to 24 characters.",(0,i.jsx)("br",{}),"Must include uppercase and lowercase letters, a number and a special character.",(0,i.jsx)("br",{}),"Allowed special characters:"," ",(0,i.jsx)("span",{"aria-label":"exclamation mark",children:"!"})," ",(0,i.jsx)("span",{"aria-label":"at symbol",children:"@"})," ",(0,i.jsx)("span",{"aria-label":"hashtag",children:"#"})," ",(0,i.jsx)("span",{"aria-label":"dollar sign",children:"$"})," ",(0,i.jsx)("span",{"aria-label":"percent",children:"%"})]}),(0,i.jsxs)("label",{htmlFor:"confirm_pwd",children:["Confirm Password:",(0,i.jsx)(o.G,{icon:l.LEp,className:eP&&e$?"valid":"hide"}),(0,i.jsx)(o.G,{icon:l.NBC,className:eP||!e$?"hide":"invalid"})]}),(0,i.jsx)("input",{type:"password",id:"confirm_pwd",onChange:function(e){return ez(e.target.value)},value:e$,required:!0,"aria-invalid":eP?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return eO(!0)},onBlur:function(){return eO(!1)}}),(0,i.jsxs)("p",{id:"confirmnote",className:eD&&!eP?"instructions":"offscreen",children:[(0,i.jsx)(o.G,{icon:l.sqG}),"Must match the first password input field."]}),(0,i.jsx)("button",{disabled:!eN||!e_||!eP,children:"Sign Up"})]}),(0,i.jsxs)("p",{children:["Already registered?",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"line",children:(0,i.jsx)(c(),{href:"/login",children:"Log In"})})]})]})})})})};s.default=j}},function(e){e.O(0,[976,664,857,774,888,179],function(){return e(e.s=3665)}),_N_E=e.O()}]);