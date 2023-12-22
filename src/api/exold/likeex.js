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

// 추천 등록
async function addLike(postId, recruitId) {
  const url = '/like/';
  const requestData = {
    post_id: postId,
    recurit_id: recruitId,
  };

  const result = await handleApiRequest(url, 'post', requestData);

  if (result) {
    console.log('추천 상태:', result.like);
  }
}

// 추천 상태 확인
async function checkLikeStatus(postId, recruitId) {
  const url = `/like?post_id=${postId}&recurit_id=${recruitId}`;
  
  const result = await handleApiRequest(url, 'get');

  if (result) {
    console.log('LIKE ID:', result.id);
    console.log('추천 상태:', result.is_like);
  }
}

// 추천 해제
async function removeLike(likeId) {
  const url = `/like/${likeId}/`;

  const result = await handleApiRequest(url, 'delete');

  if (result) {
    console.log(result.message);
  }
}

// 테스트
addLike('커뮤니티게시글ID', '모임게시글ID');

checkLikeStatus('커뮤니티게시글ID', '모임게시글ID');

// 추천 상태 확인 후 추천이 되어 있으면 추천 해제를 테스트
// 테스트를 위해서는 추천 상태 확인의 결과로 나오는 LIKE ID를 사용하세요.
// removeLike('LIKE_ID');
