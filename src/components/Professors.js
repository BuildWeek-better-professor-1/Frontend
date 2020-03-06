// Craig's component
// make a get request using axios to 'https://better-professor-app-1.herokuapp.com//api/users/professor
// display the array of professors

import React from "react";
import axios from "axios";


export default class Professors extends React.Component {
    state = {
        profs: [],
    };

    componentDidMount() {
        axios.get(`https://better-professor-app-1.herokuapp.com/api/users/professor`)
            .then(res => {
                console.log(res.data)
                this.setState({ profs: res.data.dat.professors });
            });
    }

    render() {
        return (
            <ul>
                {this.state.profs.map(professor => (
                    <li key={professors.id}>{professors.first_name}</li>
                ))}
            </ul>
        );
    }
}

