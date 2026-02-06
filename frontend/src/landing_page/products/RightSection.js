import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row align-items-center g-4 flex-row-reverse">
          <div className="col-12 col-md-5 text-center text-md-end">
            <img src={imageURL} alt={productName} className="img-fluid" style={{maxHeight: '320px', width: 'auto'}} />
          </div>
          <div className="col-12 col-md-7">
            <h1 className="mb-3">{productName}</h1>
            <p className="mb-4">{productDescription}</p>
            <div>
              <a href={learnMore} className="ms-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
