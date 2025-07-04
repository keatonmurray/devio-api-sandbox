import { useState } from "react";
import { List, X } from "lucide-react";

import { FiCodesandbox } from "react-icons/fi";
import Searchbar from "../partials/Searchbar";
import SidebarItems from "../partials/SidebarItems";

const Sidebar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-dark" : "bg-white";

  return (
    <div className="sidebar">
      <div className="d-md-none p-2">
        <button
          className="btn btn-outline-primary d-md-block d-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{ fontSize: "1rem", padding: "4px 8px" }}
        >
          {isOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      <div
        className={`sidebar-scroll border-end ${isDark ? "border-secondary" : "navbar-light"} p-3 ${bgClass} ${isOpen ? "d-block" : "d-none"} d-md-block`}
        style={{
          minWidth: "250px",
          height: "100vh",
          overflowY: "auto"
        }}
      >
        <div className="mb-4 d-flex align-items-center justify-content-center flex-wrap">
          <h6 className="text-center text-secondary text-uppercase fw-bold">
            <FiCodesandbox size={30} className="mb-2 me-1" />
            Devio Sandbox
          </h6>
          <div className="w-100">
            <Searchbar theme={theme} />
          </div>
        </div>
        <SidebarItems isDark={isDark}/>
      </div>
    </div>
  );
};

export default Sidebar;
