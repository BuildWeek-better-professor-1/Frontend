import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import StudentLoginForm from './StudentLoginForm';
import StudentRegisterForm from './StudentRegisterForm';

const ChooseStudent = ({ professorID }) => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        const getStudents = async () => {
            try {
                const { data } = await axios.get(`https://better-professor-app-1.herokuapp.com/api/professor/${professorID}/students?r=true`)
                console.log('sssd', data.data)
                setStudents(data.students)
            } catch (error) {
                console.log(error)
            }

        }
        getStudents()
    }, [])

    // const showStudentLogin = () => {

    // }

    return (
        // students.map(s => <div onClick={showStudentLogin}>s.firstName</div>)
        students.map(s => (
            <Popup
                trigger={<p className="reminder">{s.firstName}</p>}
                modal
            >
                {close => (
                    <>
                        <StudentRegisterForm studentID={s.id} />
                        <button className="modal-close" onClick={close}>
                            X
                          </button>
                    </>
                )}
            </Popup>
        ))
    )

}
export default ChooseStudent