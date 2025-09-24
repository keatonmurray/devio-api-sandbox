"use client";

import { usePathname } from "next/navigation";
import MainNav from "@/components/homepage/MainNav";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const showNavbar = !pathname.startsWith("/login") && !pathname.startsWith("/dashboard");

  return (
    <>
      {showNavbar && <MainNav />}
      {children}
    </>
  );
}