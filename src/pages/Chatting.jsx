import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import LeftPanel from '../components/Chatting/LeftPanel';
import CenterPanel from '../components/Chatting/CenterPanel';

function Chatting() {
  const thema_color ='bg-white'
  const {room_id} = useParams();
  const [roomID, setRoomID] = useState(room_id);
  const [chatrooms, setChatRooms] = useState([]);

  const baseURL = import.meta.env.VITE_APP_API_KEY;

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
    fetchChatRoom();
    setRoomID(room_id)
  }, []);

  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };
  
  const handleChangeRoomID = (newRoomID) => {
    console.log('handleChangeRoomID')
    setRoomID(newRoomID);
};

  return (
    <main className='flex h-full' style={textStyle}>
      <LeftPanel 
        chatrooms={chatrooms} 
        handleChangeRoomID={handleChangeRoomID}
        bgColor={thema_color}>  
      </LeftPanel>
      <CenterPanel 
        bgColor= {thema_color} 
        roomID={roomID}>
      </CenterPanel>
    </main>
  );
}

export default Chatting