import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,AnimatePresence,useReducedMotion} from 'motion/react';
import {ArrowUpRight,ArrowRight,ArrowLeft,ArrowDown,Plus,Minus,X,List,HouseLine,MagnifyingGlass,Pause,Play} from '@phosphor-icons/react';
import {photos,details,steps,questions,choice,ease} from './content';
import RequestDialog from './RequestDialog';
import Prism from './components/Prism';
import './alternatives.css';
import './fieldwork.css';

function Reveal({children,className=''}) {
  const reduce=useReducedMotion();
  return <motion.div className={className} initial={reduce?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.65,ease}}>{children}</motion.div>;
}
function Words({lines}) {
  const reduce=useReducedMotion();
  return <motion.h2 initial={reduce?false:'hidden'} whileInView="visible" viewport={{once:true,amount:.3}} variants={{visible:{transition:{staggerChildren:.035}}}}>{lines.map((line,i)=><React.Fragment key={line}>{i>0&&<br/>}{line.split(' ').map((word,j)=><React.Fragment key={j}><motion.span style={{display:'inline-block'}} variants={{hidden:{opacity:0,y:12,filter:'blur(8px)'},visible:{opacity:1,y:0,filter:'blur(0px)',transition:{duration:.6,ease}}}}>{word}</motion.span>{' '}</React.Fragment>)}</React.Fragment>)}</motion.h2>;
}
function App() {
  const [menu,setMenu]=useState(false);
  const [contact,setContact]=useState(false);
  const [detail,setDetail]=useState(0);
  const [lens,setLens]=useState(44);
  const [step,setStep]=useState(0);
  const [faq,setFaq]=useState(0);
  const [view,setView]=useState(57);
  const [paused,setPaused]=useState(false);
  const reduce=useReducedMotion();
  const inspect=()=>setContact(true);
  return <div className="fieldwork" id="top">
    <a className="alt-skip" href="#main">Skip to content</a>
    <header className="fw-header">
      <a className="fw-logo" href="#top" aria-label="Quest Storm home"><HouseLine weight="bold"/><span>quest storm<span>BY QUEST ROOFING</span></span></a>
      <nav className={menu?'open':''} aria-label="Main navigation">{[['The inspection','roof'],['How it works','process'],['Questions','questions']].map(([text,id])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{text}</a>)}</nav>
      <button className="fw-header-action" onClick={inspect}>Get a roof check<ArrowUpRight size={18}/></button>
      <button className="alt-menu" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X size={24}/>:<List size={24}/>}</button>
    </header>
    <main id="main">
      <section className="fw-dnd-hero">
        <Prism className="fw-prism" animationType="rotate" timeScale={0.5} height={3.5} baseWidth={5.5} scale={3.6} hueShift={0} colorFrequency={1} colors={['#07182e','#145dc2','#75b8ff','#f3f9ff']} glow={1} interactive={false} paused={paused}/>
        <div className="fw-dnd-copy"><motion.h1 initial={reduce?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,ease}}>After the storm.<br/><span>Start with the roof.</span></motion.h1><p>A closer look. A clearer next step.<br/>No-cost roof inspections for Arizona homeowners after hail and wind.</p><div className="fw-dnd-actions"><button onClick={inspect}>Get a roof check<ArrowUpRight size={20}/></button><a href="#roof">See what we look for<ArrowDown size={20}/></a></div><button className="fw-motion-control" aria-label={paused?'Play background motion':'Pause background motion'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={14}/>:<Pause size={14}/>}<span>{paused?'Play motion':'Pause motion'}</span></button></div>
        <div className="fw-street-roof">
          <img src={photos.roof} className="fw-roof-view" alt="A close view of storm-damaged roof shingles"/>
          <div className="fw-street-view" style={{clipPath:'inset(0 '+(100-view)+'% 0 0)'}}><img src={photos.storm} alt="An Arizona home viewed from the ground under a storm sky"/><span>Looks fine<br/>from here?</span></div>
          <div className="fw-view-labels"><span>FROM THE STREET</span><span>ON THE ROOF</span></div>
          <div className="fw-reveal-line" style={{left:view+'%'}}><span><ArrowLeft size={21}/><ArrowRight size={21}/></span></div>
          <input className="fw-view-range" aria-label="Reveal the street view and roof view" type="range" min="12" max="88" value={view} onChange={e=>setView(Number(e.target.value))}/>
          <span className="fw-drag-label" aria-hidden="true">DRAG TO LOOK CLOSER</span>
          <div className="fw-reveal-caption">Two views.<br/><strong>A fuller picture.</strong></div>
        </div>
      </section>
      <section className="fw-study fw-pad" id="roof">
        <Reveal className="fw-study-heading"><Words lines={['The ground only tells','half the story.']}/><p>A roof can look fine from the driveway. An inspection replaces the guesswork with a closer look.</p></Reveal>
        <div className="fw-inspection">
          <div className="fw-lens-photo">
            <img src={photos.roof} alt="Example of storm-damaged roof shingles"/>
            <div className="fw-lens-window" style={{left:lens+'%'}} aria-hidden="true"><img src={photos.roof} alt="" style={{objectPosition:lens+'% center'}}/></div>
            <div className="fw-lens-bar"><MagnifyingGlass size={20}/><label htmlFor="inspection-window">Move the inspection window</label><input id="inspection-window" type="range" min="20" max="80" value={lens} onChange={e=>setLens(Number(e.target.value))}/></div>
          </div>
          <div className="fw-findings">
            <div className="fw-detail-tabs" role="tablist" aria-label="Inspection areas">{details.map((d,i)=><button key={d.title} id={'area-tab-'+i} role="tab" aria-selected={detail===i} aria-controls="area-description" onClick={()=>{setDetail(i);setLens([35,68,50][i])}}><span>0{i+1}</span>{d.title}<ArrowRight size={20}/></button>)}</div>
            <div id="area-description" role="tabpanel" aria-labelledby={'area-tab-'+detail}><AnimatePresence mode="wait" initial={false}><motion.p key={detail} initial={reduce?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.18}}>{details[detail].text}</motion.p></AnimatePresence></div>
            <small>Illustrative photograph. Your inspection documents your own roof.</small>
          </div>
        </div>
      </section>
      <section className="fw-process fw-pad" id="process">
        <Reveal className="fw-process-title"><Words lines={['A clearer picture.','One step at a time.']}/><p>From “what now?” to knowing where you stand. Here is how the inspection works.</p></Reveal>
        <div className="fw-stepper">
          <div className="fw-step-nav" role="tablist" aria-label="Inspection steps">{steps.map((s,i)=><button key={s.title} id={'step-tab-'+i} role="tab" aria-selected={step===i} aria-controls="inspection-step" onClick={()=>setStep(i)}><span>0{i+1}</span><strong>{s.title}</strong>{step===i&&<motion.i layoutId="step-underline" transition={{duration:.25,ease}}/>}</button>)}</div>
          <div className="fw-step-stage" id="inspection-step" role="tabpanel" aria-labelledby={'step-tab-'+step}>
            <div className="fw-step-image"><AnimatePresence mode="sync" initial={false}><motion.img key={step} src={steps[step].image} alt={steps[step].subtitle} loading="lazy" initial={reduce?false:{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-25}} transition={{duration:.45,ease}}/></AnimatePresence></div>
            <div className="fw-step-description"><span className="fw-big-number">0{step+1}</span><AnimatePresence mode="wait" initial={false}><motion.div key={step} initial={reduce?false:{opacity:0,x:16}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-16}} transition={{duration:.2}}><h3>{steps[step].subtitle}</h3><p>{steps[step].body}</p></motion.div></AnimatePresence><div className="fw-step-arrows"><button aria-label="Previous inspection step" disabled={step===0} onClick={()=>setStep(Math.max(0,step-1))}><ArrowLeft size={23}/></button><span>0{step+1} / 03</span><button aria-label="Next inspection step" disabled={step===2} onClick={()=>setStep(Math.min(2,step+1))}><ArrowRight size={23}/></button></div></div>
          </div>
        </div>
      </section>
      <section className="fw-choice fw-pad">
        <div className="fw-choice-photo"><img src={photos.storm} alt="An Arizona home beneath storm clouds" loading="lazy"/></div>
        <Reveal className="fw-choice-copy"><Words lines={['Your roof.','Your decision.']}/><p>{choice}</p><button className="fw-action fw-action-light" onClick={inspect}>Let’s take a look<ArrowUpRight size={23}/></button></Reveal>
      </section>
      <section className="fw-faq fw-pad" id="questions">
        <Reveal><h2>Good questions.<br/>Straight answers.</h2><p>Ask away. You should feel clear<br/>about the next step.</p></Reveal>
        <div className="fw-question-grid">{questions.map(([q,a],i)=><article key={q} className={faq===i?'expanded':''}><button aria-expanded={faq===i} aria-controls={'fw-answer-'+i} onClick={()=>setFaq(faq===i?null:i)}><h3>{q}</h3>{faq===i?<Minus size={22}/>:<Plus size={22}/>}</button><AnimatePresence initial={false}>{faq===i&&<motion.div id={'fw-answer-'+i} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduce?0:.24,ease}}><p>{a}</p></motion.div>}</AnimatePresence></article>)}</div>
      </section>
      <section className="fw-contact fw-pad"><div><h2>Start with<br/>the roof.</h2><p>A no-cost inspection.<br/>A clearer picture of what comes next.</p></div><div className="fw-contact-links"><button onClick={inspect}>Request an inspection<ArrowUpRight size={32}/></button><a href="tel:+16023996455">602-399-6455<ArrowUpRight size={25}/></a></div></section>
    </main>
    <footer className="fw-footer"><a className="fw-footer-brand" href="#top">quest storm</a><span>Quest Storm by Quest Roofing</span><a href="./PHOTO-CREDITS.html">Photography credits<ArrowUpRight size={16}/></a><a href="./index.html">All four designs<ArrowUpRight size={16}/></a></footer>
    <RequestDialog open={contact} onClose={()=>setContact(false)}/>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
