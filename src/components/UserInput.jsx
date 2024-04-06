import React, { useState } from 'react';
import { data } from '../assets/data';
import Restart from './Restart'; // Import the new component

function UserInput() {
    const getRandomWord = () => {
        const keys = Object.keys(data);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return {
            word: data[randomKey].word,
            description: data[randomKey].description
        };
    };

    const [wordData, setWordData] = useState(getRandomWord());
    const [guess, setGuess] = useState('');



    const handleGuessWordInput = (event) => {
        setGuess(event.target.value);    };

    const resetGame = () => {
        setWordData(getRandomWord()); // Get a new random word
        setGuess(''); // Reset the guess input
    };

    const simpleMessage = () => {
        if (guess === '') {
            return "Please enter a word.";
        } else if (guess.toLowerCase() === wordData.word.toLowerCase()) {
            return `That is correct! the Word is "${wordData.word}"`;
        } else {
            return "That's not correct, try again!";
        }
    };

    return (
        <>
            <div id='userInput'>
                <p><span>Description:</span> {wordData.description}</p>
                <div id='input'>
                    <label>Enter{} The Answer</label>
                    <input type="text" value={guess} onChange={handleGuessWordInput} required />
                </div>
            </div>
            <p className={'spaceP note'}>Note: All Words Start With Capital Letter</p>
            <p className='spaceP'>{simpleMessage()}</p>
            <Restart resetGame={resetGame} /> {/* Use the RestartGame component */}
        </>
    );
}

export default UserInput;