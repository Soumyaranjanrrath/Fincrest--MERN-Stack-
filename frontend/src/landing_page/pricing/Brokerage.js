import React from 'react';

function Brokerage() {
  return (
    <section className="py-4">
      <div className="container">
        {/* Headings row */}
        <div className="row mb-3 align-items-end">
          <div className="col-12 col-lg-7">
            <h2 className="mb-0">Brokerage calculator</h2>
          </div>
          <div className="col-12 col-lg-5 text-lg-end mt-3 mt-lg-0">
            <h2 className="mb-0">List of charges</h2>
          </div>
        </div>
        {/* Charges list row */}
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="pt-2 pb-2">
              <p className="mb-3 text-start fs-5">Equity Delivery: <span className="fw-semibold">₹0 per trade</span></p>
              <p className="mb-3 text-start fs-5">Equity Intraday & F&O: <span className="fw-semibold">Flat ₹20 per executed order</span></p>
              <p className="mb-3 text-start fs-5">Currency & Commodity: <span className="fw-semibold">Flat ₹20 per executed order</span></p>
              <p className="mb-3 text-start fs-5">Mutual Funds: <span className="fw-semibold">₹0 commission</span></p>
              <p className="mb-3 text-start fs-5">Account Opening: <span className="fw-semibold">₹200 (one-time)</span></p>
              <p className="mb-3 text-start fs-5">Annual Maintenance: <span className="fw-semibold">₹300/year</span></p>
              <p className="mb-0 text-start fs-5">No hidden charges, no minimums</p>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-none d-lg-block"></div>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;