import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
const TicTacToe = () => {
  // State for game board, current player, and game status
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'draw'

  /**
   * Checks if there's a winner based on the current board state
   * @param {Array} squares - Current board state
   * @returns {string|null} - Returns 'X', 'O', or null
   */
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Handles a player's move
   * @param {number} index - Board position index (0-8)
   */
  const handleClick = (index) => {
    // Return if square is filled or game is won
    if (board[index] || gameStatus !== 'playing') return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    
    const winner = calculateWinner(newBoard);
    const isDraw = !winner && newBoard.every(square => square !== null);
    
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setGameStatus(winner ? 'won' : isDraw ? 'draw' : 'playing');
  };

  /**
   * Resets the game to initial state
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus('playing');
  };

  // Determine game status message
  const getStatusMessage = () => {
    if (gameStatus === 'won') {
      return `Winner: ${!isXNext ? 'X' : 'O'}`;
    } else if (gameStatus === 'draw') {
      return "Game Draw!";
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="tictactoe-container">
      <div className="game-status">{getStatusMessage()}</div>
      <div className="game-board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
