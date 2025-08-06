import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function SaveInputText(event) {
    setInputText(event.target.value);
  }
  function SendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(), //provides uniquieID - crypto provided by JS
        time: dayjs().valueOf()
      },
    ];
    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(), //provides uniquieID - crypto provided by JS
        time: dayjs().valueOf()
      },
    ]);
    setInputText("");
  }
  function ClearMessage() {
    setChatMessages([]);
  }
  return (
    <>
      <div className="chat-input-container">
        <input
          className="chat-input"
          placeholder="Send a message to Chatbot"
          size="30"
          onChange={SaveInputText}
          value={inputText}
        />
        <button onClick={SendMessage} className="send-button">
          Send
        </button>
        <button onClick={ClearMessage} className="clear-button">
          Clear
        </button>
      </div>
    </>
  );
}