const Login = () => {
  return (
    <div className="auth bg-light">
        <div className="row flex-column flex-md-row min-vh-100">

            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center text-center text-white bg-dark py-5 px-4 order-1 order-md-2">
                <div>
                    <img src="/images/logo-inverted.png" alt="Devio Logo" className="mb-4" />
                    <h1 className="display-2 fw-bold">Welcome to <span className="text-highlight">Devio Sandbox</span></h1>
                    <p className="lead mt-3">Your developer-first platform to build and scale seamlessly.</p>
                </div>
            </div>

            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center py-5 bg-white shadow-sm order-2 order-md-1">
                <form className="w-100 px-4" style={{ maxWidth: "550px" }}>
                    <h2 className="mb-4 fw-bold text-highlight text-md-start text-center">Sign in to Devio</h2>

                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-medium">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-medium">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login
