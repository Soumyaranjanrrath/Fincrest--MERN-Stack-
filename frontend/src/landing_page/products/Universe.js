import React from "react";

function Universe() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <h1>The FinCrest Universe</h1>
        <p>
          Explore our diverse range of products designed to meet your financial
          needs.
        </p>
        <div className="logos-grid">
          <div className="logo-container">
            <img src="media/images/smallcaseLogo.png" alt="smallcase" />
          </div>
          <div className="logo-container">
            <img src="media/images/streakLogo.png" alt="streak" />
          </div>
          <div className="logo-container">
            <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" />
          </div>
          <div className="logo-container">
            <img src="media/images/sensibullLogo.svg" alt="sensibull" />
          </div>
          <div className="logo-container">
            <img src="media/images/goldenpiLogo.png" alt="goldenpi" />
          </div>
          <div className="logo-container">
            <img src="media/images/dittoLogo.png" alt="ditto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
