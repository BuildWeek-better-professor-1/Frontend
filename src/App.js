import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//component imports
import ProfRegisterForm from "./components/ProfRegisterForm/index";
import ProfLoginForm from "./components/ProfLoginForm";
import StudentRegisterForm from "./components/StudentRegisterForm";
import StudentLoginForm from "./components/StudentLoginForm";
import PrivateRoute from "./components/PrivateRoute";
import ProfDashboard from "./components/ProfDashboard";
import Navigation from "./components/Navigation";
import PrivateStudentRoute from "./components/PrivateStudentRoute";
import StudentDashBoard from "./components/StudentDashboard";
import SignoutMessage from "./components/SignoutMessage";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={ProfLoginForm} />
      <Route exact path="/proflogin" component={ProfLoginForm} />
      <Route path="/profregister" component={ProfRegisterForm} />
      <Route path="/studentregister" component={StudentRegisterForm} />
      <Route path="/studentlogin" component={StudentLoginForm} />
      <PrivateRoute
        exact
        path="/professordashboard"
        component={ProfDashboard}
      />
      <PrivateStudentRoute
        exact
        path="/students"
        component={StudentDashBoard}
      />

      <Route path="/signedout" component={SignoutMessage} />
    </div>
  );
};

export default App;
