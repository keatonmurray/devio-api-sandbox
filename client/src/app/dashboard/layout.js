"use client";

import Topnav from "@/components/dashboard/Topnav";
import Sidebar from "@/components/dashboard/Sidebar";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/themeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DashboardLayout({ children }) {
  return (
    <ThemeProvider>
      <div className={poppins.className}>
        <Topnav />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
