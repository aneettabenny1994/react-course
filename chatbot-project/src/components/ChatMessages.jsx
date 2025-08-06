import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

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

export default ChatMessages;