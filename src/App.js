import React from "react";
import "./App.css";
import StudentsPage from "./StudentsPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ContactPage from "./ContactPage";
import StudentProfile from "./StudentProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StudentsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/students/:id" component={StudentProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
