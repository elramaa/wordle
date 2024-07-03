import Footer from "./components/Footer";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { useEffect, useState } from "react";
import useRandomWord from "./api/useRandomWord";
import ErrorPopup from "./components/ErrorPopup";
import Popup from "./components/Popup";

export default function App() {
	// const [word, generateWord] = useRandomWord();
	const word = 'smack';
	const [guesses, setGuesses] = useState(new Array(5).fill(""));
	const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
	const [showError, setShowError] = useState(false);
	const [validLetter, setValidLetter] = useState({});

	const currentGuess = guesses[currentGuessIndex];
	console.log(guesses)

	
	
	function handleLetterPress(key){
		// set current guess dengan meng add key ke akhir current guess
		if(currentGuess.length == 5) return;
		setGuesses(guesses.map((guess, index) => (
			(index == currentGuessIndex) ? guess+key : guess
		)))
	}

	function handleEnterPress(){
		if(currentGuess.length !== 5){
			return;
		}
		if(currentGuess == word){
			return;
		}else{

			setCurrentGuessIndex(currentGuessIndex + 1);
		}
	}

	function handleDeletePress(){
		setGuesses(guesses.map((guess, index) => (
			(index == currentGuessIndex) ? guess.slice(0, -1) : guess
		)))
	}

  return (
    <div className={`relative mx-auto max-w-md h-screen bg-slate-200 grid grid-rows-12 font-sans` }>
			<Header className=""/>
			<Board className="row-span-6" guesses={guesses} currentGuessIndex={currentGuessIndex} />
			<Keyboard className="row-span-4" validLetter={validLetter} onLetterPress={handleLetterPress} onEnterPress={handleEnterPress} onDeletePress={handleDeletePress} />
			<Footer className=""/>
			<ErrorPopup 
				errorMessage="Sorry! It's not a word."
				showError={showError} 
				onAnimationEnd={() => setShowError(false)}
			/>
			{/* <Popup /> */}
    </div>
  )
}