import{r as q,j as e,c as cn,a as Fe,b as ln}from"./Check.es-DOW3DolB.js";import{g as Tt,S as dn}from"./ScrollTrigger-C8IefbVz.js";import{m as un,n as fn,c as hn}from"./X.es-pKuNMGS-.js";import{u as mn,m as Wt,n as Yt}from"./Plus.es-2wDlc3qh.js";import{n as xn}from"./Pause.es-D59w6SYm.js";import{n as pn}from"./Play.es-DewO63qp.js";import{p as Kt,d as vn,s as gn,c as yn,q as bn,R as wn}from"./alternatives-CwVaUNbg.js";const Vt=8,Rt=24,Nt=4,Jt=1.3,Mn=.06,Qt=2.6,En=1.6,Zt=["#120f17","#2a0f0a","#9a3412","#f97316","#fed7aa"],Sn={linear:0,radial:1},Lt=.2,Rn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Tn=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRamp[8];
uniform int uCount;
uniform int uType;
uniform vec2 uDir;
uniform float uExtent;
uniform float uBands;
uniform float uSoftness;
uniform float uFlow;
uniform float uScale;
uniform float uSilk;
uniform vec4 uStir[24];
uniform float uStirWeight[24];
uniform vec4 uTwirl[4];
uniform vec2 uSeed;
uniform float uContrast;
uniform float uSaturation;
uniform float uSettle;
uniform float uReveal;
in vec2 vUv;
out vec4 outColor;

vec2 hash2(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash2(i), f);
  float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 drift(vec2 p, float t) {
  vec2 w1 = vec2(
    noise(p * 0.85 + vec2(t * 0.11, t * 0.07)),
    noise(p * 0.85 + vec2(4.1, 1.7) - vec2(t * 0.08, t * 0.12))
  );
  vec2 w2 = vec2(
    noise(p * 1.55 + w1 * 1.8 + vec2(1.3, 7.1) + t * 0.05),
    noise(p * 1.55 + w1 * 1.8 + vec2(6.4, 2.2) - t * 0.06)
  );
  return (w1 - 0.5) * 1.1 + (w2 - 0.5) * 0.55;
}

vec2 warp(vec2 p) {
  vec2 q = p / uScale;
  if (uType == 1) {
    float turn = uTime * 0.35;
    q = mat2(cos(turn), sin(turn), -sin(turn), cos(turn)) * q;
  } else {
    q += vec2(-uDir.y, uDir.x) * uTime * 0.45;
  }
  return p + drift(q + uSeed, uTime) * uFlow * uScale * uSettle;
}

float coord(vec2 p) {
  vec2 w = warp(p);
  return uType == 1 ? 1.0 - length(w) * 1.1 : dot(w, uDir) / uExtent + 0.5;
}

vec3 labToRgb(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  for (int i = 0; i < 24; i++) {
    float w = uStirWeight[i];
    if (w <= 0.0) continue;
    vec2 d = p - uStir[i].xy;
    p -= uStir[i].zw * w * exp(-dot(d, d) / 0.045);
  }
  for (int i = 0; i < 4; i++) {
    float angle = uTwirl[i].z;
    if (angle == 0.0) continue;
    vec2 d = p - uTwirl[i].xy;
    float a = angle * exp(-dot(d, d) / (uTwirl[i].w * uTwirl[i].w));
    float c = cos(a);
    float s = sin(a);
    p = uTwirl[i].xy + mat2(c, -s, s, c) * d;
  }
  float raw = coord(p);
  float s = raw;
  if (uBands > 1.0) {
    s *= uBands;
    float cycle = floor(s);
    s = fract(s);
    if (mod(cycle, 2.0) > 0.5) s = 1.0 - s;
  }
  s = clamp(s, 0.0, 1.0);
  float scaled = s * float(uCount - 1);
  int index = int(min(floor(scaled), float(uCount - 2)));
  float f = scaled - float(index);
  float edge = max(uSoftness * 0.5, fwidth(scaled) * 0.75);
  float shaped = smoothstep(0.5 - edge, 0.5 + edge, f);
  vec3 from = uRamp[0];
  vec3 to = uRamp[1];
  for (int i = 0; i < 7; i++) {
    if (i == index) {
      from = uRamp[i];
      to = uRamp[i + 1];
    }
  }
  vec3 lab = mix(from, to, shaped);
  if (uSilk > 0.0) {
    vec2 grad = vec2(coord(p + vec2(0.004, 0.0)) - raw, coord(p + vec2(0.0, 0.004)) - raw) / 0.004;
    vec2 slope = grad * sin(3.14159265 * clamp(raw, 0.0, 1.0) * uBands) * uSilk * 4.0;
    vec3 normal = normalize(vec3(-slope, 1.0));
    vec3 light = normalize(vec3(-uDir.y, uDir.x, 1.2));
    float diffuse = dot(normal, light) - light.z;
    lab = uRamp[0] + (lab - uRamp[0]) * (1.0 + (diffuse * 0.35 + max(diffuse, 0.0) * diffuse * 0.6) * uSilk);
  }
  lab = mix(uRamp[0], lab, smoothstep(0.0, 1.0, uReveal * 1.5 - length(vUv - 0.5) * 0.6));
  lab.x = (lab.x - 0.55) * uContrast + 0.55;
  lab.yz *= uSaturation;
  outColor = vec4(encode(labToRgb(lab)), 1.0);
}`,jn=`#version 300 es
precision highp float;
uniform sampler2D uField;
uniform float uGrain;
uniform float uGrainSize;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float clump(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec3 color = texture(uField, vUv).rgb;
  vec2 pixel = gl_FragCoord.xy + uFrame * vec2(17.0, 59.0);
  float fine = hash(pixel) + hash(pixel + 7.13) - 1.0;
  float coarse = (clump(pixel / max(uGrainSize, 1.0)) - 0.5) * 2.0;
  float grain = mix(fine, coarse, clamp(uGrainSize - 1.0, 0.0, 1.0) * 0.8);
  float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
  color += grain * uGrain * (0.45 + 2.2 * luma * (1.0 - luma));
  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`,Ce=(a,h,j)=>Math.min(j,Math.max(h,a)),Ot=a=>a<=.04045?a/12.92:((a+.055)/1.055)**2.4,An=([a,h,j])=>{const f=Ot(a),E=Ot(h),$=Ot(j),J=Math.cbrt(.4122214708*f+.5363325363*E+.0514459929*$),G=Math.cbrt(.2119034982*f+.6806995451*E+.1073969566*$),Z=Math.cbrt(.0883024619*f+.2817188376*E+.6299787005*$);return[.2104542553*J+.793617785*G-.0040720468*Z,1.9779984951*J-2.428592205*G+.4505937099*Z,.0259040371*J+.7827717662*G-.808675766*Z]},en=(a,h,j)=>{const f=a.createShader(h);return f?(a.shaderSource(f,j),a.compileShader(f),a.getShaderParameter(f,a.COMPILE_STATUS)?f:(a.deleteShader(f),null)):null},tn=(a,h)=>{const j=en(a,a.VERTEX_SHADER,Rn),f=en(a,a.FRAGMENT_SHADER,h),E=a.createProgram();if(!j||!f||!E)return null;if(a.attachShader(E,j),a.attachShader(E,f),a.linkProgram(E),a.deleteShader(j),a.deleteShader(f),!a.getProgramParameter(E,a.LINK_STATUS))return a.deleteProgram(E),null;const $={},J=a.getProgramParameter(E,a.ACTIVE_UNIFORMS);for(let G=0;G<J;G++){const Z=a.getActiveUniform(E,G);if(!Z)continue;const ke=Z.name.replace(/\[0\]$/,"");$[ke]=a.getUniformLocation(E,ke)}return{program:E,uniforms:$}},Nn=({colors:a=Zt,type:h="linear",angle:j=55,bands:f=1,speed:E=1,flow:$=.8,scale:J=1,softness:G=1,silk:Z=.35,grainAmount:ke=.08,grainSize:We=1.2,grainAnimated:Ae=!0,contrast:pe=1,saturation:Ye=1,variation:Ne=0,interactive:D=!0,stir:_=1,clickSwirl:de=!0,intro:lt=!0,lightMode:tt=!1,dpr:nt,className:Ie="",style:Ge,...ot})=>{const ye=q.useRef(null),be=q.useRef(null),ue=q.useRef(null),M=(Array.isArray(a)&&a.length?a:Zt).slice(0,Vt),Pe={colors:M.length>1?M:[M[0],M[0]],type:Sn[h]??0,angle:j,bands:Ce(f,1,8),speed:Math.max(0,E),flow:Ce($,0,3),scale:Ce(J,.25,3),softness:Ce(G,0,1),silk:Ce(Z,0,1),grainAmount:Ce(ke,0,.5),grainSize:Ce(We,.5,4),grainAnimated:Ae,contrast:Ce(pe,.2,2),saturation:Ce(Ye,0,2),variation:Math.max(0,Ne),interactive:D,stir:Ce(_,0,2),clickSwirl:de,intro:lt,lightMode:tt,dpr:nt},U=q.useRef(Pe);return U.current=Pe,q.useEffect(()=>{var mt;const me=ye.current,te=be.current,n=te==null?void 0:te.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!me||!te||!n)return;const ne=tn(n,Tn),o=tn(n,jn);if(!ne||!o)return;const I=ne.uniforms,ie=o.uniforms,Ee=n.createVertexArray(),C=n.createTexture();n.bindTexture(n.TEXTURE_2D,C),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);const B=n.createFramebuffer(),y={width:0,height:0},ae=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Le=new Map,Be=g=>{const N=String(g),k=Le.get(N);if(k)return k;let Y=[0,0,0];if(ae){ae.clearRect(0,0,1,1),ae.fillStyle="#000000",ae.fillStyle=N,ae.fillRect(0,0,1,1);const[_e,Xe,Te]=ae.getImageData(0,0,1,1).data;Y=[_e/255,Xe/255,Te/255]}return Le.set(N,Y),Y},Se=((mt=window.matchMedia)==null?void 0:mt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,X={width:1,height:1,ratio:1},ze=new Float32Array(Vt*3),ve=new Float32Array(Rt*4),F=new Float32Array(Rt),we=new Float32Array(Nt*4),oe=[],se=[],L={x:.5,y:.5,sx:.5,sy:.5,vx:0,inside:!1,fresh:!0};let ee="",Ke=0,x=U.current.intro&&!Se?0:1,A=0,O=0,re=0,ce=0,ge=!0;const Me=()=>{const g=U.current,N=`${g.colors.join(",")}|${g.lightMode}`;if(N===ee)return;ee=N;const k=g.colors.map(Y=>An(Be(Y)));if(!g.lightMode)k.forEach((Y,_e)=>ze.set(Y,_e*3));else{const Y=k.map(([Xe])=>Math.abs(Xe-k[0][0])<.1),_e=k.filter((Xe,Te)=>!Y[Te]).reverse();k.forEach((Xe,Te)=>{const[Ve,Je,P]=Y[Te]?[1,0,0]:_e.shift();ze.set([Ve+(1-Ve)*Lt,Je*(1-Lt),P*(1-Lt)],Te*3)})}},W=()=>{const g=U.current,N=X.width/X.height;Me(),n.bindVertexArray(Ee),n.disable(n.BLEND),n.bindFramebuffer(n.FRAMEBUFFER,B),n.viewport(0,0,y.width,y.height),n.useProgram(ne.program),n.uniform1f(I.uAspect,N),n.uniform1f(I.uTime,Ke),n.uniform3fv(I.uRamp,ze),n.uniform1i(I.uCount,g.colors.length);const k=g.angle*Math.PI/180;n.uniform1i(I.uType,g.type),n.uniform2f(I.uDir,Math.sin(k),Math.cos(k)),n.uniform1f(I.uExtent,N*Math.abs(Math.sin(k))+Math.abs(Math.cos(k))),n.uniform1f(I.uBands,g.bands),n.uniform1f(I.uSoftness,g.softness),n.uniform1f(I.uFlow,g.flow),n.uniform1f(I.uScale,g.scale),n.uniform1f(I.uSilk,g.silk),n.uniform4fv(I.uStir,ve),n.uniform1fv(I.uStirWeight,F),n.uniform4fv(I.uTwirl,we),n.uniform2f(I.uSeed,g.variation*3.17,g.variation*1.91),n.uniform1f(I.uContrast,g.contrast),n.uniform1f(I.uSaturation,g.saturation),n.uniform1f(I.uSettle,x*x*(3-2*x)),n.uniform1f(I.uReveal,x),n.drawArrays(n.TRIANGLES,0,3),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,te.width,te.height),n.useProgram(o.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,C),n.uniform1i(ie.uField,0),n.uniform1f(ie.uGrain,g.grainAmount),n.uniform1f(ie.uGrainSize,g.grainSize*X.ratio),n.uniform1f(ie.uFrame,A),n.drawArrays(n.TRIANGLES,0,3)},Ze=()=>{const g=U.current;X.width=Math.max(1,me.clientWidth),X.height=Math.max(1,me.clientHeight),X.ratio=Math.min(g.dpr||window.devicePixelRatio||1,2),te.width=Math.max(1,Math.round(X.width*X.ratio)),te.height=Math.max(1,Math.round(X.height*X.ratio));const N=Math.max(1,Math.round(te.width/2)),k=Math.max(1,Math.round(te.height/2));(N!==y.width||k!==y.height)&&(y.width=N,y.height=k,n.bindTexture(n.TEXTURE_2D,C),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,N,k,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindFramebuffer(n.FRAMEBUFFER,B),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0),n.bindFramebuffer(n.FRAMEBUFFER,null)),W(),De()},Re=(g,N)=>{const k=U.current,Y=1-Math.exp(-g/.06),_e=L.sx,Xe=L.sy;L.sx+=(L.x-L.sx)*Y,L.sy+=(L.y-L.sy)*Y;const Te=(L.sx-_e)/g*N,Ve=(L.sy-Xe)/g;L.vx=Te;const Je=oe[0];if(oe.forEach(P=>{P.done&&(P.age+=g)}),k.interactive&&L.inside&&Math.hypot(Te,Ve)>.02&&!Se){(!Je||Je.done)&&(oe.unshift({x:0,y:0,vx:0,vy:0,age:0,grow:0,done:!1}),oe.length>Rt&&oe.pop());const P=oe[0];P.x=(L.sx-.5)*N,P.y=L.sy-.5,P.vx=Te,P.vy=Ve,P.grow=Math.min(1,P.grow+g/Mn),P.done=P.grow>=1}else Je&&(Je.done=!0);for(;oe.length&&oe[oe.length-1].age>Jt;)oe.pop();for(let P=0;P<Rt;P++){const le=oe[P];if(!le){F[P]=0;continue}const et=1-le.age/Jt,it=Math.min(1,2.2/Math.max(Math.hypot(le.vx,le.vy),.001));ve.set([le.x,le.y,le.vx*it,le.vy*it],P*4),F[P]=et*et*le.grow*k.stir*.05}for(se.forEach(P=>{P.age+=g});se.length&&se[se.length-1].age>Qt;)se.pop();for(let P=0;P<Nt;P++){const le=se[P];if(!le){we[P*4+2]=0;continue}const et=le.age/Qt,it=Math.min(1,le.age/.18)*(1-et)*(1-et);we.set([le.x,le.y,le.direction*2.4*it,.16+.1*Math.min(1,le.age/.5)],P*4)}},p=g=>{if(re=0,!ge||document.hidden)return;const N=U.current,k=ce?Ce((g-ce)/1e3,.001,.05):1/60;ce=g,Se||(Ke+=k*N.speed*.16),x<1&&(x=Math.min(1,x+k/En)),O+=k,N.grainAnimated&&!Se&&O>1/24&&(O=0,A=(A+1)%97),Re(k,X.width/X.height),W(),!Se&&(N.speed>0||N.grainAnimated)||x<1||oe.length>0||se.length>0?re=requestAnimationFrame(p):ce=0};function De(){!re&&ge&&!document.hidden&&(re=requestAnimationFrame(p))}const dt=g=>{const N=me.getBoundingClientRect(),k=(g.clientX-N.left)/Math.max(1,N.width),Y=1-(g.clientY-N.top)/Math.max(1,N.height);L.inside=k>=0&&k<=1&&Y>=0&&Y<=1,L.x=k,L.y=Y,(L.fresh||!L.inside)&&(L.sx=k,L.sy=Y,L.fresh=!1)},ut=g=>{dt(g),(L.inside||oe.length)&&De()},ft=g=>{dt(g);const N=U.current;!L.inside||!N.clickSwirl||Se||(se.unshift({x:(L.x-.5)*(X.width/X.height),y:L.y-.5,age:0,direction:L.vx<0?1:-1}),se.length>Nt&&se.pop(),De())},gt=()=>{L.inside=!1},st=()=>{ce=0,De()},ht=new ResizeObserver(Ze);ht.observe(me);const yt=new IntersectionObserver(g=>{ge=g.some(N=>N.isIntersecting),ge&&(ce=0,De())});return yt.observe(me),window.addEventListener("pointermove",ut,{passive:!0}),window.addEventListener("pointerdown",ft,{passive:!0}),document.documentElement.addEventListener("pointerleave",gt),document.addEventListener("visibilitychange",st),Ze(),ue.current=De,()=>{var g;cancelAnimationFrame(re),ue.current=null,ht.disconnect(),yt.disconnect(),window.removeEventListener("pointermove",ut),window.removeEventListener("pointerdown",ft),document.documentElement.removeEventListener("pointerleave",gt),document.removeEventListener("visibilitychange",st),n.deleteTexture(C),n.deleteFramebuffer(B),n.deleteVertexArray(Ee),n.deleteProgram(ne.program),n.deleteProgram(o.program),(g=n.getExtension("WEBGL_lose_context"))==null||g.loseContext()}},[]),q.useEffect(()=>{var me;(me=ue.current)==null||me.call(ue)}),e.jsx("div",{ref:ye,className:`grainient-container${Ie?` ${Ie}`:""}`,style:Ge,...ot,children:e.jsx("canvas",{ref:be,className:"grainient-canvas","aria-hidden":"true"})})},kt=5,rn=3,Ln=2.4,On=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,Cn=`#version 300 es
precision highp float;
precision highp int;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uStops[${kt}];
uniform int uStopCount;
uniform float uAmplitude;
uniform float uBlend;
uniform float uHeight;
uniform float uScale;
uniform float uGlow;
uniform float uBrightness;
uniform int uLayers;
uniform float uFlip;
uniform vec3 uPointer;
uniform float uReveal;
uniform float uOpacity;
uniform float uLightMode;
out vec4 outColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float smootherstep(float edge0, float edge1, float x) {
  float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

vec3 oklabToLinear(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

vec3 ramp(float t) {
  float x = clamp(t, 0.0, 1.0) * float(uStopCount - 1);
  int i = int(min(floor(x), float(uStopCount - 2)));
  float f = x - float(i);
  f = f * f * (3.0 - 2.0 * f);
  vec3 lch = mix(uStops[i], uStops[i + 1], f);
  lch.x = mix(lch.x, min(lch.x, 0.7), uLightMode);
  return toSrgb(oklabToLinear(vec3(lch.x, lch.y * cos(lch.z), lch.y * sin(lch.z))));
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  float y = 1.0 - frag.y / uResolution.y;
  y = mix(y, 1.0 - y, uFlip);
  float u = frag.x / uResolution.x;
  float X = (frag.x - uResolution.x * 0.5) / uResolution.y;
  float t = uTime;
  float reach = uPointer.z * exp(-pow((X - uPointer.x) / 0.38, 2.0));

  vec3 glow = vec3(0.0);
  float cover = 0.0;
  for (int k = 0; k < ${rn}; k++) {
    if (k >= uLayers) break;
    float layer = float(k);
    float seed = layer * 13.7;
    float pace = t * (1.0 - layer * 0.18);
    float warp = snoise(vec2(X * 0.45 * uScale + pace * 0.02 + seed, pace * 0.05 + seed));
    float wave = snoise(vec2(X * 0.75 * uScale + warp * 0.35 - pace * 0.03 + seed, pace * 0.07 - seed)) * 0.72
      + snoise(vec2(X * 1.6 * uScale + warp * 0.5 + pace * 0.04 - seed, pace * 0.1 + seed * 0.5)) * 0.28;
    float hem = uHeight + layer * 0.07 + wave * 0.15 * uAmplitude;
    hem += reach * 0.08 * (layer < 0.5 ? 1.0 : 0.4);
    hem = mix(-0.25, hem, uReveal);

    float soft = (0.04 + uBlend * 0.16) * (1.0 + layer * 0.9);
    float rise = hem - y;
    float low = -soft - uGlow * 0.14;
    float high = 0.26 + soft * 0.6;
    float body = pow(smootherstep(low, high, rise), 1.5 + uGlow * 0.6);
    float lobes = 0.86 + 0.14 * snoise(vec2(X * 0.9 * uScale - pace * 0.025 + seed, y * 0.3 + pace * 0.04));
    float alpha = body * lobes * (layer < 0.5 ? 1.0 : 0.32 / layer);
    alpha = clamp(alpha * (1.0 + reach * 0.25 * smootherstep(0.9, 0.0, abs(y - hem))), 0.0, 1.0);

    vec3 tint = ramp(u + 0.05 * sin(pace * 0.08 + layer * 2.3) + layer * 0.1 + max(rise, 0.0) * 0.05);
    glow = 1.0 - (1.0 - glow) * (1.0 - tint * alpha);
    cover = 1.0 - (1.0 - cover) * (1.0 - alpha);
  }

  float fade = smootherstep(0.0, 0.7, uReveal) * uOpacity;
  float strength = clamp(uBrightness, 0.0, 2.0);
  glow *= fade * min(strength, 1.0);
  cover *= fade * min(strength, 1.0);
  glow = 1.0 - pow(1.0 - glow, vec3(max(strength, 1.0)));
  float dither = (hash(frag) - 0.5) / 255.0;

  if (uLightMode > 0.5) {
    vec3 tint = cover > 0.0001 ? glow / cover : vec3(0.0);
    cover *= smootherstep(0.0, 0.25, cover);
    float alpha = cover * 0.7;
    outColor = vec4(tint * alpha + dither, clamp(alpha + dither, 0.0, 1.0));
    return;
  }
  outColor = vec4(glow + dither, clamp(cover + dither, 0.0, 1.0));
}`,pt=(a,h,j)=>Math.min(j,Math.max(h,a)),Fn=a=>{const[h,j,f]=a.map(Z=>Z<=.04045?Z/12.92:Math.pow((Z+.055)/1.055,2.4)),E=Math.cbrt(.4122214708*h+.5363325363*j+.0514459929*f),$=Math.cbrt(.2119034982*h+.6806995451*j+.1073969566*f),J=Math.cbrt(.0883024619*h+.2817188376*j+.6299787005*f),G=[.2104542553*E+.793617785*$-.0040720468*J,1.9779984951*E-2.428592205*$+.4505937099*J,.0259040371*E+.7827717662*$-.808675766*J];return[G[0],Math.hypot(G[1],G[2]),Math.atan2(G[2],G[1])]},kn=a=>{const h=a.findIndex(E=>E[1]>.02);let f=h===-1?0:a[h][2];return a.map(E=>{let $=E[1]>.02?E[2]:f;for(;$-f>Math.PI;)$-=Math.PI*2;for(;$-f<-Math.PI;)$+=Math.PI*2;return f=$,[E[0],E[1],$]})},nn=(a,h,j)=>{const f=a.createShader(h);return f?(a.shaderSource(f,j),a.compileShader(f),a.getShaderParameter(f,a.COMPILE_STATUS)?f:(a.deleteShader(f),null)):null},In=a=>{const h=nn(a,a.VERTEX_SHADER,On),j=nn(a,a.FRAGMENT_SHADER,Cn),f=a.createProgram();if(!h||!j||!f)return null;if(a.attachShader(f,h),a.attachShader(f,j),a.bindAttribLocation(f,0,"aPosition"),a.linkProgram(f),a.deleteShader(h),a.deleteShader(j),!a.getProgramParameter(f,a.LINK_STATUS))return a.deleteProgram(f),null;const E={},$=a.getProgramParameter(f,a.ACTIVE_UNIFORMS);for(let J=0;J<$;J++){const G=a.getActiveUniform(f,J);G&&(E[G.name.replace("[0]","")]=a.getUniformLocation(f,G.name))}return{program:f,uniforms:E}},Pn=({colorStops:a=["#5227FF","#7cff67","#5227FF"],amplitude:h=1,blend:j=.5,speed:f=1,time:E,height:$=.45,scale:J=1,glow:G=.6,brightness:Z=1,layers:ke=1,direction:We="top",mouseInteraction:Ae=!0,intro:pe=!0,opacity:Ye=1,lightMode:Ne=!1,paused:D=!1,dpr:_,className:de="",style:lt})=>{const tt=q.useRef(null),nt=q.useRef(null),Ie=q.useRef(null),Ge=(Array.isArray(a)?a:[]).filter(Boolean).map(String).slice(0,kt),ot={stops:Ge.length>=2?Ge:Ge.length===1?[Ge[0],Ge[0]]:["#5227FF","#7cff67"],amplitude:Math.max(0,h),blend:pt(j,0,1),speed:f,time:E,height:pt($,0,1),scale:Math.max(.1,J),glow:Math.max(0,G),brightness:Math.max(0,Z),layers:pt(Math.round(ke),1,rn),flip:We==="bottom"?1:0,mouseInteraction:Ae,intro:pe,opacity:pt(Ye,0,1),lightMode:Ne,paused:D,dpr:_},ye=q.useRef(ot);return ye.current=ot,q.useEffect(()=>{var Ke;const be=tt.current,ue=nt.current,M=ue==null?void 0:ue.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!be||!ue||!M)return;const Pe=In(M);if(!Pe)return;const U=Pe.uniforms,me=M.createBuffer(),te=M.createVertexArray();M.bindVertexArray(te),M.bindBuffer(M.ARRAY_BUFFER,me),M.bufferData(M.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),M.STATIC_DRAW),M.enableVertexAttribArray(0),M.vertexAttribPointer(0,2,M.FLOAT,!1,0,0);const n=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),ne=((Ke=window.matchMedia)==null?void 0:Ke.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,o=new Map,I=x=>{if(o.has(x))return o.get(x);let A=[1,1,1];if(n){n.clearRect(0,0,1,1),n.fillStyle="#ffffff",n.fillStyle=x,n.fillRect(0,0,1,1);const[O,re,ce]=n.getImageData(0,0,1,1).data;A=[O/255,re/255,ce/255]}return o.set(x,A),A},ie=new Float32Array(kt*3),Ee={width:1,height:1},C={x:0,y:0,inside:!1},B={clock:0,px:0,py:.5,reach:0,reveal:ye.current.intro&&!ne?0:1};let y=0,ae=0,Le=!0;const Be=()=>{const x=ye.current;kn(x.stops.map(O=>Fn(I(O)))).forEach((O,re)=>ie.set(O,re*3));const A=B.reveal;M.viewport(0,0,ue.width,ue.height),M.useProgram(Pe.program),M.bindVertexArray(te),M.uniform2f(U.uResolution,ue.width,ue.height),M.uniform1f(U.uTime,x.time!==void 0?x.time*x.speed*.1:B.clock),M.uniform3fv(U.uStops,ie),M.uniform1i(U.uStopCount,x.stops.length),M.uniform1f(U.uAmplitude,x.amplitude),M.uniform1f(U.uBlend,x.blend),M.uniform1f(U.uHeight,x.height),M.uniform1f(U.uScale,x.scale),M.uniform1f(U.uGlow,x.glow),M.uniform1f(U.uBrightness,x.brightness),M.uniform1i(U.uLayers,x.layers),M.uniform1f(U.uFlip,x.flip),M.uniform3f(U.uPointer,B.px,B.py,B.reach),M.uniform1f(U.uReveal,1-Math.pow(1-A,3)),M.uniform1f(U.uOpacity,x.opacity),M.uniform1f(U.uLightMode,x.lightMode?1:0),M.drawArrays(M.TRIANGLES,0,3)},Se=x=>{if(y=0,!Le||document.hidden)return;const A=ye.current,O=ae?pt((x-ae)/1e3,5e-4,.05):1/60;if(ae=x,A.paused){B.reveal=1,Be(),ae=0;return}const re=ne?0:1;B.clock+=O*A.speed*re;const ce=A.mouseInteraction&&C.inside&&!ne,ge=1-Math.exp(-O/.6);if(ce){const Me=(C.x-Ee.width/2)/Ee.height,W=A.flip?1-C.y/Ee.height:C.y/Ee.height;B.px+=(Me-B.px)*ge,B.py+=(W-B.py)*ge}B.reach+=((ce?1:0)-B.reach)*(1-Math.exp(-O/(ce?.9:1.4))),!A.intro||ne?B.reveal=1:B.reveal<1&&(B.reveal=Math.min(1,B.reveal+O/Ln)),Be(),y=requestAnimationFrame(Se)},X=()=>{!y&&Le&&!document.hidden&&(y=requestAnimationFrame(Se))},ze=()=>{const x=ye.current,A=Math.max(1,be.clientWidth),O=Math.max(1,be.clientHeight),re=Math.min(x.dpr||window.devicePixelRatio||1,2);Ee.width=A,Ee.height=O,ue.width=Math.max(1,Math.round(A*re)),ue.height=Math.max(1,Math.round(O*re)),Be(),X()},ve=x=>{const A=be.getBoundingClientRect();C.x=x.clientX-A.left,C.y=x.clientY-A.top;const O=C.inside;if(C.inside=C.x>=0&&C.y>=0&&C.x<=A.width&&C.y<=A.height,C.inside&&!O){const re=ye.current;B.px=(C.x-A.width/2)/Math.max(1,A.height),B.py=re.flip?1-C.y/Math.max(1,A.height):C.y/Math.max(1,A.height)}ye.current.paused||X()},F=x=>{x.pointerType!=="mouse"&&(C.inside=!1)},we=()=>{C.inside=!1},oe=()=>{ae=0,X()},se=new ResizeObserver(ze);se.observe(be);const L=new IntersectionObserver(x=>{Le=x.some(A=>A.isIntersecting),Le&&(ae=0,X())});L.observe(be),window.addEventListener("pointermove",ve,{passive:!0}),window.addEventListener("pointerdown",ve,{passive:!0}),window.addEventListener("pointerup",F,{passive:!0}),window.addEventListener("pointercancel",F,{passive:!0}),document.documentElement.addEventListener("pointerleave",we),document.addEventListener("visibilitychange",oe),ze();let ee=ye.current.dpr;return Ie.current=()=>{const x=ye.current;if(x.dpr!==ee){ee=x.dpr,ze();return}y||Be(),X()},()=>{var x;cancelAnimationFrame(y),Ie.current=null,se.disconnect(),L.disconnect(),window.removeEventListener("pointermove",ve),window.removeEventListener("pointerdown",ve),window.removeEventListener("pointerup",F),window.removeEventListener("pointercancel",F),document.documentElement.removeEventListener("pointerleave",we),document.removeEventListener("visibilitychange",oe),M.deleteProgram(Pe.program),M.deleteBuffer(me),M.deleteVertexArray(te),(x=M.getExtension("WEBGL_lose_context"))==null||x.loseContext()}},[]),q.useEffect(()=>{var be;(be=Ie.current)==null||be.call(Ie)}),e.jsx("div",{ref:tt,className:`aurora-container${de?` ${de}`:""}`,style:lt,children:e.jsx("canvas",{ref:nt,className:"aurora-canvas","aria-hidden":"true"})})},on="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",sn=8,Ct=320,Bn=/^(currentcolor|inherit)$/i,zn=.15,Dn=.62,je=(a,h,j,f)=>a+(h-a)*(1-Math.exp(-j/f)),vt=a=>Math.min(1,Math.max(0,Number(a)||0)),at=(a,h,j)=>{const f=vt((j-a)/(h-a));return f*f*(3-2*f)},He=(...a)=>{let h=2166136261;for(const j of a)h=Math.imul(h^(j|0),16777619),h^=h>>>13,h=Math.imul(h,1540483477),h^=h>>>15;return(h>>>0)/4294967296},an=a=>a>0?`+${a}`:a<0?`−${-a}`:"0",_n=({text:a="React Bits",fontFamily:h="",fontWeight:j=600,fontSize:f=150,letterSpacing:E=-.05,color:$="currentColor",accentColor:J="currentColor",align:G="center",reach:Z=200,softness:ke=.7,dashLength:We=4,dashGap:Ae=2,strokeWidth:pe=1.5,lineStyle:Ye="dashed",reveal:Ne="letter",specks:D=15,selection:_=!0,labels:de=!0,draggable:lt=!0,bounce:tt=.4,sweep:nt=!0,speed:Ie=1,clickKick:Ge=!0,intro:ot="none",introDuration:ye=2,guides:be=!1,className:ue="",style:M})=>{const Pe=q.useRef(null),U=q.useRef(null),me=q.useRef(null),te=q.useRef(()=>{});return q.useEffect(()=>{me.current={text:a,fontFamily:h,fontWeight:j,fontSize:f,letterSpacing:E,color:$,accentColor:J,align:G,reach:Z,softness:ke,dashLength:We,dashGap:Ae,strokeWidth:pe,lineStyle:Ye,reveal:Ne,specks:D,selection:_,labels:de,draggable:lt,bounce:tt,sweep:nt,speed:Ie,clickKick:Ge,intro:ot,introDuration:ye,guides:be},te.current()}),q.useEffect(()=>{var qt,Ht,Gt,Xt;const n=Pe.current,ne=U.current,o=ne==null?void 0:ne.getContext("2d"),I=document.createElement("canvas"),ie=I.getContext("2d");if(!n||!ne||!o||!ie)return;const Ee=(Ht=(qt=window.matchMedia)==null?void 0:qt.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:Ht.matches;let C=1,B=1,y=1,ae=0,Le=performance.now(),Be=!1,Se=!0,X="",ze="",ve=null,F=[],we=0,oe=0,se=0,L=!1,ee=-1,Ke="",x=0,A="",O=!1,re=!document.fonts,ce=0;const ge=[],Me={x:0,y:0,time:0,index:-1},W={x:0,y:0,inside:!1},Ze={x:0,y:0},Re={x:0,y:0},p={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},De=()=>{X="",te.current()},dt=()=>{re=!0,De()},ut=t=>t.fontFamily||getComputedStyle(n).fontFamily||"sans-serif",ft=(t,i)=>`${t.fontWeight} ${i}px ${ut(t)}`,gt=t=>{const i=getComputedStyle(n).color||"#000000",s=r=>!r||Bn.test(String(r).trim())?i:r;return{ink:s(t.color),accent:s(t.accentColor)}},st=(t,i,s)=>{t.font=ft(i,s),"letterSpacing"in t&&(t.letterSpacing=`${i.letterSpacing*s}px`),t.textAlign="left",t.textBaseline="alphabetic"},ht=(t,i,s,r,d)=>{const c=Math.ceil(t.strokeWidth*2+4),b=s.box.x1-c,m=s.box.y1-c,u=s.box.x2-s.box.x1+c*2,S=s.box.y2-s.box.y1+c*2,w=document.createElement("canvas");w.width=Math.max(1,Math.ceil(u*y)),w.height=Math.max(1,Math.ceil(S*y));const v=w.getContext("2d");return v?(v.setTransform(y,0,0,y,-b*y,-m*y),st(v,t,i.size),r?(v.lineJoin="round",v.lineWidth=t.strokeWidth*2,v.lineCap="butt",v.strokeStyle=d,t.lineStyle!=="solid"&&v.setLineDash([Math.max(1,t.dashLength),Math.max(1,t.dashGap)]),v.strokeText(s.char,s.x,i.baseline),v.setLineDash([]),v.globalCompositeOperation="destination-out",v.fillStyle="#000000",v.fillText(s.char,s.x,i.baseline),v.globalCompositeOperation="source-over"):(v.fillStyle=d,v.fillText(s.char,s.x,i.baseline)),{image:w,left:b,top:m}):{image:w,left:b,top:m}},yt=(t,i)=>{const s=[t.text,ut(t),t.fontWeight,t.fontSize,t.letterSpacing,t.align,i,t.dashLength,t.dashGap,t.strokeWidth,t.lineStyle,C,B,y].join("|");if(s===X&&ve)return ve;X=s;const r=ft(t,64);document.fonts&&r!==ze&&(ze=r,document.fonts.load(r,t.text).then(De,De));const d=ie;st(d,t,t.fontSize);let c=d.measureText(t.text);const b=Math.min(1,C*.9/Math.max(c.actualBoundingBoxLeft+c.actualBoundingBoxRight,1),B*.66/Math.max(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent,1)),m=t.fontSize*b;st(d,t,m),c=d.measureText(t.text);const u=c.actualBoundingBoxLeft+c.actualBoundingBoxRight,S=c.actualBoundingBoxAscent+c.actualBoundingBoxDescent,w=C*.05,T=(t.align==="left"?w:t.align==="right"?C-w-u:(C-u)/2)+c.actualBoundingBoxLeft,R=(B-S)/2+c.actualBoundingBoxAscent,fe=R-d.measureText("x").actualBoundingBoxAscent,Q=R-d.measureText("H").actualBoundingBoxAscent,K=R-d.measureText("d").actualBoundingBoxAscent,he=R+d.measureText("p").actualBoundingBoxDescent,xe=R-c.actualBoundingBoxAscent,l=R+c.actualBoundingBoxDescent,z=Math.min(xe,Q)-2,H=Math.max(l,R)+2,V={size:m,baseline:R,left:T-c.actualBoundingBoxLeft,right:T+c.actualBoundingBoxRight,top:xe,bottom:l,lines:[{y:R,label:"baseline"},{y:fe,label:"x-height"},{y:Q,label:"cap height"},...Q-K>Math.max(11,m*.06)?[{y:K,label:"ascender"}]:[],{y:he,label:"descender"}],bands:[{y0:fe,y1:R,up:!0,order:0},{y0:Q,y1:fe,up:!0,order:1},{y0:z,y1:Q,up:!0,order:2},{y0:R,y1:H,up:!1,order:1}].filter(Oe=>Oe.y1-Oe.y0>.5)};ve=V;const qe=Array.from(t.text),Qe=F;F=[];let Mt="";return qe.forEach((Oe,Et)=>{Mt+=Oe;const xt=d.measureText(Oe),jt=T+d.measureText(Mt).width-xt.width;if(!Oe.trim())return;const At={char:Oe,x:jt,box:{x1:jt-xt.actualBoundingBoxLeft,y1:R-xt.actualBoundingBoxAscent,x2:jt+xt.actualBoundingBoxRight,y2:R+xt.actualBoundingBoxDescent}},St=Qe[F.length];F.push({...At,offset:(St==null?void 0:St.char)===Oe?St.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,shown:1,cells:null,assembled:0,index:Et,fill:ht(t,V,At,!1,i),dashes:ht(t,V,At,!0,i)})}),ee=-1,p.index=-1,V},mt=(t,i)=>{if(!ve||i<ve.top-24||i>ve.bottom+24)return-1;let s=-1,r=1/0;return F.forEach((d,c)=>{const b=d.box.x1+d.offset.x,m=d.box.x2+d.offset.x,u=t<b?b-t:t>m?t-m:0;u<r&&(r=u,s=c)}),r<28?s:-1},g=(t,i,s,r,d,c)=>{const b=Math.min(1,Math.max(0,1-c)),m=t.createRadialGradient(i,s,0,i,s,r);if(m.addColorStop(0,`rgba(0, 0, 0, ${d})`),b>.995)return m.addColorStop(.995,`rgba(0, 0, 0, ${d})`),m.addColorStop(1,"rgba(0, 0, 0, 0)"),m;for(let u=0;u<=sn;u++){const S=u/sn,w=S*S*(3-2*S);m.addColorStop(b+(1-b)*S,`rgba(0, 0, 0, ${d*(1-w)})`)}return m},N=(t,i,s,r,d,c)=>{t.drawImage(i.image,Math.round((i.left+s)*y-d),Math.round((i.top+r)*y-c))},k=t=>{const i=t.reach*y,s=Re.x*y,r=Re.y*y;o.globalCompositeOperation="destination-out",o.fillStyle=g(o,s,r,i,we,t.softness),o.fillRect(s-i,r-i,i*2,i*2),o.globalCompositeOperation="source-over";const d=Math.max(0,Math.floor(s-i)),c=Math.max(0,Math.floor(r-i)),b=Math.min(ne.width,Math.ceil(s+i)),m=Math.min(ne.height,Math.ceil(r+i));if(b<=d||m<=c)return;const u=b-d,S=m-c;(I.width<u||I.height<S)&&(I.width=Math.max(I.width,u),I.height=Math.max(I.height,S)),ie.setTransform(1,0,0,1,0,0),ie.globalCompositeOperation="source-over",ie.clearRect(0,0,u,S);for(const w of F)N(ie,w.dashes,w.offset.x,w.offset.y,d,c);ie.globalCompositeOperation="destination-in",ie.fillStyle=g(ie,s-d,r-c,i,1,t.softness),ie.fillRect(0,0,u,S),ie.globalCompositeOperation="source-over",o.globalAlpha=we,o.drawImage(I,0,0,u,S,d,c,u,S),o.globalAlpha=1},Y=t=>(Math.round(t*y)+.5)/y,_e=(t,i,s)=>{let r=(t%(2*(i+s))+2*(i+s))%(2*(i+s));return r<i?[p.x1+r,p.y1,0,-1]:(r-=i,r<s?[p.x2,p.y1+r,1,0]:(r-=s,r<i?[p.x2-r,p.y2,0,1]:(r-=i,[p.x1,p.y2-r,-1,0])))},Xe=(t,i,s)=>{const r=p.x2-p.x1,d=p.y2-p.y1;if(r<2||d<2)return;const c=2*(r+d),b=p.index+1,m=3;o.fillStyle=s,o.strokeStyle=s;for(let u=0;u<t.specks;u++){const S=.5+He(b,u,11)*1.2,w=se/S+He(b,u,17),v=Math.floor(w),T=w-v;if(T>.7)continue;const[R,fe,Q,K]=_e(He(b,u,v)*c,r,d),he=He(b,u,v,2),xe=he<.46?2:he<.7?3:he<.84?5:he<.94?8:11,l=xe>=8,z=(l?9:4)+Math.floor(He(b,u,v,1)*5)*m,H=p.x1+Math.round((R+Q*z-p.x1)/m)*m,V=p.y1+Math.round((fe+K*z-p.y1)/m)*m,qe=He(b,u,v,3),Qe=T<.06||T>.32&&T<.36?.35:1,Mt=i*(l?.3+.4*qe:.3+.6*qe)*Qe,Oe=Math.round(H-xe/2),Et=Math.round(V-xe/2);o.globalAlpha=Mt,qe<.26||l&&qe<.78?(o.strokeRect(Oe+.5,Et+.5,xe,xe),l&&qe>.5&&o.fillRect(Math.round(H)-1,Math.round(V)-1,2,2)):o.fillRect(Oe,Et,xe,xe)}for(let u=0;u<2;u++){const S=(se*.42*t.speed+u*.5)*c;for(let w=0;w<4;w++){const[v,T]=_e(S-w*6,r,d),R=w===0?3:2;o.globalAlpha=i*[.95,.55,.32,.16][w],o.fillRect(Math.round(v-R/2),Math.round(T-R/2),R,R)}}o.globalAlpha=1},Te=(t,i)=>{const s=F[p.index];if(!s||p.alpha<.01)return;const r=p.alpha,d=Y(p.x1),c=Y(p.y1),b=Y(p.x2),m=Y(p.y2);o.setTransform(y,0,0,y,0,0),o.fillStyle=i,o.strokeStyle=i,o.lineWidth=1;const u=Math.hypot(s.offset.x,s.offset.y);if(u>1){const w=(s.box.x1+s.box.x2)/2,v=(s.box.y1+s.box.y2)/2;o.beginPath(),o.moveTo(w,v),o.lineTo(w+s.offset.x,v+s.offset.y),o.setLineDash([3,4]),o.globalAlpha=.45*r,o.stroke(),o.setLineDash([]),o.beginPath(),o.rect(Math.round(w)-2,Math.round(v)-2,4,4),o.globalAlpha=.7*r,o.fill()}o.beginPath(),o.rect(d,c,b-d,m-c),o.globalAlpha=.5*r,o.stroke(),o.beginPath();for(const[w,v]of[[d,c],[b,c],[b,m],[d,m]])o.rect(Math.round(w)-2,Math.round(v)-2,5,5);if(o.globalAlpha=.95*r,o.fill(),o.globalAlpha=1,t.specks>0&&Xe(t,r,i),!t.labels)return;o.font=on,o.textAlign="left",o.textBaseline="bottom",o.fillStyle=i,o.globalAlpha=.62*r;const S=u>1?`${an(Math.round(s.offset.x))}, ${an(Math.round(-s.offset.y))}`:`${s.char}  ${Math.round(s.box.x2-s.box.x1)} × ${Math.round(s.box.y2-s.box.y1)}`;o.fillText(S,Math.round(p.x1),Math.round(p.y1)-7),o.globalAlpha=1},Ve=(t,i,s,r,d)=>{const c=Math.max(12,i.size*.12),b=Math.round(i.left-c),m=Math.round(i.right+c),u=C-m>b;o.setTransform(y,0,0,y,0,0),o.strokeStyle=s,o.fillStyle=s,o.lineWidth=1,o.font=on,o.textBaseline="middle",o.textAlign=u?"left":"right",i.lines.forEach((S,w)=>{const v=d(w);if(v<=.001)return;const T=Y(S.y),R=b+(m-b)*v;o.globalAlpha=r*.4,o.beginPath(),o.moveTo(b,T),o.lineTo(R,T),o.stroke(),o.globalAlpha=r*.9,o.fillRect(b-1,Math.round(S.y)-1,3,3),o.fillRect(Math.round(R)-1,Math.round(S.y)-1,3,3),t.labels&&(o.globalAlpha=r*.62*at(.7,1,v),o.fillText(S.label,u?m+8:b-8,Math.round(S.y)))}),o.textAlign="left",o.setTransform(1,0,0,1,0,0),o.globalAlpha=1},Je=(t,i)=>{if(t.cells)return t.cells;const s=t.fill,r=Math.max(3,Math.round(i.size/26)),d=s.image.width,c=s.image.height,b=s.image.getContext("2d"),m=[];if(t.cells=m,t.assembled=0,!b||d<2||c<2)return m;const u=b.getImageData(0,0,d,c).data,S=Math.floor(s.left/r)*r,w=Math.floor(s.top/r)*r,v=Math.ceil((s.left+d/y-S)/r)+1,T=Math.ceil((s.top+c/y-w)/r)+1,R=new Uint8Array(v*T);for(let K=0;K<c;K++)for(let he=0;he<d;he++){if(u[(K*d+he)*4+3]<24)continue;const xe=Math.floor((s.left+he/y-S)/r),l=Math.floor((s.top+K/y-w)/r);R[l*v+xe]=1}const fe=(t.box.x1+t.box.x2)/2,Q=vt((fe-i.left)/Math.max(1,i.right-i.left));for(let K=0;K<R.length;K++){if(!R[K])continue;const he=He(t.index,K,1)*Math.PI*2,xe=i.size*(.25+.6*He(t.index,K,2)),l=.03+.36*Q+.12*He(t.index,K,3),z=l+.3+.14*He(t.index,K,4);m.push({x:S+K%v*r,y:w+Math.floor(K/v)*r,size:r,dx:Math.cos(he)*xe,dy:Math.sin(he)*xe*.7,start:l,land:z}),t.assembled=Math.max(t.assembled,z)}return m},P=(t,i,s)=>{const r=Math.round(t*y),d=Math.round(i*y);return[r,d,Math.round((t+s)*y)-r,Math.round((i+s)*y)-d]},le=(t,i,s)=>{const r=t.cells||[];o.save(),o.beginPath();let d=0;for(const c of r){if(i<c.land)continue;const[b,m,u,S]=P(c.x,c.y,c.size);o.rect(b,m,u,S),d++}d&&(o.clip(),N(o,t.fill,0,0,0,0)),o.restore(),o.fillStyle=s;for(const c of r){if(i<c.start||i>=c.land)continue;const b=(i-c.start)/(c.land-c.start),m=1-Math.pow(1-b,4),u=c.size*(.4+.6*m),S=c.x+(c.size-u)/2+c.dx*(1-m),w=c.y+(c.size-u)/2+c.dy*(1-m),[v,T,R,fe]=P(S,w,u);o.globalAlpha=Math.min(1,b*4)*(.55+.45*m),o.fillRect(v,T,Math.max(1,R),Math.max(1,fe))}o.globalAlpha=1},et=(t,i,s,r)=>{const d=t.fill,c=Math.floor(d.left*y),b=Math.floor(d.top*y),m=d.image.width+2,u=d.image.height+2,S=vt((s-.24-.28*i)/.48),w=[];for(const T of r.bands){const R=at(.3*T.order,.3*T.order+.4,S);if(R<=0)continue;const fe=(T.y1-T.y0)*R,Q=Math.round((T.up?T.y1-fe:T.y0)*y),K=Math.round((T.up?T.y1:T.y0+fe)*y);K>Q&&w.push([Q,K-Q])}const v=at(.08+.2*i,.22+.2*i,s);if(v>.001){o.save(),o.beginPath(),o.rect(c-2,b-2,m+2,u+2);for(const[T,R]of w)o.rect(c-2,T,m+2,R);o.clip("evenodd"),o.globalAlpha=v,N(o,t.dashes,0,0,0,0),o.restore()}if(w.length){o.save(),o.beginPath();for(const[T,R]of w)o.rect(c-2,T,m+2,R);o.clip(),N(o,t.fill,0,0,0,0),o.restore()}o.globalAlpha=1},it=t=>{const i=(ve?ve.size:120)*11;ge.push({index:t,at:se,velocity:i});for(let s=1;s<F.length;s++){const r=i*Math.pow(Dn,s);if(r<30)break;for(const d of[t-s,t+s])d>=0&&d<F.length&&ge.push({index:d,at:se+s*.055,velocity:r})}te.current()},It=t=>{ae=0;const i=me.current;if(!i)return;const s=Math.min(.05,Math.max(.001,(t-Le)/1e3));Le=t;const{ink:r,accent:d}=gt(i),c=yt(i,r),b=2*Math.sqrt(Ct)*(1-vt(i.bounce)*.96);i.intro!==A&&(A=i.intro,x=0);const m=A!=="none"&&!Ee&&F.length>0;m&&re&&(x+=s);const u=m?vt((x-zn)/Math.max(.3,i.introDuration)):1;O=m&&u<1;const S=!O&&i.sweep&&!Ee&&!W.inside&&ee<0;S&&(oe+=s*i.speed),se+=s;let w=W.x,v=W.y;S&&(w=c.left+(c.right-c.left)*(.5-.5*Math.cos(oe*.45)),v=c.top+(c.bottom-c.top)*(.45+.1*Math.sin(oe*.8)));const T=!O&&(W.inside||S||ee>=0);if(T&&!L&&(Re.x=w,Re.y=v),T){const l=W.inside?.05:.22;Re.x=je(Re.x,w,s,l),Re.y=je(Re.y,v,s,l)}L=T,we=je(we,i.reveal==="area"&&T&&ee<0?1:0,s,.16);for(let l=ge.length-1;l>=0;l--){if(ge[l].at>se)continue;const z=F[ge[l].index];z&&(z.velocity.y-=ge[l].velocity),ge.splice(l,1)}let R=!1;F.forEach((l,z)=>{if(z===ee){l.offset.x=je(l.offset.x,W.x-Ze.x,s,.03),l.offset.y=je(l.offset.y,W.y-Ze.y,s,.03),l.velocity.x=0,l.velocity.y=0,R=!0;return}const{offset:H,velocity:V}=l;if(Math.abs(H.x)<.05&&Math.abs(H.y)<.05&&Math.hypot(V.x,V.y)<.5){H.x=0,H.y=0,V.x=0,V.y=0;return}V.x+=(-Ct*H.x-b*V.x)*s,V.y+=(-Ct*H.y-b*V.y)*s,H.x+=V.x*s,H.y+=V.y*s,R=!0});let fe=-1;if(O&&A==="type"){const l=.86/F.length,z=Math.min(F.length-1,Math.floor(u/l));fe=u<.93?z:-1,F.forEach((H,V)=>{H.shown=V<z?1:V===z?at(0,l*.3,u-V*l):0})}else F.forEach(l=>{l.shown=1});const Q=O?fe:ee>=0?ee:T?mt(Re.x,Re.y):-1;if(Q>=0&&i.selection){const l=F[Q],z=l.box.x1+l.offset.x-6,H=l.box.y1+l.offset.y-6,V=l.box.x2+l.offset.x+6,qe=l.box.y2+l.offset.y+6;(p.index<0||p.alpha<.02)&&(p.x1=z,p.y1=H,p.x2=V,p.y2=qe);const Qe=Q===ee?.02:.08;p.x1=je(p.x1,z,s,Qe),p.y1=je(p.y1,H,s,Qe),p.x2=je(p.x2,V,s,Qe),p.y2=je(p.y2,qe,s,Qe),p.index=Q}p.alpha=je(p.alpha,Q>=0&&i.selection?1:0,s,.1),F.forEach((l,z)=>{const H=O?A==="type"&&(z===fe||fe>=0&&z>fe)?1:0:i.reveal==="letter"&&z===Q&&z!==ee?1:0;O&&l.shown===0&&(l.outline=H),l.outline=je(l.outline,H,s,.09),Math.abs(l.outline-H)>.002?R=!0:l.outline=H}),ce=je(ce,i.guides&&!O&&(Q>=0||we>.4)?1:0,s,.14);const K=!O&&Q>=0&&W.inside,he=ee>=0?"grabbing":K&&i.draggable?"grab":K&&i.clickKick?"pointer":"";he!==Ke&&(Ke=he,n.style.cursor=he),o.setTransform(1,0,0,1,0,0),o.globalCompositeOperation="source-over",o.globalAlpha=1,o.clearRect(0,0,ne.width,ne.height);for(const l of F){const z=Math.hypot(l.offset.x,l.offset.y);z>1&&(o.globalAlpha=Math.min(1,z/24)*.55,N(o,l.dashes,0,0,0,0),o.globalAlpha=1)}O&&A==="metrics"?Ve(i,c,d,1-at(.84,1,u),l=>at(.02+.04*l,.2+.04*l,u)):ce>.005&&Ve(i,c,d,ce*.6,()=>1),F.forEach((l,z)=>{if(O&&A==="assemble"&&(Je(l,c),u<l.assembled)){le(l,u,d);return}if(O&&A==="metrics"){const H=F.length>1?z/(F.length-1):0;if(u<.72+.28*H){et(l,H,u,c);return}}l.shown<.001||(l.outline<.999&&(o.globalAlpha=(1-l.outline)*l.shown,N(o,l.fill,l.offset.x,l.offset.y,0,0)),l.outline>.001&&(o.globalAlpha=l.outline*l.shown,N(o,l.dashes,l.offset.x,l.offset.y,0,0)),o.globalAlpha=1)}),we>.001&&k(i),Te(i,d);const xe=R||O||ge.length>0||ce>.005&&ce<.995||Math.abs(we-(i.reveal==="area"&&T&&ee<0?1:0))>.002||p.alpha>.01&&p.alpha<.99;(T||xe)&&Be&&Se&&(ae=requestAnimationFrame(It))},Ue=()=>{ae||!Be||!Se||(Le=performance.now(),ae=requestAnimationFrame(It))};te.current=Ue;const Pt=()=>{C=Math.max(1,n.clientWidth),B=Math.max(1,n.clientHeight),y=Math.min(window.devicePixelRatio||1,2),ne.width=Math.round(C*y),ne.height=Math.round(B*y),X="",Ue()},Bt=t=>{const i=n.getBoundingClientRect();W.x=t.clientX-i.left,W.y=t.clientY-i.top},bt=t=>{Bt(t),W.inside=!0,Ue()},zt=()=>{ee>=0||(W.inside=!1,Ue())},Dt=t=>{var d;Bt(t),W.inside=!0;const i=me.current,s=t.pointerType!=="mouse"||t.button===0,r=O||!s?-1:mt(W.x,W.y);Me.x=W.x,Me.y=W.y,Me.time=performance.now(),Me.index=r,i!=null&&i.draggable&&r>=0&&(ee=r,Ze.x=W.x-F[r].offset.x,Ze.y=W.y-F[r].offset.y,(d=n.setPointerCapture)==null||d.call(n,t.pointerId)),Ue()},wt=t=>{var i,s;if(ee>=0){ee=-1,(i=n.releasePointerCapture)==null||i.call(n,t.pointerId);const r=n.getBoundingClientRect();W.inside=t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom}if(t.type==="pointerup"&&Me.index>=0&&((s=me.current)!=null&&s.clickKick)&&!Ee&&performance.now()-Me.time<450){const r=n.getBoundingClientRect();Math.hypot(t.clientX-r.left-Me.x,t.clientY-r.top-Me.y)<6&&it(Me.index)}Me.index=-1,Ue()};n.addEventListener("pointermove",bt,{passive:!0}),n.addEventListener("pointerenter",bt,{passive:!0}),n.addEventListener("pointerdown",Dt,{passive:!0}),n.addEventListener("pointerup",wt,{passive:!0}),n.addEventListener("pointercancel",wt,{passive:!0}),n.addEventListener("pointerleave",zt,{passive:!0});const _t=new ResizeObserver(Pt);_t.observe(n);const Ut=new IntersectionObserver(([t])=>{Be=t.isIntersecting,Ue()});Ut.observe(n);const $t=new MutationObserver(Ue);for(const t of[document.documentElement,document.body])t&&$t.observe(t,{attributes:!0,attributeFilter:["class","style","data-theme"]});const $e=(Gt=window.matchMedia)==null?void 0:Gt.call(window,"(prefers-color-scheme: dark)");return(Xt=$e==null?void 0:$e.addEventListener)==null||Xt.call($e,"change",Ue),document.fonts&&document.fonts.ready.then(dt,dt),Pt(),()=>{var t;Se=!1,cancelAnimationFrame(ae),te.current=()=>{},_t.disconnect(),Ut.disconnect(),$t.disconnect(),(t=$e==null?void 0:$e.removeEventListener)==null||t.call($e,"change",Ue),n.style.cursor="",n.removeEventListener("pointermove",bt),n.removeEventListener("pointerenter",bt),n.removeEventListener("pointerdown",Dt),n.removeEventListener("pointerup",wt),n.removeEventListener("pointercancel",wt),n.removeEventListener("pointerleave",zt)}},[]),e.jsx("div",{ref:Pe,className:`tech-text ${ue}`.trim(),style:M,role:"img","aria-label":a,children:e.jsx("canvas",{ref:U,className:"tech-text-canvas"})})},Un=["#120f17","#2a0f0a","#9a3412","#f97316","#fed7aa"],$n=["#f97316","#eab308","#f97316"];Tt.registerPlugin(dn);function rt({grain:a=!1,paused:h}){return e.jsx("div",{className:`sc-light ${a?"sc-grain":"sc-aurora"}`,"aria-hidden":"true",children:a?e.jsx(Nn,{colors:Un,angle:55,flow:.8,silk:.35,grainAmount:.08,speed:h?0:1.35,grainAnimated:!h,interactive:!1,clickSwirl:!1,intro:!1,dpr:1.25}):e.jsx(Pn,{colorStops:$n,amplitude:1,blend:.5,height:.45,speed:2.3,glow:.6,paused:h,mouseInteraction:!1,intro:!1,dpr:1.25})})}function ct({children:a,className:h=""}){return e.jsx("div",{className:`sc-reveal ${h}`,children:a})}function Ft({children:a="Get a no-cost inspection",onClick:h,light:j=!1}){return e.jsxs("button",{className:`sc-action ${j?"sc-action-light":""}`,onClick:h,children:[e.jsx("span",{children:a}),e.jsx(Fe,{size:23,weight:"bold"})]})}function qn(){const[a,h]=q.useState(!1),[j,f]=q.useState(!1),[E,$]=q.useState(0),[J,G]=q.useState(null),[Z,ke]=q.useState(!1),We=q.useRef(null),Ae=mn(),pe=Z||!!Ae,Ye=q.useRef(null);q.useEffect(()=>{if(Ae)return;const D=Tt.context(()=>{Tt.utils.toArray(".sc-reveal").forEach(_=>{Tt.fromTo(_,{opacity:0,y:30},{opacity:1,y:0,duration:.85,ease:"power2.out",clearProps:"transform,opacity,visibility",scrollTrigger:{trigger:_,start:"top 88%",once:!0}})})},We);return()=>D.revert()},[Ae]);const Ne=()=>{h(!1),f(!0)};return q.useEffect(()=>{if(!a)return;const D=_=>{var de;_.key==="Escape"&&(h(!1),(de=Ye.current)==null||de.focus())};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[a]),e.jsxs("div",{ref:We,className:`stormcut${pe?" sc-motion-paused":""}`,id:"top",children:[e.jsx("a",{className:"alt-skip",href:"#main",children:"Skip to content"}),e.jsxs("header",{className:"sc-header",children:[e.jsxs("a",{className:"sc-logo",href:"#top","aria-label":"Quest Storm home",children:[e.jsx(un,{size:29,weight:"bold"}),e.jsxs("span",{children:["QUEST",e.jsx("span",{children:"STORM"})]})]}),e.jsxs("nav",{id:"sc-navigation",className:a?"open":"","aria-label":"Main navigation",children:[[["The inspection","roof"],["How it works","process"],["Questions","questions"]].map(([D,_])=>e.jsx("a",{href:`#${_}`,onClick:()=>h(!1),children:D},_)),e.jsxs("button",{className:"sc-mobile-request",onClick:Ne,children:["Request an inspection ",e.jsx(Fe,{size:18})]})]}),e.jsxs("a",{className:"sc-phone",href:"tel:+16023996455",children:["602-399-6455",e.jsx(Fe,{size:17})]}),e.jsx("button",{ref:Ye,className:"alt-menu","aria-label":a?"Close navigation":"Open navigation","aria-expanded":a,"aria-controls":"sc-navigation",onClick:()=>h(!a),children:a?e.jsx(fn,{size:25}):e.jsx(hn,{size:25})})]}),e.jsxs("main",{id:"main",children:[e.jsxs("section",{className:"sc-hero sc-cut","aria-labelledby":"hero-title",children:[e.jsx(rt,{grain:!0,paused:pe}),e.jsx("div",{className:"sc-hero-photo","aria-hidden":"true",children:e.jsx("img",{src:Kt.storm,alt:"",fetchPriority:"high"})}),e.jsxs("div",{className:"sc-hero-stage sc-container",children:[e.jsxs("p",{className:"sc-eyebrow",children:[e.jsx("span",{className:"sc-signal"}),"ARIZONA / STORM RESPONSE"]}),e.jsxs("span",{className:"sc-stage-note",children:["YOUR HOME.",e.jsx("br",{}),"YOUR PEACE OF MIND."]}),e.jsx("span",{className:"sc-stage-index","aria-hidden":"true",children:"QUEST / 01"})]}),e.jsxs("div",{className:"sc-hero-bottom-band sc-container",children:[e.jsxs("div",{className:"sc-hero-headline",children:[e.jsxs("h1",{id:"hero-title",className:pe?"":"sc-visually-hidden",children:["STORM HIT HOME?",e.jsx("br",{}),"LET’S TAKE",e.jsx("br",{}),"A CLOSER LOOK."]}),!pe&&e.jsx("div",{className:"sc-tech-lines","aria-hidden":"true",children:["STORM HIT HOME?","LET’S TAKE","A CLOSER LOOK."].map(D=>e.jsx("div",{className:"sc-tech-line",children:e.jsx(_n,{text:D,fontFamily:"Outfit",fontWeight:600,fontSize:150,align:"left",reveal:"letter",dashLength:4,dashGap:2,specks:15,intro:"none",introDuration:2,clickKick:!0,guides:!1,accentColor:"#fed7aa"})},D))})]}),e.jsxs("div",{className:"sc-hero-summary",children:[e.jsxs("p",{children:["A closer look at your roof.",e.jsx("br",{}),"A clearer idea of what comes next."]}),e.jsx(Ft,{onClick:Ne,children:"Get a no-cost inspection"}),e.jsx("span",{children:"NO COST. NO OBLIGATION."})]})]}),e.jsxs("div",{className:"sc-hero-baseline sc-container",children:[e.jsx("span",{children:"HAIL & WIND / ROOF INSPECTIONS"}),e.jsxs("a",{href:"#roof",children:["DISCOVER WHAT’S NEXT",e.jsx(ln,{size:16})]})]})]}),e.jsxs("div",{className:"sc-proof-strip sc-container",children:[e.jsx("span",{children:"HAIL & WIND"}),e.jsx("span",{children:"REAL ROOF PHOTOS"}),e.jsx("span",{children:"ANSWERS BEFORE ACTION"}),e.jsx("span",{children:"YOUR NEXT STEP"})]}),e.jsxs("section",{className:"sc-roof sc-section sc-cut",id:"roof","aria-labelledby":"roof-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"01 / LOOK BEYOND THE DRIVEWAY"}),e.jsx("span",{"aria-hidden":"true",children:"+   +"})]}),e.jsxs(ct,{className:"sc-section-head",children:[e.jsxs("h2",{id:"roof-title",children:["THE GROUND ONLY",e.jsx("br",{}),"TELLS ",e.jsx("span",{children:"HALF THE STORY."})]}),e.jsxs("p",{children:["Your roof can look fine from the street.",e.jsx("br",{}),"A closer inspection replaces the guesswork with something you can see."]})]}),e.jsxs("div",{className:"sc-inspection",children:[e.jsxs("figure",{className:`sc-inspection-photo sc-detail-${E}`,children:[e.jsx("img",{src:Kt.roof,alt:"Close view of damaged shingles, showing the roof surface an inspection can document",loading:"lazy"}),e.jsx("span",{className:"sc-photo-cross sc-cross-one","aria-hidden":"true",children:"+"}),e.jsx("span",{className:"sc-photo-cross sc-cross-two","aria-hidden":"true",children:"+"}),e.jsxs("figcaption",{children:[e.jsx("span",{children:"THE DETAIL MAKES THE DIFFERENCE"}),e.jsxs("span",{children:["0",E+1," / 03"]})]})]}),e.jsxs("div",{className:"sc-inspection-list","aria-label":"Explore inspection areas",children:[vn.map((D,_)=>e.jsxs("article",{className:E===_?"active":"",children:[e.jsxs("button",{"aria-expanded":E===_,"aria-controls":`sc-detail-${_}`,onClick:()=>$(_),children:[e.jsxs("span",{children:["0",_+1]}),e.jsx("h3",{children:D.title}),E===_?e.jsx(Wt,{size:22}):e.jsx(Yt,{size:22})]}),e.jsxs("div",{id:`sc-detail-${_}`,hidden:E!==_,children:[e.jsx("p",{children:D.text}),e.jsxs("button",{className:"sc-inline-action",onClick:Ne,children:["Take a closer look",e.jsx(Fe,{size:19})]})]})]},D.title)),e.jsx("p",{className:"sc-caption",children:"Illustrative photography. Your inspection documents your own roof."})]})]})]})]}),e.jsxs("section",{className:"sc-process sc-section sc-cut",id:"process","aria-labelledby":"process-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"02 / FROM UNCERTAINTY TO UNDERSTANDING"}),e.jsx("span",{children:"THREE SIMPLE STEPS"})]}),e.jsxs(ct,{className:"sc-process-title",children:[e.jsxs("h2",{id:"process-title",children:["A CLOSER LOOK.",e.jsx("br",{}),e.jsx("span",{children:"A CLEARER NEXT STEP."})]}),e.jsx(Fe,{size:74,weight:"light","aria-hidden":"true"})]}),e.jsx("div",{className:"sc-steps",children:gn.map((D,_)=>e.jsxs(ct,{className:`sc-step sc-step-${_+1}`,children:[e.jsxs("div",{className:"sc-step-top",children:[e.jsxs("span",{children:["0",_+1]}),e.jsx("h3",{children:D.title})]}),e.jsxs("div",{className:"sc-step-photo",children:[e.jsx("img",{src:D.image,alt:["A roofing professional working on a roof in Phoenix","Damaged shingles photographed up close","A home in Arizona under storm clouds"][_],loading:"lazy"}),e.jsx(Fe,{size:28,"aria-hidden":"true"})]}),e.jsx("h4",{children:D.subtitle}),e.jsx("p",{children:D.body})]},D.title))})]})]}),e.jsxs("section",{className:"sc-decision sc-section sc-cut","aria-labelledby":"decision-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"03 / INFORMATION. THEN A DECISION."}),e.jsx("span",{"aria-hidden":"true",children:"↗"})]}),e.jsxs(ct,{className:"sc-decision-content",children:[e.jsxs("h2",{id:"decision-title",children:["YOUR ROOF.",e.jsx("br",{}),e.jsx("span",{children:"YOUR CALL."})]}),e.jsxs("div",{children:[e.jsx("p",{children:yn}),e.jsx("p",{className:"sc-decision-note",children:"No pressure. Just a place to start."}),e.jsx(Ft,{light:!0,onClick:Ne,children:"Let’s take a look"})]})]})]})]}),e.jsxs("section",{className:"sc-faq sc-section sc-cut",id:"questions","aria-labelledby":"questions-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"04 / CLEAR UP THE WHAT-IFS"}),e.jsx("span",{"aria-hidden":"true",children:"+   +"})]}),e.jsxs("div",{className:"sc-faq-layout",children:[e.jsxs(ct,{className:"sc-faq-heading",children:[e.jsxs("h2",{id:"questions-title",children:["GOOD QUESTIONS.",e.jsx("br",{}),e.jsxs("span",{children:["STRAIGHT",e.jsx("br",{}),"ANSWERS."]})]}),e.jsxs("p",{children:["You should feel clear about",e.jsx("br",{}),"the next step. Ask away."]}),e.jsxs("a",{href:"tel:+16023996455",children:["Talk to us",e.jsx(Fe,{size:21})]})]}),e.jsx("div",{className:"sc-questions",children:bn.map(([D,_],de)=>e.jsxs("article",{children:[e.jsxs("button",{"aria-expanded":J===de,"aria-controls":`sc-answer-${de}`,onClick:()=>G(J===de?null:de),children:[e.jsxs("span",{children:["0",de+1]}),e.jsx("h3",{children:D}),J===de?e.jsx(Wt,{size:22}):e.jsx(Yt,{size:22})]}),e.jsx("div",{id:`sc-answer-${de}`,hidden:J!==de,children:e.jsx("p",{children:_})})]},D))})]})]})]})]}),e.jsxs("footer",{className:"sc-footer sc-cut",id:"contact",children:[e.jsx(rt,{grain:!0,paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"YOUR HOME. YOUR PEACE OF MIND."}),e.jsxs("a",{href:"#top",children:["BACK TO TOP",e.jsx(Fe,{size:16})]})]}),e.jsxs(ct,{className:"sc-footer-invite",children:[e.jsxs("h2",{children:["LET’S TAKE",e.jsx("br",{}),"A ",e.jsx("span",{children:"CLOSER LOOK."})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["A no-cost roof inspection.",e.jsx("br",{}),"Your next step starts here."]}),e.jsx(Ft,{light:!0,onClick:Ne,children:"Request an inspection"})]})]}),e.jsxs("div",{className:"sc-footer-links",children:[e.jsxs("a",{className:"sc-footer-phone",href:"tel:+16023996455",children:["602-399-6455",e.jsx(Fe,{size:23})]}),e.jsxs("div",{children:[e.jsx("a",{href:"#roof",children:"The inspection"}),e.jsx("a",{href:"#process",children:"How it works"}),e.jsx("a",{href:"#questions",children:"Questions"})]}),e.jsxs("div",{children:[e.jsxs("a",{href:"./index.html",children:["All three designs",e.jsx(Fe,{size:15})]}),e.jsxs("a",{href:"./PHOTO-CREDITS.html",children:["Photography credits",e.jsx(Fe,{size:15})]})]})]}),e.jsxs("div",{className:"sc-wordmark","aria-hidden":"true",children:["QUEST STORM",e.jsx("span",{children:"↗"})]}),e.jsxs("div",{className:"sc-footer-bottom",children:[e.jsx("span",{children:"QUEST STORM BY QUEST ROOFING"}),e.jsx("span",{children:"ARIZONA / HAIL & WIND INSPECTIONS"}),e.jsxs("button",{"aria-pressed":Z,onClick:()=>ke(!Z),disabled:!!Ae,children:[pe?e.jsx(pn,{size:13}):e.jsx(xn,{size:13})," ",Ae?"Reduced motion enabled":Z?"Resume motion":"Pause motion"]})]})]})]}),e.jsx(wn,{open:j,onClose:()=>f(!1)})]})}cn.createRoot(document.getElementById("root")).render(e.jsx(qn,{}));
