import { ChevronRight, User } from "lucide-react";
import DeltaIcon from './DeltaIcon.jsx';
import NumberIcon from './NumberIcon.jsx';


function InfoCard(props) {
  return (
    <>
    <a className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-slate-600/50">
      <NumberIcon number={props.number}/>
      {
        props.image
       ? <img src={props.image} alt={props.name} className="w-12 h-12 rounded-xl object-cover ring-2 ring-slate-700/50 flex-shrink-0"/>
       : <div className="text-slate-200 w-12 h-12 rounded-xl object-cover ring-2 ring-slate-700/50 flex-shrink-0 flex items-center justify-center" ><User size={32} /></div> 
      }
     <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
           <h3 className="text-lg font-semibold text-white truncate group-hover:text-amber-400 transition-colors">{props.name}</h3>
        </div>
        <p className="text-sm text-slate-400 truncate">{props.blurb}</p>
     </div>
     <DeltaIcon delta={props.delta} />
     <ChevronRight className="text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0"/>
  </a>
</>
  );
}

export default InfoCard;