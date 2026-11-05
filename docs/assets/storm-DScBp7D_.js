import{r as y,p as ln,j as e,c as dn,a as Fe}from"./Check.es-DR5A-5L_.js";import{g as St,S as un}from"./ScrollTrigger-C8IefbVz.js";import{c as fn}from"./ArrowDown.es-CpW7Y4Sa.js";import{m as hn,n as mn,c as xn}from"./X.es-DExPwVW_.js";import{m as Xt}from"./Minus.es-B-kCGHkK.js";import{n as pn}from"./Play.es-CzdRWq0G.js";import{n as Wt}from"./Plus.es-B1VgAaGo.js";import{p as Yt,d as vn,s as gn,c as yn,q as bn,R as Mn}from"./alternatives-C6W5-8iI.js";import{u as En}from"./use-reduced-motion-BZ8mbxKg.js";const wn=new Map([["bold",y.createElement(y.Fragment,null,y.createElement("path",{d:"M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"}))],["duotone",y.createElement(y.Fragment,null,y.createElement("path",{d:"M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",opacity:"0.2"}),y.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["fill",y.createElement(y.Fragment,null,y.createElement("path",{d:"M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"}))],["light",y.createElement(y.Fragment,null,y.createElement("path",{d:"M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"}))],["regular",y.createElement(y.Fragment,null,y.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["thin",y.createElement(y.Fragment,null,y.createElement("path",{d:"M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"}))]]),rn=y.forwardRef((i,f)=>y.createElement(ln,{ref:f,...i,weights:wn}));rn.displayName="PauseIcon";const An=rn,Zt=8,Rt=24,Nt=4,Kt=1.3,Rn=.06,Jt=2.6,Sn=1.6,Qt=["#120f17","#2a0f0a","#9a3412","#f97316","#fed7aa"],Tn={linear:0,radial:1},Lt=.2,jn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Nn=`#version 300 es
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
}`,Ln=`#version 300 es
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
}`,Ce=(i,f,j)=>Math.min(j,Math.max(f,i)),Ot=i=>i<=.04045?i/12.92:((i+.055)/1.055)**2.4,On=([i,f,j])=>{const h=Ot(i),A=Ot(f),V=Ot(j),K=Math.cbrt(.4122214708*h+.5363325363*A+.0514459929*V),q=Math.cbrt(.2119034982*h+.6806995451*A+.1073969566*V),Q=Math.cbrt(.0883024619*h+.2817188376*A+.6299787005*V);return[.2104542553*K+.793617785*q-.0040720468*Q,1.9779984951*K-2.428592205*q+.4505937099*Q,.0259040371*K+.7827717662*q-.808675766*Q]},en=(i,f,j)=>{const h=i.createShader(f);return h?(i.shaderSource(h,j),i.compileShader(h),i.getShaderParameter(h,i.COMPILE_STATUS)?h:(i.deleteShader(h),null)):null},tn=(i,f)=>{const j=en(i,i.VERTEX_SHADER,jn),h=en(i,i.FRAGMENT_SHADER,f),A=i.createProgram();if(!j||!h||!A)return null;if(i.attachShader(A,j),i.attachShader(A,h),i.linkProgram(A),i.deleteShader(j),i.deleteShader(h),!i.getProgramParameter(A,i.LINK_STATUS))return i.deleteProgram(A),null;const V={},K=i.getProgramParameter(A,i.ACTIVE_UNIFORMS);for(let q=0;q<K;q++){const Q=i.getActiveUniform(A,q);if(!Q)continue;const ke=Q.name.replace(/\[0\]$/,"");V[ke]=i.getUniformLocation(A,ke)}return{program:A,uniforms:V}},Cn=({colors:i=Qt,type:f="linear",angle:j=55,bands:h=1,speed:A=1,flow:V=.8,scale:K=1,softness:q=1,silk:Q=.35,grainAmount:ke=.08,grainSize:Xe=1.2,grainAnimated:je=!0,contrast:pe=1,saturation:We=1,variation:Ne=0,interactive:D=!0,stir:_=1,clickSwirl:de=!0,intro:lt=!0,lightMode:tt=!1,dpr:nt,className:Ie="",style:qe,...ot})=>{const ye=y.useRef(null),be=y.useRef(null),ue=y.useRef(null),w=(Array.isArray(i)&&i.length?i:Qt).slice(0,Zt),Pe={colors:w.length>1?w:[w[0],w[0]],type:Tn[f]??0,angle:j,bands:Ce(h,1,8),speed:Math.max(0,A),flow:Ce(V,0,3),scale:Ce(K,.25,3),softness:Ce(q,0,1),silk:Ce(Q,0,1),grainAmount:Ce(ke,0,.5),grainSize:Ce(Xe,.5,4),grainAnimated:je,contrast:Ce(pe,.2,2),saturation:Ce(We,0,2),variation:Math.max(0,Ne),interactive:D,stir:Ce(_,0,2),clickSwirl:de,intro:lt,lightMode:tt,dpr:nt},U=y.useRef(Pe);return U.current=Pe,y.useEffect(()=>{var mt;const me=ye.current,te=be.current,n=te==null?void 0:te.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!me||!te||!n)return;const ne=tn(n,Nn),o=tn(n,Ln);if(!ne||!o)return;const P=ne.uniforms,ae=o.uniforms,we=n.createVertexArray(),F=n.createTexture();n.bindTexture(n.TEXTURE_2D,F),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);const z=n.createFramebuffer(),b={width:0,height:0},ie=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Le=new Map,Be=g=>{const L=String(g),I=Le.get(L);if(I)return I;let W=[0,0,0];if(ie){ie.clearRect(0,0,1,1),ie.fillStyle="#000000",ie.fillStyle=L,ie.fillRect(0,0,1,1);const[De,Ge,Se]=ie.getImageData(0,0,1,1).data;W=[De/255,Ge/255,Se/255]}return Le.set(L,W),W},Ae=((mt=window.matchMedia)==null?void 0:mt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,G={width:1,height:1,ratio:1},ze=new Float32Array(Zt*3),ve=new Float32Array(Rt*4),k=new Float32Array(Rt),Me=new Float32Array(Nt*4),oe=[],se=[],O={x:.5,y:.5,sx:.5,sy:.5,vx:0,inside:!1,fresh:!0};let ee="",Ye=0,x=U.current.intro&&!Ae?0:1,N=0,C=0,re=0,ce=0,ge=!0;const Ee=()=>{const g=U.current,L=`${g.colors.join(",")}|${g.lightMode}`;if(L===ee)return;ee=L;const I=g.colors.map(W=>On(Be(W)));if(!g.lightMode)I.forEach((W,De)=>ze.set(W,De*3));else{const W=I.map(([Ge])=>Math.abs(Ge-I[0][0])<.1),De=I.filter((Ge,Se)=>!W[Se]).reverse();I.forEach((Ge,Se)=>{const[Ze,Ke,B]=W[Se]?[1,0,0]:De.shift();ze.set([Ze+(1-Ze)*Lt,Ke*(1-Lt),B*(1-Lt)],Se*3)})}},X=()=>{const g=U.current,L=G.width/G.height;Ee(),n.bindVertexArray(we),n.disable(n.BLEND),n.bindFramebuffer(n.FRAMEBUFFER,z),n.viewport(0,0,b.width,b.height),n.useProgram(ne.program),n.uniform1f(P.uAspect,L),n.uniform1f(P.uTime,Ye),n.uniform3fv(P.uRamp,ze),n.uniform1i(P.uCount,g.colors.length);const I=g.angle*Math.PI/180;n.uniform1i(P.uType,g.type),n.uniform2f(P.uDir,Math.sin(I),Math.cos(I)),n.uniform1f(P.uExtent,L*Math.abs(Math.sin(I))+Math.abs(Math.cos(I))),n.uniform1f(P.uBands,g.bands),n.uniform1f(P.uSoftness,g.softness),n.uniform1f(P.uFlow,g.flow),n.uniform1f(P.uScale,g.scale),n.uniform1f(P.uSilk,g.silk),n.uniform4fv(P.uStir,ve),n.uniform1fv(P.uStirWeight,k),n.uniform4fv(P.uTwirl,Me),n.uniform2f(P.uSeed,g.variation*3.17,g.variation*1.91),n.uniform1f(P.uContrast,g.contrast),n.uniform1f(P.uSaturation,g.saturation),n.uniform1f(P.uSettle,x*x*(3-2*x)),n.uniform1f(P.uReveal,x),n.drawArrays(n.TRIANGLES,0,3),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,te.width,te.height),n.useProgram(o.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,F),n.uniform1i(ae.uField,0),n.uniform1f(ae.uGrain,g.grainAmount),n.uniform1f(ae.uGrainSize,g.grainSize*G.ratio),n.uniform1f(ae.uFrame,N),n.drawArrays(n.TRIANGLES,0,3)},Qe=()=>{const g=U.current;G.width=Math.max(1,me.clientWidth),G.height=Math.max(1,me.clientHeight),G.ratio=Math.min(g.dpr||window.devicePixelRatio||1,2),te.width=Math.max(1,Math.round(G.width*G.ratio)),te.height=Math.max(1,Math.round(G.height*G.ratio));const L=Math.max(1,Math.round(te.width/2)),I=Math.max(1,Math.round(te.height/2));(L!==b.width||I!==b.height)&&(b.width=L,b.height=I,n.bindTexture(n.TEXTURE_2D,F),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,L,I,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindFramebuffer(n.FRAMEBUFFER,z),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0),n.bindFramebuffer(n.FRAMEBUFFER,null)),X(),He()},Re=(g,L)=>{const I=U.current,W=1-Math.exp(-g/.06),De=O.sx,Ge=O.sy;O.sx+=(O.x-O.sx)*W,O.sy+=(O.y-O.sy)*W;const Se=(O.sx-De)/g*L,Ze=(O.sy-Ge)/g;O.vx=Se;const Ke=oe[0];if(oe.forEach(B=>{B.done&&(B.age+=g)}),I.interactive&&O.inside&&Math.hypot(Se,Ze)>.02&&!Ae){(!Ke||Ke.done)&&(oe.unshift({x:0,y:0,vx:0,vy:0,age:0,grow:0,done:!1}),oe.length>Rt&&oe.pop());const B=oe[0];B.x=(O.sx-.5)*L,B.y=O.sy-.5,B.vx=Se,B.vy=Ze,B.grow=Math.min(1,B.grow+g/Rn),B.done=B.grow>=1}else Ke&&(Ke.done=!0);for(;oe.length&&oe[oe.length-1].age>Kt;)oe.pop();for(let B=0;B<Rt;B++){const le=oe[B];if(!le){k[B]=0;continue}const et=1-le.age/Kt,at=Math.min(1,2.2/Math.max(Math.hypot(le.vx,le.vy),.001));ve.set([le.x,le.y,le.vx*at,le.vy*at],B*4),k[B]=et*et*le.grow*I.stir*.05}for(se.forEach(B=>{B.age+=g});se.length&&se[se.length-1].age>Jt;)se.pop();for(let B=0;B<Nt;B++){const le=se[B];if(!le){Me[B*4+2]=0;continue}const et=le.age/Jt,at=Math.min(1,le.age/.18)*(1-et)*(1-et);Me.set([le.x,le.y,le.direction*2.4*at,.16+.1*Math.min(1,le.age/.5)],B*4)}},p=g=>{if(re=0,!ge||document.hidden)return;const L=U.current,I=ce?Ce((g-ce)/1e3,.001,.05):1/60;ce=g,Ae||(Ye+=I*L.speed*.16),x<1&&(x=Math.min(1,x+I/Sn)),C+=I,L.grainAnimated&&!Ae&&C>1/24&&(C=0,N=(N+1)%97),Re(I,G.width/G.height),X(),!Ae&&(L.speed>0||L.grainAnimated)||x<1||oe.length>0||se.length>0?re=requestAnimationFrame(p):ce=0};function He(){!re&&ge&&!document.hidden&&(re=requestAnimationFrame(p))}const dt=g=>{const L=me.getBoundingClientRect(),I=(g.clientX-L.left)/Math.max(1,L.width),W=1-(g.clientY-L.top)/Math.max(1,L.height);O.inside=I>=0&&I<=1&&W>=0&&W<=1,O.x=I,O.y=W,(O.fresh||!O.inside)&&(O.sx=I,O.sy=W,O.fresh=!1)},ut=g=>{dt(g),(O.inside||oe.length)&&He()},ft=g=>{dt(g);const L=U.current;!O.inside||!L.clickSwirl||Ae||(se.unshift({x:(O.x-.5)*(G.width/G.height),y:O.y-.5,age:0,direction:O.vx<0?1:-1}),se.length>Nt&&se.pop(),He())},gt=()=>{O.inside=!1},st=()=>{ce=0,He()},ht=new ResizeObserver(Qe);ht.observe(me);const yt=new IntersectionObserver(g=>{ge=g.some(L=>L.isIntersecting),ge&&(ce=0,He())});return yt.observe(me),window.addEventListener("pointermove",ut,{passive:!0}),window.addEventListener("pointerdown",ft,{passive:!0}),document.documentElement.addEventListener("pointerleave",gt),document.addEventListener("visibilitychange",st),Qe(),ue.current=He,()=>{var g;cancelAnimationFrame(re),ue.current=null,ht.disconnect(),yt.disconnect(),window.removeEventListener("pointermove",ut),window.removeEventListener("pointerdown",ft),document.documentElement.removeEventListener("pointerleave",gt),document.removeEventListener("visibilitychange",st),n.deleteTexture(F),n.deleteFramebuffer(z),n.deleteVertexArray(we),n.deleteProgram(ne.program),n.deleteProgram(o.program),(g=n.getExtension("WEBGL_lose_context"))==null||g.loseContext()}},[]),y.useEffect(()=>{var me;(me=ue.current)==null||me.call(ue)}),e.jsx("div",{ref:ye,className:`grainient-container${Ie?` ${Ie}`:""}`,style:qe,...ot,children:e.jsx("canvas",{ref:be,className:"grainient-canvas","aria-hidden":"true"})})},kt=5,cn=3,Fn=2.4,kn=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,In=`#version 300 es
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
  for (int k = 0; k < ${cn}; k++) {
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
}`,pt=(i,f,j)=>Math.min(j,Math.max(f,i)),Pn=i=>{const[f,j,h]=i.map(Q=>Q<=.04045?Q/12.92:Math.pow((Q+.055)/1.055,2.4)),A=Math.cbrt(.4122214708*f+.5363325363*j+.0514459929*h),V=Math.cbrt(.2119034982*f+.6806995451*j+.1073969566*h),K=Math.cbrt(.0883024619*f+.2817188376*j+.6299787005*h),q=[.2104542553*A+.793617785*V-.0040720468*K,1.9779984951*A-2.428592205*V+.4505937099*K,.0259040371*A+.7827717662*V-.808675766*K];return[q[0],Math.hypot(q[1],q[2]),Math.atan2(q[2],q[1])]},Bn=i=>{const f=i.findIndex(A=>A[1]>.02);let h=f===-1?0:i[f][2];return i.map(A=>{let V=A[1]>.02?A[2]:h;for(;V-h>Math.PI;)V-=Math.PI*2;for(;V-h<-Math.PI;)V+=Math.PI*2;return h=V,[A[0],A[1],V]})},nn=(i,f,j)=>{const h=i.createShader(f);return h?(i.shaderSource(h,j),i.compileShader(h),i.getShaderParameter(h,i.COMPILE_STATUS)?h:(i.deleteShader(h),null)):null},zn=i=>{const f=nn(i,i.VERTEX_SHADER,kn),j=nn(i,i.FRAGMENT_SHADER,In),h=i.createProgram();if(!f||!j||!h)return null;if(i.attachShader(h,f),i.attachShader(h,j),i.bindAttribLocation(h,0,"aPosition"),i.linkProgram(h),i.deleteShader(f),i.deleteShader(j),!i.getProgramParameter(h,i.LINK_STATUS))return i.deleteProgram(h),null;const A={},V=i.getProgramParameter(h,i.ACTIVE_UNIFORMS);for(let K=0;K<V;K++){const q=i.getActiveUniform(h,K);q&&(A[q.name.replace("[0]","")]=i.getUniformLocation(h,q.name))}return{program:h,uniforms:A}},Hn=({colorStops:i=["#5227FF","#7cff67","#5227FF"],amplitude:f=1,blend:j=.5,speed:h=1,time:A,height:V=.45,scale:K=1,glow:q=.6,brightness:Q=1,layers:ke=1,direction:Xe="top",mouseInteraction:je=!0,intro:pe=!0,opacity:We=1,lightMode:Ne=!1,paused:D=!1,dpr:_,className:de="",style:lt})=>{const tt=y.useRef(null),nt=y.useRef(null),Ie=y.useRef(null),qe=(Array.isArray(i)?i:[]).filter(Boolean).map(String).slice(0,kt),ot={stops:qe.length>=2?qe:qe.length===1?[qe[0],qe[0]]:["#5227FF","#7cff67"],amplitude:Math.max(0,f),blend:pt(j,0,1),speed:h,time:A,height:pt(V,0,1),scale:Math.max(.1,K),glow:Math.max(0,q),brightness:Math.max(0,Q),layers:pt(Math.round(ke),1,cn),flip:Xe==="bottom"?1:0,mouseInteraction:je,intro:pe,opacity:pt(We,0,1),lightMode:Ne,paused:D,dpr:_},ye=y.useRef(ot);return ye.current=ot,y.useEffect(()=>{var Ye;const be=tt.current,ue=nt.current,w=ue==null?void 0:ue.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!be||!ue||!w)return;const Pe=zn(w);if(!Pe)return;const U=Pe.uniforms,me=w.createBuffer(),te=w.createVertexArray();w.bindVertexArray(te),w.bindBuffer(w.ARRAY_BUFFER,me),w.bufferData(w.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),w.STATIC_DRAW),w.enableVertexAttribArray(0),w.vertexAttribPointer(0,2,w.FLOAT,!1,0,0);const n=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),ne=((Ye=window.matchMedia)==null?void 0:Ye.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,o=new Map,P=x=>{if(o.has(x))return o.get(x);let N=[1,1,1];if(n){n.clearRect(0,0,1,1),n.fillStyle="#ffffff",n.fillStyle=x,n.fillRect(0,0,1,1);const[C,re,ce]=n.getImageData(0,0,1,1).data;N=[C/255,re/255,ce/255]}return o.set(x,N),N},ae=new Float32Array(kt*3),we={width:1,height:1},F={x:0,y:0,inside:!1},z={clock:0,px:0,py:.5,reach:0,reveal:ye.current.intro&&!ne?0:1};let b=0,ie=0,Le=!0;const Be=()=>{const x=ye.current;Bn(x.stops.map(C=>Pn(P(C)))).forEach((C,re)=>ae.set(C,re*3));const N=z.reveal;w.viewport(0,0,ue.width,ue.height),w.useProgram(Pe.program),w.bindVertexArray(te),w.uniform2f(U.uResolution,ue.width,ue.height),w.uniform1f(U.uTime,x.time!==void 0?x.time*x.speed*.1:z.clock),w.uniform3fv(U.uStops,ae),w.uniform1i(U.uStopCount,x.stops.length),w.uniform1f(U.uAmplitude,x.amplitude),w.uniform1f(U.uBlend,x.blend),w.uniform1f(U.uHeight,x.height),w.uniform1f(U.uScale,x.scale),w.uniform1f(U.uGlow,x.glow),w.uniform1f(U.uBrightness,x.brightness),w.uniform1i(U.uLayers,x.layers),w.uniform1f(U.uFlip,x.flip),w.uniform3f(U.uPointer,z.px,z.py,z.reach),w.uniform1f(U.uReveal,1-Math.pow(1-N,3)),w.uniform1f(U.uOpacity,x.opacity),w.uniform1f(U.uLightMode,x.lightMode?1:0),w.drawArrays(w.TRIANGLES,0,3)},Ae=x=>{if(b=0,!Le||document.hidden)return;const N=ye.current,C=ie?pt((x-ie)/1e3,5e-4,.05):1/60;if(ie=x,N.paused){z.reveal=1,Be(),ie=0;return}const re=ne?0:1;z.clock+=C*N.speed*re;const ce=N.mouseInteraction&&F.inside&&!ne,ge=1-Math.exp(-C/.6);if(ce){const Ee=(F.x-we.width/2)/we.height,X=N.flip?1-F.y/we.height:F.y/we.height;z.px+=(Ee-z.px)*ge,z.py+=(X-z.py)*ge}z.reach+=((ce?1:0)-z.reach)*(1-Math.exp(-C/(ce?.9:1.4))),!N.intro||ne?z.reveal=1:z.reveal<1&&(z.reveal=Math.min(1,z.reveal+C/Fn)),Be(),b=requestAnimationFrame(Ae)},G=()=>{!b&&Le&&!document.hidden&&(b=requestAnimationFrame(Ae))},ze=()=>{const x=ye.current,N=Math.max(1,be.clientWidth),C=Math.max(1,be.clientHeight),re=Math.min(x.dpr||window.devicePixelRatio||1,2);we.width=N,we.height=C,ue.width=Math.max(1,Math.round(N*re)),ue.height=Math.max(1,Math.round(C*re)),Be(),G()},ve=x=>{const N=be.getBoundingClientRect();F.x=x.clientX-N.left,F.y=x.clientY-N.top;const C=F.inside;if(F.inside=F.x>=0&&F.y>=0&&F.x<=N.width&&F.y<=N.height,F.inside&&!C){const re=ye.current;z.px=(F.x-N.width/2)/Math.max(1,N.height),z.py=re.flip?1-F.y/Math.max(1,N.height):F.y/Math.max(1,N.height)}ye.current.paused||G()},k=x=>{x.pointerType!=="mouse"&&(F.inside=!1)},Me=()=>{F.inside=!1},oe=()=>{ie=0,G()},se=new ResizeObserver(ze);se.observe(be);const O=new IntersectionObserver(x=>{Le=x.some(N=>N.isIntersecting),Le&&(ie=0,G())});O.observe(be),window.addEventListener("pointermove",ve,{passive:!0}),window.addEventListener("pointerdown",ve,{passive:!0}),window.addEventListener("pointerup",k,{passive:!0}),window.addEventListener("pointercancel",k,{passive:!0}),document.documentElement.addEventListener("pointerleave",Me),document.addEventListener("visibilitychange",oe),ze();let ee=ye.current.dpr;return Ie.current=()=>{const x=ye.current;if(x.dpr!==ee){ee=x.dpr,ze();return}b||Be(),G()},()=>{var x;cancelAnimationFrame(b),Ie.current=null,se.disconnect(),O.disconnect(),window.removeEventListener("pointermove",ve),window.removeEventListener("pointerdown",ve),window.removeEventListener("pointerup",k),window.removeEventListener("pointercancel",k),document.documentElement.removeEventListener("pointerleave",Me),document.removeEventListener("visibilitychange",oe),w.deleteProgram(Pe.program),w.deleteBuffer(me),w.deleteVertexArray(te),(x=w.getExtension("WEBGL_lose_context"))==null||x.loseContext()}},[]),y.useEffect(()=>{var be;(be=Ie.current)==null||be.call(Ie)}),e.jsx("div",{ref:tt,className:`aurora-container${de?` ${de}`:""}`,style:lt,children:e.jsx("canvas",{ref:nt,className:"aurora-canvas","aria-hidden":"true"})})},on="10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",sn=8,Ct=320,Dn=/^(currentcolor|inherit)$/i,_n=.15,Un=.62,Te=(i,f,j,h)=>i+(f-i)*(1-Math.exp(-j/h)),vt=i=>Math.min(1,Math.max(0,Number(i)||0)),it=(i,f,j)=>{const h=vt((j-i)/(f-i));return h*h*(3-2*h)},$e=(...i)=>{let f=2166136261;for(const j of i)f=Math.imul(f^(j|0),16777619),f^=f>>>13,f=Math.imul(f,1540483477),f^=f>>>15;return(f>>>0)/4294967296},an=i=>i>0?`+${i}`:i<0?`−${-i}`:"0",Vn=({text:i="React Bits",fontFamily:f="",fontWeight:j=600,fontSize:h=150,letterSpacing:A=-.05,color:V="currentColor",accentColor:K="currentColor",align:q="center",reach:Q=200,softness:ke=.7,dashLength:Xe=4,dashGap:je=2,strokeWidth:pe=1.5,lineStyle:We="dashed",reveal:Ne="letter",specks:D=15,selection:_=!0,labels:de=!0,draggable:lt=!0,bounce:tt=.4,sweep:nt=!0,speed:Ie=1,clickKick:qe=!0,intro:ot="none",introDuration:ye=2,guides:be=!1,className:ue="",style:w})=>{const Pe=y.useRef(null),U=y.useRef(null),me=y.useRef(null),te=y.useRef(()=>{});return y.useEffect(()=>{me.current={text:i,fontFamily:f,fontWeight:j,fontSize:h,letterSpacing:A,color:V,accentColor:K,align:q,reach:Q,softness:ke,dashLength:Xe,dashGap:je,strokeWidth:pe,lineStyle:We,reveal:Ne,specks:D,selection:_,labels:de,draggable:lt,bounce:tt,sweep:nt,speed:Ie,clickKick:qe,intro:ot,introDuration:ye,guides:be},te.current()}),y.useEffect(()=>{var Vt,$t,qt,Gt;const n=Pe.current,ne=U.current,o=ne==null?void 0:ne.getContext("2d"),P=document.createElement("canvas"),ae=P.getContext("2d");if(!n||!ne||!o||!ae)return;const we=($t=(Vt=window.matchMedia)==null?void 0:Vt.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:$t.matches;let F=1,z=1,b=1,ie=0,Le=performance.now(),Be=!1,Ae=!0,G="",ze="",ve=null,k=[],Me=0,oe=0,se=0,O=!1,ee=-1,Ye="",x=0,N="",C=!1,re=!document.fonts,ce=0;const ge=[],Ee={x:0,y:0,time:0,index:-1},X={x:0,y:0,inside:!1},Qe={x:0,y:0},Re={x:0,y:0},p={x1:0,y1:0,x2:0,y2:0,alpha:0,index:-1},He=()=>{G="",te.current()},dt=()=>{re=!0,He()},ut=t=>t.fontFamily||getComputedStyle(n).fontFamily||"sans-serif",ft=(t,a)=>`${t.fontWeight} ${a}px ${ut(t)}`,gt=t=>{const a=getComputedStyle(n).color||"#000000",s=r=>!r||Dn.test(String(r).trim())?a:r;return{ink:s(t.color),accent:s(t.accentColor)}},st=(t,a,s)=>{t.font=ft(a,s),"letterSpacing"in t&&(t.letterSpacing=`${a.letterSpacing*s}px`),t.textAlign="left",t.textBaseline="alphabetic"},ht=(t,a,s,r,d)=>{const c=Math.ceil(t.strokeWidth*2+4),M=s.box.x1-c,m=s.box.y1-c,u=s.box.x2-s.box.x1+c*2,R=s.box.y2-s.box.y1+c*2,E=document.createElement("canvas");E.width=Math.max(1,Math.ceil(u*b)),E.height=Math.max(1,Math.ceil(R*b));const v=E.getContext("2d");return v?(v.setTransform(b,0,0,b,-M*b,-m*b),st(v,t,a.size),r?(v.lineJoin="round",v.lineWidth=t.strokeWidth*2,v.lineCap="butt",v.strokeStyle=d,t.lineStyle!=="solid"&&v.setLineDash([Math.max(1,t.dashLength),Math.max(1,t.dashGap)]),v.strokeText(s.char,s.x,a.baseline),v.setLineDash([]),v.globalCompositeOperation="destination-out",v.fillStyle="#000000",v.fillText(s.char,s.x,a.baseline),v.globalCompositeOperation="source-over"):(v.fillStyle=d,v.fillText(s.char,s.x,a.baseline)),{image:E,left:M,top:m}):{image:E,left:M,top:m}},yt=(t,a)=>{const s=[t.text,ut(t),t.fontWeight,t.fontSize,t.letterSpacing,t.align,a,t.dashLength,t.dashGap,t.strokeWidth,t.lineStyle,F,z,b].join("|");if(s===G&&ve)return ve;G=s;const r=ft(t,64);document.fonts&&r!==ze&&(ze=r,document.fonts.load(r,t.text).then(He,He));const d=ae;st(d,t,t.fontSize);let c=d.measureText(t.text);const M=Math.min(1,F*.9/Math.max(c.actualBoundingBoxLeft+c.actualBoundingBoxRight,1),z*.66/Math.max(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent,1)),m=t.fontSize*M;st(d,t,m),c=d.measureText(t.text);const u=c.actualBoundingBoxLeft+c.actualBoundingBoxRight,R=c.actualBoundingBoxAscent+c.actualBoundingBoxDescent,E=F*.05,T=(t.align==="left"?E:t.align==="right"?F-E-u:(F-u)/2)+c.actualBoundingBoxLeft,S=(z-R)/2+c.actualBoundingBoxAscent,fe=S-d.measureText("x").actualBoundingBoxAscent,J=S-d.measureText("H").actualBoundingBoxAscent,Y=S-d.measureText("d").actualBoundingBoxAscent,he=S+d.measureText("p").actualBoundingBoxDescent,xe=S-c.actualBoundingBoxAscent,l=S+c.actualBoundingBoxDescent,H=Math.min(xe,J)-2,$=Math.max(l,S)+2,Z={size:m,baseline:S,left:T-c.actualBoundingBoxLeft,right:T+c.actualBoundingBoxRight,top:xe,bottom:l,lines:[{y:S,label:"baseline"},{y:fe,label:"x-height"},{y:J,label:"cap height"},...J-Y>Math.max(11,m*.06)?[{y:Y,label:"ascender"}]:[],{y:he,label:"descender"}],bands:[{y0:fe,y1:S,up:!0,order:0},{y0:J,y1:fe,up:!0,order:1},{y0:H,y1:J,up:!0,order:2},{y0:S,y1:$,up:!1,order:1}].filter(Oe=>Oe.y1-Oe.y0>.5)};ve=Z;const Ve=Array.from(t.text),Je=k;k=[];let Et="";return Ve.forEach((Oe,wt)=>{Et+=Oe;const xt=d.measureText(Oe),Tt=T+d.measureText(Et).width-xt.width;if(!Oe.trim())return;const jt={char:Oe,x:Tt,box:{x1:Tt-xt.actualBoundingBoxLeft,y1:S-xt.actualBoundingBoxAscent,x2:Tt+xt.actualBoundingBoxRight,y2:S+xt.actualBoundingBoxDescent}},At=Je[k.length];k.push({...jt,offset:(At==null?void 0:At.char)===Oe?At.offset:{x:0,y:0},velocity:{x:0,y:0},outline:0,shown:1,cells:null,assembled:0,index:wt,fill:ht(t,Z,jt,!1,a),dashes:ht(t,Z,jt,!0,a)})}),ee=-1,p.index=-1,Z},mt=(t,a)=>{if(!ve||a<ve.top-24||a>ve.bottom+24)return-1;let s=-1,r=1/0;return k.forEach((d,c)=>{const M=d.box.x1+d.offset.x,m=d.box.x2+d.offset.x,u=t<M?M-t:t>m?t-m:0;u<r&&(r=u,s=c)}),r<28?s:-1},g=(t,a,s,r,d,c)=>{const M=Math.min(1,Math.max(0,1-c)),m=t.createRadialGradient(a,s,0,a,s,r);if(m.addColorStop(0,`rgba(0, 0, 0, ${d})`),M>.995)return m.addColorStop(.995,`rgba(0, 0, 0, ${d})`),m.addColorStop(1,"rgba(0, 0, 0, 0)"),m;for(let u=0;u<=sn;u++){const R=u/sn,E=R*R*(3-2*R);m.addColorStop(M+(1-M)*R,`rgba(0, 0, 0, ${d*(1-E)})`)}return m},L=(t,a,s,r,d,c)=>{t.drawImage(a.image,Math.round((a.left+s)*b-d),Math.round((a.top+r)*b-c))},I=t=>{const a=t.reach*b,s=Re.x*b,r=Re.y*b;o.globalCompositeOperation="destination-out",o.fillStyle=g(o,s,r,a,Me,t.softness),o.fillRect(s-a,r-a,a*2,a*2),o.globalCompositeOperation="source-over";const d=Math.max(0,Math.floor(s-a)),c=Math.max(0,Math.floor(r-a)),M=Math.min(ne.width,Math.ceil(s+a)),m=Math.min(ne.height,Math.ceil(r+a));if(M<=d||m<=c)return;const u=M-d,R=m-c;(P.width<u||P.height<R)&&(P.width=Math.max(P.width,u),P.height=Math.max(P.height,R)),ae.setTransform(1,0,0,1,0,0),ae.globalCompositeOperation="source-over",ae.clearRect(0,0,u,R);for(const E of k)L(ae,E.dashes,E.offset.x,E.offset.y,d,c);ae.globalCompositeOperation="destination-in",ae.fillStyle=g(ae,s-d,r-c,a,1,t.softness),ae.fillRect(0,0,u,R),ae.globalCompositeOperation="source-over",o.globalAlpha=Me,o.drawImage(P,0,0,u,R,d,c,u,R),o.globalAlpha=1},W=t=>(Math.round(t*b)+.5)/b,De=(t,a,s)=>{let r=(t%(2*(a+s))+2*(a+s))%(2*(a+s));return r<a?[p.x1+r,p.y1,0,-1]:(r-=a,r<s?[p.x2,p.y1+r,1,0]:(r-=s,r<a?[p.x2-r,p.y2,0,1]:(r-=a,[p.x1,p.y2-r,-1,0])))},Ge=(t,a,s)=>{const r=p.x2-p.x1,d=p.y2-p.y1;if(r<2||d<2)return;const c=2*(r+d),M=p.index+1,m=3;o.fillStyle=s,o.strokeStyle=s;for(let u=0;u<t.specks;u++){const R=.5+$e(M,u,11)*1.2,E=se/R+$e(M,u,17),v=Math.floor(E),T=E-v;if(T>.7)continue;const[S,fe,J,Y]=De($e(M,u,v)*c,r,d),he=$e(M,u,v,2),xe=he<.46?2:he<.7?3:he<.84?5:he<.94?8:11,l=xe>=8,H=(l?9:4)+Math.floor($e(M,u,v,1)*5)*m,$=p.x1+Math.round((S+J*H-p.x1)/m)*m,Z=p.y1+Math.round((fe+Y*H-p.y1)/m)*m,Ve=$e(M,u,v,3),Je=T<.06||T>.32&&T<.36?.35:1,Et=a*(l?.3+.4*Ve:.3+.6*Ve)*Je,Oe=Math.round($-xe/2),wt=Math.round(Z-xe/2);o.globalAlpha=Et,Ve<.26||l&&Ve<.78?(o.strokeRect(Oe+.5,wt+.5,xe,xe),l&&Ve>.5&&o.fillRect(Math.round($)-1,Math.round(Z)-1,2,2)):o.fillRect(Oe,wt,xe,xe)}for(let u=0;u<2;u++){const R=(se*.42*t.speed+u*.5)*c;for(let E=0;E<4;E++){const[v,T]=De(R-E*6,r,d),S=E===0?3:2;o.globalAlpha=a*[.95,.55,.32,.16][E],o.fillRect(Math.round(v-S/2),Math.round(T-S/2),S,S)}}o.globalAlpha=1},Se=(t,a)=>{const s=k[p.index];if(!s||p.alpha<.01)return;const r=p.alpha,d=W(p.x1),c=W(p.y1),M=W(p.x2),m=W(p.y2);o.setTransform(b,0,0,b,0,0),o.fillStyle=a,o.strokeStyle=a,o.lineWidth=1;const u=Math.hypot(s.offset.x,s.offset.y);if(u>1){const E=(s.box.x1+s.box.x2)/2,v=(s.box.y1+s.box.y2)/2;o.beginPath(),o.moveTo(E,v),o.lineTo(E+s.offset.x,v+s.offset.y),o.setLineDash([3,4]),o.globalAlpha=.45*r,o.stroke(),o.setLineDash([]),o.beginPath(),o.rect(Math.round(E)-2,Math.round(v)-2,4,4),o.globalAlpha=.7*r,o.fill()}o.beginPath(),o.rect(d,c,M-d,m-c),o.globalAlpha=.5*r,o.stroke(),o.beginPath();for(const[E,v]of[[d,c],[M,c],[M,m],[d,m]])o.rect(Math.round(E)-2,Math.round(v)-2,5,5);if(o.globalAlpha=.95*r,o.fill(),o.globalAlpha=1,t.specks>0&&Ge(t,r,a),!t.labels)return;o.font=on,o.textAlign="left",o.textBaseline="bottom",o.fillStyle=a,o.globalAlpha=.62*r;const R=u>1?`${an(Math.round(s.offset.x))}, ${an(Math.round(-s.offset.y))}`:`${s.char}  ${Math.round(s.box.x2-s.box.x1)} × ${Math.round(s.box.y2-s.box.y1)}`;o.fillText(R,Math.round(p.x1),Math.round(p.y1)-7),o.globalAlpha=1},Ze=(t,a,s,r,d)=>{const c=Math.max(12,a.size*.12),M=Math.round(a.left-c),m=Math.round(a.right+c),u=F-m>M;o.setTransform(b,0,0,b,0,0),o.strokeStyle=s,o.fillStyle=s,o.lineWidth=1,o.font=on,o.textBaseline="middle",o.textAlign=u?"left":"right",a.lines.forEach((R,E)=>{const v=d(E);if(v<=.001)return;const T=W(R.y),S=M+(m-M)*v;o.globalAlpha=r*.4,o.beginPath(),o.moveTo(M,T),o.lineTo(S,T),o.stroke(),o.globalAlpha=r*.9,o.fillRect(M-1,Math.round(R.y)-1,3,3),o.fillRect(Math.round(S)-1,Math.round(R.y)-1,3,3),t.labels&&(o.globalAlpha=r*.62*it(.7,1,v),o.fillText(R.label,u?m+8:M-8,Math.round(R.y)))}),o.textAlign="left",o.setTransform(1,0,0,1,0,0),o.globalAlpha=1},Ke=(t,a)=>{if(t.cells)return t.cells;const s=t.fill,r=Math.max(3,Math.round(a.size/26)),d=s.image.width,c=s.image.height,M=s.image.getContext("2d"),m=[];if(t.cells=m,t.assembled=0,!M||d<2||c<2)return m;const u=M.getImageData(0,0,d,c).data,R=Math.floor(s.left/r)*r,E=Math.floor(s.top/r)*r,v=Math.ceil((s.left+d/b-R)/r)+1,T=Math.ceil((s.top+c/b-E)/r)+1,S=new Uint8Array(v*T);for(let Y=0;Y<c;Y++)for(let he=0;he<d;he++){if(u[(Y*d+he)*4+3]<24)continue;const xe=Math.floor((s.left+he/b-R)/r),l=Math.floor((s.top+Y/b-E)/r);S[l*v+xe]=1}const fe=(t.box.x1+t.box.x2)/2,J=vt((fe-a.left)/Math.max(1,a.right-a.left));for(let Y=0;Y<S.length;Y++){if(!S[Y])continue;const he=$e(t.index,Y,1)*Math.PI*2,xe=a.size*(.25+.6*$e(t.index,Y,2)),l=.03+.36*J+.12*$e(t.index,Y,3),H=l+.3+.14*$e(t.index,Y,4);m.push({x:R+Y%v*r,y:E+Math.floor(Y/v)*r,size:r,dx:Math.cos(he)*xe,dy:Math.sin(he)*xe*.7,start:l,land:H}),t.assembled=Math.max(t.assembled,H)}return m},B=(t,a,s)=>{const r=Math.round(t*b),d=Math.round(a*b);return[r,d,Math.round((t+s)*b)-r,Math.round((a+s)*b)-d]},le=(t,a,s)=>{const r=t.cells||[];o.save(),o.beginPath();let d=0;for(const c of r){if(a<c.land)continue;const[M,m,u,R]=B(c.x,c.y,c.size);o.rect(M,m,u,R),d++}d&&(o.clip(),L(o,t.fill,0,0,0,0)),o.restore(),o.fillStyle=s;for(const c of r){if(a<c.start||a>=c.land)continue;const M=(a-c.start)/(c.land-c.start),m=1-Math.pow(1-M,4),u=c.size*(.4+.6*m),R=c.x+(c.size-u)/2+c.dx*(1-m),E=c.y+(c.size-u)/2+c.dy*(1-m),[v,T,S,fe]=B(R,E,u);o.globalAlpha=Math.min(1,M*4)*(.55+.45*m),o.fillRect(v,T,Math.max(1,S),Math.max(1,fe))}o.globalAlpha=1},et=(t,a,s,r)=>{const d=t.fill,c=Math.floor(d.left*b),M=Math.floor(d.top*b),m=d.image.width+2,u=d.image.height+2,R=vt((s-.24-.28*a)/.48),E=[];for(const T of r.bands){const S=it(.3*T.order,.3*T.order+.4,R);if(S<=0)continue;const fe=(T.y1-T.y0)*S,J=Math.round((T.up?T.y1-fe:T.y0)*b),Y=Math.round((T.up?T.y1:T.y0+fe)*b);Y>J&&E.push([J,Y-J])}const v=it(.08+.2*a,.22+.2*a,s);if(v>.001){o.save(),o.beginPath(),o.rect(c-2,M-2,m+2,u+2);for(const[T,S]of E)o.rect(c-2,T,m+2,S);o.clip("evenodd"),o.globalAlpha=v,L(o,t.dashes,0,0,0,0),o.restore()}if(E.length){o.save(),o.beginPath();for(const[T,S]of E)o.rect(c-2,T,m+2,S);o.clip(),L(o,t.fill,0,0,0,0),o.restore()}o.globalAlpha=1},at=t=>{const a=(ve?ve.size:120)*11;ge.push({index:t,at:se,velocity:a});for(let s=1;s<k.length;s++){const r=a*Math.pow(Un,s);if(r<30)break;for(const d of[t-s,t+s])d>=0&&d<k.length&&ge.push({index:d,at:se+s*.055,velocity:r})}te.current()},It=t=>{ie=0;const a=me.current;if(!a)return;const s=Math.min(.05,Math.max(.001,(t-Le)/1e3));Le=t;const{ink:r,accent:d}=gt(a),c=yt(a,r),M=2*Math.sqrt(Ct)*(1-vt(a.bounce)*.96);a.intro!==N&&(N=a.intro,x=0);const m=N!=="none"&&!we&&k.length>0;m&&re&&(x+=s);const u=m?vt((x-_n)/Math.max(.3,a.introDuration)):1;C=m&&u<1;const R=!C&&a.sweep&&!we&&!X.inside&&ee<0;R&&(oe+=s*a.speed),se+=s;let E=X.x,v=X.y;R&&(E=c.left+(c.right-c.left)*(.5-.5*Math.cos(oe*.45)),v=c.top+(c.bottom-c.top)*(.45+.1*Math.sin(oe*.8)));const T=!C&&(X.inside||R||ee>=0);if(T&&!O&&(Re.x=E,Re.y=v),T){const l=X.inside?.05:.22;Re.x=Te(Re.x,E,s,l),Re.y=Te(Re.y,v,s,l)}O=T,Me=Te(Me,a.reveal==="area"&&T&&ee<0?1:0,s,.16);for(let l=ge.length-1;l>=0;l--){if(ge[l].at>se)continue;const H=k[ge[l].index];H&&(H.velocity.y-=ge[l].velocity),ge.splice(l,1)}let S=!1;k.forEach((l,H)=>{if(H===ee){l.offset.x=Te(l.offset.x,X.x-Qe.x,s,.03),l.offset.y=Te(l.offset.y,X.y-Qe.y,s,.03),l.velocity.x=0,l.velocity.y=0,S=!0;return}const{offset:$,velocity:Z}=l;if(Math.abs($.x)<.05&&Math.abs($.y)<.05&&Math.hypot(Z.x,Z.y)<.5){$.x=0,$.y=0,Z.x=0,Z.y=0;return}Z.x+=(-Ct*$.x-M*Z.x)*s,Z.y+=(-Ct*$.y-M*Z.y)*s,$.x+=Z.x*s,$.y+=Z.y*s,S=!0});let fe=-1;if(C&&N==="type"){const l=.86/k.length,H=Math.min(k.length-1,Math.floor(u/l));fe=u<.93?H:-1,k.forEach(($,Z)=>{$.shown=Z<H?1:Z===H?it(0,l*.3,u-Z*l):0})}else k.forEach(l=>{l.shown=1});const J=C?fe:ee>=0?ee:T?mt(Re.x,Re.y):-1;if(J>=0&&a.selection){const l=k[J],H=l.box.x1+l.offset.x-6,$=l.box.y1+l.offset.y-6,Z=l.box.x2+l.offset.x+6,Ve=l.box.y2+l.offset.y+6;(p.index<0||p.alpha<.02)&&(p.x1=H,p.y1=$,p.x2=Z,p.y2=Ve);const Je=J===ee?.02:.08;p.x1=Te(p.x1,H,s,Je),p.y1=Te(p.y1,$,s,Je),p.x2=Te(p.x2,Z,s,Je),p.y2=Te(p.y2,Ve,s,Je),p.index=J}p.alpha=Te(p.alpha,J>=0&&a.selection?1:0,s,.1),k.forEach((l,H)=>{const $=C?N==="type"&&(H===fe||fe>=0&&H>fe)?1:0:a.reveal==="letter"&&H===J&&H!==ee?1:0;C&&l.shown===0&&(l.outline=$),l.outline=Te(l.outline,$,s,.09),Math.abs(l.outline-$)>.002?S=!0:l.outline=$}),ce=Te(ce,a.guides&&!C&&(J>=0||Me>.4)?1:0,s,.14);const Y=!C&&J>=0&&X.inside,he=ee>=0?"grabbing":Y&&a.draggable?"grab":Y&&a.clickKick?"pointer":"";he!==Ye&&(Ye=he,n.style.cursor=he),o.setTransform(1,0,0,1,0,0),o.globalCompositeOperation="source-over",o.globalAlpha=1,o.clearRect(0,0,ne.width,ne.height);for(const l of k){const H=Math.hypot(l.offset.x,l.offset.y);H>1&&(o.globalAlpha=Math.min(1,H/24)*.55,L(o,l.dashes,0,0,0,0),o.globalAlpha=1)}C&&N==="metrics"?Ze(a,c,d,1-it(.84,1,u),l=>it(.02+.04*l,.2+.04*l,u)):ce>.005&&Ze(a,c,d,ce*.6,()=>1),k.forEach((l,H)=>{if(C&&N==="assemble"&&(Ke(l,c),u<l.assembled)){le(l,u,d);return}if(C&&N==="metrics"){const $=k.length>1?H/(k.length-1):0;if(u<.72+.28*$){et(l,$,u,c);return}}l.shown<.001||(l.outline<.999&&(o.globalAlpha=(1-l.outline)*l.shown,L(o,l.fill,l.offset.x,l.offset.y,0,0)),l.outline>.001&&(o.globalAlpha=l.outline*l.shown,L(o,l.dashes,l.offset.x,l.offset.y,0,0)),o.globalAlpha=1)}),Me>.001&&I(a),Se(a,d);const xe=S||C||ge.length>0||ce>.005&&ce<.995||Math.abs(Me-(a.reveal==="area"&&T&&ee<0?1:0))>.002||p.alpha>.01&&p.alpha<.99;(T||xe)&&Be&&Ae&&(ie=requestAnimationFrame(It))},_e=()=>{ie||!Be||!Ae||(Le=performance.now(),ie=requestAnimationFrame(It))};te.current=_e;const Pt=()=>{F=Math.max(1,n.clientWidth),z=Math.max(1,n.clientHeight),b=Math.min(window.devicePixelRatio||1,2),ne.width=Math.round(F*b),ne.height=Math.round(z*b),G="",_e()},Bt=t=>{const a=n.getBoundingClientRect();X.x=t.clientX-a.left,X.y=t.clientY-a.top},bt=t=>{Bt(t),X.inside=!0,_e()},zt=()=>{ee>=0||(X.inside=!1,_e())},Ht=t=>{var d;Bt(t),X.inside=!0;const a=me.current,s=t.pointerType!=="mouse"||t.button===0,r=C||!s?-1:mt(X.x,X.y);Ee.x=X.x,Ee.y=X.y,Ee.time=performance.now(),Ee.index=r,a!=null&&a.draggable&&r>=0&&(ee=r,Qe.x=X.x-k[r].offset.x,Qe.y=X.y-k[r].offset.y,(d=n.setPointerCapture)==null||d.call(n,t.pointerId)),_e()},Mt=t=>{var a,s;if(ee>=0){ee=-1,(a=n.releasePointerCapture)==null||a.call(n,t.pointerId);const r=n.getBoundingClientRect();X.inside=t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom}if(t.type==="pointerup"&&Ee.index>=0&&((s=me.current)!=null&&s.clickKick)&&!we&&performance.now()-Ee.time<450){const r=n.getBoundingClientRect();Math.hypot(t.clientX-r.left-Ee.x,t.clientY-r.top-Ee.y)<6&&at(Ee.index)}Ee.index=-1,_e()};n.addEventListener("pointermove",bt,{passive:!0}),n.addEventListener("pointerenter",bt,{passive:!0}),n.addEventListener("pointerdown",Ht,{passive:!0}),n.addEventListener("pointerup",Mt,{passive:!0}),n.addEventListener("pointercancel",Mt,{passive:!0}),n.addEventListener("pointerleave",zt,{passive:!0});const Dt=new ResizeObserver(Pt);Dt.observe(n);const _t=new IntersectionObserver(([t])=>{Be=t.isIntersecting,_e()});_t.observe(n);const Ut=new MutationObserver(_e);for(const t of[document.documentElement,document.body])t&&Ut.observe(t,{attributes:!0,attributeFilter:["class","style","data-theme"]});const Ue=(qt=window.matchMedia)==null?void 0:qt.call(window,"(prefers-color-scheme: dark)");return(Gt=Ue==null?void 0:Ue.addEventListener)==null||Gt.call(Ue,"change",_e),document.fonts&&document.fonts.ready.then(dt,dt),Pt(),()=>{var t;Ae=!1,cancelAnimationFrame(ie),te.current=()=>{},Dt.disconnect(),_t.disconnect(),Ut.disconnect(),(t=Ue==null?void 0:Ue.removeEventListener)==null||t.call(Ue,"change",_e),n.style.cursor="",n.removeEventListener("pointermove",bt),n.removeEventListener("pointerenter",bt),n.removeEventListener("pointerdown",Ht),n.removeEventListener("pointerup",Mt),n.removeEventListener("pointercancel",Mt),n.removeEventListener("pointerleave",zt)}},[]),e.jsx("div",{ref:Pe,className:`tech-text ${ue}`.trim(),style:w,role:"img","aria-label":i,children:e.jsx("canvas",{ref:U,className:"tech-text-canvas"})})},$n=["#07182e","#0b2d5c","#145ec9","#3f91f5","#e9f3ff"],qn=["#0a3c8c","#3183e9","#d7ebff"];St.registerPlugin(un);function rt({grain:i=!1,paused:f}){return e.jsx("div",{className:`sc-light ${i?"sc-grain":"sc-aurora"}`,"aria-hidden":"true",children:i?e.jsx(Cn,{colors:$n,angle:55,flow:.8,silk:.35,grainAmount:.08,speed:f?0:1.35,grainAnimated:!f,interactive:!1,clickSwirl:!1,intro:!1,dpr:1.25}):e.jsx(Hn,{colorStops:qn,amplitude:1,blend:.5,height:.45,speed:2.3,glow:.6,paused:f,mouseInteraction:!1,intro:!1,dpr:1.25})})}function ct({children:i,className:f=""}){return e.jsx("div",{className:`sc-reveal ${f}`,children:i})}function Ft({children:i="Get a no-cost inspection",onClick:f,light:j=!1}){return e.jsxs("button",{className:`sc-action ${j?"sc-action-light":""}`,onClick:f,children:[e.jsx("span",{children:i}),e.jsx(Fe,{size:23,weight:"bold"})]})}function Gn(){const[i,f]=y.useState(!1),[j,h]=y.useState(!1),[A,V]=y.useState(0),[K,q]=y.useState(null),[Q,ke]=y.useState(!1),Xe=y.useRef(null),je=En(),pe=Q||!!je,We=y.useRef(null);y.useEffect(()=>{if(je)return;const D=St.context(()=>{St.utils.toArray(".sc-reveal").forEach(_=>{St.fromTo(_,{opacity:0,y:30},{opacity:1,y:0,duration:.85,ease:"power2.out",clearProps:"transform,opacity,visibility",scrollTrigger:{trigger:_,start:"top 88%",once:!0}})})},Xe);return()=>D.revert()},[je]);const Ne=()=>{f(!1),h(!0)};return y.useEffect(()=>{if(!i)return;const D=_=>{var de;_.key==="Escape"&&(f(!1),(de=We.current)==null||de.focus())};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[i]),e.jsxs("div",{ref:Xe,className:`stormcut${pe?" sc-motion-paused":""}`,id:"top",children:[e.jsx("a",{className:"alt-skip",href:"#main",children:"Skip to content"}),e.jsxs("header",{className:"sc-header",children:[e.jsxs("a",{className:"sc-logo",href:"#top","aria-label":"Quest Storm home",children:[e.jsx(hn,{size:29,weight:"bold"}),e.jsxs("span",{children:["QUEST",e.jsx("span",{children:"STORM"})]})]}),e.jsxs("nav",{id:"sc-navigation",className:i?"open":"","aria-label":"Main navigation",children:[[["The inspection","roof"],["How it works","process"],["Questions","questions"]].map(([D,_])=>e.jsx("a",{href:`#${_}`,onClick:()=>f(!1),children:D},_)),e.jsxs("button",{className:"sc-mobile-request",onClick:Ne,children:["Request an inspection ",e.jsx(Fe,{size:18})]})]}),e.jsxs("a",{className:"sc-phone",href:"tel:+16023996455",children:["602-399-6455",e.jsx(Fe,{size:17})]}),e.jsx("button",{ref:We,className:"alt-menu","aria-label":i?"Close navigation":"Open navigation","aria-expanded":i,"aria-controls":"sc-navigation",onClick:()=>f(!i),children:i?e.jsx(mn,{size:25}):e.jsx(xn,{size:25})})]}),e.jsxs("main",{id:"main",children:[e.jsxs("section",{className:"sc-hero sc-cut","aria-labelledby":"hero-title",children:[e.jsx(rt,{grain:!0,paused:pe}),e.jsx("div",{className:"sc-hero-photo","aria-hidden":"true",children:e.jsx("img",{src:Yt.storm,alt:"",fetchPriority:"high"})}),e.jsxs("div",{className:"sc-hero-stage sc-container",children:[e.jsxs("p",{className:"sc-eyebrow",children:[e.jsx("span",{className:"sc-signal"}),"ARIZONA / STORM RESPONSE"]}),e.jsxs("span",{className:"sc-stage-note",children:["YOUR HOME.",e.jsx("br",{}),"YOUR PEACE OF MIND."]}),e.jsx("span",{className:"sc-stage-index","aria-hidden":"true",children:"QUEST / 01"})]}),e.jsxs("div",{className:"sc-hero-bottom-band sc-container",children:[e.jsxs("div",{className:"sc-hero-headline",children:[e.jsx("h1",{id:"hero-title",className:pe?"":"sc-visually-hidden",children:"STORM HIT HOME? LET’S TAKE A CLOSER LOOK."}),!pe&&e.jsx("div",{className:"sc-tech-lines","aria-hidden":"true",children:["STORM HIT HOME?","LET’S TAKE","A CLOSER LOOK."].map(D=>e.jsx("div",{className:"sc-tech-line",children:e.jsx(Vn,{text:D,fontFamily:"Outfit",fontWeight:600,fontSize:150,align:"left",reveal:"letter",dashLength:4,dashGap:2,specks:15,intro:"none",introDuration:2,clickKick:!0,guides:!1,accentColor:"#b7dbff"})},D))})]}),e.jsxs("div",{className:"sc-hero-summary",children:[e.jsxs("p",{children:["A closer look at your roof.",e.jsx("br",{}),"A clearer idea of what comes next."]}),e.jsx(Ft,{onClick:Ne,children:"Get a no-cost inspection"}),e.jsx("span",{children:"NO COST. NO OBLIGATION."})]})]}),e.jsxs("div",{className:"sc-hero-baseline sc-container",children:[e.jsx("span",{children:"HAIL & WIND / ROOF INSPECTIONS"}),e.jsxs("a",{href:"#roof",children:["DISCOVER WHAT’S NEXT",e.jsx(fn,{size:16})]})]})]}),e.jsxs("div",{className:"sc-proof-strip sc-container",children:[e.jsx("span",{children:"HAIL & WIND"}),e.jsx("span",{children:"REAL ROOF PHOTOS"}),e.jsx("span",{children:"ANSWERS BEFORE ACTION"}),e.jsx("span",{children:"YOUR NEXT STEP"})]}),e.jsxs("section",{className:"sc-roof sc-section sc-cut",id:"roof","aria-labelledby":"roof-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"01 / LOOK BEYOND THE DRIVEWAY"}),e.jsx("span",{"aria-hidden":"true",children:"+   +"})]}),e.jsxs(ct,{className:"sc-section-head",children:[e.jsxs("h2",{id:"roof-title",children:["THE GROUND ONLY TELLS ",e.jsx("span",{children:"HALF THE STORY."})]}),e.jsxs("p",{children:["Your roof can look fine from the street.",e.jsx("br",{}),"A closer inspection replaces the guesswork with something you can see."]})]}),e.jsxs("div",{className:"sc-inspection",children:[e.jsxs("figure",{className:`sc-inspection-photo sc-detail-${A}`,children:[e.jsx("img",{src:Yt.roof,alt:"Close view of damaged shingles, showing the roof surface an inspection can document",loading:"lazy"}),e.jsx("span",{className:"sc-photo-cross sc-cross-one","aria-hidden":"true",children:"+"}),e.jsx("span",{className:"sc-photo-cross sc-cross-two","aria-hidden":"true",children:"+"}),e.jsxs("figcaption",{children:[e.jsx("span",{children:"THE DETAIL MAKES THE DIFFERENCE"}),e.jsxs("span",{children:["0",A+1," / 03"]})]})]}),e.jsxs("div",{className:"sc-inspection-list","aria-label":"Explore inspection areas",children:[vn.map((D,_)=>e.jsxs("article",{className:A===_?"active":"",children:[e.jsxs("button",{"aria-expanded":A===_,"aria-controls":`sc-detail-${_}`,onClick:()=>V(_),children:[e.jsxs("span",{children:["0",_+1]}),e.jsx("h3",{children:D.title}),A===_?e.jsx(Xt,{size:22}):e.jsx(Wt,{size:22})]}),e.jsxs("div",{id:`sc-detail-${_}`,hidden:A!==_,children:[e.jsx("p",{children:D.text}),e.jsxs("button",{className:"sc-inline-action",onClick:Ne,children:["Take a closer look",e.jsx(Fe,{size:19})]})]})]},D.title)),e.jsx("p",{className:"sc-caption",children:"Illustrative photography. Your inspection documents your own roof."})]})]})]})]}),e.jsxs("section",{className:"sc-process sc-section sc-cut",id:"process","aria-labelledby":"process-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"02 / FROM UNCERTAINTY TO UNDERSTANDING"}),e.jsx("span",{children:"THREE SIMPLE STEPS"})]}),e.jsxs(ct,{className:"sc-process-title",children:[e.jsxs("h2",{id:"process-title",children:["A CLOSER LOOK. ",e.jsx("span",{children:"A CLEARER NEXT STEP."})]}),e.jsx(Fe,{size:74,weight:"light","aria-hidden":"true"})]}),e.jsx("div",{className:"sc-steps",children:gn.map((D,_)=>e.jsxs(ct,{className:`sc-step sc-step-${_+1}`,children:[e.jsxs("div",{className:"sc-step-top",children:[e.jsxs("span",{children:["0",_+1]}),e.jsx("h3",{children:D.title})]}),e.jsxs("div",{className:"sc-step-photo",children:[e.jsx("img",{src:D.image,alt:["A roofing professional working on a roof in Phoenix","Damaged shingles photographed up close","A home in Arizona under storm clouds"][_],loading:"lazy"}),e.jsx(Fe,{size:28,"aria-hidden":"true"})]}),e.jsx("h4",{children:D.subtitle}),e.jsx("p",{children:D.body})]},D.title))})]})]}),e.jsxs("section",{className:"sc-decision sc-section sc-cut","aria-labelledby":"decision-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"03 / INFORMATION. THEN A DECISION."}),e.jsx("span",{"aria-hidden":"true",children:"↗"})]}),e.jsxs(ct,{className:"sc-decision-content",children:[e.jsxs("h2",{id:"decision-title",children:["YOUR ROOF. ",e.jsx("span",{children:"YOUR CALL."})]}),e.jsxs("div",{children:[e.jsx("p",{children:yn}),e.jsx("p",{className:"sc-decision-note",children:"No pressure. Just a place to start."}),e.jsx(Ft,{light:!0,onClick:Ne,children:"Let’s take a look"})]})]})]})]}),e.jsxs("section",{className:"sc-faq sc-section sc-cut",id:"questions","aria-labelledby":"questions-title",children:[e.jsx(rt,{paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"04 / CLEAR UP THE WHAT-IFS"}),e.jsx("span",{"aria-hidden":"true",children:"+   +"})]}),e.jsxs("div",{className:"sc-faq-layout",children:[e.jsxs(ct,{className:"sc-faq-heading",children:[e.jsxs("h2",{id:"questions-title",children:["GOOD QUESTIONS. ",e.jsx("span",{children:"STRAIGHT ANSWERS."})]}),e.jsxs("p",{children:["You should feel clear about",e.jsx("br",{}),"the next step. Ask away."]}),e.jsxs("a",{href:"tel:+16023996455",children:["Talk to us",e.jsx(Fe,{size:21})]})]}),e.jsx("div",{className:"sc-questions",children:bn.map(([D,_],de)=>e.jsxs("article",{children:[e.jsxs("button",{"aria-expanded":K===de,"aria-controls":`sc-answer-${de}`,onClick:()=>q(K===de?null:de),children:[e.jsxs("span",{children:["0",de+1]}),e.jsx("h3",{children:D}),K===de?e.jsx(Xt,{size:22}):e.jsx(Wt,{size:22})]}),e.jsx("div",{id:`sc-answer-${de}`,hidden:K!==de,children:e.jsx("p",{children:_})})]},D))})]})]})]})]}),e.jsxs("footer",{className:"sc-footer sc-cut",id:"contact",children:[e.jsx(rt,{grain:!0,paused:pe}),e.jsxs("div",{className:"sc-container",children:[e.jsxs("div",{className:"sc-section-label",children:[e.jsx("span",{children:"YOUR HOME. YOUR PEACE OF MIND."}),e.jsxs("a",{href:"#top",children:["BACK TO TOP",e.jsx(Fe,{size:16})]})]}),e.jsxs(ct,{className:"sc-footer-invite",children:[e.jsxs("h2",{children:["LET’S TAKE A ",e.jsx("span",{children:"CLOSER LOOK."})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["A no-cost roof inspection.",e.jsx("br",{}),"Your next step starts here."]}),e.jsx(Ft,{light:!0,onClick:Ne,children:"Request an inspection"})]})]}),e.jsxs("div",{className:"sc-footer-links",children:[e.jsxs("a",{className:"sc-footer-phone",href:"tel:+16023996455",children:["602-399-6455",e.jsx(Fe,{size:23})]}),e.jsxs("div",{children:[e.jsx("a",{href:"#roof",children:"The inspection"}),e.jsx("a",{href:"#process",children:"How it works"}),e.jsx("a",{href:"#questions",children:"Questions"})]}),e.jsxs("div",{children:[e.jsxs("a",{href:"./index.html",children:["All four designs",e.jsx(Fe,{size:15})]}),e.jsxs("a",{href:"./PHOTO-CREDITS.html",children:["Photography credits",e.jsx(Fe,{size:15})]})]})]}),e.jsxs("div",{className:"sc-wordmark","aria-hidden":"true",children:["QUEST STORM",e.jsx("span",{children:"↗"})]}),e.jsxs("div",{className:"sc-footer-bottom",children:[e.jsx("span",{children:"QUEST STORM BY QUEST ROOFING"}),e.jsx("span",{children:"ARIZONA / HAIL & WIND INSPECTIONS"}),e.jsxs("button",{"aria-pressed":Q,onClick:()=>ke(!Q),disabled:!!je,children:[pe?e.jsx(pn,{size:13}):e.jsx(An,{size:13})," ",je?"Reduced motion enabled":Q?"Resume motion":"Pause motion"]})]})]})]}),e.jsx(Mn,{open:j,onClose:()=>h(!1)})]})}dn.createRoot(document.getElementById("root")).render(e.jsx(Gn,{}));
