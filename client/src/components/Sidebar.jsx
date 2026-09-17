import Logo from "../assets/logo.svg";
import JoinedChatrooms from "./JoinedChatrooms";
import MyChatrooms from "./MyChatrooms";
import "./Sidebar.css";
import UserCard from "./UserCard";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="heading">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="title">Relay</h1>
      </div>
      <UserCard />
      <MyChatrooms />
      <JoinedChatrooms />
      <button className="logout">Log Out</button>
    </div>
  );
}

export default Sidebar;
