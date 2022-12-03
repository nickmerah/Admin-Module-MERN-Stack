import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  Sliders,
  UserPlus,
  Book,
  LogOut,
  Home,
  Users,
  Key,
  List,
  Server,
  DollarSign,
  BookOpen,
  Clipboard,
  Database,
} from "react-feather";
const SideBar = () => {
  return (
    <Fragment>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand">
            <span className="align-middle">NorthWest Admin</span>
          </Link>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Modules</li>

            <li className="sidebar-item active">
              <Link to="/home" className="sidebar-link">
                <Home size={18} />
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-header">Settings</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/schoolinfo">
                <Sliders size={18} />
                <span className="align-middle">Institution Info</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/school">
                <Database size={18} />
                <span className="align-middle">School</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/department">
                <BookOpen size={18} />
                <span className="align-middle">Department</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/programme">
                <Clipboard size={18} />
                <span className="align-middle">Programme</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/cos">
                <Book size={18} />
                <span className="align-middle">Course of Study</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/users">
                <UserPlus size={18} />
                <span className="align-middle">Users</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/appfee">
                <DollarSign size={18} />
                <span className="align-middle">Application Fee</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/session">
                <Server size={18} />
                <span className="align-middle">Session</span>
              </Link>
            </li>

            <li className="sidebar-header">Biodata</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/applicant">
                <Users size={18} />
                <span className="align-middle">View/Edit</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/">
                <Key size={18} />
                <span className="align-middle">Reset Password</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/">
                <List size={18} />
                <span className="align-middle">Application Status</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/">
                <LogOut size={18} />
                <span className="align-middle">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default SideBar;
