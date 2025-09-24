"use client";

import SectionHeader from "@/partials/dashboard/SectionHeader";
import { useTheme } from "@/context/themeContext";

export default function CreateBlog() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Helper function for input/select classes
  const inputClass = `form-control ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;
  const selectClass = `form-select ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;

  return (
    <SectionHeader sectionTitle="Posts" subSectionTitle="Create Post">
      <div className="my-md-4 my-2">
        <form>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-title" className="form-label fw-semibold">
                  Title
                </label>
                <input type="text" className={inputClass} id="post-title" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-permalink" className="form-label fw-semibold">
                  Permalink
                </label>
                <input type="text" className={inputClass} id="post-permalink" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-status" className="form-label fw-semibold">
                  Status
                </label>
                <select className={selectClass}>
                  <option value="#" disabled selected>Set status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="In Review">In Review</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-published" className="form-label fw-semibold">
                  Published at
                </label>
                <input type="date" className={inputClass} id="post-published" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </SectionHeader>
  );
}
