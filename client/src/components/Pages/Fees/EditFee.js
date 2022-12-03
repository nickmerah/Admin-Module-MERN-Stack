import React, { Fragment, useState } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditFee = () => {
  const [errmsg, setErrmsg] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data, fielddata, progdata } = location.state;
  //console.log(data);

  const submitHandler = async (formdata) => {
    const feeinfo = {
      item_id: formdata.field,
      amount: formdata.amount,
      prog_id: formdata.progname,
      f_p_time: 1,
    };
    //console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/appFees/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(feeinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update Fee");
    }
    navigate("/appfee", {
      state: { msg: `Fee Successfully Updated` },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      field: data.item_id,
      progname: data.prog_id,
      amount: data.amount,
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
                          <b>Field</b>
                        </label>
                        <select
                          {...register("field", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Select Field</option>
                          {fielddata.map((sdata) => {
                            return (
                              <option
                                key={sdata.field_id}
                                value={sdata.field_id}
                              >
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
                          <p className="text-danger">Select a Programme Name</p>
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
                          {...register("amount", {
                            required: true,
                            maxLength: 7,
                          })}
                        />
                        {errors.amount && (
                          <p className="text-danger">Please check the Amount</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <Button name="Update Fee Details" />
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

export default EditFee;
