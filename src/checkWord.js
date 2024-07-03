export default async function checkWord(word){
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	if(!response.ok) return false;
	
	const data = await response.json();
	const result = {};
	data[0]['meanings'].forEach(mean => {
		result[mean.partOfSpeech] = mean.definitions[0].definition;
	})
	return result;
}

// console.log(checkWord('hellw').then(res => res))
// checkWord('hello').then(res => console.log(res))