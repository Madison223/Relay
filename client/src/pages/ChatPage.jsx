import { useState } from "react";
import "./ChatPage.css";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";

function ChatPage() {

  const [messages, setMessages] = useState([]);

  function handleSendMessage(newMessage) {
    setMessages((prevMessages) => {
      return [...prevMessages, newMessage];
    });
  }

  return (
    <main>
    <div className="chat-page">
      <Sidebar />
      <div className="main-content"> 
      <ChatHeader />
      <MessageList messages={messages}/>
      <MessageInput onSendMessage={handleSendMessage}/>
      </div>
    </div></main>
  );
}

export default ChatPage;
