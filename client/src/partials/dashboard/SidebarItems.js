import { MdKeyboardArrowDown } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { useState } from "react";
import { FiCodesandbox } from "react-icons/fi";
import Link from "next/link";
import Searchbar from "@/partials/dashboard/Searchbar";

export default function SidebarItems({isDark, theme}) {

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

            <span className="text-secondary fw-semibold text-small">Schema</span>

            <ul className="nav flex-column">
                {/* Website */}
                <li className="nav-item">
                    <button
                        className={`nav-link d-flex justify-content-between align-items-center fw-semibold w-100 text-start btn btn-link ${textClass}`}
                        onClick={() => toggleMenu("website")}
                    >
                        <span className="d-flex align-items-center gap-2">
                            <FiBox />
                            <span>Asset</span>
                        </span>
                        <MdKeyboardArrowDown />
                    </button>
                    <ul className={`nav flex-column ms-3 collapse ${isMenuOpen("website") ? "show" : ""}`}>
                        <li className="nav-item">
                            <Link href="/dashboard/models" className={`nav-link small fw-semibold ${textClass}`}>
                                Models
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}