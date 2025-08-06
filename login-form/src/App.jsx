import { ChatInput } from './components/ChatInput';
import './App.css'

function App() {
  return (
    <>

      <p>Hello, welcome to my website</p>
      <ChatInput placeholder="Email" />
      <ChatInput placeholder="Password" />
      <button className="send-button">Login</button>
      <button className="send-button">Sign up</button>
    </>
  );
}

export default App
