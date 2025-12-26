import { useState, useRef } from "react";

export default function Player() {
  const playName = useRef();
  const [enteredPlayerName, setenteredPlayerName] = useState("");

  function handleClick() {
    setenteredPlayerName(playName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
