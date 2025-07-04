import { MdDragIndicator } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import SectionHeader from "../../partials/SectionHeader";

const Pages = () => {
  const { isDark } = useOutletContext();

  return (
    <SectionHeader isDark={isDark} sectionTitle="Content" subSectionTitle="Pages">
      {[
        'Homepage',
        'Developer Documentation',
        'About Devio',
        'Contact Us',
      ].map((title, index) => (
        <div
          key={index}
          className={`card border-0 shadow-sm my-1 ${isDark ? 'bg-card-dark text-white' : 'bg-light'}`}
        >
          <div className="card-body d-flex align-items-center justify-content-start gap-3">
            <MdDragIndicator size="30" cursor="pointer" className={`indicator-light ${isDark ? 'indicator-dark' : ''}`} />
            <div className="flex-grow-1">
              <p className="fw-semibold mb-0 lh-sm blog-title">{title}</p>
            </div>
          </div>
        </div>
      ))}
    </SectionHeader>
  );
};

export default Pages;
