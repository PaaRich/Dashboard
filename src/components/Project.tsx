import ProfileImg from "../assets/ProfileImg.jpeg"
const Project=()=>{
    return (
        <div className="w-[300px] shadow-lg rounded-xl p-4">
            <div className="flex gap-x-2 justify-between">
                <div className="w-1/3 rounded-xl">
                    <img className="w-full h-auto object-contain" src={ProfileImg} alt="img" />
                </div>
                <div className="w-2/3 flex flex-col items-start justify-between py-2">
                    <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <div className="relative flex">
                        <img src={ProfileImg} alt="Image 1" className="w-5 z-10"/>
                        <img src={ProfileImg} alt="Image 2" className="w-5 z-20"/>
                        <img src={ProfileImg} alt="Image 3" className="w-5 z-30"/>
                       
                    </div>
                </div>
            </div>
            <p className="text-slate-500 text-sm py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, labore.</p>
            <div className="border-t-2 border-dashed flex items-center justify-between">
                <div>Casting</div>
                <div>Date</div>
            </div>
        </div>
    )
}
export default Project;