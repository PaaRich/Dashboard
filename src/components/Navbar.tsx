import { NavbarWrapper } from "../styles/Navbar.styled";
import { IoSearchOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import ProfileImg from "../assets/ProfileImg.jpeg";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="flex items-center justify-between max-w-[95%] py-2 mx-auto">
        <div>
          <p className="font-semibold text-xl">Dashboard</p>
          <p className="text-slate-500">date</p>
        </div>
        <div className="flex items-center">
          <form className="mr-4">
            <span className="px-4 py-2 rounded-3xl w-60 bg-white flex items-center">
              <IoSearchOutline size={25} />
              <input
                type="search"
                placeholder="Search"
                className="outline-none  overflow-hidden"
              />
            </span>
          </form>
          <ThemeToggle />
          <div className="p-2 rounded-full bg-slate-100 mr-4">@</div>
          <div className="flex items-center mr-4">
            <img
              className="w-10 rounded-full mr-1"
              src={ProfileImg}
              alt="img"
            />
            Name
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
