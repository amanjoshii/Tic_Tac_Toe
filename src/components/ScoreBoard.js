import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, xPlayer }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x ${!xPlayer && "inactive"}`}>X Wins : {xScore}</span>
      <span className={`score o ${ xPlayer && "inactive"}`}>O Wins : {oScore}</span>
      
    </div>
  )
}