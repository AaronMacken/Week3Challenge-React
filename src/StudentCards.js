import React from "react";
import { NavLink } from "react-router-dom";

const StudentCards = ({ studentObjects, yeet }) => {
  return (
    <div>
      <h2>Student Cards Component</h2>
      {studentObjects.map((currentObject) => {
        return (
          <div key={currentObject.id}>
            <NavLink to={`/students/${currentObject.id}`}>
              <p>{currentObject.name}</p>
            </NavLink>
            <button onClick={() => yeet(currentObject.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default StudentCards;
