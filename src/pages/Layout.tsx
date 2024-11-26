import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Context } from "../Context/Context";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

//import { LayoutWrapper } from "../styles/LayoutWrapper";


const Layout = () => {
  const { isOpen, setIsOpen } = useContext(Context);
  return (
    <div className="relative md:flex lg:relative">
      <div
        className={`bg-white md:basis-1/5 lg:fixed lg:w-1/5 lg:left-0 md:relative z-50 md:-left-0 shadow-lg md:shadow-none  absolute duration-300 ${
          !isOpen ? "left-0" : "-left-full"
        }`}
      >
        <Sidebar />
        <IoClose
          className="absolute top-0 left-full bg-red-200 md:hidden"
          size={25}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div className="md:basis-4/5 lg:w-4/5">
        <div className="shadow lg:fixed lg:right-0 lg:w-4/5 z-40 lg:h-[68px]">
          <Navbar />
        </div>
        <div className="lg:absolute lg:right-0 lg:w-4/5 lg:top-[68px] bg-[#ededed]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
