import React from "react";
import { Outlet } from "react-router-dom";
import CorporationSidebar from "../components/common/CorporationSidebar";

const CorporationDirectoryLayout: React.FC = () => {
  return (
    <div className="tw-flex tw-min-h-screen tw-bg-background">
      <CorporationSidebar />
      <div className="tw-flex tw-min-h-screen tw-min-w-0 tw-flex-1 tw-flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default CorporationDirectoryLayout;
