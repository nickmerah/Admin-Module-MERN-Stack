import React, { Fragment, useState } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditUser = () => {
  const [errmsg, setErrmsg] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data, grpdata } = location.state;
  //console.log(data);

  const submitHandler = async (formdata) => {
    const userinfo = {
      ad_username: formdata.uname,
      ad_surname: formdata.sname,
      ad_firstname: formdata.fname,
      ad_othernames: formdata.oname,
      ad_email: formdata.email,
      ad_status: formdata.gstatus,
      ad_group: formdata.grp,
    };
    //console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/user/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(userinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update User");
    }
    navigate("/users", {
      state: { msg: `${formdata.uname} Successfully Updated` },
    });
  };

  const changePasswordHandler = async (formdata) => {
    const userinfo = {
      ad_password: formdata.pwd,
    };
    //console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/user/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(userinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update User Password");
    }
    navigate("/users", {
      state: { msg: `${formdata.uname} Successfully Updated` },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      uname: data.ad_username,
      sname: data.ad_surname,
      fname: data.ad_firstname,
      pwd: data.pwd,
      oname: data.ad_othernames,
      email: data.ad_email,
      gstatus: data.ad_status,
      grp: data.ad_group,
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
                <strong>Edit User </strong>
              </h1>

              <div className="row">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="card">
                    <div className="card-body">
                      {errmsg && <p className="text-danger">{errmsg}</p>}
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Username</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Username"
                          autoComplete="off"
                          type="text"
                          {...register("uname", {
                            required: true,
                            maxLength: 150,
                          })}
                        />
                        {errors.uname && (
                          <p className="text-danger">
                            Please check the Username
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Surname</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Surname"
                          autoComplete="off"
                          type="text"
                          {...register("sname", {
                            required: true,
                            maxLength: 150,
                          })}
                        />
                        {errors.sname && (
                          <p className="text-danger">Please check Surname</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          <b>First Name</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter First Name"
                          autoComplete="off"
                          type="text"
                          {...register("fname", {
                            required: true,
                            maxLength: 150,
                          })}
                        />
                        {errors.fname && (
                          <p className="text-danger">
                            Please check the First Name
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Other Name</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Other Name"
                          autoComplete="off"
                          type="text"
                          {...register("oname", { maxLength: 150 })}
                        />
                        {errors.oname && (
                          <p className="text-danger">
                            Please check the Other Name
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Email</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Email"
                          autoComplete="off"
                          type="email"
                          {...register("email", {
                            required: true,
                            maxLength: 150,
                          })}
                        />
                        {errors.email && (
                          <p className="text-danger">Please check the Email</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          <b>Group</b>
                        </label>
                        <select
                          {...register("grp", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Select Group</option>
                          {grpdata.map((sdata) => {
                            return (
                              <option
                                key={sdata.group_id}
                                value={sdata.group_id}
                              >
                                {sdata.group_name}
                              </option>
                            );
                          })}
                        </select>
                        {errors.grp && (
                          <p className="text-danger">Please Select a Group</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Status</b>
                        </label>
                        <select
                          {...register("gstatus", { required: true })}
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
                        {errors.grp && (
                          <p className="text-danger">Please Select a Status</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <Button name="Update User" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <h1 className="h2 mb-3">
                <strong>Change User Password</strong>
              </h1>

              <div className="row">
                <form onSubmit={handleSubmit(changePasswordHandler)}>
                  <div className="card">
                    <div className="card-body">
                      {errmsg && <p className="text-danger">{errmsg}</p>}

                      <div className="mb-3">
                        <label className="form-label">
                          <b>Password</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Password"
                          autoComplete="off"
                          required
                          type="password"
                          {...register("pwd", {
                            minLength: 4,
                            maxLength: 150,
                          })}
                        />
                        {errors.pwd && (
                          <p className="text-danger">
                            Please check your Password
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <Button name="Update Password" />
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

export default EditUser;
