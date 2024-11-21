import { IoIosSunny, IoMdMoon } from "react-icons/io";

const ThemeToggle = () => {
  return (
    <div className="flex items-center p-2 rounded-full bg-slate-50 w-16 mr-4">
      <IoIosSunny size={24} className="text-slate-400" />
      <IoMdMoon size={24} />
    </div>
  );
};

export default ThemeToggle;
