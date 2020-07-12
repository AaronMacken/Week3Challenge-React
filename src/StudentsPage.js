import React, { Component } from "react";
import StudentCards from "./StudentCards";
import { NavLink } from "react-router-dom";

export default class StudentsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          name: "Aaron",
          id: 1,
        },
        {
          name: "Steve",
          id: 5000,
        },
        {
          name: "Freddy",
          id: 9000,
        },
      ],
    };
    // this.yeetStudent = this.yeetStudent.bind(this)
  }

  yeetStudent = (id) => {
    let filteredStudents = this.state.students.filter((currentStudent) => {
      if (currentStudent.id !== id) {
        return currentStudent;
      }
    });
    this.setState({
      students: filteredStudents,
    });
    console.log("Yeet");
  };

  render() {
    return (
      <div>
        <h1>Students Page</h1>
        <StudentCards studentObjects={this.state.students} yeet={this.yeetStudent} />

        <NavLink to="/contact">Go to contact page</NavLink>
      </div>
    );
  }
}
