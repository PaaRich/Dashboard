import { FaProjectDiagram } from "react-icons/fa";
import { HomeWrapper } from "../styles/HomeWrapper";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <HomeWrapper>
      <div className="max-w-[95%] mx-auto flex gap-x-4">
        {/* big */}
        <div className="basis-4/5">
          {/* cards */}
          <div className="c-cards mb-4">
            <Link
              to="projects"
              className="shadow-lg rounded-xl bg-blue-500 text-white p-3 flex items-start gap-x-2"
            >
              <FaProjectDiagram
                size={26}
                className="bg-[#ffffff63] p-1 rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">Total Projects</p>
                <h1 className="my-2 text-xl font-semibold">10,724</h1>
                <p className="text-sm">All running and completed projects</p>
              </div>
            </Link>
            <Link
              to="projects"
              className="shadow-lg rounded-xl bg-white hover:bg-blue-500 hover:text-white duration-300 group p-3 flex items-start gap-x-2"
            >
              <FaProjectDiagram
                size={26}
                className="bg-[#ffffff63] p-1 rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">Completed Projects</p>
                <h1 className="my-2 text-xl font-semibold">9,801</h1>
                <p className="text-sm">
                  <span className="text-blue-500 group-hover:text-white">
                    +12%
                  </span>{" "}
                  completion rate this month
                </p>
              </div>
            </Link>
            <Link
              to="projects"
              className="shadow-lg rounded-xl bg-white hover:bg-blue-500 hover:text-white duration-300 p-3 flex items-start gap-x-2 group"
            >
              <FaProjectDiagram
                size={26}
                className="bg-[#ffffff63] p-1 rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">Running Projects</p>
                <h1 className="my-2 text-xl font-semibold">923</h1>
                <p className="text-sm">
                  <span className="text-blue-500 group-hover:text-white">
                    +8%
                  </span>{" "}
                  Running project increases
                </p>
              </div>
            </Link>
          </div>
          {/* chart */}
          <div className="bg-white w-full rounded-lg">
            <div className="flex items-center justify-between px-4 py-3">
              <h2 className="font-semibold text-xl">Revenue Chart</h2>
              <form action="">
                <select
                  name="year"
                  id=""
                  className="border-2 cursor-pointer rounded p-1"
                >
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        {/* small */}
        <div className="basis-1/5">
          <Link
            to="team"
            className="mb-4 bg-white rounded-xl shadow-md p-4 block group hover:bg-blue-500 duration-300"
          >
            <p className="rounded-full px-2 text-blue-500 bg-slate-300 w-fit group-hover:text-blue-500 group-hover:bg-white">
              Team Review
            </p>
            <div className="my-4">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-white">
                Oxish Project Team
              </h3>
              <p className="text-xs group-hover:text-white">
                Oxish is built for every user of your project team to
                plan,manage
              </p>
              <div className="flex items-center gap-x-2 text-sm my-2">
                <span className="group-hover:text-white">10.10.2020</span>
                <span className="bg-gray-50 px-1 rounded-full">15 members</span>
              </div>
            </div>
            <button className="bg-gray-50 rounded-full px-2">
              Notion File
            </button>
          </Link>
          <Link
            to="team"
            className="bg-white rounded-xl shadow-md p-4 block group hover:bg-blue-500 duration-300 mb-4"
          >
            <p className="text-xs font-semibold">Meeting</p>
            <h3 className="text-lg font-semibold leading-tight mt-2">
              Upcoming Events Planning Discussion
            </h3>
            <p className="text-xs group-hover:text-white my-2">
              Oxish is built for every user of your project team to plan,manage
            </p>
            <div className="flex items-center gap-x-2 text-sm my-2">
              <span className="bg-gray-50 px-1 rounded-full shadow-sm">
                16th Oct
              </span>
              <span className="bg-gray-50 px-1 rounded-full shadow-sm">
                11:00 - 12:00
              </span>
            </div>
            <button className="bg-gray-50 w-full mx-auto rounded-full shadow-sm">
              Meeting Zoom Link
            </button>
          </Link>
          <Link
            to="team"
            className="bg-white rounded-xl shadow-md p-4 block group hover:bg-blue-500 duration-300 mb-4"
          >
            <p className="text-xs font-semibold">Meeting</p>
            <h3 className="text-lg font-semibold leading-tight mt-2">
              Upcoming Events Planning Discussion
            </h3>
            <p className="text-xs group-hover:text-white my-2">
              Oxish is built for every user of your project team to plan,manage
            </p>
            <div className="flex items-center gap-x-2 text-sm my-2">
              <span className="bg-gray-50 px-1 rounded-full shadow-sm">
                16th Oct
              </span>
              <span className="bg-gray-50 px-1 rounded-full shadow-sm">
                11:00 - 12:00
              </span>
            </div>
            <button className="bg-gray-50 w-full mx-auto rounded-full shadow-sm">
              Meeting Zoom Link
            </button>
          </Link>
          <Link
            to="team"
            className="bg-white rounded-xl shadow-md p-4 block group hover:bg-blue-500 duration-300 mb-4"
          >
            <p className="text-xs font-semibold">Meeting</p>
            <h3 className="text-lg font-semibold leading-tight mt-2">
              Upcoming Events Planning Discussion
            </h3>
            <p className="text-xs group-hover:text-white my-2">
              Oxish is built for every user of your project team to plan,manage
            </p>
            <div className="flex items-center gap-x-2 text-sm my-2">
              <span className="bg-gray-50 px-1 rounded-full shadow-sm">
                16th Oct
              </span>
              <span className="bg-gray-50 px-1 rounded-full shadow-sm">
                11:00 - 12:00
              </span>
            </div>
            <button className="bg-gray-50 w-full mx-auto rounded-full shadow-sm">
              Meeting Zoom Link
            </button>
          </Link>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
