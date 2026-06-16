import { TrendingUp, TrendingDown, Minus, CirclePlus } from "lucide-react";


function DeltaIcon(props) {
	const delta = parseInt(props.delta || 0);
	//Need to use full class name literals so they dont get tree shaken
	let text_color;
	let bg_color;
	let Icon;
	let message;
	if(isNaN(delta)){
		bg_color="bg-amber-500/20";
		text_color="text-amber-400";
		Icon=CirclePlus;
		message=props.delta
	}
	else if(delta<0){
		bg_color="bg-rose-500/20";
		text_color="text-rose-400";
		Icon=TrendingDown;
		message=`${delta}`
	}
	else if(delta>0){
		bg_color="bg-emerald-500/20";
		text_color="text-emerald-400";
		Icon=TrendingUp;
		message=`+${delta}`;
	}
	else{
		bg_color="bg-slate-500/20";
		text_color="text-slate-400";
		Icon=Minus;
		message='—'
	}
	const classes = `inline-flex items-center gap-1 rounded-full font-medium text-sm px-2.5 py-1 ${bg_color} ${text_color}`;
	return(
		<div className={classes}>
        	<Icon />
        	<span>{message}</span>
     	</div>
    );
}
export default DeltaIcon;