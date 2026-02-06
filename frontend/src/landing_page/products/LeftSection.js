import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlepPlay,
  appStore,
}) {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-5 text-center text-md-start">
            <img src={imageURL} alt={productName} className="img-fluid" style={{maxHeight: '320px', width: 'auto'}} />
          </div>
          <div className="col-12 col-md-7">
            <h1 className="mb-3">{productName}</h1>
            <p className="mb-4">{productDescription}</p>
            <div className="mb-3">
              <a href={tryDemo} className="btn btn-primary me-3 mb-2 mb-md-0">
                Try Demo
              </a>
              <a href={learnMore} className="ms-2">
                Learn More
              </a>
            </div>
            <div>
              <a href={googlepPlay} className="me-2">
                <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{height: '40px', width: 'auto'}} className="img-fluid align-middle" />
              </a>
              <a href={appStore}>
                <img src="media/images/appStoreBadge.svg" alt="App Store" style={{height: '40px', width: 'auto'}} className="img-fluid align-middle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
