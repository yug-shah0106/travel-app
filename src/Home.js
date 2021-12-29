import React from "react";
import About from "./Component/About/About";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Component/Gallery/Gallery";
import MainPackage from "./Component/MainPackage/MainPackage";
import DomesticTravelPackages from "./Component/TravelPackages/DomesticTravelPackages";
import InternationalTravelPackages from "./Component/TravelPackages/InternationalTravelPackages";

function Home() {
  return (
    <>
     <Banner/>
     <MainPackage/>  
     <DomesticTravelPackages />
     <InternationalTravelPackages />
     <About/>
     <Gallery/>
     <Footer/>
   </>
 );
}
export default Home;