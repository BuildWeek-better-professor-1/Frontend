// Craig's component
// make a get request using axios to 'https://better-professor-app-1.herokuapp.com//api/users/professor
// display the array of professors

import React from "react";
import axios from "axios";
import "./styles/Professors.css";

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
                    <h2>
                        {this.state.profs.map(professor => (
                            <li key={professor.id}>{professor.first_name} {professor.last_name} </li>
                        ))}
                    </h2>
                </form>
            </div>
        );
    }
}

