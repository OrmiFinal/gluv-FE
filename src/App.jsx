import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from "react";

import MainPage from './pages/MainPage.jsx';
import MyPostPage from './pages/MyPostPage.jsx';
import MyTeamPage from './pages/MyTeamPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import PostEntryPage from './pages/PostEntryPage.jsx';
import ProfileEntryPage from './pages/ProfileEditingPage.jsx';
import ProfileEditingPage from './pages/ProfileEditingPage.jsx';
import RecruitmentPage from './pages/RecruitmentPage.jsx';
import RecruitmentPostDetailPage from './pages/RecruitmentPostDetailPage.jsx';
import RecruitmentPostEntryPage from './pages/RecruitmentPostEntryPage.jsx';
import TeamSearchPage from './pages/TeamSearchPage.jsx';
import TeamManagementPage from './pages/TeamManagementPage.jsx';
import EnrollmentMemberPage from './pages/EnrollmentMemberPage.jsx';
import UnEnrollmentMemberPage from './pages/UnEnrollmentMemberPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import NotFound from './pages/NotFound.jsx';
import TeamDetailPage from './pages/TeamDetailPage.jsx';
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
  { path: "/", component: MainPage, layoutType: "Non" },
  { path: "/MyPostPage", component: MyPostPage, layoutType: "My" },
  { path: "/MyTeamPage", component: MyTeamPage, layoutType: "My" },
  { path: "/PostDetailPage", component: PostDetailPage, layoutType: "Non" },
  { path: "/PostEntryPage", component: PostEntryPage, layoutType: "Non" },
  { path: "/ProfileEditingPage", component: ProfileEditingPage, layoutType: "Profile" },
  { path: "/RecruitmentPage", component: RecruitmentPage, layoutType: "Non" },
  { path: "/RecruitmentPostDetailPage", component: RecruitmentPostDetailPage, layoutType: "Non" },
  { path: "/RecruitmentPostEntryPage", component: RecruitmentPostEntryPage, layoutType: "Non" },
  { path: "/TeamSearchPage", component: TeamSearchPage, layoutType: "Profile" },
  { path: "/TeamManagementPage", component: TeamManagementPage, layoutType: "Profile" },
  { path: "/unEnrollmentMemberPage", component: UnEnrollmentMemberPage, layoutType: "Enroll" },
  { path: "/EnrollmentMemberPage", component: EnrollmentMemberPage, layoutType: "Enroll" },
  { path: "/TeamPage", component: TeamPage, layoutType: "Non" },
  { path: "/TeamDetailPage", component: TeamDetailPage, layoutType: "Non" },
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
