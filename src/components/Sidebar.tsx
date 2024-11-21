import { NavLink } from "react-router-dom";
import ProfileImg from "../assets/ProfileImg.jpeg";
import { SidebarWrapper } from "../styles/Sidebar.styled";
import { MdDashboard } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLiveHelp, MdLogout } from "react-icons/md";
//import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="max-w-[90%] mx-auto text-left lg:py-6 h-full flex flex-col justify-between ">
        <div>
          {/* profile */}
          <div className="border-b-2 pb-3">
            <div className="flex items-center gap-x-2">
              <img
                className="w-16 rounded-full shadow-sm"
                src={ProfileImg}
                alt="img"
              />
              <div className="flex flex-col">
                <p className="font-semibold text-xl">John Smith</p>
                <p className="font-extralight text-sm tracking-widest text-slate-500">
                  CEO,ABTS
                </p>
              </div>
            </div>
          </div>
          {/* nav */}
          <div className="py-4 text-xl overflow-y-auto overflow-x-hidden">
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <MdDashboard className="mr-1" />
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/projects"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <GoProjectSymlink className="mr-1" />
                  Projects
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/transactions"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <GrTransaction className="mr-1" />
                  Transactions
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/team"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <RiTeamFill className="mr-1" />
                  My Team
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/research"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <GiArchiveResearch className="mr-1" />
                  Research Data
                </NavLink>
              </li>
              <li className="mb-8">
                <NavLink
                  to="/report"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <TbReport className="mr-1" />
                  Reports
                </NavLink>
              </li>
              <li className="mb-4 border-t-2">
                <NavLink
                  to="/settings"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <IoSettingsSharp className="mr-1" />
                  Settings
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/help"
                  className="w-full tracking-wider p-2 rounded-md inline-flex items-center"
                >
                  <MdLiveHelp className="mr-1" />
                  Help
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* logout */}
        <div className=" py-2 cursor-pointer border-t-2 flex items-center justify-center hover:bg-slate-100 duration-500">
          <MdLogout className="mr-2" size={25} />
          Log Out
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
