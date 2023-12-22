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

// 댓글 작성
async function addComment(postId, recruitId, content, toUser) {
  const url = '/comments/';
  const requestData = {
    post_id: postId,
    recurit_id: recruitId,
    content: content,
    to_user: toUser,
  };

  const result = await handleApiRequest(url, 'post', requestData);

  if (result) {
    console.log('생성된 댓글 ID:', result.comment_id);
  }
}

// 댓글 수정
async function updateComment(commentId, content) {
  const url = `/comments/${commentId}/`;
  const requestData = {
    content: content,
  };

  const result = await handleApiRequest(url, 'put', requestData);

  if (result) {
    console.log('수정된 댓글 ID:', result.comment_id);
  }
}

// 댓글 삭제
async function deleteComment(commentId) {
  const url = `/comments/${commentId}/`;

  const result = await handleApiRequest(url, 'delete');

  if (result) {
    console.log(result.message);
  }
}

// 댓글 리스트 조회
async function getCommentList(postId, recruitId) {
  const url = `/comments/?post_id=${postId}&recurit_id=${recruitId}`;

  const result = await handleApiRequest(url, 'get');

  if (result) {
    console.log('댓글 리스트:', result);
  }
}

// 테스트
addComment('커뮤니티게시글ID', '모임게시글ID', '댓글 내용', '원 댓글 작성자');

// 테스트를 위해서는 댓글 수정 및 삭제의 경우, 실제로 수정 및 삭제할 댓글의 ID를 확인하여 사용하세요.
// updateComment('COMMENT_ID', '수정된 댓글 내용');
// deleteComment('COMMENT_ID');

getCommentList('커뮤니티게시글ID', '모임게시글ID');
