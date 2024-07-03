export default function Board({ className, guesses, currentGuessIndex }){
	// the current guess should be highlighted
	return (
		<div className={`size-full grid grid-rows-5 p-4 gap-1 md:px-12 ${className}`}>
			{
				guesses.map((guess, index) => (
					<GuessDisplay guess={guess} isCurrentGuess={index == currentGuessIndex} key={index} className={`${index > currentGuessIndex && 'opacity-50'}`}/>
				))
			}
		</div>
	)
}

function GuessDisplay({ guess, isCurrentGuess, className }){
	return (
		<div className={`size-full grid grid-cols-5 gap-1 ${className}`}>
			{
				guess.split('').map((char, index) => (
					<div
						key={index} 
						className="flex justify-center items-center bg-white rounded-xl font-extrabold text-2xl uppercase border-4 border-gray-300"
					>
						{char}
					</div>
				))
			}
			{
				Array(5-guess.length).fill("").map((char, index) => (
					<div
						key={index} 
						className={`flex justify-center items-center bg-white rounded-xl font-extrabold text-2xl uppercase border-4 ${isCurrentGuess && index == 0 ? 'border-black' : 'border-gray-300'}`}
					>
						{char}
					</div>
				))
			}
		</div>
	)
}