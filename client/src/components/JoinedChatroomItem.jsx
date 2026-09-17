import "./Chatrooms.css";
import More from "../assets/more.svg";

function JoinedChatroomItem() {
  return (
    <div className="created-chatrooms-box">
          <p className="group-name">Group Name</p>
          <button className="more">
            <img src={More} alt="more" />
          </button>
        </div>
  );
}

export default JoinedChatroomItem;
