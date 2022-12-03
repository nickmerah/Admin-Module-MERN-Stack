import React, { Fragment, useState } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditSession = () => {
  const [errmsg, setErrmsg] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  //console.log(data);

  const submitHandler = async (formdata) => {
    const sessinfo = {
      cs_session: formdata.sess,
      status: formdata.status,
      start_date: formdata.startdate,
      end_date: formdata.enddate,
    };
    //console.log(sessinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/appsession/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(sessinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update Session");
    }
    navigate("/session", {
      state: { msg: `Session Successfully Updated` },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sess: data.cs_session,
      status: data.status,
      startdate: data.start_date,
      enddate: data.end_date,
    },
  });

  return (
    <Fragment>
      <div className="wrapper">
        <SideBar />

        <div className="main">
          <Header />
          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h2 mb-3">
                <strong>Edit Session </strong>
              </h1>

              <div className="row">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="card">
                    <div className="card-body">
                      {errmsg && <p className="text-danger">{errmsg}</p>}

                      <div className="mb-3">
                        <label className="form-label">
                          <b> Session</b>
                        </label>
                        <select
                          {...register("sess", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Change Session</option>

                          <option key={data.cs_session} value={data.cs_session}>
                            {data.cs_session}/{data.cs_session + 1}
                          </option>
                          <option
                            key={data.cs_session + 1}
                            value={data.cs_session + 1}
                          >
                            {data.cs_session + 1}/{data.cs_session + 2}
                          </option>
                        </select>

                        {errors.sess && (
                          <p className="text-danger">
                            Please check the Session
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Status</b>
                        </label>
                        <select
                          {...register("status", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Select Status</option>

                          <option key={1} value={"current"}>
                            Current
                          </option>
                          <option key={0} value={"ended"}>
                            Ended
                          </option>
                        </select>
                        {errors.status && (
                          <p className="text-danger">Select a Status</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Select Start Date</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          autoComplete="off"
                          type="date"
                          {...register("startdate", {
                            required: true,
                          })}
                        />

                        {errors.startdate && (
                          <p className="text-danger">Select a Start Date</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Select End Date</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          autoComplete="off"
                          type="date"
                          {...register("enddate", {
                            required: true,
                          })}
                        />

                        {errors.enddate && (
                          <p className="text-danger">Select a Start Date</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <Button name="Update Session" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default EditSession;
