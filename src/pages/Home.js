import React from "react";
import Footer from "../components/Footer/Footer";
import Herosection from "../components/HeroSection/Herosection";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
};

export default Home;
