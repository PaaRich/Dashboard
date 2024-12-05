import Project from "../components/Project";
import FileInput from "../components/FileInput";

const Projects = () => {
  return (
    <div className="max-w-[95%] mx-auto py-5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <FileInput />
        <Project
          name="Lorem, ipsum dolor."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, commodi!"
          date="11/12/2020"
          rocall="3"
        />
        <Project
          name="Lorem, ipsum dolor."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, commodi!"
          date="11/12/2020"
          rocall="3"
        />
        <Project
          name="Lorem, ipsum dolor."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, commodi!"
          date="11/12/2020"
          rocall="3"
        />
      </div>
    </div>
  );
};

export default Projects;
