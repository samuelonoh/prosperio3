import { Link } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsFillExclamationCircleFill,
  BsFillPersonBadgeFill,
} from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-between w-[20vw] h-[100vh]  bg-white rounded-md shadow-lg">
      <div className="flex flex-col items-center justify-between h-[60%] w-[100%] ">
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-400 text-black w-full h-[10vh] rounded-lg flex items-center justify-center gap-10 no-underline"
        >
          <div className="border-2 border-white rounded-[50%] w-[35px] h-[35px] text-center text-white">
            p
          </div>
          <div className="font-bold text-[20px] hover:text-slate-600">
            Prosperio
          </div>
        </Link>
        <div className=" w-[60%] flex items-start">
          {" "}
          <Link
            to="/dashboard/board"
            className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 text-black hover:text-red-500 focus:text-red-500 no-underline"
          >
            <p className="hover:text-red-500 focus:text-red-500 flex items-center gap-3">
              <BsGrid1X2Fill /> Dashboard
            </p>
          </Link>
        </div>
        <div className=" w-[60%] flex items-start">
        <Link
          to="/dashboard/addproducts"
          className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 text-black hover:text-red-500 focus:text-red-500 no-underline"
        >
          <p className="hover:text-red-500 focus:text-red-500 flex items-center gap-3">
            <BsGrid1X2Fill /> Products
          </p>
        </Link>
        </div>
        <div className="relative   w-[60%]">
          <button
            className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 text-black hover:text-red-500 focus:text-red-500 no-underline"
            onClick={toggleDropdown}
          >
            <p className="hover:text-red-500 focus:text-red-500 flex items-center gap-3">
              <BsFillPersonBadgeFill /> Account <IoMdArrowDropdown />
            </p>
          </button>
          {isOpen && (
            <div className="absolute left-0  mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                to="/dashboard/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500 no-underline"
              >
                Profile
              </Link>
              <Link
                to="/dashboard/update"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500 no-underline"
              >
                Update Profile
              </Link>
            </div>
          )}
        </div>
        <div className=" w-[60%] flex items-start">
        <Link
          to="/dashboard/issues"
          className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 text-black  no-underline"
        >
          <p className="hover:text-red-500 focus:text-red-500 flex items-center gap-3">
            <BsFillExclamationCircleFill />
            Report issues
          </p>
        </Link>
        </div>
      </div>
      <div className=" w-[60%] flex items-start">
      <Link
        to="/dashboard/settings"
        className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500 no-underline text-black"
      >
        <p className="hover:text-red-500 focus:text-red-500 flex items-center gap-3">
          <AiTwotoneSetting /> Settings
        </p>
      </Link>
      </div>
    </div>
  );
}
