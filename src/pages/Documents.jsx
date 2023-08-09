import { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { checkIfNumber } from "../utils/validation";
import { uploadDocumnets } from "../redux/slice/user";


const Status = () => {

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState({
    images: [],
    addhaarNumber: "",
    panCardNumber: "",
  });

  const getInput = (e, name, value) => {
    if (name === "addhaarFront" || name === "addhaarBack" || name === "panCard") {
      const images = e.target.files[0];
      setInputValue((prevState) => ({ ...prevState, images: [...prevState.images, images] }));
    } else {
      const data = { [name]: value };
      setInputValue((prevState) => ({ ...prevState, ...data }));
    }
  };

  // console.log(inputValue);

  const handleSubmit = (e) => {
    e.preventDefault()
    uploadDocumnets(dispatch, inputValue)
    // console.log(inputValue);
  }


  return (
    <>
      <>
        <div className="">
          {/* <!-- ========================= sideBar ==================== --> */}
          <Sidebar />
          {/* <!-- ========================= Main ==================== --> */}
          <div className="main" style={{ background: "#f4f4f4" }}>
            {/* <!-- ========================= Navbar ==================== --> */}

            <Navbar />
            <div className="container ">
              <div className="row align-items-center m-5 bg-white">
                <div className="profile">
                  <div className="bg-white">
                    <div className="bg-blue-any text-white p-2 ps-3 mt-3  fs-6">
                      <p className="m-0">Documents</p>
                    </div>
                    <div className="p-3 pb-4">
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Adhaar Front <span className="text-danger">*</span>
                          </label>
                          <input
                            name="addhaarFront"
                            accept=".jpg,.jpeg,.png,.pdf"
                            className="form-control form-control-sm"
                            type="file"
                            placeholder="Datacard Prepaid"
                            aria-label="Datacard Prepaid"
                            onChange={(e) => getInput(e, e.target.name, e.target.value)}
                          />
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Adhar Back <span className="text-danger">*</span>
                          </label>
                          <input
                            name="addhaarBack"
                            className="form-control form-control-sm"
                            accept=".jpg,.jpeg,.png,.pdf"
                            type="file"
                            placeholder="Jio Fi"
                            aria-label="Jio Fi"
                            onChange={(e) => getInput(e, e.target.name, e.target.value)}
                          />
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Pan Card <span className="text-danger">*</span>
                          </label>
                          <input
                            name="panCard"
                            className="form-control form-control-sm"
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => getInput(e, e.target.name, e.target.value)}
                          />
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Addhar Card Number <span className="text-danger">*</span>
                          </label>
                          <input
                            name="aadhaarNumber"
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Amount"
                            aria-label="Amount"
                            maxLength={12}
                            minLength={12}
                            onKeyDown={(event) => checkIfNumber(event)}
                            onChange={(e) => getInput(e, e.target.name, e.target.value)}
                          />
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Pan Card Number <span className="text-danger">*</span>
                          </label>
                          <input
                            name="panCardNumber"
                            className="form-control form-control-sm"
                            type="text"
                            maxLength={10}
                            minLength={10}
                            placeholder="Amount"
                            aria-label="Amount"
                            onChange={(e) => getInput(e, e.target.name, e.target.value)}
                          />
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                          <button type="submit" className="btn bg-blue-any text-white fs-14 w-25">
                            SUBMIT
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="bg-white">
                    <div className="bg-blue-any text-white p-2 ps-3 mt-3  fs-6">
                      <p className="m-0">Address</p>
                    </div>
                    <div className="p-3 pb-4">
                      <h6>Current Address</h6>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          Address <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder="Enter Address"
                          aria-label="Datacard Prepaid"
                        />
                      </div>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          State <span className="text-danger">*</span>
                        </label>
                        <select name="cars" id="cars" form="carform"
                          className="form-control form-control-sm"
                          placeholder="Select State"
                        >
                          <option value="volvo">Goa</option>
                          <option value="saab">Delhi</option>
                          <option value="opel">Panjab</option>
                          <option value="audi">Rajasthan</option>
                        </select>
                      </div>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          District <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder="Jio Fi"
                          aria-label="Jio Fi"
                        />
                      </div>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          Pincode <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder="Jio Fi"
                          aria-label="Jio Fi"
                        />
                      </div>
                    </div>
                    {/* <div className="p-3 pb-4">
                      <h6>Permanent Address</h6>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          Address <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder="Enter Address"
                          aria-label="Datacard Prepaid"
                        />
                      </div>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          State <span className="text-danger">*</span>
                        </label>
                        <select name="cars" id="cars" form="carform"
                          className="form-control form-control-sm"
                          placeholder="Select State"
                        >
                          <option value="volvo">Goa</option>
                          <option value="saab">Delhi</option>
                          <option value="opel">Panjab</option>
                          <option value="audi">Rajasthan</option>
                        </select>
                      </div>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          District <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder="Jio Fi"
                          aria-label="Jio Fi"
                        />
                      </div>
                      <div className="pb-2">
                        <label className="mb-1 form-label">
                          Pincode <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          placeholder="Jio Fi"
                          aria-label="Jio Fi"
                        />
                      </div>

                      <div className="d-flex justify-content-center pt-3">
                        <button className="btn bg-blue-any text-white fs-14 w-25">
                          SUBMIT
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Status;
