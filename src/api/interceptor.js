import axios from 'axios';

const ReactURL = import.meta.env.VITE_React_API_KEY;

export const httpClient = axios.create();

httpClient.interceptors.response.use(
  response => {
    return response;  // 성공한 응답은 그대로 반환
  },
  async error => {
    if (error.response && error.response.status === 401) {
      // 401 응답일 때 토큰 갱신
      try {
        const newTokenData = await AutoRefreshToken();
        // 갱신된 토큰으로 업데이트
        if (newTokenData.access_token) {
          // 갱신된 토큰으로 이전 요청을 다시 시도
          return httpClient.request({
            ...error.config,
            headers: {
              ...error.config.headers,
              'Authorization': `Bearer ${newTokenData.access_token}`,
            },
          });
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        window.location.href = '/users/login';
        return Promise.reject(refreshError);
      }
    } else if(error.response && error.response.status === 500){
      window.location.href = baseURL+'/error/500/';
  
    }else{
      window.location.href=baseURL+'/error/404/'
    }
    
    return Promise.reject(error);
  }
);

async function AutoRefreshToken() {
  try {

    const user = JSON.parse(localStorage.getItem('user'));
    const refreshToken = user?.refresh_token;

    const response = await axios.post(baseURL + '/token/refresh/', {
      refresh: refreshToken,
    });

    // 새로운 액세스 토큰과 리프레시 토큰 가져오기
    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;

    // 새로운 토큰 정보를 사용자 정보에 업데이트
    const userTokens = {
      ...user,
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
    };

    // 새로운 토큰을 로컬 스토리지에 저장
    localStorage.setItem('user', JSON.stringify(userTokens));

    // 토큰 갱신에 성공했을 때 응답 반환
    return userTokens;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    throw error; // 실패한 경우 예외 처리
  }
}
