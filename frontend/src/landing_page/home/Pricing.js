import React from "react";
function Pricing() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            Our pricing plans are designed to be transparent and affordable,
            ensuring you get the best value for your investment.
          </p>
          <a href="#pricing" style={{ textDecoration: "none" }}>
            See Pricing<i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and <br /> mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
