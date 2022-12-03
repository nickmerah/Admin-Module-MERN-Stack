import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import AddSchool from "./AddSchool";

const SchoolList = () => {
  let index = 1;
  let msg;
  const location = useLocation();

  //console.log(location.state);
  if (location.state !== null) msg = location.state.msg;
  //  console.log(msg);
  const [SchoolData, setSchoolData] = useState([]);
  const [error, setError] = useState(null);
  const [isAdded, setisadded] = useState(null);
  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/school`)
      .catch((error) => {
        setError(error);
        if (error.response.status !== 200) {
          throw new Error(`${error.config.url} not found`);
        }

        throw error;
      })
      .then((response) => {
        setSchoolData(response.data.records);
        // console.log(response.data.records);
      });
  };

  const viewPostHandler = (schoolinfo) => {
    setisadded(schoolinfo);
  };

  useEffect(() => {
    fetchData();
  }, [isAdded]);

  return (
    <Fragment>
      {!error && (
        <div className="col-12 col-lg-12 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <table className="table table-hover my-0">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>School Name</th>
                  <th>School Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {SchoolData.map((data) => {
                  return (
                    <tr key={data.faculties_id}>
                      <td>{index++}</td>
                      <td>{data.faculties_name}</td>
                      <td>{data.fcode}</td>
                      <td>
                        <Link
                          to={`/school/${data.faculties_id}`}
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
      )}

      <div> {msg && <p className="text-success">{msg}</p>}</div>
      <h3 className="h4 mb-3">
        <strong>Add School</strong>
      </h3>
      <div className="row">
        <div className="row">
          <AddSchool onAddSchool={viewPostHandler} />
        </div>
      </div>
    </Fragment>
  );
};

export default SchoolList;
