import React, { useState } from 'react';


const Board = () => {
    const [board, setBoard] = useState<string[]>([...Array(9).map(() => "")])

    const onSquareClick = (squareValue: string, squareNumber: number) => {
        if (squareValue === "O") {
            return
        }
        board[squareNumber] = "X"
        setBoard([...board])
        computerMove()
    }

    const computerMove = () => {
        const computerBoardNode = Math.random() * 9 | 0
        if (board[computerBoardNode] === "X" || board[computerBoardNode] === "O") {
            computerMove()
            return
        }
        board[computerBoardNode] = "O"
        setBoard([...board])
    }

    return <div className="board">
        {
            [...board].map((v, i) => {
                return <div className="board__square" key={i} onClick={() => onSquareClick(v, i)}>{v}</div>
            })   
        }    
    </div>
}

export default Board;