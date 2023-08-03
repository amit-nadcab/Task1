import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/slice/user";
import { toast } from "react-toastify";
import { checkIfNumber } from '../utils/validation'

export default function Login() {
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate();

  const getInput = (name, value) => {
    const data = { [name]: value };
    setInputValue({ ...inputValue, ...data });
  };

  const handleSubmit = () => {
    userLogin(inputValue, toast, navigate);
  };



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
                    {/* Number input  */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example1">
                        Mobile No.
                      </label>
                      <input
                        onKeyDown={(event) => checkIfNumber(event)}
                        type="text"
                        id="form2Example1"
                        name="number"
                        maxLength={10}
                        minLength={10}
                        className="form-control"
                        onChange={(e) =>
                          getInput(e.target.name, e.target.value)
                        }
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form2Example2"
                        name="password"
                        className="form-control"
                        onChange={(e) =>
                          getInput(e.target.name, e.target.value)
                        }
                      />
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-start">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example31"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div className="col d-flex justify-content-end">
                        <Link to="">Forgot password?</Link>
                      </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <Link
                      type="button"
                      // to="/dashboard"
                      className="btn btn-primary btn-block mb-4 w-100"
                      onClick={() => handleSubmit()}
                    >
                      Sign in
                    </Link>
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
