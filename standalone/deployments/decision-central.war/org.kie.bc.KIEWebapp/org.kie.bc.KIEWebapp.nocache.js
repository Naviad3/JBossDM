function org_kie_bc_KIEWebapp(){var Q='bootstrap',R='begin',S='gwt.codesvr.org.kie.bc.KIEWebapp=',T='gwt.codesvr=',U='org.kie.bc.KIEWebapp',V='startup',W='DUMMY',X=0,Y=1,Z='iframe',$='position:absolute; width:0; height:0; border:none; left: -1000px;',_=' top: -1000px;',ab='CSS1Compat',bb='<!doctype html>',cb='',db='<html><head><\/head><body><\/body><\/html>',eb='undefined',fb='readystatechange',gb=10,hb='Chrome',ib='eval("',jb='");',kb='script',lb='javascript',mb='moduleStartup',nb='moduleRequested',ob='org_kie_bc_KIEWebapp',pb='Failed to load ',qb='head',rb='meta',sb='name',tb='org.kie.bc.KIEWebapp::',ub='::',vb='gwt:property',wb='content',xb='=',yb='gwt:onPropertyErrorFn',zb='Bad handler "',Ab='" for "gwt:onPropertyErrorFn"',Bb='gwt:onLoadErrorFn',Cb='" for "gwt:onLoadErrorFn"',Db='#',Eb='?',Fb='/',Gb='img',Hb='clear.cache.gif',Ib='baseUrl',Jb='org.kie.bc.KIEWebapp.nocache.js',Kb='base',Lb='//',Mb='locale',Nb='default',Ob='locale=',Pb=7,Qb='&',Rb='__gwt_Locale',Sb='_',Tb='Unexpected exception in locale detection, using default: ',Ub=2,Vb=3,Wb='user.agent',Xb='webkit',Yb='safari',Zb='msie',$b=11,_b='ie10',ac=9,bc='ie9',cc=8,dc='ie8',ec='gecko',fc='gecko1_8',gc=4,hc='selectingPermutation',ic='org.kie.bc.KIEWebapp.devmode.js',jc='76409918299716DBD57DC659993DDA76',kc='es',lc=':1',mc='fr',nc=':2',oc='ja',pc=':3',qc='E409D988B02087FABBD95434DD995DA7',rc=':',sc='.cache.js',tc='link',uc='rel',vc='stylesheet',wc='href',xc='loadExternalRefs',yc='jquery-ui/jquery-ui.min.css',zc='bootstrap-daterangepicker/daterangepicker.css',Ac='bootstrap-select/css/bootstrap-select.min.css',Bc='prettify/bin/prettify.min.css',Cc='uberfire-patternfly.css',Dc='css/rcue.min.css',Ec='css/rcue-additions.min.css',Fc='css/bootstrap-datepicker3-1.6.4.min.cache.css',Gc='css/bootstrap-switch-3.3.2.min.cache.css',Hc='css/bootstrap-datetimepicker-2.4.4.min.cache.css',Ic='css/bootstrap-slider-9.2.0.min.cache.css',Jc='css/typeahead-0.10.5.min.cache.css',Kc='css/positioned-tabs-1.0.0.min.cache.css',Lc='css/animate-3.5.2.min.cache.css',Mc='css/bootstrap-notify-custom.min.cache.css',Nc='css/card-1.0.1.cache.css',Oc='css/Styles.css',Pc='css/kie-wb.css',Qc='end',Rc='http:',Sc='file:',Tc='_gwt_dummy_',Uc='__gwtDevModeHook:org.kie.bc.KIEWebapp',Vc='Ignoring non-whitelisted Dev Mode URL: ',Wc=':moduleBase';var q=window;var r=document;t(Q,R);function s(){var a=q.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:U,sessionId:q.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
org_kie_bc_KIEWebapp.__sendStats=t;org_kie_bc_KIEWebapp.__moduleName=U;org_kie_bc_KIEWebapp.__errFn=null;org_kie_bc_KIEWebapp.__moduleBase=W;org_kie_bc_KIEWebapp.__softPermutationId=X;org_kie_bc_KIEWebapp.__computePropValue=null;org_kie_bc_KIEWebapp.__getPropMap=null;org_kie_bc_KIEWebapp.__installRunAsyncCode=function(){};org_kie_bc_KIEWebapp.__gwtStartLoadingFragment=function(){return null};org_kie_bc_KIEWebapp.__gwt_isKnownPropertyValue=function(){return false};org_kie_bc_KIEWebapp.__gwt_getMetaProperty=function(){return null};var u=null;var v=q.__gwt_activeModules=q.__gwt_activeModules||{};v[U]={moduleName:U};org_kie_bc_KIEWebapp.__moduleStartupDone=function(e){var f=v[U].bindings;v[U].bindings=function(){var a=f?f():{};var b=e[org_kie_bc_KIEWebapp.__softPermutationId];for(var c=X;c<b.length;c++){var d=b[c];a[d[X]]=d[Y]}return a}};var w;function A(){B();return w}
function B(){if(w){return}var a=r.createElement(Z);a.id=U;a.style.cssText=$+_;a.tabIndex=-1;r.body.appendChild(a);w=a.contentWindow.document;w.open();var b=document.compatMode==ab?bb:cb;w.write(b+db);w.close()}
function C(k){function l(a){function b(){if(typeof r.readyState==eb){return typeof r.body!=eb&&r.body!=null}return /loaded|complete/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(r.removeEventListener){r.removeEventListener(fb,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener(fb,d,false)}var e=setInterval(function(){d()},gb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=A();var f=e.body;var g;if(navigator.userAgent.indexOf(hb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(ib));for(var i=X;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(Y,j.length-Y)))}h.appendChild(e.createTextNode(jb));g=e.createElement(kb);g.language=lb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=X;i<c.length;i++){g=e.createElement(kb);g.language=lb;g.text=c[i];f.appendChild(g);d(f,g)}}}
org_kie_bc_KIEWebapp.onScriptDownloaded=function(a){l(function(){m(a)})};t(mb,nb);var n=r.createElement(kb);n.src=k;if(org_kie_bc_KIEWebapp.__errFn){n.onerror=function(){org_kie_bc_KIEWebapp.__errFn(ob,new Error(pb+code))}}r.getElementsByTagName(qb)[X].appendChild(n)}
org_kie_bc_KIEWebapp.__startLoadingFragment=function(a){return G(a)};org_kie_bc_KIEWebapp.__installRunAsyncCode=function(a){var b=A();var c=b.body;var d=b.createElement(kb);d.language=lb;d.text=a;c.appendChild(d);c.removeChild(d)};function D(){var c={};var d;var e;var f=r.getElementsByTagName(rb);for(var g=X,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(sb),k;if(j){j=j.replace(tb,cb);if(j.indexOf(ub)>=X){continue}if(j==vb){k=i.getAttribute(wb);if(k){var l,m=k.indexOf(xb);if(m>=X){j=k.substring(X,m);l=k.substring(m+Y)}else{j=k;l=cb}c[j]=l}}else if(j==yb){k=i.getAttribute(wb);if(k){try{d=eval(k)}catch(a){alert(zb+k+Ab)}}}else if(j==Bb){k=i.getAttribute(wb);if(k){try{e=eval(k)}catch(a){alert(zb+k+Cb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};u=d;org_kie_bc_KIEWebapp.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(Db);if(b==-1){b=a.length}var c=a.indexOf(Eb);if(c==-1){c=a.length}var d=a.lastIndexOf(Fb,Math.min(c,b));return d>=X?a.substring(X,d+Y):cb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(Gb);b.src=a+Hb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Ib);if(a!=null){return a}return cb}
function h(){var a=r.getElementsByTagName(kb);for(var b=X;b<a.length;++b){if(a[b].src.indexOf(Jb)!=-1){return e(a[b].src)}}return cb}
function i(){var a=r.getElementsByTagName(Kb);if(a.length>X){return a[a.length-Y].href}return cb}
function j(){var a=r.location;return a.href==a.protocol+Lb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==cb){k=h()}if(k==cb){k=i()}if(k==cb&&j()){k=e(r.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return org_kie_bc_KIEWebapp.__moduleBase+a}
function H(){var i=[];var j=X;function k(a,b){var c=i;for(var d=X,e=a.length-Y;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(u){u(a,d,b)}throw null}
m[Mb]=function(){var b=null;var c=Nb;try{if(!b){var d=location.search;var e=d.indexOf(Ob);if(e>=X){var f=d.substring(e+Pb);var g=d.indexOf(Qb,e);if(g<X){g=d.length}b=d.substring(e+Pb,g)}}if(!b){b=__gwt_getMetaProperty(Mb)}if(!b){b=q[Rb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Mb,b)){var h=b.lastIndexOf(Sb);if(h<X){b=null;break}b=b.substring(X,h)}}catch(a){alert(Tb+a)}q[Rb]=c;return b||Nb};l[Mb]={'default':X,'es':Y,'fr':Ub,'ja':Vb};m[Wb]=function(){var a=navigator.userAgent.toLowerCase();var b=r.documentMode;if(function(){return a.indexOf(Xb)!=-1}())return Yb;if(function(){return a.indexOf(Zb)!=-1&&(b>=gb&&b<$b)}())return _b;if(function(){return a.indexOf(Zb)!=-1&&(b>=ac&&b<$b)}())return bc;if(function(){return a.indexOf(Zb)!=-1&&(b>=cc&&b<$b)}())return dc;if(function(){return a.indexOf(ec)!=-1||b>=$b}())return fc;return cb};l[Wb]={'gecko1_8':X,'ie10':Y,'ie8':Ub,'ie9':Vb,'safari':gc};__gwt_isKnownPropertyValue=function(a,b){return b in l[a]};org_kie_bc_KIEWebapp.__getPropMap=function(){var a={};for(var b in l){if(l.hasOwnProperty(b)){a[b]=n(b)}}return a};org_kie_bc_KIEWebapp.__computePropValue=n;q.__gwt_activeModules[U].bindings=org_kie_bc_KIEWebapp.__getPropMap;t(Q,hc);if(s()){return G(ic)}var o;try{k([Nb,Yb],jc);k([kc,Yb],jc+lc);k([mc,Yb],jc+nc);k([oc,Yb],jc+pc);k([Nb,fc],qc);k([kc,fc],qc+lc);k([mc,fc],qc+nc);k([oc,fc],qc+pc);o=i[n(Mb)][n(Wb)];var p=o.indexOf(rc);if(p!=-1){j=parseInt(o.substring(p+Y),gb);o=o.substring(X,p)}}catch(a){}org_kie_bc_KIEWebapp.__softPermutationId=j;return G(o+sc)}
function I(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=r.createElement(tc);b.setAttribute(uc,vc);b.setAttribute(wc,G(a));r.getElementsByTagName(qb)[X].appendChild(b);__gwt_stylesLoaded[a]=true}}
t(xc,R);c(yc);c(zc);c(Ac);c(Bc);c(Cc);c(Dc);c(Ec);c(Fc);c(Gc);c(Hc);c(Ic);c(Jc);c(Kc);c(Lc);c(Mc);c(Nc);c(Oc);c(Oc);c(Pc);t(xc,Qc)}
D();org_kie_bc_KIEWebapp.__moduleBase=F();v[U].moduleBase=org_kie_bc_KIEWebapp.__moduleBase;var J=H();if(q){var K=!!(q.location.protocol==Rc||q.location.protocol==Sc);q.__gwt_activeModules[U].canRedirect=K;function L(){var b=Tc;try{q.sessionStorage.setItem(b,b);q.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=Uc;var N=q.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(Vc+N)}N=cb}if(N&&!q[M]){q[M]=true;q[M+Wc]=F();var O=r.createElement(kb);O.src=N;var P=r.getElementsByTagName(qb)[X];P.insertBefore(O,P.firstElementChild||P.children[X]);return false}}}I();t(Q,Qc);C(J);return true}
org_kie_bc_KIEWebapp.succeeded=org_kie_bc_KIEWebapp();