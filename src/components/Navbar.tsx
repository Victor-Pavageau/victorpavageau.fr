import { IoHomeOutline, IoCodeSlash } from "react-icons/io5";
import { FiMessageSquare, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>("")

  return (
    <div className="flex justify-evenly items-center align-middle w-full bg-slate-800 text-white sticky bottom-0 sm:top-0 rounded-t-2xl py-2 sm:py-3 sm:rounded-none">
      <div className={`flex gap-2 items-center align-middle cursor-pointer ${selectedTab === "home" && "text-yellow-400"}`} onClick={() => {
        navigate("/");
        setSelectedTab("home");
      }}>
        <IoHomeOutline className="text-3xl sm:text-xl" />
        <div className="hidden sm:flex">
          Home
        </div>
      </div>
      <div className={`flex gap-2 items-center align-middle cursor-pointer ${selectedTab === "about" && "text-yellow-400"}`} onClick={() => {
        navigate("/about");
        setSelectedTab("about");
      }}>
        <FiUser className="text-3xl sm:text-xl" />
        <div className="hidden sm:flex">
          About
        </div>
      </div>
      <div className={`flex gap-2 items-center align-middle cursor-pointer ${selectedTab === "projects" && "text-yellow-400"}`} onClick={() => {
        navigate("/projects");
        setSelectedTab("projects");
      }}>
        <IoCodeSlash className="text-3xl sm:text-xl" />
        <div className="hidden sm:flex">
          Projets
        </div>
      </div>
      <div className={`flex gap-2 items-center align-middle cursor-pointer ${selectedTab === "contact" && "text-yellow-400"}`} onClick={() => {
        navigate("/contact");
        setSelectedTab("contact");
      }}>
        <FiMessageSquare className="text-3xl sm:text-xl" />
        <div className="hidden sm:flex">
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;