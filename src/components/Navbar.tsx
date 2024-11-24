import { NavbarWrapper } from "../styles/Navbar.styled";
import { IoSearchOutline, IoMenu } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import ProfileImg from "../assets/ProfileImg.jpeg";
import { FaMessage } from "react-icons/fa6";
import { useState, useContext } from "react";
import { Context } from "../Context/Context";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { isOpen, setIsOpen } = useContext(Context);
  return (
    <NavbarWrapper>
      <div className="flex items-center justify-between max-w-[95%] py-2 mx-auto">
        <div className="hidden md:block">
          <p className="font-semibold text-xl">Dashboard</p>
          <p className="text-slate-500">date</p>
        </div>
        <div
          className={`block md:hidden p-1 bg-white ${!isOpen && "invisible"}`}
        >
          <IoMenu
            color="black"
            size={25}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex items-center">
          <form className="mr-2 md:mr-4">
            <span className="lg:px-4 lg:py-2 p-2 rounded-3xl bg-white flex items-center justify-between group shadow">
              <IoSearchOutline size={25} />
              <input
                type="search"
                placeholder="Search"
                className="outline-none overflow-hidden duration-300 w-0 group-hover:w-full sm:w-full"
                value={search}
                onChange={(e) => setSearch(() => e.target.value)}
              />
            </span>
          </form>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <div className="p-3 rounded-full bg-white md:mr-4 relative">
            <FaMessage />
            <span className="bg-red-600 w-2 rounded-full absolute top-2 right-2 h-2"></span>
          </div>
          <div className="hidden md:flex items-center mr-4">
            <img
              className="w-10 rounded-full mr-1"
              src={ProfileImg}
              alt="img"
            />
            John Smith
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
