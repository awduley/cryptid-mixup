import React, { useState, useRef } from 'react';

import { Game } from './logic/dypets-brikker-logic.js';

import '../shared/styles/index.scss';
import './styles/index.scss';

export default function DypetsBrikker() {

  const [boardGrid, setBoardGrid] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [currentSide, setCurrentSide] = useState('kraken');
  const [isFirstTurnMessage, setIsFirstTurnMessage] = useState(true);

  const gameRef = useRef(null);

  function handleNewGameClick() {
    // If we don't have a Game yet, create one and store it in the ref
    if (!gameRef.current) {
      gameRef.current = new Game();
    }

    gameRef.current.newGame();

    // Sync React state with the Game's current state
    setBoardGrid(gameRef.current.board.grid);
    setCurrentSide(gameRef.current.currentSide);
    setIsFirstTurnMessage(true);
    setSelectedCell(null);
  }

  function handleCellClick(rowIndex, cellIndex, cell) {
    setIsFirstTurnMessage(false);  

    // If there's a piece and it does NOT belong to the current side, ignore it
    if (cell && cell.side !== currentSide) {
      console.log(
      `That is a ${cell.side} piece at [${rowIndex}, ${cellIndex}] — not your turn.`
      );
      return;
    }

    // Otherwise, allow selection (own piece or empty square)
    setSelectedCell({ row: rowIndex, col: cellIndex });

    if (!cell) {
    console.log(`Clicked empty square at [${rowIndex}, ${cellIndex}]`);
  } else {
    console.log(
      `Clicked ${cell.side} piece at [${rowIndex}, ${cellIndex}] (isKing: ${cell.isKing})`
    );
  }
  }

  return(
    <main className="db">
      <header className="db__header">
        <h1>Dypets Brikker</h1>
        <h3>Wage an epic war between the mighty Lyngbakr and the dreaded Kraken in this Scandinavian-themed game of checkers.</h3>
      </header>
      <section className="db__board">
        {boardGrid ? (
          <div className="db__grid">
            {boardGrid.map((row, rowIndex) => (
              <div className="db__row" key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const isLightSquare = (rowIndex + cellIndex) % 2 === 0;
                  
                  const isLyngbakr = cell?.side === 'lyngbakr';
                  const isKraken = cell?.side === 'kraken';

                  const isSelected =
                    selectedCell &&
                    selectedCell.row === rowIndex &&
                    selectedCell.col === cellIndex;

                  return(
                    <div className={`db__cell ${isLightSquare ? 'db__cell--light' : 'db__cell--dark'} ${isSelected ? 'db__cell--selected' : ''}`} key={cellIndex} onClick={() => handleCellClick(rowIndex, cellIndex, cell)}>
                      {isLyngbakr && 'L'}
                      {isKraken && 'K'}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="db__board-placeholder">
            Board goes here
          </div>
        )}
      </section>
      <section className="db__info">
        <div className="db__info-item db__info-item--winner">

        </div>
        <div className="db__info-item db__info-item--turn">
          {
            isFirstTurnMessage ? (
              <p>{`${currentSide.charAt(0).toUpperCase() + currentSide.slice(1)} gets to go first!`}</p>
            ) : (
              <p>Current Turn: {currentSide === 'kraken' ? 'Kraken' : 'Lyngbakr'}</p>
            )
          }
        </div>
        <div className="db__info-item db__info-item--new-game">
          <button type="button" onClick={handleNewGameClick}>New Game</button>
        </div>
      </section>
    </main>
  );
}