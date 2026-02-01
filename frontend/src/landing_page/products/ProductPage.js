import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      {/* 
        The following components are commented out because they are defined in empty files.
        This was causing the application to crash.
        Please add content to the following files and then uncomment the components.
        - src/landing_page/products/Hero.js
        - src/landing_page/products/LeftSection.js
        - src/landing_page/products/RightSection.js
        - src/landing_page/products/Universe.js
      */}
      <Hero />
      <LeftSection />
      <RightSection />
      <Universe />
    </>
  );
}

export default ProductPage;