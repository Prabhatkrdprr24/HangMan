
export function getAllCharacters(word, usedLetters){

    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const gussedLetters = new Set(usedLetters);
    
    const characters = word.toUpperCase().split('').map(char => {
        if(gussedLetters.has(char)){
            return char;
        }
        else return '_';
    });
    return characters.join('');
}
