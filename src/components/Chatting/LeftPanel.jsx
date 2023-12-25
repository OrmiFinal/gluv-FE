import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../context/AuthContextProvider';
import Contour from '../ui/Contour';

function LeftPanel({ chatrooms, bgColor, handleChangeRoomID}) {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        profile_image: '',
        nickname: '',
        email: '',
    });
    const { getUserInfo } = useContext(AuthContext);
    const [searchText, setSearchText] = useState('');
    
    useEffect(() => {
        const fetchProfile = async () => {
            try {
            const data = await getUserInfo();
            // console.log(data)
            setProfileData({
                profile_image: data.profile_image,
                nickname: data.nickname || '',
                email: data.email || '',
            });

            } catch (error) {
                console.error('Failed to fetch user profile:', error);
            }
        };
        
        fetchProfile();
    }, []);

    const handleChatroomClick = (chatroomId) => {
        navigate(`/chatrooms/${chatroomId}`);
    };

    const filteredChatrooms = chatrooms.filter((room) =>
        room.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className={`${bgColor} border w-3/12 ml-4 py-8 p-4 mx-2 rounded-lg shadow-md` }>
            <div className='flex-col h-full'>
                {/* 유저 프로필 */}
                <div className={`${bgColor} flex rounded-md mb-4 pl-0 w-full items-center`}>
                    <div>
                        <img src={profileData.profile_image}
                            alt="프로필 사진"
                            className="rounded-full w-16 h-16 m-0 bg-gray-500"/>
                    </div>
                    <div className='text-center w-max'>
                        <p className="px-4">{profileData.nickname}</p>
                    </div>
                </div>
                <div className='px-2'>
                    <Contour></Contour>
                </div>
                {/* 검색 창 */}
                <div className='my-2 flex items-center rounded-full bg-white'>
                    {/* 새로운 이미지 구해야함. 라이센스 문제 있을 수 있음 */}
                    <img src="data:image/png;base64,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"
                        alt="Search"
                        className="h-5 w-5 mx-2"/>
                    <input
                            type="text"
                            placeholder="Search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className=" focus:outline-none rounded-full w-full p-2"
                        />
                </div>
                <div className='px-2'>
                    <Contour></Contour>
                </div>
                {/* <Contour></Contour> */}
                {/* 채팅방 목록 */}
                <div className='mt-4 mr-4 rounded-md h-2/4 my-2'>
                    <ul className='grow p-4'>
                        {Array.isArray(filteredChatrooms) && filteredChatrooms.map((room, index) => (
                            <li key={index} onClick={()=>handleChangeRoomID(room.id)}>
                                <div className={`${bgColor} hover:bg-gray-300 p-2 flex rounded-md mb-4 pl-0 w-full items-center`}>
                                    <div>
                                        <img src={profileData.profile_image}
                                            alt="모임 사진"
                                            className="rounded-full w-8 h-8 m-0 bg-gray-500"/>
                                    </div>
                                    <div className='text-center w-max'>
                                        <p className="px-4">{room.name}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>                
            </div>
        </div>
    );
}

export default LeftPanel;
