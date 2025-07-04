import { useState } from "react";
import { List, X } from "lucide-react";
import { Link } from "react-router-dom";
import Searchbar from "../partials/Searchbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FaAffiliatetheme } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { RiStore2Fill } from "react-icons/ri";

const Sidebar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState(new Set());

  const toggleMenu = (key) => {
    setOpenMenus((prev) => {
      const updated = new Set(prev);
      updated.has(key) ? updated.delete(key) : updated.add(key);
      return updated;
    });
  };

  const isMenuOpen = (key) => openMenus.has(key);
  const isDark = theme === "dark";
  const textClass = isDark ? "text-white" : "text-dark";
  const bgClass = isDark ? "bg-dark" : "bg-white";

  return (
    <>
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
        className={`border-end ${isDark ? "border-secondary" : "navbar-light"} p-3 ${bgClass} ${isOpen ? "d-block" : "d-none"} d-md-block`}
        style={{ minWidth: "250px", height: "auto" }}
        >
        <h5 className="mb-4">
          <Searchbar theme={theme} />
        </h5>
        <ul className="nav flex-column">

          {/* Website */}
          <li className="nav-item">
            <button
              className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
              onClick={() => toggleMenu("website")}
            >
              <span className="d-flex align-items-center gap-2">
                <FiBox />
                Website
              </span>
              <MdKeyboardArrowDown />
            </button>
            <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("website") ? "show" : ""}`}>
              <li className="nav-item">
                <button
                  className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
                  onClick={() => toggleMenu("pages")}
                >
                  Pages
                  <MdKeyboardArrowDown />
                </button>
                <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("pages") ? "show" : ""}`}>
                  <li className="nav-item">
                    <Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Workflow</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Posts</Link></li>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Navigation</Link></li>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Forms</Link></li>
            </ul>
          </li>

          {/* Themes */}
          <li className="nav-item">
            <button
              className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
              onClick={() => toggleMenu("themes")}
            >
              <span className="d-flex align-items-center gap-2">
                <FaAffiliatetheme />
                Themes
              </span>
              <MdKeyboardArrowDown />
            </button>
            <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("themes") ? "show" : ""}`}>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Visual Editor</Link></li>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Appearance</Link></li>
            </ul>
          </li>

          {/* APIs */}
          <li className="nav-item">
            <button
              className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
              onClick={() => toggleMenu("api")}
            >
              <span className="d-flex align-items-center gap-2">
                <AiFillApi />
                APIs
              </span>
              <MdKeyboardArrowDown />
            </button>
            <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("api") ? "show" : ""}`}>
              <li className="nav-item">
                <button
                  className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
                  onClick={() => toggleMenu("plugins")}
                >
                  Plugins
                  <MdKeyboardArrowDown />
                </button>
                <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("plugins") ? "show" : ""}`}>
                  <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Forms</Link></li>
                  <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>LMS</Link></li>
                  <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Ecommerce</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Ecommerce */}
          <li className="nav-item">
            <button
              className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
              onClick={() => toggleMenu("ecommerce")}
            >
              <span className="d-flex align-items-center gap-2">
                <RiStore2Fill />
                Ecommerce
              </span>
              <MdKeyboardArrowDown />
            </button>
            <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("ecommerce") ? "show" : ""}`}>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Products</Link></li>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Analytics</Link></li>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Payments</Link></li>
              <li className="nav-item"><Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Shipping</Link></li>
            </ul>
          </li>

        </ul>
      </div>
    </>
  );
};

export default Sidebar;
