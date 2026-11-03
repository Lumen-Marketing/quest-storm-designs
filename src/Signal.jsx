import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,useReducedMotion,AnimatePresence} from 'motion/react';
import {ArrowUpRight,ArrowRight,ArrowDown,HouseLine,Camera,Check,Plus,Minus,List,X} from '@phosphor-icons/react';
import {photos,questions} from './content';
import RequestDialog from './RequestDialog';
import './alternatives.css';
import './signal.css';
import './signal-rework.css';

const focus=[
  {index:'01',title:'Surface',detail:'See the shingles and roof materials up close.',image:photos.roof,tag:'WHAT THE STREET CAN’T SHOW'},
  {index:'02',title:'Edges',detail:'Take a closer look at edges and transitions.',image:photos.work,tag:'LOOK BEYOND THE MIDDLE'},
  {index:'03',title:'Context',detail:'Connect the photos to the whole roof.',image:photos.storm,tag:'THE FULL PICTURE'}
];

function App(){
  const [menu,setMenu]=useState(false),[dialog,setDialog]=useState(false),[active,setActive]=useState(0),[faq,setFaq]=useState(0);
  const reduced=useReducedMotion();
  return <div className="signal">
    <a className="alt-skip" href="#signal-main">Skip to content</a>
    <header className="sg-nav">
      <a className="sg-brand" href="#top" aria-label="Quest Storm home"><HouseLine weight="bold"/><span>quest<strong>storm</strong><small>BY QUEST ROOFING</small></span></a>
      <nav className={menu?'open':''} aria-label="Main navigation"><a href="#look" onClick={()=>setMenu(false)}>The inspection</a><a href="#steps" onClick={()=>setMenu(false)}>How it works</a><a href="#answers" onClick={()=>setMenu(false)}>Questions</a></nav>
      <button className="sg-nav-cta" onClick={()=>setDialog(true)}>Get a roof check <ArrowUpRight size={17}/></button>
      <button className="sg-menu" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<List/>}</button>
    </header>
    <main id="signal-main">
      <section className="sg-hero" id="top" aria-labelledby="sg-title">
        <div className="sg-hero-copy">
          <p className="sg-eyebrow"><span/> ARIZONA / AFTER THE STORM</p>
          <motion.h1 id="sg-title" initial={reduced?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}>What happened<br/><em>above?</em></motion.h1>
          <p className="sg-lead">A storm passed through. The roof deserves a closer look. Get photos, a clear explanation, and room to decide what comes next.</p>
          <div className="sg-hero-actions"><button onClick={()=>setDialog(true)}>See your roof clearly <ArrowUpRight size={18}/></button><a href="#look">Explore the inspection <ArrowDown size={17}/></a></div>
          <p className="sg-hero-small">NO COST INSPECTION&nbsp;&nbsp; · &nbsp;&nbsp;NO OBLIGATION</p>
        </div>
        <div className="sg-stage" aria-label="Roof inspection preview">
          <div className="sg-orbit"/>
          <motion.div className="sg-stage-photo" initial={reduced?false:{opacity:0,y:30,rotate:2}} animate={{opacity:1,y:0,rotate:-4}} transition={{duration:.7,delay:.12}}><img src={photos.work} alt="Roofing professional working on a tile roof"/><span>01 / THE ROOF <ArrowUpRight size={17}/></span></motion.div>
          <motion.div className="sg-stage-note" initial={reduced?false:{opacity:0,y:36,rotate:-3}} animate={{opacity:1,y:0,rotate:5}} transition={{duration:.7,delay:.25}}><div><Camera size={20}/><span>INSPECTION<br/>NOTES</span></div><strong>Look.<br/>Photograph.<br/>Explain.</strong><small>QUEST STORM / 01</small></motion.div>
          <motion.div className="sg-stage-stamp" initial={reduced?false:{scale:.7,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.5,delay:.4}}><Check size={20} weight="bold"/><span>YOUR CALL<br/>ALWAYS</span></motion.div>
          <div className="sg-stage-caption">A clearer view starts up here <ArrowUpRight size={15}/></div>
        </div>
        <span className="sg-hero-index">01 / 05</span>
      </section>
      <div className="sg-ticker" aria-hidden="true"><div><span>THE STORM PASSED</span><b>✳</b><span>THE STORY IS ON THE ROOF</span><b>✳</b><span>LET’S TAKE A LOOK</span><b>✳</b><span>THE STORM PASSED</span><b>✳</b><span>THE STORY IS ON THE ROOF</span><b>✳</b></div></div>

      <section className="sg-intro" id="look" aria-labelledby="sg-look-title">
        <div className="sg-section-top"><span>THE INSPECTION / 01</span><span>SEE WHAT WE SEE</span></div>
        <div className="sg-intro-head"><h2 id="sg-look-title">Your roof,<br/><em>in focus.</em></h2><p>From the street, a roof can look completely fine. We document the details from up close so you can see its condition for yourself.</p></div>
        <div className="sg-focus-shell">
          <div className="sg-focus-photo"><AnimatePresence mode="wait"><motion.img key={active} src={focus[active].image} alt={focus[active].detail} initial={reduced?false:{opacity:0,scale:1.035}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:.35}}/></AnimatePresence><span className="sg-focus-ghost" aria-hidden="true">{focus[active].index}</span><span>{focus[active].tag}</span></div>
          <div className="sg-focus-control"><span className="sg-control-kicker">CHOOSE A CLOSER LOOK</span><div className="sg-focus-buttons">{focus.map((item,i)=><button key={item.title} className={active===i?'active':''} aria-pressed={active===i} onClick={()=>setActive(i)}><small>{item.index}</small><strong>{item.title}</strong><ArrowUpRight size={18}/></button>)}</div><p>{focus[active].detail}</p><small>Illustrative photography. Your inspection documents your own roof.</small></div>
        </div>
      </section>

      <section className="sg-proof" aria-label="Quest Roofing information"><span>LOCAL TO ARIZONA</span><strong>Queen Creek, AZ</strong><span>ROC #355136</span><strong>602-399-6455</strong></section>

      <section className="sg-steps" id="steps" aria-labelledby="sg-steps-title"><div className="sg-steps-heading"><span>THE PATH FORWARD / 02</span><h2 id="sg-steps-title">A clearer view.<br/>Then a choice.</h2><p>The inspection is a starting point. Each step gives you more information, while the decision remains yours.</p></div><div className="sg-steps-grid"><article className="sg-step-photo"><img src={photos.work} alt="Roofing professional inspecting tile roof" loading="lazy"/><div className="sg-step-top"><span>01 / THE INSPECTION</span><Camera size={25}/></div><div className="sg-step-body"><h3>We look.</h3><p>With your permission, we inspect the roof and photograph what we find.</p></div></article><article className="sg-step-paper"><div className="sg-step-top"><span>02 / THE PHOTOS</span><Camera size={25}/></div><span className="sg-step-number" aria-hidden="true">02</span><div className="sg-step-body"><h3>You see.</h3><p>Review the images and ask about the condition of your roof.</p></div></article><article className="sg-step-blue"><div className="sg-step-top"><span>03 / YOUR CALL</span><ArrowUpRight size={25}/></div><span className="sg-step-number" aria-hidden="true">03</span><div className="sg-step-body"><h3>You decide.</h3><p>If damage is found, choose whether to speak with your insurer about a repair claim.</p></div></article></div></section>

      <section className="sg-call" aria-labelledby="sg-call-title"><img className="sg-call-bg" src={photos.storm} alt="Arizona home under a storm sky" loading="lazy"/><div className="sg-call-copy"><span>03 / YOUR ROOF. YOUR CALL.</span><h2 id="sg-call-title">The storm is over.<br/><em>The choice is yours.</em></h2><p>No cost to inspect. No obligation to repair. Photos you can actually review.</p><button onClick={()=>setDialog(true)}>Request a roof check <ArrowUpRight size={18}/></button></div><div className="sg-call-note"><span>FIELD NOTE 03</span><strong>See what’s there.<br/>Then decide.</strong><ArrowUpRight size={23}/></div></section>

      <section className="sg-answers" id="answers" aria-labelledby="sg-answers-title"><div className="sg-answers-heading"><span>GOOD QUESTIONS / 04</span><h2 id="sg-answers-title">No guesswork.<br/><em>Just answers.</em></h2><p>Choose a question. See the answer before anyone climbs a ladder.</p><b aria-hidden="true">?</b></div><div className="sg-answers-board"><div className="sg-answers-list" role="group" aria-label="Common roof inspection questions">{questions.map(([q],i)=><button key={q} className={faq===i?'active':''} aria-pressed={faq===i} onClick={()=>setFaq(i)}><span>{String(i+1).padStart(2,'0')}</span><strong>{q}</strong><ArrowUpRight size={20}/></button>)}</div><div className="sg-answer-scene"><img src={photos.roof} alt="Close view of roof shingles" loading="lazy"/><div className="sg-answer-card" aria-live="polite"><span>ANSWER / {String(faq+1).padStart(2,'0')}</span><AnimatePresence mode="wait" initial={false}><motion.div key={faq} initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={reduced?{}:{opacity:0,y:-8}} transition={{duration:reduced?0:.2}}><h3>{questions[faq][0]}</h3><p>{questions[faq][1]}</p></motion.div></AnimatePresence><button onClick={()=>setDialog(true)}>Ask about your roof <ArrowUpRight size={17}/></button></div><span className="sg-answer-photo-label">ON THE ROOF / IN THE KNOW</span></div></div></section>
    </main>
    <footer className="sg-footer"><div className="sg-footer-waves" aria-hidden="true"><i/><i/><i/></div><div className="sg-footer-main"><div><span>QUEST STORM / ARIZONA</span><h2>Make the next<br/>move <em>clear.</em></h2><p>Start with a no-cost inspection. Keep the decision in your hands.</p></div><div className="sg-footer-ticket"><span>YOUR NEXT MOVE / 01</span><strong>Know your roof.</strong><p>Photos. Straight answers. No obligation.</p><button onClick={()=>setDialog(true)}>Get a roof check <ArrowUpRight size={18}/></button><a href="tel:+16023996455">Or call 602-399-6455</a></div></div><div className="sg-footer-bottom"><a className="sg-footer-brand" href="#top">quest<strong>storm</strong></a><span>BY QUEST ROOFING · ROC #355136</span><a href="./PHOTO-CREDITS.html">Photo credits</a><a href="./index.html">All five designs</a></div></footer>
    <RequestDialog open={dialog} onClose={()=>setDialog(false)}/>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
