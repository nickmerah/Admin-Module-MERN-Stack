import React, { useEffect, useState, Fragment } from "react";
import AddFee from "./AddFee";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { fetchAppFeefield, fetchProgramme } from "../../../api";

const FeeList = () => {
  let index = 1;
  let msg;
  const location = useLocation();

  if (location.state !== null) msg = location.state.msg;
  //  console.log(msg);
  const [FeeData, setFeeData] = useState([]);
  const [error, setError] = useState(null);
  const [isAdded, setisadded] = useState(null);
  const [fdata, setFData] = useState(null);
  const [pdata, setPData] = useState(null);

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/appFees`)
      .catch((error) => {
        setError(error);
        if (error.response.status !== 200) {
          throw new Error(`${error.config.url} not found`);
        }

        throw error;
      })
      .then((response) => {
        setFeeData(response.data.records);
        //console.log(response.data.records);
      });
  };

  const viewPostHandler = (feeinfo) => {
    setisadded(feeinfo);
  };

  useEffect(() => {
    fetchData();
  }, [isAdded]);

  //fetch fields
  useEffect(() => {
    fetchAppFeefield()
      .then((response) => {
        setFData(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  //fetch programme
  useEffect(() => {
    fetchProgramme()
      .then((response) => {
        setPData(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <Fragment>
      {!error && (
        <div className="col-12 col-lg-12 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <table
              className="table table-hover my-0"
              style={{ fontSize: "14px" }}
            >
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>FeeName</th>
                  <th>Programme</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {FeeData.map((data) => {
                  return (
                    <tr key={data.fee_id}>
                      <td>{index++}</td>
                      <td>{data.FeesInstance.field_name}</td>
                      <td>{data.ProgrammeInstance.programme_name}</td>
                      <td> {data.amount}</td>

                      <td>
                        <Link
                          to={`/appfee/${data.fee_id}`}
                          state={{
                            data: data,
                            fielddata: fdata,
                            progdata: pdata,
                          }}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div> {msg && <p className="text-success">{msg}</p>}</div>
      <h3 className="h4 mb-3">
        <strong>Add Fee</strong>
      </h3>
      <div className="row">
        <div className="row">
          {fdata ? (
            <AddFee
              loadedfields={fdata}
              loadedprog={pdata}
              onAddFee={viewPostHandler}
            />
          ) : (
            <div>Loading Fees....</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default FeeList;
