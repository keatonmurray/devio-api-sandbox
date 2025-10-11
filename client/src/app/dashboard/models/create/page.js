"use client"

import SectionHeader from "@/partials/dashboard/SectionHeader"
import { useTheme } from "@/context/themeContext";
import { MdDragIndicator } from "react-icons/md";
import Image from "next/image";

export default function createModels() {
    const { theme } = useTheme(); 
    const isDark = theme === "dark";

    const inputClass = `form-control ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;
    const selectClass = `form-select ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;
    const textareaClass = `form-control ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;
    
    return (
         <SectionHeader sectionTitle="Schema" subSectionTitle="Create Models" btnLink="/dashboard/models/create">
            <div className="row">
                {/* LEFT COLUMN - FORM */}
                <div className="col-12 col-md-7">
                    <div className="my-md-4 my-2">
                        <div className="drag-zone rounded d-flex align-items-center justify-content-center">
                            <span className="text-secondary">Drop your models here</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - FIELD TYPES */}
                <div className="col-12 col-md-5">
                    <div className={`my-md-4 my-2 card border-0 p-4 ${isDark ? "bg-card-gray-800 text-white" : "bg-card-light-v2 text-dark"}`}>
                        {/* Sidebar heading */}
                        <h5 className="d-block fw-semibold mb-1">Models</h5>
                        <p className="text-secondary text-small mb-3">Drag to add fields</p>

                        {/* Field type items */}
                        {["Posts", "Pages", "Authors", "Media", "Tags"].map((title, index) => (
                            <div
                            key={index}
                            className={`d-flex align-items-center gap-3 p-3 rounded mb-2 
                                ${isDark ? "bg-card-dark text-white" : "bg-light text-dark"}`}
                            style={{ cursor: "grab" }}
                            >
                            <MdDragIndicator size={20} className="flex-shrink-0" />
                            <div className="d-flex align-items-center gap-2 flex-grow-1">
                                <Image
                                src="/images/blog.webp"
                                alt="Featured"
                                height={32}
                                width={32}
                                style={{ borderRadius: "4px" }}
                                />
                                <p className="fw-medium mb-0 lh-sm">{title}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </SectionHeader>
    )
}