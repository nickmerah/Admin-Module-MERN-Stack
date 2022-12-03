import React, { useState } from "react";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";

const AddSchool = (props) => {
  const [msg, setMsg] = useState(null);
  const [errcode, setErrcode] = useState(null);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formdata) => {
    const schoolinfo = {
      faculties_name: formdata.schoolname,
      fcode: formdata.schoolcode,
    };
    // console.log(schoolinfo);
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/school`, {
      method: "POST",
      body: JSON.stringify(schoolinfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);

    setMsg(data.msg);
    setErrcode(data.status);
    //clear the form input
    resetField("schoolname");
    resetField("schoolcode");

    props.onAddSchool(schoolinfo);
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
              <b>School Name</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter School Name"
              name="schoolname"
              autoComplete="off"
              type="text"
              {...register("schoolname", { required: true, maxLength: 50 })}
            />
            {errors.schoolname && (
              <p className="text-danger">Please check the SchoolName</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              <b>School Code</b>
            </label>
            <input
              className="form-control form-control-lg"
              name="schoolcode"
              autoComplete="off"
              placeholder="Enter School Code"
              {...register("schoolcode", { required: true, maxLength: 3 })}
            />

            {errors.schoolcode && (
              <p className="text-danger">Please check the SchoolCode</p>
            )}
          </div>

          <div className="mb-3">
            <Button name="Add School" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddSchool;
