import React, { useState, useEffect, useRef } from 'react';

import Contour from '../ui/Contour';

import { jwtDecode } from "jwt-decode";

function CenterPanel({ bgColor, roomID}) {
    const baseURL = import.meta.env.VITE_WS_URL;

    const [socket, setSocket] = useState(null);
    const [chatRoomName, setChatRoomName] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [userID, setUserID] = useState(null);
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);
    const [hideScroll, setHideScroll] = useState(false);
    const [currentUsers, setCurrentUsers] = useState([]);

    // 엔터키 눌러서 푸쉬
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          sendMessage(userID);
        }
      };


    function removeProtocolFromUrl(url) {
    const protocols = ["http://", "https://"];
        for (const protocol of protocols) {
            if (url.startsWith(protocol)) {
            return url.substr(protocol.length);
            }
        }
        
        return url;
    }

    
    const setupWebSocket = () => {
        const wsUrl = `${baseURL}/chatrooms/${roomID}/`;
        const connection = new WebSocket(wsUrl);

        setSocket(connection);

        connection.onopen = (event) => {
            console.log("WebSocket 연결 성공");
        };

        connection.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if(data.type === 'login'){
            setChatRoomName(data.name)
            sendAuthMessage(connection);
        }else if(data.type === 'current_users'){
            setCurrentUsers(data.users);
        }
        else{
            appendMessage(data.message, data.sender, data.nickname);
        }
        };

        connection.onclose = (event) => {
        console.log("WebSocket 연결 종료");
        setTimeout(() => {
            setupWebSocket()
        }, 1000);

        return () => {
            connection.close();
        };
        };

        return () => {
        connection.close();
        };
    };

    useEffect(() => {
        const setupUserID = () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                const decodedToken = jwtDecode(user.access_token);
                if (decodedToken) {
                setUserID(decodedToken.user_id);
                }
            }
        }

        setupUserID();
        setupWebSocket();
    }, [roomID]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = (sender) => {
        if (messageInput.trim() !== "") {
            socket.send(JSON.stringify({
            type: "chat_message",
            message: messageInput,
            sender: sender
            }));

            setMessageInput('');
            appendMessage(messageInput, userID.toString(), '');
        }
    };
    
    const sendAuthMessage = (connection) => {
        const user = JSON.parse(localStorage.getItem('user'));
        connection.send(JSON.stringify({
            type: "auth",
            access_token: user.access_token,
        }));
    }

    const appendMessage = (message, sender, nickname) => {
        setMessages(prevMessages => [...prevMessages, { message, sender, nickname }]);
    };
    
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setHideScroll(true);
        } else {
            setHideScroll(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    const MessageBubble = ({ isOwnMessage, nickname, children }) => (
        <div
            className={`flex mb-2 mx-2 ${
            isOwnMessage ? 'justify-end' : 'justify-start'
            }`}
        >
            <div
            className={`rounded-md py-2 px-4 max-w-2/3 ${
                isOwnMessage
                ? 'bg-blue-500 text-white rounded'
                : ' bg-slate-200 text-black rounded'
            }`}
            >
            {`${isOwnMessage ? '' : nickname + ' : ' } ${children}`}
            </div>
        </div>
    );

    return (
        <div className={`w-9/12 mr-8 pb-8 px-0 ${bgColor} rounded shadow-md border`}>
            <div className='m-4 flex justify-between'>
                <div className='px-2'>
                    {chatRoomName}
                </div>
                <div>
                    현재 접속 인원 : 
                    {Array.isArray(currentUsers) ? 
                        currentUsers.length : ''} 
                </div>
            </div>
        <div className='px-4'>
            <Contour className></Contour>
        </div>
        <div 
            id="chat" 
            className="h-64 overflow-y-scroll mb-4 mx-4 bg-white rounded-md"
            style={{ overflowY: hideScroll ? 'hidden' : 'scroll' }}
            ref={chatContainerRef}>
            { Array.isArray(messages) && messages.map((msg, index) => (
                <MessageBubble
                key={index}
                isOwnMessage={msg.sender == userID}
                nickname = {msg.nickname}
                >
                {`${msg.message}`}
                </MessageBubble>
            ))}
        </div>
        <div className='px-4'>
            <Contour className></Contour>
        </div>
        <div className="flex items-center mx-4 border rounded-r-md">
            <input
                type="text"
                value={messageInput}
                placeholder="메시지를 입력하세요"
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 rounded-l-md p-2"
            />
            <button 
            onKeyDown={handleKeyPress}
            onClick={() => sendMessage(userID)} className="bg-blue-500 text-white rounded-r-md p-2">Send</button>
        </div>
    </div>
    );
}

export default CenterPanel;
