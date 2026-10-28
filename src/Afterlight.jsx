import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,AnimatePresence,useReducedMotion} from 'motion/react';
import {ArrowUpRight,ArrowRight,ArrowLeft,Plus,Minus,X,List,HouseLine} from '@phosphor-icons/react';
import {photos,details,steps,questions,choice,ease} from './content';
import RequestDialog from './RequestDialog';
import './alternatives.css';
import './afterlight.css';

function Resolve({children,className=''}) {
  const reduce=useReducedMotion();
  return <motion.div className={className} initial={reduce?false:{opacity:0,y:24,filter:'blur(5px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:true,amount:.12}} transition={{duration:.7,ease}}>{children}</motion.div>;
}
function App() {
  const [menu,setMenu]=useState(false);
  const [contact,setContact]=useState(false);
  const [hero,setHero]=useState(0);
  const [detail,setDetail]=useState(0);
  const [faq,setFaq]=useState(null);
  const [step,setStep]=useState(0);
  const rail=useRef(null);
  const reduce=useReducedMotion();
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries)if(entry.isIntersecting)setStep(Number(entry.target.dataset.step));
    },{root:rail.current,threshold:.7});
    for(const child of rail.current.children)observer.observe(child);
    return()=>observer.disconnect();
  },[]);
  const inspect=()=>setContact(true);
  const heroPhotos=[{src:photos.work,label:'The roof',alt:'Roofing professional working on a home in Phoenix'},{src:photos.roof,label:'The detail',alt:'A close view of storm-damaged roof shingles'},{src:photos.storm,label:'The storm',alt:'Arizona home under heavy storm clouds'}];
  function selectStep(index) {
    const target=rail.current.children[index];
    rail.current.scrollTo({left:target.offsetLeft-rail.current.offsetLeft,behavior:reduce?'instant':'smooth'});
    setStep(index);
  }
  return <div className="afterlight" id="top">
    <a className="alt-skip" href="#main">Skip to content</a>
    <header className="al-header">
      <a className="al-logo" href="#top" aria-label="Quest Storm home"><HouseLine weight="bold" size={26}/><span>QUEST<br/>STORM</span></a>
      <nav className={menu?'open':''} aria-label="Main navigation">{[['The inspection','roof'],['How it works','process'],['Questions','questions']].map(([text,id])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{text}</a>)}</nav>
      <a className="al-call" href="tel:+16023996455">602-399-6455<ArrowUpRight size={18}/></a>
      <button className="alt-menu" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X size={24}/>:<List size={24}/>}</button>
    </header>
    <main id="main">
      <section className="al-orbit-hero">
        <motion.h1 initial={reduce?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.75,ease}}>STORM HIT <span>HOME?</span></motion.h1>
        <div className="al-orbits">
          <div className="al-orange-orbit"><ArrowUpRight size={38}/><p>A closer look.<br/>A clearer<br/>next step.</p><span>YOUR ROOF.<br/>YOUR PEACE OF MIND.</span></div>
          <motion.div className="al-detail-orbit" initial={reduce?false:{opacity:0,x:80}} animate={{opacity:1,x:0}} transition={{duration:1,ease}}><img src={photos.roof} alt="Close view of roof shingles"/></motion.div>
          <motion.div className="al-front-orbit" initial={reduce?false:{opacity:0,x:120}} animate={{opacity:1,x:0}} transition={{duration:1,delay:.12,ease}}><AnimatePresence mode="sync" initial={false}><motion.img key={hero} src={heroPhotos[hero].src} alt={heroPhotos[hero].alt} initial={reduce?false:{opacity:0,scale:1.07}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.6,ease}}/></AnimatePresence></motion.div>
          <span className="al-orbit-word" aria-hidden="true">Look closer.</span>
          <button className="al-orbit-cta" onClick={inspect}>Get a roof check<ArrowUpRight size={22}/></button>
        </div>
        <div className="al-orbit-footer"><p>For Arizona homeowners after hail and wind.<br/><span>No cost. No obligation.</span></p><div className="al-orbit-select" role="group" aria-label="Hero photography">{heroPhotos.map((p,i)=><button key={p.label} aria-pressed={hero===i} onClick={()=>setHero(i)}>{p.label}<ArrowUpRight size={16}/></button>)}</div></div>
      </section>
      <section className="al-roof al-section" id="roof">
        <Resolve className="al-roof-heading"><h2>The ground only tells<br/><span>half the story.</span></h2><p>A roof can look fine from the driveway. An inspection replaces the guesswork with a closer look.</p></Resolve>
        <div className="al-photo-accordion" aria-label="Explore inspection areas">{details.map((d,i)=><button key={d.title} onClick={()=>setDetail(i)} className={detail===i?'active':''} aria-expanded={detail===i} aria-controls={'al-area-'+i}>
          <img src={photos.roof} alt="" style={{objectPosition:[20,60,85][i]+'% center'}} loading="lazy"/>
          <span className="al-panel-top"><span>0{i+1}</span>{detail===i?<Minus size={24}/>:<Plus size={24}/>}</span>
          <span className="al-panel-title">{d.title}</span>
          <span id={'al-area-'+i} className="al-panel-description" hidden={detail!==i}>{d.text}</span>
        </button>)}</div>
        <p className="al-photo-caption">Illustrative photograph. Your inspection documents your own roof.</p>
      </section>
      <section className="al-process al-section" id="process">
        <div className="al-process-head"><Resolve><h2>A clearer picture.<br/>One step at a time.</h2><p>From “what now?” to knowing where you stand. Here is how the inspection works.</p></Resolve><div className="al-rail-controls"><button aria-label="Previous inspection step" disabled={step===0} onClick={()=>selectStep(step-1)}><ArrowLeft size={24}/></button><span>0{step+1} / 03</span><button aria-label="Next inspection step" disabled={step===2} onClick={()=>selectStep(step+1)}><ArrowRight size={24}/></button></div></div>
        <div className="al-process-rail" ref={rail}>{steps.map((s,i)=><article className="al-process-frame" key={s.title} data-step={i}><div className="al-frame-photo"><img src={s.image} alt={s.subtitle} loading="lazy"/><span>0{i+1}</span></div><div className="al-frame-copy"><h3>{s.title}</h3><strong>{s.subtitle}</strong><p>{s.body}</p></div></article>)}</div>
      </section>
      <section className="al-choice al-section"><Resolve><h2>Your roof.<br/><span>Your decision.</span></h2></Resolve><div><p>{choice}</p><button className="al-text-link" onClick={inspect}>LET’S TAKE A LOOK<ArrowUpRight size={28}/></button></div></section>
      <section className="al-faq al-section" id="questions">
        <div className="al-faq-photo"><img src={photos.storm} alt="Storm clouds above a home in Arizona" loading="lazy"/><h2>Good questions.<br/>Straight answers.</h2><p>Ask away. You should feel clear<br/>about the next step.</p></div>
        <div className="al-faq-questions">{questions.map(([q,a],i)=><article key={q}><button aria-expanded={faq===i} aria-controls={'al-answer-'+i} onClick={()=>setFaq(faq===i?null:i)}><span>0{i+1}</span><h3>{q}</h3>{faq===i?<Minus size={22}/>:<Plus size={22}/>}</button><AnimatePresence initial={false}>{faq===i&&<motion.div id={'al-answer-'+i} initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} transition={{duration:reduce?0:.24,ease}}><p>{a}</p></motion.div>}</AnimatePresence></article>)}</div>
      </section>
      <section className="al-contact al-section"><div><h2>Start with<br/>the <span>roof.</span></h2><p>A no-cost inspection.<br/>A clearer picture of what comes next.</p></div><button className="al-contact-circle" onClick={inspect}><ArrowUpRight size={60}/><span>REQUEST AN<br/>INSPECTION</span></button></section>
    </main>
    <footer className="al-footer"><a href="#top" className="al-footer-logo">QUEST STORM</a><div><span>Quest Storm by Quest Roofing</span><a href="tel:+16023996455">602-399-6455<ArrowUpRight size={16}/></a></div><div><a href="./PHOTO-CREDITS.html">Photography credits<ArrowUpRight size={16}/></a><a href="./index.html">All three designs<ArrowUpRight size={16}/></a></div></footer>
    <RequestDialog open={contact} onClose={()=>setContact(false)}/>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
