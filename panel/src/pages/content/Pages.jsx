import { FaPlus } from "react-icons/fa6";
import { MdDragIndicator } from "react-icons/md";

const Pages = ({isDark}) => {
  return (
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
                  className={`form-control search-input pe-5 w-md-auto w-100 ${isDark ? 'bg-dark text-white border-secondary' : ''}`} 
                  placeholder="Search ..." 
                />
              </form>
              <button className="btn btn-primary">
                <FaPlus />
              </button>
            </div>

            <div className={`border-bottom my-3 ${isDark ? 'border-secondary' : ''}`}></div>

            <div className={`card border-0 shadow-sm my-1 ${isDark ? 'bg-card-dark text-white' : 'bg-light'}`}>
              <div className="card-body d-flex align-items-center justify-content-start gap-3">
                <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${isDark ? 'indicator-dark' : ''}`} />
                <div className="flex-grow-1">
                  <p className="fw-semibold mb-0 lh-sm blog-title">Homepage</p>
                </div>
              </div>
            </div>

            <div className={`card border-0 shadow-sm my-1 ${isDark ? 'bg-card-dark text-white' : 'bg-light'}`}>
              <div className="card-body d-flex align-items-center justify-content-start gap-3">
                <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${isDark ? 'indicator-dark' : ''}`} />
                <div className="flex-grow-1">
                  <p className="fw-semibold mb-0 lh-sm blog-title">Developer Documentation</p>
                </div>
              </div>
            </div>

            <div className={`card border-0 shadow-sm my-1 ${isDark ? 'bg-card-dark text-white' : 'bg-light'}`}>
              <div className="card-body d-flex align-items-center justify-content-start gap-3">
                <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${isDark ? 'indicator-dark' : ''}`} />
                <div className="flex-grow-1">
                  <p className="fw-semibold mb-0 lh-sm blog-title">About Devio</p>
                </div>
              </div>
            </div>

            <div className={`card border-0 shadow-sm my-1 ${isDark ? 'bg-card-dark text-white' : 'bg-light'}`}>
              <div className="card-body d-flex align-items-center justify-content-start gap-3">
                <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${isDark ? 'indicator-dark' : ''}`} />
                <div className="flex-grow-1">
                  <p className="fw-semibold mb-0 lh-sm blog-title">Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pages
