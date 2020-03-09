import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentRegisterForm from './StudentRegisterForm';

const ChooseProfessor = ({getAuth}) => {

    const [professors, setProfessors] = useState([])
    const [students, setStudents] = useState([])
    const [selected, setSelected] = useState(false)
    const [ID, setID] = useState(null)

    useEffect(() => {
        const getProfessors = async () => {
            try {
                const { data } = await axios.get(`https://better-professor-app-1.herokuapp.com/api/users/professor`)

                setProfessors(data.data.professors)
            } catch (error) {
                console.log(error)
            }
        }
        getProfessors()
    }, [])

    const getStudents = async ({ target }) => {
        try {
            const { value } = target
            const { data } = await axios.get(`https://better-professor-app-1.herokuapp.com/api/users/professor/${value}/students?r=true`)
            console.log('sssd', data.data)
            setStudents(data.data.students)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <select
                onChange={getStudents}
            >
                {professors.map(p => <option key={p.id} value={p.id}>{p.first_name}</option>)}
            </select>
            
        {students && 
            <select

                onChange={({target}) => {
                    setSelected(true)
                    setID(target.value)
                }}
            >
                {students && students.map(s => {
                    return (
                        <option key={s.id} value={s.id}>{s.firstName} {s.lastName}</option>
                    )
                })}
            </select>
        }
            {selected &&
               <StudentRegisterForm getAuth={getAuth} studentID={ID}/>
            }
        </>
    )
}

export default ChooseProfessor