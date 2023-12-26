import React, { useState, useContext, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/AuthContextProvider.jsx';
import editImage from '../assets/editImage.png';
import axios from "axios";
import { Request } from '../api/api.js';


function ProfileEditPage() {
  const { getUserInfo } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    id:'',
    profile_image: '',
    nickname: '',
    password:'',
    region: '',
    email: '',
    profile_content: '',
  });

  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const REGION_CHOICES = ['서울','경기','충남','충북','강원','전남','전북','경북','경남','제주']

  
  let isValid = false;
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const data = await getUserInfo();
        setProfileData({
          id : data.id,
          profile_image: data.profile_image || '',
          nickname: data.nickname || '',
          email: data.email || '',
          region: data.region || '',
          profile_content: data.profile_content || '',
          password:data.password,
        });
      } catch (error) {
        console.error('사용자 프로필을 가져오는 데 실패했습니다:', error);
      }
    };

    fetchData();
  }, []);

  const isImageFile = (file) => {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const extension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes(extension);
  };
  
  const handleImageChange = (e) => {
    const files = e.target.files;
  
    if (!files || files.length === 0) {
      // 사용자가 파일을 선택하지 않은 경우
      return;
    }

    const file = files[0];

    if (!isImageFile(file)) {
      alert('올바른 이미지 파일을 선택해주세요.');
      // 파일 선택 창 비우기
      e.target.value = null;
      return;
    }
  
   
  };
  
  const handleShowPasswordFields = () => {
    setShowPasswordFields((prevShowPasswordFields) => !prevShowPasswordFields);
  };
  
  const testValidPassword = async () => {
    try {
      const data = { password: profileData.password };
      const postResult = await Request('post', '/users/verify/', {}, {}, data);
  
      if(postResult){
        alert('비밀번호 검증에 성공했습니다!');
        isValid = true;
      }else{
        alert('비밀번호 검증에 실패했습니다. 비밀번호가 다릅니다.');
        isValid = false;
        
      }
      
    } catch (error) {
      console.error("비밀번호 검증에 실패했습니다:", error);
      // 실패 시 처리
      isValid = false;
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    const tokenObject = JSON.parse(localStorage.getItem('user'));
    const accessToken = tokenObject.access_token;
  
    const imageInput = document.querySelector('input[type="file"]');
    if (imageInput.files.length > 0) {
      formData.append('profile_image', imageInput.files[0]);
    }
  
    formData.append('nickname', profileData.nickname);
    formData.append('region', profileData.region);
    formData.append('profile_content', profileData.profile_content);

    if(isValid){
      console.log(isValid);
      console.log(newPassword);
      console.log(confirmPassword);
      if(newPassword != confirmPassword){
        setPasswordError('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
        return;
      }
      formData.append('password', profileData.password);
    }
  
    try {
      // API 호출 및 업데이트
      const updateUser = Request('patch', '/users/profile/', {'Content-Type': 'multipart/form-data'}, {}, formData);
  
      if (updateUser) {
        alert("프로필이 수정되었습니다.");
  
        if (updateUser.profile_image) {
          setProfileData({
            ...profileData,
            profile_image: updateUser.profile_image,
          });
        }
      }
    } catch (error) {
      console.error('프로필 업데이트에 실패했습니다:', error);
    }
  
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">프로필 수정</h2>
        <div className="mb-4">
          <img
            src={profileData.profile_image}
            alt="프로필 사진"
            className="w-64 h-64 rounded-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            
          />
        </div>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">닉네임:</p>
        <input
          type="text"
          value={profileData.nickname}
          onChange={(e) =>
            setProfileData({ ...profileData, nickname: e.target.value })
          }
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Email: {profileData.email}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">지역:</p>
        <select
          value={profileData.region}
          onChange={(e) =>
            setProfileData({ ...profileData, region: e.target.value })
          }
          className="border p-2 w-full"
        >
          <option value="">선택 지역 없음</option>
          {REGION_CHOICES.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">소개글:</p>
        <textarea
          value={profileData.profile_content}
          onChange={(e) =>
            setProfileData({ ...profileData, profile_content: e.target.value })
          }
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleShowPasswordFields}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          비밀번호 변경
        </button>
        {showPasswordFields && (
          <div className="mt-4">
            <p className="text-lg font-semibold">현재 비밀번호:</p>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border p-2 w-full"
            />
            <button
              onClick={testValidPassword}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2  mb-4"
            >
              현재 비밀번호 확인
            </button>
            <p className="text-lg font-semibold">새 비밀번호:</p>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border p-2 w-full"
            />
            <p className="text-lg font-semibold">새 비밀번호 확인:</p>
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`border p-2 w-full ${passwordError ? 'border-red-500' : ''}`}
              />
              <p className="text-red-500">{passwordError}</p>
              {/* 나머지 UI 요소들 */}
            </div>
          </div>
        )}
      </div>
      <div className="cursor-pointer mb-4 border p-4" onClick={handleSubmit}>
        <div className="flex items-center">
          <img src={editImage} alt="편집 버튼" className="w-6 h-6 mr-4" />
          <p className="text-lg font-semibold">프로필 수정</p> 
        </div>
      </div>
    </div>
  );
}

export default ProfileEditPage;