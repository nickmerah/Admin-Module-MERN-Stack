import React, { Fragment, useState } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditSchool = () => {
  const [errmsg, setErrmsg] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  //console.log(data);
  const submitHandler = async (formdata) => {
    const schoolinfo = {
      faculties_id: id,
      faculties_name: formdata.schoolname,
      fcode: formdata.schoolcode,
    };

    // console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/school/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(schoolinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update Form");
    }
    navigate("/school", {
      state: { msg: `${formdata.schoolname} Successfully Updated` },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      schoolname: data.faculties_name,
      schoolcode: data.fcode,
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
                <strong>Edit School </strong>
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
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter School Name"
                          type="text"
                          autoComplete="off"
                          {...register("schoolname", {
                            required: true,
                            maxLength: 50,
                          })}
                        />
                        {errors.schoolname && (
                          <p className="text-danger">
                            Please check the SchoolName
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <b>School Code</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter School Code"
                          autoComplete="off"
                          {...register("schoolcode", {
                            required: true,
                            maxLength: 3,
                          })}
                        />
                        {errors.schoolcode && (
                          <p className="text-danger">
                            Please check the SchoolCode
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <Button name="Update School" />
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

export default EditSchool;
