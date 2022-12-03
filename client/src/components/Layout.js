import React from "react";
import Footer from "./Layouts/Footer";
import SideBar from "./Layouts/SideBar";
import Header from "./Layouts/Header";
import DashBoard from "./DashBoard";

const Layout = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main">
        <Header />
        <DashBoard />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
