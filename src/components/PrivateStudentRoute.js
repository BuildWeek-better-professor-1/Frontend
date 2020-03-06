import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { axiosWithAuth } from './axiosWithAuth'
import { decode } from 'jsonwebtoken'

const PrivateRoute = ({ component: Component, OtherComponent, ...props }) => {
  const [authorized, setAuthorized] = useState(false)
  const [reminders, setReminders] = useState({})
  const [loading, setLoading] = useState(true)
  const [callMade, setCallMade] = useState(false)

  const token = localStorage.getItem("token")
  const decoded = decode(token)
  console.log(decoded)

  console.log('privateStudentRoute invoked', loading)
  const getAuth = async () => {
    try {
      setLoading(true)
      // setCallMade(true)
      const token = localStorage.getItem("token")
      const { subject } = decode(token)
      // console.log(decoded)
      const { data } = await axiosWithAuth().get(`api/students/${subject}/reminders`)
      // setCallMade(false)
      setReminders(data.data.reminders)
      setAuthorized(true)
      setLoading(false)
      console.log('noerr')
    } catch (error) {
      console.log('ppp',error)
      setAuthorized(false)
      setLoading(false)
    }

  }
  useEffect(() => {

    getAuth()
  }, [])

  // return (<h1>Checking...</h1>)

  return (
    <Route
      {...props}
      render={() => {
        // if (callMade) {
        if (loading) {
          return (<h1>Checking...</h1>)
        }
        if (!loading) {
          if (authorized) {
            return <Component {...props} initialReminders={reminders} />;
          }
          if (!authorized) {
            // return <Redirect to="/studentlogin" />;
            return <OtherComponent {...props} getAuth={getAuth} />
          }
        }
      }
      }
    />
  );
};

export default PrivateRoute;
