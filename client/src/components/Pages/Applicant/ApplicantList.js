import React, { useEffect, useState, Fragment } from "react";

import { Link } from "react-router-dom";
import { fetchApplicants } from "../../../api";

const ApplicantList = () => {
  let index = 1;

  const [applicantData, setapplicantData] = useState([]);
  const [countData, setcountData] = useState([]);
  const [page, setPage] = useState(0);

  const previouspage = () => {
    setPage((page) => page - 1);
  };

  const nextpage = () => {
    setPage((page) => page + 1);
  };

  //fetch applicants
  useEffect(() => {
    fetchApplicants(page)
      .then((response) => {
        setapplicantData(response.response.records);
        setcountData(response.response);
      })
      .catch((error) => {
        throw error;
      });
  }, [page]);

  // console.log(countData);

  return (
    <Fragment>
      <div className="col-12 col-lg-12 col-xxl-9 d-flex">
        <div className="card flex-fill">
          <table
            className="table table-hover my-0"
            style={{ fontSize: "13px" }}
          >
            <thead>
              <tr>
                <th>S/N</th>
                <th>ApplicantNo</th>
                <th>Fullnames</th>
                <th>Email</th>
                <th>Programme</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applicantData.map((data) => {
                return (
                  <tr key={data.std_id}>
                    <td>{index++}</td>
                    <td>{data.app_no}</td>

                    <td>
                      {data.surname} {data.firstname}
                      {data.othernames}
                    </td>
                    <td> {data.student_email}</td>
                    <td> {data.stdcourse}</td>
                    <td>
                      {data.std_custome9 === 1 ? (
                        <b className="text-success">Submitted</b>
                      ) : (
                        <i className="text-danger">Not Submitted</i>
                      )}
                    </td>
                    <td>
                      <Link
                        to={`/applicant/${data.std_id}`}
                        state={{
                          data: data,
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

      <div>
        <i style={{ fontSize: "13px", color: "green" }}>
          No of Records: {countData.totalItems} | Current Page:
          {countData.currentPage + 1} | TotalPages: {countData.totalPages}
        </i>
        {countData.currentPage > 0 && (
          <Link onClick={previouspage}> | Previous</Link>
        )}
        {countData.currentPage + 1 < countData.totalPages && (
          <Link onClick={nextpage}> | Next</Link>
        )}
      </div>
    </Fragment>
  );
};

export default ApplicantList;
