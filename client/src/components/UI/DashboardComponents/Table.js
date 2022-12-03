import React, { useState, useEffect } from "react";
import { getAllTransactions } from "../../../api";
const Table = () => {
  let index = 1;
  let sn = 1;
  let totno = 0;
  let totamt = 0;
  const [appData, setAppData] = useState([]);

  //fetch transactions
  useEffect(() => {
    getAllTransactions()
      .then((response) => {
        setAppData(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  //console.log(appData);

  return (
    <div className="col-12 col-lg-12 col-xxl-9 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <h5 className="card-title mb-0">
            Payment Statistics for 2021/2022 Session
          </h5>
        </div>
        <table className="table table-hover my-0">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Programme</th>
              <th>No. PAID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {appData.map((data) => {
              totno += data.totalno;
              totamt += data.totalamt;
              return (
                <tr key={index++}>
                  <td>{sn++}</td>
                  <td>{data.ProgrammeInstance.programme_name}</td>
                  <td>{data.totalno}</td>
                  <td>&#8358;{data.totalamt.toLocaleString("en-US")}</td>
                </tr>
              );
            })}
            <tr>
              <td> </td>
              <td>
                <b>Total</b>
              </td>
              <td>{totno}</td>
              <td>&#8358;{totamt.toLocaleString("en-US")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
