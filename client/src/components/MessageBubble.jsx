import "./MessageBubble.css";

function MessageBubble({ username, message, time, isMine }) {
  return (
    <div className={isMine ? "message-bubble sent" : "message-bubble received"}>
      <p className="username-message">{username}</p>

      <div className="message-content"> 
      <div className={isMine ? "bubble sent" : "bubble received"}>
        <p>{message}</p>
      </div>
      <div className="message-footer">
        <p className="time">{time}</p>
        <button className="report-btn">Report</button>
      </div>
      </div>
    </div>
  );
}

export default MessageBubble;
