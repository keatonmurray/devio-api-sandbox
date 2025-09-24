"use client";

import Topnav from "@/components/dashboard/Topnav";
import Sidebar from "@/components/dashboard/Sidebar";
import { Poppins } from "next/font/google";
import { ThemeProvider, useTheme } from "@/context/themeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Top-level layout wraps everything in the provider
export default function DashboardLayout({ children }) {
  return (
    <ThemeProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </ThemeProvider>
  );
}

// This component is inside the provider, so useTheme() works
function DashboardLayoutContent({ children }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={poppins.className}>
      <Topnav />
      <div className="d-flex">
        <Sidebar />
        <div className={`flex-grow-1 ${isDark ? "bg-dark text-white" : "bg-white text-dark"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
