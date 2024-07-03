import Footer from "./components/Footer";
import Header from "./components/Header";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { useEffect, useRef, useState } from "react";
import useRandomWord from "./api/useRandomWord";
import ErrorPopup from "./components/ErrorPopup";
import checkWord from "./checkWord";
import FinishPopup from "./components/FinishPopup";

export default function App() {
	// const [word, generateWord] = useRandomWord();
	const correctWord = 'smack';
	const wordDefinitions = useRef(null);
	const [guesses, setGuesses] = useState(new Array(5).fill(""));
	const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
	const [showError, setShowError] = useState(false);
	const [isFinish, setIsFinish] = useState(false);
	const [invalidLetters, setInvalidLetters] = useState(new Set());

	const currentGuess = guesses[currentGuessIndex];

	function handleLetterPress(key){
		if(currentGuess.length == 5) return;
		setGuesses(guesses.map((guess, index) => (
			(index == currentGuessIndex) ? guess+key : guess
		)))
	}

	async function handleEnterPress(){
		if(currentGuess.length !== 5){
			return;
		}
		if(currentGuess == correctWord){
			return;
		}
		if(currentGuessIndex === 4){
			return;
		}
		const isValidWord = await checkWord(currentGuess);
		if(!isValidWord){
			return setShowError(true);
		}
		const newInvalidLetters = new Set(invalidLetters);
		currentGuess.split('').forEach((char) => {
			if(!correctWord.includes(char)) newInvalidLetters.add(char);
		})
		setInvalidLetters(newInvalidLetters);
		setCurrentGuessIndex(currentGuessIndex + 1);
	}

	function handleDeletePress(){
		setGuesses(guesses.map((guess, index) => (
			(index == currentGuessIndex) ? guess.slice(0, -1) : guess
		)))
	}

  return (
    <div className={`relative mx-auto max-w-md h-screen bg-slate-200 grid grid-rows-12 font-sans` }>
			<Header className=""/>
			<Board className="row-span-6" guesses={guesses} currentGuessIndex={currentGuessIndex} correctWord={correctWord} />
			<Keyboard className="row-span-4" invalidLetters={invalidLetters} onLetterPress={handleLetterPress} onEnterPress={handleEnterPress} onDeletePress={handleDeletePress} />
			<Footer className=""/>
			<ErrorPopup 
				errorMessage={`Sorry! ${currentGuess} is not a valid word.`}
				showError={showError} 
				onAnimationEnd={() => setShowError(false)}
			/>
			<FinishPopup />
    </div>
  )
}