import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";

import MainPage from './pages/MainPage.jsx';
import MyPostPage from './pages/MyPostPage.jsx';
import MyTeamPage from './pages/MyTeamPage.jsx';
import RecruitmentDetailPage from './pages/RecruitmentDetailPage.jsx';
import PostEntryPage from './pages/PostEntryPage.jsx';
import ProfileEntryPage from './pages/ProfileEditingPage.jsx';
import ProfileEditingPage from './pages/ProfileEditingPage.jsx';
import PostListPage from './pages/PostListPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import RecruitmentEntryPage from './pages/RecruitmentEntryPage.jsx';
import RecruitmentListPage from './pages/RecruitmentListPage.jsx';
import TeamManagementPage from './pages/TeamManagementPage.jsx';
import EnrollmentMemberPage from './pages/EnrollmentMemberPage.jsx';
import UnEnrollmentMemberPage from './pages/UnEnrollmentMemberPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import NotFound from './pages/NotFound.jsx';
import TeamDetailPage from './pages/TeamDetailPage.jsx';
import ProfileEditPage from './pages/ProfileEditPage.jsx';
import Chatting from './pages/Chatting.jsx';
import NoticePage from './pages/NoticePage.jsx';


import Footer from "./components/Footer.jsx";
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

  // 공지사항 페이지 - 우선 남겨놓지만 게시글 상세 페이지와 동일해야 합니다.
  { path: "/posts/notices/", component: NoticePage, layoutType: "Non" },

  // 필요 없는 듯 합니다
  { path: "/MyPostPage", component: MyPostPage, layoutType: "My" },
  { path: "/MyTeamPage", component: MyTeamPage, layoutType: "My" },

  
  // 자유게시판(커뮤니티) 게시글
  // 게시글 목록
  { path: "/posts/", component: PostListPage, layoutType: "Non" },
  // 게시글 작성 페이지
  { path: "/posts/create/", component: PostEntryPage, layoutType: "Non" },
  // 게시글 상세 페이지
  { path: "/posts/:id/", component: PostDetailPage, layoutType: "Non" },

  // 모집 게시글
  // 모집 게시글 목록
  { path: "/recruits/", component: RecruitmentListPage, layoutType: "Profile" },
  // 모집 게시글 작성 페이지 (폼에 문제 있습니다)
  { path: "/recruits/create/", component: RecruitmentEntryPage, layoutType: "Non" },
  // 모집 게시글 상세 페이지
  { path: "/recruits/:id/", component: RecruitmentDetailPage, layoutType: "Non" },

  // 유저 프로필
  // 활동 중인 모임
  { path: "/users/myteams/", component: TeamManagementPage, layoutType: "Profile" },
  // 신청 중인 모임 (작성 필요)
  // { path: "/users/appliedteams/", component: TeamManagementPage, layoutType: "Profile" },
  // 내가 적은 게시물
  { path: "/users/myposts/", component: ProfileEditingPage, layoutType: "Profile" },

  // 유저 정보 수정페이지
  { path: "/users/edit/", component: ProfilePage, layoutType: "Non" },

  // 모임 상세 페이지 (UI 문제 있습니다)
  { path: "/teams/:id/", component: TeamPage, layoutType: "Non" },
  // 모임 정보 수정(리더만 가능)
  // 모임 정보 수정 페이지 
  { path: "/teams/:id/edit/", component: TeamDetailPage, layoutType: "Non" },
  // 구성원 관리
  { path: "/teams/:id/members/", component: UnEnrollmentMemberPage, layoutType: "Enroll" },
  // 신청 인원 관리
  { path: "/teams/:id/apply/", component: EnrollmentMemberPage, layoutType: "Enroll" },

  // 채팅쪽은 확인 필요합니다.
  // 채팅페이지
  { path: "/chatroom/:room_id/", component: Chatting, layoutType: "Non" },
  
];


// { path: "/", component: MainPage, layoutType: "Non" },
// // 공지사항 페이지
// { path: "/posts/notices/", component: NoticePage, layoutType: "Non" },
// // 커뮤니티 게시글 상세


// // ---
// { path: "/MyPostPage", component: MyPostPage, layoutType: "My" },
// { path: "/MyTeamPage", component: MyTeamPage, layoutType: "My" },
// // 포스트 페이지
// { path: "/PostEntryPage", component: PostEntryPage, layoutType: "Non" },
// { path: "/PostListPage", component: PostListPage, layoutType: "Non" },
// { path: "/PostDetailPage/:id", component: PostDetailPage, layoutType: "Non" },

// // 게시물 상세페이지
// { path: "/RecruitmentEntryPage", component: RecruitmentEntryPage, layoutType: "Non" },
// { path: "/RecruitmentDetailPage/:id", component: RecruitmentDetailPage, layoutType: "Non" },
// { path: "/RecruitmentListPage", component: RecruitmentListPage, layoutType: "Profile" },


// // 모임 관리
// // 모임 관리 -활동중인 모집 신청중인 모임
// { path: "/TeamManagementPage", component: TeamManagementPage, layoutType: "Profile" },
// // 모임 관리  - 구성원 관리
// { path: "/unEnrollmentMemberPage", component: UnEnrollmentMemberPage, layoutType: "Enroll" },
// { path: "/EnrollmentMemberPage", component: EnrollmentMemberPage, layoutType: "Enroll" },

//  // 모임 관리  = 내가 적은 게시물
//  { path: "/ProfileEditingPage", component: ProfileEditingPage, layoutType: "Profile" },

// // 유저수정페이지
// { path: "/UserEdit", component: ProfilePage, layoutType: "Non" },


// //팀 페이지 -팀상세페이지
// { path: "/TeamDetailPage", component: TeamDetailPage, layoutType: "Non" },

// // 채팅체이지
// { path: "/Chatting/:room_id", component: Chatting, layoutType: "Non" },

// ];


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
