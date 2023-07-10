import React from "react";
import './css/Styles.css'
import Board from './Board'
import { useState } from "react";

export default function Game() {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array<string|null>(9).fill(null)])
    const currentSquares = history[history.length - 1]

    function handlePlay(nextSquares: (string|null)[]) {
        setHistory([...history, nextSquares])
        setXIsNext(!xIsNext)
      }

    return (
        <>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        <div>
            <ol>OOOOOOOOOOLLLLLLLLLL</ol>
        </div>
        </>
  );
}