import React, { Fragment, useState } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditDepartment = () => {
  const [errmsg, setErrmsg] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data, schooldata } = location.state;
  //console.log(data);

  const submitHandler = async (formdata) => {
    const deptinfo = {
      fac_id: formdata.schoolname,
      departments_name: formdata.deptname,
      departments_code: formdata.deptcode,
    };
    //console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/department/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(deptinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update Department");
    }
    navigate("/department", {
      state: { msg: `${formdata.deptname} Successfully Updated` },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deptcode: data.departments_code,
      deptname: data.departments_name,
      schoolname: data.SchoolInstance.faculties_id,
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
                <strong>Edit Department </strong>
              </h1>

              <div className="row">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="card">
                    <div className="card-body">
                      {errmsg && <p className="text-danger">{errmsg}</p>}
                      <div className="mb-3">
                        <label className="form-label">
                          <b>School Name</b>
                        </label>
                        <select
                          {...register("schoolname", { required: true })}
                          className="form-control form-control-lg"
                        >
                          <option value="">Select School</option>
                          {schooldata.map((sdata) => {
                            return (
                              <option
                                key={sdata.faculties_id}
                                value={sdata.faculties_id}
                              >
                                {sdata.faculties_name}
                              </option>
                            );
                          })}
                        </select>
                        {errors.schoolname && (
                          <p className="text-danger">
                            Please Select a School Name
                          </p>
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
                          {...register("deptname", {
                            required: true,
                            maxLength: 150,
                          })}
                        />
                        {errors.deptname && (
                          <p className="text-danger">
                            Please check the Department Name
                          </p>
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
                          {...register("deptcode", {
                            required: true,
                            maxLength: 2,
                          })}
                        />
                        {errors.deptcode && (
                          <p className="text-danger">
                            Please check the Department Code
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <Button name="Update Department" />
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

export default EditDepartment;
