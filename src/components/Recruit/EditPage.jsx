import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Contour from '../ui/Contour';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import { Request } from '../../api/api';
import EditForm from './EditForm';

const EditPage = ({ postID }) => {
  const [recruitPost, setRecruitPost] = useState(null);
  const [scheduleID, setScheduleID] = useState(null);

  const navigate = useNavigate();

  const fetchRecruitPost = async () => {
      try {
        const response = await Request('get', `/recruits/${postID}/`, {}, {}, {})
        console.log(response)
        setRecruitPost(response);
        setScheduleID(response.schedule_id)
      } catch (error) {
          console.error('Error fetching post:', error.message);
          navigate('/')
      }
  };

  useEffect(() => {
    fetchRecruitPost();
  }, []);

  return (
    <div className="flex items-center justify-center w-screen mt-0 h-full">
      <EditForm recruitPost={recruitPost} scheduleID={scheduleID}></EditForm>
    </div>
  );
};

export default EditPage;
