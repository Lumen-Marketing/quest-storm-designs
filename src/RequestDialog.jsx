import React,{useEffect,useRef,useState} from 'react';
import {ArrowUpRight,X,Check,Phone} from '@phosphor-icons/react';
export default function RequestDialog({open,onClose}) {
  const ref=useRef(null);
  const [reason,setReason]=useState('A recent storm');
  const [address,setAddress]=useState('');
  useEffect(()=>{
    const dialog=ref.current;
    if(open&&!dialog.open)dialog.showModal();
    if(!open&&dialog.open)dialog.close();
  },[open]);
  return <dialog ref={ref} className="request-dialog" onCancel={onClose} onClick={e=>e.target===ref.current&&onClose()}>
    <div className="request-inner">
      <button className="request-close" aria-label="Close inspection request" onClick={onClose}><X size={24}/></button>
      <h2>Let’s take<br/>a closer look.</h2>
      <p>A no-cost inspection. Photos of the findings. A decision that stays with you.</p>
      <fieldset><legend>What brought you here?</legend>
        {['A recent storm','Something looks wrong','I just want to check'].map(item=><button key={item} aria-pressed={reason===item} onClick={()=>setReason(item)}>{item}{reason===item&&<Check size={16}/>}</button>)}
      </fieldset>
      <label htmlFor="request-address">Property address <span>(optional)</span></label>
      <input id="request-address" autoComplete="street-address" placeholder="Street address, Arizona" value={address} onChange={e=>setAddress(e.target.value)}/>
      <a className="request-send" href={'sms:+16023996455?body='+encodeURIComponent('ROOF\nAddress: '+address+'\nReason: '+reason)}>Continue by text<ArrowUpRight size={22}/></a>
      <a className="request-phone" href="tel:+16023996455"><Phone size={18}/>602-399-6455</a>
      <small>Your text app opens with a draft.<br/>You review it before sending.</small>
    </div>
  </dialog>;
}
