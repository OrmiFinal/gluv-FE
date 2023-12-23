import React from "react";

import Contour from "../components/ui/Contour";
import SelectMenu from "../components/UsersPage/SelectMenu";
import MainContents from "../components/UsersPage/MyAppliedTeamsContents";

function TeamManagementPage() {
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

export default TeamManagementPage;
