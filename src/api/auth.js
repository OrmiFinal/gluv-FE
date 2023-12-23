import axios from 'axios';

const httpClient = axios.create();

httpClient.interceptors.response.use(
  response => {
    return response;  // 성공한 응답은 그대로 반환
  },
  async error => {
    if (error.response && error.response.status === 401) {
      // 401 응답이면 토큰 갱신 시도
      console.log("401 에러 발생");
      try {
        const { data } = await AutoRefreshToken();
        error.config.headers['Authorization'] = `Bearer ${data.access_token}`;
        return httpClient.request(error.config);
      } catch (refreshError) {

        console.error('Token refresh failed:', refreshError);
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);  // 401 이외의 오류는 그대로 반환
  }
);
