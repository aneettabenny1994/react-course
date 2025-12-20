import { useState } from "react";

export function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className="player-name"> {name}</span>;
    if (isEditing) {
        playerName = <input required value={name} />;
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol"> {symbol} </span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
