import Link from "next/link"
import { FaBars } from "react-icons/fa";
import Image from "next/image";

export default function MainNav () {
    return(
        <div className="main-nav py-md-3 py-2 px-md-5 px-0">
            <div className="d-flex align-items-center justify-content-between container">
                
                {/* Logo */}
                <div className="logo-wrapper">
                    <Link href="/">
                        <Image 
                            src="/images/logo.png" 
                            alt="Logo" 
                            height={65} 
                            width={65}
                        />
                    </Link>
                </div>
                
                {/* Navigation links */}
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-decoration-none text-dark fw-semibold">Product</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-decoration-none text-dark fw-semibold">Resources</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-decoration-none text-dark fw-semibold">Developer</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-decoration-none text-dark fw-semibold">Enterprise</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-decoration-none text-dark fw-semibold">Pricing</a>
                    </li>
                </ul>
                
                {/* Button */}
                <div className="d-flex gap-2 nav-cta-buttons">
                    <button className="btn btn-tertiary fw-semibold">Schedule a demo</button>
                    <button className="btn btn-primary fw-semibold">
                        Become a partner
                    </button>
                </div>

                <div className="d-md-none d-block">
                    <FaBars size={35}/>
                </div>

            </div>
        </div>
    )
}