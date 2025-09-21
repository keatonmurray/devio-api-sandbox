import { FaGithub, FaGoogle } from "react-icons/fa"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="devio-auth-page row">
            <div className="auth-section-left col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center">
                {/* Logo */}
                <div className="mb-4 text-start">
                    <Link href="/">
                        <Image 
                            src="/images/logo.png" 
                            alt="Logo" 
                            height={65} 
                            width={65}
                        />
                    </Link>
                </div>

                {/* Heading */}
                <div className="mb-4 text-start">
                    <h1 className="display-6 fw-bold">Every visitor is <span className="text-highlight">unique</span>.<br />Shouldn’t your <span className="text-highlight">website</span> be too?</h1>
                    <p className="text-secondary mt-3">
                        Discover Devio, the headless CMS with Adaptive Content® that lets you easily create personalized experiences—boosting engagement and driving conversions.
                    </p>
                </div>

                {/* Features list */}
                <ul className="list-unstyled mb-4">
                    <li className="mb-3 d-flex align-items-start">
                        <span className="text-primary me-2"><Check /></span>
                        <div>
                            <strong style={{fontSize:"22px"}}>The powerful foundation for your digital experiences</strong>
                            <p className="mb-0 text-secondary text-small">
                                With Devio’s Adaptive Content®, create personalized journeys that boost engagement and maximize your conversion rates.
                            </p>
                        </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                        <span className="text-primary me-2"><Check /></span>
                        <div>
                            <strong style={{fontSize:"22px"}}>Deliver unique experiences for every visitor with ease</strong>
                            <p className="mb-0 text-secondary text-small">
                                With Devio’s Adaptive Content®, create personalized journeys that boost engagement and maximize your conversion rates.
                            </p>
                        </div>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                        <span className="text-primary me-2"><Check /></span>
                        <div>
                            <strong style={{fontSize:"22px"}}>Boost conversions with A/B testing</strong>
                            <p className="mb-0 text-secondary text-small">
                                Build high-performance websites using Devio’s built-in A/B split testing.
                            </p>
                        </div>
                    </li>
                </ul>

                {/* Footer / Clients */}
                <p className="fw-bold mb-3 text-center">Proudly serving industry leaders</p>
                <div className="d-flex gap-2 justify-content-center">
                    <Image src="/images/talpa.svg" alt="Talpa Network" width={120} height={70} />
                    <Image src="/images/esso.svg" alt="Esso" width={120} height={70} />
                    <Image src="/images/iamamsterdam.svg" alt="I amsterdam" width={120} height={70} />
                    <Image src="/images/red-cross.svg" alt="Red Cross" width={120} height={70} />
                </div>
            </div>

            <div className="auth-section-right text-center flex-column col-12 col-md-6 vh-100 d-flex align-items-center justify-content-center py-md-4 py-5 px-md-3 px-4">                
                <h1 className="display-4 fw-bold mb-4">Welcome to <span className="text-highlight">Devio CMS</span></h1>
                <form className="w-100 px-3" style={{ maxWidth: '600px' }}>
                    
                    <div className="row d-flex">
                        <div className="col-12 col-md-6 text-center">
                            <button className="btn-tertiary px-5 py-3 w-100 mb-2">
                                <FaGoogle color={'#c4c4c4'} size={'30'} />
                            </button>
                        </div>
                        <div className="col-12 col-md-6 text-center">
                            <button className="btn-tertiary px-5 py-3 w-100 mb-2">
                                <FaGithub color={'#c4c4c4'} size={'30'}/>
                            </button>
                        </div>
                    </div>

                    <br/><br />

                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control py-3"
                            id="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control py-3"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <p className="text-secondary text-small">By logging in to this portal, you agree to Devio CMS’ <span className="fw-bold">Terms and Conditions</span> and <span className="fw-bold">Privacy Policy</span> to use the service.</p>

                    <div className="d-flex flex-md-row flex-column gap-2">
                        <button type="submit" className="btn btn-primary w-100 mt-md-4 mt-1 py-3 fw-semibold">
                            Login
                        </button>
                        <button type="button" className="btn btn-tertiary w-100 mt-md-4 mt-1 py-3 fw-semibold">
                            Create an account
                        </button>
                    </div>

                    <div className="mt-4">
                        <div className="d-md-flex d-block text-secondary text-small fw-bold">
                            Did you forget your password?
                            <a href="#" className="ms-1 text-decoration-none">
                                Reset password
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
    