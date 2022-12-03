import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";

const School = (loadedinfo) => {
  const [msg, setmsg] = useState(null);
  const [errcode, setErrcode] = useState(null);
  //console.log(loadedinfo.loadedinfo[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skid: loadedinfo.loadedinfo[0].skid,
      schoolname: loadedinfo.loadedinfo[0].schoolname,
      schoolabvname: loadedinfo.loadedinfo[0].schoolabvname,
      schooladdress: loadedinfo.loadedinfo[0].schooladdress,
      schoolemail: loadedinfo.loadedinfo[0].schoolemail,
      appmarkuee: loadedinfo.loadedinfo[0].appmarkuee,
      endreg_date: loadedinfo.loadedinfo[0].endreg_date,
      appendreg_date: loadedinfo.loadedinfo[0].appendreg_date,
    },
  });

  const submitHandler = async (formdata) => {
    const instinfo = {
      skid: formdata.skid,
      schoolname: formdata.schoolname,
      schoolabvname: formdata.schoolabvname,
      schooladdress: formdata.schooladdress,
      schoolemail: formdata.schoolemail,
      appmarkuee: formdata.appmarkuee,
      endreg_date: formdata.endreg_date,
      appendreg_date: formdata.appendreg_date,
    };
    // console.log(instinfo);

    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/institution/${formdata.skid}`,
      {
        method: "PUT",
        body: JSON.stringify(instinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    //console.log(data);
    setErrcode(data.status);
    if (data.status !== 200) {
      setmsg("Unable to Update Institution info");
    }

    setmsg("Successfully Updated Institution info");
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="wrapper">
        <SideBar />
        <div className="main">
          <Header />
          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h2 mb-3">
                <strong>School Information</strong>
              </h1>

              <div className="card">
                <div className="card-body">
                  {msg && (
                    <p
                      className={
                        errcode !== 200 ? "text-danger" : "text-success"
                      }
                    >
                      {msg}
                    </p>
                  )}

                  <div className="mb-3">
                    <label className="form-label">
                      <b>School Name</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter School Name"
                      type="text"
                      {...register("schoolname", {
                        required: true,
                      })}
                    />
                    {errors.schoolname && <p>Please check the SchoolName</p>}

                    <input type="hidden" {...register("skid")} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>School Abbreviation Name</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter School Abbreviated Name"
                      {...register("schoolabvname", {
                        required: true,
                      })}
                    />

                    {errors.schoolcode && (
                      <p>Please check the Abbreviated Name</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>School Address</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter School Address"
                      {...register("schooladdress", {
                        required: true,
                      })}
                    />

                    {errors.schoolcode && <p>Please check the Address</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>School Email</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter School Email"
                      {...register("schoolemail", {
                        required: true,
                      })}
                    />
                    {errors.schoolname && <p>Please check the School Email</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Registration End Date (MAINTAIN THIS FORMAT)</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter School Registration End Date"
                      {...register("endreg_date", {
                        required: true,
                      })}
                    />
                    {errors.endreg_date && (
                      <p>Enter School Registration End Date</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Marquee for Applicants</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="appmarkuee"
                      placeholder="Enter Marquee for Applicants"
                      {...register("appmarkuee", {
                        required: true,
                      })}
                    />
                    {errors.appmarkuee && <p>Enter Marquee for Applicants</p>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>
                        Registration End Date for Applicant (MAINTAIN THIS
                        FORMAT)
                      </b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Registration End Date for Applicant"
                      {...register("appendreg_date", {
                        required: true,
                      })}
                    />
                    {errors.appendreg_date && (
                      <p>Registration End Date for Applicant</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <Button
                      type="submit"
                      name="Update Institution Information"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </form>
  );
};

export default School;
