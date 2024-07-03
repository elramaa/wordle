import { useEffect, useState } from "react";

export default function useRandomWord(){
	const [word, setWord] = useState('');
	const generateWord = () => {
		fetch('https://random-word-api.herokuapp.com/word?length=5')
			.then(res => res.json())
			.then(data => setWord(data))
	}
	useEffect(() => {
		generateWord();
	});
	return [word, generateWord];
}