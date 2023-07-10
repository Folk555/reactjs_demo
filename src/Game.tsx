import React from "react";
import './css/Styles.css'
import Board from './Board'
import { useState } from "react";

export default function Game() {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array<string|null>(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove]
    
    function handlePlay(nextSquares: (string|null)[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext)
      }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to turn #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button className="history" onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });

    return (
        <>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        <div className="history">
            <ol>{moves}</ol>
        </div>
        </>
  );
}