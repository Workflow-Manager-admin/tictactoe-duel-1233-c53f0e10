import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> TicTacToe Duel
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <h1 className="title">TicTacToe Duel</h1>
            <div className="description">
              A classic game of Tic-Tac-Toe for two players. Take turns marking spaces in the 3×3 grid
              and try to get three in a row horizontally, vertically, or diagonally to win!
            </div>
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;