import { NavbarWrapper } from "../styles/Navbar.styled";
import { IoSearchOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="flex items-center justify-between max-w-[95%] py-2 mx-auto">
        <div>
          <p className="font-semibold text-xl">Dashboard</p>
          <p className="text-slate-500">date</p>
        </div>
        <div>
          <form>
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
          <div></div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
