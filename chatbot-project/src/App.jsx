import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import './App.css'

function ChatInput({ chatMessages, setChatMessages }) {
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
      },
    ]);
    setInputText("");
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
      </div>
    </>
  );
}


function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-robot"
      }
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text"> {message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  //useState has 2 values - 1st value current Data, 2nd value = new value of array.
  const chatMessagesRef = useRef(null); //useRef is used to get the reference of a DOM element.
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);  //Dependencies array - when chatMessages changes, this function runs.

  return (
    <>
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })}
      </div>
    </>
  );
}


function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello Chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is 27th July",
      sender: "robot",
      id: "id4",
    },
  ]);
  return (
    <>
      <div className="app-container">
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}

export default App
