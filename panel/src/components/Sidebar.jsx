import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark text-white p-3" style={{ width: '240px', minHeight: '100vh' }}>
      <h4 className="text-center mb-4">CMS</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            🏠 Dashboard
          </Link>
        </li>
        <li>
          <Link to="/pages" className="nav-link text-white">
            📄 Pages
          </Link>
        </li>
        <li>
          <Link to="/posts" className="nav-link text-white">
            ✏️ Posts
          </Link>
        </li>
        <li>
          <Link to="/media" className="nav-link text-white">
            📁 Media
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
