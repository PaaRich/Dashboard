import ProfileImg from "../assets/ProfileImg.jpeg";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import ProjectDetail from "../pages/ProjectDetail"
import { ProjectDetailProp } from "../types";
import { CiMenuKebab } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

const Project = ({ name, description, date }: ProjectDetailProp) => {
  //const { id } = useParams();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-[300px] shadow-xl rounded-xl p-4 bg-white block">
      <div className="flex gap-x-2 justify-between">
        <div className="w-1/3">
          <img
            className="w-full h-auto object-contain rounded-xl"
            src={ProfileImg}
            alt="img"
          />
        </div>
        <div className="w-2/3 flex flex-col items-start justify-between py-2">
          <div className="flex items-center relative">
            <h3 className="font-semibold">{name}</h3>
            <CiMenuKebab
              size={24}
              className="float-end cursor-pointer hover:scale-110 duration-150 rounded-lg"
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu && (
              <div className=" absolute top-6 px-2 py-1 right-3 shadow bg-blue-300  rounded-l-xl rounded-br-xl">
                <p>Delete</p>
                <p>Edit</p>
              </div>
            )}
          </div>

          <div className="relative flex">
            {/* {team.map((img)=>(
                            <img src={img} alt="Image 1" className="w-5 z-10 rounded-full"/>
                        ))} */}
            <img
              src={ProfileImg}
              alt="Image 1"
              className="w-5 z-10 rounded-full"
            />
            <img
              src={ProfileImg}
              alt="Image 1"
              className="w-5 z-10 rounded-full"
            />
            <img
              src={ProfileImg}
              alt="Image 1"
              className="w-5 z-10 rounded-full"
            />
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-sm py-2">{description}</p>
      <div className="border-t-2 border-dashed flex items-center justify-between py-2">
        <Link
          to={`/projects/${name}`}
          className="hover:translate-x-2 w-8 duration-300"
        >
          <FaLongArrowAltRight size={24} />
        </Link>
        <div>{date}</div>
      </div>
    </div>
  );
};
export default Project;
