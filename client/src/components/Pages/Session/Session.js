import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import { parseISO, format } from "date-fns";

const Session = () => {
  let index = 1;
  const [SessData, setSessData] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/appsession`)
      .catch((error) => {
        setError(error);
        if (error.response.status !== 200) {
          throw new Error(`${error.config.url} not found`);
        }

        throw error;
      })
      .then((response) => {
        setSessData(response.data.records);
        //console.log(response.data.records);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
      <div className="wrapper">
        <SideBar />

        <div className="main">
          <Header />
          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h2 mb-3">
                <strong>Session</strong>
              </h1>
              <div className="row">
                <div className="row">
                  {!error && (
                    <div className="col-12 col-lg-12 col-xxl-9 d-flex">
                      <div className="card flex-fill">
                        <table className="table table-hover my-0">
                          <thead>
                            <tr>
                              <th>S/N</th>
                              <th>Session Name</th>
                              <th>Status</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {SessData.map((data) => {
                              return (
                                <tr key={data.id}>
                                  <td>{index++}</td>
                                  <td>
                                    {data.cs_session} / {data.cs_session + 1}
                                  </td>

                                  <td>{data.status}</td>
                                  <td>
                                    {format(
                                      parseISO(data.start_date),
                                      "dd-M-Y",
                                      { awareOfUnicodeTokens: true }
                                    )}
                                  </td>
                                  <td>
                                    {format(parseISO(data.end_date), "dd-M-Y", {
                                      awareOfUnicodeTokens: true,
                                    })}
                                  </td>
                                  <td>
                                    <Link
                                      to={`/session/${data.id}`}
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
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Session;
