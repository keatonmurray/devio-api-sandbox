import SectionHeader from "../../../partials/SectionHeader";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { connectPayPal as mutation } from "../../../graphql/mutations/connectPaypal";
import axios from 'axios'

const Paypal = () => {
    const { isDark } = useOutletContext();
    const [isLive, setIsLive] = useState(false);
    const [clientId, setClientId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [apiEndpointUrl, setapiEndpointUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const url = `${isLive ? "https://api.paypal.com" : "https://api.sandbox.paypal.com"}/v1/payments/`;
        setapiEndpointUrl(url);
    }, [isLive]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg("");
        setErrorMsg("");

        const mode = isLive ? "live" : "sandbox";

        const variables = {
            clientId,
            clientSecret,
            mode,
            apiEndpointUrl
        };

        try {
            await axios.post(import.meta.env.VITE_DEVIO_API, {
                query: mutation,
                variables
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SectionHeader isDark={isDark} sectionTitle="Plugins" subSectionTitle="PayPal">
            <div className="d-flex align-items-center justify-content-start py-md-4 p-3 flex-wrap">
                <h3 className="section-heading-title fw-bold mb-1">API Configuration</h3>
                <p className={`mb-0 ${isDark ? "text-white" : "text-muted"}`}>
                    Welcome to your PayPal API Configuration panel! The below configuration connects your application to the PayPal server. Your endpoint URL has been generated for you. Once you click on save, your store is ready to accept payments.
                </p>
            </div>

            {successMsg && (
                <div className="alert alert-success mt-3">{successMsg}</div>
            )}
            {errorMsg && (
                <div className="alert alert-danger mt-3">{errorMsg}</div>
            )}

            <form className="p-3" onSubmit={handleSubmit}>
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
                            className={`form-control ${isDark ? "bg-card-dark text-white" : ""}`}
                            id="clientId"
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}
                            placeholder="Enter Client ID"
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="clientSecret" className="form-label fw-semibold">Client Secret</label>
                        <input
                            type="password"
                            className={`form-control ${isDark ? "bg-card-dark text-white" : ""}`}
                            id="clientSecret"
                            value={clientSecret}
                            onChange={(e) => setClientSecret(e.target.value)}
                            placeholder="Enter Client Secret"
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="apiEndpoint" className="form-label fw-semibold">Endpoint URL</label>
                        <input
                            type="text"
                            className={`form-control ${isDark ? "bg-card-dark text-white" : ""}`}
                            id="apiEndpoint"
                            value={apiEndpointUrl}
                            readOnly
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
                    {loading ? "Saving..." : "Save"}
                </button>
            </form>
        </SectionHeader>
    );
};

export default Paypal;
