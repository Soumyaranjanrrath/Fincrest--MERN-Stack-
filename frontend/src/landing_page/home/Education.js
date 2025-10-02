import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="education"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market Education</h1>
          <p>
            We believe that education is the key to success in the financial
            markets. That's why we offer a range of free resources to help you
            learn and grow.
          </p>
          <a href="#versity" style={{ textDecoration: "none" }}>
            Versity<i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            Our trading and investment platform and all our products are built
            in-house and are designed to provide you with a seamless experience.
          </p>
          <a href="#trading-qa" style={{ textDecoration: "none" }}>
            Trading Q&A<i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
