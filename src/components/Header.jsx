import React from 'react'
import LOGO from '../assets/Guess-Word.png'

function header() {
    return (
        <header>
            <img src={LOGO} alt='Logo for Guess Word Game'/>
            <h1>Guess Word Game</h1>
        </header>
    )
}

export default header