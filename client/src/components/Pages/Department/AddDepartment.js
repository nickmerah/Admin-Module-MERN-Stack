import React, { useState } from "react";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";

const AddDepartment = (props) => {
  const [msg, setMsg] = useState(null);
  const [errcode, setErrcode] = useState(null);

  const schoollist = props.loadedschool;

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formdata) => {
    const deptinfo = {
      departments_name: formdata.deptname,
      fac_id: formdata.schoolname,
      departments_code: formdata.deptcode,
    };
    //console.log(deptinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/department`,
      {
        method: "POST",
        body: JSON.stringify(deptinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    //console.log(data);

    setMsg(data.msg);
    setErrcode(data.status);

    if (data.status === 200) {
      //clear the form input
      resetField("schoolname");
      resetField("deptname");
      resetField("deptcode");
    }
    props.onAddDepartment(deptinfo);
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
            <select
              {...register("schoolname", { required: true })}
              className="form-control form-control-lg"
            >
              <option value="">Select School</option>
              {schoollist.map((sdata) => {
                return (
                  <option key={sdata.faculties_id} value={sdata.faculties_id}>
                    {sdata.faculties_name}
                  </option>
                );
              })}
            </select>
            {errors.schoolname && (
              <p className="text-danger">Please Select a School Name</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              <b>Department Name</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Department Name"
              autoComplete="off"
              type="text"
              {...register("deptname", { required: true, maxLength: 150 })}
            />
            {errors.deptname && (
              <p className="text-danger">Please check the Department Name</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              <b>Department Code</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Department Code"
              autoComplete="off"
              type="text"
              {...register("deptcode", { required: true, maxLength: 2 })}
            />
            {errors.deptcode && (
              <p className="text-danger">Please check the Department Code</p>
            )}
          </div>

          <div className="mb-3">
            <Button name="Add Department" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDepartment;
