"use client";

import { useState } from "react";
import { List, X } from "lucide-react";
import SidebarItems from "@/partials/dashboard/SidebarItems";
import { useTheme } from "@/context/themeContext";

export default function Sidebar() {
  const { theme } = useTheme(); 
  const isDark = theme === "dark";

  const [isOpen, setIsOpen] = useState(false);

  const bgClass = isDark ? "bg-dark text-white" : "bg-white text-dark";

  return (
    <div className="sidebar">
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
