import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ArrowDown, ArrowLeft, Plus, Minus, X, List, HouseLine, Camera } from '@phosphor-icons/react';
import { photos, details, steps, questions, choice, ease } from './content';
import RequestDialog from './RequestDialog';
import './alternatives.css';
import './fieldwork-clean.css';

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
        <img className="fw-hero-photo" src={photos.work} alt="Roofing professional inspecting a home roof in Arizona" fetchPriority="high" />
        <div className="fw-hero-shade" />
        <div className="fw-hero-top"><span>ARIZONA / HAIL + WIND</span><span>QUEST STORM · BY QUEST ROOFING</span></div>
        <div className="fw-hero-copy">
          <motion.div initial={reduced ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }}>
            <span className="fw-hero-kicker"><span className="fw-dot" /> AFTER THE STORM</span>
            <h1 id="fw-title">Start with<br />the roof<span>.</span></h1>
            <p>A closer look at the roof. Photos of what we find. A decision that stays yours.</p>
            <a href="#roof" className="fw-hero-link">See what we look for <ArrowDown size={19} /></a>
          </motion.div>
        </div>
        <div className="fw-hero-card">
          <div className="fw-card-top"><span>YOUR ROOF CHECK</span><Camera size={23} /></div>
          <h2>Know what happened up there.</h2>
          <p>We inspect and document the roof so you can review the facts before deciding what comes next.</p>
          <div className="fw-card-progress" aria-label="Inspection includes a roof check, photos, and your choice"><span>01 <b>Look</b></span><i /><span>02 <b>Photos</b></span><i /><span>03 <b>Decide</b></span></div>
          <button onClick={inspect}>Book a no-cost inspection <ArrowUpRight size={19} /></button>
          <small>No cost. No obligation. You decide.</small>
        </div>
      </section>

      <div className="fw-facts" aria-label="Quest Storm information"><span>QUEEN CREEK, ARIZONA</span><span>ROC #355136</span><span>NO-COST ROOF INSPECTION</span><span>602-399-6455</span></div>

      <section className="fw-roof" id="roof" aria-labelledby="fw-roof-title">
        <Reveal className="fw-roof-heading"><span className="fw-index">01 / THE ROOF</span><h2 id="fw-roof-title">The view from the street is only <em>the beginning.</em></h2><p>Hail and wind can leave details you cannot confirm from the driveway. Compare these illustrative views, then see what an inspection covers.</p></Reveal>
        <div className="fw-comparison">
          <img className="fw-comparison-under" src={photos.roof} alt="Close view of storm-damaged shingles" loading="lazy" />
          <div className="fw-comparison-over" style={{ clipPath: `inset(0 ${100 - view}% 0 0)` }}><img src={photos.storm} alt="Arizona home viewed from the street under a storm sky" loading="lazy" /></div>
          <div className="fw-comparison-labels"><span>01 / FROM THE STREET</span><span>02 / ON THE ROOF</span></div>
          <div className="fw-comparison-divider" style={{ left: `${view}%` }}><span><ArrowLeft size={17} /><ArrowRight size={17} /></span></div>
          <input type="range" min="8" max="92" value={view} onChange={e => setView(Number(e.target.value))} aria-label="Reveal street view and roof surface" />
          <span className="fw-comparison-tip">DRAG TO COMPARE</span>
        </div>
        <div className="fw-detail-list">{details.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <p className="fw-photo-note">Illustrative photography. Your inspection documents your own roof.</p>
      </section>

      <section className="fw-process" id="process" aria-labelledby="fw-process-title">
        <div className="fw-process-inner">
          <Reveal className="fw-process-heading"><span className="fw-index">02 / FIELDWORK</span><h2 id="fw-process-title">Look. Document.<br /><em>Decide.</em></h2><p>Three simple steps, each one bringing the roof into focus.</p></Reveal>
          <div className="fw-process-grid">
            <div className="fw-step-list" role="group" aria-label="Inspection steps">{steps.map((item, i) => <button key={item.title} className={step === i ? 'active' : ''} aria-pressed={step === i} onClick={() => setStep(i)}><span className="fw-step-number">0{i + 1}</span><span className="fw-step-copy"><strong>{item.title}</strong><span>{item.subtitle}</span><small>{item.body}</small></span><ArrowUpRight size={20} /></button>)}</div>
            <div className="fw-process-visual"><AnimatePresence mode="wait" initial={false}><motion.img key={step} src={steps[step].image} alt={steps[step].subtitle} loading="lazy" initial={reduced ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .3, ease }} /></AnimatePresence><div className="fw-process-label"><span>FIELD NOTE / 0{step + 1}</span><strong>{steps[step].subtitle}</strong></div></div>
          </div>
        </div>
      </section>

      <section className="fw-choice" aria-labelledby="fw-choice-title"><div><span className="fw-index">03 / YOUR CALL</span><h2 id="fw-choice-title">Your roof.<br /><em>Your decision.</em></h2></div><div><p>{choice}</p><button onClick={inspect}>Let’s take a look <ArrowUpRight size={19} /></button></div><span className="fw-choice-line" aria-hidden="true" /></section>

      <section className="fw-questions" id="questions" aria-labelledby="fw-questions-title"><Reveal className="fw-questions-heading"><span className="fw-index">04 / GOOD QUESTIONS</span><h2 id="fw-questions-title">Straight<br />answers.</h2><p>Questions are normal. Here are a few answers before anyone gets on the roof.</p></Reveal><div className="fw-question-list">{questions.map(([q, a], i) => <div key={q}><button aria-expanded={faq === i} aria-controls={`fw-answer-${i}`} onClick={() => setFaq(faq === i ? null : i)}><span>0{i + 1}</span><strong>{q}</strong>{faq === i ? <Minus size={19} /> : <Plus size={19} />}</button><AnimatePresence initial={false}>{faq === i && <motion.p id={`fw-answer-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .22, ease }}>{a}</motion.p>}</AnimatePresence></div>)}</div></section>

      <section className="fw-last" aria-labelledby="fw-last-title"><span className="fw-index">QUEST STORM / ARIZONA</span><h2 id="fw-last-title">Get the facts.<br /><em>Then decide.</em></h2><div><p>Start with a no-cost roof inspection and photos you can review.</p><button onClick={inspect}>Request a roof check <ArrowUpRight size={20} /></button><a href="tel:+16023996455">Call 602-399-6455 <ArrowUpRight size={17} /></a></div></section>
    </main>
    <footer className="fw-footer"><a href="#top" className="fw-footer-brand">quest<span>storm</span></a><span>Quest Storm by Quest Roofing · ROC #355136</span><a href="./PHOTO-CREDITS.html">Photography credits</a><a href="./index.html">All designs <ArrowUpRight size={16} /></a></footer>
    <RequestDialog open={contact} onClose={() => setContact(false)} />
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
