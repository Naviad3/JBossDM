(function(j,l,e){var k={},h,c,i;
k.Util={};
k.Util.log=function(n){if(k.logging&&j.console&&j.console.log){j.console.log(n)
}};
k.Util.trimText=(function(n){return function(o){return n?n.apply(o):((o||"")+"").replace(/^\s+|\s+$/g,"")
}
})(String.prototype.trim);
k.Util.asFloat=function(n){return parseFloat(n)
};
(function(){var o=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
var n=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
k.Util.parseTextShadows=function(u){if(!u||u==="none"){return[]
}var t=u.match(o),q=[];
for(var p=0;
t&&(p<t.length);
p++){var r=t[p].match(n);
q.push({color:r[0],offsetX:r[1]?r[1].replace("px",""):0,offsetY:r[2]?r[2].replace("px",""):0,blur:r[3]?r[3].replace("px",""):0})
}return q
}
})();
k.Util.parseBackgroundImage=function(y){var p=" \r\n\t",o,q,v,C,r,t=[],x,u=0,z=0,n,w;
var B=function(){if(o){if(q.substr(0,1)==='"'){q=q.substr(1,q.length-2)
}if(q){w.push(q)
}if(o.substr(0,1)==="-"&&(C=o.indexOf("-",1)+1)>0){v=o.substr(0,C);
o=o.substr(C)
}t.push({prefix:v,method:o.toLowerCase(),value:r,args:w})
}w=[];
o=v=q=r=""
};
B();
for(var s=0,A=y.length;
s<A;
s++){x=y[s];
if(u===0&&p.indexOf(x)>-1){continue
}switch(x){case'"':if(!n){n=x
}else{if(n===x){n=null
}}break;
case"(":if(n){break
}else{if(u===0){u=1;
r+=x;
continue
}else{z++
}}break;
case")":if(n){break
}else{if(u===1){if(z===0){u=0;
r+=x;
B();
continue
}else{z--
}}}break;
case",":if(n){break
}else{if(u===0){B();
continue
}else{if(u===1){if(z===0&&!o.match(/^url$/i)){w.push(q);
q="";
r+=x;
continue
}}}}break
}r+=x;
if(u===0){o+=x
}else{q+=x
}}B();
return t
};
k.Util.Bounds=function(n){var p,o={};
if(n.getBoundingClientRect){p=n.getBoundingClientRect();
o.top=p.top;
o.bottom=p.bottom||(p.top+p.height);
o.left=p.left;
o.width=n.offsetWidth;
o.height=n.offsetHeight
}return o
};
k.Util.OffsetBounds=function(n){var o=n.offsetParent?k.Util.OffsetBounds(n.offsetParent):{top:0,left:0};
return{top:n.offsetTop+o.top,bottom:n.offsetTop+n.offsetHeight+o.top,left:n.offsetLeft+o.left,width:n.offsetWidth,height:n.offsetHeight}
};
function d(o,q,r){var n=o.runtimeStyle&&o.runtimeStyle[q],s,p=o.style;
if(!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(r)&&/^-?\d/.test(r)){s=p.left;
if(n){o.runtimeStyle.left=o.currentStyle.left
}p.left=q==="fontSize"?"1em":(r||0);
r=p.pixelLeft+"px";
p.left=s;
if(n){o.runtimeStyle.left=n
}}if(!/^(thin|medium|thick)$/i.test(r)){return Math.round(parseFloat(r))+"px"
}return r
}function b(n){return parseInt(n,10)
}function m(q,o,p,n){q=(q||"").split(",");
q=q[n||0]||q[0]||"auto";
q=k.Util.trimText(q).split(" ");
if(p==="backgroundSize"&&(!q[0]||q[0].match(/cover|contain|auto/))){}else{q[0]=(q[0].indexOf("%")===-1)?d(o,p+"X",q[0]):q[0];
if(q[1]===e){if(p==="backgroundSize"){q[1]="auto";
return q
}else{q[1]=q[0]
}}q[1]=(q[1].indexOf("%")===-1)?d(o,p+"Y",q[1]):q[1]
}return q
}k.Util.getCSS=function(p,q,o){if(h!==p){c=l.defaultView.getComputedStyle(p,null)
}var r=c[q];
if(/^background(Size|Position)$/.test(q)){return m(r,p,q,o)
}else{if(/border(Top|Bottom)(Left|Right)Radius/.test(q)){var n=r.split(" ");
if(n.length<=1){n[1]=n[0]
}return n.map(b)
}}return r
};
k.Util.resizeBounds=function(s,n,t,u,v){var q=t/u,p=s/n,o,r;
if(!v||v==="auto"){o=t;
r=u
}else{if(q<p^v==="contain"){r=u;
o=u*p
}else{o=t;
r=t/p
}}return{width:o,height:r}
};
function g(o,q,n,u,p,x){var s=k.Util.getCSS(q,o,p),w,t,y,r;
if(s.length===1){r=s[0];
s=[];
s[0]=r;
s[1]=r
}if(s[0].toString().indexOf("%")!==-1){y=(parseFloat(s[0])/100);
t=n.width*y;
if(o!=="backgroundSize"){t-=(x||u).width*y
}}else{if(o==="backgroundSize"){if(s[0]==="auto"){t=u.width
}else{if(/contain|cover/.test(s[0])){var v=k.Util.resizeBounds(u.width,u.height,n.width,n.height,s[0]);
t=v.width;
w=v.height
}else{t=parseInt(s[0],10)
}}}else{t=parseInt(s[0],10)
}}if(s[1]==="auto"){w=t/u.width*u.height
}else{if(s[1].toString().indexOf("%")!==-1){y=(parseFloat(s[1])/100);
w=n.height*y;
if(o!=="backgroundSize"){w-=(x||u).height*y
}}else{w=parseInt(s[1],10)
}}return[t,w]
}k.Util.BackgroundPosition=function(q,r,s,o,p){var n=g("backgroundPosition",q,r,s,o,p);
return{left:n[0],top:n[1]}
};
k.Util.BackgroundSize=function(p,q,r,o){var n=g("backgroundSize",p,q,r,o);
return{width:n[0],height:n[1]}
};
k.Util.Extend=function(n,p){for(var o in n){if(n.hasOwnProperty(o)){p[o]=n[o]
}}return p
};
k.Util.Children=function(p){var o;
try{o=(p.nodeName&&p.nodeName.toUpperCase()==="IFRAME")?p.contentDocument||p.contentWindow.document:(function(r){var q=[];
if(r!==null){(function(w,u){var v=w.length,t=0;
if(typeof u.length==="number"){for(var s=u.length;
t<s;
t++){w[v++]=u[t]
}}else{while(u[t]!==e){w[v++]=u[t++]
}}w.length=v;
return w
})(q,r)
}return q
})(p.childNodes)
}catch(n){k.Util.log("html2canvas.Util.Children failed with exception: "+n.message);
o=[]
}return o
};
k.Util.isTransparent=function(n){return(n==="transparent"||n==="rgba(0, 0, 0, 0)")
};
k.Util.Font=(function(){var n={};
return function(q,x,u){if(n[q+"-"+x]!==e){return n[q+"-"+x]
}var o=u.createElement("div"),r=u.createElement("img"),v=u.createElement("span"),p="Hidden Text",t,w,s;
o.style.visibility="hidden";
o.style.fontFamily=q;
o.style.fontSize=x;
o.style.margin=0;
o.style.padding=0;
u.body.appendChild(o);
r.src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
r.width=1;
r.height=1;
r.style.margin=0;
r.style.padding=0;
r.style.verticalAlign="baseline";
v.style.fontFamily=q;
v.style.fontSize=x;
v.style.margin=0;
v.style.padding=0;
v.appendChild(u.createTextNode(p));
o.appendChild(v);
o.appendChild(r);
t=(r.offsetTop-v.offsetTop)+1;
o.removeChild(v);
o.appendChild(u.createTextNode(p));
o.style.lineHeight="normal";
r.style.verticalAlign="super";
w=(r.offsetTop-o.offsetTop)+1;
s={baseline:t,lineWidth:1,middle:w};
n[q+"-"+x]=s;
u.body.removeChild(o);
return s
}
})();
(function(){var p=k.Util,n={};
k.Generate=n;
var q=[/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,/^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,/^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];
n.parseGradient=function(w,r){var A,v,x=q.length,F,z,C,s,u,B,E,y,D,t;
for(v=0;
v<x;
v+=1){F=w.match(q[v]);
if(F){break
}}if(F){switch(F[1]){case"-webkit-linear-gradient":case"-o-linear-gradient":A={type:"linear",x0:null,y0:null,x1:null,y1:null,colorStops:[]};
C=F[2].match(/\w+/g);
if(C){s=C.length;
for(v=0;
v<s;
v+=1){switch(C[v]){case"top":A.y0=0;
A.y1=r.height;
break;
case"right":A.x0=r.width;
A.x1=0;
break;
case"bottom":A.y0=r.height;
A.y1=0;
break;
case"left":A.x0=0;
A.x1=r.width;
break
}}}if(A.x0===null&&A.x1===null){A.x0=A.x1=r.width/2
}if(A.y0===null&&A.y1===null){A.y0=A.y1=r.height/2
}C=F[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
if(C){s=C.length;
u=1/Math.max(s-1,1);
for(v=0;
v<s;
v+=1){B=C[v].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
if(B[2]){z=parseFloat(B[2]);
if(B[3]==="%"){z/=100
}else{z/=r.width
}}else{z=v*u
}A.colorStops.push({color:B[1],stop:z})
}}break;
case"-webkit-gradient":A={type:F[2]==="radial"?"circle":F[2],x0:0,y0:0,x1:0,y1:0,colorStops:[]};
C=F[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
if(C){A.x0=(C[1]*r.width)/100;
A.y0=(C[2]*r.height)/100;
A.x1=(C[3]*r.width)/100;
A.y1=(C[4]*r.height)/100
}C=F[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
if(C){s=C.length;
for(v=0;
v<s;
v+=1){B=C[v].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
z=parseFloat(B[2]);
if(B[1]==="from"){z=0
}if(B[1]==="to"){z=1
}A.colorStops.push({color:B[3],stop:z})
}}break;
case"-moz-linear-gradient":A={type:"linear",x0:0,y0:0,x1:0,y1:0,colorStops:[]};
C=F[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
if(C){A.x0=(C[1]*r.width)/100;
A.y0=(C[2]*r.height)/100;
A.x1=r.width-A.x0;
A.y1=r.height-A.y0
}C=F[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
if(C){s=C.length;
u=1/Math.max(s-1,1);
for(v=0;
v<s;
v+=1){B=C[v].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
if(B[2]){z=parseFloat(B[2]);
if(B[3]){z/=100
}}else{z=v*u
}A.colorStops.push({color:B[1],stop:z})
}}break;
case"-webkit-radial-gradient":case"-moz-radial-gradient":case"-o-radial-gradient":A={type:"circle",x0:0,y0:0,x1:r.width,y1:r.height,cx:0,cy:0,rx:0,ry:0,colorStops:[]};
C=F[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
if(C){A.cx=(C[1]*r.width)/100;
A.cy=(C[2]*r.height)/100
}C=F[3].match(/\w+/);
B=F[4].match(/[a-z\-]*/);
if(C&&B){switch(B[0]){case"farthest-corner":case"cover":case"":E=Math.sqrt(Math.pow(A.cx,2)+Math.pow(A.cy,2));
y=Math.sqrt(Math.pow(A.cx,2)+Math.pow(A.y1-A.cy,2));
D=Math.sqrt(Math.pow(A.x1-A.cx,2)+Math.pow(A.y1-A.cy,2));
t=Math.sqrt(Math.pow(A.x1-A.cx,2)+Math.pow(A.cy,2));
A.rx=A.ry=Math.max(E,y,D,t);
break;
case"closest-corner":E=Math.sqrt(Math.pow(A.cx,2)+Math.pow(A.cy,2));
y=Math.sqrt(Math.pow(A.cx,2)+Math.pow(A.y1-A.cy,2));
D=Math.sqrt(Math.pow(A.x1-A.cx,2)+Math.pow(A.y1-A.cy,2));
t=Math.sqrt(Math.pow(A.x1-A.cx,2)+Math.pow(A.cy,2));
A.rx=A.ry=Math.min(E,y,D,t);
break;
case"farthest-side":if(C[0]==="circle"){A.rx=A.ry=Math.max(A.cx,A.cy,A.x1-A.cx,A.y1-A.cy)
}else{A.type=C[0];
A.rx=Math.max(A.cx,A.x1-A.cx);
A.ry=Math.max(A.cy,A.y1-A.cy)
}break;
case"closest-side":case"contain":if(C[0]==="circle"){A.rx=A.ry=Math.min(A.cx,A.cy,A.x1-A.cx,A.y1-A.cy)
}else{A.type=C[0];
A.rx=Math.min(A.cx,A.x1-A.cx);
A.ry=Math.min(A.cy,A.y1-A.cy)
}break
}}C=F[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
if(C){s=C.length;
u=1/Math.max(s-1,1);
for(v=0;
v<s;
v+=1){B=C[v].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
if(B[2]){z=parseFloat(B[2]);
if(B[3]==="%"){z/=100
}else{z/=r.width
}}else{z=v*u
}A.colorStops.push({color:B[1],stop:z})
}}break
}}return A
};
function o(r){return function(s){try{r.addColorStop(s.stop,s.color)
}catch(t){p.log(["failed to add color stop: ",t,"; tried to add: ",s])
}}
}n.Gradient=function(r,s){if(s.width===0||s.height===0){return
}var u=l.createElement("canvas"),A=u.getContext("2d"),y,z;
u.width=s.width;
u.height=s.height;
y=k.Generate.parseGradient(r,s);
if(y){switch(y.type){case"linear":z=A.createLinearGradient(y.x0,y.y0,y.x1,y.y1);
y.colorStops.forEach(o(z));
A.fillStyle=z;
A.fillRect(0,0,s.width,s.height);
break;
case"circle":z=A.createRadialGradient(y.cx,y.cy,0,y.cx,y.cy,y.rx);
y.colorStops.forEach(o(z));
A.fillStyle=z;
A.fillRect(0,0,s.width,s.height);
break;
case"ellipse":var v=l.createElement("canvas"),t=v.getContext("2d"),x=Math.max(y.rx,y.ry),w=x*2;
v.width=v.height=w;
z=t.createRadialGradient(y.rx,y.ry,0,y.rx,y.ry,x);
y.colorStops.forEach(o(z));
t.fillStyle=z;
t.fillRect(0,0,w,w);
A.fillStyle=y.colorStops[y.colorStops.length-1].color;
A.fillRect(0,0,u.width,u.height);
A.drawImage(v,y.cx-y.rx,y.cy-y.ry,2*y.rx,2*y.ry);
break
}}return u
};
n.ListAlpha=function(t){var s="",r;
do{r=t%26;
s=String.fromCharCode((r)+64)+s;
t=t/26
}while((t*26)>26);
return s
};
n.ListRoman=function(w){var u=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],s=[1000,900,500,400,100,90,50,40,10,9,5,4,1],x="",t,r=u.length;
if(w<=0||w>=4000){return w
}for(t=0;
t<r;
t+=1){while(w>=s[t]){w-=s[t];
x+=u[t]
}}return x
}
})();
function f(o,n){var p=[];
return{storage:p,width:o,height:n,clip:function(){p.push({type:"function",name:"clip","arguments":arguments})
},translate:function(){p.push({type:"function",name:"translate","arguments":arguments})
},fill:function(){p.push({type:"function",name:"fill","arguments":arguments})
},save:function(){p.push({type:"function",name:"save","arguments":arguments})
},restore:function(){p.push({type:"function",name:"restore","arguments":arguments})
},fillRect:function(){p.push({type:"function",name:"fillRect","arguments":arguments})
},createPattern:function(){p.push({type:"function",name:"createPattern","arguments":arguments})
},drawShape:function(){var q=[];
p.push({type:"function",name:"drawShape","arguments":q});
return{moveTo:function(){q.push({name:"moveTo","arguments":arguments})
},lineTo:function(){q.push({name:"lineTo","arguments":arguments})
},arcTo:function(){q.push({name:"arcTo","arguments":arguments})
},bezierCurveTo:function(){q.push({name:"bezierCurveTo","arguments":arguments})
},quadraticCurveTo:function(){q.push({name:"quadraticCurveTo","arguments":arguments})
}}
},drawImage:function(){p.push({type:"function",name:"drawImage","arguments":arguments})
},fillText:function(){p.push({type:"function",name:"fillText","arguments":arguments})
},setVariable:function(q,r){p.push({type:"variable",name:q,"arguments":r});
return r
}}
}k.Parse=function(v,ac){j.scroll(0,0);
var M=((ac.elements===e)?l.body:ac.elements[0]),w=0,z=M.ownerDocument,r=k.Util,aq=r.Support(ac,z),am=new RegExp("("+ac.ignoreElements+")"),Z=z.body,X=r.getCSS,Q="___html2canvas___pseudoelement",P=z.createElement("style");
P.innerHTML="."+Q+'-before:before { content: "" !important; display: none !important; }.'+Q+'-after:after { content: "" !important; display: none !important; }';
Z.appendChild(P);
v=v||{};
function ao(){return Math.max(Math.max(z.body.scrollWidth,z.documentElement.scrollWidth),Math.max(z.body.offsetWidth,z.documentElement.offsetWidth),Math.max(z.body.clientWidth,z.documentElement.clientWidth))
}function K(){return Math.max(Math.max(z.body.scrollHeight,z.documentElement.scrollHeight),Math.max(z.body.offsetHeight,z.documentElement.offsetHeight),Math.max(z.body.clientHeight,z.documentElement.clientHeight))
}function Y(aE,aF){var aG=parseInt(X(aE,aF),10);
return(isNaN(aG))?0:aG
}function aA(aH,aE,aJ,aG,aI,aF){if(aF!=="transparent"){aH.setVariable("fillStyle",aF);
aH.fillRect(aE,aJ,aG,aI);
w+=1
}}function ae(aE,aG,aF){if(aE.length>0){return aG+aF.toUpperCase()
}}function y(aF,aE){switch(aE){case"lowercase":return aF.toLowerCase();
case"capitalize":return aF.replace(/(^|\s|:|-|\(|\))([a-z])/g,ae);
case"uppercase":return aF.toUpperCase();
default:return aF
}}function aj(aE){return(/^(normal|none|0px)$/.test(aE))
}function n(aG,aE,aH,aF){if(aG!==null&&r.trimText(aG).length>0){aF.fillText(aG,aE,aH);
w+=1
}}function S(aL,aF,aE,aG){var aJ=false,aK=X(aF,"fontWeight"),aI=X(aF,"fontFamily"),aM=X(aF,"fontSize"),aH=r.parseTextShadows(X(aF,"textShadow"));
switch(parseInt(aK,10)){case 401:aK="bold";
break;
case 400:aK="normal";
break
}aL.setVariable("fillStyle",aG);
aL.setVariable("font",[X(aF,"fontStyle"),X(aF,"fontVariant"),aK,aM,aI].join(" "));
aL.setVariable("textAlign",(aJ)?"right":"left");
if(aH.length){aL.setVariable("shadowColor",aH[0].color);
aL.setVariable("shadowOffsetX",aH[0].offsetX);
aL.setVariable("shadowOffsetY",aH[0].offsetY);
aL.setVariable("shadowBlur",aH[0].blur)
}if(aE!=="none"){return r.Font(aI,aM,z)
}}function N(aE,aI,aH,aG,aF){switch(aI){case"underline":aA(aE,aH.left,Math.round(aH.top+aG.baseline+aG.lineWidth),aH.width,1,aF);
break;
case"overline":aA(aE,aH.left,Math.round(aH.top),aH.width,1,aF);
break;
case"line-through":aA(aE,aH.left,Math.ceil(aH.top+aG.middle+aG.lineWidth),aH.width,1,aF);
break
}}function af(aI,aK,aJ,aH,aE){var aG;
if(aq.rangeBounds&&!aE){if(aJ!=="none"||r.trimText(aK).length!==0){aG=ad(aK,aI.node,aI.textOffset)
}aI.textOffset+=aK.length
}else{if(aI.node&&typeof aI.node.nodeValue==="string"){var aF=(aH)?aI.node.splitText(aK.length):null;
aG=ai(aI.node,aE);
aI.node=aF
}}return aG
}function ad(aH,aG,aF){var aE=z.createRange();
aE.setStart(aG,aF);
aE.setEnd(aG,aF+aH.length);
return aE.getBoundingClientRect()
}function ai(aF,aE){var aG=aF.parentNode,aJ=z.createElement("wrapper"),aI=aF.cloneNode(true);
aJ.appendChild(aF.cloneNode(true));
aG.replaceChild(aJ,aF);
var aH=aE?r.OffsetBounds(aJ):r.Bounds(aJ);
aG.replaceChild(aI,aJ);
return aH
}function ay(aG,aH,aL){var aM=aL.ctx,aI=X(aG,"color"),aN=X(aG,"textDecoration"),aF=X(aG,"textAlign"),aK,aJ,aE={node:aH,textOffset:0};
if(r.trimText(aH.nodeValue).length>0){aH.nodeValue=y(aH.nodeValue,X(aG,"textTransform"));
aF=aF.replace(["-webkit-auto"],["auto"]);
aJ=(!ac.letterRendering&&/^(left|right|justify|auto)$/.test(aF)&&aj(X(aG,"letterSpacing")))?aH.nodeValue.split(/(\b| )/):aH.nodeValue.split("");
aK=S(aM,aG,aN,aI);
if(ac.chinese){aJ.forEach(function(aP,aO){if(/.*[\u4E00-\u9FA5].*$/.test(aP)){aP=aP.split("");
aP.unshift(aO,1);
aJ.splice.apply(aJ,aP)
}})
}aJ.forEach(function(aQ,aO){var aP=af(aE,aQ,aN,(aO<aJ.length-1),aL.transform.matrix);
if(aP){n(aQ,aP.left,aP.bottom,aM);
N(aM,aN,aP,aK,aI)
}})
}}function ah(aE,aI){var aH=z.createElement("boundelement"),aF,aG;
aH.style.display="inline";
aF=aE.style.listStyleType;
aE.style.listStyleType="none";
aH.appendChild(z.createTextNode(aI));
aE.insertBefore(aH,aE.firstChild);
aG=r.Bounds(aH);
aE.removeChild(aH);
aE.style.listStyleType=aF;
return aG
}function T(aF){var aE=-1,aG=1,aH=aF.parentNode.childNodes;
if(aF.parentNode){while(aH[++aE]!==aF){if(aH[aE].nodeType===1){aG++
}}return aG
}else{return -1
}}function q(aF,aG){var aE=T(aF),aH;
switch(aG){case"decimal":aH=aE;
break;
case"decimal-leading-zero":aH=(aE.toString().length===1)?aE="0"+aE.toString():aE.toString();
break;
case"upper-roman":aH=k.Generate.ListRoman(aE);
break;
case"lower-roman":aH=k.Generate.ListRoman(aE).toLowerCase();
break;
case"lower-alpha":aH=k.Generate.ListAlpha(aE).toLowerCase();
break;
case"upper-alpha":aH=k.Generate.ListAlpha(aE);
break
}return aH+". "
}function an(aH,aF,aK){var aE,aL,aG=aF.ctx,aI=X(aH,"listStyleType"),aJ;
if(/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(aI)){aL=q(aH,aI);
aJ=ah(aH,aL);
S(aG,aH,"none",X(aH,"color"));
if(X(aH,"listStylePosition")==="inside"){aG.setVariable("textAlign","left");
aE=aK.left
}else{return
}n(aL,aE,aJ.bottom,aG)
}}function V(aF){var aE=v[aF];
return(aE&&aE.succeeded===true)?aE.img:false
}function C(aH,aJ){var aE=Math.max(aH.left,aJ.left),aI=Math.max(aH.top,aJ.top),aF=Math.min((aH.left+aH.width),(aJ.left+aJ.width)),aG=Math.min((aH.top+aH.height),(aJ.top+aJ.height));
return{left:aE,top:aI,width:aF-aE,height:aG-aI}
}function ap(aJ,aH,aG){var aL,aF=aH.cssPosition!=="static",aK=aF?X(aJ,"zIndex"):"auto",aI=X(aJ,"opacity"),aE=X(aJ,"cssFloat")!=="none";
aH.zIndex=aL=a(aK);
aL.isPositioned=aF;
aL.isFloated=aE;
aL.opacity=aI;
aL.ownStacking=(aK!=="auto"||aI<1);
if(aG){aG.zIndex.children.push(aH)
}}function U(aM,aJ,aI,aE,aK){var aH=Y(aJ,"paddingLeft"),aL=Y(aJ,"paddingTop"),aG=Y(aJ,"paddingRight"),aF=Y(aJ,"paddingBottom");
p(aM,aI,0,0,aI.width,aI.height,aE.left+aH+aK[3].width,aE.top+aL+aK[0].width,aE.width-(aK[1].width+aK[3].width+aH+aG),aE.height-(aK[0].width+aK[2].width+aL+aF))
}function A(aE){return["Top","Right","Bottom","Left"].map(function(aF){return{width:Y(aE,"border"+aF+"Width"),color:X(aE,"border"+aF+"Color")}
})
}function o(aE){return["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(aF){return X(aE,"border"+aF+"Radius")
})
}var F=(function(aE){return function(aG,aM,aK,aI){var aJ=(aK)*aE,aH=(aI)*aE,aL=aG+aK,aF=aM+aI;
return{topLeft:aD({x:aG,y:aF},{x:aG,y:aF-aH},{x:aL-aJ,y:aM},{x:aL,y:aM}),topRight:aD({x:aG,y:aM},{x:aG+aJ,y:aM},{x:aL,y:aF-aH},{x:aL,y:aF}),bottomRight:aD({x:aL,y:aM},{x:aL,y:aM+aH},{x:aG+aJ,y:aF},{x:aG,y:aF}),bottomLeft:aD({x:aL,y:aF},{x:aL-aJ,y:aF},{x:aG,y:aM+aH},{x:aG,y:aM})}
}
})(4*((Math.sqrt(2)-1)/3));
function aD(aI,aH,aG,aE){var aF=function(aK,aJ,aL){return{x:aK.x+(aJ.x-aK.x)*aL,y:aK.y+(aJ.y-aK.y)*aL}
};
return{start:aI,startControl:aH,endControl:aG,end:aE,subdivide:function(aL){var aN=aF(aI,aH,aL),aO=aF(aH,aG,aL),aP=aF(aG,aE,aL),aM=aF(aN,aO,aL),aJ=aF(aO,aP,aL),aK=aF(aM,aJ,aL);
return[aD(aI,aN,aM,aK),aD(aK,aJ,aP,aE)]
},curveTo:function(aJ){aJ.push(["bezierCurve",aH.x,aH.y,aG.x,aG.y,aE.x,aE.y])
},curveToReversed:function(aJ){aJ.push(["bezierCurve",aG.x,aG.y,aH.x,aH.y,aI.x,aI.y])
}}
}function aC(aI,aJ,aH,aG,aF,aE,aK){if(aJ[0]>0||aJ[1]>0){aI.push(["line",aG[0].start.x,aG[0].start.y]);
aG[0].curveTo(aI);
aG[1].curveTo(aI)
}else{aI.push(["line",aE,aK])
}if(aH[0]>0||aH[1]>0){aI.push(["line",aF[0].start.x,aF[0].start.y])
}}function av(aK,aI,aH,aL,aF,aJ,aE){var aG=[];
if(aI[0]>0||aI[1]>0){aG.push(["line",aL[1].start.x,aL[1].start.y]);
aL[1].curveTo(aG)
}else{aG.push(["line",aK.c1[0],aK.c1[1]])
}if(aH[0]>0||aH[1]>0){aG.push(["line",aJ[0].start.x,aJ[0].start.y]);
aJ[0].curveTo(aG);
aG.push(["line",aE[0].end.x,aE[0].end.y]);
aE[0].curveToReversed(aG)
}else{aG.push(["line",aK.c2[0],aK.c2[1]]);
aG.push(["line",aK.c3[0],aK.c3[1]])
}if(aI[0]>0||aI[1]>0){aG.push(["line",aF[1].end.x,aF[1].end.y]);
aF[1].curveToReversed(aG)
}else{aG.push(["line",aK.c4[0],aK.c4[1]])
}return aG
}function u(aH,aE,aG){var aL=aH.left,aI=aH.top,aQ=aH.width,aP=aH.height,aR=aE[0][0],aK=aE[0][1],aU=aE[1][0],aN=aE[1][1],aV=aE[2][0],aO=aE[2][1],aT=aE[3][0],aM=aE[3][1],aJ=aQ-aU,aW=aP-aO,aF=aQ-aV,aS=aP-aM;
return{topLeftOuter:F(aL,aI,aR,aK).topLeft.subdivide(0.5),topLeftInner:F(aL+aG[3].width,aI+aG[0].width,Math.max(0,aR-aG[3].width),Math.max(0,aK-aG[0].width)).topLeft.subdivide(0.5),topRightOuter:F(aL+aJ,aI,aU,aN).topRight.subdivide(0.5),topRightInner:F(aL+Math.min(aJ,aQ+aG[3].width),aI+aG[0].width,(aJ>aQ+aG[3].width)?0:aU-aG[3].width,aN-aG[0].width).topRight.subdivide(0.5),bottomRightOuter:F(aL+aF,aI+aW,aV,aO).bottomRight.subdivide(0.5),bottomRightInner:F(aL+Math.min(aF,aQ+aG[3].width),aI+Math.min(aW,aP+aG[0].width),Math.max(0,aV-aG[1].width),Math.max(0,aO-aG[2].width)).bottomRight.subdivide(0.5),bottomLeftOuter:F(aL,aI+aS,aT,aM).bottomLeft.subdivide(0.5),bottomLeftInner:F(aL+aG[3].width,aI+aS,Math.max(0,aT-aG[3].width),Math.max(0,aM-aG[2].width)).bottomLeft.subdivide(0.5)}
}function az(aH,aJ,aK,aE,aI){var aG=X(aH,"backgroundClip"),aF=[];
switch(aG){case"content-box":case"padding-box":aC(aF,aE[0],aE[1],aJ.topLeftInner,aJ.topRightInner,aI.left+aK[3].width,aI.top+aK[0].width);
aC(aF,aE[1],aE[2],aJ.topRightInner,aJ.bottomRightInner,aI.left+aI.width-aK[1].width,aI.top+aK[0].width);
aC(aF,aE[2],aE[3],aJ.bottomRightInner,aJ.bottomLeftInner,aI.left+aI.width-aK[1].width,aI.top+aI.height-aK[2].width);
aC(aF,aE[3],aE[0],aJ.bottomLeftInner,aJ.topLeftInner,aI.left+aK[3].width,aI.top+aI.height-aK[2].width);
break;
default:aC(aF,aE[0],aE[1],aJ.topLeftOuter,aJ.topRightOuter,aI.left,aI.top);
aC(aF,aE[1],aE[2],aJ.topRightOuter,aJ.bottomRightOuter,aI.left+aI.width,aI.top);
aC(aF,aE[2],aE[3],aJ.bottomRightOuter,aJ.bottomLeftOuter,aI.left+aI.width,aI.top+aI.height);
aC(aF,aE[3],aE[0],aJ.bottomLeftOuter,aJ.topLeftOuter,aI.left,aI.top+aI.height);
break
}return aF
}function ab(aK,aF,aN){var aR=aF.left,aQ=aF.top,aH=aF.width,aT=aF.height,aG,aO,aM,aP,aJ,aE,aI=o(aK),aL=u(aF,aI,aN),aS={clip:az(aK,aL,aN,aI,aF),borders:[]};
for(aG=0;
aG<4;
aG++){if(aN[aG].width>0){aO=aR;
aM=aQ;
aP=aH;
aJ=aT-(aN[2].width);
switch(aG){case 0:aJ=aN[0].width;
aE=av({c1:[aO,aM],c2:[aO+aP,aM],c3:[aO+aP-aN[1].width,aM+aJ],c4:[aO+aN[3].width,aM+aJ]},aI[0],aI[1],aL.topLeftOuter,aL.topLeftInner,aL.topRightOuter,aL.topRightInner);
break;
case 1:aO=aR+aH-(aN[1].width);
aP=aN[1].width;
aE=av({c1:[aO+aP,aM],c2:[aO+aP,aM+aJ+aN[2].width],c3:[aO,aM+aJ],c4:[aO,aM+aN[0].width]},aI[1],aI[2],aL.topRightOuter,aL.topRightInner,aL.bottomRightOuter,aL.bottomRightInner);
break;
case 2:aM=(aM+aT)-(aN[2].width);
aJ=aN[2].width;
aE=av({c1:[aO+aP,aM+aJ],c2:[aO,aM+aJ],c3:[aO+aN[3].width,aM],c4:[aO+aP-aN[3].width,aM]},aI[2],aI[3],aL.bottomRightOuter,aL.bottomRightInner,aL.bottomLeftOuter,aL.bottomLeftInner);
break;
case 3:aP=aN[3].width;
aE=av({c1:[aO,aM+aJ+aN[2].width],c2:[aO,aM],c3:[aO+aP,aM+aN[0].width],c4:[aO+aP,aM+aJ]},aI[3],aI[0],aL.bottomLeftOuter,aL.bottomLeftInner,aL.topLeftOuter,aL.topLeftInner);
break
}aS.borders.push({args:aE,color:aN[aG].color})
}}return aS
}function s(aE,aG){var aF=aE.drawShape();
aG.forEach(function(aI,aH){aF[(aH===0)?"moveTo":aI[0]+"To"].apply(null,aI.slice(1))
});
return aF
}function J(aE,aG,aF){if(aF!=="transparent"){aE.setVariable("fillStyle",aF);
s(aE,aG);
aE.fill();
w+=1
}}function at(aH,aI,aF){var aK=z.createElement("valuewrap"),aG=["lineHeight","textAlign","fontFamily","color","fontSize","paddingLeft","paddingTop","width","height","border","borderLeftWidth","borderTopWidth"],aE,aJ;
aG.forEach(function(aL){try{aK.style[aL]=X(aH,aL)
}catch(aM){r.log("html2canvas: Parse: Exception caught in renderFormValue: "+aM.message)
}});
aK.style.borderColor="black";
aK.style.borderStyle="solid";
aK.style.display="block";
aK.style.position="absolute";
if(/^(submit|reset|button|text|password)$/.test(aH.type)||aH.nodeName==="SELECT"){aK.style.lineHeight=X(aH,"height")
}aK.style.top=aI.top+"px";
aK.style.left=aI.left+"px";
aE=(aH.nodeName==="SELECT")?(aH.options[aH.selectedIndex]||0).text:aH.value;
if(!aE){aE=aH.placeholder
}aJ=z.createTextNode(aE);
aK.appendChild(aJ);
Z.appendChild(aK);
ay(aH,aJ,aF);
Z.removeChild(aK)
}function p(aE){aE.drawImage.apply(aE,Array.prototype.slice.call(arguments,1));
w+=1
}function L(aG,aJ){var aF=j.getComputedStyle(aG,aJ);
if(!aF||!aF.content||aF.content==="none"||aF.content==="-moz-alt-content"||aF.display==="none"){return
}var aH=aF.content+"",aI=aH.substr(0,1);
if(aI===aH.substr(aH.length-1)&&aI.match(/'|"/)){aH=aH.substr(1,aH.length-2)
}var aK=aH.substr(0,3)==="url",aE=l.createElement(aK?"img":"span");
aE.className=Q+"-before "+Q+"-after";
Object.keys(aF).filter(G).forEach(function(aM){try{aE.style[aM]=aF[aM]
}catch(aL){r.log(["Tried to assign readonly property ",aM,"Error:",aL])
}});
if(aK){aE.src=r.parseBackgroundImage(aH)[0].args[0]
}else{aE.innerHTML=aH
}return aE
}function G(aE){return(isNaN(j.parseInt(aE,10)))
}function t(aF,aE){var aG=L(aF,":before"),aH=L(aF,":after");
if(!aG&&!aH){return
}if(aG){aF.className+=" "+Q+"-before";
aF.parentNode.insertBefore(aG,aF);
aa(aG,aE,true);
aF.parentNode.removeChild(aG);
aF.className=aF.className.replace(Q+"-before","").trim()
}if(aH){aF.className+=" "+Q+"-after";
aF.appendChild(aH);
aa(aH,aE,true);
aF.removeChild(aH);
aF.className=aF.className.replace(Q+"-after","").trim()
}}function al(aF,aI,aG,aH){var aE=Math.round(aH.left+aG.left),aJ=Math.round(aH.top+aG.top);
aF.createPattern(aI);
aF.translate(aE,aJ);
aF.fill();
aF.translate(-aE,-aJ)
}function ar(aM,aI,aG,aE,aH,aK,aF,aL){var aJ=[];
aJ.push(["line",Math.round(aH),Math.round(aK)]);
aJ.push(["line",Math.round(aH+aF),Math.round(aK)]);
aJ.push(["line",Math.round(aH+aF),Math.round(aL+aK)]);
aJ.push(["line",Math.round(aH),Math.round(aL+aK)]);
s(aM,aJ);
aM.save();
aM.clip();
al(aM,aI,aG,aE);
aM.restore()
}function R(aF,aG,aE){aA(aF,aG.left,aG.top,aG.width,aG.height,aE)
}function x(aI,aJ,aF,aL,aE){var aG=r.BackgroundSize(aI,aJ,aL,aE),aH=r.BackgroundPosition(aI,aJ,aL,aE,aG),aK=X(aI,"backgroundRepeat").split(",").map(r.trimText);
aL=H(aL,aG);
aK=aK[aE]||aK[0];
switch(aK){case"repeat-x":ar(aF,aL,aH,aJ,aJ.left,aJ.top+aH.top,99999,aL.height);
break;
case"repeat-y":ar(aF,aL,aH,aJ,aJ.left+aH.left,aJ.top,aL.width,99999);
break;
case"no-repeat":ar(aF,aL,aH,aJ,aJ.left+aH.left,aJ.top+aH.top,aL.width,aL.height);
break;
default:al(aF,aL,aH,{top:aJ.top,left:aJ.left,width:aL.width,height:aL.height});
break
}}function aB(aI,aJ,aG){var aL=X(aI,"backgroundImage"),aF=r.parseBackgroundImage(aL),aK,aE=aF.length;
while(aE--){aL=aF[aE];
if(!aL.args||aL.args.length===0){continue
}var aH=aL.method==="url"?aL.args[0]:aL.value;
aK=V(aH);
if(aK){x(aI,aJ,aG,aK,aE)
}else{r.log("html2canvas: Error loading background:",aL)
}}}function H(aH,aG){if(aH.width===aG.width&&aH.height===aG.height){return aH
}var aE,aF=z.createElement("canvas");
aF.width=aG.width;
aF.height=aG.height;
aE=aF.getContext("2d");
p(aE,aH,0,0,aH.width,aH.height,0,0,aG.width,aG.height);
return aF
}function au(aF,aG,aE){return aF.setVariable("globalAlpha",X(aG,"opacity")*((aE)?aE.opacity:1))
}function W(aE){return aE.replace("px","")
}var aw=/(matrix)\((.+)\)/;
function ak(aJ,aE){var aI=X(aJ,"transform")||X(aJ,"-webkit-transform")||X(aJ,"-moz-transform")||X(aJ,"-ms-transform")||X(aJ,"-o-transform");
var aH=X(aJ,"transform-origin")||X(aJ,"-webkit-transform-origin")||X(aJ,"-moz-transform-origin")||X(aJ,"-ms-transform-origin")||X(aJ,"-o-transform-origin")||"0px 0px";
aH=aH.split(" ").map(W).map(r.asFloat);
var aF;
if(aI&&aI!=="none"){var aG=aI.match(aw);
if(aG){switch(aG[1]){case"matrix":aF=aG[2].split(",").map(r.trimText).map(r.asFloat);
break
}}}return{origin:aH,matrix:aF}
}function B(aI,aF,aJ,aH){var aG=f((!aF)?ao():aJ.width,(!aF)?K():aJ.height),aE={ctx:aG,opacity:au(aG,aI,aF),cssPosition:X(aI,"position"),borders:A(aI),transform:aH,clip:(aF&&aF.clip)?r.Extend({},aF.clip):null};
ap(aI,aE,aF);
if(ac.useOverflow===true&&/(hidden|scroll|auto)/.test(X(aI,"overflow"))===true&&/(BODY)/i.test(aI.nodeName)===false){aE.clip=(aE.clip)?C(aE.clip,aJ):aJ
}return aE
}function E(aH,aF,aE){var aG={left:aF.left+aH[3].width,top:aF.top+aH[0].width,width:aF.width-(aH[1].width+aH[3].width),height:aF.height-(aH[0].width+aH[2].width)};
if(aE){aG=C(aG,aE)
}return aG
}function D(aF,aE){var aG=(aE.matrix)?r.OffsetBounds(aF):r.Bounds(aF);
aE.origin[0]+=aG.left;
aE.origin[1]+=aG.top;
return aG
}function I(aJ,aK,aI,aM){var aF=ak(aJ,aK),aE=D(aJ,aF),aH,aN=B(aJ,aK,aE,aF),aL=aN.borders,aQ=aN.ctx,aG=E(aL,aE,aN.clip),aP=ab(aJ,aE,aL),aO=(am.test(aJ.nodeName))?"#efefef":X(aJ,"backgroundColor");
s(aQ,aP.clip);
aQ.save();
aQ.clip();
if(aG.height>0&&aG.width>0&&!aM){R(aQ,aE,aO);
aB(aJ,aG,aQ)
}else{if(aM){aN.backgroundColor=aO
}}aQ.restore();
aP.borders.forEach(function(aR){J(aQ,aR.args,aR.color)
});
if(!aI){t(aJ,aN)
}switch(aJ.nodeName){case"IMG":if((aH=V(aJ.getAttribute("src")))){U(aQ,aJ,aH,aE,aL)
}else{r.log("html2canvas: Error loading <img>:"+aJ.getAttribute("src"))
}break;
case"INPUT":if(/^(text|url|email|submit|button|reset)$/.test(aJ.type)&&(aJ.value||aJ.placeholder||"").length>0){at(aJ,aE,aN)
}break;
case"TEXTAREA":if((aJ.value||aJ.placeholder||"").length>0){at(aJ,aE,aN)
}break;
case"SELECT":if((aJ.options||aJ.placeholder||"").length>0){at(aJ,aE,aN)
}break;
case"LI":an(aJ,aN,aG);
break;
case"CANVAS":U(aQ,aJ,aJ,aE,aL);
break
}return aN
}function ag(aE){return(X(aE,"display")!=="none"&&X(aE,"visibility")!=="hidden"&&!aE.hasAttribute("data-html2canvas-ignore"))
}function aa(aF,aE,aG){if(ag(aF)){aE=I(aF,aE,aG,false)||aE;
if(!am.test(aF.nodeName)){O(aF,aE,aG)
}}}function O(aF,aE,aG){r.Children(aF).forEach(function(aH){if(aH.nodeType===aH.ELEMENT_NODE){aa(aH,aE,aG)
}else{if(aH.nodeType===aH.TEXT_NODE){ay(aF,aH,aE)
}}})
}function ax(){var aG=X(l.documentElement,"backgroundColor"),aF=(r.isTransparent(aG)&&M===l.body),aE=I(M,null,false,aF);
O(M,aE);
if(aF){aG=aE.backgroundColor
}Z.removeChild(P);
return{backgroundColor:aG,stack:aE}
}return ax()
};
function a(n){return{zindex:n,children:[]}
}k.Preload=function(q){var z={numLoaded:0,numFailed:0,numTotal:0,cleanupDone:false},H,s=k.Util,I,G,t=0,o=q.elements[0]||l.body,K=o.ownerDocument,y=o.getElementsByTagName("img"),A=y.length,u=K.createElement("a"),x=(function(L){return(L.crossOrigin!==e)
})(new Image()),C;
u.href=j.location.href;
H=u.protocol+u.host;
function J(M){u.href=M;
u.href=u.href;
var L=u.protocol+u.host;
return(L===H)
}function r(){s.log("html2canvas: start: images: "+z.numLoaded+" / "+z.numTotal+" (failed: "+z.numFailed+")");
if(!z.firstRun&&z.numLoaded>=z.numTotal){s.log("Finished loading images: # "+z.numTotal+" (failed: "+z.numFailed+")");
if(typeof q.complete==="function"){q.complete(z)
}}}function B(O,N,P){var L,Q=q.proxy,M;
u.href=O;
O=u.href;
L="html2canvas_"+(t++);
P.callbackname=L;
if(Q.indexOf("?")>-1){Q+="&"
}else{Q+="?"
}Q+="url="+encodeURIComponent(O)+"&callback="+L;
M=K.createElement("script");
j[L]=function(R){if(R.substring(0,6)==="error:"){P.succeeded=false;
z.numLoaded++;
z.numFailed++;
r()
}else{F(N,P);
N.src=R
}j[L]=e;
try{delete j[L]
}catch(S){}M.parentNode.removeChild(M);
M=null;
delete P.script;
delete P.callbackname
};
M.setAttribute("type","text/javascript");
M.setAttribute("src",Q);
P.script=M;
j.document.body.appendChild(M)
}function w(L,N){var M=j.getComputedStyle(L,N),O=M.content;
if(O.substr(0,3)==="url"){I.loadImage(k.Util.parseBackgroundImage(O)[0].args[0])
}E(M.backgroundImage,L)
}function D(L){w(L,":before");
w(L,":after")
}function p(N,M){var L=k.Generate.Gradient(N,M);
if(L!==e){z[N]={img:L,succeeded:true};
z.numTotal++;
z.numLoaded++;
r()
}}function n(L){return(L&&L.method&&L.args&&L.args.length>0)
}function E(M,L){var N;
k.Util.parseBackgroundImage(M).filter(n).forEach(function(O){if(O.method==="url"){I.loadImage(O.args[0])
}else{if(O.method.match(/\-?gradient$/)){if(N===e){N=k.Util.Bounds(L)
}p(O.value,N)
}}})
}function v(N){var L=false;
try{s.Children(N).forEach(v)
}catch(O){}try{L=N.nodeType
}catch(M){L=false;
s.log("html2canvas: failed to access some element's nodeType - Exception: "+M.message)
}if(L===1||L===e){D(N);
try{E(s.getCSS(N,"backgroundImage"),N)
}catch(O){s.log("html2canvas: failed to get background-image - Exception: "+O.message)
}E(N)
}}function F(L,M){L.onload=function(){if(M.timer!==e){j.clearTimeout(M.timer)
}z.numLoaded++;
M.succeeded=true;
L.onerror=L.onload=null;
r()
};
L.onerror=function(){if(L.crossOrigin==="anonymous"){j.clearTimeout(M.timer);
if(q.proxy){var N=L.src;
L=new Image();
M.img=L;
L.src=N;
B(L.src,L,M);
return
}}z.numLoaded++;
z.numFailed++;
M.succeeded=false;
L.onerror=L.onload=null;
r()
}
}I={loadImage:function(N){var L,M;
if(N&&z[N]===e){L=new Image();
if(N.match(/data:image\/.*;base64,/i)){L.src=N.replace(/url\(['"]{0,}|['"]{0,}\)$/ig,"");
M=z[N]={img:L};
z.numTotal++;
F(L,M)
}else{if(J(N)||q.allowTaint===true){M=z[N]={img:L};
z.numTotal++;
F(L,M);
L.src=N
}else{if(x&&!q.allowTaint&&q.useCORS){L.crossOrigin="anonymous";
M=z[N]={img:L};
z.numTotal++;
F(L,M);
L.src=N
}else{if(q.proxy){M=z[N]={img:L};
z.numTotal++;
B(N,L,M)
}}}}}},cleanupDOM:function(N){var L,O;
if(!z.cleanupDone){if(N&&typeof N==="string"){s.log("html2canvas: Cleanup because: "+N)
}else{s.log("html2canvas: Cleanup after timeout: "+q.timeout+" ms.")
}for(O in z){if(z.hasOwnProperty(O)){L=z[O];
if(typeof L==="object"&&L.callbackname&&L.succeeded===e){j[L.callbackname]=e;
try{delete j[L.callbackname]
}catch(M){}if(L.script&&L.script.parentNode){L.script.setAttribute("src","about:blank");
L.script.parentNode.removeChild(L.script)
}z.numLoaded++;
z.numFailed++;
s.log("html2canvas: Cleaned up failed img: '"+O+"' Steps: "+z.numLoaded+" / "+z.numTotal)
}}}if(j.stop!==e){j.stop()
}else{if(l.execCommand!==e){l.execCommand("Stop",false)
}}if(l.close!==e){l.close()
}z.cleanupDone=true;
if(!(N&&typeof N==="string")){r()
}}},renderingDone:function(){if(C){j.clearTimeout(C)
}}};
if(q.timeout>0){C=j.setTimeout(I.cleanupDOM,q.timeout)
}s.log("html2canvas: Preload starts: finding background-images");
z.firstRun=true;
v(o);
s.log("html2canvas: Preload: Finding images");
for(G=0;
G<A;
G+=1){I.loadImage(y[G].getAttribute("src"))
}z.firstRun=false;
s.log("html2canvas: Preload: Done.");
if(z.numTotal===z.numLoaded){r()
}return I
};
k.Renderer=function(q,p){function n(u){var s=[],r;
r=(function t(x){var w={};
function y(z,B,F){var H=(B.zIndex.zindex==="auto")?0:Number(B.zIndex.zindex),D=z,G=B.zIndex.isPositioned,C=B.zIndex.isFloated,A={node:B},E=F;
if(B.zIndex.ownStacking){D=A.context={"!":[{node:B,children:[]}]};
E=e
}else{if(G||C){E=A.children=[]
}}if(H===0&&F){F.push(A)
}else{if(!z[H]){z[H]=[]
}z[H].push(A)
}B.zIndex.children.forEach(function(I){y(D,I,E)
})
}y(w,x);
return w
})(u);
function v(w){Object.keys(w).sort().forEach(function(A){var y=[],C=[],z=[],B=[];
w[A].forEach(function(D){if(D.node.zIndex.isPositioned||D.node.zIndex.opacity<1){z.push(D)
}else{if(D.node.zIndex.isFloated){C.push(D)
}else{y.push(D)
}}});
(function x(D){D.forEach(function(E){B.push(E);
if(E.children){x(E.children)
}})
})(y.concat(C,z));
B.forEach(function(D){if(D.context){v(D.context)
}else{s.push(D.node)
}})
})
}v(r);
return s
}function o(r){var s;
if(typeof p.renderer==="string"&&k.Renderer[r]!==e){s=k.Renderer[r](p)
}else{if(typeof r==="function"){s=r(p)
}else{throw new Error("Unknown renderer")
}}if(typeof s!=="function"){throw new Error("Invalid renderer defined")
}return s
}return o(p.renderer)(q,p,l,n(q.stack),k)
};
k.Util.Support=function(o,q){function n(){var s=new Image(),t=q.createElement("canvas"),r=(t.getContext===e)?false:t.getContext("2d");
if(r===false){return false
}t.width=t.height=10;
s.src=["data:image/svg+xml,","<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>","<foreignObject width='10' height='10'>","<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>","sup","</div>","</foreignObject>","</svg>"].join("");
try{r.drawImage(s,0,0);
t.toDataURL()
}catch(u){return false
}k.Util.log("html2canvas: Parse: SVG powered rendering available");
return true
}function p(){var u,w,v,s,t=false;
if(q.createRange){u=q.createRange();
if(u.getBoundingClientRect){w=q.createElement("boundtest");
w.style.height="123px";
w.style.display="block";
q.body.appendChild(w);
u.selectNode(w);
v=u.getBoundingClientRect();
s=v.height;
if(s===123){t=true
}q.body.removeChild(w)
}}return t
}return{rangeBounds:p(),svgRendering:o.svgRendering&&n()}
};
j.html2canvas=function(r,q){r=(r.length)?r:[r];
var n,p,o={logging:false,elements:r,background:"#fff",proxy:null,timeout:0,useCORS:false,allowTaint:false,svgRendering:false,ignoreElements:"IFRAME|OBJECT|PARAM",useOverflow:true,letterRendering:false,chinese:false,width:null,height:null,taintTest:true,renderer:"Canvas"};
o=k.Util.Extend(q,o);
k.logging=o.logging;
o.complete=function(s){if(typeof o.onpreloaded==="function"){if(o.onpreloaded(s)===false){return
}}n=k.Parse(s,o);
if(typeof o.onparsed==="function"){if(o.onparsed(n)===false){return
}}p=k.Renderer(n,o);
if(typeof o.onrendered==="function"){o.onrendered(p)
}};
j.setTimeout(function(){k.Preload(o)
},0);
return{render:function(s,t){return k.Renderer(s,k.Util.Extend(t,o))
},parse:function(s,t){return k.Parse(s,k.Util.Extend(t,o))
},preload:function(s){return k.Preload(k.Util.Extend(s,o))
},log:k.Util.log}
};
j.html2canvas.log=k.Util.log;
j.html2canvas.Renderer={Canvas:e};
k.Renderer.Canvas=function(w){w=w||{};
var u=l,q=[],v=l.createElement("canvas"),r=v.getContext("2d"),t=k.Util,n=w.canvas||u.createElement("canvas");
function p(x,y){x.beginPath();
y.forEach(function(z){x[z.name].apply(x,z["arguments"])
});
x.closePath()
}function s(x){if(q.indexOf(x["arguments"][0].src)===-1){r.drawImage(x["arguments"][0],0,0);
try{r.getImageData(0,0,1,1)
}catch(y){v=u.createElement("canvas");
r=v.getContext("2d");
return false
}q.push(x["arguments"][0].src)
}return true
}function o(x,y){switch(y.type){case"variable":x[y.name]=y["arguments"];
break;
case"function":switch(y.name){case"createPattern":if(y["arguments"][0].width>0&&y["arguments"][0].height>0){try{x.fillStyle=x.createPattern(y["arguments"][0],"repeat")
}catch(z){t.log("html2canvas: Renderer: Error creating pattern",z.message)
}}break;
case"drawShape":p(x,y["arguments"]);
break;
case"drawImage":if(y["arguments"][8]>0&&y["arguments"][7]>0){if(!w.taintTest||(w.taintTest&&s(y))){x.drawImage.apply(x,y["arguments"])
}}break;
default:x[y.name].apply(x,y["arguments"])
}break
}}return function(E,G,C,A,B){var F=n.getContext("2d"),y,x,z,D=E.stack;
n.width=n.style.width=G.width||D.ctx.width;
n.height=n.style.height=G.height||D.ctx.height;
z=F.fillStyle;
F.fillStyle=(t.isTransparent(D.backgroundColor)&&G.background!==e)?G.background:E.backgroundColor;
F.fillRect(0,0,n.width,n.height);
F.fillStyle=z;
A.forEach(function(H){F.textBaseline="bottom";
F.save();
if(H.transform.matrix){F.translate(H.transform.origin[0],H.transform.origin[1]);
F.transform.apply(F,H.transform.matrix);
F.translate(-H.transform.origin[0],-H.transform.origin[1])
}if(H.clip){F.beginPath();
F.rect(H.clip.left,H.clip.top,H.clip.width,H.clip.height);
F.clip()
}if(H.ctx.storage){H.ctx.storage.forEach(function(I){o(F,I)
})
}F.restore()
});
t.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");
if(G.elements.length===1){if(typeof G.elements[0]==="object"&&G.elements[0].nodeName!=="BODY"){x=B.Util.Bounds(G.elements[0]);
y=C.createElement("canvas");
y.width=Math.ceil(x.width);
y.height=Math.ceil(x.height);
F=y.getContext("2d");
F.drawImage(n,x.left,x.top,x.width,x.height,0,0,x.width,x.height);
n=null;
return y
}}return n
}
}
})(window,document);