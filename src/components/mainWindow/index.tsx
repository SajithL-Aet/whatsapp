import { useState } from "react";

import ChatWindow from "./ChatWindow";
import SideBar from "./SideBar";

import Profile from "../../assets/images/profile.png";
import Man from "../../assets/images/man.png";

import "./style.css";

const MainWindow: React.FC = () => {

    const [selectedChat, setSelectedChat] = useState({ id: 0, userPhoto: Man, userName: "Sajith", lastMessage: "hello", lastSeen: "5 minutes" });

    const onClickChat = (chat: any) => {
        setSelectedChat(chat);
    }

    const chatList = [
        { id: 0, userPhoto: Man, userName: "Sajith", lastMessage: "hello", lastSeen: "5 minutes" },
        { id: 1, userPhoto: Profile, userName: "Pradeep", lastMessage: "hi", lastSeen: "10 minutes" }
    ]

    /* since redux global state is not maintained yet for chat, I'll go with props for the time being  */
    return (
        <div className="main">
            <SideBar onClickChat={onClickChat} chatList={chatList} />
            <ChatWindow selectedChat={selectedChat} />
        </div>
    )
};
export default MainWindow;