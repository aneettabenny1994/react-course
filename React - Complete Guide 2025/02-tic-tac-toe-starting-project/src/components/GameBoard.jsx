import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((previousGameBoard) => {
            const updatedGameBoard = [
                ...previousGameBoard.map((innerArray) => [...innerArray]),
            ];
            updatedGameBoard[rowIndex][colIndex] = "X";
            return updatedGameBoard;
        });
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex} className="board-row">
                    <ol className="board-row-list">
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} className="board-cell">
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
