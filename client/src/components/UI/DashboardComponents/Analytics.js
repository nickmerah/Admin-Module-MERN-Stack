import React, { useState, useEffect } from "react";
import { DollarSign, Users, CheckSquare } from "react-feather";

import {
  getAmtPaid,
  getAllApplicants,
  getSubmittedApplicants,
} from "../../../api";

const Analytics = () => {
  const [amtData, setAmtData] = useState([]);
  const [appData, setAppData] = useState([]);
  const [appsubData, setSubAppData] = useState([]);

  //fetch amts
  useEffect(() => {
    getAmtPaid()
      .then((response) => {
        setAmtData(response.records[0].totalamt);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  //fetch applicants
  useEffect(() => {
    getAllApplicants()
      .then((response) => {
        setAppData(response.records[0].totalapplicants);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  //fetch submitted applicants
  useEffect(() => {
    getSubmittedApplicants()
      .then((response) => {
        setSubAppData(response.records[0].totalapplicants);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  //console.log(amtData);

  return (
    <div className="col-xl-12 col-xxl-5 d-flex">
      <div className="w-100">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Total Applicants</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <Users size={18} />
                    </div>
                  </div>
                </div>
                <h1 className="mt-0 mb-0">{appData.toLocaleString("en-US")}</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Application Fee</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <DollarSign size={18} />
                    </div>
                  </div>
                </div>
                <h1 className="mt-0 mb-0">
                  &#8358;{amtData.toLocaleString("en-US")}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Submitted Applications</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <CheckSquare size={18} />
                    </div>
                  </div>
                </div>
                <h1 className="mt-0 mb-0">
                  {appsubData.toLocaleString("en-US")}
                </h1>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Orders</h5>
                  </div>

                  <div className="col-auto">
                    <div className="stat text-primary">
                      <ShoppingCart size={18} />
                    </div>
                  </div>
                </div>
                <h1 className="mt-0 mb-0">64</h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
