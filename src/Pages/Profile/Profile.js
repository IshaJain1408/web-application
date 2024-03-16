import React from "react";
import "./Profile.css";
import { FaSearch, FaFilter } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <div className="container mt-4 border p-4 ">
        <div className="row ">
          {/* Left Column - User Info */}
          <div className="col-md-4 ">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title text-start fs-4">Isha Jain</h5>
                <p className="text-start fw-normal"> +9123144352</p>
                <p className="text-start fw-normal"> ishajain1408@gmail.com</p>
                <div className="mt-3 d-flex justify-content-start gap-3">
                  <button
                    className="btn rounded-0 text-white"
                    style={{ background: "black" }}
                  >
                    EDIT
                  </button>
                  <button
                    className="btn rounded-0 text-white"
                    style={{ background: "black" }}
                  >
                    LOGOUT
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1 d-flex">
            <div
              className="border-right bg-secondary"
              style={{ height: "100%", width: "0.2px" }}
            ></div>
          </div>
          {/* Right Column - Address */}
          <div className="col-md-7">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h5 className="card-title text-start fw-bold fs-4 ">ADDRESS</h5>
                <p className="text-start text-uppercase fw-normal">
                  123 Main Street Mumbai Maharashtra 400001 India
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card text-center rounded-0">
          <div className="card-header p-4">
            <div>
              <ul
                className="nav nav-tabs card-header-tabs "
                style={{
                  boxShadow: "inset 0px 5px 5px -5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link active rounded-0"
                    style={{ color: "black" }}
                    data-bs-toggle="tab"
                    href="#tab1"
                  >
                    Tab 1
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link rounded-0"
                    style={{ color: "black" }}
                    data-bs-toggle="tab"
                    href="#tab2"
                  >
                    Tab 2
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link rounded-0"
                    style={{ color: "black" }}
                    data-bs-toggle="tab"
                    href="#tab3"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <div className="container p-1">
                  <div className="card rounded-0">
                    <div className="card-body ">
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center ">
                        <div>
                          <h5 className="card-title text-start fw-bolder fs-4 fs-sm-4">
                            ORDER #1234
                          </h5>
                          <p className="card-text text-start fs-6 fs-sm-5">
                            <span className="fw-bold">PRODUCT : </span> Book
                            Name
                          </p>
                          <p className="card-text text-start fs-6 fs-sm-5">
                            <span className="fw-bold">DATE : </span> 2/04/2024
                          </p>
                          <p className="card-text text-start  fs-6 fs-sm-5">
                            <span className="fw-bold">ADDRESS : </span>123 Main
                            Street Mumbai Maharashtra 400001 India
                          </p>
                        </div>
                        <div className="d-flex flex-column gap-2 mt-3 mt-sm-0">
                          <button
                            type="button"
                            className="btn  rounded-0 text-white fs-6 fs-sm-5 text-uppercase"
                            style={{ background: "black" }}
                          >
                            view details
                          </button>
                          <button
                            type="button"
                            className="btn  rounded-0 text-white fs-6 fs-sm-5"
                            style={{ background: "black" }}
                          >
                            TRACK ORDER
                          </button>
                          <button
                            type="button"
                            className="btn  rounded-0 text-white fs-6 fs-sm-5"
                            style={{ background: "black" }}
                          >
                            DOWNLOAD INVOICE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab2">
                <div className="input-group  p-2">
                  <span className="input-group-text border-right-0 rounded-0">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0 bg-gray p-2"
                    style={{
                      borderLeft: "0px",
                      borderRight: "0px",
                      background: "#f8f9fa",
                    }}
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span className="input-group-text border-right-0 rounded-0">
                    <FaFilter />
                  </span>
                </div>
                <div className="container p-1">
                  <div className="card rounded-0">
                    <div className="card-body ">
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center ">
                        <div>
                          <h5 className="card-title text-start fw-bolder fs-4 fs-sm-4">
                            TEST NAME
                          </h5>
                          <p className="card-text text-start fs-6 fs-sm-5">
                            <span className="fw-bold">MODULE : </span> Module
                            Name
                          </p>
                          <p className="card-text text-start fs-6 fs-sm-5">
                            <span className="fw-bold">DATE : </span> 2/04/2024
                          </p>
                          <p className="card-text text-start  fs-6 fs-sm-5">
                            <span className="fw-bold">MARKS : </span>100
                          </p>
                          <p className="card-text text-start  fs-6 fs-sm-5">
                            <span className="fw-bold">DURATION : </span>30 Mins
                          </p>
                        </div>
                        <div className="d-flex flex-column gap-2 mt-3 mt-sm-0">
                          <button
                            type="button"
                            className="btn  rounded-0 text-white fs-6 fs-sm-5 text-uppercase"
                            style={{ background: "black" }}
                          >
                            START
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab3">
                <div className="row g-2 align-items-center p-1">
                  <div className="col-6">
                    <div className="input-group">
                      <span className="input-group-text border-right-0 rounded-0">
                        <FaSearch />
                      </span>
                      <input
                        type="text"
                        className="form-control rounded-0 bg-gray p-2"
                        style={{
                          borderLeft: "0px",
                          borderRight: "0px",
                          background: "#f8f9fa",
                        }}
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <span className="input-group-text border-right-0 rounded-0">
                        <FaFilter />
                      </span>
                    </div>
                  </div>
                  <div className="col-3">
                    <p>or</p>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn rounded-0 text-white"
                      type="button"
                      style={{ background: "black" }}
                    >
                      ASK A NEW QUESTION
                    </button>
                  </div>
                </div>

                <div className="container p-1">
                  <div className="card rounded-0">
                    <div className="card-body ">
                      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center ">
                        <div>
                          <h5 className="card-title text-start fw-bolder fs-4 fs-sm-4">
                            QUESTION TITLE
                          </h5>
                          <p className="card-text text-start fs-6 fs-sm-5">
                            <span className="fw-bold">MODULE : </span> Module
                            Name
                          </p>
                          <p className="card-text text-start fs-6 fs-sm-5">
                            <span className="fw-bold">DATE : </span> 2/04/2024
                          </p>
                        </div>
                        <div className="d-flex flex-column gap-2 mt-3 mt-sm-0">
                          <button
                            type="button"
                            className="btn  rounded-0 text-white fs-6 fs-sm-5 text-uppercase"
                            style={{ background: "black" }}
                          >
                            VIEW REPLY
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
