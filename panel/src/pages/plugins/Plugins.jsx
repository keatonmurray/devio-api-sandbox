import React from "react"
import SectionHeader from "../../partials/SectionHeader"
import { useOutletContext } from "react-router-dom";

const Plugins = () => {
    const { isDark } = useOutletContext();
    const [isLive, setIsLive] = React.useState(false);

    return (
        <SectionHeader isDark={isDark} sectionTitle="Plugins" subSectionTitle="PayPal">
            <div className="d-flex align-items-center justify-content-start py-md-4 p-3 flex-wrap">
                <h3 className="section-heading-title fw-bold mb-1">API Configuration</h3>
                <p className={`mb-0 ${isDark ? 'text-white' : 'text-muted'}`}>
                    Welcome to your PayPal API Configuration panel! The below configuration connects your application to the PayPal server. Your endpoint URL has been generated for you. Once you click on save, your store is ready to accept payments.
                </p>
            </div>
            <form className="p-3">
                <div className="row">
                     <div className="d-flex justify-content-end mt-2 mb-3 me-3">
                        <div className="form-check form-switch d-flex align-items-center">
                            <span className="me-5 fw-semibold">{isLive ? "Live" : "Sandbox"}</span>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="liveModeSwitch"
                                checked={isLive}
                                onChange={() => setIsLive(!isLive)}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="clientId" className="form-label fw-semibold">Client ID</label>
                        <input
                            type="text"
                            className={`form-control ${isDark ? 'bg-card-dark text-white' : ''}`}
                            id="clientId"
                            name="clientId"
                            placeholder="Enter Client ID"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="clientSecret" className="form-label fw-semibold">Client Secret</label>
                        <input
                            type="password"
                            className={`form-control ${isDark ? 'bg-card-dark text-white' : ''}`}
                            id="clientSecret"
                            name="clientSecret"
                            placeholder="Enter Client Secret"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="apiEndpoint" className="form-label fw-semibold">Endpoint URL</label>
                        <input
                            type="text"
                            className={`form-control ${isDark ? 'bg-card-dark text-white' : ''}`}
                            id="apiEndpoint"
                            name="apiEndpoint"
                            value={`${isLive ? 'https://api.paypal.com' : 'https://api.sandbox.paypal.com'}/v1/payments/`}
                            disabled
                            readOnly
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
        </SectionHeader>
    )
}

export default Plugins
