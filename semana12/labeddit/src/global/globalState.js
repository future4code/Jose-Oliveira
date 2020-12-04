import React, { useState } from "react";
import GlobalStateContext from "./globalStateContext";

const GlobalState = (props) =>{
       const [id,setId] = useState("")


       const states = {id}
       const setters = {setId}

       const data = {states,setters}

       return(
        <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
       )

}
export default GlobalState