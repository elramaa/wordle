import { FaDeleteLeft, FaArrowRightLong } from "react-icons/fa6";

export default function Keyboard({ className, invalidLetters, onLetterPress, onEnterPress, onDeletePress }){
	const keyLetters = 'qwertyuiopasdfghjklzxcvbnm';
	return (
		<div className={`flex flex-col *:basis-1/3 gap-1 items-center py-10 px-2 bg-slate-300 ${className}`}>
			<div className="w-full grid grid-cols-10 gap-1">
				{
					keyLetters.split('').slice(0,10).map(key => (
						<Key key={key} invalidLetter={invalidLetters.has(key)} onPress={() => onLetterPress(key)}>{key}</Key>
					))
				}
			</div>
			<div className="w-full grid grid-cols-9 gap-1	">
				{
					keyLetters.split('').slice(10, 19).map(key => (
						<Key key={key} invalidLetter={invalidLetters.has(key)} onPress={() => onLetterPress(key)}>{key}</Key>
					))
				}
			</div>
			<div className="w-full grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 ">
				<Key className="col-span-3" onPress={onDeletePress}><FaDeleteLeft className="text-2xl" /></Key>
				{
					keyLetters.split('').slice(19).map(key => (
						<Key className="col-span-2" key={key} invalidLetter={invalidLetters.has(key)} onPress={() => onLetterPress(key)}>{key}</Key>
					))
				}
				<Key className="col-span-3" onPress={onEnterPress}><FaArrowRightLong className="text-2xl" /></Key>
			</div>
		</div>
	)
}

function Key({ children, onPress, invalidLetter, className="" }){
	return (
		<button
			className={`flex justify-center items-center uppercase rounded-[4px] hover:opacity-70 active:opacity-40 ${invalidLetter ? 'bg-red-500 text-white' : 'bg-white'} ${className}`}
			onClick={onPress}
			disabled={invalidLetter}
		>
			{children}
		</button>
	)
}