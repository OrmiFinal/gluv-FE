const axios = require('axios');

const baseURL = 'your_base_url'; // API의 기본 URL로 대체하세요
const accessToken = 'your_jwt_access_token'; // JWT Access Token으로 대체하세요

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
});

// 모임 정보 변경
async function updateTeamInfo(teamId, updateData) {
  const url = `/teams/${teamId}/`;
  
  try {
    const response = await api.put(url, updateData);
    const { status, message, data } = response.data;

    if (status === '성공 코드') {
      console.log(message);
      console.log('팀 상세 정보:', data);
    } else {
      console.error('요청이 실패했습니다:', message);
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}

// 참가 신청 승인
async function approveJoinRequest(teamId, userId) {
  const url = `/teams/${teamId}/join/`;
  const requestData = {
    user_id: userId,
    status: 'accept',
  };

  try {
    const response = await api.put(url, requestData);
    const { status, message, data } = response.data;

    if (status === '성공 코드') {
      console.log(message);
      console.log('팀 상세 정보:', data);
    } else {
      console.error('요청이 실패했습니다:', message);
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}

// 모임 나가기
async function leaveTeam(teamId) {
  const url = `/teams/${teamId}/leave/`;

  try {
    const response = await api.delete(url);
    const { status, message, data } = response.data;

    if (status === '성공 코드') {
      console.log(message);
      console.log('팀 상세 정보:', data);
    } else {
      console.error('요청이 실패했습니다:', message);
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}

// 리더 변경
async function changeLeader(teamId, newLeaderId) {
  const url = `/teams/${teamId}/leader/`;
  const requestData = {
    id: newLeaderId,
  };

  try {
    const response = await api.put(url, requestData);
    const { status, message, data } = response.data;

    if (status === '성공 코드') {
      console.log(message);
      console.log('팀 상세 정보:', data);
    } else {
      console.error('요청이 실패했습니다:', message);
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}

// 모임 삭제
async function deleteTeam(teamId) {
  const url = `/teams/${teamId}/`;

  try {
    const response = await api.delete(url);
    const { status, message } = response.data;

    if (status === '성공 코드') {
      console.log(message);
    } else {
      console.error('요청이 실패했습니다:', message);
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}

// 구성원 추방
async function kickMember(teamId, userId) {
  const url = `/teams/${teamId}/kick/`;
  const requestData = {
    user_id: userId,
  };

  try {
    const response = await api.post(url, requestData);
    const { status, message } = response.data;

    if (status === '성공 코드') {
      console.log(message);
    } else {
      console.error('요청이 실패했습니다:', message);
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}

// 구성원 목록 조회
async function getMembers(teamId) {
  const url = `/teams/${teamId}/members/`;

  try {
    const response = await api.get(url);
    const { status, message, data } = response.data;

    if (status === '성공 코드') {
      console.log(message);
      console.log('구성원 목록:', data);
    } else {
      console.error('요청이 실패했습니다:', message);
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
}

// 테스트
updateTeamInfo('팀ID', {
  name: '새로운 팀명',
  category: '새로운 카테고리',
  is_closed: true,
  max_attendance: 150,
  introduce: '새로운 팀 소개',
  image: '새로운 이미지 URL',
});

approveJoinRequest('팀ID', '팀원1의ID');

leaveTeam('팀ID');

changeLeader('팀ID', '새로운 리더의 ID');

deleteTeam('팀ID');

kickMember('팀ID', '팀원1의ID');

getMembers('팀ID');
