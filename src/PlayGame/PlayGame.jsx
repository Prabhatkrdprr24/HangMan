import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HangMan from "../components/HangMan/Hangman";

function PlayGame(){
    
    const location = useLocation();
    const wordSelected = location.state ?. wordSelected;

    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);

    const handleLetterClick = function(letter){
        if(wordSelected.toUpperCase().includes(letter)){
            console.log("correct clicked");
            
        }
        else{
            console.log("Incorrect");
            setStep(step+1);
            
        }
        setUsedLetters([...usedLetters, letter]);
    }

    return(
        <div>
            <h1>Play Game</h1>
            <MaskedText word={wordSelected} usedLetters={usedLetters}/>
            <hr/>
            <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick}/>
            <hr/>
            <HangMan step={step}/>
            <hr/>
            <Link to='/start' className="text-blue-600 underline hover:text-blue-700">Start Game</Link>
            

        </div>
        
    );
}
export default PlayGame;