"use client"
import SectionHeader from "@/partials/dashboard/SectionHeader"
import { MdDragIndicator } from "react-icons/md";
import Image from "next/image";

export default function Blogs() {
    return (
        <SectionHeader  sectionTitle="Posts" subSectionTitle="Blogs">
            {[
                'Scalable Content Models',
                'Figma to Frontend Automation',
                'Static Is the New Dynamic',
                'Lessons from Our Headless Migration',
            ].map((title, index) => (
                <div
                key={index}
                className={`card border-0 shadow-sm my-1`}
                >
                <div className="card-body d-flex align-items-center justify-content-start gap-3">
                        <MdDragIndicator size="30" cursor="pointer" className={`indicator-light flex-shrink-0`} />
                        <div className="d-flex align-items-center gap-2 flex-grow-1">
                            <Image src="/images/blog.webp" alt="Featured Image" height={40} width={40} style={{borderRadius: '2px'}}/>
                            <p className="fw-semibold mb-0 lh-sm blog-title">{title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </SectionHeader>
    )
}