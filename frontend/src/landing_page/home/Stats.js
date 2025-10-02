import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Our ecosystem of products is designed to help you at every step of
            your investment journey. From learning to trading, we have you
            covered.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            We don't send you spam or bomb you with unwanted calls. Our promise
            is to make your experience with us enjoyable and stress-free.
          </p>
          <h2 className="fs-4">The Fincrest Universe</h2>
          <p className="text-muted">
            Our ecosystem of products is designed to help you at every step of
            your investment journey. From learning to trading, we have you
            covered.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            We provide you with the tools and resources you need to make
            informed financial decisions and achieve your goals.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="stats"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a
              href="#products"
              className="mx-5"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#demo" style={{ textDecoration: "none" }}>
              Try a demo{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
