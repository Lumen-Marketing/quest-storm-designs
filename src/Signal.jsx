import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ArrowDown, HouseLine, List, X, Camera, CheckCircle } from '@phosphor-icons/react';
import { photos, questions } from './content';
import RequestDialog from './RequestDialog';
import MotionWords from './MotionWords';
import './alternatives.css';
import './motion-words.css';
import '@fontsource-variable/instrument-sans';
import './signal-v3.css';

const views = [
  { label: 'From the street', image: photos.storm, alt: 'Arizona home beneath a storm sky', note: 'The whole house tells one part of the story.' },
  { label: 'On the roof', image: photos.work, alt: 'Roofing professional working on an Arizona tile roof', note: 'A closer look can reveal what the street cannot.' },
  { label: 'Up close', image: photos.roof, alt: 'Close view of weathered roof shingles', note: 'Photos make the condition easier to discuss.' }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [view, setView] = useState(0);
  const [faq, setFaq] = useState(0);
  const reduced = useReducedMotion();
  const reveal = reduced ? {} : { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .16 }, transition: { duration: .7, ease: [.22, 1, .36, 1] } };
  return <div className="signal sg-v3" id="top">
    <a className="alt-skip" href="#signal-main">Skip to content</a>
    <div className="sg-v3-sheet">
      <header className="sg-v3-nav">
        <a className="sg-v3-brand" href="#top" aria-label="Quest Storm home"><HouseLine weight="bold" size={25} /><span>quest<strong>storm</strong><small>BY QUEST ROOFING</small></span></a>
        <nav className={menu ? 'open' : ''} aria-label="Main navigation"><a href="#inspection" onClick={() => setMenu(false)}>The inspection</a><a href="#process" onClick={() => setMenu(false)}>How it works</a><a href="#questions" onClick={() => setMenu(false)}>Questions</a></nav>
        <button className="sg-v3-nav-cta" onClick={() => setDialog(true)}>Request a roof check <span><ArrowUpRight size={16} /></span></button>
        <button className="sg-v3-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={24} /> : <List size={24} />}</button>
      </header>
      <main id="signal-main">
        <section className="sg-v3-hero" aria-labelledby="sg-v3-title">
          <div className="sg-v3-hero-type">
            <span className="sg-v3-hero-index">QUEST STORM / ARIZONA</span>
            <h1 id="sg-v3-title"><MotionWords text="After the storm," /><br /><em><MotionWords text="see the whole story." delay={.12} /></em></h1>
            <p>A clearer look at your roof. Photos you can review. A next step you choose.</p>
          </div>
          <div className="sg-v3-hero-photo">
            <AnimatePresence mode="wait" initial={false}><motion.img key={view} src={views[view].image} alt={views[view].alt} fetchPriority={view === 0 ? 'high' : undefined} initial={reduced ? false : { opacity: .45, scale: 1.055 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: .15 }} transition={{ duration: reduced ? 0 : .55, ease: [.22, 1, .36, 1] }} /></AnimatePresence>
            <span className="sg-v3-photo-coordinate">33°14′ N<br />111°38′ W</span>
            <div className="sg-v3-hero-badge"><span>01 / 03</span><strong>What you see<br />from here is only<br /><em>the beginning.</em></strong><ArrowUpRight size={24} /></div>
            <div className="sg-v3-scene-picker" role="group" aria-label="Explore roof views">{views.map((scene, i) => <button key={scene.label} className={view === i ? 'active' : ''} aria-pressed={view === i} onClick={() => setView(i)}><img src={scene.image} alt="" /><span>{scene.label}</span></button>)}</div>
          </div>
          <div className="sg-v3-hero-floor"><span>Start with what you can see.</span><button onClick={() => setDialog(true)}>Get a no-cost roof check <span><ArrowUpRight size={18} /></span></button><a href="#inspection">See how it works <ArrowDown size={17} /></a></div>
        </section>

        <section className="sg-v3-inspection" id="inspection" aria-labelledby="sg-v3-inspection-title">
          <motion.div className="sg-v3-section-intro" {...reveal}><h2 id="sg-v3-inspection-title">The street<br />is <em>one angle.</em></h2><p>Hail and wind can leave details you cannot confirm from the driveway. We look closer and show you what we find.</p></motion.div>
          <div className="sg-v3-inspection-stage">
            <div className="sg-v3-detail-photo"><AnimatePresence mode="wait" initial={false}><motion.img key={`detail-${view}`} src={views[view].image} alt={views[view].alt} loading="lazy" initial={reduced ? false : { opacity: .4, scale: 1.045 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .45 }} /></AnimatePresence><span>PHOTO VIEW / 0{view + 1}</span></div>
            <div className="sg-v3-detail-aside"><div className="sg-v3-detail-mark" aria-hidden="true">↗</div><span>THE CLOSER LOOK</span><h3>{views[view].label}.</h3><p>{views[view].note}</p><div className="sg-v3-detail-tabs" role="group" aria-label="Choose an inspection view">{views.map((scene, i) => <button key={scene.label} className={view === i ? 'active' : ''} aria-pressed={view === i} onClick={() => setView(i)}><span>0{i + 1}</span>{scene.label}<ArrowUpRight size={17} /></button>)}</div><small>Illustrative photography. Your inspection documents your own roof.</small></div>
            <span className="sg-v3-inspection-stamp">LOOK<br />CLOSER <ArrowUpRight size={26} /></span>
          </div>
        </section>

        <div className="sg-v3-info-strip" aria-label="Quest Roofing details"><span>QUEEN CREEK, ARIZONA</span><span>ROC #355136</span><span>NO-COST ROOF INSPECTION</span><a href="tel:+16023996455">602-399-6455 <ArrowUpRight size={16} /></a></div>

        <section className="sg-v3-process" id="process" aria-labelledby="sg-v3-process-title">
          <div className="sg-v3-process-head"><motion.h2 id="sg-v3-process-title" {...reveal}>A roof check,<br /><em>without the guesswork.</em></motion.h2><p>One visit gives you more to work with. The decision stays with you.</p></div>
          <div className="sg-v3-process-photo"><img src={photos.work} alt="Roofing professional inspecting a tile roof" loading="lazy" /><span>THE VIEW FROM UP THERE</span></div>
          <div className="sg-v3-process-flow">
            <motion.article {...reveal}><span>01</span><div><h3>We look.</h3><p>With your permission, a roofing professional checks the roof and documents its condition.</p></div><Camera size={28} weight="light" /></motion.article>
            <motion.article {...reveal}><span>02</span><div><h3>You see.</h3><p>Look through the photos and ask questions about what was found.</p></div><ArrowRight size={28} weight="light" /></motion.article>
            <motion.article {...reveal}><span>03</span><div><h3>You decide.</h3><p>If damage is found, you choose whether to speak with your insurer about a repair claim.</p></div><CheckCircle size={28} weight="light" /></motion.article>
          </div>
        </section>

        <section className="sg-v3-choice" aria-labelledby="sg-v3-choice-title"><img src={photos.storm} alt="Arizona home beneath a storm sky" loading="lazy" /><div className="sg-v3-choice-copy"><span>THE NEXT STEP IS YOURS</span><h2 id="sg-v3-choice-title">Your roof.<br /><em>Your call.</em></h2><p>The inspection does not commit you to a repair. It gives you a clearer picture before you decide what to do next.</p><button onClick={() => setDialog(true)}>Let’s take a look <span><ArrowUpRight size={18} /></span></button></div><div className="sg-v3-choice-arc" aria-hidden="true" /></section>

        <section className="sg-v3-questions" id="questions" aria-labelledby="sg-v3-questions-title"><div className="sg-v3-questions-head"><h2 id="sg-v3-questions-title">Good questions.<br /><em>Straight answers.</em></h2><p>Choose a question to see the answer.</p></div><div className="sg-v3-question-layout"><div className="sg-v3-question-nav" role="group" aria-label="Roof inspection questions">{questions.map(([q], i) => <button key={q} className={faq === i ? 'active' : ''} aria-pressed={faq === i} onClick={() => setFaq(i)}><span>0{i + 1}</span><strong>{q}</strong><ArrowUpRight size={19} /></button>)}</div><div className="sg-v3-question-answer"><AnimatePresence mode="wait" initial={false}><motion.div key={faq} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : .24 }}><span>ANSWER / 0{faq + 1}</span><h3>{questions[faq][0]}</h3><p>{questions[faq][1]}</p></motion.div></AnimatePresence><button onClick={() => setDialog(true)}>Ask about your roof <ArrowUpRight size={18} /></button></div></div></section>
      </main>
      <footer className="sg-v3-footer"><div className="sg-v3-footer-main"><span>QUEST STORM / ARIZONA</span><h2>Know your roof.<br /><em>Then decide.</em></h2><div><p>No-cost inspection. Photos of the findings. No obligation to repair.</p><button onClick={() => setDialog(true)}>Get a roof check <span><ArrowUpRight size={18} /></span></button></div></div><div className="sg-v3-footer-bottom"><a className="sg-v3-brand" href="#top">quest<strong>storm</strong></a><span>BY QUEST ROOFING · ROC #355136</span><a href="./PHOTO-CREDITS.html">Photo credits</a><a href="./index.html">All five designs</a></div></footer>
    </div>
    <RequestDialog open={dialog} onClose={() => setDialog(false)} />
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
