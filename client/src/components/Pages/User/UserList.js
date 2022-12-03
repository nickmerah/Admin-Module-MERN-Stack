import React, { useEffect, useState, Fragment } from "react";
import AddUser from "./AddUser";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { fetchGroup } from "../../../api";

const UserList = () => {
  let index = 1;
  let msg;
  const location = useLocation();

  if (location.state !== null) msg = location.state.msg;
  //  console.log(msg);
  const [UserData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [isAdded, setisadded] = useState(null);
  const [gdata, setGData] = useState(null);

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/user`)
      .catch((error) => {
        setError(error);
        if (error.response.status !== 200) {
          throw new Error(`${error.config.url} not found`);
        }

        throw error;
      })
      .then((response) => {
        setUserData(response.data.records);
        //console.log(response.data.records);
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
    fetchGroup()
      .then((response) => {
        setGData(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  //console.log(UserData);

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
                  <th>UserName</th>

                  <th>Fullnames</th>
                  <th>Email</th>
                  <th>Group</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {UserData.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{index++}</td>
                      <td>{data.ad_username}</td>

                      <td>
                        {data.ad_surname} {data.ad_firstname}
                        {data.ad_othernames}
                      </td>
                      <td> {data.ad_email}</td>
                      <td> {data.GroupInstance.group_name}</td>
                      <td>
                        {data.ad_status === 1 ? (
                          <b className="text-success">Enabled</b>
                        ) : (
                          <i className="text-danger">Disabled</i>
                        )}
                      </td>
                      <td>
                        <Link
                          to={`/User/${data.id}`}
                          state={{
                            data: data,
                            grpdata: gdata,
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
        <strong>Add User</strong>
      </h3>
      <div className="row">
        <div className="row">
          {gdata ? (
            <AddUser loadedgrps={gdata} onAddUser={viewPostHandler} />
          ) : (
            <div>Loading Users....</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UserList;
