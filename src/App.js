import React, { useState } from "react";
import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";
import { ScoreBoard } from "./components/ScoreBoard";
import './App.css';

const App = () => {

  const win_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  //Game Starts with X Player 
  const [xPlayer, setxPlayer] = useState(true);

   //Check for Draw 
   const [draw, setDraw] = useState(false);

  //Making Board with empty Boxes
  const [board, setBoard] = useState(Array(9).fill(null))

  //Here Scores are 0-0 initially and Updates accordingly
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })

  //Setting Gameover
  const [gameOver, setGameOver] = useState(false);

  // Updating the board
  const handleBoxClick = (boxId) => {
  const updatedBoard = board.map((e, i) => {
      if (i === boxId) {
        return xPlayer ? "X" : "O";
      } else {
        return e;
      }
  })
  setBoard(updatedBoard);

  //if either player has won the game we'll check and update score
  const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      } else {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      }
    }else {
      // Check if it's a draw
      if (updatedBoard.every((box) => box !== null)) {
        setGameOver(true);
        setDraw(true);
      }
    }

    //Changing player / Switching
    setxPlayer(!xPlayer);
  }

  //Checking wining combinations
  const checkWinner = (board) => {
    for (let i = 0; i < win_combos.length; i++) {
      const [a, b, c] = win_combos[i];

      // Iterating through win conditions
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        return board[a];
      }
    }
  }

  //Reset Board
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setDraw(false);
  }

  return (
    <div className="App">
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ScoreBoard scores={scores} xPlayer={xPlayer} />
      <ResetButton resetBoard={resetBoard} draww ={draw}/>
    </div>
  );
}

export default App;
