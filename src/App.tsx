import logo from './logo.svg';
import './App.css';
import React from 'react';
import Board from './common/board';

const board = []

function App() {
  return (
    <div className="App">
      {<Board />}
    </div>
  );
}

export default App;
