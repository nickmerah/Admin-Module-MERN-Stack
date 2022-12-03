import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadindSpinner/LoadingSpinner";
import {
  Layout,
  Home,
  Page404,
  InstInfo,
  School,
  EditSchool,
  Department,
  EditDepartment,
  Programme,
  EditProgramme,
  Cos,
  EditCos,
  User,
  EditUser,
  AppFees,
  EditAppFees,
  Session,
  EditSession,
  Applicant,
  EditApplicant,
} from "./index";

import TestAPI from "../components/TestAPI";

const Router = () => {
  return (
    <Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" name="Home" element={<Home />} />
          <Route exact path="/home" name="DashBoard" element={<Layout />} />
          <Route
            exact
            path="/schoolinfo"
            name="SchoolInfo"
            element={<InstInfo />}
          />
          <Route exact path="/school" name="Schools" element={<School />} />
          <Route
            exact
            path="/school/:id"
            name="Edit School"
            element={<EditSchool />}
          />
          <Route
            exact
            path="/department"
            name="Departments"
            element={<Department />}
          />
          <Route
            exact
            path="/department/:id"
            name="Edit Department"
            element={<EditDepartment />}
          />
          <Route
            exact
            path="/programme"
            name="Programme"
            element={<Programme />}
          />
          <Route
            exact
            path="/programme/:id"
            name="Edit Programme"
            element={<EditProgramme />}
          />
          <Route exact path="/cos" name="Cos" element={<Cos />} />
          <Route exact path="/cos/:id" name="Edit Cos" element={<EditCos />} />
          <Route exact path="/users" name="User" element={<User />} />
          <Route
            exact
            path="/user/:id"
            name="Edit User"
            element={<EditUser />}
          />
          <Route exact path="/appfee" name="Fee" element={<AppFees />} />
          <Route
            exact
            path="/appfee/:id"
            name="Edit Fee"
            element={<EditAppFees />}
          />
          <Route exact path="/session" name="Session" element={<Session />} />
          <Route
            exact
            path="/session/:id"
            name="Edit Session"
            element={<EditSession />}
          />
          <Route
            exact
            path="/applicant"
            name="Applicant"
            element={<Applicant />}
          />
          <Route
            exact
            path="/applicant/:id"
            name="Edit Applicant"
            element={<EditApplicant />}
          />
          <Route path="/testapi" name="404" element={<TestAPI />} />
          <Route path="*" name="404" element={<Page404 />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default Router;
