import "./ChatHeader.css";
import Leave from "../assets/leave.svg";

function ChatHeader() {
  return (
    <div className="chat-header">
      <h2 className="group-name-header">Group Name</h2>
      <button className="leave-chat">
        <img src={Leave} alt="leave" />
      </button>
    </div>
  );
}

export default ChatHeader;
