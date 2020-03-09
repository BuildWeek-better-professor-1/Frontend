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
import AddRemindersForm from "./components/AddRemindersForm";
import Professors from "./components/Professors";
import AddStudentsForm from "./components/AddStudentsForm";
import ChooseProfessor from "./components/ChooseProfessor";
import EditProfessorForm from "./components/EditProfessorForm";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Route path="/professors" component={Professors} />
      <Route exact path="/" component={ProfLoginForm} />
      <Route exact path="/proflogin" component={ProfLoginForm} />
      <Route path="/profregister" component={ProfRegisterForm} />
      <Route path="/studentregister" component={StudentRegisterForm} />
      <Route path="/studentlogin" component={StudentLoginForm} />
      <Route path="/addreminders" component={AddRemindersForm} />
      <Route path="/addstudents" component={AddStudentsForm} />
      <Route path="/editprofessor" component={EditProfessorForm} />
      <PrivateRoute
        exact
        path="/professordashboard"
        component={ProfDashboard}
      />
      <PrivateStudentRoute
        exact
        path="/students"
        OtherComponent={ChooseProfessor}
        component={StudentDashBoard}
      />

      <Route path="/signedout" component={SignoutMessage} />
    </div>
  );
};

export default App;
