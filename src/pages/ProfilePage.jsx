import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import editImage from '../assets/editImage.png';
import axios from "axios";


function ProfilePage() {
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
    setShowPasswordFields(true);
  };
  
  const testValidPassword = () => {
    // 패스워드 검증 url이 필요합니다.
    console.log(profileData.password)

  // 테스트 진행

  isValid = true;

  }

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
  
    axios
      .put('http://127.0.0.1:8000/users/profile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        alert('프로필이 업데이트되었습니다.');
        setProfileData({
          profile_image: response.data.profile_image,
          nickname: response.data.nickname,
          region: response.data.region,
          profile_content: response.data.profile_content,
        });
      })
      .catch((error) => {
        
        console.error('프로필 업데이트에 실패했습니다:', error);
      });
  };

  return (
    <div>
      <h2>프로필 수정</h2>
      <img src={profileData.profile_image} alt="프로필 사진"   style={{maxWidth: '200px',  maxHeight: '200px', }}/>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <div>
        <p>닉네임:</p>
        <input type="text" value={profileData.nickname} onChange={(e) => setProfileData({ ...profileData, nickname: e.target.value })} />
      </div>
      <div>
        <p>Email: {profileData.email}</p>
      </div>
      <div>
        <p>지역:</p>
        <select
          value={profileData.region}
          onChange={(e) => setProfileData({ ...profileData, region: e.target.value })}
        >
          <option value="">선택 지역 없음</option>
          {REGION_CHOICES.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>소개글:</p>
        <textarea value={profileData.profile_content} onChange={(e) => setProfileData({ ...profileData, profile_content: e.target.value })} />
      </div>
      <div>
        <button onClick={handleShowPasswordFields}>비밀번호 변경</button>
        {showPasswordFields && (
          <div>
            <p>현재 비밀번호:</p>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <button onClick={testValidPassword}>현재 비밀번호 확인</button>
            <p>새 비밀번호:</p>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <p>새 비밀번호 확인:</p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            
          </div>
          
        )}
      </div>
      <p>
        프로필 수정
        <img src={editImage} alt="편집 버튼" onClick={handleSubmit} />
      </p>
    </div>
  );
}

export default ProfilePage;
