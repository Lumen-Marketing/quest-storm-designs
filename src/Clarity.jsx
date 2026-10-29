import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ArrowUpRight,ArrowRight,ArrowDown,HouseLine,List,X} from '@phosphor-icons/react';
import ScrollStack,{ScrollStackItem} from './components/ScrollStack';
import RequestDialog from './RequestDialog';
import {photos,steps,details,questions} from './content';
import './alternatives.css';
import './clarity.css';
gsap.registerPlugin(ScrollTrigger);

function SplitText({text,as:Tag='h2',className=''}) {
  const ref=useRef(null);
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const chars=ref.current?.querySelectorAll('.qc-char');
    const tween=gsap.fromTo(chars,{y:'0.8em',opacity:0},{y:0,opacity:1,duration:.85,stagger:.025,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 88%',once:true}});
    return()=>{tween.scrollTrigger?.kill();tween.kill()};
  },[text]);
  return <Tag ref={ref} className={className} aria-label={text}>{text.split(/(\s+)/).map((word,i)=>/^\s+$/.test(word)?' ':<span className="qc-word" aria-hidden="true" key={i}>{[...word].map((ch,j)=><span className="qc-char" key={j}>{ch}</span>)}</span>)}</Tag>;
}
function LineSidebar({items,active,onItemClick}) {
  const [pointer,setPointer]=useState(-1000);
  return <nav className="qc-sidebar" aria-label="Page sections" onMouseMove={e=>setPointer(e.clientY)} onMouseLeave={()=>setPointer(-1000)}>{items.map((item,i)=><a key={item.label} href={'#'+item.id} onClick={()=>onItemClick(i)} className={active===i?'active':''} style={{'--shift':`${Math.max(0,1-Math.abs(pointer-(document.querySelectorAll('.qc-sidebar a')[i]?.getBoundingClientRect().top||0)-12)/100)*30}px`}}><span className="qc-index">0{i+1}</span><span className="qc-marker"/><span>{item.label}</span></a>)}</nav>;
}
function TextLoop({text}) {return <div className="qc-loop" aria-label={text}><div>{Array.from({length:6},(_,i)=><span key={i}>{text}<b>✦</b></span>)}</div></div>}
function App(){
  const [contact,setContact]=useState(false);
  const [menu,setMenu]=useState(false);
  const [active,setActive]=useState(0);
  const items=[{label:'Overview',id:'overview'},{label:'The roof',id:'roof'},{label:'The process',id:'process'},{label:'Your choice',id:'choice'},{label:'Questions',id:'questions'}];
  useEffect(()=>{const observers=items.map((it,i)=>{const node=document.getElementById(it.id);const ob=new IntersectionObserver(es=>{if(es[0]?.isIntersecting)setActive(i)},{rootMargin:'-30% 0px -55% 0px'});if(node)ob.observe(node);return ob});return()=>observers.forEach(o=>o.disconnect())},[]);
  const inspect=()=>setContact(true);
  return <div className="clarity">
    <a className="alt-skip" href="#overview">Skip to content</a>
    <header className="qc-header"><a className="qc-brand" href="#overview"><HouseLine weight="fill" size={23}/><span>quest<span>storm</span></span></a><nav className={menu?'open':''}><a href="#roof" onClick={()=>setMenu(false)}>The roof</a><a href="#process" onClick={()=>setMenu(false)}>How it works</a><a href="#questions" onClick={()=>setMenu(false)}>Questions</a></nav><button className="qc-header-cta" onClick={inspect}>Request an inspection <ArrowUpRight size={17}/></button><button className="qc-menu" aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<List/>}</button></header>
    <LineSidebar items={items} active={active} onItemClick={setActive}/>
    <main>
      <section className="qc-hero" id="overview"><div className="qc-hero-grid"><div className="qc-hero-copy"><p className="qc-kicker"><span className="qc-spark">✳</span> ARIZONA / STORM RESPONSE</p><SplitText as="h1" text="Clarity starts at the roof."/><p className="qc-hero-lede">After hail or wind, get a closer look at what happened. See the photos. Understand your options. Decide what happens next.</p><div className="qc-hero-actions"><button onClick={inspect}>Get a no-cost roof check <ArrowUpRight size={19}/></button><a href="#roof">Explore the inspection <ArrowDown size={18}/></a></div><div className="qc-hero-small"><span>01 / 04</span><span>REAL PHOTOS. CLEAR ANSWERS.</span></div></div><div className="qc-hero-photo"><img src={photos.storm} alt="Arizona home beneath a storm sky"/><div className="qc-photo-tag">FROM THE STREET <span>↗</span></div><div className="qc-photo-bottom"><span>WHAT YOU SEE</span><strong>is only the beginning.</strong></div></div></div></section>
      <TextLoop text="LOOK CLOSER · KNOW MORE · MOVE FORWARD"/>
      <section className="qc-roof qc-section" id="roof"><div className="qc-section-head"><p className="qc-eyebrow">01 / THE INSPECTION</p><SplitText text="A clear view changes everything."/></div><div className="qc-roof-layout"><div className="qc-roof-image"><img src={photos.roof} alt="Close view of storm-damaged shingles"/><span>ON THE ROOF / DETAIL 01</span></div><div className="qc-roof-copy"><span className="qc-outline-index">01</span><p>A roof can look fine from the driveway. A closer inspection helps you see what the street cannot.</p><div>{details.map((d,i)=><article key={d.title}><span>0{i+1}</span><div><h3>{d.title}</h3><p>{d.text}</p></div><ArrowUpRight size={17}/></article>)}</div></div></div></section>
      <section className="qc-process" id="process"><div className="qc-section qc-process-inner"><p className="qc-eyebrow">02 / THE PROCESS</p><div className="qc-process-intro"><SplitText text="Three steps. One clearer picture."/><p>From the first look to your next decision, we keep the story simple and visible.</p></div><div className="qc-stack-wrap"><ScrollStack itemDistance={64} itemStackDistance={18} stackPosition="12%" smoothScroll={false} dimAmount={.12}>{steps.map((step,i)=><ScrollStackItem key={step.title} itemClassName="qc-stack-card"><div className="qc-stack-copy"><span>0{i+1} / 03</span><h3>{step.title}</h3><h4>{step.subtitle}</h4><p>{step.body}</p></div><img src={step.image} alt={step.subtitle}/></ScrollStackItem>)}</ScrollStack></div></div></section>
      <section className="qc-choice qc-section" id="choice"><div className="qc-choice-image"><img src={photos.work} alt="Roofing professional inspecting an Arizona roof"/></div><div className="qc-choice-copy"><p className="qc-eyebrow">03 / YOUR CHOICE</p><SplitText text="Your roof. Your call."/><p>If damage is found, the next step belongs to you. You can review the inspection photos and decide whether to speak with your insurer.</p><button onClick={inspect}>Start with an inspection <ArrowUpRight size={20}/></button></div></section>
      <section className="qc-questions qc-section" id="questions"><div><p className="qc-eyebrow">04 / GOOD QUESTIONS</p><SplitText text="Straight answers."/><p>No-cost. No obligation. A clearer way to understand your roof.</p></div><div className="qc-question-list">{questions.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className="qc-final"><div><p>QUEST STORM / ARIZONA</p><SplitText text="See clearly. Decide confidently."/></div><button onClick={inspect}>Request a roof check <ArrowUpRight size={21}/></button></section>
    </main><footer className="qc-footer"><span>quest storm by Quest Roofing</span><a href="./index.html">All four designs</a><a href="./PHOTO-CREDITS.html">Photography credits</a><a href="tel:+16023996455">602-399-6455</a></footer><RequestDialog open={contact} onClose={()=>setContact(false)}/>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
