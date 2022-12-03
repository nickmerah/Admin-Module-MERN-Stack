import React, { Fragment } from "react";
import Analytics from "./UI/DashboardComponents/Analytics";
import Chart from "./UI/DashboardComponents/Chart";
import Table from "./UI/DashboardComponents/Table";

const DashBoard = () => {
  return (
    <Fragment>
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">
            <strong>Analytics</strong> Dashboard
          </h1>

          <div className="row">
            <Analytics />
            <div className="row">
              <Chart />
              <Table />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default DashBoard;
