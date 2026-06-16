import logo from './logo.svg';
import './App.css';
import InfoCard from './InfoCard.jsx';
import { Trophy, Download } from "lucide-react";
import { useState, useRef } from 'react';
import domtoimage from 'dom-to-image';

function App() {
  const [list, setList] = useState([]);
  const [curr, setCurr] = useState({number:1});
  const rankingRef = useRef(null);
  const imageRef = useRef(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 pb-16">
      <div  ref={rankingRef}>
        <div className="flex items-center gap-2 mb-6"><Trophy className="text-amber-400" /><h2 className="text-xl font-semibold text-white">Full Rankings</h2></div>
        <div className="space-y-3">
        {
          list.map((x,i) => <InfoCard key={i} {...x} />)
        }
        </div>
        </div>
      <div className="mt-10 mb-3 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 p-5 grid gap-3 mb-6 md:grid-cols-2">
        <div className="py-1 flex items-center">
          <label htmlFor="name-field" className="font-medium text-white pr-3 select-none">Name:</label>
          <input placeholder="Name" className="flex-1 bg-slate-900 text-white border border-slate-500 rounded-md text-heading text-sm px-2 py-1.5 shadow-xs" id="name-field" value={curr.name} onChange={event => setCurr({...curr, name:event.target.value})}/>
        </div>
        <div className="py-1 flex items-center">
          <label htmlFor="blurb-field" className="font-medium text-white pr-3 select-none">Blurb:</label>
          <input placeholder="Extra info" className="flex-1 bg-slate-900 text-white border border-slate-500 rounded-md text-heading text-sm px-2 py-1.5 shadow-xs" id="blurb-field" value={curr.blurb} onChange={event => setCurr({...curr, blurb:event.target.value})}/>
        </div>
        <div className="py-1 flex items-center">
          <label htmlFor="number-field" className="font-medium text-white pr-3 select-none">Placing:</label>
          <input placeholder="1" className="flex-1 bg-slate-900 text-white border border-slate-500 rounded-md text-heading text-sm px-2 py-1.5 shadow-xs" id="number-field" value={curr.number} onChange={event => setCurr({...curr, number:event.target.value})}/>
        </div>
        <div className="py-1 flex items-center">
          <label htmlFor="new-box" className="font-medium text-white pr-3 select-none">New?</label>
          <div className="pr-3">
            <input id="new-box" type="checkbox" className="" checked={curr.delta==="NEW"} onChange={event => setCurr({...curr, delta:event.target.checked ? "NEW" : 0})}/>
          </div>
          <label htmlFor="delta-field" className={`font-medium ${curr.delta!=="NEW" ? "text-white" : "text-gray-500"} pr-3`}>Change:</label>
          <input placeholder="+5" className={`flex-1 bg-slate-900 ${curr.delta!=="NEW" ? "text-white" : "text-gray-500"} border border-slate-500 rounded-md text-heading text-sm px-2 py-1.5 shadow-xs select-none`} id="delta-field" disabled={curr.delta==="NEW"} value={curr.delta} onChange={event => setCurr({...curr, delta:event.target.value})}/>
        </div>

        <div className="py-1 flex items-center">
          <label htmlFor="img-field" className="font-medium text-white pr-3 select-none">Image:</label>
          <input type="file" ref={imageRef} accept="image/*" className="flex-1 bg-slate-900 text-white border border-slate-500 rounded-md text-heading text-sm px-2 py-1.5 shadow-xs" id="img-field" onChange={event => setCurr({...curr, image: event.target.files.length ? URL.createObjectURL(event.target.files[0]) : null})}/>
        </div>

        <div className="py-1 flex items-center content-center">
          <button className="bg-gradient-to-br from-blue-600 to-cyan-600 border border-gray-500 rounded-md text-heading text-sm px-3.5 py-1.5 shadow-xs font-medium text-white" onClick={()=>{
            setList([...list, curr]);
            setCurr({number:list.length+2, delta:"", name:"", blurb:""});
            imageRef.current.value = null;
          }}>Add!</button>
        </div>
      </div>
      <button className="bg-gradient-to-br from-amber-400 to-rose-600 border border-gray-500 rounded-md text-heading text-sm px-3.5 py-1.5 shadow-xs font-medium text-white" onClick={()=>{
            const scale = 2;
            const node = rankingRef.current;
            if(!node){
              return;
            }
            domtoimage.toPng(node, {
              width: node.clientWidth * scale,
              height: node.clientHeight * scale,
              style: {
                transform: `scale(${scale})`,
                transformOrigin: "top left"
              }
            })
              .then(function (url) {
                  const link = document.createElement('a');
                  link.style.display="none";
                  link.href = url;
                  link.download="rankings.png";
                  link.click();
                  link.remove();
              });
          }}>
        <Download className="inline mr-2"/>Save as PNG
      </button>
      </div>
    </div>
  );
}

export default App;
