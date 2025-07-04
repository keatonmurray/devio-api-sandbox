import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { MdDragIndicator } from "react-icons/md";
import Sidebar from '../components/Sidebar';
import Topnav from '../components/Topnav';

const Panel = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`} style={{ minHeight: '100vh' }}>
      <Topnav theme={theme} toggleTheme={toggleTheme} />

      <div className="d-flex mt-4">
        <Sidebar theme={theme} />
        <div className={`d-flex align-items-start justify-content-center w-100 p-md-4 p-2 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
          <div className="container pages">
            <div className="row align-items-center justify-content-between">
              
              {/* Headings */}
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div className="header-texts">
                  <h6 className="fw-semibold text-secondary fs-6">Content</h6>
                  <h5 className="fw-semibold fs-4">Pages</h5>
                </div>
              </div>
              
              {/* Search + Button */}
              <div className="col-12 col-md-6 d-flex justify-content-md-end gap-2">
                <form className="flex-grow-1 flex-md-grow-0">
                  <input 
                    type="search" 
                    className={`form-control search-input pe-5 w-md-auto w-100 ${theme === 'dark' ? 'bg-dark text-white border-secondary' : ''}`} 
                    placeholder="Search ..." 
                  />
                </form>
                <button className="btn btn-primary">
                  <FaPlus />
                </button>
              </div>

              <div className={`border-bottom my-3 ${theme ==='dark' ? 'border-secondary' : ''}`}></div>

             <div className={`card border-0 shadow-sm my-1 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-light'}`}>
                <div className="card-body d-flex align-items-center justify-content-start gap-3">
                  <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${theme === 'dark' ? 'indicator-dark' : ''}`} />
                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-0 lh-sm blog-title">How to Build a Headless Blog with Payload CMS</p>
                  </div>
                </div>
              </div>

              <div className={`card border-0 shadow-sm my-1 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-light'}`}>
                <div className="card-body d-flex align-items-center justify-content-start gap-3">
                  <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${theme === 'dark' ? 'indicator-dark' : ''}`} />
                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-0 lh-sm blog-title">Mastering Content Modeling in Payload CMS</p>
                  </div>
                </div>
              </div>

              <div className={`card border-0 shadow-sm my-1 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-light'}`}>
                <div className="card-body d-flex align-items-center justify-content-start gap-3">
                  <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${theme === 'dark' ? 'indicator-dark' : ''}`} />
                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-0 lh-sm blog-title">From Monolith to Headless: A Frontend Developer's Guide</p>
                  </div>
                </div>
              </div>

              <div className={`card border-0 shadow-sm my-1 ${theme === 'dark' ? 'bg-card-dark text-white' : 'bg-light'}`}>
                <div className="card-body d-flex align-items-center justify-content-start gap-3">
                  <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${theme === 'dark' ? 'indicator-dark' : ''}`} />
                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-0 lh-sm blog-title">Top 5 Payload CMS Features You’re Probably Not Using</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
