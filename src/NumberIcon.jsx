function NumberIcon(props){
	const extra = {
		1:"bg-gradient-to-br from-amber-400 to-yellow-600 text-slate-900 shadow-lg",
		2:"bg-gradient-to-br from-slate-300 to-slate-500 text-slate-900 shadow-lg",
		3:"bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg",
	}[props.number] || "bg-slate-700/50 text-slate-400";
	return <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${extra}`}>{props.number}</div>
}
export default NumberIcon;