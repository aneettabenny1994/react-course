import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        const { row, col } = turn.square;
        gameBoard[row][col] = turn.player;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //   setGameBoard((previousGameBoard) => {
    //     const updatedGameBoard = [
    //       ...previousGameBoard.map((innerArray) => [...innerArray]),
    //     ];
    //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //     return updatedGameBoard;
    //   });
    //   onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex} className="board-row">
                    <ol className="board-row-list">
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} className="board-cell">
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
