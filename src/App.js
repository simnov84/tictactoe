// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

function TicTacToe() {
  return <Game />;
}

function Game() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    console.log(index);

    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  const restart =()=>{
    setBoard([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
    setIsXTurn(true);
  };
  return (
    <div className="full-game">
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h1>Winner is: {winner}</h1> : ""}
      <button onClick={restart}>Restart</button>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  const styles = { color: val === "X" ? "green" : "blue" };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );
}

export default TicTacToe;
