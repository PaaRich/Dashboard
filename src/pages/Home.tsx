import { FaProjectDiagram } from "react-icons/fa";
import { HomeWrapper } from "../styles/HomeWrapper";
import { Link } from "react-router-dom";
import { Chart } from "chart.js";
import { CategoryScale } from "chart.js";
import BarChart from "../Reuseable/BarChart";
import { data, smallData } from "../Reuseable/utils";
import ProfileImg from "../assets/ProfileImg.jpeg";

Chart.register(CategoryScale);

interface Transaction {
  name: string;
  status: string;
  date: string;
  amount: number;
}

const Home = () => {
  const transactionDetail: Transaction[] = [
    {
      //img
      name: "Robert Carter",
      status: "Pending",
      date: "June 14,2024",
      amount: 556,
    },
    {
      //img
      name: "Donald McKenna",
      status: "Done",
      date: "August 14,2024",
      amount: 500,
    },
    {
      //img
      name: "John Therry",
      status: "Done",
      date: "May 14,2023",
      amount: 486,
    },
    {
      //img
      name: "Henry Jones",
      status: "Pending",
      date: "April 24,2023",
      amount: 685,
    },
  ];

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
          <div className="bg-white w-full rounded-lg shadow-md">
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
            {/* barChart */}
            <div className="w-[80%] mx-auto">
              <BarChart chartData={data} />
            </div>
          </div>
          {/* transactions */}
          <div className="p-4 bg-white rounded-lg mt-4 shadow-md">
            {/* heading */}
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-lg">Transactions</p>
              <form action="">
                <select name="" id="" className="p-1 rounded border-2">
                  <option value="" selected disabled>
                    All data
                  </option>
                  <option value="pending">Pending</option>
                  <option value="done">Done</option>
                </select>
              </form>
            </div>
            {/* table */}
            <table className="w-full">
              <thead>
                <tr className="font-semibold">
                  <td>Name</td>
                  <td className="text-center">Status</td>
                  <td className="text-center">Date</td>
                  <td className="text-center">Amount</td>
                </tr>
              </thead>
              <tbody>
                {transactionDetail.map((one) => (
                  <tr className="border-y-2 font-semibold">
                    <td className="flex items-center py-2">
                      <img
                        src={ProfileImg}
                        className="w-[30px] rounded-full mr-2 block object-cover"
                        loading="lazy"
                        alt=""
                      />
                      <span>{one.name}</span>
                    </td>
                    <td>
                      {one.status == "Pending" ? (
                        <p className="bg-[whitesmoke] rounded-full text-red-500 py-1 text-center">
                          {one.status}
                        </p>
                      ) : (
                        <p className="bg-[whitesmoke] rounded-full text-green-500 py-1 text-center">
                          {one.status}
                        </p>
                      )}
                    </td>
                    <td>
                      <p className="text-center">{one.date}</p>
                    </td>
                    <td>
                      {one.amount >= 500 ? (
                        <p className="text-center text-green-500">{`+$ ${one.amount}.00`}</p>
                      ) : (
                        <p className="text-center text-red-500">{`-$ ${one.amount}.00`}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <p className="text-xs font-semibold group-hover:text-white">
              Meeting
            </p>
            <h3 className="text-lg font-semibold leading-tight mt-2 group-hover:text-white">
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
            to="projects"
            className="bg-white rounded-xl shadow-md p-4 block  mb-4"
          >
            <div className="mb-2">
              <p className="font-semibold">Team Performance</p>
              <p className="text-slate-500 text-sm">last 4 months</p>
            </div>
            <div className="w-[200px]">
              <BarChart chartData={smallData} />
            </div>
          </Link>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
