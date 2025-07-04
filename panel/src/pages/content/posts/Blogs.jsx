import SectionHeader from "../../../partials/SectionHeader"
import { useOutletContext } from "react-router-dom";
import { MdDragIndicator } from "react-icons/md";

const Blogs = () => {
  const { isDark } = useOutletContext();
  return (
    <SectionHeader isDark={isDark} sectionTitle="Posts" subSectionTitle="Blogs">
      {[
        'Designing Content Models That Scale in a Headless Architecture',
        'From Figma to Frontend: Automating Page Builds with a Headless CMS',
        'Why Static Is the New Dynamic: Leveraging Payload CMS for Speed',
        '10 Lessons We Learned Migrating to a Headless CMS',
      ].map((title, index) => (
        <div
          key={index}
          className={`card border-0 shadow-sm my-1 ${isDark ? 'bg-card-dark text-white' : 'bg-light'}`}
        >
          <div className="card-body d-flex align-items-center justify-content-start gap-3">
            <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${isDark ? 'indicator-dark' : ''}`} />
            <div className="d-flex align-items-center gap-2 flex-grow-1">
              <img src="/images/blog.webp" alt="Featured Image" height="40" width="40" style={{borderRadius: '2px'}}/>
              <p className="fw-semibold mb-0 lh-sm blog-title">{title}</p>
            </div>
          </div>
        </div>
      ))}
    </SectionHeader>
    
  )
}

export default Blogs
