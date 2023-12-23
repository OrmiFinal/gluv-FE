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
import EnrollmentMemberPage from './pages/EnrollmentMemberPage.jsx';
import UnEnrollmentMemberPage from './pages/UnEnrollmentMemberPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import NotFound from './pages/NotFound.jsx';
import TeamDetailPage from './pages/TeamDetailPage.jsx';
import ProfileEditPage from './pages/ProfileEditPage.jsx';
import Chatting from './pages/Chatting.jsx';
import RecruitPostEditPage from './pages/RecruitPostEditPage.jsx';

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import LeftMenu from "./components/LeftMenu.jsx"; // Import LeftMenu component
import LeftMenu2 from "./components/LeftMenu2.jsx";
import LeftMenu3 from "./components/LeftMenu3.jsx";
import LeftMenu4 from "./components/LeftMenu4.jsx";



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


const Teams = ({children}) => {
  return (
    <div className="flex">
      <LeftMenu4 />
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
  // 모든 가능이 정상작동합니다.
  // /users/myteams/  내가 작성한 게시물에서 들어올 수 있어야 합니다.
  { path: "/posts/:id/", component: PostDetailPage, layoutType: "Non" },

  // 모집 게시글
  // 모집 게시글 목록
  { path: "/recruits/", component: RecruitmentListPage, layoutType: "Profile" },
  // 모집 게시글 작성 페이지 (폼에 문제 있습니다)
  // /recruits/create/ 가 롤백 실패하였습니다. 
  // !!! 파일 위치를 찾지못하여 다시 만들어야 합니다.
  { path: "/recruits/create/", component: RecruitmentEntryPage, layoutType: "Non" },

  // 모집 게시글 상세 페이지
  // !!! 댓글에서 전체 댓글로 불러오는 버그가 있고 정상작동합니다.
  { path: "/recruits/:id/", component: RecruitmentDetailPage, layoutType: "Non" },

  // !!! 유저 프로필 수정
  // ??? 왼쪽 네비바 추가 미니링크바 추가
  // 여기에서 팀검색등으로 링크를 추가해야할것 같습니다
  // 1) 활동중인모임 ->/users/myteams/
  // 2) 신청중인모임 ->모임 상세 페이지 /users/myappliedteams/
  // 3) 내가적은 게시물 -> /users/myposts/ 로이동합니다. -> 게시물로이동합니다.
  //  로 가져야 합니다.

  { path: "/users/profile/edit/", component: ProfileEditPage, layoutType: "Teams" },


  // !!! 활동 중인 모임
  { path: "/users/myteams/", component: MyTeamsPage, layoutType: "Teams" },
  // !!! 신청 중인 모임
  { path: "/users/myappliedteams/", component: MyAppliedTeamsPage, layoutType: "Teams" },
  // !!! 내가 적은 게시물
  { path: "/users/myposts/", component: MyPostsPage, layoutType: "Teams" },




  // // 유저 정보 수정페이지 (두개있음)
  //  // ??? 왼쪽 네비바 추가 미니링크바 추가 두개가 있는버그 이쪽이 버그인것 같아요
  // { path: "/users/edit/", component: ProfileEditPage, layoutType: "Non" },



  // !!! 모임 상세 페이지 (UI 문제 있습니다)
  // 네비바에 문제가 있습니다 users/profile/edit 네비바와 같이 사용하면 좋을것 같습니다.
  //  채팅방가기 모집글가기 내가 가입한 모임이면 갈 수 있도록 하는것이 좋을것 같습니다.
  // /users/myteams/ 활동중인 모임 이나 /users/myappliedteams/ 신청중인 모임에서 들어가져야 합니다.
  // 게시물로 가기를 누르면  /recruits/:id/ 로 이동을 하여야 합니다.
  { path: "/teams/:id/", component: TeamPage, layoutType: "Non" },
  


  //!!! 모임 정보 수정(리더만 가능)
  // 모임 정보 수정 페이지
  { path: "/recruits/:id/edit", component: RecruitPostEditPage, layoutType: "Non" },
  
  // !!! 모임 정보 수정 페이지 
  // 모임의 디테일 페이지로
  // 사이드메뉴에 각각 
  //구성원 관리
  //신청인원 관리
  //모임 삭제
  // 가있습니다.

  { path: "/teams/:id/edit/", component: TeamDetailPage, layoutType: "Non" },


  // -> 아래 두페이지는 edit 페이지에서 연결 되어야하는 페이지입니다.

  //!!!  구성원 관리
  // api 연결 및 
  //teams/:id/edit 와 같은 왼쪽 네비바
  { path: "/teams/:id/members/", component: UnEnrollmentMemberPage, layoutType: "Enroll" },

  // !!! 신청 인원 관리
  // api 연결 및 
  //teams/:id/edit 와 같은 왼쪽 네비바
  { path: "/teams/:id/apply/", component: EnrollmentMemberPage, layoutType: "Enroll" },

  // 채팅쪽은 확인 필요합니다.
  // 채팅페이지
  { path: "/chatroom/:room_id/", component: Chatting, layoutType: "Non" },
  
];


// { path: "/", component: MainPage, layoutType: "Non" },
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
          )
          : 
          layoutType === "Teams" ? (
            <Teams key={path}>{React.createElement(component)}</Teams>
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
