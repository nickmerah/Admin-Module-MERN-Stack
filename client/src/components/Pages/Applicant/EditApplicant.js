import React, { Fragment, useState, useEffect } from "react";
import Footer from "../../Layouts/Footer";
import SideBar from "../../Layouts/SideBar";
import Header from "../../Layouts/Header";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { fetchStates, fetchLga } from "../../../api";

const EditApplicant = () => {
  const [errmsg, setErrmsg] = useState(null);
  const [getState, setState] = useState([]);
  const [getlga, setlga] = useState([]);
  const [lgas, setlgas] = useState([]);
  const [isLga, setisLga] = useState(1);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;

  useEffect(() => {
    fetchStates()
      .then((response) => {
        setState(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    fetchLga()
      .then((response) => {
        setlga(response.records);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  const drop = {
    State: getState,
    Lga: getlga,
  };

  const changetolga = (e) => {
    let filterlgas = drop.Lga.filter(
      (item) => item.state_id === parseInt(e.target.value)
    );

    setlgas(filterlgas);
    setisLga(0);
  };

  const submitHandler = async (formdata) => {
    const userinfo = {
      ad_username: formdata.uname,
      ad_surname: formdata.sname,
      ad_firstname: formdata.fname,
      ad_othernames: formdata.oname,
      ad_email: formdata.email,
      ad_status: formdata.gstatus,
      ad_group: formdata.grp,
    };
    //console.log(schoolinfo);
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/applicant/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(userinfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.status !== 200) {
      setErrmsg("Unable to Update Applicant");
    }
    navigate("/users", {
      state: { msg: `${formdata.uname} Successfully Updated` },
    });
  };
  console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      surname: data.surname,
      firstname: data.firstname,
      othernames: data.othernames,
      app_no: data.app_no,
      student_email: data.student_email,
      student_homeaddress: data.student_homeaddress,
      student_mobiletel: data.student_mobiletel,
      birthdate: data.birthdate,
      contact_address: data.contact_address,
      gender: data.gender,
      jambno: data.jambno,
      local_gov: data.local_gov,
      marital_status: data.marital_status,
      state_of_origin: data.state_of_origin,
      stdcourse: data.CosInstance.programme_option,
      stdprogramme_id: data.ProgrammeInstance.programme_name,
      std_programmetype: data.std_programmetype,
      next_of_kin: data.next_of_kin,
      nok_address: data.nok_address,
      nok_email: data.nok_email,
      nok_tel: data.nok_tel,
      std_photo: data.std_photo,
      std_custome9: data.std_custome9,
      adm_status: data.adm_status,
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
                <strong>Edit Applicant </strong>
              </h1>

              <div className="row">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="card">
                    <div className="card-body">
                      {errmsg && <p className="text-danger">{errmsg}</p>}
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Application No</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Application No"
                              autoComplete="off"
                              type="text"
                              {...register("app_no", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.app_no && (
                              <p className="text-danger">
                                Please check the Application No
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Jamb No</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Jamb No"
                              autoComplete="off"
                              type="text"
                              {...register("jambno", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.jambno && (
                              <p className="text-danger">
                                Please check Jamb No
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Surname</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Surname"
                              autoComplete="off"
                              type="text"
                              {...register("surname", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.surname && (
                              <p className="text-danger">
                                Please check Surname
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>First Name</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter First Name"
                              autoComplete="off"
                              type="text"
                              {...register("firstname", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.firstname && (
                              <p className="text-danger">
                                Please check First Name
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Other names</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Other names"
                              autoComplete="off"
                              type="text"
                              {...register("othernames", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.othernames && (
                              <p className="text-danger">
                                Please check Other names
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Email</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Email"
                              autoComplete="off"
                              type="email"
                              {...register("student_email", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.student_email && (
                              <p className="text-danger">Please check Email</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Mobile No</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Mobile No"
                              autoComplete="off"
                              type="text"
                              {...register("student_mobiletel", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.student_mobiletel && (
                              <p className="text-danger">
                                Please check the Mobile No
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Date of Birth</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Birth Date"
                              autoComplete="off"
                              type="date"
                              {...register("birthdate", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.birthdate && (
                              <p className="text-danger">
                                Please check Birth Date
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Home Address</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Home Address"
                              autoComplete="off"
                              type="text"
                              {...register("student_homeaddress", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.student_homeaddress && (
                              <p className="text-danger">
                                Please check the Home Address
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Contact Address</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Contact Address"
                              autoComplete="off"
                              type="text"
                              {...register("contact_address", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.contact_address && (
                              <p className="text-danger">
                                Please check Contact Address
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>State of Origin</b>
                            </label>
                            <select
                              name="state_of_origin"
                              onChange={(e) => changetolga(e)}
                              className="form-control form-control-lg"
                            >
                              <option value={data.state_of_origin}>
                                {data.StateInstance.state_name}
                              </option>
                              {drop.State.map((item) => {
                                return (
                                  <option
                                    value={item.state_id}
                                    key={item.state_id}
                                  >
                                    {item.state_name}
                                  </option>
                                );
                              })}
                            </select>

                            {errors.state_of_origin && (
                              <p className="text-danger">
                                Please check State of Origin
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>LGA</b>
                            </label>
                            <select
                              name="local_gov"
                              className="form-control form-control-lg"
                            >
                              {isLga && (
                                <option value={data.local_gov}>
                                  {data.LgaInstance.lga_name}
                                </option>
                              )}

                              {lgas.map((item) => {
                                return (
                                  <option value={item.lga_id} key={item.lga_id}>
                                    {item.lga_name}
                                  </option>
                                );
                              })}
                            </select>

                            {errors.local_gov && (
                              <p className="text-danger">Please check LGA</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Gender</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Gender"
                              autoComplete="off"
                              type="text"
                              {...register("gender", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.gender && (
                              <p className="text-danger">
                                Please check the Gender
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Marital Status</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Marital Status"
                              autoComplete="off"
                              type="text"
                              {...register("marital_status", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.marital_status && (
                              <p className="text-danger">
                                Please check the Marital Status
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Course of Study</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Course of Study"
                              autoComplete="off"
                              type="text"
                              {...register("stdcourse", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.stdcourse && (
                              <p className="text-danger">
                                Please check Course of Study
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Programme</b>
                            </label>
                            <input
                              disabled
                              className="form-control form-control-lg"
                              placeholder="Enter Programme"
                              autoComplete="off"
                              type="text"
                              {...register("stdprogramme_id", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.stdprogramme_id && (
                              <p className="text-danger">
                                Please check Programme
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Next of Kin Name</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Next of Kin Name"
                              autoComplete="off"
                              type="text"
                              {...register("next_of_kin", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.next_of_kin && (
                              <p className="text-danger">
                                Please check Next of Kin Name
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Next of Kin Phone</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Surname"
                              autoComplete="off"
                              type="text"
                              {...register("nok_tel", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.nok_tel && (
                              <p className="text-danger">
                                Please check Next of Kin Phone
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Next of Kin Address</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Next of Kin Address"
                              autoComplete="off"
                              type="text"
                              {...register("nok_address", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.nok_address && (
                              <p className="text-danger">
                                Please check Next of Kin Address
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              <b>Next of Kin Relationship</b>
                            </label>
                            <input
                              className="form-control form-control-lg"
                              placeholder="Enter Next of Kin Relationship"
                              autoComplete="off"
                              type="text"
                              {...register("nok_email", {
                                required: true,
                                maxLength: 150,
                              })}
                            />
                            {errors.nok_email && (
                              <p className="text-danger">
                                Please check Next of Kin Relationship
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Button name="Update Applicant" />
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

export default EditApplicant;
