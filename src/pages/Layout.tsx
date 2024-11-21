import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="basis-1/5 ">
        <Sidebar />
      </div>

      <div className="basis-4/5">
        <Navbar />
        <div className="overflow-auto bg-[#cdcdf454] ">
          <div className="max-w-[95%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
