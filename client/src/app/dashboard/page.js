/**
 * 
 * This file is the main entrypoint of Devio CMS' Sandbox Dashboard Admin panel
 */

"use client";

import { useTheme } from "@/context/themeContext";

export default function DashboardHome() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`p-4 ${isDark ? "bg-dark text-white" : "bg-white text-dark"} min-vh-100`}>
      <h1 className="mb-3">Home</h1>
      <p>Welcome to the Devio CMS Sandbox Dashboard!</p>
    </div>
  );
}
