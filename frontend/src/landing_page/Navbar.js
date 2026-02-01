import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff", height: "80px" }}
    >      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: 0,
            margin: 0,
          }}
        >
          <img
            src="media/images/logo.png"
            alt="Logo"
            style={{
              height: "60px",
              width: "auto",
              display: "block",
            }}
          />
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/Signup">
                Signup
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link active" aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
