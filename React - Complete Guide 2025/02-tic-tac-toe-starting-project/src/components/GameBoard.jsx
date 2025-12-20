const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function GameBoard() {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex} className="board-row">
                    <ol className="board-row-list">
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} className="board-cell">
                                <button>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
