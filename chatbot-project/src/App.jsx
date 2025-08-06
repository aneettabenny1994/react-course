import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });

    // [] tells useEffect to only run once. We only want to run
    // this setup code once because we only want to add these
    // extra responses once.
  }, []);
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
