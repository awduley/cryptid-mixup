import React, { useState } from 'react';

import '../shared/styles/index.scss';
import './styles/index.scss';

const winConditions = [
  [0, 1, 2], // Rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [2, 4, 6]
];

export default function CryptacToe() {

  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [isSasquatchTurn, setIsSasquatchTurn] = useState(true);
  const [hasWon, setHasWon] = useState(false);

  function handleSquareClick(i) {
    if (hasWon) return; 

    if (squares[i] !== null) {
      return; 
    }

    const shallowSquares = squares.slice();

    isSasquatchTurn ? (
      shallowSquares[i] = 'sasquatch'
    ): (
      shallowSquares[i] = 'dogman'
    );

    setSquares(shallowSquares);
    setIsSasquatchTurn(prevState => !prevState);

    checkForWin(shallowSquares);
  }

  function getSquareIcon(value) {
    if (value === 'sasquatch') {
      return (
        <img
          src="/games/cryptac-toe/icons/sasquatch-token-96.webp"
          srcSet="/games/cryptac-toe/icons/sasquatch-token-96.webp 1x,
                  /games/cryptac-toe/icons/sasquatch-token-192.webp 2x"
          alt="Sasquatch"
          className="ctt__icon"
        />);
    }

    if (value === 'dogman') {
      return (
        <img 
          src="/games/cryptac-toe/icons/dogman-token-96.webp"
          srcSet="/games/cryptac-toe/icons/dogman-token-96.webp 1x,
                  /games/cryptac-toe/icons/dogman-token-192.webp 2x"
        alt="Dogman"
        className="ctt__icon"
        />);
    }
    return null;
  }

  function checkForWin(squares) {
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setHasWon(true);
        return;
      }
    }
    return null; // No winner yet.
  }

  function handleReset() {
    setSquares(new Array(9).fill(null));
    setSasquatchTurn(true);
    setHasWon(false);
  }

  return(
    <main id="ctt" className="ctt" aria-labelledby="ctt-title">
      <h1 id="ctt-title" className="ctt__title">
        Cryptac-Toe</h1>
      <section className="ctt__board">
        {squares.map((v, i) => {
          return(<button key={i} className="ctt__square" type="button" onClick={() => handleSquareClick(i)}>{getSquareIcon(v)}</button>);
        })}
      </section>
      <section className="ctt__status">
        <span className="ctt__status-text">{isSasquatchTurn ? "Sasquatch's turn" : "Dogman's Turn"}</span>
        <button className="ctt__reset" type="button" onClick={handleReset}>Reset</button>
      </section>
    </main>
  );
}