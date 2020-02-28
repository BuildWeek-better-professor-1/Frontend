import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//component imports
import ProfRegisterForm from "./components/ProfRegisterForm";
import ProfLoginForm from "./components/ProfLoginForm";
import StudentRegisterForm from "./components/StudentRegisterForm";
import StudentLoginForm from "./components/StudentLoginForm";
import PrivateRoute from "./components/PrivateRoute";
import ProfDashboard from "./components/ProfDashboard";

const App = () => {
  return (
    <div className="App">
      <h1>Better Professor Application</h1>
      <Route exact path="/" component={ProfLoginForm} />
      <Route path="/proflogin" component={ProfLoginForm} />
      <Route path="/profregister" component={ProfRegisterForm} />
      <Route path="/studentregister" component={StudentRegisterForm} />
      <Route path="/studentlogin" component={StudentLoginForm} />
      <PrivateRoute
        exact
        path="/professordashboard"
        component={ProfDashboard}
      />
    </div>
  );
};

export default App;
