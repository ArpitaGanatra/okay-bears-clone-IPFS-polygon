import React from "react";
import Footer from "../components/Footer/Footer";
import Herosection from "../components/HeroSection/Herosection";
import Navbar from "../components/Navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home__container">
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
};

export default Home;
