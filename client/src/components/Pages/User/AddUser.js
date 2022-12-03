import React, { useState } from "react";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";

const AddUser = (props) => {
  const [msg, setMsg] = useState(null);
  const [errcode, setErrcode] = useState(null);

  const grplist = props.loadedgrps;
  const filteredgrplist = grplist.filter((admin) => admin.group_id !== 1);
  //console.log(filteredgrplist);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formdata) => {
    const userinfo = {
      ad_username: formdata.uname,
      ad_password: formdata.pwd,
      ad_title: "Mr",
      ad_surname: formdata.sname,
      ad_firstname: formdata.fname,
      ad_othernames: formdata.oname,
      ad_email: formdata.email,
      ad_status: 0,
      ad_group: formdata.grp,
    };
    //console.log(deptinfo);
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/user`, {
      method: "POST",
      body: JSON.stringify(userinfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    //console.log(data);

    setMsg(data.msg);
    setErrcode(data.status);

    if (data.status === 200) {
      //clear the form input
      resetField("uname");
      resetField("pwd");
      resetField("sname");
      resetField("fname");
      resetField("oname");
      resetField("email");
      resetField("grp");
    }
    props.onAddUser(userinfo);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="card">
        <div className="card-body">
          {msg && (
            <p className={errcode === 500 ? "text-danger" : "text-success"}>
              {msg}
            </p>
          )}

          <div className="mb-3">
            <label className="form-label">
              <b>Username</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Username"
              autoComplete="off"
              type="text"
              {...register("uname", { required: true, maxLength: 150 })}
            />
            {errors.uname && (
              <p className="text-danger">Please check the Username</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              <b>Password</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Password"
              autoComplete="off"
              type="password"
              {...register("pwd", {
                required: true,
                minLength: 4,
                maxLength: 150,
              })}
            />
            {errors.pwd && (
              <p className="text-danger">Please check your Password</p>
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
              {...register("sname", { required: true, maxLength: 150 })}
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
              {...register("fname", { required: true, maxLength: 150 })}
            />
            {errors.fname && (
              <p className="text-danger">Please check the First Name</p>
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
              <p className="text-danger">Please check the Other Name</p>
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
              {...register("email", { required: true, maxLength: 150 })}
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
              {filteredgrplist.map((sdata) => {
                return (
                  <option key={sdata.group_id} value={sdata.group_id}>
                    {sdata.group_name}
                  </option>
                );
              })}
            </select>
            {errors.grp && <p className="text-danger">Please Select a Group</p>}
          </div>

          <div className="mb-3">
            <Button name="Add User" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
