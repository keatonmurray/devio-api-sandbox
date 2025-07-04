import { FaPlus } from "react-icons/fa6";

const SectionHeader = ({children, sectionTitle, subSectionTitle, isDark}) => {
  return (
    <div className={`d-flex align-items-start justify-content-center w-100 p-md-4 p-2 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
      <div className="container pages">
        <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <div className="header-texts">
                  <h6 className="fw-semibold text-secondary fs-6">{sectionTitle}</h6>
                  <h5 className="fw-semibold fs-4">{subSectionTitle}</h5>
              </div>
            </div>
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
            {children}
          </div>
      </div>
      <div className={`border-bottom my-3 ${isDark ? 'border-secondary' : ''}`}></div>

    </div>
  )
}

export default SectionHeader
