// Craig's component
// make a get request using axios to 'https://better-professor-app-1.herokuapp.com//api/users/professor
// display the array of professors

import React from "react";
import axios from "axios";
import "./styles/Professors.css";
import { Link } from "react-router-dom";

export default class Professors extends React.Component {
    state = {
        profs: [],
    };

    componentDidMount() {
        axios.get(`https://better-professor-app-1.herokuapp.com/api/users/professor`)
            .then(res => {
                console.log(res.data)
                this.setState({ profs: res.data.data.professors });
            });
    }

    render() {
        return (
            <div className="professor_name-container">
                <form className="professor-form">
                    <h2 className="professor_name-output">
                        {this.state.profs.map(professor => (
                            <li key={professor.id}>{professor.first_name} {professor.last_name} </li>
                        ))}
                    </h2>
                </form>
                <p>Are you a Professor?{" "}
                    <Link className="register-form-link" to="/proflogin">
                        <span>Login</span>
                    </Link>
                </p>

            </div>
        );
    }
}

