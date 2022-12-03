import React, { useEffect, useState, Fragment } from "react";
import AddDepartment from "./AddDepartment";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { fetchSchool } from "../../../api";

const DepartmentList = () => {
  let index = 1;
  let msg;
  const location = useLocation();

  if (location.state !== null) msg = location.state.msg;
  //  console.log(msg);
  const [DepartmentData, setDepartmentData] = useState([]);
  const [error, setError] = useState(null);
  const [isAdded, setisadded] = useState(null);
  const [sdata, setData] = useState(null);

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/department`)
      .catch((error) => {
        setError(error);
        if (error.response.status !== 200) {
          throw new Error(`${error.config.url} not found`);
        }

        throw error;
      })
      .then((response) => {
        setDepartmentData(response.data.records);
        //  console.log(response.data.records);
      });
  };

  const viewPostHandler = (schoolinfo) => {
    setisadded(schoolinfo);
  };

  useEffect(() => {
    fetchData();
  }, [isAdded]);

  //fetch school
  useEffect(() => {
    fetchSchool()
      .then((response) => {
        setData(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  //console.log(DepartmentData);

  return (
    <Fragment>
      {!error && (
        <div className="col-12 col-lg-12 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <table className="table table-hover my-0">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Department Name</th>
                  <th>Department Code</th>
                  <th>School</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {DepartmentData.map((data) => {
                  return (
                    <tr key={data.departments_id}>
                      <td>{index++}</td>
                      <td>{data.departments_name}</td>

                      <td>{data.departments_code}</td>
                      <td>{data.SchoolInstance.faculties_name}</td>
                      <td>
                        <Link
                          to={`/department/${data.departments_id}`}
                          state={{
                            data: data,
                            schooldata: sdata,
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
        <strong>Add Department</strong>
      </h3>
      <div className="row">
        <div className="row">
          {sdata ? (
            <AddDepartment
              loadedschool={sdata}
              onAddDepartment={viewPostHandler}
            />
          ) : (
            <div>Loading Schools....</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default DepartmentList;
