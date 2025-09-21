/**
 * This file is the public-facing Homepage of the site accessible via https://devio.io/
 *
 */

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Copy } from 'lucide-react';

export default function Home() {

  // Sponsor logos
  const logos = [
    { src: "/images/company1.svg", alt: "Company 1" },
    { src: "/images/company2.svg", alt: "Company 2" },
    { src: "/images/company3.svg", alt: "Company 3" },
    { src: "/images/company4.svg", alt: "Company 4" },
    { src: "/images/company5.svg", alt: "Company 5" },
    { src: "/images/company6.svg", alt: "Company 6" },
  ];

  return (
    <>
      {/* First Section */}
      <div className="devio-main-homepage devio-page-section-primary d-flex align-items-center justify-content-center flex-column vh-100">
        <div className="w-75">
          {/* Homepage Content */}
          <h1 className="display-2 fw-bolder text-center section-heading-title">
            Build <span className="text-highlight">Modern Content</span> APIs in Minutes
          </h1>
          <p className="text-secondary mt-3 w-md-75 w-100 text-center mx-auto">
            A headless CMS that's fast, flexible, and built for developers. Clean and intuitive admin panel, designed to manage content effortlessly.
          </p>

          {/* Code Editor */}
          <div className="container my-4 d-flex justify-content-center">
            <div className="position-relative code-editor bg-dark text-light rounded px-md-3 px-2 py-2 d-flex align-items-center justify-content-between">
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
            <Link href="/login" className="btn btn-primary fw-semibold btn-lg devio-homepage-cta-btn">
              Try for free
            </Link>
            <button className="btn btn-tertiary fw-semibold btn-lg devio-homepage-cta-btn">
              API documentation
            </button>
          </div>
        </div>
      </div>

     {/* Second Section */}
     <div className="devio-main-homepage devio-page-section-secondary px-3 d-flex justify-content-center align-items-center py-5 flex-column">
        <div className="video-wrapper shadow-lg rounded-4 overflow-hidden">
          <video
            className="w-100 h-auto"
            src="/videos/sample-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="devio-sponsors-wrapper container mt-5">
          <p className="text-secondary text-center">Powering projects big and small—from enterprises to hobbyists—across the globe.</p>
          <div className="row g-2 justify-content-center align-items-center text-center">
            {logos.map((logo, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={250}
                  width={250}
                  className="w-100 h-auto" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="devio-main-homepage devio-page-section-tertiary py-5 px-3 d-flex justify-content-center align-items-center flex-column">
        <div className="w-75 section-tertiary-wrapper">
          <h1 className="display-5 fw-bolder text-center section-heading-title">
            Spin up your <span className="text-highlight">backend</span>, stay in <span className="text-highlight">control</span>
          </h1>
          <p className="text-secondary mt-3 w-md-75 w-100 text-center mx-auto">
            Every project needs APIs, auth, and admin panels.
            Devio gives you a production-ready backend that just works.
          </p>

          <br/>

          <div className="mt-5">
            <div className="devio-features-wrapper row">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="col-12 col-md-4 col-lg-4 mb-4 d-flex">
                  <div className="card shadow-lg border-0 position-relative flex-fill" style={{ overflow: 'hidden' }}>
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                      <h4 className="fw-bold mb-3 text-md-start text-center">Lorem ipsum dolor</h4>
                      <div className="text-center mt-auto">
                        <Image 
                          src={`/images/feat-img${num}.png`} 
                          height={180} 
                          width={300} 
                          className="img-fluid" 
                          alt="Feature illustration"
                          style={{ objectFit: 'contain', maxHeight: '180px', width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
