// import { useState } from "react"

export default function Board({ className }){
	return (
		<div className={`grid grid-rows-5 -${className}`}>
			<div className="grid grid-cols-5">
				<input type="text" maxLength={1} className= />
			</div>
		</div>
	)
	// return (
	// 	<div className={`${className}`}>
	// 		{
	// 			Array(5).map((_, i) => (
	// 				<WordInput key={i}/>
	// 			))
	// 		}
	// 	</div>
	// )
}

// function WordInput({ length }){
// 	const [word, setWord] = useState(Array(5));
// 	return (
// 		<div>
// 			{
// 				word.map((_, i) => (
// 					<CharInput />
// 				))
// 			}
// 		</div>
// 	)
// }

// function CharInput(){
// 	return (
// 		<input type="text" maxLength={1} />
// 	)
// }