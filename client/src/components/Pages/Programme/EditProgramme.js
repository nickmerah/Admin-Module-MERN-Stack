import React, { Fragment, useState } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditProgramme = () => {
  const [errmsg, setErrmsg] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  //console.log(data);
  const submitHandler = async (formdata) => {
    const proginfo = {
      programme_id: id,
      programme_name: formdata.progname,
      aprogramme_name: formdata.progcode,
    };

    // console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/programme/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(proginfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    //console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update Form");
    }
    navigate("/programme", {
      state: { msg: `${formdata.progname} Successfully Updated` },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      progname: data.programme_name,
      progcode: data.aprogramme_name,
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
                          <b>Programme Name</b>
                        </label>
                        <input
                          className="form-control form-control-lg"
                          placeholder="Enter Programme Name"
                          name="progname"
                          autoComplete="off"
                          type="text"
                          {...register("progname", {
                            required: true,
                            maxLength: 50,
                          })}
                        />
                        {errors.progname && (
                          <p className="text-danger">
                            Please check the Programme Name
                          </p>
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
                          {...register("progcode", {
                            required: true,
                            maxLength: 50,
                          })}
                        />
                        {errors.progcode && (
                          <p className="text-danger">
                            Please check the Programme Code
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <Button type="submit" name="Update Programme" />
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

export default EditProgramme;
