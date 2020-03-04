import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth'
import { decode } from 'jsonwebtoken'
import axios from 'axios'

const StudentDashBoard = () => {
  const [id, setId] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const { subject } = decode(token)
    setId(subject)


  }, [])

  useEffect(() => {
    const getReminders = async () => {
      try {
        const { data } = await axiosWithAuth().get(`api/students/${id}/reminders`)
        console.log(data)
        

      } catch (error) {
        console.log(error)
      }
    }

    getReminders()
  }, [id])

  return (
    <h1>Student Dash Board</h1>
  );
};

export default StudentDashBoard 