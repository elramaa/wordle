export default function Board({ className, guesses, currentGuessIndex, correctWord }){
	// the current guess should be highlighted
	return (
		<div className={`size-full grid grid-rows-5 p-4 gap-1 md:px-12 ${className}`}>
			{
				guesses.map((guess, index) => (
					<GuessDisplay
						key={index} 
						guess={guess}
						correctWord={correctWord} 
						isCurrentGuess={index == currentGuessIndex} 
						isGuessed={index < currentGuessIndex}
					/>
				))
			}
		</div>
	)
}

function GuessDisplay({ guess, isCurrentGuess, isGuessed, correctWord, className }){
	// isGuessed -> to highlight the correct char and wrong char
	// iscurren 
	return (
		<div className={`size-full grid grid-cols-5 gap-1 ${className}`}>
			{
				guess.split('').map((char, index) => {
					let highlightColor;
					if(isGuessed){
						if(correctWord[index] == char){
							highlightColor = 'border-green-500 text-green-500';
						}else if(correctWord.includes(char) && correctWord[index] !== char){
							highlightColor = 'border-yellow-500 text-yellow-500';
							// HERE IS THE PROBLEM, I STILL DONT KNOW HOW TO PERFECTLY DO THIS HIGHLIGHT
						}else if(!correctWord.includes(char)){
							highlightColor = 'border-red-500 text-red-500';
						}
					}
					return (
						<div
							key={index} 
							className={`flex justify-center items-center ${highlightColor ? highlightColor : 'border-gray-300'} rounded-xl font-extrabold text-2xl uppercase border-4 bg-white`}
						>
							{char}
						</div>
					)
				})
			}
			{
				Array(5-guess.length).fill("").map((char, index) => (
					<div
						key={index} 
						className={`flex justify-center items-center bg-white rounded-xl font-extrabold text-2xl uppercase border-4 ${isCurrentGuess && index == 0 ? 'border-black animate-pulse' : 'border-gray-300'}`}
					>
						{char}
					</div>
				))
			}
		</div>
	)
}