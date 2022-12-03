import React, { useEffect, useState, Fragment } from "react";
import AddProgramme from "./AddProgramme";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const ProgrammeList = () => {
  let index = 1;
  let msg;
  const location = useLocation();

  //console.log(location.state);
  if (location.state !== null) msg = location.state.msg;
  //  console.log(msg);
  const [ProgrammeData, setProgrammeData] = useState([]);
  const [error, setError] = useState(null);
  const [isAdded, setisadded] = useState(null);
  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/programme`)
      .catch((error) => {
        setError(error);
        if (error.response.status !== 200) {
          throw new Error(`${error.config.url} not found`);
        }

        throw error;
      })
      .then((response) => {
        setProgrammeData(response.data.records);
        // console.log(response.data.records);
      });
  };

  const viewPostHandler = (proginfo) => {
    setisadded(proginfo);
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
                  <th>Programme Name</th>
                  <th>Programme Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ProgrammeData.map((data) => {
                  return (
                    <tr key={data.programme_id}>
                      <td>{index++}</td>
                      <td>{data.programme_name}</td>
                      <td>{data.aprogramme_name}</td>
                      <td>
                        <Link
                          to={`/programme/${data.programme_id}`}
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
        <strong>Add Programme</strong>
      </h3>
      <div className="row">
        <div className="row">
          <AddProgramme onAddProgramme={viewPostHandler} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProgrammeList;
