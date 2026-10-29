import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,ArrowDown,Desktop,DeviceMobile,Check,Play} from '@phosphor-icons/react';
import './gallery.css';
const directions=[
  {name:'Ridge',number:'01',path:'./direction-1-after-the-storm.html',description:'An oversized condensed headline and a tightly composed photo grid. Explore roof hotspots, switch photographs, and scroll through stacked inspection sheets.',tags:['Photo grid','Big Shoulders + Hanken','Scroll stack']},
  {name:'Fieldwork',number:'02',path:'./direction-2-roof-report.html',description:'Inspired by the DnD site: a moving iridescent color field, spacious type, and soft word reveals. Drag between street and roof views, then explore the photographic inspection guide.',tags:['Iridescent light','Bricolage + Sora','Photo reveal + word motion']},
  {name:'Stormcut',number:'03',path:'./direction-3-stormline.html',description:'An ember-orange and black editorial design. Asymmetric cut-through sections, flowing Grainient hero and footer, and Aurora light fields bring a bold new edge to the roofing story.',tags:['Asymmetric cuts','Orange + black','Grainient + Aurora']},
  {name:'Clarity',number:'04',path:'./direction-4-clarity.html',description:'An editorial light-and-dark direction with a cinematic roof photo, lime details, an indexed sidebar, animated headings, and a stacked inspection story.',tags:['Editorial photo','Lime + charcoal','Scroll stack']}
];
function Preview({direction,mode}) {
  const container=useRef(null);
  const [near,setNear]=useState(false);
  const [ready,setReady]=useState(false);
  const [interactive,setInteractive]=useState(false);
  const [width,setWidth]=useState(640);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setNear(true);observer.disconnect()}},{rootMargin:'300px'});
    observer.observe(container.current);
    const resize=new ResizeObserver(entries=>setWidth(entries[0].contentRect.width));
    resize.observe(container.current);
    return()=>{observer.disconnect();resize.disconnect()};
  },[]);
  useEffect(()=>{setReady(false);setInteractive(false)},[mode]);
  const viewport=mode==='desktop'?{width:1440,height:1000}:{width:390,height:844};
  const scale=Math.min((width-32)/viewport.width,mode==='mobile'?.68:1);
  return <div className={'gallery-preview '+(interactive?'interactive':'')} ref={container} style={{height:viewport.height*scale+32}}>
    <span className="gallery-loading">{ready?'':'Loading preview'}</span>
    {near&&<div className="gallery-preview-holder" style={{width:viewport.width*scale,height:viewport.height*scale}}>
      <iframe key={mode} src={direction.path} title={direction.name+' '+mode+' website preview'} onLoad={()=>setReady(true)} tabIndex={interactive?0:-1} inert={!interactive} style={{width:viewport.width,height:viewport.height,transform:'scale('+scale+')'}}/>
    </div>}
    {!interactive?<button className="gallery-veil" onClick={()=>setInteractive(true)} disabled={!ready} aria-label={'Interact with '+direction.name+' preview'}><span><Play size={17} weight="fill"/>Click to interact</span></button>:<button className="gallery-lock" onClick={()=>setInteractive(false)}>Lock preview</button>}
  </div>;
}
function App() {
  const [mode,setMode]=useState('desktop');
  return <div className="gallery">
    <header className="gallery-header"><a href="./index.html" className="gallery-brand">quest<span>STORM</span></a><span>WEBSITE DESIGN REVIEW</span><a href="#designs">Explore the designs<ArrowDown size={16}/></a></header>
    <main>
      <section className="gallery-intro"><div><p>Four distinct directions.</p><h1>Find the right<br/>first impression.</h1></div><div><p>Same roofing story.<br/>Four different ways to tell it.</p><span>Open any design full screen to explore the photos, motion, and interactions.</span></div></section>
      <div className="gallery-toolbar" id="designs"><span>QUEST STORM / 4 DESIGNS</span><div className="gallery-view-toggle" role="group" aria-label="Preview viewport"><button aria-pressed={mode==='desktop'} onClick={()=>setMode('desktop')}><Desktop size={17}/>Desktop</button><button aria-pressed={mode==='mobile'} onClick={()=>setMode('mobile')}><DeviceMobile size={17}/>Mobile</button></div></div>
      <div className="gallery-grid">{directions.map(d=><article className="gallery-card" key={d.name}>
        <div className="gallery-card-header"><div><span>{d.number}</span><h2>{d.name}</h2></div><a href={d.path}>Open full screen<ArrowUpRight size={18}/></a></div>
        <div className="gallery-card-content"><Preview direction={d} mode={mode}/><div className="gallery-card-body"><p>{d.description}</p><div className="gallery-feature-list">{['Desktop and mobile layouts','Working motion and interactions','Inspection request by text'].map(x=><span key={x}><Check size={16}/>{x}</span>)}</div><div className="gallery-tags">{d.tags.map(x=><span key={x}>{x}</span>)}</div></div></div>
      </article>)}</div>
    </main>
    <footer className="gallery-footer"><span>Quest Storm website directions</span><p>Design previews use free, credited photography.<br/>Inspection requests open a text draft for review.</p><a href="./PHOTO-CREDITS.html">Photo credits<ArrowUpRight size={16}/></a></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
