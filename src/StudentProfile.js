import React from "react";
import { NavLink } from "react-router-dom";

const StudentProfile = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div>
      <h1>Student Profile Page</h1>
      <p>{id}</p>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
};

export default StudentProfile;
