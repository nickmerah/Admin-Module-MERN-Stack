import React, { useState } from "react";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";

const AddProgramme = (props) => {
  const [msg, setMsg] = useState(null);
  const [errcode, setErrcode] = useState(null);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formdata) => {
    const proginfo = {
      programme_name: formdata.progname,
      aprogramme_name: formdata.progcode,
    };
    // console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/programme`,
      {
        method: "POST",
        body: JSON.stringify(proginfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    setMsg(data.msg);
    setErrcode(data.status);
    //clear the form input
    resetField("progname");
    resetField("progcode");

    props.onAddProgramme(proginfo);
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
              <b>Programme Name</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Programme Name"
              name="progname"
              autoComplete="off"
              type="text"
              {...register("progname", { required: true, maxLength: 50 })}
            />
            {errors.progname && (
              <p className="text-danger">Please check the Programme Name</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">
              <b>Programme Code</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Programme Code"
              autoComplete="off"
              name="progcode"
              type="text"
              {...register("progcode", { required: true, maxLength: 50 })}
            />
            {errors.progcode && (
              <p className="text-danger">Please check the Programme Code</p>
            )}
          </div>

          <div className="mb-3">
            <Button type="submit" name="Add Programme" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProgramme;
