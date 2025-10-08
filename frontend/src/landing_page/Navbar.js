import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff", height: "80px" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.png"
            alt="Logo"
            style={{ height: "150px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-4">
              <a className="nav-link" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
