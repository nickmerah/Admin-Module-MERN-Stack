import React, { useEffect, useState, Fragment } from "react";
import AddCos from "./AddCos";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { fetchDept, fetchProgramme } from "../../../api";

const CosList = () => {
  let index = 1;
  let msg;
  const location = useLocation();

  if (location.state !== null) msg = location.state.msg;
  //  console.log(msg);
  const [CosData, setCosData] = useState([]);
  const [error, setError] = useState(null);
  const [isAdded, setisadded] = useState(null);
  const [ddata, setData] = useState(null);
  const [pdata, setPData] = useState(null);

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/cos`)
      .catch((error) => {
        setError(error);
        if (error.response.status !== 200) {
          throw new Error(`${error.config.url} not found`);
        }

        throw error;
      })
      .then((response) => {
        setCosData(response.data.records);
        //  console.log(response.data.records);
      });
  };

  const viewPostHandler = (cosinfo) => {
    setisadded(cosinfo);
  };

  useEffect(() => {
    fetchData();
  }, [isAdded]);

  //fetch department
  useEffect(() => {
    fetchDept()
      .then((response) => {
        setData(response.records);
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

  //console.log(CosData);

  return (
    <Fragment>
      {!error && (
        <div className="col-12 col-lg-12 col-xxl-9 d-flex">
          <div className="card flex-fill">
            <table
              className="table table-hover my-0"
              style={{ fontSize: "13px" }}
            >
              <thead>
                <tr>
                  <th>S/N</th>
                  <th> Name</th>
                  <th>Dept Name</th>

                  <th>Programme</th>
                  <th>ExamDate</th>
                  <th>ExamTime</th>
                  <th>ADL Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {CosData.map((data) => {
                  return (
                    <tr key={data.do_id}>
                      <td>{index++}</td>
                      <td>{data.programme_option}</td>
                      <td>{data.department.departments_name}</td>

                      <td>{data.ProgrammeInstance.programme_name}</td>
                      <td>{data.exam_date}</td>
                      <td>{data.exam_time}</td>
                      <td>{data.admletter_date}</td>
                      <td>
                        {data.d_status === 1 ? (
                          <b className="text-success">Enabled</b>
                        ) : (
                          <i className="text-danger">Disabled</i>
                        )}
                      </td>
                      <td>
                        <Link
                          to={`/cos/${data.do_id}`}
                          state={{
                            data: data,
                            deptdata: ddata,
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
        <strong>Add Course of Study</strong>
      </h3>
      <div className="row">
        <div className="row">
          {ddata && pdata ? (
            <AddCos
              loadeddept={ddata}
              loadedprog={pdata}
              onAddCos={viewPostHandler}
            />
          ) : (
            <div>Loading Course of Study....</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CosList;
