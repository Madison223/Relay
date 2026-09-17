import JoinedChatroomItem from "./JoinedChatroomItem.jsx";
import "./Chatrooms.css";



function JoinedChatrooms() {
  return (
    <div className="my-chatrooms">
      <div className="title-my-chatrooms">
        <p className="my-chatrooms-title">Joined Chatrooms</p>
      </div>
      <div className="created-chatrooms">
        <JoinedChatroomItem />
        <JoinedChatroomItem />
        <JoinedChatroomItem />
        <JoinedChatroomItem />
      </div>
    </div>
  );
}

export default JoinedChatrooms;
