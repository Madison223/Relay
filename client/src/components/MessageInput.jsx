import "./MessageInput.css";
import Sent from "../assets/sent.svg";


function MessageInput() {
    return (<div className="message-input">
        <input type="text" placeholder="Type a message..."/>
        <button><img src={Sent} alt="send" /></button>
    </div>)
}


export default MessageInput;