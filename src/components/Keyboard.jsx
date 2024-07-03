export default function Keyboard({ className, onLetterPress, onEnterPress, onDeletePress }){
	const keyLetters = 'qwertyuiopasdfghjklzxcvbnm';
	return (
		<div className={`flex flex-col *:basis-1/3 gap-1 items-center py-10 px-2 bg-slate-300 ${className}`}>
			<div className="w-full grid grid-cols-10 gap-1">
				{
					keyLetters.split('').slice(0,10).map(key => (
						<Key key={key} onPress={() => onLetterPress(key)}>{key}</Key>
					))
				}
			</div>
			<div className="w-full grid grid-cols-9 gap-1	">
				{
					keyLetters.split('').slice(10, 19).map(key => (
						<Key key={key} onPress={() => onLetterPress(key)}>{key}</Key>
					))
				}
			</div>
			<div className="w-full grid grid-cols-11 gap-1 ">
				<Key className={"col-span-2"} onPress={onDeletePress}>Del</Key>
				{
					keyLetters.split('').slice(19).map(key => (
						<Key key={key} onPress={() => onLetterPress(key)}>{key}</Key>
					))
				}
				<Key className={"col-span-2"} onPress={onEnterPress}>Enter</Key>
			</div>
		</div>
	)
}

function Key({ children, className, onPress }){
	return (
		<button
			className={`uppercase bg-white rounded-[4px] hover:opacity-70 active:opacity-40 ${className}`}
			onClick={onPress}
		>
			{children}
		</button>
	)
}