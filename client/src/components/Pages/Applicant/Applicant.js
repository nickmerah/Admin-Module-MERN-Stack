import React, { Fragment } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import ApplicantList from "./ApplicantList";

const Applicant = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <SideBar />

        <div className="main">
          <Header />
          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h2 mb-3">
                <strong>Applicants</strong>
              </h1>
              <div className="row">
                <div className="row">
                  <ApplicantList />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Applicant;
