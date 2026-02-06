import React from "react";

function PricingHero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 margin-top">
          Choose the plan that fits your needs.
        </h3>
      </div>
    <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
            <img src='media/images/pricingEquity.svg' alt='equity' className='img-fluid mb-4' style={{maxHeight: '340px', width: 'auto'}} />
            <h1 className="fs-3">Free equity delivery</h1>
            <p>All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage.</p>
        </div>
        <div className="col-4 p-4">
            <img src='media/images/intradayTrades.svg' alt='intraday trades' className='img-fluid mb-4' style={{maxHeight: '340px', width: 'auto'}} />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p>All intraday trades are charged at a flat rate of ₹20 per executed order.</p>
        </div>
        <div className="col-4 p-4">
            <img src='media/images/pricing0.svg' alt='direct mutual funds' className='img-fluid mb-4' style={{maxHeight: '340px', width: 'auto'}} />
            <h1 className="fs-3">Free direct MF</h1>
            <p>All direct mutual fund investments are absolutely free - 0 brokerage.</p>
        </div>
    </div>
    </div>
  );
}

export default PricingHero;
