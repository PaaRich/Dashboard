import ProfileImg from "../assets/ProfileImg.jpeg"
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"
//import ProjectDetail from "../pages/ProjectDetail"
import { ProjectDetailProp } from "../types"


const Project=({name,description,date,rocall}:ProjectDetailProp)=>{

    const {id}=useParams();

    return (
        <Link to="/projects/project" className="w-[300px] shadow-xl rounded-xl p-4 bg-white hover:bg-blue-500 hover:text-white duration-300 block">
            <div className="flex gap-x-2 justify-between">
                <div className="w-1/3">
                    <img className="w-full h-auto object-contain rounded-xl" src={ProfileImg} alt="img" />
                </div>
                <div className="w-2/3 flex flex-col items-start justify-between py-2">
                <div>
                    <h3 className="font-semibold">{name}</h3>
                </div>
                    
                    <div className="relative flex">
                        {/* {team.map((img)=>(
                            <img src={img} alt="Image 1" className="w-5 z-10 rounded-full"/>
                        ))} */}
                         <img src={ProfileImg} alt="Image 1" className="w-5 z-10 rounded-full"/>
                         <img src={ProfileImg} alt="Image 1" className="w-5 z-10 rounded-full"/>
                         <img src={ProfileImg} alt="Image 1" className="w-5 z-10 rounded-full"/>
                    </div>
                </div>
            </div>
            <p className="text-slate-500 text-sm py-2">{description}</p>
            <div className="border-t-2 border-dashed flex items-center justify-between py-2">
                <div>{rocall}</div>
                <div>{date}</div>
            </div>
        </Link>
    )
}
export default Project;