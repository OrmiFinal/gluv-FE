import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";

import MainPage from './pages/MainPage.jsx';
import MyPostPage from './pages/MyPostPage.jsx';
import MyTeamPage from './pages/MyTeamPage.jsx';
import RecruitmentDetailPage from './pages/RecruitmentDetailPage.jsx';
import PostEntryPage from './pages/PostEntryPage.jsx';
import MyPostsPage from './pages/MyPostsPage.jsx';
import PostListPage from './pages/PostListPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import RecruitmentEntryPage from './pages/RecruitmentEntryPage.jsx';
import RecruitmentListPage from './pages/RecruitmentListPage.jsx';
import MyTeamsPage from './pages/MyTeamsPage.jsx';
import MyAppliedTeamsPage from './pages/MyAppliedTeamsPage.jsx';
import TeamRegistrationManagement from './pages/TeamRegistrationManagement.jsx';
import TeamManagement from './pages/TeamManagement.jsx';
import TeamPage from './pages/TeamPage.jsx';
import NotFound from './pages/NotFound.jsx';

import ProfileEditPage from './pages/ProfileEditPage.jsx';
import Chatting from './pages/Chatting.jsx';
import RecruitPostEditPage from './pages/RecruitPostEditPage.jsx';


import Navbar from "./components/Navbar.jsx";
import LeftMenu from "./components/LeftMenu.jsx"; // Import LeftMenu component
import LeftMenu2 from "./components/LeftMenu2.jsx";
import LeftMenu3 from "./components/LeftMenu3.jsx";



const SiteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const My = ({children}) => {
  return (
    <div className="flex">
      <LeftMenu2 />
      <div>{children}</div>
    </div>
  );
};


const Profile = ({children}) => {
  return (
    <div className="flex">
      <LeftMenu />
      {children}
    </div>
  );
};

const Enroll = ({children}) => {
  return (
    <div className="flex">
      <LeftMenu3 />
      {children}
    </div>
  );
};

// 페이지 정보 정의
const pages = [
  // 메인 페이지
  { path: "/", component: MainPage, layoutType: "Non" },

  // 공지사항 페이지 
  { path: "/posts/notices/", component: PostListPage, layoutType: "Non" },

  // // 필요 없는 듯 합니다
  // { path: "/MyPostPage", component: MyPostPage, layoutType: "My" },
  // { path: "/MyTeamPage", component: MyTeamPage, layoutType: "My" },

  
  // 자유게시판(커뮤니티) 게시글
  // 게시글 목록
  { path: "/posts/", component: PostListPage, layoutType: "Non" },
  // 게시글 작성 페이지
  { path: "/posts/create/", component: PostEntryPage, layoutType: "Non" },
  // 게시글 상세 페이지
  { path: "/posts/:id/", component: PostDetailPage, layoutType: "Non" },

  // 모집 게시글
  // 모집 게시글 목록
  { path: "/recruits/", component: RecruitmentListPage, layoutType: "Non" },
  // 모집 게시글 작성 페이지 (폼에 문제 있습니다)
  { path: "/recruits/create/", component: RecruitmentEntryPage, layoutType: "Non" },
  // 모집 게시글 상세 페이지
  { path: "/recruits/:id/", component: RecruitmentDetailPage, layoutType: "Non" },

  // 유저 프로필 수정
  { path: "/users/profile/edit/", component: ProfileEditPage, layoutType: "Non" },
  // { path: "/users/profile/edit", component: ProfileEditingPage, layoutType: "Non" },
  // 활동 중인 모임
  { path: "/users/myteams/", component: MyTeamsPage, layoutType: "Profile" },
  // 신청 중인 모임
  { path: "/users/myappliedteams/", component: MyAppliedTeamsPage, layoutType: "Profile" },
  // 내가 적은 게시물
  { path: "/users/myposts/", component: MyPostsPage, layoutType: "Profile" },

  // 유저 정보 수정페이지
  { path: "/users/edit/", component: ProfileEditPage, layoutType: "Non" },

  // 모임 상세 페이지 (UI 문제 있습니다)
  { path: "/teams/:id/", component: TeamPage, layoutType: "Non" },
  
  // 모임 정보 수정(리더만 가능)
  // 모임 정보 수정 페이지 
  { path: "/teams/:id/edit/", component: RecruitPostEditPage, layoutType: "Non" },

  // 
  { path: "/teams/:id/members/", component: TeamManagement, layoutType: "Non" },
  // 신청 인원 관리
  { path: "/teams/:id/apply/", component:  TeamRegistrationManagement , layoutType: "Non" },

  // 채팅쪽은 확인 필요합니다.
  // 채팅페이지
  { path: "/chatroom/:room_id/", component: Chatting, layoutType: "Non" },
  
];




const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: pages.map(({ path, component, layoutType }) => ({
      path,
      element: (
        <React.Fragment key={path}>
          {layoutType === "Profile" ? (
            <Profile key={path}>{React.createElement(component)}</Profile>
          ) : layoutType === "My" ? (
            <My key={path}>{React.createElement(component)}</My>
          ) : 
          layoutType === "Enroll" ? (
            <Enroll key={path}>{React.createElement(component)}</Enroll>
          ) :(
            // Handle other layout types as needed
            React.createElement(component)
          )}
        </React.Fragment>
      ),
    })),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
