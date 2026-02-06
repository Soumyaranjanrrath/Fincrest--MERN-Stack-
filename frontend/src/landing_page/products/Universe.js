import React from "react";

function Universe() {
  return (
    <section className="py-4 bg-white">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h1 className="mb-2">The FinCrest Universe</h1>
            <p className="mb-0">
              Explore our diverse range of products designed to meet your financial needs.
            </p>
          </div>
        </div>
        <div className="logos-grid">
          <div className="logo-container">
            <img src="media/images/smallcaseLogo.png" alt="smallcase" className="img-fluid" />
          </div>
          <div className="logo-container">
            <img src="media/images/streakLogo.png" alt="streak" className="img-fluid" />
          </div>
          <div className="logo-container">
            <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" className="img-fluid" />
          </div>
          <div className="logo-container">
            <img src="media/images/sensibullLogo.svg" alt="sensibull" className="img-fluid" />
          </div>
          <div className="logo-container">
            <img src="media/images/goldenpiLogo.png" alt="goldenpi" className="img-fluid" />
          </div>
          <div className="logo-container">
            <img src="media/images/dittoLogo.png" alt="ditto" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universe;
