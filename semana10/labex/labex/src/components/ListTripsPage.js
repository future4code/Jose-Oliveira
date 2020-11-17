import React from 'react'
import {useHistory} from "react-router-dom"



function TripList() {

    const history = useHistory()
   const toTripDetails = () =>{
       history.push("/tripdetails")
   }

  return (
  <div>
     <button onClick={toTripDetails}>TripDetails</button>
  </div>
  )
}

export default TripList;
