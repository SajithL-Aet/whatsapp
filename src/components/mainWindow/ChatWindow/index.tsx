import { SEND_BTN_LBL } from "../../../lib/properties/properties";

import "./style.css";

interface ChatWindowProps {
    selectedChat: any
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedChat }) => {
    return (
        <div className="ChatWindow">
            {/* Header with contact info */}
            <div className="ChatHeader">
                <img src={selectedChat.userPhoto} alt="User Avatar" />
                <div className="ChatInfo">
                    <h2>{selectedChat.userName}</h2>
                    <p>Last Seen: {selectedChat.lastSeen} ago</p>
                </div>
            </div>

            {/* Messages */}
            <div className="ChatMessages">
                {/* Display messages here */}
                <div className="Message">
                    <p>{selectedChat.lastMessage}</p>
                </div>
            </div>

            {/* Message input */}
            <div className="ChatInput">
                <input type="text" placeholder="Type a message" />
                <button>{SEND_BTN_LBL}</button>
            </div>
        </div>
    )
}

export default ChatWindow;
