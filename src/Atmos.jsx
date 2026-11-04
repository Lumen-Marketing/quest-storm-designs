import React, {useState} from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {ArrowUpRight, ArrowRight, ArrowDown, HouseLine, Camera, Check, Plus, List, X} from '@phosphor-icons/react';
import {photos, questions, steps} from './content';
import '@fontsource-variable/instrument-sans';

function Enter({children,className='',delay=0}) {
  const reduced=useReducedMotion();
  return <motion.div className={className} initial={reduced?false:{opacity:0,transform:'translateY(22px)'}} whileInView={{opacity:1,transform:'translateY(0px)'}} viewport={{once:true,amount:.15}} transition={{duration:.6,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
function Brand(){return <a className="ap-brand" href="#top" aria-label="Quest Storm home"><HouseLine size={25}/><span>quest<strong>storm</strong></span></a>}
function Action({open,light=false}){return <button className={'ap-action'+(light?' light':'')} onClick={open}>Get a roof check<ArrowUpRight size={20}/></button>}

// A roof's layered structure, drawn as an axonometric contour study.
// Decorative only: this is not an inspection result or a model of a customer's home.
function RoofStudy(){
  const ridge=[370,135],back=[680,235],right=[820,430],front=[470,520],left=[145,390];
  const lerp=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t);
  return <div className="ap-roof-study" aria-hidden="true"><svg viewBox="0 0 940 700" fill="none">
    <defs><linearGradient id="ap-face" x1="370" y1="130" x2="650" y2="530" gradientUnits="userSpaceOnUse"><stop stopColor="#9bc7ff" stopOpacity=".48"/><stop offset="1" stopColor="#1166ef" stopOpacity=".02"/></linearGradient><linearGradient id="ap-edge"><stop stopColor="#0a3973"/><stop offset=".55" stopColor="#b5d8ff"/><stop offset="1" stopColor="#2669b9"/></linearGradient></defs>
    <ellipse cx="490" cy="574" rx="300" ry="45" fill="#03070d" opacity=".8"/>
    <g className="ap-roof-float">
      {Array.from({length:17},(_,i)=><path key={i} d={`M145 ${390+i*5} L470 ${520+i*5} L820 ${430+i*5}`} stroke="url(#ap-edge)" strokeWidth={i===0?2:1} opacity={1-i*.045}/>)}
      <path d="M145 390L370 135L680 235L820 430L470 520Z" fill="url(#ap-face)" stroke="#76b3ff"/>
      <path d="M145 390L370 135L470 520M370 135L680 235L820 430" stroke="#c2dfff" strokeWidth="1.6"/>
      {Array.from({length:31},(_,i)=>{const t=i/30;const a=lerp(ridge,front,t),b=lerp(back,right,t);return <path key={i} d={`M${a} L${b}`} stroke="#89bfff" opacity=".55"/>})}
      {Array.from({length:23},(_,i)=>{const t=i/22;const a=lerp(ridge,back,t),b=lerp(front,right,t);return <path key={i} d={`M${a} L${b}`} stroke="#6aa4ed" opacity=".35"/>})}
      {Array.from({length:20},(_,i)=>{const t=i/19;const a=lerp(ridge,left,t),b=lerp(ridge,front,t);return <path key={i} d={`M${a} L${b}`} stroke="#84b8f7" opacity=".45"/>})}
      <path className="ap-trace" d="M145 390L370 135L680 235L820 430L470 520Z" stroke="#d4e9ff" strokeWidth="2.5" pathLength="1"/>
      <circle cx="555" cy="330" r="6" fill="#e3f0ff"/><circle cx="555" cy="330" r="15" stroke="#9acaff" opacity=".7"/>
      <path d="M555 330L655 136H780" stroke="#99bee9" strokeDasharray="3 5"/><text x="680" y="120" fill="#b9d3ee" fontSize="14" fontFamily="monospace">A CLOSER LOOK</text>
    </g>
  </svg><span className="ap-study-caption">Roof study / surface · edges · structure</span></div>;
}

const views=[
  {title:'Roof surface',image:photos.roof,alt:'Close view of weathered roof shingles',copy:'A closer look at shingles and roof materials. Photos document visible wear, movement, and damage.',points:['Roofing material','Visible condition','Areas to review']},
  {title:'Edges & transitions',image:photos.work,alt:'Roofer working along a tile roof',copy:'The inspection also covers roof edges and transitions. These details help complete the picture.',points:['Roof edges','Material transitions','Surrounding details']},
  {title:'The whole picture',image:photos.storm,alt:'An Arizona home below storm clouds',copy:'Review the photos together and ask questions. Your own roof, documented so you can choose the next step.',points:['Photo record','Findings explained','Your questions']}
];

function InspectionReport(){const [view,setView]=useState(0);return <section id="roof" className="ap-report ap-width"><Enter><h2>Less uncertainty.<br/><span>More to go on.</span></h2><p className="ap-lead">A roof inspection turns a concern into something you can see.</p></Enter><div className="ap-report-shell"><div className="ap-report-bar"><span><Camera size={19}/>Inside the inspection</span><small>Illustrative preview</small></div><div className="ap-report-layout"><div className="ap-report-photo"><img key={view} src={views[view].image} alt={views[view].alt} loading="lazy"/><span className="ap-crosshair" aria-hidden="true"/><div className="ap-image-caption"><span>0{view+1} / 03</span>{views[view].title}</div></div><div className="ap-report-side"><div className="ap-report-tabs" role="group" aria-label="Inspection views">{views.map((v,i)=><button key={v.title} aria-pressed={i===view} onClick={()=>setView(i)}><span>0{i+1}</span>{v.title}<ArrowUpRight size={18}/></button>)}</div><div className="ap-report-copy" aria-live="polite"><p>{views[view].copy}</p><ul>{views[view].points.map(p=><li key={p}><Check size={16}/>{p}</li>)}</ul></div></div></div><div className="ap-report-foot"><span>Photos of your roof. Findings you can review.</span><small>Images shown are illustrative, not an inspection result.</small></div></div></section>}

export default function Atmos({open}){
 const [menu,setMenu]=useState(false);
 const [step,setStep]=useState(0);
 return <div className="ap">
  <div className="ap-announcement">Storm damage inspections for Arizona homeowners <ArrowDown size={13}/></div>
  <header className="ap-header"><div className="ap-width"><Brand/><nav className={menu?'open':''} aria-label="Main navigation">{[['The inspection','#roof'],['How it works','#process'],['Questions','#questions']].map(([label,url])=><a key={url} href={url} onClick={()=>setMenu(false)}>{label}</a>)}</nav><Action open={open}/><button className="ap-menu" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label={menu?'Close menu':'Open menu'}>{menu?<X size={24}/>:<List size={24}/>}</button></div></header>
  <main>
   <section className="ap-hero"><div className="ap-hero-grid" aria-hidden="true"/><RoofStudy/><div className="ap-width ap-hero-content"><Enter><span className="ap-kicker"><span/> AFTER HAIL & WIND</span><h1>Know your roof.<br/><span>Own your next step.</span></h1><p>A no-cost inspection. Photos you can review.<br/>Straight answers before you decide.</p><div className="ap-hero-actions"><Action open={open}/><a href="#roof">Explore the inspection<ArrowDown size={17}/></a></div></Enter></div><div className="ap-hero-baseline ap-width"><span>QUEST STORM / ARIZONA</span><span>01 — SEE BEYOND THE SURFACE</span></div></section>
   <section className="ap-intro ap-width"><Enter className="ap-intro-copy"><h2>A storm raises questions.<br/><span>We start at the roof.</span></h2><p>You don’t have to figure it out from the driveway. We take a closer look and show you what we find.</p><a className="ap-text-link" href="#process">How the visit works<ArrowUpRight size={18}/></a></Enter><Enter className="ap-proof" delay={.1}><div className="ap-proof-cost"><span>$0</span><p>For your storm damage inspection</p><ArrowUpRight size={24}/></div><div className="ap-proof-photo"><Camera size={25}/><span>Your roof.<br/>In detail.</span><div className="ap-photo-fan" aria-hidden="true"><img src={photos.work} alt=""/><img src={photos.roof} alt=""/></div></div><div className="ap-proof-choice"><span>No obligation.</span><p>The next step stays yours.</p></div></Enter></section>
   <InspectionReport/>
   <section className="ap-photo-break"><img src={photos.storm} alt="Arizona home in the path of a passing storm" loading="lazy"/><div className="ap-width"><Enter><h2>The storm has passed.<br/>Your home still<br/>deserves attention.</h2><a href="#process">Start with a closer look <ArrowRight size={21}/></a></Enter><span>LOCAL TO QUEEN CREEK, ARIZONA</span></div></section>
   <section className="ap-process ap-width" id="process"><div className="ap-process-top"><span>How it works</span><Enter><h2>From the first look<br/><span>to your next decision.</span></h2><p>One visit. A record of what’s there. Time to understand it.</p></Enter></div><div className="ap-process-body"><div className="ap-process-tabs" role="group" aria-label="Inspection steps">{steps.map((s,i)=><button key={s.title} aria-pressed={step===i} onClick={()=>setStep(i)}><span>0{i+1}</span><div><h3>{s.title}</h3><p>{i===0?'A professional checks the roof.':i===1?'Review the photos together.':'Choose what happens next.'}</p></div><ArrowUpRight size={21}/></button>)}</div><div className="ap-process-feature"><img key={step} src={steps[step].image} alt={views[[1,0,2][step]].alt} loading="lazy"/><div aria-live="polite"><span>0{step+1}</span><p>{steps[step].body}</p></div></div></div></section>
   <section className="ap-decision ap-width"><Enter><h2>Get the facts.<br/><span>Then decide.</span></h2><p>If damage is found, you choose whether to discuss a repair claim with your insurer. An inspection does not commit you to a repair.</p></Enter><div><span>No cost to inspect.</span><span>No obligation to repair.</span><Action open={open} light/></div></section>
   <section className="ap-faq" id="questions"><div className="ap-width"><div className="ap-faq-heading"><p>A few things you might<br/>be wondering.</p><h2>Good questions.<br/><span>Straight answers.</span></h2></div><div>{questions.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<Plus size={20}/></summary><p>{a}</p></details>)}</div></div></section>
   <section className="ap-final ap-width"><Enter><h2>Let’s see<br/>what’s up there.</h2><p>Start with a no-cost roof inspection.</p><Action open={open} light/></Enter><div className="ap-final-lines" aria-hidden="true">{Array.from({length:18},(_,i)=><span key={i} style={{'--i':i}}/>)}</div><a href="tel:+16023996455">Or call 602-399-6455<ArrowUpRight size={19}/></a></section>
  </main>
  <footer className="ap-footer"><div className="ap-width"><div className="ap-footer-top"><Brand/><p>Roof inspections after hail and wind.<br/>Queen Creek, Arizona.</p><div><a href="#roof">The inspection</a><a href="#process">How it works</a><a href="#questions">Questions</a></div><div><a href="tel:+16023996455">602-399-6455</a><a href="./PHOTO-CREDITS.html">Photo credits ↗</a><a href="./index.html">All designs ↗</a></div></div><div className="ap-wordmark" aria-hidden="true">queststorm<span>↗</span></div><div className="ap-footer-bottom"><span>By Quest Roofing · ROC #355136</span><a href="#top">Back to top ↑</a></div></div></footer>
 </div>
}
