"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/partials/dashboard/SectionHeader";
import { useTheme } from "@/context/themeContext";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function CreateBlog() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [status, setStatus] = useState("");

  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write content...",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            ["link", "image"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
      });
    }
  }, []);

  const inputClass = `form-control ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;
  const selectClass = `form-select ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;
  const textareaClass = `form-control ${isDark ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"}`;

  return (
    <SectionHeader sectionTitle="Posts" subSectionTitle="Create Post">
      <div className="my-md-4 my-2">
        <form>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-title" className="form-label fw-semibold">Title</label>
                <input type="text" className={inputClass} id="post-title" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-slug" className="form-label fw-semibold">Slug</label>
                <input type="text" className={inputClass} id="post-slug" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-status" className="form-label fw-semibold">Status</label>
                <select
                    className={selectClass}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    >
                    <option value="" disabled>Set status</option>
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="In Review">In Review</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-published" className="form-label fw-semibold">Published at</label>
                <input type="date" className={inputClass} id="post-published" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-description" className="form-label fw-semibold">Description</label>
                <textarea className={textareaClass} style={{ height: "150px" }}></textarea>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="post-author" className="form-label fw-semibold">Author</label>
                <input type="text" className={inputClass} id="post-author" />
              </div>
            </div>

            <div className="col-12">
                <div className="mb-3">
                    <label htmlFor="post-content" className="form-label fw-semibold">Content</label>
                    <div ref={editorRef} style={{ minHeight: "300px", backgroundColor: isDark ? "#2c3035" : "#ffffff" }} />
                </div>
            </div>
          </div>
        </form>
      </div>
    </SectionHeader>
  );
}
