export default function Keyboard({ className }){
	const keyLetters = 'qwertyuiopasdfghjklzxcvbnm';
	return (
		<div className={`flex flex-col *:basis-1/3 gap-1 items-center py-10 px-2 bg-slate-300 ${className}`}>
			<div className="w-full grid grid-cols-10 gap-1">
				{
					keyLetters.split('').slice(0,10).map(e => (
						<button key={e} className="uppercase bg-white rounded-[4px]">{e}</button>
					))
				}
			</div>
			<div className="w-[90%] grid grid-cols-9 gap-1	">
				{
					keyLetters.split('').slice(10, 19).map(e => (
						<button key={e} className="uppercase bg-white rounded-[4px]">{e}</button>
					))
				}
			</div>
			<div className="w-[70%] grid grid-cols-7 gap-1">
				{
					keyLetters.split('').slice(19).map(e => (
						<button key={e} className="uppercase bg-white rounded-[4px]">{e}</button>
					))
				}
			</div>
		</div>
	)
}