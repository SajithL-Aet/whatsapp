import React from "react";

import { LOGOUT_BTN_LBL, WHATS_APP_TITLE } from "../../../lib/properties/properties";
import "./style.css";

type User = {
    id: number;
    userPhoto: string;
    userName: string;
    lastMessage: string;
    lastSeen: string
}

interface SideBarProps {
    onClickChat: (chat: any) => void,
    chatList: User[]
}

const SideBar: React.FC<SideBarProps> = ({ onClickChat, chatList }) => {


    const handleLogout = () => {
        // TODO: need a confirm popup before logging out
        window.location.href = '/';
    };
    
    return (
        <div className="Sidebar">
            <div className="Logout">
                <button onClick={handleLogout}>{LOGOUT_BTN_LBL}</button>
            </div>
            <div className="SidebarHeader">
                <h1>{WHATS_APP_TITLE}</h1>
            </div>
            <div className="SidebarChats">
                {/* Display a list of chats here */}
                {chatList.map(chat =>
                    <div className="Chat" key={chat.id} onClick={() => onClickChat(chat)} aria-hidden>
                        <img src={chat.userPhoto} alt="User Avatar" />
                        <div className="ChatInfo">
                            <h2>{chat.userName}</h2>
                            <p>{chat.lastMessage}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SideBar;
