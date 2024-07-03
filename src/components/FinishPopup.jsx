export default function FinishPopup({ onNewGame, correctWord, wordDefinitions }){
	return (
		<div className="absolute w-screen h-screen bg-transparent backdrop-blur-sm">
			<div className="absolute w-3/4 max-h-[33.33%] bg-white rounded-xl">
				<h1 className="uppercase font-bold text-center">{correctWord}</h1>
				<div>
					<p>Word: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quos quam dicta</p>
					<p>Word: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quos quam dicta</p>
					<p>Word: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quos quam dicta</p>
				</div>
				<button onClick={onNewGame}>New Game</button>
			</div>
		</div>
	)
}