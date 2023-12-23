import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import Contour from '../ui/Contour';
import { Link, useParams } from 'react-router-dom';
import { FetchTeam } from '../../api/team';

const TeamContent = () => {
  const [formData, setFormData] = useState({
    name:  '',
    category: '',
    day:  '',
    week:  '',
    max_attendance:  '',
    frequency:  1,
    location:  '무관',
    is_leader: false
  });

  const { id } = useParams();


  const fetchTeamData = async () => {
    try {
      const teamData = await FetchTeam({ id });

      
      if (teamData) {
        setFormData({
          name: teamData.name || '',
          category: teamData.category || '',
          day: teamData.day || '',
          week: teamData.week || '무관',
          max_attendance: teamData.max_attendance || '',
          frequency: teamData.frequency || 1,
          location: teamData.location || '무관',
          is_leader: teamData.s_leader
        });
      }
    } catch (error) {
      console.error('Error fetching team data:', error.message);
    }
  };

  useEffect(() => {
    

    fetchTeamData();
  }, [id]); 


  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    console.log('Save clicked. Form data:', formData);
  };

  const handleRegister = () => {
    console.log('Register clicked. Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center w-full m-3 mt-0 h-full">
      <div className="mt-9 w-full p-6 rounded-md">
        <div className="text-lg font-bold mb-3">모집 상세 내용</div>
        <Contour></Contour>
      
        <div className="w-full border-[1px] p-4 rounded-md">
          <div>
            <div className="text-sm font-semibold mb-1">모임 소개</div>
            <div
              className="w-full h-[150px] border-[1px] p-2 text-base "
              // 기존 코드에서 제공한 예시 텍스트 대신 formData.introduction을 사용
              // formData.introduction 값이 없는 경우 기본 텍스트를 사용하려면 || 연산자를 활용할 수 있습니다.
            >
              {formData.introduction || '아직 소개가 없습니다.'}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 주소</div>
            <div
              className="w-full h-[35px]  p-2 text-base "
            >
              {formData.location }
            </div>
          </div>
          <Margin top="2" />
          <Contour></Contour>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">참여인원</div>
            <div
              className="w-full h-[40px]  p-2 text-base "
            >
              {formData.max_attendance }
            </div>
          </div>
          <Margin top="2" />
          <Contour></Contour>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 시간</div>
            <div className="flex space-x-2">
              <div
                className="w-[100px] h-[40px]  p-2 text-base "
              >
            {formData.day} day
              </div>
              <div
                className="w-[100px] h-[40px]  p-2 text-base "
              >
                {formData.week }week
              </div>
              <div
                className="w-[100px] h-[40px] p-2 text-base "
              >
               {formData.frequency}주기
              </div>
             
            </div>
          </div>

          <Margin   plustailwind="h-10" />
       
          <div className="w-full h-[40px] flex items-end  justify-between">
            <div className='flex'>
            <div className="self-end  w-24">모임 시작일</div>
            <div
              className="self-end "
            >
               {formData.start_time || '아직 정해진것이 없습니다.'}
            </div>
            </div>
            </div>
            <div className='flex w-full  justify-around items-center'>
            
   
            <Link to={`/recruits/${id}`}>
            <DynamicColorButton
         
              text="모집글가기"
              btnstyle="py-2 px-2 self-end"
              onClick={handleRegister}
            />
            </Link>
   
            <DynamicColorButton
              color="blue"
              text="채팅방입장"
              btnstyle="py-2 px-2 self-end"
              onClick={handleSave}
            />
            <Link to="/teams/:id/edit/">
           <DynamicColorButton
              color="blue"
              text="수정 페이지"
              btnstyle="py-2 px-2 self-end text-sm"
           
            />
            </Link>
          </div>
        </div></div>
   
    </div>
  );
};

export default TeamContent;
