import React from "react";
import './css/Styles.css'
import { useState } from "react";

interface IBoardValues {
    xIsNext: boolean,
    squares: (string|null)[],
    onPlay: Function
}

export default function Board(values: IBoardValues) {
    const squares: (null|string)[] = values.squares

    function handleClick(i: number) {
        if (values.squares[i] || calculateWinner(values.squares)) return
        const nextSquares = values.squares.slice()
        nextSquares[i] = values.xIsNext ? "X" : "O"
        values.onPlay(nextSquares)
    }

    const winner: string | null = calculateWinner(squares)
    let status: string
    if (winner) 
        status = "Winner: " + winner +"-player"
    else 
        status = (values.xIsNext ? "X" : "O") +"-player turn"

  return (
    <>
    <Status statusValue = {status}/>
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
    </>
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

function calculateWinner(squares: (string | null)[]) : string | null {

    const lines: number[][] = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i = 0; i < lines.length; ++i){
        const [a, b, c]: [number, number, number] = lines[i] as [number, number, number]
        if ((squares[a] === squares[b]) && (squares[b] === squares[c]) && (squares[a] !== null))
            return squares[a]
    }

    return null
}

const Status = ({statusValue}:{statusValue: string}) => {
    return(
    <div className="status">
    <h3>{statusValue}</h3>
    </div>)
}
