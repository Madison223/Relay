import MessageBubble from "./MessageBubble";
import "./MessageList.css";

function MessageList() {
    return (
        <div className="message-list">
            <MessageBubble 
    username="Eva"
    message="Hey Violet! Are we still meeting tonight?"
    time="10:32 AM"
    isMine={true}
/>

<MessageBubble 
    username="Violet"
    message="Yep! I should be free around 7."
    time="10:33 AM"
    isMine={false}
/>

<MessageBubble 
    username="Eva"
    message="Perfect. Did you hear from Mack?"
    time="10:34 AM"
    isMine={true}
/>

<MessageBubble 
    username="Violet"
    message="Not yet. I think he's still at work."
    time="10:34 AM"
    isMine={false}
/>

<MessageBubble 
    username="Eva"
    message="Ah okay. What about Miles?"
    time="10:35 AM"
    isMine={true}
/>

<MessageBubble 
    username="Violet"
    message="He said he'd come if we ordered pizza 😂"
    time="10:36 AM"
    isMine={false}
/>

<MessageBubble 
    username="Eva"
    message="Honestly, that's a pretty reasonable condition."
    time="10:36 AM"
    isMine={true}
/>

<MessageBubble 
    username="Violet"
    message="Right? I'm thinking we get pepperoni and veggie."
    time="10:37 AM"
    isMine={false}
/>

<MessageBubble 
    username="Eva"
    message="I'm in. I'll bring drinks."
    time="10:38 AM"
    isMine={true}
/>

<MessageBubble 
    username="Violet"
    message="Deal! See you at 7 😊"
    time="10:38 AM"
    isMine={false}
/>
            
        </div>
    );
}

export default MessageList;