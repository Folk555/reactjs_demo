import React from "react";
import './css/Styles.css'
import { useState } from "react";

export default function Board() {
  return (
    <div className="board">
        <div>
            <Button />
            <Button />
            <Button />
        </div>
        <div>
            <Button />
            <Button />
            <Button />
        </div>
        <div>
            <Button />
            <Button />
            <Button />
        </div>
    </div>
  );
}

function Button( {value}: {value?: string}) {
    return <button
    className="square" 
    onClick={handleClick}
    >
        {value}
    </button>
}

const [state, setState] = useState(null)

function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log("Clicked")
}
