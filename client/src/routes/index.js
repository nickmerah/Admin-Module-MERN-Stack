import React from "react";

// Containers
const Layout = React.lazy(() => import("../components/Layout"));

// Pages
const Home = React.lazy(() => import("../components/Home"));
const Page404 = React.lazy(() => import("../components/PageNotFound"));
const School = React.lazy(() => import("../components/Pages/School/School"));
const EditSchool = React.lazy(() =>
  import("../components/Pages/School/EditSchool")
);
const EditDepartment = React.lazy(() =>
  import("../components/Pages/Department/EditDepartment")
);
const InstInfo = React.lazy(() =>
  import("../components/Pages/InstitutionInfo/InstInfo")
);
const Department = React.lazy(() =>
  import("../components/Pages/Department/Department")
);
const Programme = React.lazy(() =>
  import("../components/Pages/Programme/Programme")
);

const EditProgramme = React.lazy(() =>
  import("../components/Pages/Programme/EditProgramme")
);

const Cos = React.lazy(() => import("../components/Pages/Cos/Cos"));

const EditCos = React.lazy(() => import("../components/Pages/Cos/EditCos"));

const User = React.lazy(() => import("../components/Pages/User/User"));

const EditUser = React.lazy(() => import("../components/Pages/User/EditUser"));

const AppFees = React.lazy(() => import("../components/Pages/Fees/Fees"));

const EditAppFees = React.lazy(() =>
  import("../components/Pages/Fees/EditFee")
);

const Session = React.lazy(() => import("../components/Pages/Session/Session"));

const EditSession = React.lazy(() =>
  import("../components/Pages/Session/EditSession")
);

const Applicant = React.lazy(() =>
  import("../components/Pages/Applicant/Applicant")
);

const EditApplicant = React.lazy(() =>
  import("../components/Pages/Applicant/EditApplicant")
);

export {
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
};
