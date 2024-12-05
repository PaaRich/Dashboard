import { PersonnelProp } from "../types";
//import ProfileImg from "../assets/happy-successful-professional-holding-folder-with-documents.jpg";

const Personnel = ({ img, name, position }: PersonnelProp) => {
  return (
    <div className="flex items-center justify-center">
      <div className=" flex flex-col items-start bg-white">
        <img
          className="object-center h-[200px] bg-black w-[200px]"
          src={img}
          alt="img"
        />
        <div className="p-2">
          <p>{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Personnel;
