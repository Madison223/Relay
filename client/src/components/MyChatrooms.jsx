import ChatroomItem from "./ChatroomItem";
import "./Chatrooms.css";
import Add from "../assets/add.svg";

function MyChatrooms() {
  return (
    <div className="my-chatrooms">
      <div className="title-my-chatrooms">
        <p className="my-chatrooms-title">My Chatrooms</p>
        <button className="add-chatroom">
          <img src={Add} alt="add" />
        </button>
      </div>
      <div className="created-chatrooms">
        <ChatroomItem />
        <ChatroomItem />
        <ChatroomItem />
        <ChatroomItem />
      </div>
    </div>
  );
}

export default MyChatrooms;
