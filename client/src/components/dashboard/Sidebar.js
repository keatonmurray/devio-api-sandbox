"use client";

import { useState } from "react";
import { List, X } from "lucide-react";
import SidebarItems from "@/partials/dashboard/SidebarItems";
import { useTheme } from "@/context/themeContext";

export default function Sidebar() {
  const { theme } = useTheme(); // get theme from context
  const isDark = theme === "dark";

  const [isOpen, setIsOpen] = useState(false);

  const bgClass = isDark ? "bg-dark text-white" : "bg-white text-dark";

  return (
    <div className="sidebar">
      {/* Mobile toggle button */}
      <div className="d-md-none p-2">
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsOpen(!isOpen)}
          style={{ fontSize: "1rem", padding: "4px 8px" }}
        >
          {isOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Sidebar content */}
      <div
        className={`sidebar-scroll border-end ${isDark ? "border-secondary" : "border-light"} p-3 ${bgClass} ${isOpen ? "d-block" : "d-none"} d-md-block`}
        style={{
          minWidth: "250px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <SidebarItems isDark={isDark} theme={theme} />
      </div>
    </div>
  );
}
