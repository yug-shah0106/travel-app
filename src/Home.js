import React from "react";
import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Component/Gallery/Gallery";
import Offer from "./Component/Offer/Offer";
import MainPackage from "./Component/MainPackage/MainPackage";
import DomesticTravelPackages from "./Component/TravelPackages/DomesticTravelPackages";
import Honeymoon from "./Component/HoneyMoon/HoneyMoon";

function Home() {
  return (
    <>
     <Banner/>
     <MainPackage/>  
     <DomesticTravelPackages />
     {/* <InternationalTravelPackages /> */}
     <Honeymoon/>
     <Offer/>
     <About/>
     <Gallery/>
     <Footer/>
   </>
 );
}
export default Home;