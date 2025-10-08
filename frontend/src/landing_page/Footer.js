import React from "react";

function Footer() {
  return (
    <div className="container-fluid border-top mt-5 py-5 px-5" style={{ backgroundColor:"#f8f9fa"}}>
      <div className="row mt-5">
        <div className="col-md-3 px-5">
          <img src="media/images/logo.png" className="img-fluid mb-3" style={{ width: "50%" }} />
          <p className="text-muted">&copy; 2023 Fincrest. All rights reserved.</p>
        </div>
        <div className="col-md-3">
          <p className="fw-bold mb-3">Company</p>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">About</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Team</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Blog</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Products</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Pricing</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Referral programme</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Careers</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Fincrest Blog</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Press & Media</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Fincrest cares</a>
        </div>
        <div className="col-md-3">
          <p className="fw-bold mb-3">Support</p>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Contact</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Support Portal</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Z-Connect blog</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">List of charges</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Downloads & resources</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Referral programme</a>
        </div>
        <div className="col-md-3">
          <p className="fw-bold mb-3">Account</p>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Open an Account</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">Fund transfer</a>
          <a href="" className="d-block mb-2 text-decoration-none text-muted">60 day challenge</a>
        </div>
      </div>
      <div className="mt-5 fs-10 text-muted text-center px-5">
        <p>
          Fincrest is a financial technology company dedicated to
          revolutionizing the investment landscape. We provide a comprehensive
          suite of advanced tools and services tailored for both seasoned
          investors and newcomers. Our core mission is to empower every
          individual to seize control of their financial destiny. We achieve
          this by offering the critical resources and insights necessary to
          navigate and succeed in today's dynamic markets.
        </p>

        <p>
          All investments in the stock market are inherently subject to market
          risks, and their value can fluctuate. It is crucial that you read all
          related documents carefully and conduct thorough research before
          making any investment decisions. Past performance is not an indicator
          of future returns, and you should invest only after considering your
          risk tolerance and financial goals.
        </p>

        <p>
          Fincrest is a registered trademark of Fincrest Financial Services Pvt.
          Ltd., and all rights are reserved. Our Corporate Identification Number
          (CIN) is U67120MH2021PTC365432. We are a SEBI registered stockbroker
          (SEBI Registration No. INZ000012345), a Depository Participant with
          CDSL (SEBI Registration No. IN-DP-456-2021), and a member of NSE and
          BSE.
        </p>
      </div>
    </div>
  );
}

export default Footer;
