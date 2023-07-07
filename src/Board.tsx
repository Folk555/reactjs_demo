import React from "react";
import './css/Styles.css'

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

function Button() {
    return <button className="square">X</button>
}
