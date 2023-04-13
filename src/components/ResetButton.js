import React from 'react';
import "./ResetButton.css";

export const ResetButton = ({ resetBoard , draww }) => {
    const check = draww;
    console.log(check)
    return (
        <button className="reset-btn" onClick={resetBoard}>{draww ? "Match Draw..!! ":""}Reset Game</button>
    )
}
