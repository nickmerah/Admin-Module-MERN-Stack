import React, { Fragment, useState } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditCos = () => {
  const [errmsg, setErrmsg] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data, deptdata, progdata } = location.state;
  //console.log(data);

  const submitHandler = async (formdata) => {
    const deptinfo = {
      programme_option: formdata.cosname,
      dept_id: formdata.deptname,
      prog_id: formdata.progname,
      exam_date: formdata.examdate,
      exam_time: formdata.examtime,
      admletter_date: formdata.admletadate,
      d_status: formdata.dstatus,
    };
    //console.log(deptinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/cos/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(deptinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update Course of Study");
    }
    navigate("/cos", {
      state: { msg: `${formdata.cosname} Successfully Updated` },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cosname: data.programme_option,
      deptname: data.dept_id,
      progname: data.prog_id,
      examdate: data.exam_date,
      examtime: data.exam_time,
      admletadate: data.admletter_date,
      dstatus: data.d_status,
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
                <strong>Edit Course of Study </strong>
              </h1>

              <div className="row">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="card">
                    <div className="card-body">
                      {errmsg && <p className="text-danger">{errmsg}</p>}
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Course of Study Name</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Course of Study Name"
                          autoComplete="off"
                          type="text"
                          {...register("cosname", {
                            required: true,
                            maxLength: 250,
                          })}
                        />
                        {errors.cosname && (
                          <p className="text-danger">
                            Please check the Course of Study Name
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Department Name</b>
                        </label>
                        <select
                          {...register("deptname", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Select Department</option>
                          {deptdata.map((sdata) => {
                            return (
                              <option
                                key={sdata.departments_id}
                                value={sdata.departments_id}
                              >
                                {sdata.departments_name}
                              </option>
                            );
                          })}
                        </select>
                        {errors.deptname && (
                          <p className="text-danger">
                            Please Select a Department Name
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Programme Name</b>
                        </label>
                        <select
                          {...register("progname", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Select Programme</option>
                          {progdata.map((pdata) => {
                            return (
                              <option
                                key={pdata.programme_id}
                                value={pdata.programme_id}
                              >
                                {pdata.programme_name}
                              </option>
                            );
                          })}
                        </select>
                        {errors.progname && (
                          <p className="text-danger">
                            {" "}
                            Select a Programme Name
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Exam Date</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Exam Date"
                          autoComplete="off"
                          type="text"
                          {...register("examdate", {
                            required: true,
                            maxLength: 100,
                          })}
                        />
                        {errors.examdate && (
                          <p className="text-danger">
                            Please check the Exam Date
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Exam Time</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Exam Time"
                          autoComplete="off"
                          type="text"
                          {...register("examtime", {
                            required: true,
                            maxLength: 100,
                          })}
                        />
                        {errors.examtime && (
                          <p className="text-danger">
                            Please check the Exam Time
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Admission Letter Date</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Admission Letter Date"
                          autoComplete="off"
                          type="text"
                          {...register("admletadate", {
                            required: true,
                            maxLength: 100,
                          })}
                        />
                        {errors.examtime && (
                          <p className="text-danger">
                            Please check the Admission Letter Date
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Status</b>
                        </label>
                        <select
                          {...register("dstatus", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Select Status</option>

                          <option key={1} value={1}>
                            Enabled
                          </option>
                          <option key={0} value={0}>
                            Disabled
                          </option>
                        </select>
                        {errors.dstatus && (
                          <p className="text-danger">Please Select a Status</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <Button name="Update Course of Study" />
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

export default EditCos;
