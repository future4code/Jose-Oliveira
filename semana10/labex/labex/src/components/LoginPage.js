import React from 'react'
import {useHistory} from "react-router-dom"



function Login() {

    const history = useHistory()
    const toCreateTrip =() =>{
       history.push("/createtrip")
    }

  return (
  <div>
     <button onClick={toCreateTrip}>CreateTrip</button>
  </div>
  )
}

export default Login;
