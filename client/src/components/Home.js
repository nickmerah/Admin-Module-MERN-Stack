import React from "react";
import MyImage from "./img/logo.jpg";
import Button from "./UI/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
      }}
    />
  );

  return (
    <div className="home">
      <main className="d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center">
                  <img
                    src={MyImage}
                    alt="Logo"
                    className="img-fluid rounded-circle"
                    width="132"
                    height="132"
                  />
                </div>
                <div className="text-center mt-4">
                  <h1>NorthWest College of Nursing Sciences </h1>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h3 align="center">Admin Login </h3>
                    <ColoredLine color="black" />
                    <div className="m-sm-4">
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Username</label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter your Username"
                            type="text"
                            {...register("uname", {
                              required: true,
                              maxLength: 50,
                            })}
                          />
                          {errors.uname && <p>Please check the Username</p>}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter your Passkey"
                            type="password"
                            {...register("passkey", {
                              required: true,
                              maxLength: 50,
                            })}
                          />
                          {errors.passkey && <p>Please check the Passkey</p>}
                        </div>
                        <div></div>
                        <div className="text-center mt-3">
                          <Button name="Login" />
                        </div>
                      </form>
                    </div>
                    <div align="right">
                      <Link to="/home">Forget Password</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
