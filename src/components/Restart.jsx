import React from 'react';

function Restart({ resetGame }) {
    return (
        <button onClick={resetGame} className="restart-button">
            Restart Game / Get a New Word
        </button>
    );
}

export default Restart;
