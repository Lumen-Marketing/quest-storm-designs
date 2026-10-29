import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useReducedMotion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowDown, Plus, Minus, X, List, HouseLine, Pause, Play } from '@phosphor-icons/react';
import { photos, details, steps, questions, choice } from './content';
import Grainient from './components/Grainient';
import Aurora from './components/Aurora';
import TechText from './components/TechText';
import RequestDialog from './RequestDialog';
import './alternatives.css';
import './stormcut.css';

const emberColors = ['#120f17', '#2a0f0a', '#9a3412', '#f97316', '#fed7aa'];
const auroraColors = ['#f97316', '#eab308', '#f97316'];
gsap.registerPlugin(ScrollTrigger);

function LightField({ grain = false, paused }) {
  return <div className={`sc-light ${grain ? 'sc-grain' : 'sc-aurora'}`} aria-hidden="true">
    {grain
      ? <Grainient colors={emberColors} angle={55} flow={0.8} silk={0.35} grainAmount={0.08}
          speed={paused ? 0 : 1.35} grainAnimated={!paused} interactive={false} clickSwirl={false} intro={false} dpr={1.25}/>
      : <Aurora colorStops={auroraColors} amplitude={1} blend={0.5} height={0.45} speed={2.3} glow={0.6}
          paused={paused} mouseInteraction={false} intro={false} dpr={1.25}/>}
  </div>;
}

function Reveal({ children, className = '' }) {
  return <div className={`sc-reveal ${className}`}>{children}</div>;
}

function Action({ children = 'Get a no-cost inspection', onClick, light = false }) {
  return <button className={`sc-action ${light ? 'sc-action-light' : ''}`} onClick={onClick}>
    <span>{children}</span><ArrowUpRight size={23} weight="bold"/>
  </button>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const [detail, setDetail] = useState(0);
  const [faq, setFaq] = useState(null);
  const [paused, setPaused] = useState(false);
  const pageRef = useRef(null);
  const reduce = useReducedMotion();
  const still = paused || Boolean(reduce);
  const menuButton = useRef(null);
  useEffect(() => {
    if (reduce) return;
    const context = gsap.context(() => {
      gsap.utils.toArray('.sc-reveal').forEach(element => {
        gsap.fromTo(element,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out', clearProps: 'transform,opacity,visibility',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true } }
        );
      });
    }, pageRef);
    return () => context.revert();
  }, [reduce]);
  const inspect = () => { setMenu(false); setContact(true); };
  useEffect(() => {
    if (!menu) return;
    const close = event => {
      if (event.key === 'Escape') { setMenu(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menu]);

  return <div ref={pageRef} className={`stormcut${still ? ' sc-motion-paused' : ''}`} id="top">
    <a className="alt-skip" href="#main">Skip to content</a>
    <header className="sc-header">
      <a className="sc-logo" href="#top" aria-label="Quest Storm home"><HouseLine size={29} weight="bold"/><span>QUEST<span>STORM</span></span></a>
      <nav id="sc-navigation" className={menu ? 'open' : ''} aria-label="Main navigation">
        { [['The inspection', 'roof'], ['How it works', 'process'], ['Questions', 'questions']].map(([label, id]) =>
          <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>) }
        <button className="sc-mobile-request" onClick={inspect}>Request an inspection <ArrowUpRight size={18}/></button>
      </nav>
      <a className="sc-phone" href="tel:+16023996455">602-399-6455<ArrowUpRight size={17}/></a>
      <button ref={menuButton} className="alt-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menu} aria-controls="sc-navigation" onClick={() => setMenu(!menu)}>{menu ? <X size={25}/> : <List size={25}/>}</button>
    </header>

    <main id="main">
      <section className="sc-hero sc-cut" aria-labelledby="hero-title">
        <LightField grain paused={still}/>
        <div className="sc-hero-stage sc-container">
          <p className="sc-eyebrow"><span className="sc-signal"/>ARIZONA / STORM RESPONSE</p>
          <span className="sc-stage-note">YOUR HOME.<br/>YOUR PEACE OF MIND.</span>
          <div className="sc-roof-sculpture" aria-hidden="true">
            <svg viewBox="0 0 640 440" fill="none">
              <defs>
                <linearGradient id="roof-face" x1="164" y1="90" x2="472" y2="365" gradientUnits="userSpaceOnUse"><stop stopColor="#ffbb74"/><stop offset=".22" stopColor="#b6420d"/><stop offset=".43" stopColor="#30150d"/><stop offset=".7" stopColor="#0b0909"/><stop offset="1" stopColor="#f07828"/></linearGradient>
                <linearGradient id="roof-edge" x1="167" y1="170" x2="471" y2="236" gradientUnits="userSpaceOnUse"><stop stopColor="#f9a257"/><stop offset=".48" stopColor="#c4490f"/><stop offset="1" stopColor="#26110d"/></linearGradient>
                <linearGradient id="roof-side" x1="428" y1="180" x2="458" y2="365" gradientUnits="userSpaceOnUse"><stop stopColor="#63220b"/><stop offset="1" stopColor="#090909"/></linearGradient>
                <linearGradient id="roof-inner" x1="275" y1="179" x2="352" y2="382" gradientUnits="userSpaceOnUse"><stop stopColor="#090909"/><stop offset=".75" stopColor="#21100a"/><stop offset="1" stopColor="#a64010"/></linearGradient>
              </defs>
              <path d="M117 208L286 68L492 201L454 232L286 124L155 233Z" fill="url(#roof-edge)"/>
              <path d="M286 68L316 53L522 186L492 201Z" fill="#ef8b3d"/>
              <path d="M492 201L522 186L522 244L484 274L454 232Z" fill="url(#roof-side)"/>
              <path d="M155 233L286 124L454 232L454 361L379 399L379 258L285 197L237 237L237 354L165 384Z" fill="url(#roof-face)"/>
              <path d="M454 232L484 215L484 344L454 361Z" fill="url(#roof-side)"/>
              <path d="M285 197L315 181L409 242L379 258Z" fill="#e46a1b"/>
              <path d="M379 258L409 242L409 382L379 399Z" fill="url(#roof-side)"/>
              <path d="M237 237L285 197L315 216L267 256L267 337L237 354Z" fill="url(#roof-inner)"/>
              <path d="M117 208L155 233L165 384L129 358Z" fill="#130c09"/>
              <path d="M117 208L286 68L492 201M155 233L286 124L454 232" stroke="#ffd19b" strokeOpacity=".45"/>
              <path d="M165 384L237 354M379 399L454 361" stroke="#f98432" strokeOpacity=".6"/>
            </svg>
          </div>
          <span className="sc-stage-index" aria-hidden="true">QUEST / 01</span>
        </div>
        <div className="sc-hero-bottom-band sc-container">
          <div className="sc-hero-headline">
            <h1 id="hero-title" className={still ? '' : 'sc-visually-hidden'}>STORM HIT HOME?<br/>LET’S TAKE<br/>A CLOSER LOOK.</h1>
            {!still && <div className="sc-tech-lines" aria-hidden="true">{['STORM HIT HOME?', 'LET’S TAKE', 'A CLOSER LOOK.'].map(line => <div className="sc-tech-line" key={line}>
              <TechText text={line} fontFamily="Outfit" fontWeight={600} fontSize={150} align="left"
                reveal="letter" dashLength={4} dashGap={2} specks={15} intro="none" introDuration={2}
                clickKick guides={false} accentColor="#fed7aa"/>
            </div>)}</div>}
          </div>
          <div className="sc-hero-summary"><p>A closer look at your roof.<br/>A clearer idea of what comes next.</p><Action onClick={inspect}>Get a no-cost inspection</Action><span>NO COST. NO OBLIGATION.</span></div>
        </div>
        <div className="sc-hero-baseline sc-container"><span>HAIL & WIND / ROOF INSPECTIONS</span><a href="#roof">DISCOVER WHAT’S NEXT<ArrowDown size={16}/></a></div>
      </section>

      <div className="sc-proof-strip sc-container"><span>HAIL & WIND</span><span>REAL ROOF PHOTOS</span><span>ANSWERS BEFORE ACTION</span><span>YOUR NEXT STEP</span></div>

      <section className="sc-roof sc-section sc-cut" id="roof" aria-labelledby="roof-title">
        <LightField paused={still}/>
        <div className="sc-container">
          <div className="sc-section-label"><span>01 / LOOK BEYOND THE DRIVEWAY</span><span aria-hidden="true">+ &nbsp; +</span></div>
          <Reveal className="sc-section-head"><h2 id="roof-title">THE GROUND ONLY<br/>TELLS <span>HALF THE STORY.</span></h2><p>Your roof can look fine from the street.<br/>A closer inspection replaces the guesswork with something you can see.</p></Reveal>
          <div className="sc-inspection">
            <figure className={`sc-inspection-photo sc-detail-${detail}`}>
              <img src={photos.roof} alt="Close view of damaged shingles, showing the roof surface an inspection can document" loading="lazy"/>
              <span className="sc-photo-cross sc-cross-one" aria-hidden="true">+</span><span className="sc-photo-cross sc-cross-two" aria-hidden="true">+</span>
              <figcaption><span>THE DETAIL MAKES THE DIFFERENCE</span><span>0{detail + 1} / 03</span></figcaption>
            </figure>
            <div className="sc-inspection-list" aria-label="Explore inspection areas">
              {details.map((item, i) => <article key={item.title} className={detail === i ? 'active' : ''}>
                <button aria-expanded={detail === i} aria-controls={`sc-detail-${i}`} onClick={() => setDetail(i)}>
                  <span>0{i + 1}</span><h3>{item.title}</h3>{detail === i ? <Minus size={22}/> : <Plus size={22}/>}</button>
                <div id={`sc-detail-${i}`} hidden={detail !== i}><p>{item.text}</p><button className="sc-inline-action" onClick={inspect}>Take a closer look<ArrowUpRight size={19}/></button></div>
              </article>)}
              <p className="sc-caption">Illustrative photography. Your inspection documents your own roof.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sc-process sc-section sc-cut" id="process" aria-labelledby="process-title">
        <LightField paused={still}/>
        <div className="sc-container">
          <div className="sc-section-label"><span>02 / FROM UNCERTAINTY TO UNDERSTANDING</span><span>THREE SIMPLE STEPS</span></div>
          <Reveal className="sc-process-title"><h2 id="process-title">A CLOSER LOOK.<br/><span>A CLEARER NEXT STEP.</span></h2><ArrowUpRight size={74} weight="light" aria-hidden="true"/></Reveal>
          <div className="sc-steps">{steps.map((item, i) => <Reveal key={item.title} className={`sc-step sc-step-${i + 1}`}>
            <div className="sc-step-top"><span>0{i + 1}</span><h3>{item.title}</h3></div>
            <div className="sc-step-photo"><img src={item.image} alt={['A roofing professional working on a roof in Phoenix', 'Damaged shingles photographed up close', 'A home in Arizona under storm clouds'][i]} loading="lazy"/><ArrowUpRight size={28} aria-hidden="true"/></div>
            <h4>{item.subtitle}</h4><p>{item.body}</p>
          </Reveal>)}</div>
        </div>
      </section>

      <section className="sc-decision sc-section sc-cut" aria-labelledby="decision-title">
        <LightField paused={still}/>
        <div className="sc-container">
          <div className="sc-section-label"><span>03 / INFORMATION. THEN A DECISION.</span><span aria-hidden="true">↗</span></div>
          <Reveal className="sc-decision-content"><h2 id="decision-title">YOUR ROOF.<br/><span>YOUR CALL.</span></h2><div><p>{choice}</p><p className="sc-decision-note">No pressure. Just a place to start.</p><Action light onClick={inspect}>Let’s take a look</Action></div></Reveal>
        </div>
      </section>

      <section className="sc-faq sc-section sc-cut" id="questions" aria-labelledby="questions-title">
        <LightField paused={still}/>
        <div className="sc-container">
          <div className="sc-section-label"><span>04 / CLEAR UP THE WHAT-IFS</span><span aria-hidden="true">+ &nbsp; +</span></div>
          <div className="sc-faq-layout"><Reveal className="sc-faq-heading"><h2 id="questions-title">GOOD QUESTIONS.<br/><span>STRAIGHT<br/>ANSWERS.</span></h2><p>You should feel clear about<br/>the next step. Ask away.</p><a href="tel:+16023996455">Talk to us<ArrowUpRight size={21}/></a></Reveal>
            <div className="sc-questions">{questions.map(([q, a], i) => <article key={q}>
              <button aria-expanded={faq === i} aria-controls={`sc-answer-${i}`} onClick={() => setFaq(faq === i ? null : i)}><span>0{i + 1}</span><h3>{q}</h3>{faq === i ? <Minus size={22}/> : <Plus size={22}/>}</button>
              <div id={`sc-answer-${i}`} hidden={faq !== i}><p>{a}</p></div>
            </article>)}</div>
          </div>
        </div>
      </section>
    </main>

    <footer className="sc-footer sc-cut" id="contact">
      <LightField grain paused={still}/>
      <div className="sc-container">
        <div className="sc-section-label"><span>YOUR HOME. YOUR PEACE OF MIND.</span><a href="#top">BACK TO TOP<ArrowUpRight size={16}/></a></div>
        <Reveal className="sc-footer-invite"><h2>LET’S TAKE<br/>A <span>CLOSER LOOK.</span></h2><div><p>A no-cost roof inspection.<br/>Your next step starts here.</p><Action light onClick={inspect}>Request an inspection</Action></div></Reveal>
        <div className="sc-footer-links"><a className="sc-footer-phone" href="tel:+16023996455">602-399-6455<ArrowUpRight size={23}/></a><div><a href="#roof">The inspection</a><a href="#process">How it works</a><a href="#questions">Questions</a></div><div><a href="./index.html">All three designs<ArrowUpRight size={15}/></a><a href="./PHOTO-CREDITS.html">Photography credits<ArrowUpRight size={15}/></a></div></div>
        <div className="sc-wordmark" aria-hidden="true">QUEST STORM<span>↗</span></div>
        <div className="sc-footer-bottom"><span>QUEST STORM BY QUEST ROOFING</span><span>ARIZONA / HAIL & WIND INSPECTIONS</span><button aria-pressed={paused} onClick={() => setPaused(!paused)} disabled={Boolean(reduce)}>{still ? <Play size={13}/> : <Pause size={13}/>} {reduce ? 'Reduced motion enabled' : paused ? 'Resume motion' : 'Pause motion'}</button></div>
      </div>
    </footer>
    <RequestDialog open={contact} onClose={() => setContact(false)}/>
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
