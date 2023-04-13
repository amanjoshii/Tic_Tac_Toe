import React from 'react'
import "./Box.css";

export const Box = ({ value, onClick }) => {
    const style = value === "X" ? "box xBut" : "box oBut";

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}
