import axios from 'axios';

const baseURL = 'your_base_url'; // API의 기본 URL로 대체하세요
const accessToken = 'your_jwt_access_token'; // JWT Access Token으로 대체하세요

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
});

async function handleApiRequest(url, method, requestData = {}) {
  try {
    const response = await api({ url, method, data: requestData });
    const { status, message, data } = response.data;

    if (status === '성공 코드') {
      console.log(message);
      return data;
    } else {
      console.error('요청이 실패했습니다:', message);
      return null;
    }
  } catch (error) {
    console.error('오류 발생:', error.message);
    return null;
  }
}

// 알림 조회
async function getUnreadNotifications() {
  const url = '/notification/unread/';

  const result = await handleApiRequest(url, 'get');

  if (result) {
    console.log('알림 목록:', result);
  }
}

// 알림 상태 변경
async function markNotificationsAsRead(notificationIds) {
  const url = '/notification/read/';
  const requestData = {
    ids: notificationIds,
  };

  const result = await handleApiRequest(url, 'patch', requestData);

  if (result) {
    console.log(result.message);
  }
}

// 알림 목록 조회
async function getAllNotifications() {
  // 알림 목록을 모두 조회하는 Endpoint 정보가 주어지지 않았습니다.
  // 해당 부분을 확인하고 수정이 필요합니다.
}

// 테스트
getUnreadNotifications();

// 테스트를 위해서는 알림 상태 변경의 경우, 실제로 읽음으로 표시할 알림의 ID 배열을 확인하여 사용하세요.
// markNotificationsAsRead([1, 2, 3]);

// 알림 목록 조회의 경우, 실제로 알림 목록을 조회하는 Endpoint를 확인하여 사용하세요.
// getAllNotifications();
