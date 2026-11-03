import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ArrowDown, ArrowLeft, Plus, Minus, X, List, HouseLine, CursorClick, CheckCircle, Camera, ShieldCheck } from '@phosphor-icons/react';
import { photos, details, steps, questions, choice, ease } from './content';
import RequestDialog from './RequestDialog';
import './alternatives.css';
import './fieldwork-clean.css';

const scenes = [
  { image: photos.storm, label: 'The storm', alt: 'An Arizona home beneath a dark storm sky', caption: 'From the street, everything can look fine.' },
  { image: photos.roof, label: 'The roof', alt: 'Close view of storm-damaged roof shingles', caption: 'A closer view reveals the details.' },
  { image: photos.work, label: 'The check', alt: 'A roofing professional working on a roof', caption: 'Real photos make the next step clearer.' }
];

function Reveal({ children, className = '' }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .7, ease }}>{children}</motion.div>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const [scene, setScene] = useState(0);
  const [view, setView] = useState(55);
  const [detail, setDetail] = useState(0);
  const [step, setStep] = useState(0);
  const [faq, setFaq] = useState(null);
  const reduced = useReducedMotion();
  const inspect = () => setContact(true);

  return <div className="fieldwork" id="top">
    <a className="alt-skip" href="#main">Skip to content</a>
    <header className="fw-header">
      <a className="fw-logo" href="#top" aria-label="Quest Storm home"><HouseLine weight="bold" /><span>quest<span>storm</span><small>BY QUEST ROOFING</small></span></a>
      <nav className={menu ? 'open' : ''} aria-label="Main navigation">
        <a href="#roof" onClick={() => setMenu(false)}>The roof</a><a href="#process" onClick={() => setMenu(false)}>The process</a><a href="#questions" onClick={() => setMenu(false)}>Questions</a>
      </nav>
      <button className="fw-header-action" onClick={inspect}>Book a roof check <ArrowUpRight size={18} /></button>
      <button className="alt-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={25} /> : <List size={25} />}</button>
    </header>

    <main id="main">
      <section className="fw-hero" aria-labelledby="fw-title">
        <div className="fw-hero-image" aria-hidden="true"><AnimatePresence mode="sync" initial={false}><motion.img key={scene} src={scenes[scene].image} alt="" initial={reduced ? false : { opacity: 0, scale: 1.065 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .65, ease }} /></AnimatePresence></div>
        <div className="fw-hero-wash" />
        <div className="fw-hero-content">
          <div className="fw-hero-topline"><span><span className="fw-status-dot" /> Arizona storm response</span></div>
          <motion.h1 id="fw-title" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }}><span>The storm passed.</span><em>What about your roof?</em></motion.h1>
          <div className="fw-hero-bottom"><div><p>After hail or wind, a roof can look fine from the street. Get a closer look, see the photos, and decide what happens next.</p><button className="fw-primary" onClick={inspect}>Get a no-cost roof check <ArrowUpRight size={20} /></button><span className="fw-hero-reassurance"><CheckCircle size={17} weight="fill" /> No cost. No obligation. Your choice.</span></div><a className="fw-scroll-cue" href="#roof">See how it works <ArrowDown size={18} /></a></div>
        </div>
        <div className="fw-scene-panel" aria-label="Explore storm and roof photographs"><div className="fw-scene-text"><span>From the field / 0{scene + 1}</span><p>{scenes[scene].caption}</p></div><div className="fw-scene-options">{scenes.map((item, i) => <button key={item.label} className={scene === i ? 'active' : ''} aria-label={`Show ${item.label.toLowerCase()} photo`} aria-pressed={scene === i} onClick={() => setScene(i)}><img src={item.image} alt="" /><span>{item.label}</span></button>)}</div></div>
      </section>

      <div className="fw-ticker" aria-label="Why start with an inspection"><div><span><Camera size={20} /> Photos you can see</span><span><ShieldCheck size={20} /> A clear next step</span><span><CheckCircle size={20} /> A decision that stays yours</span></div></div>

      <section className="fw-roof" id="roof" aria-labelledby="fw-roof-title">
        <Reveal className="fw-roof-intro"><span className="fw-kicker">01 / The roof</span><h2 id="fw-roof-title">A closer look <i>changes everything.</i></h2><p>The view from the driveway is only the beginning. Drag across these photographs to see why an inspection matters.</p></Reveal>
        <div className="fw-roof-layout">
          <div className="fw-comparison">
            <img className="fw-comparison-under" src={photos.roof} alt="Close view of storm-damaged shingles" />
            <div className="fw-comparison-over" style={{ clipPath: `inset(0 ${100 - view}% 0 0)` }}><img src={photos.storm} alt="Arizona home viewed from the street under a storm sky" /></div>
            <div className="fw-comparison-scrim" />
            <div className="fw-comparison-labels"><span>From the street</span><span>On the roof</span></div>
            <div className="fw-comparison-divider" style={{ left: `${view}%` }}><span><ArrowLeft size={16} /><ArrowRight size={16} /></span></div>
            <input type="range" min="8" max="92" value={view} onChange={e => setView(Number(e.target.value))} aria-label="Reveal street view and roof surface" />
            <span className="fw-comparison-tip">Drag to compare <CursorClick size={17} /></span>
          </div>
          <div className="fw-roof-notes"><span className="fw-kicker">What we look at</span><p className="fw-roof-lede">Know what you’re seeing.</p><div className="fw-detail-list">{details.map((item, i) => <div className={detail === i ? 'active' : ''} key={item.title}><button aria-expanded={detail === i} aria-controls={`fw-detail-${i}`} onClick={() => setDetail(i)}><span>0{i + 1}</span><strong>{item.title}</strong>{detail === i ? <Minus size={18} /> : <Plus size={18} />}</button><AnimatePresence initial={false}>{detail === i && <motion.p id={`fw-detail-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .25, ease }}>{item.text}</motion.p>}</AnimatePresence></div>)}</div><small>Illustrative photography. Your inspection documents your own roof.</small></div>
        </div>
      </section>

      <section className="fw-process" id="process" aria-labelledby="fw-process-title">
        <Reveal className="fw-process-heading"><span className="fw-kicker">02 / How it works</span><h2 id="fw-process-title">A clear answer in <em>three steps.</em></h2><p>Each step gives you more information and keeps the decision in your hands.</p></Reveal>
        <div className="fw-process-cards" role="group" aria-label="Inspection steps">{steps.map((item, i) => <button className={`fw-process-card ${step === i ? 'active' : ''}`} key={item.title} aria-pressed={step === i} onClick={() => setStep(i)}><img src={item.image} alt="" loading="lazy" /><span className="fw-process-top"><small>0{i + 1} / 03</small><ArrowUpRight size={21} /></span><span className="fw-process-bottom"><strong>{item.title}</strong><span>{item.subtitle}</span><p>{item.body}</p></span></button>)}</div>
        <div className="fw-process-foot"><span>No cost / No obligation</span><span>You decide what happens after the inspection.</span></div>
      </section>

      <section className="fw-decision" aria-labelledby="fw-decision-title"><div className="fw-decision-image"><img src={photos.work} alt="A roofing professional inspecting a home roof" loading="lazy" /><span>See the facts for yourself</span></div><Reveal className="fw-decision-copy"><span className="fw-kicker">03 / Your call</span><h2 id="fw-decision-title">Your roof. <em>Your decision.</em></h2><p>{choice}</p><button className="fw-primary" onClick={inspect}>Let’s take a look <ArrowUpRight size={20} /></button></Reveal></section>

      <section className="fw-questions" id="questions" aria-labelledby="fw-questions-title"><Reveal className="fw-questions-heading"><span className="fw-kicker">04 / Good questions</span><h2 id="fw-questions-title">Straight <em>answers.</em></h2><p>Questions are normal. Here are a few answers before anyone gets on the roof.</p></Reveal><div className="fw-question-list">{questions.map(([q, a], i) => <div key={q} className={faq === i ? 'active' : ''}><button aria-expanded={faq === i} aria-controls={`fw-answer-${i}`} onClick={() => setFaq(faq === i ? null : i)}><span>0{i + 1}</span><strong>{q}</strong>{faq === i ? <Minus size={21} /> : <Plus size={21} />}</button><AnimatePresence initial={false}>{faq === i && <motion.p id={`fw-answer-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .22, ease }}>{a}</motion.p>}</AnimatePresence></div>)}</div></section>

      <section className="fw-last" aria-labelledby="fw-last-title"><span className="fw-kicker">Your next move / Quest Storm</span><div className="fw-last-main"><h2 id="fw-last-title">Know your roof. <em>Then decide.</em></h2><div><p>A no-cost inspection. Photos you can review. A decision that stays yours.</p><button onClick={inspect}>Request a roof check <ArrowUpRight size={21} /></button><a href="tel:+16023996455">Or call 602-399-6455 <ArrowUpRight size={18} /></a></div></div><div className="fw-last-index"><span>Quest Roofing / Arizona</span><span>ROC #355136</span></div></section>
    </main>
    <footer className="fw-footer"><a href="#top" className="fw-footer-brand">quest<span>storm</span></a><span>Quest Storm by Quest Roofing</span><a href="./PHOTO-CREDITS.html">Photography credits <ArrowUpRight size={17} /></a><a href="./index.html">All four designs <ArrowUpRight size={17} /></a></footer>
    <RequestDialog open={contact} onClose={() => setContact(false)} />
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
