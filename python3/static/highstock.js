/*
 Highstock JS v2.1.9 (2015-10-07)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(){function B(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function I(a,b){return parseInt(a,b||10)}function Ia(a){return typeof a==="string"}function ha(a){return a&&
typeof a==="object"}function Ja(a){return Object.prototype.toString.call(a)==="[object Array]"}function ra(a){return typeof a==="number"}function Ka(a){return Y.log(a)/Y.LN10}function sa(a){return Y.pow(10,a)}function ta(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function t(a){return a!==s&&a!==null}function X(a,b,c){var d,e;if(Ia(b))t(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(t(b)&&ha(b))for(d in b)a.setAttribute(d,b[d]);return e}function na(a){return Ja(a)?
a:[a]}function G(a,b){if(ya&&!ea&&b&&b.opacity!==s)b.filter="alpha(opacity="+b.opacity*100+")";w(a.style,b)}function aa(a,b,c,d,e){a=F.createElement(a);b&&w(a,b);e&&G(a,{padding:0,border:$,margin:0});c&&G(a,c);d&&d.appendChild(a);return a}function ia(a,b){var c=function(){return s};c.prototype=new a;w(c.prototype,b);return c}function Qa(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function ab(a){return(kb&&kb(a)||vb||0)*6E4}function La(a,b){for(var c="{",d=!1,e,f,g,h,i,k=[];(c=a.indexOf(c))!==
-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=N.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=D.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=ja(f,e)}k.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}k.push(a);return k.join("")}function wb(a){return Y.pow(10,T(Y.log(a)/Y.LN10))}function xb(a,b,c,d,e){var f,g=a,c=p(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===
1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function yb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Ra(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Fa(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Ma(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),
delete a[c]}function Sa(a){lb||(lb=aa(Ta));a&&lb.appendChild(a);lb.innerHTML=""}function oa(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;U.console&&console.log(c)}function la(a,b){return parseFloat(a.toPrecision(b||14))}function Xa(a,b){b.renderer.globalAnimation=p(a,b.animation)}function Nb(){var a=N.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";fa=a.Date||window.Date;vb=b&&a.timezoneOffset;kb=b&&a.getTimezoneOffset;mb=function(a,c,d,h,i,k){var j;b?(j=
fa.UTC.apply(0,arguments),j+=ab(j)):j=(new fa(a,c,p(d,1),p(h,0),p(i,0),p(k,0))).getTime();return j};zb=c+"Minutes";Ab=c+"Hours";Bb=c+"Day";bb=c+"Date";cb=c+"Month";db=c+"FullYear";Ob=d+"Milliseconds";Pb=d+"Seconds";Qb=d+"Minutes";Rb=d+"Hours";Cb=d+"Date";Db=d+"Month";Eb=d+"FullYear"}function Z(){}function Ya(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Sb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=
null;this.points={};this.stack=e;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}function Fb(a){var b=a.options,c=b.navigator,d=c.enabled,b=b.scrollbar,e=b.enabled,f=d?c.height:0,g=e?b.height:0;this.handles=[];this.scrollbarButtons=[];this.elementsToDestroy=[];this.chart=a;this.setBaseSeries();this.height=f;this.scrollbarHeight=
g;this.scrollbarEnabled=e;this.navigatorEnabled=d;this.navigatorOptions=c;this.scrollbarOptions=b;this.outlineHeight=f+g;this.init()}function Gb(a){this.init(a)}var s,F=document,U=window,Y=Math,x=Y.round,T=Y.floor,za=Y.ceil,v=Y.max,E=Y.min,Q=Y.abs,ba=Y.cos,ga=Y.sin,ua=Y.PI,pa=ua*2/360,Ga=navigator.userAgent,Tb=U.opera,ya=/(msie|trident|edge)/i.test(Ga)&&!Tb,nb=F.documentMode===8,ob=!ya&&/AppleWebKit/.test(Ga),Ua=/Firefox/.test(Ga),eb=/(Mobile|Android|Windows Phone)/.test(Ga),Na="http://www.w3.org/2000/svg",
ea=!!F.createElementNS&&!!F.createElementNS(Na,"svg").createSVGRect,Yb=Ua&&parseInt(Ga.split("Firefox/")[1],10)<4,ma=!ea&&!ya&&!!F.createElement("canvas").getContext,Va,Za,Ub={},Hb=0,lb,N,ja,Ib,J,ka=function(){return s},ca=[],fb=0,Ta="div",$="none",Zb=/^[0-9]+$/,pb=["plotTop","marginRight","marginBottom","plotLeft"],$b="stroke-width",fa,mb,vb,kb,zb,Ab,Bb,bb,cb,db,Ob,Pb,Qb,Rb,Cb,Db,Eb,K={},D;D=U.Highcharts=U.Highcharts?oa(16,!0):{};D.seriesTypes=K;var w=D.extend=function(a,b){var c;a||(a={});for(c in b)a[c]=
b[c];return a},p=D.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==s&&c!==null)return c},R=D.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};ja=function(a,b,c){if(!t(b)||isNaN(b))return N.lang.invalidDate||"";var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new fa(b-ab(b)),e,f=d[Ab](),g=d[Bb](),h=d[bb](),i=d[cb](),k=d[db](),j=N.lang,m=j.weekdays,d=w({a:m[g].substr(0,3),A:m[g],d:Qa(h),e:h,w:g,b:j.shortMonths[i],
B:j.months[i],m:Qa(i+1),y:k.toString().substr(2,2),Y:k,H:Qa(f),k:f,I:Qa(f%12||12),l:f%12||12,M:Qa(d[zb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Qa(d.getSeconds()),L:Qa(x(b%1E3),3)},D.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};J={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};D.numberFormat=function(a,b,c,d){var e=N.lang,a=+a||0,f=b===
-1?E((a.toString().split(".")[1]||"").length,20):isNaN(b=Q(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(I(a=Q(a).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+Q(a-c).toFixed(f).slice(2):"")};Ib={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,k=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+
1],a[g+2])};e&&(k(b),k(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+
d;else e=b;return e}};(function(a){U.HighchartsAdapter=U.HighchartsAdapter||a&&{init:function(b){var c=a.fx;a.extend(a.easing,{easeOutQuad:function(a,b,c,g,h){return-g*(b/=h)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(b,e){var f=c.step,g;e==="cur"?f=c.prototype:e==="_default"&&a.Tween&&(f=a.Tween.propHooks[e],e="set");(g=f[e])&&(f[e]=function(a){var c,a=b?a:this;if(a.prop!=="align")return c=a.elem,c.attr?c.attr(a.prop,e==="cur"?s:a.now):g.apply(this,arguments)})});R(a.cssHooks.opacity,
"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});this.addAnimSetter("d",function(a){var c=a.elem,f;if(!a.started)f=b.init(c,c.d,c.toD),a.start=f[0],a.end=f[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))});this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){var c,g=a.length;for(c=0;c<g;c++)if(b.call(a[c],a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,g;if(this[0]){Ia(b[0])&&(a=b[0],
b=Array.prototype.slice.call(b,1));c=b[0];if(c!==s)c.chart=c.chart||{},c.chart.renderTo=this[0],new D[a](c,b[1]),g=this;c===s&&(g=ca[X(this[0],"data-highcharts-chart")])}return g}},addAnimSetter:function(b,c){a.Tween?a.Tween.propHooks[b]={set:c}:a.fx.step[b]=c},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},addEvent:function(b,
c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=F.removeEventListener?"removeEventListener":"detachEvent";F[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!ya&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);w(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);b[g]&&(b[c]=b[g],
b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===s)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==s&&b.attr&&(c.opacity+="px");b.hasAnim=1;e.animate(c,d)},stop:function(b){b.hasAnim&&a(b).stop()}}})(U.jQuery);var S=U.HighchartsAdapter,M=S||{};S&&S.init.call(S,Ib);var qb=M.adapterRun,ac=M.getScript,Oa=M.inArray,o=D.each=M.each,gb=M.grep,bc=
M.offset,Aa=M.map,A=M.addEvent,V=M.removeEvent,O=M.fireEvent,cc=M.washMouseEvent,rb=M.animate,$a=M.stop;N={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/stock/2.1.9/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/stock/2.1.9/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",
formatter:function(){return this.y===null?"":D.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",
labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",
backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:ea,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
shadow:!0,snap:eb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var W=N.plotOptions,S=W.line;Nb();var dc=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,ec=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
fc=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,va=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Aa(a.stops,function(a){return va(a[1])}):(c=dc.exec(a))?b=[I(c[1]),I(c[2]),I(c[3]),parseFloat(c[4],10)]:(c=ec.exec(a))?b=[I(c[1],16),I(c[2],16),I(c[3],16),1]:(c=fc.exec(a))&&(b=[I(c[1]),I(c[2]),I(c[3]),1])})(a);return{get:function(c){var f;d?(f=B(a),f.stops=[].concat(f.stops),o(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+
b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)o(d,function(b){b.brighten(a)});else if(ra(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=I(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this},raw:a}};Z.prototype={opacity:1,textProps:"fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),init:function(a,b){this.element=b==="span"?aa(b):F.createElementNS(Na,
b);this.renderer=a},animate:function(a,b,c){b=p(b,this.renderer.globalAnimation,!0);$a(this);if(b){b=B(b,{});if(c)b.complete=c;rb(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,k,j,m,l,n,q,r=[];a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];i=d.gradients;j=a.stops;n=c.radialReference;Ja(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&n&&!t(g.gradientUnits)&&
(h=g,g=B(g,d.getRadialAttr(n,h),{gradientUnits:"userSpaceOnUse"}));for(q in g)q!=="id"&&r.push(q,g[q]);for(q in j)r.push(j[q]);r=r.join(",");i[r]?a=i[r].attr("id"):(g.id=a="highcharts-"+Hb++,i[r]=k=d.createElement(f).attr(g).add(d.defs),k.radAttr=h,k.stops=[],o(j,function(a){a[1].indexOf("rgba")===0?(e=va(a[1]),m=e.get("rgb"),l=e.get("a")):(m=a[1],l=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":m,"stop-opacity":l}).add(k);k.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")");c.gradient=
r}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport,g=f||b.style.textShadow!==s&&!ya;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));if(ob||f)e.textRendering="geometricPrecision";g?this.css(e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),o(a.split(/\s?,\s?/g),function(a){var d=b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&o(c,function(a,
c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);X(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/v(I(f),3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==s&&(d=a,a={},a[d]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(d in a){b=
a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(this[d+"Setter"]||this._defaultSetter).call(this,b,d,e);this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b)}if(this.doTransform)this.updateTransform(),this.doTransform=!1}c&&c();return g},updateShadows:function(a,b){for(var c=this.shadows,d=c.length;d--;)c[d].setAttribute(a,
a==="height"?v(b-(c[d].cutHeight||0),0):a==="d"?this.d:b)},addClass:function(a){var b=this.element,c=X(b,"class")||"";c.indexOf(a)===-1&&X(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":$)},crisp:function(a){var b,c={},d,e=
a.strokeWidth||this.strokeWidth||0;d=x(e)%2/2;a.x=T(a.x||this.x||0)+d;a.y=T(a.y||this.y||0)+d;a.width=T((a.width||this.width||0)-2*d);a.height=T((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&I(a.width)||this.textWidth;b&&(a=w(b,c));
this.styles=a;e&&(ma||!ea&&this.renderer.forExport)&&delete a.width;if(ya&&!ea)G(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";X(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;Za&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=fa.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(Ga.indexOf("Android")===-1||fa.now()-(c.touchEventFired||0)>1100)&&
b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,
g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(t(c)||t(d))&&a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=
b,!c||Ia(c))this.alignTo=d=c||"renderer",ta(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=x(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=x(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=
h;return this},getBBox:function(a){var b,c=this.renderer,d,e=this.rotation,f=this.element,g=this.styles,h=e*pa;d=this.textStr;var i,k=f.style,j,m;d!==s&&(m=["",e||0,g&&g.fontSize,f.style.width].join(","),m=d===""||Zb.test(d)?"num:"+d.toString().length+m:d+m);m&&!a&&(b=c.cache[m]);if(!b){if(f.namespaceURI===Na||c.forExport){try{j=this.fakeTS&&function(a){o(f.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=a})},Ua&&k.textShadow?(i=k.textShadow,k.textShadow=""):j&&j($),b=f.getBBox?
w({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},i?k.textShadow=i:j&&j("")}catch(l){}if(!b||b.width<0)b={width:0,height:0}}else b=this.htmlGetBBox();if(c.isSVG){a=b.width;d=b.height;if(ya&&g&&g.fontSize==="11px"&&d.toPrecision(3)==="16.9")b.height=d=14;if(e)b.width=Q(d*ga(h))+Q(a*ba(h)),b.height=Q(d*ba(h))+Q(a*ga(h))}m&&(c.cache[m]=b)}return b},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=
this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,
d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;$a(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&o(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&ta(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},
shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,k,j;if(a){i=p(a.width,3);k=(a.opacity||0.15)/i;j=this.parentInverted?"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;X(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":k*e,"stroke-width":h,transform:"translate"+j,fill:$});if(c)X(f,"height",v(X(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName===
"circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash",
"3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=I(a[b])*this["stroke-width"];a=a.join(",").replace("NaN","none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||
(b=F.createElementNS(Na,"title"),this.element.appendChild(b));b.appendChild(F.createTextNode(String(p(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,b,c){a==="inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,
c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;t(a)&&(g.setAttribute(b,a),a=+a,this[b]===a&&(e=!1),this[b]=a);if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=X(e,"zIndex"),e!==g&&(I(f)>a||!t(a)&&t(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};Z.prototype.yGetter=Z.prototype.xGetter;Z.prototype.translateXSetter=Z.prototype.translateYSetter=Z.prototype.rotationSetter=Z.prototype.verticalAlignSetter=
Z.prototype.scaleXSetter=Z.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};Z.prototype["stroke-widthSetter"]=Z.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],Z.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var qa=function(){this.init.apply(this,
arguments)};qa.prototype={Element:Z,init:function(a,b,c,d,e,f){var g=location,h,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));h=d.element;a.appendChild(h);a.innerHTML.indexOf("xmlns")===-1&&X(h,"xmlns",Na);this.isSVG=!0;this.box=h;this.boxWrapper=d;this.alignedObjects=[];this.url=(Ua||ob)&&F.getElementsByTagName("base").length?g.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(F.createTextNode("Created with Highstock 2.1.9"));
this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var i;if(Ua&&a.getBoundingClientRect)this.subPixelFix=b=function(){G(a,{left:0,top:0});i=a.getBoundingClientRect();G(a,{left:za(i.left)-i.left+"px",top:za(i.top)-i.top+"px"})},b(),A(U,"resize",b)},getStyle:function(a){return this.style=w({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},
destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Ma(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&V(U,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,
"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,k=X(b,"x"),j=a.styles,m=a.textWidth,l=j&&j.lineHeight,n=j&&j.textShadow,q=j&&j.textOverflow==="ellipsis",r=g.length,C=m&&!a.added&&this.box,z=function(a){return l?I(l):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:j&&j.fontSize||c.style.fontSize||12,a).h},u=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};r--;)b.removeChild(g[r]);!f&&!n&&!q&&e.indexOf(" ")===-1?b.appendChild(F.createTextNode(u(e))):(h=/<.*style="([^"]+)".*>/,
i=/<.*href="(http[^"]+)".*>/,C&&C.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e[e.length-1]===""&&e.pop(),o(e,function(e,f){var g,l=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");o(g,function(e){if(e!==""||g.length===1){var n={},r=F.createElementNS(Na,"tspan"),C;h.test(e)&&(C=e.match(h)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),X(r,"style",C));i.test(e)&&!d&&(X(r,"onclick",'location.href="'+e.match(i)[1]+'"'),G(r,{cursor:"pointer"}));e=u(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){r.appendChild(F.createTextNode(e));if(l)n.dx=0;else if(f&&k!==null)n.x=k;X(r,n);b.appendChild(r);!l&&f&&(!ea&&d&&G(r,{display:"block"}),X(r,"dy",z(r)));if(m){for(var n=e.replace(/([^\^])-/g,"$1- ").split(" "),p=g.length>1||f||n.length>1&&j.whiteSpace!=="nowrap",o,y,s,t=[],v=z(r),x=1,w=a.rotation,B=e,E=B.length;(p||q)&&(n.length||
t.length);)a.rotation=0,o=a.getBBox(!0),s=o.width,!ea&&c.forExport&&(s=c.measureSpanWidth(r.firstChild.data,a.styles)),o=s>m,y===void 0&&(y=o),q&&y?(E/=2,B===""||!o&&E<0.5?n=[]:(o&&(y=!0),B=e.substring(0,B.length+(o?-1:1)*za(E)),n=[B+(m>3?"\u2026":"")],r.removeChild(r.firstChild))):!o||n.length===1?(n=t,t=[],n.length&&(x++,r=F.createElementNS(Na,"tspan"),X(r,{dy:v,x:k}),C&&X(r,"style",C),b.appendChild(r)),s>m&&(m=s)):(r.removeChild(r.firstChild),t.unshift(n.pop())),n.length&&r.appendChild(F.createTextNode(n.join(" ").replace(/- /g,
"-")));y&&a.attr("title",a.textStr);a.rotation=w}l++}}})}),C&&C.removeChild(b),n&&a.applyTextShadow&&a.applyTextShadow(n))},getContrast:function(a){a=va(a).rgba;return a[0]+a[1]+a[2]>384?"#000000":"#FFFFFF"},button:function(a,b,c,d,e,f,g,h,i){var k=this.label(a,b,c,i,null,null,null,null,"button"),j=0,m,l,n,q,r,C,a={x1:0,y1:0,x2:0,y2:1},e=B({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;
f=B(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);q=f.style;delete f.style;g=B(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);r=g.style;delete g.style;h=B(e,{style:{color:"#CCC"}},h);C=h.style;delete h.style;A(k.element,ya?"mouseover":"mouseenter",function(){j!==3&&k.attr(f).css(q)});A(k.element,ya?"mouseout":"mouseleave",function(){j!==3&&(m=[e,f,g][j],l=[n,q,r][j],k.attr(m).css(l))});k.setState=function(a){(k.state=j=a)?a===2?k.attr(g).css(r):
a===3&&k.attr(h).css(C):k.attr(e).css(n)};return k.on("click",function(a){j!==3&&d.call(k,a)}).attr(e).css(w({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=x(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=x(a[2])+b%2/2);return a},path:function(a){var b={fill:$};Ja(a)?b.d=a:ha(a)&&w(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=ha(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",
a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(ha(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=ha(a)?a.r:e,g=this.createElement("rect"),a=ha(a)?a:a===s?{}:{x:a,y:b,width:v(c,0),height:v(d,0)};if(f!==s)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a){X(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;
this.width=a;this.height=b;for(this.boxWrapper[p(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return t(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:$};arguments.length>1&&w(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,
b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(x(b),x(c),d,e,f),i=/^url\((.*?)\)$/,k,j;if(h)g=this.path(h),w(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&w(g,f);else if(i.test(a))j=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(x((d-b[0])/2),x((e-b[1])/2)))},k=a.match(i)[1],a=Ub[k]||f&&f.width&&f.height&&[f.width,f.height],g=this.image(k).attr({x:b,y:c}),g.isImg=!0,a?j(g,a):(g.attr({width:0,height:0}),aa("img",{onload:function(){this.width===0&&(G(this,{position:"absolute",
top:"-999em"}),document.body.appendChild(this));j(g,Ub[k]=[this.width,this.height]);this.parentNode&&this.parentNode.removeChild(this)},src:k}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},
diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=ba(f),k=ga(f),j=ba(g),g=ga(g),e=e.end-f<ua?0:1;return["M",a+c*i,b+c*k,"A",c,c,0,e,1,a+c*j,b+c*g,h?"M":"L",a+d*j,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*k,h?"":"Z"]},callout:function(a,b,c,d,e){var f=E(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,
b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+Hb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);
a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=ma||!ea&&this.forExport,f={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),l;for(l=0;l<d.length;l++)e=d[l],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,
b){var c,d,a=a||this.style.fontSize;!a&&b&&U.getComputedStyle&&(b=b.element||b,a=(c=U.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?I(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:x(a*1.2);d=x(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=v(d*ba(b*pa),4));return{x:-a/3*ga(b*pa),y:d}},label:function(a,b,c,d,e,f,g,h,i){function k(){var a,b;a=q.element.style;C=(L===void 0||Ba===void 0||n.styles.textAlign)&&t(q.textStr)&&q.getBBox();n.width=(L||C.width||0)+2*u+p;n.height=
(Ba||C.height||0)+2*u;D=u+l.fontMetrics(a&&a.fontSize,q).b;if(A){if(!r)a=x(-z*u)+E,b=(h?-D:0)+E,n.box=r=d?l.symbol(d,a,b,n.width,n.height,hb):l.rect(a,b,n.width,n.height,0,hb[$b]),r.isImg||r.attr("fill",$),r.add(n);r.isImg||r.attr(w({width:x(n.width),height:x(n.height)},hb));hb=null}}function j(){var a=n.styles,a=a&&a.textAlign,b=p+u*(1-z),c;c=h?0:D;if(t(L)&&C&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(L-C.width);if(b!==q.x||c!==q.y)q.attr("x",b),c!==s&&q.attr("y",c);q.x=b;q.y=c}function m(a,
b){r?r.attr(a,b):hb[a]=b}var l=this,n=l.g(i),q=l.text("",0,0,g).attr({zIndex:1}),r,C,z=0,u=3,p=0,L,Ba,v,Jb,E=0,hb={},D,A;n.onAdd=function(){q.add(n);n.attr({text:a||a===0?a:"",x:b,y:c});r&&t(e)&&n.attr({anchorX:e,anchorY:f})};n.widthSetter=function(a){L=a};n.heightSetter=function(a){Ba=a};n.paddingSetter=function(a){if(t(a)&&a!==u)u=n.padding=a,j()};n.paddingLeftSetter=function(a){t(a)&&a!==p&&(p=a,j())};n.alignSetter=function(a){z={left:0,center:0.5,right:1}[a]};n.textSetter=function(a){a!==s&&q.textSetter(a);
k();j()};n["stroke-widthSetter"]=function(a,b){a&&(A=!0);E=a%2/2;m(b,a)};n.strokeSetter=n.fillSetter=n.rSetter=function(a,b){b==="fill"&&a&&(A=!0);m(b,a)};n.anchorXSetter=function(a,b){e=a;m(b,x(a)-E-v)};n.anchorYSetter=function(a,b){f=a;m(b,a-Jb)};n.xSetter=function(a){n.x=a;z&&(a-=z*((L||C.width)+u));v=x(a);n.attr("translateX",v)};n.ySetter=function(a){Jb=n.y=x(a);n.attr("translateY",Jb)};var F=n.css;return w(n,{css:function(a){if(a){var b={},a=B(a);o(n.textProps,function(c){a[c]!==s&&(b[c]=a[c],
delete a[c])});q.css(b)}return F.call(n,a)},getBBox:function(){return{width:C.width+2*u,height:C.height+2*u,x:C.x-u,y:C.y-u}},shadow:function(a){r&&r.shadow(a);return n},destroy:function(){V(n.element,"mouseenter");V(n.element,"mouseleave");q&&(q=q.destroy());r&&(r=r.destroy());Z.prototype.destroy.call(n);n=l=k=j=m=null}})}};Va=qa;w(Z.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow===
"ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=w(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,
k=this.styles;G(b,{marginLeft:c,marginTop:d});i&&o(i,function(a){G(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&o(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var j=this.rotation,m,l=I(this.textWidth),n=[j,g,b.innerHTML,this.textWidth,this.textAlign].join(",");if(n!==this.cTT){m=a.fontMetrics(b.style.fontSize).b;t(j)&&this.setSpanRotation(j,