import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largest broker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Award-winning technology. Trusted by traders.</h1>
          <p className="mb-5">
            Recognized by the industry for our cutting-edge platform and
            unwavering client support.
          </p>
          <div className="row">
            <div className="col-6 p-5">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt.securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="press-logos" style={{width:"95%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;