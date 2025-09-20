/**
 * This file is the public-facing Homepage of the site accessible via https://devio.io/
 *
 */

"use client";

import { Copy } from 'lucide-react';

export default function Home() {
  return (
    <div className="main-homepage d-flex align-items-center justify-content-center flex-column">
      <div className="w-75">
         {/* Homepage Content */}
        <h1 className="display-2 fw-bolder text-center section-heading-title">
          Build <span className="text-highlight">Modern Content</span> APIs in Minutes
        </h1>
        <p className="text-secondary mt-3 w-md-75 w-100 text-center mx-auto">
          A headless CMS that's fast, flexible, and built for developers. Clean and intuitive admin panel, designed to manage content effortlessly for anything from simple websites to complex applications.
        </p>

        {/* Code Editor */}
        <div className="container my-4 d-flex justify-content-center">
          <div className="position-relative code-editor bg-dark text-light rounded py-2 px-3 d-flex align-items-center justify-content-between">
            <code className="code-editor-text">
              npm install devio-cms
            </code>
            <button 
              className="btn btn-outline-light border-0 btn-sm"
              onClick={() => {
                navigator.clipboard.writeText('npm install devio-cms');
                alert('Copied to clipboard!');
              }}
            >
              <Copy />
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 mt-5">
          <button className="btn btn-primary fw-semibold btn-lg">Get started now</button>
          <button className="btn btn-tertiary fw-semibold btn-lg">API Documentation</button>
        </div>
      </div>
    </div>
  );
}
