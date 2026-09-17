import { useState } from "react";
import "./ChatPage.css";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";

function ChatPage() {
  return (
    <main>
    <div className="chat-page">
      <Sidebar />
      <div className="main-content"> 
      <ChatHeader />
      <MessageList />
      <MessageInput />
      </div>
    </div></main>
  );
}

export default ChatPage;
