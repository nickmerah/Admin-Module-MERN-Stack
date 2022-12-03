import React from "react";
import MyImage from "./img/logo.jpg";

const PageNotFound = () => {
  return (
    <div className="home">
      <main className="d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center">
                  <img
                    src={MyImage}
                    alt="Logo"
                    className="img-fluid rounded-circle"
                    width="132"
                    height="132"
                  />
                </div>
                <div className="text-center mt-4">
                  <h1>NorthWest College of Nursing Sciences </h1>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h3 align="center">Whoops! Page Not Found </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
