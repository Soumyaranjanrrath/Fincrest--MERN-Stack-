import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="FinCrest"
        productDescription="This is a brief description of the product highlighting its features and benefits."
        tryDemo="#demo"
        learnMore="#learn-more"
        googlepPlay="#google-play"
        appStore="#app-store"
      />
      <RightSection 
        imageURL="media/images/Console.png"
        productName="Console"
        productDescription="Console is a powerful trading platform that offers advanced charting tools, real-time market data, and seamless order execution for traders of all levels."
        learnMore="#learn-more"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="CoinCrest"
        productDescription=" The ultimate cryptocurrency tracking app to monitor your portfolio and stay updated with real-time market data."
        tryDemo="#demo"
        learnMore="#learn-more"
        googlepPlay="#google-play"
        appStore="#app-store"
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="FinCrest connect API "
        productDescription="FinCrest Connect API is a robust and flexible API that allows developers to integrate financial data and services into their applications seamlessly."
        learnMore="#learn-more"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="VarsCrest"
        productDescription="Varsity is an extensive and in-depth collection of stock market and financial lessons designed to help you become a proficient investor."
        tryDemo="#demo"
        learnMore="#learn-more"
        googlepPlay="#google-play"
        appStore="#app-store"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
