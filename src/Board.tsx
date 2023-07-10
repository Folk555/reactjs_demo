import React from "react";
import './css/Styles.css'
import { useState } from "react";

export default function Board() {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquare] = useState(Array<string|null>(9).fill(null))
    function handleClick(i: number) {
        const nextSquares = squares.slice()
        nextSquares[i] = xIsNext ? "X" : "O"
        setSquare(nextSquares)
        setXIsNext(!xIsNext)
    }

  return (
    <div className="board">
        <div>
            <Button value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Button value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Button value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div>
            <Button value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Button value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Button value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div>
            <Button value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Button value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Button value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
    </div>
  );
}

interface IButtonValue {
    value: string | null,
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button(input: IButtonValue) {

    return <button
    className="square" 
    onClick={input.onSquareClick}
    >
        {input.value}
    </button>
}

