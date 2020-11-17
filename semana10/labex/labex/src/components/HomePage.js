import React from 'react'
import {useHistory} from "react-router-dom"



function Home() {

    const history = useHistory()

    const toLoginPage = () =>{
        history.push("/login")
    }

    const toAplication = () =>{
        history.push("/aplication")
    }

    const toTripList = ()=>{
         history.push("/listtrip")
    }

  return (
  <div>
      <button onClick={toLoginPage}>LoginPage</button>
      <button onClick={toAplication}>AplicationFormPage</button>
      <button onClick={toTripList}>triplist</button>
  </div>
  )
}

export default Home;
