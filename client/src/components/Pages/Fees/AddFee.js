import React, { useState } from "react";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";

const AddFee = (props) => {
  const [msg, setMsg] = useState(null);
  const [errcode, setErrcode] = useState(null);

  const fields = props.loadedfields;
  const proglist = props.loadedprog;

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formdata) => {
    const feeinfo = {
      item_id: formdata.field,
      amount: formdata.amount,
      prog_id: formdata.progname,
      f_p_time: 1,
    };
    //console.log(feeinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/appFees`,
      {
        method: "POST",
        body: JSON.stringify(feeinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);

    setMsg(data.msg);
    setErrcode(data.status);

    if (data.status === 200) {
      //clear the form input
      resetField("field");
      resetField("progname");
      resetField("amount");
    }
    props.onAddFee(feeinfo);
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
              <b>Field</b>
            </label>
            <select
              {...register("field", { required: true })}
              className="form-control form-control-lg"
            >
              <option value="">Select Field</option>
              {fields.map((sdata) => {
                return (
                  <option key={sdata.field_id} value={sdata.field_id}>
                    {sdata.field_name}
                  </option>
                );
              })}
            </select>
            {errors.field && (
              <p className="text-danger">Please Select a Field</p>
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
              <b>Amount</b>
            </label>
            <input
              className="form-control form-control-lg"
              placeholder="Enter Amount"
              autoComplete="off"
              type="text"
              {...register("amount", { required: true, maxLength: 7 })}
            />
            {errors.amount && (
              <p className="text-danger">Please check the Amount</p>
            )}
          </div>

          <div className="mb-3">
            <Button name="Add Fee" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddFee;
