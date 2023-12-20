import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

function Chatting() {
  const [userID, setUserID] = useState(null);
  const {room_id} = useParams();
  const [chatrooms, setChatRooms] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [socket, setSocket] = useState(null);

  const baseURL = import.meta.env.VITE_APP_API_KEY;

  function removeProtocolFromUrl(url) {
    const protocols = ["http://", "https://"];
    for (const protocol of protocols) {
      if (url.startsWith(protocol)) {
        return url.substr(protocol.length);
      }
    }
  
    return url;
  }

  const setupUserID = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log(user.access_token)
      const decodedToken = jwtDecode(user.access_token);
      if (decodedToken) {
        setUserID(decodedToken.user_id);
      }
    }
  }
  
  const setupWebSocket = () => {
    const wsUrl = `ws://${removeProtocolFromUrl(baseURL)}/chatrooms/${room_id}/`;
    const connection = new WebSocket(wsUrl);

    setSocket(connection);

    connection.onopen = (event) => {
      console.log("WebSocket 연결 성공");
    };

    connection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if(data.type === 'login'){
        sendAuthMessage(connection);
      }else if(data.type === 'current_users'){
        setCurrentUsers(data.users);
      }
      else{
        appendMessage(data.message, data.sender);
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

    const fetchChatRoom = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await fetch(`${baseURL}/chatrooms/`,{
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch chatroom');
            }

            const data = await response.json();
            setChatRooms(data.data);
        } catch (error) {
            console.error('Error fetching chatroom:', error.message);
        }
    };

    setupUserID();
    fetchChatRoom();
    setupWebSocket();
  }, []);

  const sendMessage = (sender) => {
    if (messageInput.trim() !== "") {
      socket.send(JSON.stringify({
        type: "chat_message",
        message: messageInput,
        sender: sender
      }));

      setMessageInput('');
      appendMessage(messageInput, userID.toString());
    }
  };

  const sendAuthMessage = (connection) => {
    const user = JSON.parse(localStorage.getItem('user'));
    connection.send(JSON.stringify({
      type: "auth",
      access_token: user.access_token,
    }));
  }

  const appendMessage = (message, sender) => {
    setMessages(prevMessages => [...prevMessages, { message, sender }]);
  };
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };
      
  return (
    <main className='flex h-full' style={textStyle}>
      <div className='w-1/12 mx-8 py-8 px-4'>
        <h2 className='mb-4'>채팅방</h2>
        <ul>
          {Array.isArray(chatrooms) && chatrooms.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div className='w-2/12 mx-8 py-8 px-4'>
        <h2 className='mb-4'>현재 접속자</h2>
        <ul>
          {Array.isArray(currentUsers) && currentUsers.map((user, index) => (
            <li key={index}>{user.nickname}</li>
          ))}
        </ul>
      </div>
      <div className="w-9/12 mx-auto mr-8 py-8 px-4 bg-white rounded shadow-md">
        <div id="chat" className="h-64 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender == userID ? 'text-right text-blue-600' : 'text-left text-green-600'}
            >
              {`${msg.sender}: ${msg.message}`}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 rounded-l-md p-2"
          />
          <button onClick={() => sendMessage(userID)} className="bg-blue-500 text-white rounded-r-md p-2">Send</button>
        </div>
      </div>
    </main>
  );
}

export default Chatting