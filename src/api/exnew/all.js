const axios = require('axios');

// API base URL
const baseURL = 'YOUR_API_BASE_URL';  // 실제 URL로 대체해야 합니다.

// Axios 인스턴스 생성
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 유저 API 함수
const userAPI = {
  login: (data) => api.post('/users/login/', data),
  logout: () => api.post('/users/logout/'),
  signup: (data) => api.post('/users/signup/', data),
  getProfile: (userId) => api.get(`/users/${userId}/profile/`),
  updateProfile: (data) => api.patch('/users/profile/', data),
  deactivateAccount: () => api.delete('/users/deactivate/'),
  refreshToken: (data) => api.post('/token/refresh/', data),
  verifyToken: (data) => api.post('/token/verify/', data),
};

// Books API 함수
const booksAPI = {
  getRecentBooks: (count) => api.get(`/book/recent/?count=${count}`),
};

// Notifications API 함수
const notificationsAPI = {
  getUnreadNotifications: () => api.get('/notifications/unread/'),
  markNotificationsAsRead: (data) => api.patch('/notifications/read/', data),
  getAllNotifications: (page) => api.get(`/notification/?page=${page}`),
};

// Posts API 함수
const postsAPI = {
  createPost: (data) => api.post('/posts/', data),
  getNotices: (page) => api.get(`/posts/notices/?page=${page}`),
  getPostsByCategory: (category) => api.get(`/posts/?category=${category}`),
  getHotPosts: (count) => api.get('/posts/hot/'),
  getPostDetails: (postId) => api.get(`/posts/${postId}/`),
  updatePost: (postId, data) => api.patch(`/posts/${postId}/`, data),
  deletePost: (postId) => api.delete(`/posts/${postId}/`),
  applyRecruit: (recruitId) => api.post(`/recruits/${recruitId}/apply/`),
  cancelRecruitApplication: (recruitId) => api.delete(`/recruits/${recruitId}/apply/`),
  checkRecruitApplication: (recruitId) => api.get(`/recruits/${recruitId}/apply/`),
};

// Recruits API 함수
const recruitsAPI = {
  getHotRecruits: () => api.get('/recruits/hot/'),
  getRecruits: () => api.get('/recruits/'),
  getRecruitDetails: (recruitId) => api.get(`/recruits/${recruitId}/`),
  createRecruit: (data) => api.post('/recruits/', data),
  updateRecruit: (recruitId, data) => api.patch(`/recruits/${recruitId}/`, data),
  deleteRecruit: (recruitId) => api.delete(`/recruits/${recruitId}/`),
  applyRecruit: (recruitId) => api.post(`/recruits/${recruitId}/apply/`),
  cancelRecruitApplication: (recruitId) => api.delete(`/recruits/${recruitId}/apply/`),
  checkRecruitApplication: (recruitId) => api.get(`/recruits/${recruitId}/apply/`),
};

// Teams API 함수
const teamsAPI = {
  getTeams: () => api.get('/teams/'),
  getTeamDetails: (teamId) => api.get(`/teams/${teamId}/`),
  updateTeam: (teamId, data) => api.patch(`/teams/${teamId}/`, data),
  leaveTeam: (teamId) => api.delete(`/teams/${teamId}/leave/`),
  kickMember: (teamId, memberId) => api.delete(`/teams/${teamId}/kick/`, { data: { user: memberId } }),
  deleteTeam: (teamId) => api.delete(`/teams/${teamId}/`),
  getMembers: (teamId) => api.get(`/teams/${teamId}/members/`),
  getMyTeams: () => api.get('/teams/my-teams/'),
  inviteToTeam: (teamId, data) => api.post(`/teams/${teamId}/invite/`, data),
  acceptTeamInvitation: (invitationId) => api.post(`/teams/accept-invitation/${invitationId}/`),
  rejectTeamInvitation: (invitationId) => api.post(`/teams/reject-invitation/${invitationId}/`),
};

// Schedules API 함수
const schedulesAPI = {
  getMySchedules: () => api.get('/schedules/my-schedules/'),
  createSchedule: (data) => api.post('/schedules/', data),
  updateSchedule: (scheduleId, data) => api.patch(`/schedules/${scheduleId}/`, data),
  deleteSchedule: (scheduleId) => api.delete(`/schedules/${scheduleId}/`),
};

module.exports = {
  userAPI,
  booksAPI,
  notificationsAPI,
  postsAPI,
  recruitsAPI,
  teamsAPI,
  schedulesAPI,
};
