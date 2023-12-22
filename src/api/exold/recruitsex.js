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

// 인기 목록 조회
async function getHotRecruits(count, order_by) {
  const url = `/recruits/hot/?count=${count}&order_by=${order_by}`;

  const result = await handleApiRequest(url, 'get');

  if (result) {
    console.log('인기 목록:', result);
  }
}

// 목록 조회
async function getRecruitList(search, region, category, order_by, order, page) {
  const url = `/recruits/?search=${search}&region=${region}&category=${category}&order_by=${order_by}&order=${order}&page=${page}`;

  const result = await handleApiRequest(url, 'get');

  if (result) {
    console.log('Recruit 목록:', result);
  }
}

// 상세 조회
async function getRecruitDetail(recruitId) {
  const url = `/recruits/${recruitId}/`;

  const result = await handleApiRequest(url, 'get');

  if (result) {
    console.log('Recruit 상세 정보:', result);
  }
}

// 모집 글 생성
async function createRecruit(recruitData) {
  const url = '/recruits/';

  const result = await handleApiRequest(url, 'post', recruitData);

  if (result) {
    console.log('생성된 Recruit ID:', result.recruit_id);
  }
}

// 모집 글 수정
async function updateRecruit(recruitId, recruitData) {
  const url = `/recruits/${recruitId}/`;

  const result = await handleApiRequest(url, 'put', recruitData);

  if (result) {
    console.log(result.message);
  }
}

// 모집 글 삭제
async function deleteRecruit(recruitId) {
  const url = `/recruits/${recruitId}/`;

  const result = await handleApiRequest(url, 'delete');

  if (result) {
    console.log(result.message);
  }
}

// 참가 신청
async function applyToRecruit(recruitId) {
  const url = `/recruits/${recruitId}/apply/`;

  const result = await handleApiRequest(url, 'post');

  if (result) {
    console.log('참가 신청 결과:', result.data);
  }
}

// 참가 신청 취소
async function cancelApplication(recruitId) {
  const url = `/recruits/${recruitId}/apply/`;

  const result = await handleApiRequest(url, 'delete');

  if (result) {
    console.log(result.message);
  }
}

// 참가 신청 확인
async function checkApplicationStatus(recruitId) {
  const url = `/recruits/${recruitId}/apply/`;

  const result = await handleApiRequest(url, 'get');

  if (result) {
    console.log('참가 신청 상태:', result.data);
  }
}

// 테스트
getHotRecruits(5, 'date'); // 인기 목록 조회 테스트
getRecruitList('searchTerm', 'region', 'category', 'order_by', 'asc', 1); // 목록 조회 테스트
getRecruitDetail('recruitId'); // 상세 조회 테스트

// 테스트를 위해서는 모집 글 생성, 수정, 삭제, 참가 신청, 참가 신청 취소, 참가 신청 확인의 경우
// 실제 데이터를 사용하여 테스트해보세요.
// createRecruit({title: 'Recruit Title', content: 'Recruit Content', category: 'Category', leader_id: 'User_ID', max_attendance: 5, frequency: 'frequency', week: 'week', day: 'day'});
// updateRecruit('Recruit_ID', {title: 'Updated Title', content: 'Updated Content'});
// deleteRecruit('Recruit_ID');
// applyToRecruit('Recruit_ID');
// cancelApplication('Recruit_ID');
// checkApplicationStatus('Recruit_ID');
