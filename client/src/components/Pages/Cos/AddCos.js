import React, { useState } from "react";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";

const AddCos = (props) => {
  const [msg, setMsg] = useState(null);
  const [errcode, setErrcode] = useState(null);

  const deptlist = props.loadeddept;
  const proglist = props.loadedprog;

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formdata) => {
    const cosinfo = {
      dept_id: formdata.deptname,
      prog_id: formdata.progname,
      programme_option: formdata.cosname,
      duration: 2,
      d_status: 0,
    };
    //console.log(deptinfo);
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/cos`, {
      method: "POST",
      body: JSON.stringify(cosinfo),
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
      resetField("schoolname");
      resetField("deptname");
      resetField("deptcode");
    }
    props.onAddCos(cosinfo);
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
              <b>Department Name</b>
            </label>
            <select
              {...register("deptname", { required: true })}
              className="form-control form-control-lg"
            >
              <option value="">Select Department</option>
              {deptlist.map((sdata) => {
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
              <p className="text-danger">Please Select a Department Name</p>
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
              {proglist.map((pdata) => {
                return (
                  <option key={pdata.programme_id} value={pdata.programme_id}>
                    {pdata.programme_name}
                  </option>
                );
              })}
            </select>
            {errors.progname && (
              <p className="text-danger"> Select a Programme Name</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">
              <b>Course of Study Name</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Course of Study Name"
              autoComplete="off"
              type="text"
              {...register("cosname", { required: true, maxLength: 150 })}
            />
            {errors.cosname && (
              <p className="text-danger">
                Please check the Course of Study Name
              </p>
            )}
          </div>

          <div className="mb-3">
            <Button name="Add Course of Study" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCos;
