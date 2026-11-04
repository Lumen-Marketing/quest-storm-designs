import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ArrowDown, ArrowLeft, Plus, Minus, X, List, HouseLine, Camera } from '@phosphor-icons/react';
import { photos, details, steps, questions, choice, ease } from './content';
import RequestDialog from './RequestDialog';
import MotionWords from './MotionWords';
import './alternatives.css';
import './fieldwork-clean.css';
import './fieldwork-rework.css';
import './motion-words.css';
import './fieldwork-next.css';
import '@fontsource-variable/instrument-sans';
import './fieldwork-editorial.css';

const fieldViews = [
  { image: photos.storm, alt: 'Arizona home beneath a storm sky', title: 'From the street', note: 'From the street' },
  { image: photos.work, alt: 'Roofing professional inspecting a tile roof', title: 'On the roof', note: 'On the roof' },
  { image: photos.roof, alt: 'Close view of roof shingles', title: 'Up close', note: 'Up close' }
];

function Reveal({ children, className = '' }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, ease }}>{children}</motion.div>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const [view, setView] = useState(54);
  const [step, setStep] = useState(0);
  const [faq, setFaq] = useState(null);
  const [heroView, setHeroView] = useState(0);
  const reduced = useReducedMotion();
  const inspect = () => setContact(true);

  return <div className="fieldwork" id="top">
    <a className="alt-skip" href="#main">Skip to content</a>
    <header className="fw-header">
      <a className="fw-logo" href="#top" aria-label="Quest Storm home"><HouseLine weight="bold" /><span>quest<span>storm</span><small>BY QUEST ROOFING</small></span></a>
      <nav className={menu ? 'open' : ''} aria-label="Main navigation">
        <a href="#roof" onClick={() => setMenu(false)}>The roof</a>
        <a href="#process" onClick={() => setMenu(false)}>How it works</a>
        <a href="#questions" onClick={() => setMenu(false)}>Questions</a>
      </nav>
      <button className="fw-header-action" onClick={inspect}>Get a roof check <ArrowUpRight size={17} /></button>
      <button className="alt-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={24} /> : <List size={24} />}</button>
    </header>

    <main id="main">
      <section className="fw-hero" aria-labelledby="fw-title">
        <div className="fw-hero-intro">
          <div><span className="fw-hero-kicker"><span className="fw-dot" /> For Arizona homeowners after hail or wind</span>
            <h1 id="fw-title"><MotionWords text="After the storm," /><br /><em><MotionWords text="look closer." delay={.14} /></em></h1></div>
          <div className="fw-hero-intro-side"><p>The roof can look fine from the street. We’ll take a closer look, show you the photos, and explain what we found.</p><button onClick={inspect}>Get a no-cost roof check <ArrowUpRight size={20} /></button><small>No cost. No obligation.</small></div>
        </div>
        <div className="fw-hero-gallery">
          <AnimatePresence mode="wait" initial={false}><motion.img key={heroView} src={fieldViews[heroView].image} alt={fieldViews[heroView].alt} className="fw-hero-feature" fetchPriority={heroView === 0 ? 'high' : undefined} initial={reduced ? false : { opacity: .35, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .45, ease }} /></AnimatePresence>
          <div className="fw-hero-gallery-shade" />
          <div className="fw-hero-gallery-top"><span>{fieldViews[heroView].note}</span></div>
          <div className="fw-hero-gallery-bottom"><strong>See beyond<br /><em>the street.</em></strong><div className="fw-hero-view-picker" role="group" aria-label="Explore roof views">{fieldViews.map((item, index) => <button key={item.title} className={heroView === index ? 'active' : ''} aria-pressed={heroView === index} onClick={() => setHeroView(index)}><img src={item.image} alt="" /><span>{item.title}</span></button>)}</div></div>
        </div>
      </section>

      <div className="fw-facts" aria-label="Quest Storm information"><span>Queen Creek, Arizona</span><span>ROC #355136</span><span>No-cost roof inspection</span><span>602-399-6455</span></div>
      <div className="fw-ribbon" aria-hidden="true"><div>FROM THE STREET <b>✳</b> TO THE ROOF <b>✳</b> TO A CLEARER DECISION <b>✳</b> FROM THE STREET <b>✳</b> TO THE ROOF <b>✳</b> TO A CLEARER DECISION <b>✳</b></div></div>

      <section className="fw-roof" id="roof" aria-labelledby="fw-roof-title">
        <Reveal className="fw-roof-heading"><h2 id="fw-roof-title"><MotionWords text="Look beyond" /> <em><MotionWords text="the street." delay={.12} /></em></h2><p>Storm damage isn’t always visible from the driveway. Move the slider to compare the street view with a closer roof view.</p></Reveal>
        <motion.div className="fw-comparison" initial={reduced ? false : { opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, ease }}>
          <img className="fw-comparison-under" src={photos.roof} alt="Close view of storm-damaged shingles" loading="lazy" />
          <div className="fw-comparison-over" style={{ clipPath: `inset(0 ${100 - view}% 0 0)` }}><img src={photos.storm} alt="Arizona home viewed from the street under a storm sky" loading="lazy" /></div>
          <div className="fw-comparison-labels"><span>01 / FROM THE STREET</span><span>02 / ON THE ROOF</span></div>
          <div className="fw-comparison-divider" style={{ left: `${view}%` }}><span><ArrowLeft size={17} /><ArrowRight size={17} /></span></div>
          <input type="range" min="8" max="92" value={view} onChange={e => setView(Number(e.target.value))} aria-label="Reveal street view and roof surface" />
          <span className="fw-comparison-tip">DRAG TO COMPARE</span>
        </motion.div>
        <div className="fw-detail-list">{details.map((item, i) => <motion.article key={item.title} initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .52, delay: i * .09, ease }}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</div>
        <p className="fw-photo-note">Illustrative photography. Your inspection documents your own roof.</p>
      </section>

      <section className="fw-process" id="process" aria-labelledby="fw-process-title">
        <div className="fw-process-inner">
          <Reveal className="fw-process-heading"><h2 id="fw-process-title"><MotionWords text="A roof check," /><br /><em><MotionWords text="in three steps." delay={.13} /></em></h2></Reveal>
          <div className="fw-process-grid">
            <div className="fw-step-list" role="group" aria-label="Inspection steps">{steps.map((item, i) => <button key={item.title} className={step === i ? 'active' : ''} aria-pressed={step === i} onClick={() => setStep(i)}><span className="fw-step-number">0{i + 1}</span><span className="fw-step-copy"><strong>{item.title}</strong><small>{item.body}</small></span><ArrowUpRight size={20} /></button>)}</div>
            <div className="fw-process-visual"><AnimatePresence mode="wait" initial={false}><motion.img key={step} src={steps[step].image} alt={steps[step].subtitle} loading="lazy" initial={reduced ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .3, ease }} /></AnimatePresence><div className="fw-process-label"><strong>{steps[step].subtitle}</strong></div></div>
          </div>
        </div>
      </section>

      <section className="fw-choice" aria-labelledby="fw-choice-title"><img className="fw-choice-photo" src={photos.roof} alt="Close view of roof shingles" loading="lazy" /><div className="fw-choice-copy"><h2 id="fw-choice-title"><MotionWords text="Your roof." /><br /><em><MotionWords text="Your call." delay={.1} /></em></h2></div><motion.div className="fw-choice-card" initial={reduced ? false : { opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, ease }}><p>{choice}</p><button onClick={inspect}>Let’s take a look <ArrowUpRight size={19} /></button></motion.div><span className="fw-choice-line" aria-hidden="true" /></section>

      <section className="fw-questions" id="questions" aria-labelledby="fw-questions-title"><Reveal className="fw-questions-heading"><h2 id="fw-questions-title"><MotionWords text="Questions about" /><br /><MotionWords text="your roof?" delay={.1} /></h2></Reveal><div className="fw-question-stage"><div className="fw-question-list">{questions.map(([q, a], i) => <div key={q}><button aria-expanded={faq === i} aria-controls={`fw-answer-${i}`} onClick={() => setFaq(faq === i ? null : i)}><span>0{i + 1}</span><strong>{q}</strong>{faq === i ? <Minus size={19} /> : <Plus size={19} />}</button><AnimatePresence initial={false}>{faq === i && <motion.p id={`fw-answer-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .22, ease }}>{a}</motion.p>}</AnimatePresence></div>)}</div><motion.div className="fw-question-photo" initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, ease }}><img src={photos.work} alt="Roofing professional at work on a roof" loading="lazy" /><span>See what’s<br />up there.</span></motion.div></div></section>

      <section className="fw-last" aria-labelledby="fw-last-title"><div className="fw-last-glow" aria-hidden="true" /><h2 id="fw-last-title"><MotionWords text="Ready to take" /><br /><em><MotionWords text="a closer look?" delay={.1} /></em></h2><div><p>Start with a no-cost inspection. We’ll show you what we find.</p><button onClick={inspect}>Request a roof check <ArrowUpRight size={20} /></button><a href="tel:+16023996455">Call 602-399-6455 <ArrowUpRight size={17} /></a></div></section>
    </main>
    <footer className="fw-footer"><a href="#top" className="fw-footer-brand">quest<span>storm</span></a><span>Quest Storm by Quest Roofing · ROC #355136</span><a href="./PHOTO-CREDITS.html">Photography credits</a><a href="./index.html">All designs <ArrowUpRight size={16} /></a></footer>
    <RequestDialog open={contact} onClose={() => setContact(false)} />
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
