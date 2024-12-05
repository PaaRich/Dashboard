import { Transaction } from "../types";
//import { useNavigate } from "react-router-dom";
import ProfileImg from "../assets/ProfileImg.jpeg";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

const Transactions = () => {
  // const navigate = useNavigate();

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
    <div className="max-w-[95%] mx-auto py-5 ">
      {/* amount */}
      <div className="flex items-center w-full gap-x-4 mb-8">
        <div className="basis-1/2">
          <fieldset className="border-2 border-[#cccdcd] py-2 px-4 rounded-xl">
            <legend className="text-black text-lg font-semibold px-1">
              Current Balance
            </legend>
            <div>
              <p className="text-2xl font-bold text-blue-400">$45,543</p>
              <p>Available balance: $42,482</p>
            </div>
          </fieldset>
        </div>
        <div className="basis-1/2">
          <fieldset className="border-2 border-[#cccdcd] py-2 px-4 rounded-xl">
            <legend className="text-black text-lg font-semibold px-1">
              Transactions
            </legend>
            <div className="flex items-center">
              <div className="flex items-center text-[#45e198] mr-8">
                <ImArrowUp size={25} />
                <div className="flex flex-col items-center ml-1">
                  <p>Income</p>
                  <p className="text-xl font-semibold">+ $ 444444</p>
                </div>
              </div>
              <div className="flex items-center text-[#e16245]">
                <ImArrowDown size={25} />
                <div className="flex flex-col items-center ml-1">
                  <p>Outcome</p>
                  <p className="text-xl font-semibold">- $ 444444</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      {/* table data */}
      <table className="w-full">
        <thead>
          <tr className=" text-xl">
            <td>Name</td>
            <td className="text-center pb-2">Status</td>
            <td className="text-center">Date</td>
            <td className="text-center">Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactionDetail.map((one) => (
            <tr
              className="border-y-2 font-semibold cursor-pointer hover:bg-slate-300"
              // onClick={() =>
              //   navigate(
              //     `transactions`
              //     //the below is data that's passed down
              //     //   {
              //     //   state: complain,
              //     // }
              //   )
              // }
            >
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
              <td>
                <button className="mr-2 text-[#f35050a3] hover:text-[#f34040] duration-300">
                  <MdOutlineDeleteForever size={25} />
                </button>
                <button className="text-[#27262652] hover:text-[#2f2f2f] duration-300 ">
                  <FaEdit size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
