import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../../pages/Home/Home";
import BearMarket from "../../pages/BearMarket/BearMarket";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      {/* <div> */}
      <Routers />
      {/* </div> */}
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/bear-market" element={<BearMarket />} />
      </Routes> */}

      <Footer />
    </Router>
  );
};

export default Layout;
