import "./UserCard.css";
import Avatar from "../assets/avatar.svg";


function UserCard() {
    return (<div className="user-card">
        <img className="avatar" src={Avatar} alt="avatar" />
        <p className="username">User 1</p>
    </div>);
}

export default UserCard;