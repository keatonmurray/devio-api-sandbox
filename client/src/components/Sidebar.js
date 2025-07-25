"use client"
import { useState } from "react";
import { List, X } from "lucide-react";
import SidebarItems from "@/partials/SidebarItems";

export default function Sidebar({theme}) {
    const [isOpen, setIsOpen] = useState(false);

    const isDark = theme === "dark";
    const bgClass = isDark ? "bg-dark" : "bg-white";

    return (
        <div className="sidebar">
            <div className="d-md-none d-md-none p-md-2 p-0">
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
                <SidebarItems isDark={isDark}/>
            </div>
        </div>
    )

}