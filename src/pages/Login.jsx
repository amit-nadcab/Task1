import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="/images/Login.png"
                alt="baner"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <div className="card-body py-5 px-md-5">
                  <div className="pb-4 ms-xl-4">
                    <i
                      className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                      style={{ color: "#709085" }}
                    ></i>
                    <span className="h1 fw-bold mb-0">
                      <img
                        width={150}
                        src="/images/Any_pe_logo.png"
                        alt="logo"
                      />
                    </span>
                  </div>
                  <form>
                    {/* Email input  */}
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form2Example1">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form2Example2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form2Example2"
                        className="form-control"
                      />
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example31"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div className="col">
                        {/* <!-- Simple link --> */}
                        <Link to="">Forgot password?</Link>
                      </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <Link
                      type="button"
                      to="/dashboard"
                      className="btn btn-primary btn-block mb-4 w-100"
                    >
                      Sign in
                    </Link>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <p>
                      Don't have an account?{" "}
                      <a href="#!" className="link-info">
                        Register here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
