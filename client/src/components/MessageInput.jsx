import { useState } from "react";
import "./MessageInput.css";
import Sent from "../assets/sent.svg";


function MessageInput({onSendMessage}) {
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        console.log("Form submitted!");
    event.preventDefault();

    fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message})
    }).then((res) => res.text()).then((message) => {
        setMessage("");
        onSendMessage({message, isMine: true});
    });

}
    
    return (<form className="message-input" onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a message..." value={message} onChange={(event) => {
            setMessage(event.target.value);
        }}/>
        <button type="submit"><img src={Sent} alt="send" /></button>
    </form>)
}


export default MessageInput;