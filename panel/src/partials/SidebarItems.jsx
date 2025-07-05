import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FaAffiliatetheme } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { RiStore2Fill } from "react-icons/ri";
import { useState } from "react";
import { FiCodesandbox } from "react-icons/fi";
import Searchbar from "../partials/Searchbar";

const SidebarItems = ({isDark, theme}) => {

  const [openMenus, setOpenMenus] = useState(new Set());

    const toggleMenu = (key) => {
        setOpenMenus((prev) => {
        const updated = new Set(prev);
        updated.has(key) ? updated.delete(key) : updated.add(key);
        return updated;
        });
    };

    const isMenuOpen = (key) => openMenus.has(key);
    const textClass = isDark ? "text-white" : "text-dark";

    return (
        <div className="sidebar-items-container mt-4">
            <div className="mb-4 d-flex align-items-center justify-content-center flex-wrap">
                <h6 className="text-center text-secondary text-uppercase fw-bold">
                    <FiCodesandbox size={30} className="mb-2 me-1" />
                    Devio Sandbox
                </h6>
                <div className="w-100">
                    <Searchbar theme={theme} />
                </div>
            </div>
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
                            <Link to="/pages" className={`nav-link small fw-semibold ${textClass}`}>
                                Pages
                            </Link>
                        </li>
                        <li className="nav-item">
                        <button
                            className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
                            onClick={() => toggleMenu("posts")}
                        >
                            Posts
                            <MdKeyboardArrowDown />
                        </button>
                        <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("posts") ? "show" : ""}`}>
                            <li className="nav-item">
                            <Link to="#" className={`nav-link small fw-semibold ${textClass}`}>Workflow</Link>
                            </li>
                        </ul>
                         <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("posts") ? "show" : ""}`}>
                            <li className="nav-item">
                            <Link to="/blogs" className={`nav-link small fw-semibold ${textClass}`}>Blogs</Link>
                            </li>
                        </ul>
                        </li>
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
                            <li className="nav-item"><Link to="/plugin/paypal" className={`nav-link small fw-semibold ${textClass}`}>PayPal</Link></li>
                            
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
                        Online Store
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
    )
}

export default SidebarItems
