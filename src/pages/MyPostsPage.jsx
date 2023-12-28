import React from "react";

import Contour from "../components/ui/Contour";
import SelectMenu from "../components/UsersPage/SelectMenu";
import MainContents from '../components/UsersPage/MyPostsContents'

function MyPostsPage() {
  return (
    <div className="flex w-full items-center justify-center bg-gray-100">
      <div className="w-full bg-white rounded-md shadow-md p-6 ">
        <div className="w-full m-3">
          <SelectMenu></SelectMenu>
          <Contour />
          <MainContents></MainContents>
        </div>
      </div>
    </div>
  );
}

export default MyPostsPage;
