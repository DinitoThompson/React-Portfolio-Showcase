import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import CodeSample from "../components/CodeSample";

// REACT ICONS - https://react-icons.github.io/react-icons
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import {
  AiFillDashboard,
  AiOutlineCloudUpload,
  AiFillCode,
  AiOutlineAntDesign,
  AiFillVideoCamera,
  AiFillProject,
  AiFillMinusCircle,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";

const Dashboard = () => {
  const [sideMenu, setSideMenu] = useState(true);
  const [currentMenu, setCurrentMenu] = useState(0);
  const [active, setActive] = useState(0);

  const navigate = useNavigate();

  const MenuItems = [
    { title: "Dashboard", src: <AiFillDashboard className="w-5 h-5" /> },
    { title: "Upload", src: <AiOutlineCloudUpload className="w-5 h-5" /> },
    {
      title: "Used Liberaries",
      src: <AiFillCode className="w-5 h-5" />,
      gap: true,
    },
    { title: "ToDo List", src: <AiOutlineAntDesign className="w-5 h-5" /> },
    { title: "Weather API", src: <AiFillVideoCamera className="w-5 h-5" /> },
    { title: "Graphic Designs", src: <AiFillProject className="w-5 h-5" /> },
    {
      title: "Illustrator Projects",
      src: <AiFillMinusCircle className="w-5 h-5" />,
      gap: true,
    },
    { title: "Photoshop Projects", src: <AiFillSetting className="w-5 h-5" /> },
  ];

  function handleLogout() {
    alert("Logout Successful, Going back to Login Screen");
    navigate("/");
  }
  return (
    // Dashboard Container
    <div className="flex">
      {/* Sidemenu */}
      <div
        className={` ${
          sideMenu ? "w-72" : "w-20 "
        } bg-green-700 h-screen p-5  pt-8 relative duration-300`}
      >
        {/* Minimze Icon */}
        <div>
          <IoCaretBackCircleSharp
            className={`absolute cursor-pointer -right-3 top-9 w-8 h-12 text-white ${
              !sideMenu && "rotate-180 -right-5 text-green-700"
            } transition-all`}
            onClick={() => setSideMenu(!sideMenu)}
          />
        </div>
        {/* Header */}
        <div>
          <div className="flex gap-x-4 items-center text-white">
            {/* User Icon */}
            <FaUserCircle
              onClick={() => {
                setActive(0);
                setCurrentMenu(0);
              }}
              className={`cursor-pointer duration-500 ${
                sideMenu && "rotate-[360deg]"
              } h-12 w-7`}
            />
            {/* Username */}
            <h1
              className={`origin-left font-medium text-xl duration-200 ${
                !sideMenu && "scale-0"
              }`}
            >
              Dinito Thompson
            </h1>
          </div>
        </div>
        {/* Menu */}
        <div>
          {/* Menu Items */}
          <ul className="pt-6">
            {MenuItems.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  active === index && "bg-light-white"
                } `}
                onClick={() => {
                  setActive(index);
                  setCurrentMenu(index);
                }}
              >
                <span className="w-5">{Menu.src}</span>
                <span
                  className={`${
                    !sideMenu && "hidden"
                  } origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
            <li
              onClick={handleLogout}
              className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9"
            >
              <span className="w-5">
                <AiOutlineLogout className="w-5 h-5" />
              </span>
              <span
                className={`${!sideMenu && "hidden"} origin-left duration-200`}
              >
                Log Out
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Content Area */}
      <div className="h-screen flex-1 p-7">
        {currentMenu === 0 ? (
          <h1 className="text-2xl font-semibold"> Dashboard </h1>
        ) : currentMenu === 1 ? (
          <h1 className="text-2xl font-semibold"> Upload </h1>
        ) : currentMenu === 2 ? (
          <CodeSample />
        ) : currentMenu === 3 ? (
          <h1 className="text-2xl font-semibold"> Design Sample </h1>
        ) : currentMenu === 4 ? (
          <h1 className="text-2xl font-semibold"> Tutorials </h1>
        ) : currentMenu === 5 ? (
          <h1 className="text-2xl font-semibold"> Student Analytics </h1>
        ) : currentMenu === 6 ? (
          <h1 className="text-2xl font-semibold"> My Projects </h1>
        ) : currentMenu === 7 ? (
          <h1 className="text-2xl font-semibold"> Settings </h1>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
